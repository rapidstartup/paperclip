export declare function firstNonEmptyLine(text: string): string;
export declare function parseAgentBrowserOutput(stdout: string, stderr: string): {
    summary: string;
    errorMessage: string | null;
    resultJson: Record<string, unknown> | null;
};
export declare function isAgentBrowserUnknownSessionError(stdout: string, stderr: string): boolean;
//# sourceMappingURL=parse.d.ts.map