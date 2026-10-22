# 高明岗 Gao Minggang — 个人档案 / The personal file

A personal site built as **an object**: a stack of tabbed folders, a shelf of spines, a deck of
notes, a letter on a sheet, a visiting card, the back of the card.
Stack + Router + Start, SSR, no client-side data fetching needed for the content itself.

Art direction: *The page is the object* (direction `page-is-the-object`, seed 1239980755),
drawn by the `design-taste-frontend` skill. Type: Zilla Slab. Palette: ink navy on paper,
one vermilion accent (`#f7941d`), one near-black, one warm stone.

## Run it

```bash
npm install          # on iOS-mounted folders use: npm install --no-bin-links
npm run build        # vite build -> dist/client + dist/server
node server.mjs      # serves SSR + static assets on http://127.0.0.1:3000
npm run dev          # development server
```

`server.mjs` is a 40-line `srvx` wrapper: it serves `dist/client/assets/*` and hands everything
else to the Start server's fetch handler.

> On iOS the `/var/minis` mount cannot create symlinks (npm's `.bin`) and breaks node's
> `realpath` during bundling. Install and build inside iSH's own filesystem (`/root/...`) and
> copy the source back to `/var/minis/workspace/` for editing.

## Where things live

| What | Where |
| --- | --- |
| All copy and data (projects, essays, facts, letter, contact) | `src/data/site.ts` |
| The seam where a CMS goes (server function, same shape) | `src/lib/content.ts` |
| Route + loader (the loader calls the server function) | `src/routes/index.tsx` |
| Sections | `src/components/*.tsx` |
| Design tokens + all layout | `src/styles/site.css` |

## The live thing

**The label maker** (`FileSection.tsx`): type a word and it is printed on the file tab in the
site's own type, with a character count and a width in millimetres. It is the page's argument
made usable — a file you can label yourself.

## The three live mechanisms

1. **Index with preview** (`WorkSection.tsx`): pointing at a spine in the shelf shows that
   project's card in the panel on the right; on a phone, tapping a name does the same.
2. **The deck** (`WritingSection.tsx`): a pinned stage where the essays deal out one by one and
   the earlier ones fold into 120px spines at the left. Under `prefers-reduced-motion` the
   cards stack.
3. **Entrances** (`src/lib/reveal.ts`): each part of a section rises once when it enters.
   Transform only — opacity is never withheld, so a throttled tab never shows a blank page.

## What is still sample content

The name, role and the letter are his. Still placeholders to replace: the sixteen projects,
the six essays, `minggang@example.com`, the phone number, the address.
No photograph, no quote, no client, no statistic has been invented.

## A note on the picture floor

The taste skill's inspector fails any page with fewer than four real pictures. This site is
deliberately type-and-colour only (no photographs were wanted), so that one finding stands
open on purpose. Add open-licence photographs with `scripts/assets.mjs` and credit them in
the footer if you decide to use pictures later.
