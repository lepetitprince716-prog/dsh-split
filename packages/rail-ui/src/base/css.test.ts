import { describe, expect, test } from "bun:test";
import { TOKEN_VALUES } from "../tokens.ts";
import { BASE_CSS } from "./css.ts";

const LOCAL_PROPERTIES = new Set(["--rl-tree-level"]);

describe("BASE_CSS", () => {
	test("references only defined --rail-* aliases or local counters", () => {
		const used = [...BASE_CSS.matchAll(/var\((--[a-z0-9-]+)/g)].map((match) => match[1] ?? "");
		expect(used.length).toBeGreaterThan(50);
		const unknown = used.filter((name) => !(name in TOKEN_VALUES) && !LOCAL_PROPERTIES.has(name));
		expect(unknown).toEqual([]);
	});

	test("contains no literal colours", () => {
		expect(/#[0-9a-f]{3,8}\b/i.test(BASE_CSS)).toBe(false);
		expect(/\b(rgb|rgba|hsl|hsla|oklch|lab)\(/i.test(BASE_CSS)).toBe(false);
		expect(/(?<![-\w])(white|black)(?![-\w])/.test(BASE_CSS)).toBe(false);
	});

	test("uses only rl- class names", () => {
		const classes = [...BASE_CSS.matchAll(/\.([a-z][a-z0-9-]*)/g)].map((match) => match[1] ?? "");
		const foreign = classes.filter((name) => !name.startsWith("rl-") && !/^\d/.test(name));
		expect(foreign).toEqual([]);
	});

	test("stills every animation under prefers-reduced-motion", () => {
		const reduced = BASE_CSS.slice(BASE_CSS.indexOf("@media (prefers-reduced-motion: reduce)"));
		for (const animated of [
			".rl-status-dot",
			".rl-spinner",
			".rl-skeleton",
			".rl-toast",
			".rl-disclosure-panel",
		]) {
			expect(reduced).toContain(animated);
		}
		expect(BASE_CSS).toContain(
			'.rl-status-dot[data-status="running"]{background:var(--rail-business);animation:rl-breathe 1.2s',
		);
	});

	test("small segments reach a 24 px target through the container padding", () => {
		expect(BASE_CSS).toContain(
			'.rl-segmented-sm .rl-segment::after{content:"";position:absolute;inset:-2px 0;}',
		);
	});

	test("the overlay root is click-through, stacks above the host panels, and its layers opt back in", () => {
		expect(BASE_CSS).toContain(
			".rl-overlay{position:fixed;inset:0;z-index:var(--rail-z-overlay);pointer-events:none;}",
		);
		expect(BASE_CSS).toContain(
			".rl-overlay .rl-layer,.rl-overlay .rl-modal-mask,.rl-overlay .rl-toast{pointer-events:auto;}",
		);
	});

	test("field hover borders never outrank the focus, open or error borders", () => {
		// `:where()` keeps hover at one class of specificity; `:focus`, `[aria-expanded]` and
		// `[aria-invalid]` rules have two, so they win while the pointer rests on the field.
		expect(BASE_CSS).toContain(
			".rl-input:where(:hover:not(:disabled)),.rl-textarea:where(:hover:not(:disabled)),.rl-select:where(:hover:not(:disabled)){border-color:var(--rail-border-4);}",
		);
		expect(BASE_CSS).not.toMatch(/\.rl-(input|textarea|select):hover/);
	});

	test("modal footer buttons wrap to a new line instead of shrinking", () => {
		expect(BASE_CSS).toContain(".rl-modal-footer{display:flex;flex-wrap:wrap;");
		expect(BASE_CSS).toContain(".rl-modal-footer>.rl-btn{flex:none;max-width:100%;}");
	});

	test("the switch follows dsh: brand track and foreground thumb when on", () => {
		expect(BASE_CSS).toContain(
			'.rl-switch[aria-checked="true"] .rl-switch-track{background:var(--rail-switch-on);}',
		);
		expect(BASE_CSS).toContain(
			'.rl-switch[aria-checked="true"] .rl-switch-thumb{transform:translateX(12px);background:var(--rail-text-on-accent);}',
		);
	});

	test("never combines an elevation token with a border in one rule", () => {
		const rules = BASE_CSS.split("}").filter((rule) => rule.includes("--rail-elevation-"));
		for (const rule of rules) expect(rule).not.toMatch(/border:[^;]*var\(--rail-border-/);
	});
});
