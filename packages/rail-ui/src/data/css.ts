/**
 * Styles of the icons and data components. Only `--rail-*` aliases (src/tokens.ts) are used, so
 * light, dark and user skins follow the host.
 */
const ICON_CSS = `
.rl-icon{display:inline-block;flex:none;vertical-align:middle;}
`;

const DIFF_CSS = `
.rl-diff{display:flex;flex-direction:column;height:100%;min-height:0;font:var(--rail-font-secondary);font-family:var(--rail-font-code);color:var(--rail-text);}
.rl-diff-notice{display:flex;align-items:center;gap:var(--rail-s2);padding:var(--rail-s2) var(--rail-s3);background:var(--rail-warn-soft);color:var(--rail-warn-label);font:var(--rail-font-secondary);font-family:var(--rail-font-family);}
.rl-diff-empty{padding:var(--rail-s4);color:var(--rail-text-tertiary);font:var(--rail-font-body);font-family:var(--rail-font-family);}
.rl-diff-scroll{position:relative;flex:1 1 auto;min-height:0;overflow:auto;outline:none;container-type:inline-size;}
.rl-diff-scroll:focus-visible{outline:var(--rail-focus-ring);outline-offset:-2px;}
html[data-input-modality='pointer'] .rl-diff-scroll:focus-visible{outline:none;}
.rl-diff-canvas{position:relative;width:100%;}
.rl-diff-row{position:absolute;top:0;left:0;min-width:100%;width:max-content;display:flex;height:20px;line-height:20px;white-space:pre;tab-size:4;}
.rl-diff-gutter{display:flex;flex:none;color:var(--rail-text-tertiary);user-select:none;}
.rl-diff--unified .rl-diff-gutter{position:sticky;left:0;z-index:1;background:var(--rail-bg);}
.rl-diff-num{flex:none;box-sizing:border-box;padding:0 var(--rail-s1) 0 var(--rail-s2);text-align:right;font-variant-numeric:tabular-nums;}
.rl-diff-add-slot{flex:none;width:20px;display:flex;align-items:center;justify-content:center;}
.rl-diff-add{display:none;align-items:center;justify-content:center;width:18px;height:18px;padding:0;border:none;border-radius:var(--rail-radius-xs);background:var(--rail-button-primary);color:var(--rail-text-on-accent);cursor:pointer;}
.rl-diff-add:hover{background:var(--rail-button-primary-hover);}
.rl-diff-line:hover .rl-diff-add,.rl-diff-half:hover .rl-diff-add,.rl-diff-row--cursor .rl-diff-add{display:inline-flex;}
.rl-diff-marker{flex:none;width:16px;text-align:center;}
.rl-diff-text{flex:1 0 auto;padding-right:var(--rail-s4);}
.rl-diff-line--added{background:var(--rail-diff-added-bg);}
.rl-diff-line--deleted{background:var(--rail-diff-deleted-bg);}
.rl-diff--unified .rl-diff-line--added .rl-diff-gutter{background:linear-gradient(var(--rail-diff-added-gutter),var(--rail-diff-added-gutter)),var(--rail-bg);}
.rl-diff--unified .rl-diff-line--deleted .rl-diff-gutter{background:linear-gradient(var(--rail-diff-deleted-gutter),var(--rail-diff-deleted-gutter)),var(--rail-bg);}
.rl-diff-half.rl-diff-line--added .rl-diff-gutter{background:var(--rail-diff-added-gutter);}
.rl-diff-half.rl-diff-line--deleted .rl-diff-gutter{background:var(--rail-diff-deleted-gutter);}
.rl-diff-line--added .rl-diff-marker{color:var(--rail-diff-added-marker);}
.rl-diff-line--deleted .rl-diff-marker{color:var(--rail-diff-deleted-marker);}
.rl-diff-line--added .rl-diff-word{background:var(--rail-diff-added-inline);border-radius:var(--rail-radius-xs);}
.rl-diff-line--deleted .rl-diff-word{background:var(--rail-diff-deleted-inline);border-radius:var(--rail-radius-xs);}
.rl-diff-noeol{margin-left:var(--rail-s2);color:var(--rail-text-tertiary);font:var(--rail-font-caption);font-family:var(--rail-font-family);}
.rl-diff-row--selected,.rl-diff-row--selected .rl-diff-gutter{background:var(--rail-info-soft);}
.rl-diff-row--cursor{box-shadow:inset 2px 0 0 var(--rail-business);}
.rl-diff-split .rl-diff-half{display:flex;flex:1 0 0;box-sizing:border-box;}
.rl-diff-split .rl-diff-half+.rl-diff-half{border-left:var(--rail-hairline) solid var(--rail-border-2);}
.rl-diff-half--empty{background:var(--rail-bg-1);}
.rl-diff-hunk,.rl-diff-gap{background:var(--rail-bg-1);color:var(--rail-text-tertiary);}
.rl-diff-hunk-text{padding:0 var(--rail-s3);}
.rl-diff-gap-cell{display:flex;align-items:center;position:sticky;left:0;}
.rl-diff-expand{display:inline-flex;align-items:center;gap:var(--rail-s1);height:20px;padding:0 var(--rail-s2);border:none;background:transparent;color:var(--rail-link);font:var(--rail-font-secondary);font-family:var(--rail-font-family);cursor:pointer;}
.rl-diff-expand:hover{background:var(--rail-hover);}
.rl-diff-thread{height:auto;white-space:normal;}
.rl-diff-thread-body{position:sticky;left:0;box-sizing:border-box;width:100cqi;padding:var(--rail-s2) var(--rail-s3);font:var(--rail-font-body);font-family:var(--rail-font-family);}
`;

const TEXT_CSS = `
.rl-code{margin:0;padding:var(--rail-s2) var(--rail-s3);overflow:auto;background:var(--rail-bg-code);border-radius:var(--rail-radius-sm);font:var(--rail-font-secondary);font-family:var(--rail-font-code);line-height:18px;white-space:pre;tab-size:4;color:var(--rail-text);}
.rl-code-line{display:block;}
.rl-code-num{display:inline-block;min-width:3ch;margin-right:var(--rail-s3);text-align:right;color:var(--rail-text-tertiary);user-select:none;font-variant-numeric:tabular-nums;}
.rl-md{font:var(--rail-font-body);color:var(--rail-text);overflow-wrap:anywhere;}
.rl-md>:first-child{margin-top:0;}
.rl-md>:last-child{margin-bottom:0;}
.rl-md-h{margin:var(--rail-s4) 0 var(--rail-s2);font:var(--rail-font-body-strong);}
.rl-md-h1,.rl-md-h2{font:var(--rail-font-title);}
.rl-md-p{margin:0 0 var(--rail-s2);}
.rl-md-list{margin:0 0 var(--rail-s2);padding-left:var(--rail-s5);}
.rl-md-li>.rl-md-list,.rl-md-li>.rl-md-p{margin-bottom:0;}
.rl-md-pre{margin:0 0 var(--rail-s2);padding:var(--rail-s2) var(--rail-s3);overflow:auto;background:var(--rail-bg-code);border-radius:var(--rail-radius-sm);font:var(--rail-font-secondary);font-family:var(--rail-font-code);white-space:pre;}
.rl-md-code{padding:0 var(--rail-s1);background:var(--rail-bg-inline-code);border-radius:var(--rail-radius-xs);font-family:var(--rail-font-code);font-size:0.92em;}
.rl-md-link{color:var(--rail-link);text-decoration:none;}
.rl-md-link:hover{text-decoration:underline;}
.rl-md-link:focus-visible{outline:var(--rail-focus-ring);outline-offset:2px;border-radius:var(--rail-radius-xs);}
.rl-time{font-variant-numeric:tabular-nums;}
.rl-diffstat{display:inline-flex;gap:var(--rail-s1);font:var(--rail-font-secondary);font-family:var(--rail-font-code);font-variant-numeric:tabular-nums;white-space:nowrap;}
.rl-diffstat-added{color:var(--rail-success);}
.rl-diffstat-removed{color:var(--rail-error);}
`;

export const DATA_CSS = [ICON_CSS, DIFF_CSS, TEXT_CSS].join("").replace(/\n/g, "");
