#!/bin/bash
# Generate Small Mercies EPUB for Kindle / KDP upload
# Requires: pandoc, sips (macOS built-in)

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

if ! command -v pandoc &> /dev/null; then
    echo "Error: pandoc not found. Install with: brew install pandoc"
    exit 1
fi

if ! command -v sips &> /dev/null; then
    echo "Error: sips not found. This script requires macOS."
    exit 1
fi

TMP_IMG_DIR="images/chapters-epub"
TMP_MD="BOOK-EPUB.md"

trap 'rm -rf "$TMP_IMG_DIR" "$TMP_MD"' EXIT

echo "Resizing chapter images for ebook delivery..."
mkdir -p "$TMP_IMG_DIR"
for f in images/chapters/*.png; do
    base=$(basename "$f" .png)
    sips -Z 1600 -s format jpeg -s formatOptions 82 "$f" --out "$TMP_IMG_DIR/${base}.jpg" >/dev/null
done

echo "Preparing markdown source..."
sed -E 's|images/chapters/([0-9]+)\.png|images/chapters-epub/\1.jpg|g' BOOK.md > "$TMP_MD"

echo "Generating BOOK.epub..."
pandoc "$TMP_MD" -o BOOK.epub \
    --toc \
    --toc-depth=2 \
    --split-level=1 \
    --metadata lang=en-GB \
    --metadata date=2026 \
    --metadata publisher="Mark Basford"

echo "Done."
ls -lh BOOK.epub
