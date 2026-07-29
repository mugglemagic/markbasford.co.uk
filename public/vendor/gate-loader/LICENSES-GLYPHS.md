# Glyph artwork licensing

The 39 Milky Way gate glyphs inlined into `src/glyphs.js` by
`scripts/build-glyphs.mjs` are derived from SVG files on Wikimedia
Commons:

- **Source**: Category "SVG Stargate Milky Way glyphs",
  files "Stargate SG·1 symbol 01" through "Stargate SG·1 symbol 39"
  https://commons.wikimedia.org/wiki/Category:SVG_Stargate_Milky_Way_glyphs
- **License**: Creative Commons Attribution-ShareAlike 3.0 Unported
  (CC BY-SA 3.0) — https://creativecommons.org/licenses/by-sa/3.0/
- **Modifications**: XML prolog, doctype, comments, `<metadata>` and
  RDF/Dublin Core blocks removed; Inkscape/Sodipodi editor-only
  elements and attributes removed, along with the empty `<defs>` and
  now-unused namespace declarations they leave behind; whitespace
  collapsed; optionally minified with SVGO; encoded as data URIs.
  Drawn artwork is not altered.

If you redistribute modified versions of the glyph artwork, the
share-alike condition applies to the artwork.

The glyph designs themselves originate with the Stargate franchise
(MGM/Amazon). This package is a non-commercial fan work and is not
affiliated with or endorsed by the rights holders.
