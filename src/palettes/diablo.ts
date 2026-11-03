import type { OmarchyThemeDefinition } from './types.ts'

/**
 * Omarchy Diablo Dreams
 * Inspired by the Lamborghini Diablo 6.0.
 * Dark golden-brown surfaces, warm cream typography, muted bronze elements, and dusty terracotta accents.
 */
export const diabloTheme: OmarchyThemeDefinition = {
  id: 'omarchy-diablo',
  name: 'Diablo Dreams',
  subtitle: 'Lamborghini Diablo 6.0 golden-brown & cream',
  colorScheme: 'dark',
  accentColor: '#ab6a57',
  bgPreview: '#100e0a',
  tokens: {
    // Canvas & Surfacing
    '--dsw-alias-bg-base': '#100e0a',
    '--dsw-alias-bg-layer-1': '#1c1a16',
    '--dsw-alias-bg-layer-2': '#282623',
    '--dsw-alias-bg-layer-3': '#080705',
    '--dsw-alias-bg-overlay': '#1c1a16',
    '--dsw-specific-sidebar-fill': '#0c0b08',
    '--dsw-specific-bubble': '#1c1a16',
    '--dsw-specific-bubble-highlight': '#282623',
    '--dsw-specific-input-major': '#0c0b08',

    // Markdown & Code Blocks
    '--dsw-alias-markdown-code-block': '#080705',
    '--dsw-alias-markdown-code-block-banner': '#0c0b08',
    '--dsw-alias-markdown-inline-code': '#14120e',
    '--dsw-alias-markdown-tag': '#282623',

    // Typography
    '--dsw-alias-label-primary': '#FEF2C9',
    '--dsw-alias-label-secondary': '#817a6b',
    '--dsw-alias-label-tertiary': '#595346',
    '--dsw-alias-label-caption': '#6d6657',

    // Brand & Interactivity
    '--dsw-alias-brand-primary': '#ab6a57',
    '--dsw-alias-link': '#d48872',
    '--dsw-alias-button-primary-fill': '#ab6a57',
    '--dsw-alias-button-primary-hover': '#c27964',
    '--dsw-alias-interactive-bg-hover': 'rgba(254, 242, 201, 0.07)',
    '--dsw-alias-interactive-bg-active': 'rgba(254, 242, 201, 0.12)',
    '--dsw-alias-bg-document-selection': 'rgba(115, 94, 70, 0.65)',

    // Borders & Hairlines
    '--dsw-alias-border-l1': 'rgba(254, 242, 201, 0.08)',
    '--dsw-alias-border-l2': 'rgba(254, 242, 201, 0.15)',
    '--dsw-alias-border-l3': 'rgba(254, 242, 201, 0.22)',
    '--dsw-alias-border-l4': 'rgba(254, 242, 201, 0.30)',
    '--dsw-elevation-stroke-color': 'rgba(254, 242, 201, 0.12)',

    // Scrollbars
    '--dsh-scrollbar-thumb': '#282623',
    '--dsh-scrollbar-thumb-hover': '#3d3831',
  },
}
