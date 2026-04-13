#!/bin/bash
# Generate Small Mercies PDFs
# Requires: npm install @mermaid-js/mermaid-cli md-to-pdf (in /tmp/mermaid-render or globally)

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

# Find md-to-pdf — check local, tmp, and global
MDTOPDF=""
if command -v md-to-pdf &> /dev/null; then
    MDTOPDF="md-to-pdf"
elif [ -f "/tmp/mermaid-render/node_modules/.bin/md-to-pdf" ]; then
    MDTOPDF="/tmp/mermaid-render/node_modules/.bin/md-to-pdf"
else
    echo "Error: md-to-pdf not found. Install with: npm install -g md-to-pdf"
    exit 1
fi

echo "Using: $MDTOPDF"
echo ""

# Generate with cover
echo "Generating BOOK-PDF.pdf (A5, with cover)..."
$MDTOPDF BOOK-PDF.md
echo "Done."

# Generate without cover
echo "Generating BOOK-PDF-NO-COVER.pdf (A5, no cover)..."
$MDTOPDF BOOK-PDF-NO-COVER.md
echo "Done."

echo ""
ls -lh BOOK-PDF.pdf BOOK-PDF-NO-COVER.pdf
