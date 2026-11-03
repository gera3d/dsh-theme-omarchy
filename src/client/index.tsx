import React from 'react'
import type { Context } from '@deepseek-ai/cordis'
import { OMARCHY_THEMES } from '../palettes/index.ts'
import { OmarchyThemeSelector } from './selector.tsx'
import css from './styles.css?raw'

export const inject = ['theme', 'slots']

interface ClientContext extends Context {
  theme: {
    getTheme(): { preference: string; active?: { id: string } }
    setTheme(id: string): void
    register(definition: {
      id: string
      colorScheme: 'light' | 'dark'
      tokens: Record<string, string>
    }): () => void
    setFontFamily?(role: string, list: string): void
  }
  slots: {
    register(
      descriptor: {
        name: string
        id?: string
        key?: string
        order?: number
        locale?: string
      },
      component: React.ComponentType<any>
    ): () => void
    inject(name: string, callback: () => void): void
  }
}

/**
 * Client plugin entry point for dsh-theme-omarchy.
 * Registers Omarchy palettes into ctx.theme and attaches the visual
 * palette picker to the General settings view.
 */
export function apply(ctx: ClientContext): void {
  // 1. Inject component stylesheet
  ctx.effect(() => {
    if (typeof document === 'undefined') return
    const tag = document.createElement('style')
    tag.dataset.plugin = 'dsh-theme-omarchy'
    tag.textContent = css
    document.head.appendChild(tag)
    return () => {
      tag.remove()
    }
  }, 'dsh-theme-omarchy: stylesheet')

  // 2. Register all Omarchy themes into the theme runtime
  for (const item of OMARCHY_THEMES) {
    ctx.effect(() => {
      try {
        const disposer = ctx.theme.register({
          id: item.id,
          colorScheme: item.colorScheme,
          tokens: item.tokens,
        })
        return disposer
      } catch (err) {
        console.warn(`[dsh-theme-omarchy] Theme "${item.id}" registration note:`, err)
        return () => {}
      }
    }, `dsh-theme-omarchy: register ${item.id}`)
  }

  // 3. Mount interactive theme picker in Settings -> General
  ctx.slots.inject('settings.general.item', () => {
    ctx.slots.register(
      {
        name: 'settings.general.item',
        id: 'omarchy-themes',
        order: 10.5,
      },
      () => <OmarchyThemeSelector theme={ctx.theme} />
    )
  })
}
