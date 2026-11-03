import type { OmarchyThemeDefinition } from './types.ts'

/**
 * Omarchy Zonda Zoom
 * Inspired by the Pagani Zonda HH.
 * Cool carbon-black surfaces, warm ivory typography, muted steel surfaces, and icy blue accents.
 */
export const zondaTheme: OmarchyThemeDefinition = {
  id: 'omarchy-zonda',
  name: 'Zonda Zoom',
  subtitle: 'Pagani Zonda HH carbon-black & icy blue',
  colorScheme: 'dark',
  accentColor: '#6b7fbe',
  bgPreview: '#141313',
  tokens: {
    // Canvas & Surfacing
    '--dsw-alias-bg-base': '#141313',
    '--dsw-alias-bg-layer-1': '#201f1f',
    '--dsw-alias-bg-layer-2': '#2c2b2b',
    '--dsw-alias-bg-layer-3': '#0a0a0a',
    '--dsw-alias-bg-overlay': '#201f1f',
    '--dsw-specific-sidebar-fill': '#0f0e0e',
    '--dsw-specific-bubble': '#201f1f',
    '--dsw-specific-bubble-highlight': '#2c2b2b',
    '--dsw-specific-input-major': '#0f0e0e',

    // Markdown & Code Blocks
    '--dsw-alias-markdown-code-block': '#0a0a0a',
    '--dsw-alias-markdown-code-block-banner': '#0f0e0e',
    '--dsw-alias-markdown-inline-code': '#181717',
    '--dsw-alias-markdown-tag': '#2c2b2b',

    // Typography
    '--dsw-alias-label-primary': '#F6F4EC',
    '--dsw-alias-label-secondary': '#a39c9c',
    '--dsw-alias-label-tertiary': '#706b6b',
    '--dsw-alias-label-caption': '#858080',

    // Brand & Interactivity
    '--dsw-alias-brand-primary': '#6b7fbe',
    '--dsw-alias-link': '#8ea1e2',
    '--dsw-alias-button-primary-fill': '#6b7fbe',
    '--dsw-alias-button-primary-hover': '#7f93d3',
    '--dsw-alias-interactive-bg-hover': 'rgba(246, 244, 236, 0.07)',
    '--dsw-alias-interactive-bg-active': 'rgba(246, 244, 236, 0.12)',
    '--dsw-alias-bg-document-selection': 'rgba(56, 72, 115, 0.65)',

    // Borders & Hairlines
    '--dsw-alias-border-l1': 'rgba(246, 244, 236, 0.08)',
    '--dsw-alias-border-l2': 'rgba(246, 244, 236, 0.15)',
    '--dsw-alias-border-l3': 'rgba(246, 244, 236, 0.22)',
    '--dsw-alias-border-l4': 'rgba(246, 244, 236, 0.30)',
    '--dsw-elevation-stroke-color': 'rgba(246, 244, 236, 0.12)',

    // Scrollbars
    '--dsh-scrollbar-thumb': '#2c2b2b',
    '--dsh-scrollbar-thumb-hover': '#403e3e',
  },
}
