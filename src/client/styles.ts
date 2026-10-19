// The bundle's own stylesheet; colours come from `--dsw-*` tokens through the kit's `--rail-*`
// aliases (scoped to `.rl-root`). Motion, hairlines and shadows follow a theme plugin's
// `--cds-*` tokens when one defines them, with equivalent fallbacks otherwise.

/** Package id: the `data-plugin` tag the module system uses to remove the sheets on unload. */
export const PKG = "@local/dsh-split";

/**
 * Mounted only while the split is shown. On macOS with the sidebar collapsed the host mounts its
 * reopen and New session controls in a top-left seat below the overlay layer; lift it over the
 * split, whose top-left strip pads by the same clearance.
 */
export const SPLIT_ACTIVE_CSS = `[class*="_leadingSeat"]{z-index:21;}`;

export const SPLIT_CSS = `
.dsp-anchor{width:100%;height:100%;min-height:0;background:var(--dsw-specific-sidebar-fill,var(--dsw-alias-bg-base));}
.dsp-root,.dsp-drop-main,.dsp-ghost{--dsp-ease:var(--cds-ease-swift,cubic-bezier(0.16,1,0.3,1));--dsp-ease-enter:var(--cds-ease-enter,cubic-bezier(0.22,1,0.36,1));--dsp-ease-pop:var(--cds-ease-overshoot,cubic-bezier(0.34,1.3,0.64,1));--dsp-ring:var(--cds-ring-hairline,0.5px);--dsp-shadow-1:var(--cds-shadow-a1,rgb(0 0 0 / 4%));--dsp-shadow-2:var(--cds-shadow-a2,rgb(0 0 0 / 6%));--dsp-shadow-3:var(--cds-shadow-a3,rgb(0 0 0 / 8%));--dsp-radius:var(--rail-radius-lg,12px);--dsp-accent:var(--rail-business);}
.dsp-root{position:fixed;pointer-events:auto;overflow:hidden;isolation:isolate;background:var(--rail-bg-sidebar);}
.dsp-root[data-resizing]{user-select:none;}
.dsp-root[data-resizing] .dsp-pane{pointer-events:none;}
.dsp-titlebar{position:absolute;left:0;right:0;top:0;height:6px;-webkit-app-region:drag;}
.dsp-pane{position:absolute;display:flex;flex-direction:column;box-sizing:border-box;min-width:0;min-height:0;outline:none;overflow:hidden;background:var(--rail-bg);border-radius:var(--dsp-radius);box-shadow:0 0 0 var(--dsp-ring) var(--rail-border-2),0 1px 2px var(--dsp-shadow-1);transition:box-shadow 240ms var(--dsp-ease),opacity 160ms var(--dsp-ease);animation:dsp-pane-in 300ms var(--dsp-ease-enter) backwards;}
.dsp-pane[hidden]{display:none;}
.dsp-pane[data-active]{box-shadow:0 0 0 1px color-mix(in srgb,var(--dsp-accent) 45%,transparent),0 8px 28px var(--dsp-shadow-2),0 1px 3px var(--dsp-shadow-2);}
.dsp-root[data-single] .dsp-pane{box-shadow:0 0 0 var(--dsp-ring) var(--rail-border-2),0 1px 3px var(--dsp-shadow-1);}
.dsp-root[data-animate] .dsp-pane{transition:left 260ms var(--dsp-ease),top 260ms var(--dsp-ease),width 260ms var(--dsp-ease),height 260ms var(--dsp-ease),box-shadow 240ms var(--dsp-ease);}
.dsp-pane[data-drag-source]{opacity:.5;}
.dsp-pane-head{position:relative;box-sizing:border-box;flex:none;display:flex;align-items:center;gap:4px;height:40px;padding:0 6px 0 6px;container-type:inline-size;border-bottom:var(--dsp-ring) solid var(--rail-border-2);color:var(--rail-text-secondary);}
/* Window-drag strips carry the host's data-window-drag: the host refreshes Electron's drag regions when such elements move, which panes do on every layout change; without it the regions stay where a header used to be and swallow clicks on the buttons now there. */
.dsp-pane-head[data-window-drag]{-webkit-app-region:drag;}
.dsp-lead{position:absolute;left:0;top:0;bottom:0;-webkit-app-region:no-drag;}
.dsp-pane-head[data-window-drag] .dsp-pane-grip,.dsp-pane-head[data-window-drag] .dsp-pane-actions{-webkit-app-region:no-drag;}
.dsp-pane-grip{flex:0 1 auto;min-width:0;display:flex;align-items:center;gap:4px;height:28px;box-sizing:border-box;padding:0 8px;border-radius:var(--rail-radius-md,8px);cursor:grab;user-select:none;transition:background-color 150ms var(--dsp-ease);}
.dsp-pane-grip:hover{background:var(--rail-hover);}
.dsp-pane-grip:active{cursor:grabbing;}
.dsp-pane-grip .rl-spinner{flex:none;margin-right:2px;}
.dsp-pane-dot{flex:none;margin-right:2px;}
.dsp-crumb{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px;line-height:20px;}
.dsp-crumb-workspace{flex:0 3 auto;max-width:160px;color:var(--rail-text-tertiary);}
.dsp-crumb-sep{flex:none;color:var(--rail-text-caption);font-size:13px;line-height:20px;}
.dsp-crumb-title{flex:0 1 auto;color:var(--rail-text-secondary);font-weight:500;letter-spacing:-0.006em;}
.dsp-pane[data-active] .dsp-crumb-title{color:var(--rail-text);}
.dsp-pane-actions{flex:none;display:flex;align-items:center;gap:2px;margin-left:auto;opacity:0;transition:opacity 150ms var(--dsp-ease);}
.dsp-pane:hover .dsp-pane-actions,.dsp-pane[data-active] .dsp-pane-actions,.dsp-pane:focus-within .dsp-pane-actions,.dsp-root[data-single] .dsp-pane-actions{opacity:1;}
.dsp-pane-actions .rl-btn{transition:background-color 150ms var(--dsp-ease),color 150ms var(--dsp-ease),transform 240ms var(--cds-btn-spring,var(--dsp-ease));}
.dsp-pane-actions .rl-btn-sm.rl-btn-icon{width:26px;height:26px;border-radius:var(--rail-radius-sm,8px);color:var(--rail-text-tertiary);}
.dsp-pane-actions .rl-btn:hover:not(:disabled){color:var(--rail-text);}
.dsp-pane-actions .rl-btn:active:not(:disabled){transform:scale(.92);}
.dsp-pane-actions .rl-btn[draggable="true"]{cursor:grab;}
@container (max-width: 400px){.dsp-pane-actions .rl-tooltip-anchor:has(> .dsp-act-split){display:none;}}
@container (max-width: 300px){.dsp-crumb-workspace,.dsp-crumb-sep{display:none;}}
.dsp-pane-main{flex:1 1 auto;min-height:0;display:flex;flex-direction:column;}
.dsp-pane-content{flex:1 1 auto;min-height:0;display:flex;flex-direction:column;container:dsp-pane / inline-size;}
/* The host makes its message stat pills (turn usage) icon-only at viewport width <= 480px; a narrow pane in a wide window needs the same by pane width, or the icon overflows onto the timestamp. Near the minimum pane width the row is still too short: the pill keeps its size and the timestamp after it truncates, where the host would let the pill's box shrink under its icon. */
@container dsp-pane (max-width: 480px){
.dsp-pane-content button[aria-haspopup="dialog"][class*="_trigger"]:has(> svg + [class*="_label"]){width:calc(28px + var(--dsh-content-font-delta,0px));justify-content:center;padding:6px;}
.dsp-pane-content button[aria-haspopup="dialog"][class*="_trigger"]:has(> svg + [class*="_label"]) > [class*="_label"]{display:none;}
.dsp-pane-content [class*="_root"]:has(> [aria-haspopup="dialog"][class*="_trigger"]) + [class*="_root"]{margin-left:0;}
.dsp-pane-content [class*="_root"]:has(> [aria-haspopup="dialog"][class*="_trigger"]){flex:none;}
.dsp-pane-content [class*="_root"]:has(> [aria-haspopup="dialog"][class*="_trigger"]) ~ [class*="_timeEnd"]{min-width:0;overflow:hidden;text-overflow:ellipsis;}
}
.dsp-pane-note{margin:auto;display:flex;flex-direction:column;align-items:center;gap:10px;padding:var(--rail-s4);color:var(--rail-text-tertiary);font:var(--rail-font-secondary);text-align:center;animation:dsp-fade-in 260ms var(--dsp-ease-enter) backwards;}
.dsp-divider{position:absolute;z-index:2;touch-action:none;outline:none;-webkit-app-region:no-drag;}
.dsp-divider[data-axis="row"]{cursor:col-resize;}
.dsp-divider[data-axis="column"]{cursor:row-resize;}
.dsp-divider::after{content:"";position:absolute;left:50%;top:50%;border-radius:999px;background:var(--rail-border-4);opacity:0;transform:translate(-50%,-50%) scale(.5);transition:opacity 150ms var(--dsp-ease),transform 320ms var(--dsp-ease),background-color 150ms var(--dsp-ease);}
.dsp-divider[data-axis="row"]::after{width:4px;height:40px;}
.dsp-divider[data-axis="column"]::after{width:40px;height:4px;}
.dsp-divider:hover::after,.dsp-divider:focus-visible::after,.dsp-divider[data-active]::after{opacity:1;transform:translate(-50%,-50%) scale(1);}
.dsp-divider:focus-visible::after,.dsp-divider[data-active]::after{background:var(--dsp-accent);}
.dsp-switcher{position:absolute;left:0;right:0;top:0;height:40px;box-sizing:border-box;display:flex;align-items:center;gap:6px;padding:0 6px;-webkit-app-region:drag;}
.dsp-switcher-tabs{flex:0 1 auto;min-width:0;display:flex;align-items:center;gap:2px;overflow-x:auto;scrollbar-width:none;-webkit-app-region:no-drag;}
.dsp-switcher-tabs::-webkit-scrollbar{display:none;}
.dsp-switcher-tab{flex:0 1 auto;min-width:64px;max-width:220px;height:28px;box-sizing:border-box;display:flex;align-items:center;gap:6px;padding:0 10px;border:0;border-radius:999px;background:transparent;color:var(--rail-text-secondary);font:var(--rail-font-secondary);cursor:pointer;transition:background-color 150ms var(--dsp-ease),color 150ms var(--dsp-ease),box-shadow 200ms var(--dsp-ease);}
.dsp-switcher-tab:hover{background:var(--rail-hover);color:var(--rail-text);}
.dsp-switcher-tab[aria-selected="true"]{background:var(--rail-bg);color:var(--rail-text);font:var(--rail-font-secondary-strong);box-shadow:0 0 0 var(--dsp-ring) var(--rail-border-2),0 1px 3px var(--dsp-shadow-2);}
.dsp-switcher-tab:focus-visible{outline:var(--rail-focus-ring);outline-offset:1px;}
.dsp-switcher-label{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.dsp-switcher>.rl-tooltip-anchor,.dsp-switcher-even{-webkit-app-region:no-drag;}
.dsp-switcher-tabs+*{margin-left:auto;}
.dsp-switcher-even{flex:none;border-radius:999px;}
.dsp-drop{position:absolute;inset:0;z-index:6;-webkit-app-region:no-drag;}
.dsp-drop-main{position:fixed;inset:auto;pointer-events:auto;}
.dsp-drop-hint{position:absolute;box-sizing:border-box;display:flex;align-items:center;justify-content:center;padding:8px;border-radius:calc(var(--dsp-radius) - 2px);background:color-mix(in srgb,var(--dsp-accent) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--dsp-accent) 65%,transparent);pointer-events:none;transition:left 220ms var(--dsp-ease),top 220ms var(--dsp-ease),width 220ms var(--dsp-ease),height 220ms var(--dsp-ease),background-color 150ms var(--dsp-ease);animation:dsp-hint-in 180ms var(--dsp-ease-enter) backwards;}
.dsp-drop-hint[data-full]{background:color-mix(in srgb,var(--rail-text) 5%,transparent);box-shadow:inset 0 0 0 1.5px var(--rail-border-3);}
.dsp-drop-chip{display:inline-flex;align-items:center;gap:6px;max-width:100%;height:28px;box-sizing:border-box;padding:0 12px 0 10px;border-radius:999px;background:var(--rail-bg);color:var(--rail-text);font:var(--rail-font-secondary-strong);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-shadow:0 0 0 var(--dsp-ring) var(--rail-border-2),0 6px 20px var(--dsp-shadow-2),0 1px 3px var(--dsp-shadow-1);animation:dsp-chip-in 260ms var(--dsp-ease-pop) backwards;}
.dsp-drop-chip .rl-icon{flex:none;color:var(--dsp-accent);}
.dsp-drop-hint[data-full] .dsp-drop-chip .rl-icon{color:var(--rail-text-tertiary);}
.dsp-picker{flex:1 1 auto;min-height:0;display:flex;flex-direction:column;gap:10px;box-sizing:border-box;width:100%;max-width:460px;margin:0 auto;padding:28px 16px 16px;animation:dsp-fade-in 260ms var(--dsp-ease-enter) backwards;}
.dsp-picker-intro{display:flex;flex-direction:column;gap:2px;padding:0 4px;}
.dsp-picker-heading{color:var(--rail-text);font:var(--rail-font-title);}
.dsp-picker-hint{color:var(--rail-text-tertiary);font:var(--rail-font-secondary);}
.dsp-picker-head{display:flex;align-items:center;gap:8px;}
.dsp-picker-head .rl-input{flex:1 1 auto;border-radius:var(--rail-radius-md,8px);}
.dsp-picker-head .rl-btn{flex:none;}
.dsp-picker-error{color:var(--rail-error);font:var(--rail-font-secondary);}
.dsp-picker-empty{padding:24px 0;color:var(--rail-text-tertiary);font:var(--rail-font-secondary);text-align:center;}
.dsp-picker-list{flex:1 1 auto;min-height:0;overflow-y:auto;margin:0 -4px;padding:2px 4px;list-style:none;}
.dsp-picker-row{display:flex;align-items:center;gap:8px;width:100%;height:32px;box-sizing:border-box;padding:0 8px;border:0;border-radius:var(--rail-radius-md,8px);background:none;color:var(--rail-text);font:var(--rail-font-body);text-align:left;cursor:pointer;transition:background-color 120ms var(--dsp-ease);}
.dsp-picker-row:hover,.dsp-picker-row:focus-visible{background:var(--rail-hover);}
.dsp-picker-row:focus-visible{outline:var(--rail-focus-ring);outline-offset:-1px;}
.dsp-picker-row-title{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.dsp-picker-row-path{flex:none;max-width:40%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--rail-text-tertiary);font:var(--rail-font-caption);font-family:var(--rail-font-code);}
.dsp-ghost{position:fixed;left:0;top:-200px;z-index:-1;display:inline-flex;align-items:center;max-width:260px;height:28px;box-sizing:border-box;padding:0 12px;border-radius:999px;background:var(--rail-bg);color:var(--rail-text);font:var(--rail-font-secondary-strong);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-shadow:0 0 0 1px color-mix(in srgb,var(--dsp-accent) 50%,transparent);pointer-events:none;}
.dsp-split-button{display:inline-flex;align-items:center;}
.dsp-split-button .rl-btn-sm.rl-btn-icon{width:28px;height:28px;min-width:28px;border-radius:var(--rail-radius-md,8px);}
.dsp-split-button .rl-btn[draggable="true"]{cursor:grab;}
.dsp-split-button .rl-btn{color:var(--rail-text-secondary);}
.dsp-split-button .rl-btn:hover:not(:disabled){color:var(--rail-text);}
.dsp-menu-item{display:flex;align-items:center;gap:6px;width:100%;padding:6px 8px;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer;}
.dsp-menu-icon{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;flex:none;}
@keyframes dsp-pane-in{from{opacity:0;transform:scale(.985);}}
@keyframes dsp-fade-in{from{opacity:0;transform:translateY(4px);}}
@keyframes dsp-hint-in{from{opacity:0;transform:scale(.98);}}
@keyframes dsp-chip-in{from{opacity:0;transform:translateY(4px) scale(.95);}}
@media (prefers-reduced-motion: reduce){
.dsp-pane,.dsp-pane-note,.dsp-picker,.dsp-drop-hint,.dsp-drop-chip{animation:none;}
.dsp-root[data-animate] .dsp-pane,.dsp-drop-hint,.dsp-divider::after,.dsp-pane-actions,.dsp-pane-actions .rl-btn{transition:none;}
}
`;
