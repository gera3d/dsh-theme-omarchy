window.__ModuleLoader__.load({
	id: "dsh-theme-omarchy",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region \0rolldown/runtime.js
		var __create = Object.create;
		var __defProp = Object.defineProperty;
		var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
		var __getOwnPropNames = Object.getOwnPropertyNames;
		var __getProtoOf = Object.getPrototypeOf;
		var __hasOwnProp = Object.prototype.hasOwnProperty;
		var __copyProps = (to, from, except, desc) => {
			if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
				key = keys[i];
				if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
			return to;
		};
		var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
			value: mod,
			enumerable: true
		}) : target, mod));
		//#endregion
		let react = require("react");
		react = __toESM(react, 1);
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region src/palettes/tokyonight.ts
		/**
		* Tokyo Night: Omarchy's Flagship Default Theme
		* Deep midnight navy canvas with vibrant neon cyan, electric blue, and violet accents.
		*/
		const tokyoNightTheme = {
			id: "omarchy-tokyonight",
			name: "Tokyo Night",
			subtitle: "Omarchy's default: midnight navy, cyan & violet",
			colorScheme: "dark",
			accentColor: "#7aa2f7",
			bgPreview: "#1a1b26",
			tokens: {
				"--dsw-alias-bg-base": "#1a1b26",
				"--dsw-alias-bg-layer-1": "#1f2335",
				"--dsw-alias-bg-layer-2": "#24283b",
				"--dsw-alias-bg-layer-3": "#16161e",
				"--dsw-alias-bg-overlay": "#1f2335",
				"--dsw-specific-sidebar-fill": "#13141c",
				"--dsw-specific-bubble": "#1f2335",
				"--dsw-specific-bubble-highlight": "#292e42",
				"--dsw-specific-input-major": "#16161e",
				"--dsw-alias-markdown-code-block": "#16161e",
				"--dsw-alias-markdown-code-block-banner": "#13141c",
				"--dsw-alias-markdown-inline-code": "#24283b",
				"--dsw-alias-markdown-tag": "#292e42",
				"--dsw-alias-label-primary": "#c0caf5",
				"--dsw-alias-label-secondary": "#9aa5ce",
				"--dsw-alias-label-tertiary": "#565f89",
				"--dsw-alias-label-caption": "#787c99",
				"--dsw-alias-brand-primary": "#7aa2f7",
				"--dsw-alias-link": "#7dcfff",
				"--dsw-alias-button-primary-fill": "#7aa2f7",
				"--dsw-alias-button-primary-hover": "#89b4fa",
				"--dsw-alias-interactive-bg-hover": "rgba(122, 162, 247, 0.08)",
				"--dsw-alias-interactive-bg-active": "rgba(122, 162, 247, 0.16)",
				"--dsw-alias-bg-document-selection": "rgba(40, 52, 87, 0.7)",
				"--dsw-alias-border-l1": "rgba(122, 162, 247, 0.10)",
				"--dsw-alias-border-l2": "rgba(122, 162, 247, 0.18)",
				"--dsw-alias-border-l3": "rgba(122, 162, 247, 0.28)",
				"--dsw-alias-border-l4": "rgba(122, 162, 247, 0.38)",
				"--dsw-elevation-stroke-color": "rgba(122, 162, 247, 0.15)",
				"--dsh-scrollbar-thumb": "#292e42",
				"--dsh-scrollbar-thumb-hover": "#3b4261"
			}
		};
		//#endregion
		//#region src/palettes/index.ts
		/**
		* Curated authentic Omarchy theme lineup.
		* Tokyo Night is the signature default of Omarchy desktop.
		*/
		const OMARCHY_THEMES = [
			tokyoNightTheme,
			{
				id: "omarchy-catppuccin",
				name: "Catppuccin Mocha",
				subtitle: "Velvety slate with pastel mauve & sapphire",
				colorScheme: "dark",
				accentColor: "#cba6f7",
				bgPreview: "#1e1e2e",
				tokens: {
					"--dsw-alias-bg-base": "#1e1e2e",
					"--dsw-alias-bg-layer-1": "#252538",
					"--dsw-alias-bg-layer-2": "#313244",
					"--dsw-alias-bg-layer-3": "#181825",
					"--dsw-alias-bg-overlay": "#252538",
					"--dsw-specific-sidebar-fill": "#11111b",
					"--dsw-specific-bubble": "#252538",
					"--dsw-specific-bubble-highlight": "#313244",
					"--dsw-specific-input-major": "#181825",
					"--dsw-alias-markdown-code-block": "#181825",
					"--dsw-alias-markdown-code-block-banner": "#11111b",
					"--dsw-alias-markdown-inline-code": "#313244",
					"--dsw-alias-markdown-tag": "#45475a",
					"--dsw-alias-label-primary": "#cdd6f4",
					"--dsw-alias-label-secondary": "#a6adc8",
					"--dsw-alias-label-tertiary": "#6c7086",
					"--dsw-alias-label-caption": "#7f849c",
					"--dsw-alias-brand-primary": "#cba6f7",
					"--dsw-alias-link": "#89b4fa",
					"--dsw-alias-button-primary-fill": "#cba6f7",
					"--dsw-alias-button-primary-hover": "#d9bdf9",
					"--dsw-alias-interactive-bg-hover": "rgba(203, 166, 247, 0.08)",
					"--dsw-alias-interactive-bg-active": "rgba(203, 166, 247, 0.16)",
					"--dsw-alias-bg-document-selection": "rgba(69, 71, 90, 0.7)",
					"--dsw-alias-border-l1": "rgba(203, 166, 247, 0.10)",
					"--dsw-alias-border-l2": "rgba(203, 166, 247, 0.18)",
					"--dsw-alias-border-l3": "rgba(203, 166, 247, 0.28)",
					"--dsw-alias-border-l4": "rgba(203, 166, 247, 0.38)",
					"--dsw-elevation-stroke-color": "rgba(203, 166, 247, 0.15)",
					"--dsh-scrollbar-thumb": "#313244",
					"--dsh-scrollbar-thumb-hover": "#45475a"
				}
			},
			{
				id: "omarchy-nord",
				name: "Nord",
				subtitle: "Arctic polar night with frost cyan & snow white",
				colorScheme: "dark",
				accentColor: "#88c0d0",
				bgPreview: "#2e3440",
				tokens: {
					"--dsw-alias-bg-base": "#2e3440",
					"--dsw-alias-bg-layer-1": "#3b4252",
					"--dsw-alias-bg-layer-2": "#434c5e",
					"--dsw-alias-bg-layer-3": "#242933",
					"--dsw-alias-bg-overlay": "#3b4252",
					"--dsw-specific-sidebar-fill": "#242933",
					"--dsw-specific-bubble": "#3b4252",
					"--dsw-specific-bubble-highlight": "#434c5e",
					"--dsw-specific-input-major": "#242933",
					"--dsw-alias-markdown-code-block": "#242933",
					"--dsw-alias-markdown-code-block-banner": "#1e222a",
					"--dsw-alias-markdown-inline-code": "#3b4252",
					"--dsw-alias-markdown-tag": "#4c566a",
					"--dsw-alias-label-primary": "#eceff4",
					"--dsw-alias-label-secondary": "#d8dee9",
					"--dsw-alias-label-tertiary": "#4c566a",
					"--dsw-alias-label-caption": "#9aa3b2",
					"--dsw-alias-brand-primary": "#88c0d0",
					"--dsw-alias-link": "#81a1c1",
					"--dsw-alias-button-primary-fill": "#88c0d0",
					"--dsw-alias-button-primary-hover": "#8fbcbb",
					"--dsw-alias-interactive-bg-hover": "rgba(136, 192, 208, 0.08)",
					"--dsw-alias-interactive-bg-active": "rgba(136, 192, 208, 0.16)",
					"--dsw-alias-bg-document-selection": "rgba(67, 76, 94, 0.7)",
					"--dsw-alias-border-l1": "rgba(136, 192, 208, 0.10)",
					"--dsw-alias-border-l2": "rgba(136, 192, 208, 0.18)",
					"--dsw-alias-border-l3": "rgba(136, 192, 208, 0.28)",
					"--dsw-alias-border-l4": "rgba(136, 192, 208, 0.38)",
					"--dsw-elevation-stroke-color": "rgba(136, 192, 208, 0.15)",
					"--dsh-scrollbar-thumb": "#434c5e",
					"--dsh-scrollbar-thumb-hover": "#4c566a"
				}
			},
			{
				id: "omarchy-gruvbox",
				name: "Gruvbox Dark",
				subtitle: "Retro terminal warmth with vibrant orange & parchment",
				colorScheme: "dark",
				accentColor: "#fe8019",
				bgPreview: "#282828",
				tokens: {
					"--dsw-alias-bg-base": "#282828",
					"--dsw-alias-bg-layer-1": "#32302f",
					"--dsw-alias-bg-layer-2": "#3c3836",
					"--dsw-alias-bg-layer-3": "#1d2021",
					"--dsw-alias-bg-overlay": "#32302f",
					"--dsw-specific-sidebar-fill": "#1d2021",
					"--dsw-specific-bubble": "#32302f",
					"--dsw-specific-bubble-highlight": "#3c3836",
					"--dsw-specific-input-major": "#1d2021",
					"--dsw-alias-markdown-code-block": "#1d2021",
					"--dsw-alias-markdown-code-block-banner": "#17191a",
					"--dsw-alias-markdown-inline-code": "#3c3836",
					"--dsw-alias-markdown-tag": "#504945",
					"--dsw-alias-label-primary": "#ebdbb2",
					"--dsw-alias-label-secondary": "#d5c4a1",
					"--dsw-alias-label-tertiary": "#928374",
					"--dsw-alias-label-caption": "#a89984",
					"--dsw-alias-brand-primary": "#fe8019",
					"--dsw-alias-link": "#b8bb26",
					"--dsw-alias-button-primary-fill": "#fe8019",
					"--dsw-alias-button-primary-hover": "#ff9b44",
					"--dsw-alias-interactive-bg-hover": "rgba(254, 128, 25, 0.08)",
					"--dsw-alias-interactive-bg-active": "rgba(254, 128, 25, 0.16)",
					"--dsw-alias-bg-document-selection": "rgba(80, 73, 69, 0.7)",
					"--dsw-alias-border-l1": "rgba(235, 219, 178, 0.10)",
					"--dsw-alias-border-l2": "rgba(235, 219, 178, 0.18)",
					"--dsw-alias-border-l3": "rgba(235, 219, 178, 0.28)",
					"--dsw-alias-border-l4": "rgba(235, 219, 178, 0.38)",
					"--dsw-elevation-stroke-color": "rgba(254, 128, 25, 0.15)",
					"--dsh-scrollbar-thumb": "#3c3836",
					"--dsh-scrollbar-thumb-hover": "#504945"
				}
			},
			{
				id: "omarchy-rosepine",
				name: "Rosé Pine",
				subtitle: "Soho minimalist pine canvas with soft rose & seafoam",
				colorScheme: "dark",
				accentColor: "#ebbcba",
				bgPreview: "#191724",
				tokens: {
					"--dsw-alias-bg-base": "#191724",
					"--dsw-alias-bg-layer-1": "#1f1d2e",
					"--dsw-alias-bg-layer-2": "#26233a",
					"--dsw-alias-bg-layer-3": "#14121d",
					"--dsw-alias-bg-overlay": "#1f1d2e",
					"--dsw-specific-sidebar-fill": "#14121d",
					"--dsw-specific-bubble": "#1f1d2e",
					"--dsw-specific-bubble-highlight": "#26233a",
					"--dsw-specific-input-major": "#14121d",
					"--dsw-alias-markdown-code-block": "#14121d",
					"--dsw-alias-markdown-code-block-banner": "#100e17",
					"--dsw-alias-markdown-inline-code": "#26233a",
					"--dsw-alias-markdown-tag": "#393552",
					"--dsw-alias-label-primary": "#e0def4",
					"--dsw-alias-label-secondary": "#908caa",
					"--dsw-alias-label-tertiary": "#6e6a86",
					"--dsw-alias-label-caption": "#7c7895",
					"--dsw-alias-brand-primary": "#ebbcba",
					"--dsw-alias-link": "#9ccfd8",
					"--dsw-alias-button-primary-fill": "#ebbcba",
					"--dsw-alias-button-primary-hover": "#f0c8c6",
					"--dsw-alias-interactive-bg-hover": "rgba(235, 188, 186, 0.08)",
					"--dsw-alias-interactive-bg-active": "rgba(235, 188, 186, 0.16)",
					"--dsw-alias-bg-document-selection": "rgba(42, 40, 62, 0.7)",
					"--dsw-alias-border-l1": "rgba(235, 188, 186, 0.10)",
					"--dsw-alias-border-l2": "rgba(235, 188, 186, 0.18)",
					"--dsw-alias-border-l3": "rgba(235, 188, 186, 0.28)",
					"--dsw-alias-border-l4": "rgba(235, 188, 186, 0.38)",
					"--dsw-elevation-stroke-color": "rgba(235, 188, 186, 0.15)",
					"--dsh-scrollbar-thumb": "#26233a",
					"--dsh-scrollbar-thumb-hover": "#393552"
				}
			},
			{
				id: "omarchy-kanagawa",
				name: "Kanagawa",
				subtitle: "Japanese sumi-e ink canvas with wave blue & spring green",
				colorScheme: "dark",
				accentColor: "#7e9cd8",
				bgPreview: "#1f1f28",
				tokens: {
					"--dsw-alias-bg-base": "#1f1f28",
					"--dsw-alias-bg-layer-1": "#2a2a37",
					"--dsw-alias-bg-layer-2": "#363646",
					"--dsw-alias-bg-layer-3": "#16161d",
					"--dsw-alias-bg-overlay": "#2a2a37",
					"--dsw-specific-sidebar-fill": "#16161d",
					"--dsw-specific-bubble": "#2a2a37",
					"--dsw-specific-bubble-highlight": "#363646",
					"--dsw-specific-input-major": "#16161d",
					"--dsw-alias-markdown-code-block": "#16161d",
					"--dsw-alias-markdown-code-block-banner": "#121217",
					"--dsw-alias-markdown-inline-code": "#363646",
					"--dsw-alias-markdown-tag": "#49473e",
					"--dsw-alias-label-primary": "#dcd7ba",
					"--dsw-alias-label-secondary": "#c8c093",
					"--dsw-alias-label-tertiary": "#727169",
					"--dsw-alias-label-caption": "#8a8980",
					"--dsw-alias-brand-primary": "#7e9cd8",
					"--dsw-alias-link": "#98bb6c",
					"--dsw-alias-button-primary-fill": "#7e9cd8",
					"--dsw-alias-button-primary-hover": "#8eafe8",
					"--dsw-alias-interactive-bg-hover": "rgba(126, 156, 216, 0.08)",
					"--dsw-alias-interactive-bg-active": "rgba(126, 156, 216, 0.16)",
					"--dsw-alias-bg-document-selection": "rgba(45, 79, 103, 0.7)",
					"--dsw-alias-border-l1": "rgba(220, 215, 186, 0.10)",
					"--dsw-alias-border-l2": "rgba(220, 215, 186, 0.18)",
					"--dsw-alias-border-l3": "rgba(220, 215, 186, 0.28)",
					"--dsw-alias-border-l4": "rgba(220, 215, 186, 0.38)",
					"--dsw-elevation-stroke-color": "rgba(126, 156, 216, 0.15)",
					"--dsh-scrollbar-thumb": "#363646",
					"--dsh-scrollbar-thumb-hover": "#54546d"
				}
			}
		];
		const DEFAULT_OMARCHY_THEME = tokyoNightTheme;
		//#endregion
		//#region src/client/selector.tsx
		const STORAGE_KEY$1 = "dsh-omarchy-active-theme";
		function applyThemeDirectly(t) {
			if (typeof document === "undefined") return;
			document.body.dataset.omarchyTheme = t.id;
			for (const [key, val] of Object.entries(t.tokens)) document.body.style.setProperty(key, val);
		}
		function clearThemeDirectly() {
			if (typeof document === "undefined") return;
			delete document.body.dataset.omarchyTheme;
			for (const t of OMARCHY_THEMES) for (const key of Object.keys(t.tokens)) document.body.style.removeProperty(key);
		}
		function OmarchyThemeSelector({ theme }) {
			const [currentId, setCurrentId] = (0, react.useState)(() => {
				try {
					const stored = localStorage.getItem(STORAGE_KEY$1);
					if (stored) return stored;
					const snap = theme.getTheme();
					return snap.preference || snap.active?.id || DEFAULT_OMARCHY_THEME.id;
				} catch {
					return DEFAULT_OMARCHY_THEME.id;
				}
			});
			(0, react.useEffect)(() => {
				const interval = setInterval(() => {
					try {
						const stored = localStorage.getItem(STORAGE_KEY$1);
						if (stored && stored !== currentId) setCurrentId(stored);
					} catch {}
				}, 500);
				return () => clearInterval(interval);
			}, [currentId]);
			const handleSelect = (t) => {
				try {
					localStorage.setItem(STORAGE_KEY$1, t.id);
					setCurrentId(t.id);
					applyThemeDirectly(t);
					theme.setTheme(t.id);
				} catch (e) {
					console.error("[dsh-theme-omarchy] Failed to apply theme:", e);
				}
			};
			const handleReset = () => {
				try {
					localStorage.removeItem(STORAGE_KEY$1);
					setCurrentId("system");
					clearThemeDirectly();
					theme.setTheme("system");
				} catch (e) {
					console.error("[dsh-theme-omarchy] Failed to reset theme:", e);
				}
			};
			const handleApplyFonts = () => {
				try {
					if (typeof theme.setFontFamily === "function") {
						theme.setFontFamily("code", "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace");
						theme.setFontFamily("terminal", "'JetBrains Mono', 'SF Mono', monospace");
					}
				} catch (e) {
					console.error("[dsh-theme-omarchy] Failed to apply font family:", e);
				}
			};
			const isOmarchyActive = OMARCHY_THEMES.some((t) => t.id === currentId);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "omarchy-settings-group",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "omarchy-header",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "omarchy-title",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "Omarchy Design" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "omarchy-badge",
								children: "Curated Lineup"
							})]
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "omarchy-grid",
						children: OMARCHY_THEMES.map((item) => {
							const active = currentId === item.id;
							return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "omarchy-card",
								"data-active": active,
								onClick: () => handleSelect(item),
								title: item.subtitle,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "omarchy-card-top",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "omarchy-swatch",
											style: {
												backgroundColor: item.bgPreview,
												borderColor: item.accentColor
											}
										}), active && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "omarchy-active-indicator",
											children: "✓ Active"
										})]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "omarchy-name",
										children: item.name
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "omarchy-subtitle",
										children: item.subtitle
									})
								]
							}, item.id);
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "omarchy-actions",
						children: [isOmarchyActive && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: "omarchy-btn-reset",
							onClick: handleReset,
							children: "Restore Default Appearance"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: "omarchy-font-toggle",
							onClick: handleApplyFonts,
							title: "Apply JetBrains Mono & SF Mono",
							children: "Use Omarchy Typography"
						})]
					})
				]
			});
		}
		//#endregion
		//#region src/client/styles.css?raw
		var styles_default = ".omarchy-settings-group {\n  margin-top: 14px;\n  padding-top: 14px;\n  border-top: 1px solid var(--dsw-alias-border-l1, rgba(255, 255, 255, 0.08));\n}\n\n.omarchy-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n\n.omarchy-title {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--dsw-alias-label-primary, inherit);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.omarchy-badge {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: 999px;\n  background: rgba(122, 162, 247, 0.2);\n  color: var(--dsw-alias-brand-primary, #7aa2f7);\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n}\n\n.omarchy-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n}\n\n@media (min-width: 640px) {\n  .omarchy-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n.omarchy-card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 10px 12px;\n  border-radius: 10px;\n  border: 1px solid var(--dsw-alias-border-l2, rgba(255, 255, 255, 0.1));\n  background: var(--dsw-alias-bg-layer-1, rgba(255, 255, 255, 0.04));\n  cursor: pointer;\n  text-align: left;\n  transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);\n  user-select: none;\n}\n\n.omarchy-card:hover {\n  border-color: var(--dsw-alias-brand-primary, #7aa2f7);\n  background: var(--dsw-alias-bg-layer-2, rgba(255, 255, 255, 0.08));\n  transform: translateY(-1px);\n}\n\n.omarchy-card[data-active=\"true\"] {\n  border-color: var(--dsw-alias-brand-primary, #7aa2f7);\n  box-shadow: 0 0 0 2px var(--dsw-alias-brand-primary, #7aa2f7);\n  background: var(--dsw-alias-bg-layer-2, rgba(255, 255, 255, 0.08));\n}\n\n.omarchy-card-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n\n.omarchy-swatch {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--dsw-alias-border-l3, rgba(255, 255, 255, 0.2));\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);\n}\n\n.omarchy-active-indicator {\n  font-size: 11px;\n  color: var(--dsw-alias-brand-primary, #7aa2f7);\n  font-weight: 600;\n}\n\n.omarchy-name {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--dsw-alias-label-primary, inherit);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.omarchy-subtitle {\n  font-size: 10.5px;\n  color: var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.6));\n  line-height: 1.35;\n  margin-top: 3px;\n  white-space: normal;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.omarchy-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 10px;\n}\n\n.omarchy-btn-reset,\n.omarchy-font-toggle {\n  font-size: 11.5px;\n  padding: 4px 10px;\n  border-radius: 6px;\n  border: 1px solid var(--dsw-alias-border-l2, rgba(255, 255, 255, 0.15));\n  background: var(--dsw-alias-bg-layer-1, rgba(255, 255, 255, 0.03));\n  color: var(--dsw-alias-label-secondary, inherit);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n\n.omarchy-btn-reset:hover,\n.omarchy-font-toggle:hover {\n  background: var(--dsw-alias-interactive-bg-hover, rgba(255, 255, 255, 0.08));\n  color: var(--dsw-alias-label-primary, inherit);\n  border-color: var(--dsw-alias-brand-primary, #7aa2f7);\n}\n";
		//#endregion
		//#region src/client/omarchy-theme.css?raw
		var omarchy_theme_default = "/* ==========================================================================\n   dsh-theme-omarchy: Authentic Opinionated Visual Design System\n   Inspired by David Heinemeier Hansson's (DHH) Omarchy Linux Distribution\n   ========================================================================== */\n\n/* ── 1. Global Atmospheric Canvas & Lighting ── */\nbody[data-omarchy-theme] {\n  transition: background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/* 1. Tokyo Night — Omarchy's Flagship Default */\nbody[data-omarchy-theme=\"omarchy-tokyonight\"] {\n  background-color: #1a1b26 !important;\n  background-image: \n    radial-gradient(ellipse 90% 55% at 50% -10%, rgba(122, 162, 247, 0.18), transparent 70%),\n    radial-gradient(circle at 100% 100%, rgba(187, 154, 247, 0.12), transparent 60%) !important;\n  background-attachment: fixed !important;\n}\n\n/* 2. Catppuccin Mocha — Velvety slate with pastel mauve & sapphire */\nbody[data-omarchy-theme=\"omarchy-catppuccin\"] {\n  background-color: #1e1e2e !important;\n  background-image: \n    radial-gradient(ellipse 90% 55% at 50% -10%, rgba(203, 166, 247, 0.18), transparent 70%),\n    radial-gradient(circle at 100% 100%, rgba(137, 180, 250, 0.12), transparent 60%) !important;\n  background-attachment: fixed !important;\n}\n\n/* 3. Nord — Arctic polar night with frost cyan & snow storm */\nbody[data-omarchy-theme=\"omarchy-nord\"] {\n  background-color: #2e3440 !important;\n  background-image: \n    radial-gradient(ellipse 90% 55% at 50% -10%, rgba(136, 192, 208, 0.18), transparent 70%),\n    radial-gradient(circle at 100% 100%, rgba(129, 161, 193, 0.12), transparent 60%) !important;\n  background-attachment: fixed !important;\n}\n\n/* 4. Gruvbox Dark — Retro terminal warmth with vibrant orange */\nbody[data-omarchy-theme=\"omarchy-gruvbox\"] {\n  background-color: #282828 !important;\n  background-image: \n    radial-gradient(ellipse 90% 55% at 50% -10%, rgba(254, 128, 25, 0.18), transparent 70%),\n    radial-gradient(circle at 100% 100%, rgba(184, 187, 38, 0.12), transparent 60%) !important;\n  background-attachment: fixed !important;\n}\n\n/* 5. Rosé Pine — Soho minimalist pine with soft rose & seafoam */\nbody[data-omarchy-theme=\"omarchy-rosepine\"] {\n  background-color: #191724 !important;\n  background-image: \n    radial-gradient(ellipse 90% 55% at 50% -10%, rgba(235, 188, 186, 0.18), transparent 70%),\n    radial-gradient(circle at 100% 100%, rgba(156, 207, 216, 0.12), transparent 60%) !important;\n  background-attachment: fixed !important;\n}\n\n/* 6. Kanagawa — Japanese sumi-e ink with wave blue & spring green */\nbody[data-omarchy-theme=\"omarchy-kanagawa\"] {\n  background-color: #1f1f28 !important;\n  background-image: \n    radial-gradient(ellipse 90% 55% at 50% -10%, rgba(126, 156, 216, 0.18), transparent 70%),\n    radial-gradient(circle at 100% 100%, rgba(152, 187, 108, 0.12), transparent 60%) !important;\n  background-attachment: fixed !important;\n}\n\n/* 7. Giants — Classic vintage ink on aged paper */\nbody[data-omarchy-theme=\"omarchy-giants\"] {\n  background-color: #27241f !important;\n  background-image: \n    radial-gradient(ellipse 90% 55% at 50% -12%, rgba(151, 120, 109, 0.16), transparent 70%),\n    radial-gradient(circle at 100% 100%, rgba(16, 14, 12, 0.6), transparent 60%) !important;\n  background-attachment: fixed !important;\n}\n\n/* ── 2. Hyprland-Inspired Tiling Windows & Floating Separation ── */\nbody[data-omarchy-theme] [class*=\"sidebarCol\"],\nbody[data-omarchy-theme] nav {\n  background: var(--dsw-specific-sidebar-fill) !important;\n  border-right: 1px solid var(--dsw-alias-border-l1) !important;\n  backdrop-filter: blur(24px) !important;\n}\n\nbody[data-omarchy-theme] [class*=\"headerActions\"],\nbody[data-omarchy-theme] [class*=\"titleBar\"],\nbody[data-omarchy-theme] header {\n  border-bottom: 1px solid var(--dsw-alias-border-l1) !important;\n  backdrop-filter: blur(20px) !important;\n}\n\n/* Tactile Session and Panel Nav Rows */\nbody[data-omarchy-theme] [class*=\"panelRow\"],\nbody[data-omarchy-theme] [class*=\"sessionButton\"],\nbody[data-omarchy-theme] [class*=\"navItem\"] {\n  border-radius: 8px !important;\n  margin: 1px 4px !important;\n  transition: all 0.15s cubic-bezier(0.16, 1, 0.3, 1) !important;\n}\n\nbody[data-omarchy-theme] [class*=\"panelRow\"]:hover,\nbody[data-omarchy-theme] [class*=\"sessionButton\"]:hover {\n  background: var(--dsw-alias-interactive-bg-hover) !important;\n  transform: translateX(2px) !important;\n}\n\nbody[data-omarchy-theme] [class*=\"panelRow\"][data-selected=\"true\"],\nbody[data-omarchy-theme] [class*=\"sessionButton\"][data-selected=\"true\"] {\n  background: var(--dsw-alias-interactive-bg-active) !important;\n  box-shadow: inset 3px 0 0 0 var(--dsw-alias-brand-primary) !important;\n}\n\n/* ── 3. The Floating Island Composer (Raycast / Walker Command Bar) ── */\nbody[data-omarchy-theme] [data-composer-card=\"true\"] {\n  border: 1px solid var(--dsw-alias-border-l2) !important;\n  border-radius: 16px !important;\n  background: var(--dsw-alias-bg-layer-1) !important;\n  backdrop-filter: blur(28px) saturate(160%) !important;\n  box-shadow: \n    0 16px 48px -12px rgba(0, 0, 0, 0.65),\n    0 0 0 1px var(--dsw-alias-border-l1),\n    inset 0 1px 0 0 rgba(255, 255, 255, 0.08) !important;\n  padding: 4px 6px !important;\n  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1) !important;\n}\n\nbody[data-omarchy-theme] [data-composer-card=\"true\"]:focus-within {\n  border-color: var(--dsw-alias-brand-primary) !important;\n  box-shadow: \n    0 24px 60px -8px rgba(0, 0, 0, 0.75),\n    0 0 0 2px var(--dsw-alias-brand-primary),\n    0 0 24px -4px var(--dsw-alias-brand-primary),\n    inset 0 1px 0 0 rgba(255, 255, 255, 0.15) !important;\n  transform: translateY(-2px) !important;\n}\n\nbody[data-omarchy-theme] [data-composer-card=\"true\"] [contenteditable=\"true\"],\nbody[data-omarchy-theme] [data-composer-card=\"true\"] textarea {\n  color: var(--dsw-alias-label-primary) !important;\n  font-family: inherit !important;\n  line-height: 1.6 !important;\n  font-size: 14px !important;\n}\n\nbody[data-omarchy-theme] [data-composer-card=\"true\"] button {\n  border-radius: 8px !important;\n  transition: all 0.15s ease !important;\n}\n\nbody[data-omarchy-theme] [data-composer-card=\"true\"] button:hover {\n  background: var(--dsw-alias-interactive-bg-hover) !important;\n  transform: scale(1.05) !important;\n}\n\n/* ── 4. Tactile Message Bubbles & Typography ── */\nbody[data-omarchy-theme] [class*=\"bubble\"] {\n  border: 1px solid var(--dsw-alias-border-l2) !important;\n  border-radius: 14px !important;\n  background: var(--dsw-specific-bubble) !important;\n  box-shadow: \n    0 4px 20px -2px rgba(0, 0, 0, 0.35),\n    inset 0 1px 0 0 rgba(255, 255, 255, 0.06) !important;\n  padding: 12px 16px !important;\n  letter-spacing: -0.01em !important;\n  line-height: 1.65 !important;\n  color: var(--dsw-alias-label-primary) !important;\n}\n\nbody[data-omarchy-theme] h1,\nbody[data-omarchy-theme] h2,\nbody[data-omarchy-theme] h3,\nbody[data-omarchy-theme] h4 {\n  color: var(--dsw-alias-label-primary) !important;\n  font-weight: 600 !important;\n  letter-spacing: -0.02em !important;\n}\n\nbody[data-omarchy-theme] h2 {\n  border-bottom: 1px solid var(--dsw-alias-border-l1) !important;\n  padding-bottom: 6px !important;\n  margin-top: 24px !important;\n}\n\nbody[data-omarchy-theme] blockquote {\n  border-left: 3px solid var(--dsw-alias-brand-primary) !important;\n  background: var(--dsw-alias-interactive-bg-hover) !important;\n  padding: 8px 14px !important;\n  border-radius: 0 8px 8px 0 !important;\n  color: var(--dsw-alias-label-secondary) !important;\n  font-style: normal !important;\n  margin: 12px 0 !important;\n}\n\n/* ── 5. Terminal-Grade Code Blocks (Ghostty / Neovim Craft) ── */\nbody[data-omarchy-theme] pre {\n  border: 1px solid var(--dsw-alias-border-l2) !important;\n  border-radius: 10px !important;\n  background: var(--dsw-alias-markdown-code-block) !important;\n  box-shadow: \n    inset 0 2px 8px rgba(0, 0, 0, 0.5),\n    0 4px 12px rgba(0, 0, 0, 0.2) !important;\n  padding: 14px 16px !important;\n  margin: 12px 0 !important;\n}\n\nbody[data-omarchy-theme] code,\nbody[data-omarchy-theme] pre code {\n  font-family: 'JetBrains Mono', 'SF Mono', 'Fira Code', Menlo, monospace !important;\n  font-size: 12.5px !important;\n  line-height: 1.6 !important;\n}\n\nbody[data-omarchy-theme] p code,\nbody[data-omarchy-theme] li code {\n  background: var(--dsw-alias-markdown-inline-code) !important;\n  border: 1px solid var(--dsw-alias-border-l1) !important;\n  border-radius: 5px !important;\n  padding: 1px 5px !important;\n  font-size: 12px !important;\n  color: var(--dsw-alias-brand-primary) !important;\n}\n\n/* ── 6. Precision Micro-Scrollbars ── */\nbody[data-omarchy-theme] ::-webkit-scrollbar {\n  width: 5px !important;\n  height: 5px !important;\n}\n\nbody[data-omarchy-theme] ::-webkit-scrollbar-track {\n  background: transparent !important;\n}\n\nbody[data-omarchy-theme] ::-webkit-scrollbar-thumb {\n  background: var(--dsh-scrollbar-thumb) !important;\n  border-radius: 999px !important;\n  transition: background 0.2s ease !important;\n}\n\nbody[data-omarchy-theme] ::-webkit-scrollbar-thumb:hover {\n  background: var(--dsh-scrollbar-thumb-hover) !important;\n}\n\n/* ── 7. Frosted Glass Popovers, Menus & Dialogs ── */\nbody[data-omarchy-theme] [role=\"dialog\"],\nbody[data-omarchy-theme] [role=\"menu\"],\nbody[data-omarchy-theme] [class*=\"modal\"],\nbody[data-omarchy-theme] [class*=\"popover\"],\nbody[data-omarchy-theme] [class*=\"dropdown\"] {\n  border: 1px solid var(--dsw-alias-border-l3) !important;\n  border-radius: 14px !important;\n  background: var(--dsw-alias-bg-layer-1) !important;\n  backdrop-filter: blur(32px) saturate(160%) !important;\n  box-shadow: \n    0 24px 64px -12px rgba(0, 0, 0, 0.75),\n    inset 0 1px 0 0 rgba(255, 255, 255, 0.1) !important;\n}\n\nbody[data-omarchy-theme] button[data-primary=\"true\"],\nbody[data-omarchy-theme] button[class*=\"primary\"] {\n  background: var(--dsw-alias-brand-primary) !important;\n  color: var(--dsw-alias-label-primary) !important;\n  border: none !important;\n  border-radius: 8px !important;\n  font-weight: 500 !important;\n  box-shadow: 0 2px 8px -1px var(--dsw-alias-brand-primary) !important;\n  transition: all 0.15s ease !important;\n}\n\nbody[data-omarchy-theme] button[data-primary=\"true\"]:hover,\nbody[data-omarchy-theme] button[class*=\"primary\"]:hover {\n  filter: brightness(1.1) !important;\n  transform: translateY(-1px) !important;\n}\n";
		//#endregion
		//#region src/client/index.tsx
		const STORAGE_KEY = "dsh-omarchy-active-theme";
		const inject = ["theme", "slots"];
		/**
		* Client plugin entry point for dsh-theme-omarchy.
		* Injects authentic Omarchy design system (atmospheric lighting,
		* tiling window borders, floating Raycast/Walker command bar, tactile cards),
		* registers Omarchy palettes into ctx.theme, and attaches the visual
		* palette picker to General settings.
		*/
		function apply(ctx) {
			ctx.effect(() => {
				if (typeof document === "undefined") return;
				const tag = document.createElement("style");
				tag.dataset.plugin = "dsh-theme-omarchy";
				tag.textContent = `${styles_default}\n\n${omarchy_theme_default}`;
				document.head.appendChild(tag);
				return () => {
					tag.remove();
				};
			}, "dsh-theme-omarchy: stylesheet");
			const syncBodyTheme = (targetId) => {
				if (typeof document === "undefined") return;
				const activeId = targetId || localStorage.getItem(STORAGE_KEY) || DEFAULT_OMARCHY_THEME.id;
				const foundTheme = OMARCHY_THEMES.find((t) => t.id === activeId);
				if (foundTheme) applyThemeDirectly(foundTheme);
				else delete document.body.dataset.omarchyTheme;
			};
			for (const item of OMARCHY_THEMES) ctx.effect(() => {
				try {
					return ctx.theme.register({
						id: item.id,
						colorScheme: item.colorScheme,
						tokens: item.tokens
					});
				} catch (err) {
					console.warn(`[dsh-theme-omarchy] Theme "${item.id}" registration note:`, err);
					return () => {};
				}
			}, `dsh-theme-omarchy: register ${item.id}`);
			ctx.effect(() => {
				try {
					const stored = typeof localStorage !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
					const current = ctx.theme.getTheme();
					const activeId = stored || current.preference || current.active?.id || DEFAULT_OMARCHY_THEME.id;
					syncBodyTheme(activeId);
					if (stored && stored.startsWith("omarchy-")) ctx.theme.setTheme(stored);
				} catch {}
				const listener = (snapshot) => {
					const nextId = snapshot.preference || snapshot.active?.id;
					if (nextId && nextId.startsWith("omarchy-")) syncBodyTheme(nextId);
				};
				ctx.on("theme/change", listener);
				return () => {
					if (typeof document !== "undefined") delete document.body.dataset.omarchyTheme;
				};
			}, "dsh-theme-omarchy: sync body theme");
			ctx.slots.inject("settings.general.item", () => {
				ctx.slots.register({
					name: "settings.general.item",
					id: "dsh-theme-omarchy.selector",
					order: 25
				}, () => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(OmarchyThemeSelector, { theme: ctx.theme }));
			});
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
