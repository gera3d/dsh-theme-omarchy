import { giantsTheme } from './giants.ts'
import { diabloTheme } from './diablo.ts'
import { zondaTheme } from './zonda.ts'
import { jadeTheme } from './jade.ts'
import type { OmarchyThemeDefinition } from './types.ts'

export * from './types.ts'
export { giantsTheme, diabloTheme, zondaTheme, jadeTheme }

export const OMARCHY_THEMES: OmarchyThemeDefinition[] = [
  giantsTheme,
  diabloTheme,
  zondaTheme,
  jadeTheme,
]
