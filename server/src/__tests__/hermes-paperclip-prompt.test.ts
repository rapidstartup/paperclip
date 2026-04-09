import { describe, expect, it } from "vitest";
import { shouldReplaceHermesPromptForApiAuth } from "../adapters/hermes-paperclip-prompt.js";

describe("shouldReplaceHermesPromptForApiAuth", () => {
  it("replaces empty, null, or missing template", () => {
    expect(shouldReplaceHermesPromptForApiAuth(undefined)).toBe(true);
    expect(shouldReplaceHermesPromptForApiAuth(null)).toBe(true);
    expect(shouldReplaceHermesPromptForApiAuth("")).toBe(true);
    expect(shouldReplaceHermesPromptForApiAuth("   ")).toBe(true);
  });

  it("replaces upstream-style template with curl but no auth headers", () => {
    const broken = `Use curl for \`curl -s "{{paperclipApiUrl}}/companies/x/issues"\``;
    expect(shouldReplaceHermesPromptForApiAuth(broken)).toBe(true);
  });

  it("keeps template that already mentions Bearer or PAPERCLIP_API_KEY", () => {
    expect(
      shouldReplaceHermesPromptForApiAuth(
        'curl -H "Authorization: Bearer $PAPERCLIP_API_KEY" "{{paperclipApiUrl}}/x"',
      ),
    ).toBe(false);
    expect(
      shouldReplaceHermesPromptForApiAuth(
        'curl "{{paperclipApiUrl}}/x" with $PAPERCLIP_API_KEY in header',
      ),
    ).toBe(false);
  });

  it("keeps non-curl custom templates that mention paperclip URL", () => {
    expect(
      shouldReplaceHermesPromptForApiAuth("Call the Paperclip REST API at {{paperclipApiUrl}} via SDK."),
    ).toBe(false);
  });

  it("ignores non-string values", () => {
    expect(shouldReplaceHermesPromptForApiAuth(123)).toBe(false);
  });
});
