import type { OmarchyThemeDefinition } from './types.ts'
import { tokyoNightTheme } from './tokyonight.ts'
import { catppuccinTheme } from './catppuccin.ts'
import { nordTheme } from './nord.ts'
import { gruvboxTheme } from './gruvbox.ts'
import { rosePineTheme } from './rosepine.ts'
import { kanagawaTheme } from './kanagawa.ts'
import { giantsTheme } from './giants.ts'

export * from './types.ts'
export {
  tokyoNightTheme,
  catppuccinTheme,
  nordTheme,
  gruvboxTheme,
  rosePineTheme,
  kanagawaTheme,
  giantsTheme,
}

/**
 * Curated authentic Omarchy theme lineup.
 * Tokyo Night is the signature default of Omarchy desktop.
 */
export const OMARCHY_THEMES: OmarchyThemeDefinition[] = [
  tokyoNightTheme,
  catppuccinTheme,
  nordTheme,
  gruvboxTheme,
  rosePineTheme,
  kanagawaTheme,
]

export const DEFAULT_OMARCHY_THEME = tokyoNightTheme
