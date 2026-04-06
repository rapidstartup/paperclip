#!/bin/sh
set -e

# Capture runtime UID/GID from environment variables, defaulting to 1000
PUID=${USER_UID:-1000}
PGID=${USER_GID:-1000}

# Adjust the node user's UID/GID if they differ from the runtime request.
changed=0

if [ "$(id -u node)" -ne "$PUID" ]; then
    echo "Updating node UID to $PUID"
    usermod -o -u "$PUID" node
    changed=1
fi

if [ "$(id -g node)" -ne "$PGID" ]; then
    echo "Updating node GID to $PGID"
    groupmod -o -g "$PGID" node
    usermod -g "$PGID" node
    changed=1
fi

# Ensure runtime directories exist and are writable by the node user.
# Railway volumes can retain prior ownership across deploys.
mkdir -p /paperclip /paperclip/instances/default/data /paperclip/.local /paperclip/.config

if [ "$changed" = "1" ]; then
    chown -R node:node /paperclip
else
    if ! gosu node test -w /paperclip; then
        chown -R node:node /paperclip
    else
        # Narrow repair for common write targets to avoid unnecessary recursive chown.
        chown -R node:node /paperclip/instances/default/data /paperclip/.local /paperclip/.config 2>/dev/null || true
    fi
fi

exec gosu node "$@"
