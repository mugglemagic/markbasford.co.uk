# Vendored: gate-loader

`gate-loader.js` and `glyphs.js` in this directory are an unmodified copy of
`src/` from the upstream repository, served as native ES modules so the demo
page at `/projects/stargate-loader` can load the component in the browser.

- **Upstream**: https://github.com/mugglemagic/stargate-loader
- **Commit**: `b8efcb594025adca7102b040ef6a259fcb397e21` (`main`)
- **Copied**: 2026-07-29
- **Code licence**: MIT — see `LICENSE`
- **Glyph artwork licence**: CC BY-SA 3.0 — see `LICENSES-GLYPHS.md`

The package is not on npm yet. Once `gate-loader` is published, this directory
can be deleted and the demo switched to a real dependency (`pnpm add
gate-loader`), importing the module from `node_modules` instead of `/vendor`.

## Updating

```bash
BASE=https://raw.githubusercontent.com/mugglemagic/stargate-loader/main
curl -o public/vendor/gate-loader/gate-loader.js "$BASE/src/gate-loader.js"
curl -o public/vendor/gate-loader/glyphs.js      "$BASE/src/glyphs.js"
curl -o public/vendor/gate-loader/LICENSE        "$BASE/LICENSE"
curl -o public/vendor/gate-loader/LICENSES-GLYPHS.md "$BASE/LICENSES-GLYPHS.md"
```

Then update the commit SHA and date above. Do not edit the two `.js` files by
hand — `glyphs.js` is generated upstream by `scripts/build-glyphs.mjs`.
