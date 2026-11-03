# dsh-theme-omarchy 🎨

> **Opinionated visual themes for DeepSeek Harness (DSH)**, inspired by David Heinemeier Hansson’s ([DHH](https://github.com/dhh)) **[Omarchy](https://github.com/basecamp/omarchy)** Linux distribution.

---

## 🌟 Overview

[Omarchy](https://github.com/basecamp/omarchy) pairs Arch Linux and Hyprland with an opinionated, developer-first aesthetic: warm low-contrast palettes, distraction-free hierarchy, and bespoke themes anchored around computing pioneers, luxury mechanical tones, and organic hues.

`dsh-theme-omarchy` is **not just a flat color-variable swap**. It brings Omarchy's complete design philosophy into **DeepSeek Harness (DSH)**:

- 🌌 **Atmospheric Canvas Lighting**: Subtle radial lighting gradients that produce perceived optical depth behind workspace windows, replacing flat dark slates.
- 🛸 **Floating Island Composer**: Transforms the message input into an elevated, frosted glass command palette inspired by Omarchy's **Walker** launcher and Raycast.
- 🪟 **Hyprland Tiling Window Boundaries**: Translucent hairline borders, 28px backdrop blur, and tactile interactive micro-displacements.
- 📟 **Ghostty-Grade Code Blocks**: Recessed inset shadows, theme-tinted inline pills, and precision `JetBrains Mono` / `SF Mono` stacks.
- 🎚️ **Precision Micro-Scrollbars**: Discrete 5px floating pills that stay out of your way until engaged.

The bundle hooks cleanly into DSH’s `@deepseek-ai/dsh-client-ui-theme` runtime, synchronizing `body[data-omarchy-theme]` across the entire GUI without monkey-patching core binaries.

---

## 🎨 Included Themes (Omarchy Lineup)

### 1. 🌃 Tokyo Night (`omarchy-tokyonight`) — *Omarchy Default*
> The signature flagship theme of Omarchy desktop.

* **Aesthetic**: Deep midnight navy canvas with neon cyan, electric blue, and violet.
* **Canvas Background**: `#1a1b26` (midnight navy)
* **Sidebar / Rails**: `#13141c`
* **Code / Terminal Inset**: `#16161e`
* **Text / Headings**: `#c0caf5` (moonlit white)
* **Accent / Brand**: `#7aa2f7` (electric blue) & `#7dcfff` (cyan)
* **Muted / Captions**: `#787c99`

### 2. ☕ Catppuccin Mocha (`omarchy-catppuccin`)
> The developer community's beloved pastel palette.

* **Aesthetic**: Velvety dark slate canvas with pastel mauve, sapphire blue, and peach.
* **Canvas Background**: `#1e1e2e` (crust slate)
* **Sidebar / Rails**: `#11111b`
* **Code / Terminal Inset**: `#181825`
* **Text / Headings**: `#cdd6f4` (soft text)
* **Accent / Brand**: `#cba6f7` (mauve) & `#89b4fa` (sapphire)
* **Muted / Captions**: `#7f849c`

### 3. ❄️ Nord (`omarchy-nord`)
> Arctic north-bluish clean minimalism.

* **Aesthetic**: Polar night dark canvas with frost cyan and snow storm white text.
* **Canvas Background**: `#2e3440` (polar night)
* **Sidebar / Rails**: `#242933`
* **Code / Terminal Inset**: `#242933`
* **Text / Headings**: `#eceff4` (snow storm)
* **Accent / Brand**: `#88c0d0` (frost cyan) & `#81a1c1` (frost blue)
* **Muted / Captions**: `#9aa3b2`

### 4. 📻 Gruvbox Dark (`omarchy-gruvbox`)
> Legendary retro terminal warmth.

* **Aesthetic**: Deep warm dark wood canvas with vibrant orange and parchment text.
* **Canvas Background**: `#282828` (dark wood)
* **Sidebar / Rails**: `#1d2021`
* **Code / Terminal Inset**: `#1d2021`
* **Text / Headings**: `#ebdbb2` (parchment)
* **Accent / Brand**: `#fe8019` (vibrant orange) & `#b8bb26` (olive green)
* **Muted / Captions**: `#a89984`

### 5. 🌸 Rosé Pine (`omarchy-rosepine`)
> Soho minimalist pine aesthetic.

* **Aesthetic**: Dark pine canvas with soft rose, seafoam teal, and lilac iris accents.
* **Canvas Background**: `#191724` (pine base)
* **Sidebar / Rails**: `#14121d`
* **Code / Terminal Inset**: `#14121d`
* **Text / Headings**: `#e0def4` (pine text)
* **Accent / Brand**: `#ebbcba` (soft rose) & `#9ccfd8` (seafoam)
* **Muted / Captions**: `#7c7895`

### 6. 🌊 Kanagawa (`omarchy-kanagawa`)
> Japanese woodblock sumi-e ink aesthetic inspired by Katsushika Hokusai.

* **Aesthetic**: Deep sumi-e ink canvas with wave blue and spring green.
* **Canvas Background**: `#1f1f28` (sumi ink)
* **Sidebar / Rails**: `#16161d`
* **Code / Terminal Inset**: `#16161d`
* **Text / Headings**: `#dcd7ba` (fuji white)
* **Accent / Brand**: `#7e9cd8` (wave blue) & `#98bb6c` (spring green)
* **Muted / Captions**: `#8a8980`

---

## 🛠️ Architecture & Integration

`dsh-theme-omarchy` integrates through official DSH extension points:

1. **`ctx.theme.register()`**: Dynamically registers each theme definition into the DSH `ThemeRuntime`.
2. **`ThemePresenter` DOM Projection**: DSH projects the active theme directly onto the document, overriding:
   - `--dsw-alias-bg-base`, `--dsw-alias-bg-layer-*` (surfacing)
   - `--dsw-alias-label-primary`, `--dsw-alias-label-secondary` (typography)
   - `--dsw-alias-brand-primary`, `--dsw-alias-link` (brand & actions)
   - `--dsw-specific-sidebar-fill` (sidebar column)
   - `--dsw-alias-markdown-code-block` (syntax & code banners)
   - `--dsw-alias-border-l*` & `--dsw-elevation-stroke-color` (hairline borders)
3. **Settings Extension**: Automatically mounts an **Omarchy Design** visual picker in **Settings → General** (`settings.general.item`), letting you switch themes with a single click or restore defaults.
4. **Typography Tuning**: Includes an action button to quickly align code blocks and the sidebar terminal to Omarchy's recommended font stack (`JetBrains Mono`, `SF Mono`).

---

## 📦 Installation & Setup

### Method 1: Local Development Link (Fastest for Desktop)

In your local DSH installation (e.g. `~/Library/Application Support/dsh-desktop/harness/profiles/web/cordis.patch.yml`):

1. Clone or link this repository:
   ```bash
   cd ~/Documents/deepseek-harness/default-workspace/dsh-theme-omarchy
   pnpm run build
   ```

2. Add the bundle entry into your `cordis.patch.yml`:
   ```yaml
   - insert:
       - id: dsh-theme-omarchy
         name: "file:///Users/gerayeremin/Documents/deepseek-harness/default-workspace/dsh-theme-omarchy/lib/index.js"
   ```

3. Restart DSH Desktop. Open **Settings → General** and you will see the **Omarchy Design** theme cards ready to use!

### Method 2: Standard Bundle Packaging

To install as a standard dependency:
```bash
pnpm add dsh-theme-omarchy
```
And add to your harness profile:
```yaml
- insert:
    - id: dsh-theme-omarchy
      name: dsh-theme-omarchy
```

---

## 💻 Development

```bash
# Typecheck
pnpm run typecheck

# Build both Node host and browser client
pnpm run build
```

---

## 📄 License

MIT © [Gera Yeremin](https://github.com/gera3d)
