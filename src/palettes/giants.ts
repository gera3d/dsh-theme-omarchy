import type { OmarchyThemeDefinition } from './types.ts'

/**
 * Omarchy Giants: "Standing on the shoulders of giants"
 * Created by DHH as a tribute to computer science pioneers.
 * Warm, low-contrast sepia/cream ink on aged paper with dusty terracotta accents.
 */
export const giantsTheme: OmarchyThemeDefinition = {
  id: 'omarchy-giants',
  name: 'Giants',
  subtitle: 'Ink on aged paper, terracotta accent',
  colorScheme: 'dark',
  accentColor: '#97786d',
  bgPreview: '#27241f',
  tokens: {
    // Canvas & Surfacing
    '--dsw-alias-bg-base': '#27241f',
    '--dsw-alias-bg-layer-1': '#33302a',
    '--dsw-alias-bg-layer-2': '#3d3a35',
    '--dsw-alias-bg-layer-3': '#141210',
    '--dsw-alias-bg-overlay': '#33302a',
    '--dsw-specific-sidebar-fill': '#1d1b17',
    '--dsw-specific-bubble': '#33302a',
    '--dsw-specific-bubble-highlight': '#3d3a35',
    '--dsw-specific-input-major': '#1d1b17',

    // Markdown & Code Blocks
    '--dsw-alias-markdown-code-block': '#141210',
    '--dsw-alias-markdown-code-block-banner': '#1d1b17',
    '--dsw-alias-markdown-inline-code': '#1d1b17',
    '--dsw-alias-markdown-tag': '#3d3a35',

    // Typography
    '--dsw-alias-label-primary': '#E1D5C2',
    '--dsw-alias-label-secondary': '#8a857a',
    '--dsw-alias-label-tertiary': '#666157',
    '--dsw-alias-label-caption': '#7a756b',

    // Brand & Interactivity
    '--dsw-alias-brand-primary': '#97786d',
    '--dsw-alias-link': '#c29a8c',
    '--dsw-alias-button-primary-fill': '#97786d',
    '--dsw-alias-button-primary-hover': '#aa887b',
    '--dsw-alias-interactive-bg-hover': 'rgba(225, 213, 194, 0.07)',
    '--dsw-alias-interactive-bg-active': 'rgba(225, 213, 194, 0.12)',
    '--dsw-alias-bg-document-selection': 'rgba(79, 72, 64, 0.65)',

    // Borders & Hairlines
    '--dsw-alias-border-l1': 'rgba(225, 213, 194, 0.08)',
    '--dsw-alias-border-l2': 'rgba(225, 213, 194, 0.15)',
    '--dsw-alias-border-l3': 'rgba(225, 213, 194, 0.22)',
    '--dsw-alias-border-l4': 'rgba(225, 213, 194, 0.30)',
    '--dsw-elevation-stroke-color': 'rgba(225, 213, 194, 0.12)',

    // Scrollbars
    '--dsh-scrollbar-thumb': '#3d3a35',
    '--dsh-scrollbar-thumb-hover': '#4f4840',
  },
}
