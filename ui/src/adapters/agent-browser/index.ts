import type { UIAdapterModule } from "../types";
import {
  buildAgentBrowserConfig,
  parseAgentBrowserStdoutLine,
} from "@paperclipai/adapter-agent-browser/ui";
import { AgentBrowserConfigFields } from "./config-fields";

export const agentBrowserUIAdapter: UIAdapterModule = {
  type: "agent_browser",
  label: "Agent Browser",
  parseStdoutLine: parseAgentBrowserStdoutLine,
  ConfigFields: AgentBrowserConfigFields,
  buildAdapterConfig: buildAgentBrowserConfig,
};
