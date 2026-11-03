import React from 'react'
import type { Context } from '@deepseek-ai/cordis'
import { OMARCHY_THEMES } from '../palettes/index.ts'
import { OmarchyThemeSelector } from './selector.tsx'
import selectorCss from './styles.css?raw'
import omarchySystemCss from './omarchy-theme.css?raw'

export const inject = ['theme', 'slots']

interface ThemeSnapshot {
  preference: string
  active?: { id: string }
}

interface ClientContext extends Context {
  theme: {
    getTheme(): ThemeSnapshot
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
 * Injects the complete Omarchy design system (atmospheric lighting,
 * tiling window borders, floating Raycast/Walker command bar, tactile cards),
 * registers Omarchy palettes into ctx.theme, and attaches the visual
 * palette picker to General settings.
 */
export function apply(ctx: ClientContext): void {
  // 1. Inject component and full design system stylesheets
  ctx.effect(() => {
    if (typeof document === 'undefined') return
    const tag = document.createElement('style')
    tag.dataset.plugin = 'dsh-theme-omarchy'
    tag.textContent = `${selectorCss}\n\n${omarchySystemCss}`
    document.head.appendChild(tag)
    return () => {
      tag.remove()
    }
  }, 'dsh-theme-omarchy: stylesheet')

  // 2. Synchronize active theme with document body attribute for deep styling
  const syncBodyTheme = (snapshot: ThemeSnapshot) => {
    if (typeof document === 'undefined') return
    const activeId = snapshot.preference || snapshot.active?.id
    if (activeId && activeId.startsWith('omarchy-')) {
      document.body.dataset.omarchyTheme = activeId
    } else {
      delete document.body.dataset.omarchyTheme
    }
  }

  ctx.effect(() => {
    try {
      syncBodyTheme(ctx.theme.getTheme())
    } catch {}

    const listener = (snapshot: ThemeSnapshot) => {
      syncBodyTheme(snapshot)
    }

    ctx.on('theme/change', listener)
    return () => {
      if (typeof document !== 'undefined') {
        delete document.body.dataset.omarchyTheme
      }
    }
  }, 'dsh-theme-omarchy: sync body theme')

  // 3. Register all Omarchy themes into the theme runtime
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

  // 4. Mount interactive theme picker in Settings -> General
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
