import React, { useState, useEffect } from 'react'
import { OMARCHY_THEMES, type OmarchyThemeDefinition, DEFAULT_OMARCHY_THEME } from '../palettes/index.ts'

const STORAGE_KEY = 'dsh-omarchy-active-theme'

interface ThemeRuntimeLike {
  getTheme(): { preference: string; active?: { id: string } }
  setTheme(id: string): void
  setFontFamily?(role: string, list: string): void
}

interface SelectorProps {
  theme: ThemeRuntimeLike
  onThemeChange?: (id: string) => void
}

export function applyThemeDirectly(t: OmarchyThemeDefinition) {
  if (typeof document === 'undefined') return
  document.body.dataset.omarchyTheme = t.id
  for (const [key, val] of Object.entries(t.tokens)) {
    document.body.style.setProperty(key, val)
  }
}

export function clearThemeDirectly() {
  if (typeof document === 'undefined') return
  delete document.body.dataset.omarchyTheme
  // Remove known tokens
  for (const t of OMARCHY_THEMES) {
    for (const key of Object.keys(t.tokens)) {
      document.body.style.removeProperty(key)
    }
  }
}

export function OmarchyThemeSelector({ theme }: SelectorProps) {
  const [currentId, setCurrentId] = useState<string>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) return stored
      const snap = theme.getTheme()
      return snap.preference || snap.active?.id || DEFAULT_OMARCHY_THEME.id
    } catch {
      return DEFAULT_OMARCHY_THEME.id
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored && stored !== currentId) {
          setCurrentId(stored)
        }
      } catch {}
    }, 500)
    return () => clearInterval(interval)
  }, [currentId])

  const handleSelect = (t: OmarchyThemeDefinition) => {
    try {
      localStorage.setItem(STORAGE_KEY, t.id)
      setCurrentId(t.id)
      applyThemeDirectly(t)
      theme.setTheme(t.id)
    } catch (e) {
      console.error('[dsh-theme-omarchy] Failed to apply theme:', e)
    }
  }

  const handleReset = () => {
    try {
      localStorage.removeItem(STORAGE_KEY)
      setCurrentId('system')
      clearThemeDirectly()
      theme.setTheme('system')
    } catch (e) {
      console.error('[dsh-theme-omarchy] Failed to reset theme:', e)
    }
  }

  const handleApplyFonts = () => {
    try {
      if (typeof theme.setFontFamily === 'function') {
        theme.setFontFamily('code', "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace")
        theme.setFontFamily('terminal', "'JetBrains Mono', 'SF Mono', monospace")
      }
    } catch (e) {
      console.error('[dsh-theme-omarchy] Failed to apply font family:', e)
    }
  }

  const isOmarchyActive = OMARCHY_THEMES.some((t) => t.id === currentId)

  return (
    <div className="omarchy-settings-group">
      <div className="omarchy-header">
        <div className="omarchy-title">
          <span>Omarchy Design</span>
          <span className="omarchy-badge">Curated Lineup</span>
        </div>
      </div>

      <div className="omarchy-grid">
        {OMARCHY_THEMES.map((item) => {
          const active = currentId === item.id
          return (
            <button
              key={item.id}
              type="button"
              className="omarchy-card"
              data-active={active}
              onClick={() => handleSelect(item)}
              title={item.subtitle}
            >
              <div className="omarchy-card-top">
                <span
                  className="omarchy-swatch"
                  style={{
                    backgroundColor: item.bgPreview,
                    borderColor: item.accentColor,
                  }}
                />
                {active && <span className="omarchy-active-indicator">✓ Active</span>}
              </div>
              <div className="omarchy-name">{item.name}</div>
              <div className="omarchy-subtitle">{item.subtitle}</div>
            </button>
          )
        })}
      </div>

      <div className="omarchy-actions">
        {isOmarchyActive && (
          <button type="button" className="omarchy-btn-reset" onClick={handleReset}>
            Restore Default Appearance
          </button>
        )}
        <button
          type="button"
          className="omarchy-font-toggle"
          onClick={handleApplyFonts}
          title="Apply JetBrains Mono & SF Mono"
        >
          Use Omarchy Typography
        </button>
      </div>
    </div>
  )
}
