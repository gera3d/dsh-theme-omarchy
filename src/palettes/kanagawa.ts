import type { OmarchyThemeDefinition } from './types.ts'

/**
 * Kanagawa: Japanese Woodblock & Sumi-e Ink Aesthetic
 * Inspired by Katsushika Hokusai, deep sumi-e ink canvas with wave blue and spring green.
 */
export const kanagawaTheme: OmarchyThemeDefinition = {
  id: 'omarchy-kanagawa',
  name: 'Kanagawa',
  subtitle: 'Japanese sumi-e ink canvas with wave blue & spring green',
  colorScheme: 'dark',
  accentColor: '#7e9cd8',
  bgPreview: '#1f1f28',
  tokens: {
    // Canvas & Surfacing
    '--dsw-alias-bg-base': '#1f1f28',
    '--dsw-alias-bg-layer-1': '#2a2a37',
    '--dsw-alias-bg-layer-2': '#363646',
    '--dsw-alias-bg-layer-3': '#16161d',
    '--dsw-alias-bg-overlay': '#2a2a37',
    '--dsw-specific-sidebar-fill': '#16161d',
    '--dsw-specific-bubble': '#2a2a37',
    '--dsw-specific-bubble-highlight': '#363646',
    '--dsw-specific-input-major': '#16161d',

    // Markdown & Code Blocks
    '--dsw-alias-markdown-code-block': '#16161d',
    '--dsw-alias-markdown-code-block-banner': '#121217',
    '--dsw-alias-markdown-inline-code': '#363646',
    '--dsw-alias-markdown-tag': '#49473e',

    // Typography
    '--dsw-alias-label-primary': '#dcd7ba',
    '--dsw-alias-label-secondary': '#c8c093',
    '--dsw-alias-label-tertiary': '#727169',
    '--dsw-alias-label-caption': '#8a8980',

    // Brand & Interactivity
    '--dsw-alias-brand-primary': '#7e9cd8',
    '--dsw-alias-link': '#98bb6c',
    '--dsw-alias-button-primary-fill': '#7e9cd8',
    '--dsw-alias-button-primary-hover': '#8eafe8',
    '--dsw-alias-interactive-bg-hover': 'rgba(126, 156, 216, 0.08)',
    '--dsw-alias-interactive-bg-active': 'rgba(126, 156, 216, 0.16)',
    '--dsw-alias-bg-document-selection': 'rgba(45, 79, 103, 0.7)',

    // Borders & Hairlines
    '--dsw-alias-border-l1': 'rgba(220, 215, 186, 0.10)',
    '--dsw-alias-border-l2': 'rgba(220, 215, 186, 0.18)',
    '--dsw-alias-border-l3': 'rgba(220, 215, 186, 0.28)',
    '--dsw-alias-border-l4': 'rgba(220, 215, 186, 0.38)',
    '--dsw-elevation-stroke-color': 'rgba(126, 156, 216, 0.15)',

    // Scrollbars
    '--dsh-scrollbar-thumb': '#363646',
    '--dsh-scrollbar-thumb-hover': '#54546d',
  },
}
