import type { OmarchyThemeDefinition } from './types.ts'

/**
 * Nord: Arctic North-Bluish Clean Minimalism
 * Polar night dark canvas with frost cyan and snow storm white text.
 */
export const nordTheme: OmarchyThemeDefinition = {
  id: 'omarchy-nord',
  name: 'Nord',
  subtitle: 'Arctic polar night with frost cyan & snow white',
  colorScheme: 'dark',
  accentColor: '#88c0d0',
  bgPreview: '#2e3440',
  tokens: {
    // Canvas & Surfacing
    '--dsw-alias-bg-base': '#2e3440',
    '--dsw-alias-bg-layer-1': '#3b4252',
    '--dsw-alias-bg-layer-2': '#434c5e',
    '--dsw-alias-bg-layer-3': '#242933',
    '--dsw-alias-bg-overlay': '#3b4252',
    '--dsw-specific-sidebar-fill': '#242933',
    '--dsw-specific-bubble': '#3b4252',
    '--dsw-specific-bubble-highlight': '#434c5e',
    '--dsw-specific-input-major': '#242933',

    // Markdown & Code Blocks
    '--dsw-alias-markdown-code-block': '#242933',
    '--dsw-alias-markdown-code-block-banner': '#1e222a',
    '--dsw-alias-markdown-inline-code': '#3b4252',
    '--dsw-alias-markdown-tag': '#4c566a',

    // Typography
    '--dsw-alias-label-primary': '#eceff4',
    '--dsw-alias-label-secondary': '#d8dee9',
    '--dsw-alias-label-tertiary': '#4c566a',
    '--dsw-alias-label-caption': '#9aa3b2',

    // Brand & Interactivity
    '--dsw-alias-brand-primary': '#88c0d0',
    '--dsw-alias-link': '#81a1c1',
    '--dsw-alias-button-primary-fill': '#88c0d0',
    '--dsw-alias-button-primary-hover': '#8fbcbb',
    '--dsw-alias-interactive-bg-hover': 'rgba(136, 192, 208, 0.08)',
    '--dsw-alias-interactive-bg-active': 'rgba(136, 192, 208, 0.16)',
    '--dsw-alias-bg-document-selection': 'rgba(67, 76, 94, 0.7)',

    // Borders & Hairlines
    '--dsw-alias-border-l1': 'rgba(136, 192, 208, 0.10)',
    '--dsw-alias-border-l2': 'rgba(136, 192, 208, 0.18)',
    '--dsw-alias-border-l3': 'rgba(136, 192, 208, 0.28)',
    '--dsw-alias-border-l4': 'rgba(136, 192, 208, 0.38)',
    '--dsw-elevation-stroke-color': 'rgba(136, 192, 208, 0.15)',

    // Scrollbars
    '--dsh-scrollbar-thumb': '#434c5e',
    '--dsh-scrollbar-thumb-hover': '#4c566a',
  },
}
