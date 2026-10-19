# Provenance

This package was first developed inside a larger plugin workspace and exported here on its own.

Two files of this package adapt MIT code from
rainfd/dsh-split-pane (https://github.com/rainfd/dsh-split-pane, version 0.1.0, commit `6b4f9ca`,
2026-10-09, Copyright (c) 2026 dsh-split-pane contributors; license text in `NOTICE`). Layout and
restore rules follow herdr (https://github.com/herdrdev/herdr, commit `056a2260`, Apache-2.0); herdr
code was read and the behaviour rewritten, nothing was copied. Drag and drop rewrites ideas read in
lehhair/dsh-split-panes (https://github.com/lehhair/dsh-split-panes, commit `ccbbf06`, BSD-3-Clause),
YEYEYEYESHIFU/dsh-split-screen 1.6.0 (https://github.com/YEYEYEYESHIFU/dsh-split-screen, commit
`acf982b`, MIT) and yuloop/dsh-web-split 1.0.1 (https://github.com/yuloop/dsh-web-split, commit
`4849de3`, MIT); nothing was copied. Run balancing and divider fitting follow VS Code behaviour
(`workbench.editor.splitSizing: auto`, editor grid minimum sizes); no VS Code code was read.

| path | source | kind | notes |
| --- | --- | --- | --- |
| src/layout/tree.ts | rainfd `src/client/contract/layout.ts`; herdr `src/layout.rs`; yuloop `client.js` | adapted | panes carry stable ids and are addressed by id instead of path; ratio band 0.1-0.9; pane limit 8; one-slot focus history and close-focus order rewritten from herdr `prev_focus` / `close_focused`; move beside and swap keeping pane ids rewritten from yuloop; balanced runs follow VS Code `splitSizing: auto` |
| src/layout/tree.test.ts | rainfd `tests/layout.client.spec.ts`; herdr `src/layout.rs` tests | rewritten | cases restated for id-addressed panes; focus-history cases follow herdr |
| src/client/focus.ts | rainfd `src/client/panes/focus.ts` | adapted | holds the keyboard in the requested pane for a bounded number of frames, also for the picker's filter; the guard that sends composer autofocus in other panes back to the active pane is new |
| src/layout/geometry.ts | herdr `split_rect` (`src/layout.rs`) | rewritten | integer tiling: first child rounded, second gets the rest; divider geometry is new |
| src/layout/storage.ts | herdr `src/persist/restore.rs` | rewritten | prune missing sessions, collapse splits, focus falls back to the first pane; ratio, duplicate and version validation are new |
| src/layout/storage.test.ts | herdr `src/persist/restore.rs` tests | rewritten | prune and focus-fallback cases; validation cases are new |
| src/layout/drop.ts | lehhair `PaneDropOverlay.tsx` | rewritten | centre box, otherwise nearest edge; the edge-only mode for empty panes is new |
| src/client/DropLayer.tsx | lehhair `PaneDropOverlay.tsx` | rewritten | preview that morphs between zones; drop plans, labels and the pane-limit state are new |
| src/client/drag.ts | YEYEYEYESHIFU `lib/client.js` | rewritten | own MIME stamped in a capture-phase `dragstart` on sidebar Session rows; the drag store, the New session button source and the host reorder neutralization are new |
| src/layout/fit.ts | VS Code editor grid (behaviour only) | rewritten | dividers move just far enough for every card's minimum size; fit score and side choice are new |

`packages/rail-ui` is the UI kit from the same workspace; it has no third-party source.
