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
		//#endregion
		//#region src/palettes/index.ts
		const OMARCHY_THEMES = [
			{
				id: "omarchy-giants",
				name: "Giants",
				subtitle: "Ink on aged paper, terracotta accent",
				colorScheme: "dark",
				accentColor: "#97786d",
				bgPreview: "#27241f",
				tokens: {
					"--dsw-alias-bg-base": "#27241f",
					"--dsw-alias-bg-layer-1": "#33302a",
					"--dsw-alias-bg-layer-2": "#3d3a35",
					"--dsw-alias-bg-layer-3": "#141210",
					"--dsw-alias-bg-overlay": "#33302a",
					"--dsw-specific-sidebar-fill": "#1d1b17",
					"--dsw-specific-bubble": "#33302a",
					"--dsw-specific-bubble-highlight": "#3d3a35",
					"--dsw-specific-input-major": "#1d1b17",
					"--dsw-alias-markdown-code-block": "#141210",
					"--dsw-alias-markdown-code-block-banner": "#1d1b17",
					"--dsw-alias-markdown-inline-code": "#1d1b17",
					"--dsw-alias-markdown-tag": "#3d3a35",
					"--dsw-alias-label-primary": "#E1D5C2",
					"--dsw-alias-label-secondary": "#8a857a",
					"--dsw-alias-label-tertiary": "#666157",
					"--dsw-alias-label-caption": "#7a756b",
					"--dsw-alias-brand-primary": "#97786d",
					"--dsw-alias-link": "#c29a8c",
					"--dsw-alias-button-primary-fill": "#97786d",
					"--dsw-alias-button-primary-hover": "#aa887b",
					"--dsw-alias-interactive-bg-hover": "rgba(225, 213, 194, 0.07)",
					"--dsw-alias-interactive-bg-active": "rgba(225, 213, 194, 0.12)",
					"--dsw-alias-bg-document-selection": "rgba(79, 72, 64, 0.65)",
					"--dsw-alias-border-l1": "rgba(225, 213, 194, 0.08)",
					"--dsw-alias-border-l2": "rgba(225, 213, 194, 0.15)",
					"--dsw-alias-border-l3": "rgba(225, 213, 194, 0.22)",
					"--dsw-alias-border-l4": "rgba(225, 213, 194, 0.30)",
					"--dsw-elevation-stroke-color": "rgba(225, 213, 194, 0.12)",
					"--dsh-scrollbar-thumb": "#3d3a35",
					"--dsh-scrollbar-thumb-hover": "#4f4840"
				}
			},
			{
				id: "omarchy-diablo",
				name: "Diablo Dreams",
				subtitle: "Lamborghini Diablo 6.0 golden-brown & cream",
				colorScheme: "dark",
				accentColor: "#ab6a57",
				bgPreview: "#100e0a",
				tokens: {
					"--dsw-alias-bg-base": "#100e0a",
					"--dsw-alias-bg-layer-1": "#1c1a16",
					"--dsw-alias-bg-layer-2": "#282623",
					"--dsw-alias-bg-layer-3": "#080705",
					"--dsw-alias-bg-overlay": "#1c1a16",
					"--dsw-specific-sidebar-fill": "#0c0b08",
					"--dsw-specific-bubble": "#1c1a16",
					"--dsw-specific-bubble-highlight": "#282623",
					"--dsw-specific-input-major": "#0c0b08",
					"--dsw-alias-markdown-code-block": "#080705",
					"--dsw-alias-markdown-code-block-banner": "#0c0b08",
					"--dsw-alias-markdown-inline-code": "#14120e",
					"--dsw-alias-markdown-tag": "#282623",
					"--dsw-alias-label-primary": "#FEF2C9",
					"--dsw-alias-label-secondary": "#817a6b",
					"--dsw-alias-label-tertiary": "#595346",
					"--dsw-alias-label-caption": "#6d6657",
					"--dsw-alias-brand-primary": "#ab6a57",
					"--dsw-alias-link": "#d48872",
					"--dsw-alias-button-primary-fill": "#ab6a57",
					"--dsw-alias-button-primary-hover": "#c27964",
					"--dsw-alias-interactive-bg-hover": "rgba(254, 242, 201, 0.07)",
					"--dsw-alias-interactive-bg-active": "rgba(254, 242, 201, 0.12)",
					"--dsw-alias-bg-document-selection": "rgba(115, 94, 70, 0.65)",
					"--dsw-alias-border-l1": "rgba(254, 242, 201, 0.08)",
					"--dsw-alias-border-l2": "rgba(254, 242, 201, 0.15)",
					"--dsw-alias-border-l3": "rgba(254, 242, 201, 0.22)",
					"--dsw-alias-border-l4": "rgba(254, 242, 201, 0.30)",
					"--dsw-elevation-stroke-color": "rgba(254, 242, 201, 0.12)",
					"--dsh-scrollbar-thumb": "#282623",
					"--dsh-scrollbar-thumb-hover": "#3d3831"
				}
			},
			{
				id: "omarchy-zonda",
				name: "Zonda Zoom",
				subtitle: "Pagani Zonda HH carbon-black & icy blue",
				colorScheme: "dark",
				accentColor: "#6b7fbe",
				bgPreview: "#141313",
				tokens: {
					"--dsw-alias-bg-base": "#141313",
					"--dsw-alias-bg-layer-1": "#201f1f",
					"--dsw-alias-bg-layer-2": "#2c2b2b",
					"--dsw-alias-bg-layer-3": "#0a0a0a",
					"--dsw-alias-bg-overlay": "#201f1f",
					"--dsw-specific-sidebar-fill": "#0f0e0e",
					"--dsw-specific-bubble": "#201f1f",
					"--dsw-specific-bubble-highlight": "#2c2b2b",
					"--dsw-specific-input-major": "#0f0e0e",
					"--dsw-alias-markdown-code-block": "#0a0a0a",
					"--dsw-alias-markdown-code-block-banner": "#0f0e0e",
					"--dsw-alias-markdown-inline-code": "#181717",
					"--dsw-alias-markdown-tag": "#2c2b2b",
					"--dsw-alias-label-primary": "#F6F4EC",
					"--dsw-alias-label-secondary": "#a39c9c",
					"--dsw-alias-label-tertiary": "#706b6b",
					"--dsw-alias-label-caption": "#858080",
					"--dsw-alias-brand-primary": "#6b7fbe",
					"--dsw-alias-link": "#8ea1e2",
					"--dsw-alias-button-primary-fill": "#6b7fbe",
					"--dsw-alias-button-primary-hover": "#7f93d3",
					"--dsw-alias-interactive-bg-hover": "rgba(246, 244, 236, 0.07)",
					"--dsw-alias-interactive-bg-active": "rgba(246, 244, 236, 0.12)",
					"--dsw-alias-bg-document-selection": "rgba(56, 72, 115, 0.65)",
					"--dsw-alias-border-l1": "rgba(246, 244, 236, 0.08)",
					"--dsw-alias-border-l2": "rgba(246, 244, 236, 0.15)",
					"--dsw-alias-border-l3": "rgba(246, 244, 236, 0.22)",
					"--dsw-alias-border-l4": "rgba(246, 244, 236, 0.30)",
					"--dsw-elevation-stroke-color": "rgba(246, 244, 236, 0.12)",
					"--dsh-scrollbar-thumb": "#2c2b2b",
					"--dsh-scrollbar-thumb-hover": "#403e3e"
				}
			},
			{
				id: "omarchy-jade",
				name: "Jade Horse",
				subtitle: "Year of the Horse deep pine & nephrite jade",
				colorScheme: "dark",
				accentColor: "#5b9e7d",
				bgPreview: "#0e1411",
				tokens: {
					"--dsw-alias-bg-base": "#0e1411",
					"--dsw-alias-bg-layer-1": "#18201b",
					"--dsw-alias-bg-layer-2": "#212c26",
					"--dsw-alias-bg-layer-3": "#050807",
					"--dsw-alias-bg-overlay": "#18201b",
					"--dsw-specific-sidebar-fill": "#090e0c",
					"--dsw-specific-bubble": "#18201b",
					"--dsw-specific-bubble-highlight": "#212c26",
					"--dsw-specific-input-major": "#090e0c",
					"--dsw-alias-markdown-code-block": "#050807",
					"--dsw-alias-markdown-code-block-banner": "#090e0c",
					"--dsw-alias-markdown-inline-code": "#111714",
					"--dsw-alias-markdown-tag": "#212c26",
					"--dsw-alias-label-primary": "#E8F0EA",
					"--dsw-alias-label-secondary": "#79887e",
					"--dsw-alias-label-tertiary": "#546158",
					"--dsw-alias-label-caption": "#647268",
					"--dsw-alias-brand-primary": "#5b9e7d",
					"--dsw-alias-link": "#7ec4a1",
					"--dsw-alias-button-primary-fill": "#5b9e7d",
					"--dsw-alias-button-primary-hover": "#6eb391",
					"--dsw-alias-interactive-bg-hover": "rgba(232, 240, 234, 0.07)",
					"--dsw-alias-interactive-bg-active": "rgba(232, 240, 234, 0.12)",
					"--dsw-alias-bg-document-selection": "rgba(45, 78, 62, 0.65)",
					"--dsw-alias-border-l1": "rgba(232, 240, 234, 0.08)",
					"--dsw-alias-border-l2": "rgba(232, 240, 234, 0.15)",
					"--dsw-alias-border-l3": "rgba(232, 240, 234, 0.22)",
					"--dsw-alias-border-l4": "rgba(232, 240, 234, 0.30)",
					"--dsw-elevation-stroke-color": "rgba(232, 240, 234, 0.12)",
					"--dsh-scrollbar-thumb": "#212c26",
					"--dsh-scrollbar-thumb-hover": "#324038"
				}
			}
		];
		//#endregion
		//#region src/client/selector.tsx
		function OmarchyThemeSelector({ theme }) {
			const [currentId, setCurrentId] = (0, react.useState)(() => {
				try {
					const snap = theme.getTheme();
					return snap.preference || snap.active?.id || "system";
				} catch {
					return "system";
				}
			});
			(0, react.useEffect)(() => {
				const interval = setInterval(() => {
					try {
						const snap = theme.getTheme();
						const id = snap.preference || snap.active?.id || "system";
						setCurrentId(id);
					} catch {}
				}, 500);
				return () => clearInterval(interval);
			}, [theme]);
			const handleSelect = (t) => {
				try {
					theme.setTheme(t.id);
					setCurrentId(t.id);
				} catch (e) {
					console.error("[dsh-theme-omarchy] Failed to apply theme:", e);
				}
			};
			const handleReset = () => {
				try {
					theme.setTheme("system");
					setCurrentId("system");
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
								children: "Opinionated"
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
							children: "Restore System Default"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: "omarchy-font-toggle",
							onClick: handleApplyFonts,
							title: "Apply JetBrains Mono / SF Mono for Code & Terminal",
							children: "Use Omarchy Typography"
						})]
					})
				]
			});
		}
		//#endregion
		//#region src/client/styles.css?raw
		var styles_default = ".omarchy-settings-group {\n  margin-top: 14px;\n  padding-top: 14px;\n  border-top: 1px solid var(--dsw-alias-border-l1, rgba(255, 255, 255, 0.08));\n}\n\n.omarchy-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n\n.omarchy-title {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--dsw-alias-label-primary, inherit);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.omarchy-badge {\n  font-size: 10px;\n  font-weight: 500;\n  padding: 1px 6px;\n  border-radius: 999px;\n  background: rgba(151, 120, 109, 0.2);\n  color: var(--dsw-alias-brand-primary, #97786d);\n  letter-spacing: 0.3px;\n  text-transform: uppercase;\n}\n\n.omarchy-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n}\n\n@media (min-width: 640px) {\n  .omarchy-grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n\n.omarchy-card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 8px 10px;\n  border-radius: 8px;\n  border: 1px solid var(--dsw-alias-border-l2, rgba(255, 255, 255, 0.1));\n  background: var(--dsw-alias-bg-layer-1, rgba(255, 255, 255, 0.04));\n  cursor: pointer;\n  text-align: left;\n  transition: all 0.15s ease;\n  user-select: none;\n}\n\n.omarchy-card:hover {\n  border-color: var(--dsw-alias-brand-primary, #97786d);\n  background: var(--dsw-alias-bg-layer-2, rgba(255, 255, 255, 0.07));\n}\n\n.omarchy-card[data-active=\"true\"] {\n  border-color: var(--dsw-alias-brand-primary, #97786d);\n  box-shadow: 0 0 0 2px var(--dsw-alias-brand-primary, #97786d);\n}\n\n.omarchy-card-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 4px;\n}\n\n.omarchy-swatch {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 1.5px solid var(--dsw-alias-border-l3, rgba(255, 255, 255, 0.2));\n  flex-shrink: 0;\n}\n\n.omarchy-active-indicator {\n  font-size: 11px;\n  color: var(--dsw-alias-brand-primary, #97786d);\n  font-weight: 600;\n}\n\n.omarchy-name {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--dsw-alias-label-primary, inherit);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.omarchy-subtitle {\n  font-size: 10px;\n  color: var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.6));\n  line-height: 1.3;\n  margin-top: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.omarchy-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n}\n\n.omarchy-btn-reset {\n  font-size: 11px;\n  padding: 3px 8px;\n  border-radius: 6px;\n  border: 1px solid var(--dsw-alias-border-l2, rgba(255, 255, 255, 0.15));\n  background: transparent;\n  color: var(--dsw-alias-label-secondary, inherit);\n  cursor: pointer;\n}\n\n.omarchy-btn-reset:hover {\n  background: var(--dsw-alias-interactive-bg-hover, rgba(255, 255, 255, 0.05));\n  color: var(--dsw-alias-label-primary, inherit);\n}\n\n.omarchy-font-toggle {\n  font-size: 11px;\n  padding: 3px 8px;\n  border-radius: 6px;\n  border: 1px solid var(--dsw-alias-border-l2, rgba(255, 255, 255, 0.15));\n  background: transparent;\n  color: var(--dsw-alias-label-secondary, inherit);\n  cursor: pointer;\n}\n\n.omarchy-font-toggle:hover {\n  background: var(--dsw-alias-interactive-bg-hover, rgba(255, 255, 255, 0.05));\n  color: var(--dsw-alias-label-primary, inherit);\n}\n";
		//#endregion
		//#region src/client/index.tsx
		const inject = ["theme", "slots"];
		/**
		* Client plugin entry point for dsh-theme-omarchy.
		* Registers Omarchy palettes into ctx.theme and attaches the visual
		* palette picker to the General settings view.
		*/
		function apply(ctx) {
			ctx.effect(() => {
				if (typeof document === "undefined") return;
				const tag = document.createElement("style");
				tag.dataset.plugin = "dsh-theme-omarchy";
				tag.textContent = styles_default;
				document.head.appendChild(tag);
				return () => {
					tag.remove();
				};
			}, "dsh-theme-omarchy: stylesheet");
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
			ctx.slots.inject("settings.general.item", () => {
				ctx.slots.register({
					name: "settings.general.item",
					id: "omarchy-themes",
					order: 10.5
				}, () => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(OmarchyThemeSelector, { theme: ctx.theme }));
			});
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
