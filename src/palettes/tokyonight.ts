import type { OmarchyThemeDefinition } from './types.ts'

/**
 * Tokyo Night: Omarchy's Flagship Default Theme
 * Deep midnight navy canvas with vibrant neon cyan, electric blue, and violet accents.
 */
export const tokyoNightTheme: OmarchyThemeDefinition = {
  id: 'omarchy-tokyonight',
  name: 'Tokyo Night',
  subtitle: "Omarchy's default: midnight navy, cyan & violet",
  colorScheme: 'dark',
  accentColor: '#7aa2f7',
  bgPreview: '#1a1b26',
  tokens: {
    // Canvas & Surfacing
    '--dsw-alias-bg-base': '#1a1b26',
    '--dsw-alias-bg-layer-1': '#1f2335',
    '--dsw-alias-bg-layer-2': '#24283b',
    '--dsw-alias-bg-layer-3': '#16161e',
    '--dsw-alias-bg-overlay': '#1f2335',
    '--dsw-specific-sidebar-fill': '#13141c',
    '--dsw-specific-bubble': '#1f2335',
    '--dsw-specific-bubble-highlight': '#292e42',
    '--dsw-specific-input-major': '#16161e',

    // Markdown & Code Blocks
    '--dsw-alias-markdown-code-block': '#16161e',
    '--dsw-alias-markdown-code-block-banner': '#13141c',
    '--dsw-alias-markdown-inline-code': '#24283b',
    '--dsw-alias-markdown-tag': '#292e42',

    // Typography
    '--dsw-alias-label-primary': '#c0caf5',
    '--dsw-alias-label-secondary': '#9aa5ce',
    '--dsw-alias-label-tertiary': '#565f89',
    '--dsw-alias-label-caption': '#787c99',

    // Brand & Interactivity
    '--dsw-alias-brand-primary': '#7aa2f7',
    '--dsw-alias-link': '#7dcfff',
    '--dsw-alias-button-primary-fill': '#7aa2f7',
    '--dsw-alias-button-primary-hover': '#89b4fa',
    '--dsw-alias-interactive-bg-hover': 'rgba(122, 162, 247, 0.08)',
    '--dsw-alias-interactive-bg-active': 'rgba(122, 162, 247, 0.16)',
    '--dsw-alias-bg-document-selection': 'rgba(40, 52, 87, 0.7)',

    // Borders & Hairlines
    '--dsw-alias-border-l1': 'rgba(122, 162, 247, 0.10)',
    '--dsw-alias-border-l2': 'rgba(122, 162, 247, 0.18)',
    '--dsw-alias-border-l3': 'rgba(122, 162, 247, 0.28)',
    '--dsw-alias-border-l4': 'rgba(122, 162, 247, 0.38)',
    '--dsw-elevation-stroke-color': 'rgba(122, 162, 247, 0.15)',

    // Scrollbars
    '--dsh-scrollbar-thumb': '#292e42',
    '--dsh-scrollbar-thumb-hover': '#3b4261',
  },
}
