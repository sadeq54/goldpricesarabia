#!/usr/bin/env bash
# Post-approval AdSense health check against production.
#
#   bash scripts/adsense-check.sh
#
# Everything here is set in the AdSense dashboard or in Coolify env vars, not
# in the code — this script just tells you which of them have actually landed.
# Run it after each dashboard change; the site caches, so allow a few minutes.
set -u
B="${1:-https://goldpricesarabia.com}"
TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT
pass=0; warn=0

ok()   { printf "  \033[32mOK\033[0m   %s\n" "$1"; pass=$((pass+1)); }
no()   { printf "  \033[33m--\033[0m   %s\n" "$1"; warn=$((warn+1)); }

echo "AdSense check — $B"
echo

echo "1. Authorized inventory (ads.txt)"
code=$(curl -s -o "$TMP/ads.txt" -w '%{http_code}' -m 30 "$B/ads.txt")
if [ "$code" = 200 ] && grep -q "pub-9540306539199150, DIRECT" "$TMP/ads.txt"; then
  ok "ads.txt 200 with the correct DIRECT line"
else
  no "ads.txt problem (status $code) — AdSense will warn about unauthorized inventory"
fi

echo
echo "2. Ad code on content pages"
for p in "/" "/saudi-arabia/gold-price/21k" "/news/zakat-on-gold-how-to-calculate"; do
  curl -s -m 45 "$B$p" -o "$TMP/p.html"
  he=$(grep -bo "</head>" "$TMP/p.html" | head -1 | cut -d: -f1)
  ad=$(grep -bo "pagead2.googlesyndication.com/pagead/js" "$TMP/p.html" | head -1 | cut -d: -f1)
  units=$(grep -c 'class="adsbygoogle"' "$TMP/p.html")
  if [ -n "$ad" ] && [ -n "$he" ] && [ "$ad" -lt "$he" ]; then
    ok "$p loader in <head>, $units manual unit(s)"
  else
    no "$p loader missing or outside <head> — this was rejection reason #1 once"
  fi
done

echo
echo "3. Embeds must stay ad-free (partners iframe them)"
curl -s -m 45 "$B/embed/ticker" -o "$TMP/e.html"
if grep -q "pauseAdRequests" "$TMP/e.html"; then
  ok "/embed/ticker suppresses ad requests"
else
  no "/embed/ticker is NOT suppressing ads — Auto ads may inject into partner iframes"
fi

echo
echo "4. Consent message (required for EEA/UK traffic)"
curl -s -m 45 "$B/" -o "$TMP/h.html"
if grep -qE "fundingchoices|googlefc|__tcfapi" "$TMP/h.html"; then
  ok "a certified CMP is serving"
else
  no "no CMP yet — AdSense > Privacy & messaging > GDPR message > publish"
fi
if grep -q "consent-default" "$TMP/h.html"; then
  ok "Consent Mode v2 defaults present (denied in EEA/UK/CH until consent)"
else
  no "Consent Mode defaults missing — check NEXT_PUBLIC_ADSENSE_CLIENT is set"
fi

echo
echo "5. Manual ad unit slots (optional — Auto ads work without these)"
curl -s -m 45 "$B/saudi-arabia/gold-price/21k" -o "$TMP/k.html"
n=$(grep -c 'class="adsbygoogle"' "$TMP/k.html")
if [ "$n" -gt 0 ]; then
  ok "$n manual unit(s) rendering"
else
  no "no manual units — set NEXT_PUBLIC_ADSENSE_SLOT_INCONTENT / _SIDEBAR in Coolify"
fi

echo
printf "%d ok, %d to do\n" "$pass" "$warn"
