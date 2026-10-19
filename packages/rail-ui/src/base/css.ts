// Styles of the base, form and container components. Only `--rail-*` aliases from
// `src/tokens.ts` (plus the local `--rl-tree-level` counter) appear here; no literal colours.
// Elevated surfaces use an elevation token and never a border at the same time (DESIGN 2).

/** Every focusable kit element; they share one keyboard focus ring. */
const FOCUSABLE = [
	".rl-btn",
	".rl-chip-button",
	".rl-input",
	".rl-textarea",
	".rl-select",
	".rl-switch",
	".rl-segment",
	".rl-menu-item",
	".rl-row",
	".rl-disclosure-trigger",
	".rl-toast-action",
	".rl-toast-close",
	".rl-scroll",
	".rl-popover",
	".rl-modal-layer",
	".rl-menu",
];

const focusVisible = FOCUSABLE.map((selector) => `.rl-root ${selector}:focus-visible`).join(",");

const FOCUS = `
:is(${focusVisible}),.rl-root .rl-checkbox-input:focus-visible+.rl-checkbox-box{outline:var(--rail-focus-ring);outline-offset:2px;}
html[data-input-modality="pointer"] :is(${focusVisible}),html[data-input-modality="pointer"] .rl-root .rl-checkbox-input:focus-visible+.rl-checkbox-box{outline:none;}
.rl-root .rl-modal-layer:focus-visible,.rl-root .rl-menu:focus-visible,.rl-root .rl-popover:focus-visible{outline:none;}
`;

const BUTTONS = `
.rl-btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:var(--rail-s1);box-sizing:border-box;margin:0;border:var(--rail-hairline) solid transparent;font:var(--rail-font-body-strong);font-family:var(--rail-font-family);color:var(--rail-text);background:transparent;cursor:pointer;white-space:nowrap;user-select:none;transition:background-color var(--rail-duration) var(--rail-ease-out),color var(--rail-duration) var(--rail-ease-out);}
.rl-btn-md{height:32px;min-width:32px;padding:0 var(--rail-s3);border-radius:var(--rail-radius-md);}
.rl-btn-sm{height:24px;min-width:24px;padding:0 var(--rail-s2);border-radius:var(--rail-radius-sm);font:var(--rail-font-secondary-strong);}
.rl-btn-icon{padding:0;}
.rl-btn-md.rl-btn-icon{width:32px;}
.rl-btn-sm.rl-btn-icon{width:24px;}
.rl-btn-glyph{display:inline-flex;flex:none;}
.rl-btn-label{overflow:hidden;text-overflow:ellipsis;}
.rl-btn-primary{background:var(--rail-button-primary);color:var(--rail-text-on-accent);}
.rl-btn-primary:hover:not(:disabled){background:var(--rail-button-primary-hover);}
.rl-btn-primary:active:not(:disabled){filter:brightness(0.95);}
.rl-btn-secondary{border-color:var(--rail-border-3);background:var(--rail-button-floating);}
.rl-btn-secondary:hover:not(:disabled){background:var(--rail-button-floating-hover);}
.rl-btn-secondary:active:not(:disabled){background:var(--rail-active);}
.rl-btn-ghost{color:var(--rail-text-secondary);}
.rl-btn-ghost:hover:not(:disabled){background:var(--rail-hover);color:var(--rail-text);}
.rl-btn-ghost:active:not(:disabled){background:var(--rail-active);}
.rl-btn-danger{border-color:var(--rail-border-3);color:var(--rail-error);}
.rl-btn-danger:hover:not(:disabled){background:var(--rail-hover-danger);}
.rl-btn-danger:active:not(:disabled){background:var(--rail-error-soft);}
.rl-btn:disabled{opacity:0.5;cursor:default;}
.rl-btn[aria-busy="true"]{cursor:progress;}
`;

const CHIPS = `
.rl-chip{position:relative;display:inline-flex;align-items:center;gap:var(--rail-s1);box-sizing:border-box;height:18px;max-width:100%;padding:0 6px;border:0;border-radius:var(--rail-radius-xs);font:var(--rail-font-caption-strong);font-family:var(--rail-font-family);color:var(--rail-text-secondary);background:var(--rail-bg-2);white-space:nowrap;vertical-align:middle;}
.rl-chip-label{overflow:hidden;text-overflow:ellipsis;}
.rl-chip-glyph{display:inline-flex;flex:none;}
.rl-chip-glyph .rl-glyph{width:12px;height:12px;}
.rl-chip-mono .rl-chip-label{font-family:var(--rail-font-code);}
.rl-chip-success{color:var(--rail-success);background:var(--rail-success-soft);}
.rl-chip-warn{color:var(--rail-warn-label);background:var(--rail-warn-soft);}
.rl-chip-error{color:var(--rail-error);background:var(--rail-error-soft);}
.rl-chip-info{color:var(--rail-business);background:var(--rail-info-soft);}
.rl-chip-business{color:var(--rail-business);background:var(--rail-business-soft);}
.rl-chip-button{margin:0;cursor:pointer;}
.rl-chip-button::after{content:"";position:absolute;inset:-3px 0;}
.rl-chip-button:hover:not(:disabled){filter:brightness(0.97);text-decoration:underline;}
.rl-chip-button:disabled{opacity:0.5;cursor:default;}
`;

const SMALL = `
.rl-status-dot{display:inline-block;flex:none;width:8px;height:8px;border-radius:50%;background:var(--rail-idle);}
.rl-status-dot[data-status="running"]{background:var(--rail-business);animation:rl-breathe 1.2s ease-in-out infinite;}
.rl-status-dot[data-status="attention"]{background:var(--rail-warn);}
.rl-status-dot[data-status="done"]{background:var(--rail-success);}
.rl-status-dot[data-status="error"]{background:var(--rail-error);}
@keyframes rl-breathe{0%,100%{opacity:1;}50%{opacity:0.35;}}
.rl-kbd{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:18px;height:18px;padding:0 var(--rail-s1);border-radius:var(--rail-radius-xs);font:var(--rail-font-caption);font-family:var(--rail-font-family);color:var(--rail-text-secondary);background:var(--rail-bg-2);}
.rl-divider{flex:none;margin:0;border:0;background:var(--rail-border-2);}
.rl-divider[data-orientation="horizontal"]{width:100%;height:var(--rail-hairline);}
.rl-divider[data-orientation="vertical"]{width:var(--rail-hairline);height:auto;align-self:stretch;}
.rl-spinner{display:inline-block;flex:none;box-sizing:border-box;border-radius:50%;border:1.5px solid var(--rail-border-3);border-top-color:currentColor;animation:rl-spin 0.8s linear infinite;}
.rl-spinner-sm{width:12px;height:12px;}
.rl-spinner-md{width:16px;height:16px;}
@keyframes rl-spin{to{transform:rotate(360deg);}}
.rl-glyph{display:block;flex:none;}
`;

const FORMS = `
.rl-field{display:flex;flex-direction:column;gap:var(--rail-s1);min-width:0;}
.rl-field-label{font:var(--rail-font-secondary-strong);color:var(--rail-text);}
.rl-field-description{margin:0;font:var(--rail-font-secondary);color:var(--rail-text-tertiary);}
.rl-field-error{margin:0;font:var(--rail-font-secondary);color:var(--rail-error);}
.rl-input,.rl-textarea,.rl-select{box-sizing:border-box;width:100%;min-width:0;margin:0;border:var(--rail-hairline) solid var(--rail-border-3);border-radius:var(--rail-radius-sm);font:var(--rail-font-body);font-family:var(--rail-font-family);color:var(--rail-text);background:var(--rail-bg-1);transition:border-color var(--rail-duration) var(--rail-ease-out);}
.rl-input-md,.rl-select-md{height:32px;padding:0 var(--rail-s3);}
.rl-input-sm,.rl-select-sm{height:24px;padding:0 var(--rail-s2);font:var(--rail-font-secondary);}
.rl-textarea{display:block;padding:6px var(--rail-s3);resize:none;line-height:20px;}
.rl-input::placeholder,.rl-textarea::placeholder{color:var(--rail-text-caption);}
.rl-input:where(:hover:not(:disabled)),.rl-textarea:where(:hover:not(:disabled)),.rl-select:where(:hover:not(:disabled)){border-color:var(--rail-border-4);}
.rl-input:focus,.rl-textarea:focus,.rl-select[aria-expanded="true"]{border-color:var(--rail-business);}
.rl-input[aria-invalid="true"],.rl-textarea[aria-invalid="true"],.rl-select[aria-invalid="true"]{border-color:var(--rail-error);}
.rl-input:disabled,.rl-textarea:disabled,.rl-select:disabled{opacity:0.5;cursor:default;}
.rl-select{display:inline-flex;align-items:center;justify-content:space-between;gap:var(--rail-s2);text-align:start;cursor:pointer;}
.rl-select-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.rl-select-value[data-placeholder="true"]{color:var(--rail-text-caption);}
.rl-select-chevron{display:inline-flex;flex:none;color:var(--rail-text-tertiary);}
.rl-switch-field{display:inline-flex;align-items:center;gap:var(--rail-s2);}
.rl-switch{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:32px;height:24px;margin:0;padding:0;border:0;border-radius:var(--rail-radius-sm);background:transparent;cursor:pointer;}
.rl-switch-track{position:relative;display:block;width:28px;height:16px;border-radius:999px;background:var(--rail-border-3);transition:background-color var(--rail-duration) var(--rail-ease-out);}
.rl-switch-thumb{position:absolute;top:2px;left:2px;width:12px;height:12px;border-radius:50%;background:var(--rail-switch-thumb);box-shadow:var(--rail-elevation-soft);transition:transform var(--rail-duration) var(--rail-ease-out);}
.rl-switch[aria-checked="true"] .rl-switch-track{background:var(--rail-switch-on);}
.rl-switch[aria-checked="true"] .rl-switch-thumb{transform:translateX(12px);background:var(--rail-text-on-accent);}
.rl-switch:disabled{opacity:0.5;cursor:default;}
.rl-switch-label{font:var(--rail-font-body);color:var(--rail-text);cursor:pointer;}
.rl-switch-field[data-disabled="true"] .rl-switch-label{color:var(--rail-text-tertiary);cursor:default;}
.rl-checkbox{position:relative;display:inline-flex;align-items:center;gap:var(--rail-s2);min-height:24px;font:var(--rail-font-body);color:var(--rail-text);cursor:pointer;}
.rl-checkbox-input{position:absolute;top:0;left:0;width:24px;height:24px;margin:0;opacity:0;cursor:inherit;}
.rl-checkbox-box{display:inline-flex;align-items:center;justify-content:center;flex:none;box-sizing:border-box;width:16px;height:16px;margin:4px;border:var(--rail-hairline) solid var(--rail-border-4);border-radius:var(--rail-radius-xs);color:var(--rail-text-on-accent);background:var(--rail-bg-1);transition:background-color var(--rail-duration) var(--rail-ease-out);}
.rl-checkbox:hover .rl-checkbox-input:not(:disabled)+.rl-checkbox-box{border-color:var(--rail-business);}
.rl-checkbox-input:checked+.rl-checkbox-box,.rl-checkbox-input:indeterminate+.rl-checkbox-box{border-color:var(--rail-business);background:var(--rail-business);}
.rl-checkbox[data-disabled="true"]{color:var(--rail-text-tertiary);cursor:default;}
.rl-checkbox[data-disabled="true"] .rl-checkbox-box{opacity:0.5;}
.rl-segmented{display:inline-flex;align-items:stretch;gap:2px;box-sizing:border-box;padding:2px;border-radius:var(--rail-radius-sm);background:var(--rail-bg-2);}
.rl-segment{display:inline-flex;align-items:center;justify-content:center;gap:var(--rail-s1);box-sizing:border-box;min-width:24px;margin:0;padding:0 var(--rail-s2);border:0;border-radius:calc(var(--rail-radius-sm) - 2px);font:var(--rail-font-secondary-strong);font-family:var(--rail-font-family);color:var(--rail-text-secondary);background:transparent;cursor:pointer;white-space:nowrap;}
.rl-segmented-md .rl-segment{height:28px;}
.rl-segmented-sm .rl-segment{position:relative;height:20px;font:var(--rail-font-caption-strong);}
.rl-segmented-sm .rl-segment::after{content:"";position:absolute;inset:-2px 0;}
.rl-segment:hover:not(:disabled){color:var(--rail-text);}
.rl-segment[aria-selected="true"]{color:var(--rail-text);background:var(--rail-bg-1);box-shadow:var(--rail-elevation-soft);}
.rl-segment:disabled{opacity:0.5;cursor:default;}
.rl-segment-glyph{display:inline-flex;}
`;

const LAYERS = `
.rl-overlay{position:fixed;inset:0;z-index:var(--rail-z-overlay);pointer-events:none;}
.rl-overlay .rl-layer,.rl-overlay .rl-modal-mask,.rl-overlay .rl-toast{pointer-events:auto;}
.rl-modal-mask{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;padding:var(--rail-s5);background:var(--rail-mask);}
.rl-modal-layer{display:flex;max-width:100%;max-height:100%;outline:none;}
.rl-modal{display:flex;flex-direction:column;box-sizing:border-box;width:100%;max-height:100%;border:0;border-radius:var(--rail-radius-panel);background:var(--rail-bg-1);box-shadow:var(--rail-elevation-panel);overflow:hidden;}
.rl-modal-sm{width:360px;}
.rl-modal-md{width:480px;}
.rl-modal-lg{width:640px;}
.rl-modal-header{display:flex;align-items:center;gap:var(--rail-s2);padding:var(--rail-s5) var(--rail-s5) 0;}
.rl-modal-title{flex:1;min-width:0;margin:0;font:var(--rail-font-title);color:var(--rail-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.rl-modal-description{margin:var(--rail-s1) var(--rail-s5) 0;font:var(--rail-font-secondary);color:var(--rail-text-secondary);}
.rl-modal-body{flex:1;min-height:0;padding:var(--rail-s4) var(--rail-s5);overflow:auto;}
.rl-modal-footer{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:var(--rail-s2);padding:0 var(--rail-s5) var(--rail-s5);}
.rl-modal-footer>.rl-btn{flex:none;max-width:100%;}
.rl-modal-header+.rl-modal-footer,.rl-modal-description+.rl-modal-footer{padding-top:var(--rail-s4);}
.rl-anchored-layer{position:fixed;box-sizing:border-box;max-width:calc(100vw - 16px);}
.rl-menu,.rl-listbox,.rl-popover{box-sizing:border-box;max-height:min(360px,calc(100vh - 16px));overflow:auto;border:0;border-radius:var(--rail-radius-md);background:var(--rail-menu-fill);backdrop-filter:var(--rail-menu-filter);-webkit-backdrop-filter:var(--rail-menu-filter);box-shadow:var(--rail-elevation-panel);color:var(--rail-text);font:var(--rail-font-body);}
.rl-menu,.rl-listbox{min-width:160px;padding:var(--rail-s1);}
.rl-popover{padding:var(--rail-s3);background:var(--rail-bg-1);backdrop-filter:none;-webkit-backdrop-filter:none;}
.rl-menu-item,.rl-option{display:flex;align-items:center;gap:var(--rail-s2);box-sizing:border-box;width:100%;min-height:28px;margin:0;padding:var(--rail-s1) var(--rail-s2);border:0;border-radius:var(--rail-radius-sm);font:var(--rail-font-body);font-family:var(--rail-font-family);color:var(--rail-text);background:transparent;text-align:start;cursor:pointer;}
.rl-menu-item:hover:not([aria-disabled="true"]),.rl-menu-item:focus,.rl-option[data-active="true"]{background:var(--rail-hover);outline:none;}
.rl-menu-item[data-danger="true"]{color:var(--rail-error);}
.rl-menu-item[data-danger="true"]:hover,.rl-menu-item[data-danger="true"]:focus{background:var(--rail-hover-danger);}
.rl-menu-item[aria-disabled="true"],.rl-option[aria-disabled="true"]{opacity:0.5;cursor:default;}
.rl-menu-glyph{display:inline-flex;flex:none;color:var(--rail-text-secondary);}
.rl-menu-label{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.rl-menu-shortcut{margin-inline-start:auto;}
.rl-menu-separator{height:var(--rail-hairline);margin:var(--rail-s1) calc(-1 * var(--rail-s1));border:0;background:var(--rail-border-2);}
.rl-option{flex-direction:column;align-items:flex-start;justify-content:center;gap:0;}
.rl-option[aria-selected="true"] .rl-option-label{font:var(--rail-font-body-strong);}
.rl-option-label{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.rl-option-description{font:var(--rail-font-caption);color:var(--rail-text-tertiary);}
.rl-listbox-group+.rl-listbox-group,.rl-option+.rl-listbox-group{margin-top:var(--rail-s1);}
.rl-listbox-group-label{padding:var(--rail-s1) var(--rail-s2);font:var(--rail-font-caption-strong);color:var(--rail-text-tertiary);}
.rl-listbox-empty{padding:var(--rail-s2);font:var(--rail-font-secondary);color:var(--rail-text-tertiary);}
.rl-tooltip-anchor{display:inline-flex;max-width:100%;}
.rl-tooltip{max-width:280px;padding:var(--rail-s1) var(--rail-s2);border-radius:var(--rail-radius-sm);font:var(--rail-font-secondary);color:var(--rail-toast-label);background:var(--rail-tooltip-bg);box-shadow:var(--rail-elevation-soft);overflow-wrap:anywhere;}
.rl-overlay .rl-layer:has(.rl-tooltip){pointer-events:none;}
.rl-toasts{position:fixed;right:var(--rail-s4);bottom:var(--rail-s4);display:flex;flex-direction:column;align-items:flex-end;gap:var(--rail-s2);max-width:calc(100vw - 32px);}
.rl-toast{display:flex;align-items:center;gap:var(--rail-s2);box-sizing:border-box;max-width:420px;min-height:36px;padding:var(--rail-s2) var(--rail-s2) var(--rail-s2) var(--rail-s3);border-radius:var(--rail-radius-md);font:var(--rail-font-body);color:var(--rail-toast-label);background:var(--rail-toast-bg);box-shadow:var(--rail-elevation-panel);animation:rl-toast-in var(--rail-duration) var(--rail-ease-out);}
.rl-toast-mark{flex:none;width:8px;height:8px;border-radius:50%;background:var(--rail-business);}
.rl-toast[data-tone="success"] .rl-toast-mark{background:var(--rail-success);}
.rl-toast[data-tone="warn"] .rl-toast-mark{background:var(--rail-warn);}
.rl-toast[data-tone="error"] .rl-toast-mark{background:var(--rail-error);}
.rl-toast-text{flex:1;min-width:0;overflow-wrap:anywhere;}
.rl-toast-action,.rl-toast-close{display:inline-flex;align-items:center;justify-content:center;flex:none;box-sizing:border-box;min-width:24px;height:24px;margin:0;padding:0 var(--rail-s2);border:0;border-radius:var(--rail-radius-sm);font:var(--rail-font-body-strong);font-family:var(--rail-font-family);color:var(--rail-toast-label);background:transparent;cursor:pointer;}
.rl-toast-close{padding:0;width:24px;}
.rl-toast-action:hover,.rl-toast-close:hover{background:color-mix(in srgb, var(--rail-toast-label) 14%, transparent);}
@keyframes rl-toast-in{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:none;}}
`;

const SURFACES = `
.rl-disclosure{display:flex;flex-direction:column;min-width:0;}
.rl-disclosure-header{display:flex;align-items:center;gap:var(--rail-s1);}
.rl-disclosure-trigger{display:flex;flex:1;align-items:center;gap:var(--rail-s1);box-sizing:border-box;min-width:0;min-height:28px;margin:0;padding:0 var(--rail-s1);border:0;border-radius:var(--rail-radius-sm);font:var(--rail-font-secondary-strong);font-family:var(--rail-font-family);color:var(--rail-text-secondary);background:transparent;text-align:start;cursor:pointer;}
.rl-disclosure-trigger:hover{background:var(--rail-hover);color:var(--rail-text);}
.rl-disclosure-chevron{display:inline-flex;flex:none;transition:transform var(--rail-duration) var(--rail-ease-out);}
.rl-disclosure[data-open="true"] .rl-disclosure-chevron{transform:rotate(90deg);}
.rl-disclosure-title{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.rl-disclosure-count{flex:none;font:var(--rail-font-caption);color:var(--rail-text-tertiary);}
.rl-disclosure-actions{display:flex;flex:none;align-items:center;gap:var(--rail-s1);}
.rl-disclosure-panel{animation:rl-reveal var(--rail-duration) var(--rail-ease-out);}
@keyframes rl-reveal{from{opacity:0;transform:translateY(-4px);}to{opacity:1;transform:none;}}
.rl-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--rail-s2);padding:var(--rail-s6) var(--rail-s4);text-align:center;color:var(--rail-text-tertiary);}
.rl-empty-glyph{display:inline-flex;color:var(--rail-text-tertiary);}
.rl-empty-title{margin:0;font:var(--rail-font-body-strong);color:var(--rail-text-secondary);}
.rl-empty-description{margin:0;max-width:360px;font:var(--rail-font-secondary);color:var(--rail-text-tertiary);}
.rl-empty-action{display:flex;flex-wrap:wrap;justify-content:center;gap:var(--rail-s2);margin-top:var(--rail-s2);}
.rl-error-banner{display:flex;align-items:flex-start;gap:var(--rail-s2);box-sizing:border-box;padding:var(--rail-s2) var(--rail-s3);border-radius:var(--rail-radius-sm);background:var(--rail-error-soft);color:var(--rail-text);}
.rl-error-banner-mark{flex:none;width:8px;height:8px;margin-top:6px;border-radius:50%;background:var(--rail-error);}
.rl-error-banner-text{display:flex;flex:1;flex-direction:column;min-width:0;}
.rl-error-banner-title{margin:0;font:var(--rail-font-body-strong);}
.rl-error-banner-message{margin:0;font:var(--rail-font-body);overflow-wrap:anywhere;}
.rl-error-banner-code{font:var(--rail-font-caption);font-family:var(--rail-font-code);color:var(--rail-text-tertiary);}
.rl-skeleton-group{display:inline-flex;flex-direction:column;gap:var(--rail-s2);width:100%;}
.rl-skeleton{display:block;width:100%;height:12px;background:var(--rail-bg-skeleton);animation:rl-shimmer 1.4s ease-in-out infinite;}
.rl-skeleton-xs{border-radius:var(--rail-radius-xs);}
.rl-skeleton-sm{border-radius:var(--rail-radius-sm);}
.rl-skeleton-md{border-radius:var(--rail-radius-md);}
.rl-skeleton-last{width:60%;}
@keyframes rl-shimmer{0%,100%{opacity:1;}50%{opacity:0.55;}}
.rl-scroll{min-height:0;scrollbar-width:thin;scrollbar-color:transparent transparent;}
.rl-scroll:hover,.rl-scroll:focus-within{scrollbar-color:var(--rail-border-3) transparent;}
.rl-scroll[data-orientation="vertical"]{overflow-x:hidden;overflow-y:auto;}
.rl-scroll[data-orientation="horizontal"]{overflow-x:auto;overflow-y:hidden;}
.rl-scroll[data-orientation="both"]{overflow:auto;}
.rl-list,.rl-tree{display:flex;flex-direction:column;gap:1px;min-width:0;}
.rl-row{display:flex;align-items:center;gap:var(--rail-s2);box-sizing:border-box;min-height:28px;padding:var(--rail-s1) var(--rail-s2);border-radius:var(--rail-radius-sm);color:var(--rail-text);cursor:pointer;user-select:none;}
.rl-row:hover:not([aria-disabled="true"]){background:var(--rail-hover);}
.rl-row[aria-selected="true"]{background:var(--rail-active);}
.rl-row[aria-disabled="true"]{color:var(--rail-text-tertiary);cursor:default;}
.rl-tree-row{padding-inline-start:calc(var(--rail-s1) + var(--rl-tree-level, 0) * var(--rail-s4));}
.rl-tree-toggle{display:inline-flex;align-items:center;justify-content:center;flex:none;width:16px;height:16px;color:var(--rail-text-tertiary);transition:transform var(--rail-duration) var(--rail-ease-out);}
.rl-tree-toggle[data-expanded="true"]{transform:rotate(90deg);}
.rl-tree-glyph{display:inline-flex;flex:none;color:var(--rail-text-secondary);}
.rl-tree-label{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.rl-tree-trailing{display:inline-flex;flex:none;align-items:center;gap:var(--rail-s1);}
`;

const REDUCED_MOTION = `
@media (prefers-reduced-motion: reduce){
.rl-status-dot,.rl-spinner,.rl-skeleton,.rl-toast,.rl-disclosure-panel{animation:none;}
.rl-btn,.rl-switch-track,.rl-switch-thumb,.rl-checkbox-box,.rl-disclosure-chevron,.rl-tree-toggle,.rl-input,.rl-textarea,.rl-select{transition:none;}
}
`;

export const BASE_CSS = [FOCUS, BUTTONS, CHIPS, SMALL, FORMS, LAYERS, SURFACES, REDUCED_MOTION]
	.map((block) => block.trim())
	.join("\n");
