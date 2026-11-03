import type { OmarchyThemeDefinition } from './types.ts'

/**
 * Rosé Pine: Soho Minimalist Aesthetic
 * Dark pine canvas with soft rose, seafoam teal, and lilac iris accents.
 */
export const rosePineTheme: OmarchyThemeDefinition = {
  id: 'omarchy-rosepine',
  name: 'Rosé Pine',
  subtitle: 'Soho minimalist pine canvas with soft rose & seafoam',
  colorScheme: 'dark',
  accentColor: '#ebbcba',
  bgPreview: '#191724',
  tokens: {
    // Canvas & Surfacing
    '--dsw-alias-bg-base': '#191724',
    '--dsw-alias-bg-layer-1': '#1f1d2e',
    '--dsw-alias-bg-layer-2': '#26233a',
    '--dsw-alias-bg-layer-3': '#14121d',
    '--dsw-alias-bg-overlay': '#1f1d2e',
    '--dsw-specific-sidebar-fill': '#14121d',
    '--dsw-specific-bubble': '#1f1d2e',
    '--dsw-specific-bubble-highlight': '#26233a',
    '--dsw-specific-input-major': '#14121d',

    // Markdown & Code Blocks
    '--dsw-alias-markdown-code-block': '#14121d',
    '--dsw-alias-markdown-code-block-banner': '#100e17',
    '--dsw-alias-markdown-inline-code': '#26233a',
    '--dsw-alias-markdown-tag': '#393552',

    // Typography
    '--dsw-alias-label-primary': '#e0def4',
    '--dsw-alias-label-secondary': '#908caa',
    '--dsw-alias-label-tertiary': '#6e6a86',
    '--dsw-alias-label-caption': '#7c7895',

    // Brand & Interactivity
    '--dsw-alias-brand-primary': '#ebbcba',
    '--dsw-alias-link': '#9ccfd8',
    '--dsw-alias-button-primary-fill': '#ebbcba',
    '--dsw-alias-button-primary-hover': '#f0c8c6',
    '--dsw-alias-interactive-bg-hover': 'rgba(235, 188, 186, 0.08)',
    '--dsw-alias-interactive-bg-active': 'rgba(235, 188, 186, 0.16)',
    '--dsw-alias-bg-document-selection': 'rgba(42, 40, 62, 0.7)',

    // Borders & Hairlines
    '--dsw-alias-border-l1': 'rgba(235, 188, 186, 0.10)',
    '--dsw-alias-border-l2': 'rgba(235, 188, 186, 0.18)',
    '--dsw-alias-border-l3': 'rgba(235, 188, 186, 0.28)',
    '--dsw-alias-border-l4': 'rgba(235, 188, 186, 0.38)',
    '--dsw-elevation-stroke-color': 'rgba(235, 188, 186, 0.15)',

    // Scrollbars
    '--dsh-scrollbar-thumb': '#26233a',
    '--dsh-scrollbar-thumb-hover': '#393552',
  },
}
