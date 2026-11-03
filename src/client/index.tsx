import React from 'react'
import type { Context } from '@deepseek-ai/cordis'
import { OMARCHY_THEMES, DEFAULT_OMARCHY_THEME, type OmarchyThemeDefinition } from '../palettes/index.ts'
import { OmarchyThemeSelector, applyThemeDirectly } from './selector.tsx'
import selectorCss from './styles.css?raw'
import omarchySystemCss from './omarchy-theme.css?raw'

const STORAGE_KEY = 'dsh-omarchy-active-theme'

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
      colorScheme?: 'dark' | 'light'
      tokens?: Record<string, string>
    }): () => void
  }
  slots: {
    register(
      options: {
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
 * Injects authentic Omarchy design system (atmospheric lighting,
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

  // 2. Synchronize active theme with document body attribute and persist to localStorage
  const syncBodyTheme = (targetId?: string) => {
    if (typeof document === 'undefined') return
    const activeId = targetId || localStorage.getItem(STORAGE_KEY) || DEFAULT_OMARCHY_THEME.id
    const foundTheme = OMARCHY_THEMES.find((t) => t.id === activeId)
    if (foundTheme) {
      applyThemeDirectly(foundTheme)
    } else {
      delete document.body.dataset.omarchyTheme
    }
  }

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

  // 4. Initial theme synchronization & persistence listener
  ctx.effect(() => {
    try {
      const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
      const current = ctx.theme.getTheme()
      const activeId = stored || current.preference || current.active?.id || DEFAULT_OMARCHY_THEME.id
      syncBodyTheme(activeId)
      if (stored && stored.startsWith('omarchy-')) {
        ctx.theme.setTheme(stored)
      }
    } catch {}

    const listener = (snapshot: ThemeSnapshot) => {
      const nextId = snapshot.preference || snapshot.active?.id
      if (nextId && nextId.startsWith('omarchy-')) {
        syncBodyTheme(nextId)
      }
    }

    ctx.on('theme/change', listener)
    return () => {
      if (typeof document !== 'undefined') {
        delete document.body.dataset.omarchyTheme
      }
    }
  }, 'dsh-theme-omarchy: sync body theme')

  // 5. Mount interactive theme picker in Settings -> General
  ctx.slots.inject('settings.general.item', () => {
    ctx.slots.register(
      {
        name: 'settings.general.item',
        id: 'dsh-theme-omarchy.selector',
        order: 25,
      },
      () => <OmarchyThemeSelector theme={ctx.theme} />
    )
  })
}
