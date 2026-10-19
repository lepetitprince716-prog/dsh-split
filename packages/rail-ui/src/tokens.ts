/**
 * Semantic aliases over the dsh theme. Every value is a host token,
 * a length, or a calc()/color-mix() of host tokens, so light, dark and user skins all follow the
 * host. Only tokens that exist in dsh-client-ui-theme 0.2.1-rc.1 are referenced.
 */
export const TOKEN_VALUES = {
	"--rail-s1": "4px",
	"--rail-s2": "8px",
	"--rail-s3": "12px",
	"--rail-s4": "16px",
	"--rail-s5": "24px",
	"--rail-s6": "32px",

	"--rail-font-body": "var(--dsw-font-xs-13)",
	"--rail-font-body-strong": "var(--dsw-font-xs-strong-13)",
	"--rail-font-secondary": "var(--dsw-font-xxs-12)",
	"--rail-font-secondary-strong": "var(--dsw-font-xxs-strong-12)",
	"--rail-font-caption": "var(--dsw-font-xxxs-11)",
	"--rail-font-caption-strong": "var(--dsw-font-xxxs-strong-11)",
	"--rail-font-title": "var(--dsw-font-s-strong-14)",
	"--rail-font-family": "var(--dsw-font-family)",
	"--rail-font-code": "var(--ds-font-family-code)",

	"--rail-radius-xs": "var(--dsw-radius-xs)",
	"--rail-radius-sm": "var(--dsw-radius-sm)",
	"--rail-radius-md": "var(--dsw-radius-md)",
	"--rail-radius-lg": "var(--dsw-radius-lg)",
	"--rail-radius-xl": "var(--dsw-radius-xl)",
	"--rail-radius-panel": "var(--dsw-radius-panel)",

	"--rail-bg": "var(--dsw-alias-bg-base)",
	"--rail-bg-1": "var(--dsw-alias-bg-layer-1)",
	"--rail-bg-2": "var(--dsw-alias-bg-layer-2)",
	"--rail-bg-3": "var(--dsw-alias-bg-layer-3)",
	"--rail-bg-sidebar": "var(--dsw-specific-sidebar-fill)",
	"--rail-bg-skeleton": "var(--dsw-alias-bg-skeleton)",
	"--rail-bg-code": "var(--dsw-alias-markdown-code-block)",
	"--rail-bg-inline-code": "var(--dsw-alias-markdown-inline-code)",
	"--rail-mask": "var(--dsw-alias-bg-mask-1)",

	"--rail-text": "var(--dsw-alias-label-primary)",
	"--rail-text-secondary": "var(--dsw-alias-label-secondary)",
	"--rail-text-tertiary": "var(--dsw-alias-label-tertiary)",
	"--rail-text-caption": "var(--dsw-alias-label-caption)",
	"--rail-text-on-accent": "var(--dsw-alias-label-primary-foreground)",
	"--rail-link": "var(--dsw-alias-link)",

	"--rail-border-1": "var(--dsw-alias-border-l1)",
	"--rail-border-2": "var(--dsw-alias-border-l2)",
	"--rail-border-3": "var(--dsw-alias-border-l3)",
	"--rail-border-4": "var(--dsw-alias-border-l4)",
	"--rail-hairline": "0.5px",

	"--rail-hover": "var(--dsw-alias-interactive-bg-hover)",
	"--rail-active": "var(--dsw-alias-interactive-bg-active)",
	"--rail-hover-danger": "var(--dsw-alias-interactive-bg-hover-danger)",
	"--rail-button-primary": "var(--dsw-alias-button-primary-fill)",
	"--rail-button-primary-hover": "var(--dsw-alias-button-primary-hover)",
	"--rail-button-floating": "var(--dsw-alias-button-floating-fill)",
	"--rail-button-floating-hover": "var(--dsw-alias-button-floating-hover)",
	"--rail-switch-thumb": "var(--dsw-alias-switch-thumb)",
	"--rail-switch-on": "var(--dsw-alias-brand-primary)",

	"--rail-business": "var(--dsw-alias-state-business-primary)",
	"--rail-business-soft": "var(--dsw-alias-state-business-tertiary)",
	"--rail-success": "var(--dsw-alias-state-success-primary)",
	"--rail-success-soft":
		"color-mix(in srgb, var(--dsw-alias-state-success-primary) 12%, transparent)",
	"--rail-warn": "var(--dsw-alias-state-warn-primary)",
	"--rail-warn-label": "var(--dsw-alias-state-warn-label)",
	"--rail-warn-soft": "color-mix(in srgb, var(--dsw-alias-state-warn-primary) 12%, transparent)",
	"--rail-error": "var(--dsw-alias-state-error-primary)",
	"--rail-error-soft": "color-mix(in srgb, var(--dsw-alias-state-error-primary) 12%, transparent)",
	"--rail-idle": "var(--dsw-alias-state-idle-primary)",
	"--rail-info-soft":
		"color-mix(in srgb, var(--dsw-alias-state-business-primary) 12%, transparent)",

	"--rail-diff-added-bg": "var(--dsw-alias-file-diff-added-bg)",
	"--rail-diff-added-gutter": "var(--dsw-alias-file-diff-added-gutter)",
	"--rail-diff-added-marker": "var(--dsw-alias-file-diff-added-marker)",
	"--rail-diff-deleted-bg": "var(--dsw-alias-file-diff-deleted-bg)",
	"--rail-diff-deleted-gutter": "var(--dsw-alias-file-diff-deleted-gutter)",
	"--rail-diff-deleted-marker": "var(--dsw-alias-file-diff-deleted-marker)",
	"--rail-diff-added-inline": "var(--dsw-alias-code-diff-added)",
	"--rail-diff-deleted-inline": "var(--dsw-alias-code-diff-deleted)",

	"--rail-elevation-panel": "var(--dsw-elevation-panel)",
	"--rail-elevation-soft": "var(--dsw-elevation-soft)",
	"--rail-menu-fill": "var(--dsw-menu-surface-fill)",
	"--rail-menu-filter": "var(--dsw-menu-backdrop-filter)",
	"--rail-toast-bg": "var(--dsw-alias-toast-bg)",
	"--rail-toast-label": "var(--dsw-alias-toast-label)",
	"--rail-tooltip-bg": "var(--dsw-alias-tooltip-bg)",

	"--rail-focus-ring":
		"var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary))",
	// Above the host's full-screen right panel (dock layer 40, float layer 60); the host's own modal
	// root uses 1000.
	"--rail-z-overlay": "1000",
	"--rail-duration": "150ms",
	"--rail-ease-out": "cubic-bezier(0.2, 0, 0, 1)",
} as const;

export type RailToken = keyof typeof TOKEN_VALUES;

/** Root class every rail surface carries; it scopes the aliases and the base typography. */
export const ROOT_CLASS = "rl-root";

/** `var(--rail-…)` reference for inline styles. */
export function token(name: RailToken): string {
	return `var(${name})`;
}

/** The alias block plus base typography, scoped to `.rl-root`. */
export function tokensCss(): string {
	const declarations = Object.entries(TOKEN_VALUES)
		.map(([name, value]) => `${name}:${value};`)
		.join("");
	return `.${ROOT_CLASS}{${declarations}font:var(--rail-font-body);color:var(--rail-text);-webkit-font-smoothing:antialiased;font-variant-numeric:tabular-nums;}`;
}
