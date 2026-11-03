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

## 🎨 Included Themes

### 1. 🏛️ Giants (`omarchy-giants`)
> *"Standing on the shoulders of giants"* — DHH’s tribute to computing pioneers (Turing, von Neumann, Lovelace).

* **Aesthetic**: Warm, low-contrast ink on aged paper.
* **Canvas Background**: `#27241f` (soft brown-black)
* **Sidebar / Rails**: `#1d1b17`
* **Code / Terminal Inset**: `#141210`
* **Text / Headings**: `#E1D5C2` (warm cream)
* **Accent / Brand**: `#97786d` (dusty terracotta)
* **Muted / Captions**: `#8a857a`

### 2. 🏎️ Diablo Dreams (`omarchy-diablo`)
> Inspired by the Lamborghini Diablo 6.0.

* **Aesthetic**: Dark, golden-brown luxury mechanical tones.
* **Canvas Background**: `#100e0a` (golden deep black)
* **Sidebar / Rails**: `#0c0b08`
* **Code / Terminal Inset**: `#080705`
* **Text / Headings**: `#FEF2C9` (rich warm cream)
* **Accent / Brand**: `#ab6a57` (terracotta)
* **Muted / Captions**: `#817a6b`

### 3. ⚡ Zonda Zoom (`omarchy-zonda`)
> Inspired by the Pagani Zonda HH.

* **Aesthetic**: Carbon black, muted steel surfaces, and icy blue accents.
* **Canvas Background**: `#141313` (carbon black)
* **Sidebar / Rails**: `#0f0e0e`
* **Code / Terminal Inset**: `#0a0a0a`
* **Text / Headings**: `#F6F4EC` (warm ivory)
* **Accent / Brand**: `#6b7fbe` (icy blue)
* **Muted / Captions**: `#a39c9c`

### 4. 🐎 Jade Horse (`omarchy-jade`)
> Inspired by Chinese Year of the Horse motifs.

* **Aesthetic**: Deep pine/black-green surfaces with celadon and nephrite jade accents.
* **Canvas Background**: `#0e1411` (pine black)
* **Sidebar / Rails**: `#090e0c`
* **Code / Terminal Inset**: `#050807`
* **Text / Headings**: `#E8F0EA` (pale celadon)
* **Accent / Brand**: `#5b9e7d` (nephrite jade)
* **Muted / Captions**: `#79887e`

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
