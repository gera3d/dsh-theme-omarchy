import type { Context } from '@deepseek-ai/cordis'

export const name = 'dsh-theme-omarchy'

/**
 * Host-side lifecycle for the dsh-theme-omarchy bundle.
 * The client counterpart (lib/client.js) handles UI registration,
 * palette injection, and interactive settings integration.
 */
export function apply(ctx: Context): void {
  // Theme bundle host entry point.
  // Serves as the Cordis lifecycle anchor for the patch insertion.
}
