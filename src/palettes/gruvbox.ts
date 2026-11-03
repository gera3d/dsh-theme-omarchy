import type { OmarchyThemeDefinition } from './types.ts'

/**
 * Gruvbox Dark: Legendary Retro Terminal Warmth
 * Deep warm dark wood canvas with vibrant orange, forest olive, and parchment text.
 */
export const gruvboxTheme: OmarchyThemeDefinition = {
  id: 'omarchy-gruvbox',
  name: 'Gruvbox Dark',
  subtitle: 'Retro terminal warmth with vibrant orange & parchment',
  colorScheme: 'dark',
  accentColor: '#fe8019',
  bgPreview: '#282828',
  tokens: {
    // Canvas & Surfacing
    '--dsw-alias-bg-base': '#282828',
    '--dsw-alias-bg-layer-1': '#32302f',
    '--dsw-alias-bg-layer-2': '#3c3836',
    '--dsw-alias-bg-layer-3': '#1d2021',
    '--dsw-alias-bg-overlay': '#32302f',
    '--dsw-specific-sidebar-fill': '#1d2021',
    '--dsw-specific-bubble': '#32302f',
    '--dsw-specific-bubble-highlight': '#3c3836',
    '--dsw-specific-input-major': '#1d2021',

    // Markdown & Code Blocks
    '--dsw-alias-markdown-code-block': '#1d2021',
    '--dsw-alias-markdown-code-block-banner': '#17191a',
    '--dsw-alias-markdown-inline-code': '#3c3836',
    '--dsw-alias-markdown-tag': '#504945',

    // Typography
    '--dsw-alias-label-primary': '#ebdbb2',
    '--dsw-alias-label-secondary': '#d5c4a1',
    '--dsw-alias-label-tertiary': '#928374',
    '--dsw-alias-label-caption': '#a89984',

    // Brand & Interactivity
    '--dsw-alias-brand-primary': '#fe8019',
    '--dsw-alias-link': '#b8bb26',
    '--dsw-alias-button-primary-fill': '#fe8019',
    '--dsw-alias-button-primary-hover': '#ff9b44',
    '--dsw-alias-interactive-bg-hover': 'rgba(254, 128, 25, 0.08)',
    '--dsw-alias-interactive-bg-active': 'rgba(254, 128, 25, 0.16)',
    '--dsw-alias-bg-document-selection': 'rgba(80, 73, 69, 0.7)',

    // Borders & Hairlines
    '--dsw-alias-border-l1': 'rgba(235, 219, 178, 0.10)',
    '--dsw-alias-border-l2': 'rgba(235, 219, 178, 0.18)',
    '--dsw-alias-border-l3': 'rgba(235, 219, 178, 0.28)',
    '--dsw-alias-border-l4': 'rgba(235, 219, 178, 0.38)',
    '--dsw-elevation-stroke-color': 'rgba(254, 128, 25, 0.15)',

    // Scrollbars
    '--dsh-scrollbar-thumb': '#3c3836',
    '--dsh-scrollbar-thumb-hover': '#504945',
  },
}
