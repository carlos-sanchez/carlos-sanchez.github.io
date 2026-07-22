#!/usr/bin/env bash
# Compresses every PNG/JPG under img/ in place, the same way tinypng.com does
# (lossy but visually indistinguishable): pngquant for PNGs, jpegoptim for
# JPEGs. Safe to rerun any time you add new images, already-optimized files
# are skipped or barely touched. Requires: brew install pngquant jpegoptim
set -euo pipefail
cd "$(dirname "$0")/.."

if ! command -v pngquant >/dev/null || ! command -v jpegoptim >/dev/null; then
  echo "Missing pngquant and/or jpegoptim. Install with:"
  echo "  brew install pngquant jpegoptim"
  exit 1
fi

before_total=0
after_total=0
count=0

while IFS= read -r -d '' f; do
  before=$(stat -f%z "$f")
  before_total=$((before_total + before))

  case "$f" in
    *.png|*.PNG)
      pngquant --quality=65-95 --speed 1 --strip --skip-if-larger --force --output "$f.tmp" "$f" 2>/dev/null \
        && mv "$f.tmp" "$f" \
        || rm -f "$f.tmp"
      ;;
    *.jpg|*.jpeg|*.JPG|*.JPEG)
      jpegoptim --max=85 --strip-all --quiet "$f"
      ;;
  esac

  after=$(stat -f%z "$f")
  after_total=$((after_total + after))
  count=$((count + 1))

  if [ "$before" -ne "$after" ]; then
    saved=$(( (before - after) * 100 / before ))
    printf '%-70s %8d -> %8d bytes (-%d%%)\n' "$f" "$before" "$after" "$saved"
  fi
done < <(find img -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) -print0)

echo ""
echo "Processed $count images."
echo "Total: $((before_total / 1024))KB -> $((after_total / 1024))KB (-$(( (before_total - after_total) * 100 / before_total ))%)"
