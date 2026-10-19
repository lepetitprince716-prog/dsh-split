# @local/dsh-split

Split-screen Sessions for DeepSeek Harness, checked on the web client 0.2.1-rc.1 and the desktop
app 0.2.1-rc.2. Client-only bundle: no host code, no iframes, no host patches.

## How it works

- Opening a split registers a `main.conversation` shadow at priority -1 that renders only an
  anchor box. A root `shell.overlay` entry measures that box and renders every pane over it, flat
  and in stable DOM order, so splitting, closing a sibling or dragging a divider never remounts a
  pane.
- Each pane retains its Session in an effect (source `dshSplit`), wraps it in `SessionProvider`
  and renders the `conversation.content` factory with `variant: "embedded"` and `hero: false`
  through the session-scoped child slot `dsh-split.pane`. A blank Session gets the centred
  composer, as the host's own main panel does. The conversation header is not rendered.
- Activating a pane calls `uiWorkspace.openSession`, so the left and right sidebars follow the
  active pane. Opening a Session from the left sidebar focuses the pane that already shows it, or
  replaces the active pane. The host's report of a Session the split opened itself is not taken
  as navigation.
- The layout is a binary tree (at most 8 panes, ratios 0.1-0.9). Closing the focused pane returns
  focus to the previously focused one. Closing the second-to-last pane leaves split mode.
- Pane cards keep at least 280 x 200 px. When a new or moved pane would leave a card smaller,
  the dividers move just far enough to make room, as VS Code's editor grid does. When no divider
  positions fit (too many panes for the window), one pane is shown at a time behind a strip of
  pills; the strip offers "Even out to show all" whenever that would fit again.
- The active pane keeps the keyboard. The host's composer focuses itself when it mounts or comes
  back online; such focus landing in another pane is sent back to the active pane. Tab into a
  pane activates it.
- The layout persists in `localStorage` key `dsh-split.layout` (version 1), validated on read;
  panes whose Session is gone are dropped.

## Dragging

| Drag | Drop on a pane edge | Drop on a pane centre | Drop on the conversation (no split) |
| --- | --- | --- | --- |
| Session row in the left sidebar | open it in a new pane on that side | open it in that pane | edge: split with it on that side; centre: open it |
| "New session" button in the left sidebar | new conversation on that side | new conversation in that pane | edge: split with a new conversation; centre: open one |
| A pane's `+` button | new conversation on that side | new conversation in that pane | - |
| A pane header (grip) | move the pane to that side | swap the two panes | - |
| "Split view" button in the conversation header | empty pane on that side (any point picks the nearest edge) | - | split with an empty pane |

A Session already shown in a pane moves or swaps that pane instead of opening twice. New
conversations start in the workspace of the pane they are placed beside. A preview shows the
target area and what the drop will do before release. At 8 panes, edge drops fall back to the
centre and `+` is disabled. Text and file drops into a composer are untouched: the bundle only
claims its own MIME types, and a sidebar row's own reorder is neutralized once the drag enters a
drop area.

## Other entry points

- Session row menu in the left sidebar: "Open in split view".
- Conversation header: "Split view" opens a picker pane on the right.
- Pane header: `+` new conversation beside (right while the panes fit, else below), split right,
  split down, maximize / restore, toggle right sidebar (active pane), close. Double-click the
  grip to maximize.
- Shortcuts (web, registered only when the binding is free): `Mod+Alt+\` split right,
  `Mod+Alt+-` split down, `Mod+Alt+N` new conversation beside, `Mod+Alt+Enter` maximize /
  restore, `Mod+Alt+W` close pane, `Mod+Alt+]` / `Mod+Alt+[` next / previous pane.
- Dividers: drag, or focus and use the arrow keys along the split axis, `Home` and `End`;
  `Enter` or a double-click evens out the run.

## Layout

| Path | Role |
| --- | --- |
| `src/layout/tree.ts` | Pure split tree: split, close, move, swap, focus history, ratios |
| `src/layout/geometry.ts` | Pixel rectangles and divider positions |
| `src/layout/fit.ts` | Minimum card size: fit test, divider fitting, side for a new pane |
| `src/layout/drop.ts` | Drop zone hit test |
| `src/layout/storage.ts` | Versioned, validated persistence |
| `src/client/controller.ts` | Layout state machine and drop plans over injected host ports |
| `src/client/drag.ts` | Drag sources, MIME stamping, drag store, host reorder neutralization |
| `src/client/DropLayer.tsx` | Drop area and preview per pane and over the conversation |
| `src/client/Overlay.tsx` | Pane cards, dividers, narrow switcher |
| `src/client/PaneFrame.tsx` | Pane header |
| `src/client/Switcher.tsx` | Pill strip for one pane at a time |
| `src/client/Divider.tsx` | Divider handle |
| `src/client/SplitButton.tsx` | "Split view" control in the conversation header |
| `src/client/PaneSession.tsx` | Per-pane Session retain and conversation render |
| `src/client/phase.ts` | Conversation phase for a pane (hero, settling, active) |
| `src/client/Picker.tsx` | Session picker for an empty pane |
| `src/client/focus.ts` | Keyboard focus for a pane, guard against composer autofocus |
| `src/client/styles.ts` | Styles on `--rail-*` tokens, with a theme plugin's `--cds-*` values when present |
| `src/client/index.tsx` | Module entry: slots, menu item, header control, shortcuts, storage |

UI uses the bundled `@rail/ui` kit (`packages/rail-ui`) and `--dsw` tokens through the kit's
`--rail-*` aliases.

## Build and check

Requires Bun 1.4.

```sh
bun install
bun run build       # dist/index.js (host no-op) and dist/client.js
bun run typecheck
bun run test
bun run lint
```

## Install

Build first: the plugin is loaded from `dist/`.

Web client: link this directory into a profile, then restart `dsh web`. A linked profile picks up
later rebuilds after a page reload.

```sh
dsh plugin --profile web add link:/path/to/dsh-split
```

Desktop app: open the plugin manager, choose "Add plugin", then "Install a third-party plugin", and
enter `link:/path/to/dsh-split`; restart the app when it reports the install. The package declares
no peer dependencies, so the host's version gate does not skip it.

## Provenance

`src/layout/tree.ts` and `src/client/focus.ts` adapt MIT code from rainfd/dsh-split-pane; layout
and restore rules follow herdr (Apache-2.0, rewritten). Drag and drop rewrites ideas from
lehhair/dsh-split-panes (BSD-3-Clause), YEYEYEYESHIFU/dsh-split-screen and yuloop/dsh-web-split
(MIT); run balancing and divider fitting follow VS Code behaviour. See `PROVENANCE.md` and
`NOTICE`.

## License

MIT, see `LICENSE`. Third-party notices are in `NOTICE`.
