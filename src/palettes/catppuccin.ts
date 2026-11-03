import type { OmarchyThemeDefinition } from './types.ts'

/**
 * Catppuccin Mocha: Beloved Developer Pastel Aesthetic
 * Velvety dark slate canvas with pastel mauve, sapphire blue, and warm peach.
 */
export const catppuccinTheme: OmarchyThemeDefinition = {
  id: 'omarchy-catppuccin',
  name: 'Catppuccin Mocha',
  subtitle: 'Velvety slate with pastel mauve & sapphire',
  colorScheme: 'dark',
  accentColor: '#cba6f7',
  bgPreview: '#1e1e2e',
  tokens: {
    // Canvas & Surfacing
    '--dsw-alias-bg-base': '#1e1e2e',
    '--dsw-alias-bg-layer-1': '#252538',
    '--dsw-alias-bg-layer-2': '#313244',
    '--dsw-alias-bg-layer-3': '#181825',
    '--dsw-alias-bg-overlay': '#252538',
    '--dsw-specific-sidebar-fill': '#11111b',
    '--dsw-specific-bubble': '#252538',
    '--dsw-specific-bubble-highlight': '#313244',
    '--dsw-specific-input-major': '#181825',

    // Markdown & Code Blocks
    '--dsw-alias-markdown-code-block': '#181825',
    '--dsw-alias-markdown-code-block-banner': '#11111b',
    '--dsw-alias-markdown-inline-code': '#313244',
    '--dsw-alias-markdown-tag': '#45475a',

    // Typography
    '--dsw-alias-label-primary': '#cdd6f4',
    '--dsw-alias-label-secondary': '#a6adc8',
    '--dsw-alias-label-tertiary': '#6c7086',
    '--dsw-alias-label-caption': '#7f849c',

    // Brand & Interactivity
    '--dsw-alias-brand-primary': '#cba6f7',
    '--dsw-alias-link': '#89b4fa',
    '--dsw-alias-button-primary-fill': '#cba6f7',
    '--dsw-alias-button-primary-hover': '#d9bdf9',
    '--dsw-alias-interactive-bg-hover': 'rgba(203, 166, 247, 0.08)',
    '--dsw-alias-interactive-bg-active': 'rgba(203, 166, 247, 0.16)',
    '--dsw-alias-bg-document-selection': 'rgba(69, 71, 90, 0.7)',

    // Borders & Hairlines
    '--dsw-alias-border-l1': 'rgba(203, 166, 247, 0.10)',
    '--dsw-alias-border-l2': 'rgba(203, 166, 247, 0.18)',
    '--dsw-alias-border-l3': 'rgba(203, 166, 247, 0.28)',
    '--dsw-alias-border-l4': 'rgba(203, 166, 247, 0.38)',
    '--dsw-elevation-stroke-color': 'rgba(203, 166, 247, 0.15)',

    // Scrollbars
    '--dsh-scrollbar-thumb': '#313244',
    '--dsh-scrollbar-thumb-hover': '#45475a',
  },
}
