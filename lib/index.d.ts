import { Context } from "@deepseek-ai/cordis";
//#region src/index.d.ts
declare const name = "dsh-theme-omarchy";
/**
 * Host-side lifecycle for the dsh-theme-omarchy bundle.
 * The client counterpart (lib/client.js) handles UI registration,
 * palette injection, and interactive settings integration.
 */
declare function apply(ctx: Context): void;
//#endregion
export { apply, name };