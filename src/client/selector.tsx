import React, { useState, useEffect } from 'react'
import { OMARCHY_THEMES, type OmarchyThemeDefinition } from '../palettes/index.ts'

interface ThemeRuntimeLike {
  getTheme(): { preference: string; active?: { id: string } }
  setTheme(id: string): void
  setFontFamily?(role: string, list: string): void
}

interface SelectorProps {
  theme: ThemeRuntimeLike
  onThemeChange?: (id: string) => void
}

export function OmarchyThemeSelector({ theme }: SelectorProps) {
  const [currentId, setCurrentId] = useState<string>(() => {
    try {
      const snap = theme.getTheme()
      return snap.preference || snap.active?.id || 'system'
    } catch {
      return 'system'
    }
  })

  useEffect(() => {
    // Poll or sync if event not directly on component
    const interval = setInterval(() => {
      try {
        const snap = theme.getTheme()
        const id = snap.preference || snap.active?.id || 'system'
        setCurrentId(id)
      } catch {}
    }, 500)
    return () => clearInterval(interval)
  }, [theme])

  const handleSelect = (t: OmarchyThemeDefinition) => {
    try {
      theme.setTheme(t.id)
      setCurrentId(t.id)
    } catch (e) {
      console.error('[dsh-theme-omarchy] Failed to apply theme:', e)
    }
  }

  const handleReset = () => {
    try {
      theme.setTheme('system')
      setCurrentId('system')
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
          <span className="omarchy-badge">Opinionated</span>
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
            Restore System Default
          </button>
        )}
        <button
          type="button"
          className="omarchy-font-toggle"
          onClick={handleApplyFonts}
          title="Apply JetBrains Mono / SF Mono for Code & Terminal"
        >
          Use Omarchy Typography
        </button>
      </div>
    </div>
  )
}
