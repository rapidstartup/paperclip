import type { AdapterConfigFieldsProps } from "../types";
import {
  Field,
  DraftInput,
  DraftTextarea,
  DraftNumberInput,
  ToggleField,
} from "../../components/agent-config-primitives";
import { ChoosePathButton } from "../../components/PathInstructionsModal";

const inputClass =
  "w-full rounded-md border border-border px-2.5 py-1.5 bg-transparent outline-none text-sm font-mono placeholder:text-muted-foreground/40";

export function AgentBrowserConfigFields({
  isCreate,
  values,
  set,
  config,
  eff,
  mark,
}: AdapterConfigFieldsProps) {
  return (
    <>
      <Field
        label="Agent instructions file"
        hint="Optional markdown instructions file injected before prompt rendering."
      >
        <div className="flex items-center gap-2">
          <DraftInput
            value={
              isCreate
                ? values!.instructionsFilePath ?? ""
                : eff(
                    "adapterConfig",
                    "instructionsFilePath",
                    String(config.instructionsFilePath ?? ""),
                  )
            }
            onCommit={(v) =>
              isCreate
                ? set!({ instructionsFilePath: v })
                : mark("adapterConfig", "instructionsFilePath", v || undefined)
            }
            immediate
            className={inputClass}
            placeholder="C:\\path\\to\\AGENTS.md"
          />
          <ChoosePathButton />
        </div>
      </Field>

      <Field
        label="Provider"
        hint="Optional remote browser provider: browserless, browserbase, browseruse, or kernel."
      >
        <DraftInput
          value={
            isCreate
              ? values!.provider ?? ""
              : eff("adapterConfig", "provider", String(config.provider ?? ""))
          }
          onCommit={(v) =>
            isCreate
              ? set!({ provider: v })
              : mark("adapterConfig", "provider", v || undefined)
          }
          immediate
          className={inputClass}
          placeholder="browserless"
        />
      </Field>

      <Field
        label="Session name template"
        hint="Deterministic per-agent session key. Supports {{agentId}} and {{companyId}}."
      >
        <DraftInput
          value={
            isCreate
              ? values!.sessionNameTemplate ?? ""
              : eff(
                  "adapterConfig",
                  "sessionNameTemplate",
                  String(config.sessionNameTemplate ?? ""),
                )
          }
          onCommit={(v) =>
            isCreate
              ? set!({ sessionNameTemplate: v })
              : mark("adapterConfig", "sessionNameTemplate", v || undefined)
          }
          immediate
          className={inputClass}
          placeholder="{{companyId}}-{{agentId}}"
        />
      </Field>

      <Field
        label="Profile dir template"
        hint="Optional profile directory path. Relative values resolve from cwd."
      >
        <div className="flex items-center gap-2">
          <DraftInput
            value={
              isCreate
                ? values!.profileDirTemplate ?? ""
                : eff(
                    "adapterConfig",
                    "profileDirTemplate",
                    String(config.profileDirTemplate ?? ""),
                  )
            }
            onCommit={(v) =>
              isCreate
                ? set!({ profileDirTemplate: v })
                : mark("adapterConfig", "profileDirTemplate", v || undefined)
            }
            immediate
            className={inputClass}
            placeholder="profiles\\{{companyId}}\\{{agentId}}"
          />
          <ChoosePathButton />
        </div>
      </Field>

      <Field
        label="Allowed domains"
        hint="Optional comma-separated domain allowlist passed to agent-browser."
      >
        <DraftInput
          value={
            isCreate
              ? values!.allowedDomains ?? ""
              : eff("adapterConfig", "allowedDomains", String(config.allowedDomains ?? ""))
          }
          onCommit={(v) =>
            isCreate
              ? set!({ allowedDomains: v })
              : mark(
                  "adapterConfig",
                  "allowedDomains",
                  v
                    ? v
                        .split(",")
                        .map((item) => item.trim())
                        .filter(Boolean)
                    : undefined,
                )
          }
          immediate
          className={inputClass}
          placeholder="docs.example.com, app.example.com"
        />
      </Field>

      <Field
        label="Subcommand"
        hint="agent-browser subcommand to run each heartbeat."
      >
        <DraftInput
          value={
            isCreate
              ? values!.subcommand ?? ""
              : eff("adapterConfig", "subcommand", String(config.subcommand ?? ""))
          }
          onCommit={(v) =>
            isCreate
              ? set!({ subcommand: v })
              : mark("adapterConfig", "subcommand", v || undefined)
          }
          immediate
          className={inputClass}
          placeholder="snapshot"
        />
      </Field>

      <Field
        label="Subcommand args"
        hint="Comma-separated args appended after subcommand."
      >
        <DraftInput
          value={
            isCreate
              ? values!.subcommandArgs ?? ""
              : eff(
                  "adapterConfig",
                  "subcommandArgs",
                  Array.isArray(config.subcommandArgs)
                    ? (config.subcommandArgs as string[]).join(", ")
                    : String(config.subcommandArgs ?? ""),
                )
          }
          onCommit={(v) =>
            isCreate
              ? set!({ subcommandArgs: v })
              : mark(
                  "adapterConfig",
                  "subcommandArgs",
                  v
                    ? v
                        .split(",")
                        .map((item) => item.trim())
                        .filter(Boolean)
                    : undefined,
                )
          }
          immediate
          className={inputClass}
          placeholder="-i, --json"
        />
      </Field>

      <Field
        label="Target URL template"
        hint="Optional URL appended as final argument after subcommand args."
      >
        <DraftInput
          value={
            isCreate
              ? values!.targetUrlTemplate ?? ""
              : eff(
                  "adapterConfig",
                  "targetUrlTemplate",
                  String(config.targetUrlTemplate ?? ""),
                )
          }
          onCommit={(v) =>
            isCreate
              ? set!({ targetUrlTemplate: v })
              : mark("adapterConfig", "targetUrlTemplate", v || undefined)
          }
          immediate
          className={inputClass}
          placeholder="https://example.com"
        />
      </Field>

      <Field
        label="Stdin template"
        hint="Optional stdin payload. Supports template variables."
      >
        <DraftTextarea
          value={
            isCreate
              ? values!.stdinTemplate ?? ""
              : eff("adapterConfig", "stdinTemplate", String(config.stdinTemplate ?? ""))
          }
          onCommit={(v) =>
            isCreate
              ? set!({ stdinTemplate: v })
              : mark("adapterConfig", "stdinTemplate", v || undefined)
          }
          immediate
          placeholder="Optional payload sent to stdin"
          minRows={3}
        />
      </Field>

      <Field
        label="Action policy path"
        hint="Optional policy file path forwarded via --action-policy."
      >
        <div className="flex items-center gap-2">
          <DraftInput
            value={
              isCreate
                ? values!.actionPolicyPath ?? ""
                : eff("adapterConfig", "actionPolicyPath", String(config.actionPolicyPath ?? ""))
            }
            onCommit={(v) =>
              isCreate
                ? set!({ actionPolicyPath: v })
                : mark("adapterConfig", "actionPolicyPath", v || undefined)
            }
            immediate
            className={inputClass}
            placeholder="C:\\path\\to\\policy.yml"
          />
          <ChoosePathButton />
        </div>
      </Field>

      <Field
        label="Max output"
        hint="Optional max output token/character budget forwarded via --max-output."
      >
        <DraftNumberInput
          value={
            isCreate
              ? Number(values!.maxOutput ?? 0)
              : eff("adapterConfig", "maxOutput", Number(config.maxOutput ?? 0))
          }
          onCommit={(v) =>
            isCreate
              ? set!({ maxOutput: v })
              : mark("adapterConfig", "maxOutput", v > 0 ? v : undefined)
          }
          immediate
          className={inputClass}
        />
      </Field>

      <ToggleField
        label="Headed browser"
        hint="Runs with --headed for local debugging."
        checked={
          isCreate
            ? Boolean(values!.headed)
            : eff("adapterConfig", "headed", Boolean(config.headed))
        }
        onChange={(v) =>
          isCreate
            ? set!({ headed: v })
            : mark("adapterConfig", "headed", v)
        }
      />

      <ToggleField
        label="Prompt to stdin"
        hint="Send rendered prompt to stdin."
        checked={
          isCreate
            ? Boolean(values!.promptToStdin)
            : eff("adapterConfig", "promptToStdin", Boolean(config.promptToStdin))
        }
        onChange={(v) =>
          isCreate
            ? set!({ promptToStdin: v })
            : mark("adapterConfig", "promptToStdin", v)
        }
      />

      <ToggleField
        label="Append prompt as CLI arg"
        hint="Appends the rendered prompt as the final command argument."
        checked={
          isCreate
            ? Boolean(values!.appendPromptAsArg)
            : eff("adapterConfig", "appendPromptAsArg", Boolean(config.appendPromptAsArg))
        }
        onChange={(v) =>
          isCreate
            ? set!({ appendPromptAsArg: v })
            : mark("adapterConfig", "appendPromptAsArg", v)
        }
      />

      <ToggleField
        label="Content boundaries"
        hint="Enable agent-browser content boundaries guardrails."
        checked={
          isCreate
            ? Boolean(values!.contentBoundaries)
            : eff("adapterConfig", "contentBoundaries", Boolean(config.contentBoundaries))
        }
        onChange={(v) =>
          isCreate
            ? set!({ contentBoundaries: v })
            : mark("adapterConfig", "contentBoundaries", v)
        }
      />
    </>
  );
}
