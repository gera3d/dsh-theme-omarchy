import type { OmarchyThemeDefinition } from './types.ts'

/**
 * Omarchy Jade Horse
 * Inspired by Chinese Year of the Horse motifs.
 * Deep pine/black-green surfaces, pale celadon typography, and vivid nephrite jade accents.
 */
export const jadeTheme: OmarchyThemeDefinition = {
  id: 'omarchy-jade',
  name: 'Jade Horse',
  subtitle: 'Year of the Horse deep pine & nephrite jade',
  colorScheme: 'dark',
  accentColor: '#5b9e7d',
  bgPreview: '#0e1411',
  tokens: {
    // Canvas & Surfacing
    '--dsw-alias-bg-base': '#0e1411',
    '--dsw-alias-bg-layer-1': '#18201b',
    '--dsw-alias-bg-layer-2': '#212c26',
    '--dsw-alias-bg-layer-3': '#050807',
    '--dsw-alias-bg-overlay': '#18201b',
    '--dsw-specific-sidebar-fill': '#090e0c',
    '--dsw-specific-bubble': '#18201b',
    '--dsw-specific-bubble-highlight': '#212c26',
    '--dsw-specific-input-major': '#090e0c',

    // Markdown & Code Blocks
    '--dsw-alias-markdown-code-block': '#050807',
    '--dsw-alias-markdown-code-block-banner': '#090e0c',
    '--dsw-alias-markdown-inline-code': '#111714',
    '--dsw-alias-markdown-tag': '#212c26',

    // Typography
    '--dsw-alias-label-primary': '#E8F0EA',
    '--dsw-alias-label-secondary': '#79887e',
    '--dsw-alias-label-tertiary': '#546158',
    '--dsw-alias-label-caption': '#647268',

    // Brand & Interactivity
    '--dsw-alias-brand-primary': '#5b9e7d',
    '--dsw-alias-link': '#7ec4a1',
    '--dsw-alias-button-primary-fill': '#5b9e7d',
    '--dsw-alias-button-primary-hover': '#6eb391',
    '--dsw-alias-interactive-bg-hover': 'rgba(232, 240, 234, 0.07)',
    '--dsw-alias-interactive-bg-active': 'rgba(232, 240, 234, 0.12)',
    '--dsw-alias-bg-document-selection': 'rgba(45, 78, 62, 0.65)',

    // Borders & Hairlines
    '--dsw-alias-border-l1': 'rgba(232, 240, 234, 0.08)',
    '--dsw-alias-border-l2': 'rgba(232, 240, 234, 0.15)',
    '--dsw-alias-border-l3': 'rgba(232, 240, 234, 0.22)',
    '--dsw-alias-border-l4': 'rgba(232, 240, 234, 0.30)',
    '--dsw-elevation-stroke-color': 'rgba(232, 240, 234, 0.12)',

    // Scrollbars
    '--dsh-scrollbar-thumb': '#212c26',
    '--dsh-scrollbar-thumb-hover': '#324038',
  },
}
