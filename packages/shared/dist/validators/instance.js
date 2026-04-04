import { z } from "zod";
import { DEFAULT_FEEDBACK_DATA_SHARING_PREFERENCE } from "../types/feedback.js";
import { feedbackDataSharingPreferenceSchema } from "./feedback.js";
export const instanceGeneralSettingsSchema = z.object({
    censorUsernameInLogs: z.boolean().default(false),
    keyboardShortcuts: z.boolean().default(false),
    feedbackDataSharingPreference: feedbackDataSharingPreferenceSchema.default(DEFAULT_FEEDBACK_DATA_SHARING_PREFERENCE),
}).strict();
export const patchInstanceGeneralSettingsSchema = instanceGeneralSettingsSchema.partial();
export const instanceExperimentalSettingsSchema = z.object({
    enableIsolatedWorkspaces: z.boolean().default(false),
    autoRestartDevServerWhenIdle: z.boolean().default(false),
}).strict();
export const patchInstanceExperimentalSettingsSchema = instanceExperimentalSettingsSchema.partial();
//# sourceMappingURL=instance.js.map