import { pick, pickList, type LocaleText } from "@/lib/i18n-text";

/**
 * Static homepage SEO copy in all six locales. `ar` / `en` are the original
 * SEO-tuned strings and stay byte-identical; fr/tr/ur/hi are native
 * translations. Kept beside HomepageSeoHeader.tsx to hold it under 500 lines.
 */

export const QUICK_LINKS: Array<{ href: string; label: LocaleText }> = [
  { href: "/gold-price/24k", label: { en: "24K" } },
  { href: "/gold-price/22k", label: { en: "22K" } },
  { href: "/gold-price/21k", label: { en: "21K" } },
  { href: "/gold-price/18k", label: { en: "18K" } },
  { href: "/gold-price/14k", label: { en: "14K" } },
  { href: "/spot-gold", label: { en: "Spot Gold", ar: "السعر الفوري", fr: "Or spot", tr: "Spot altın", ur: "اسپاٹ قیمت", hi: "स्पॉट भाव" } },
  { href: "/gold-price-chart", label: { en: "Chart", ar: "الرسم البياني", fr: "Graphique", tr: "Grafik", ur: "چارٹ", hi: "चार्ट" } },
  { href: "/gold-calculator", label: { en: "Calculator", ar: "الحاسبة", fr: "Calculateur", tr: "Hesaplayıcı", ur: "کیلکولیٹر", hi: "कैलकुलेटर" } },
  { href: "/gold-price", label: { en: "By country", ar: "أسعار حسب الدولة", fr: "Par pays", tr: "Ülkeye göre", ur: "ملک کے لحاظ سے", hi: "देश के अनुसार" } },
  { href: "/news", label: { en: "News", ar: "الأخبار", fr: "Actualités", tr: "Haberler", ur: "خبریں", hi: "समाचार" } },
  { href: "/research", label: { en: "Research", ar: "الأبحاث", fr: "Recherche", tr: "Araştırma", ur: "تحقیق", hi: "शोध" } },
  { href: "/methodology", label: { en: "Methodology", ar: "المنهجية", fr: "Méthodologie", tr: "Metodoloji", ur: "طریقۂ کار", hi: "कार्यप्रणाली" } },
];

export const MENA_COUNTRIES: Array<{ slug: string; cc: string; name: LocaleText }> = [
  { slug: "saudi-arabia", cc: "SA", name: { en: "Saudi Arabia", ar: "السعودية", fr: "Arabie saoudite", tr: "Suudi Arabistan", ur: "سعودی عرب", hi: "सऊदी अरब" } },
  { slug: "uae", cc: "AE", name: { en: "UAE", ar: "الإمارات", fr: "Émirats", tr: "BAE", ur: "امارات", hi: "यूएई" } },
  { slug: "egypt", cc: "EG", name: { en: "Egypt", ar: "مصر", fr: "Égypte", tr: "Mısır", ur: "مصر", hi: "मिस्र" } },
  { slug: "jordan", cc: "JO", name: { en: "Jordan", ar: "الأردن", fr: "Jordanie", tr: "Ürdün", ur: "اردن", hi: "जॉर्डन" } },
  { slug: "kuwait", cc: "KW", name: { en: "Kuwait", ar: "الكويت", fr: "Koweït", tr: "Kuveyt", ur: "کویت", hi: "कुवैत" } },
  { slug: "qatar", cc: "QA", name: { en: "Qatar", ar: "قطر", fr: "Qatar", tr: "Katar", ur: "قطر", hi: "क़तर" } },
  { slug: "bahrain", cc: "BH", name: { en: "Bahrain", ar: "البحرين", fr: "Bahreïn", tr: "Bahreyn", ur: "بحرین", hi: "बहरीन" } },
  { slug: "lebanon", cc: "LB", name: { en: "Lebanon", ar: "لبنان", fr: "Liban", tr: "Lübnan", ur: "لبنان", hi: "लेबनान" } },
  { slug: "morocco", cc: "MA", name: { en: "Morocco", ar: "المغرب", fr: "Maroc", tr: "Fas", ur: "مراکش", hi: "मोरक्को" } },
  { slug: "libya", cc: "LY", name: { en: "Libya", ar: "ليبيا", fr: "Libye", tr: "Libya", ur: "لیبیا", hi: "लीबिया" } },
];

/**
 * "What Gold Prices Arabia delivers" paragraph as text segments; `{ b }`
 * segments render in <strong>. fr/ur were removed with those locales.
 */
export type Segment = string | { b: string };

const DELIVERS: Record<"en" | "ar" | "tr" | "hi", Segment[]> = {
  en: [
    "We publish ", { b: "live gold prices" }, " for 53 countries in 51 currencies. Each page opens with ",
    { b: "Swissquote's spot price" },
    ", which our server re-reads at least every five minutes; while the page stays open, the gold price follows the median of live PAXG/USD quotes on ",
    { b: "Binance" }, ", ", { b: "Coinbase" }, " and ", { b: "Kraken" },
    " (PAXG is a token backed one-to-one by London Good Delivery gold). Prices are converted at daily mid-market exchange rates. We cover five karats — 24K, 22K, 21K, 18K and 14K — plus silver, platinum and palladium.",
  ],
  ar: [
    "ننشر ", { b: "أسعار الذهب الحية" }, " في 53 دولة بـ51 عملة. تفتح كل صفحة على ",
    { b: "سعر Swissquote الفوري" },
    "، الذي يعيد خادمنا قراءته كل خمس دقائق على الأقل؛ وما دامت الصفحة مفتوحة يتبع سعر الذهب الوسيط بين أسعار PAXG/USD اللحظية في ",
    { b: "Binance" }, " و", { b: "Coinbase" }, " و", { b: "Kraken" },
    " (وPAXG رمز مدعوم واحدًا لواحد بذهب London Good Delivery). وتُحوَّل الأسعار بأسعار الصرف الوسطية اليومية. نغطي خمسة عيارات — 24 و22 و21 و18 و14 — إلى جانب الفضة والبلاتين والبلاديوم.",
  ],
  tr: [
    "53 ülke için 51 para biriminde ", { b: "canlı altın fiyatları" }, " yayımlıyoruz. Her sayfa, sunucumuzun en az beş dakikada bir yeniden okuduğu ",
    { b: "Swissquote spot fiyatıyla" },
    " açılır; sayfa açık kaldığı sürece altın fiyatı ",
    { b: "Binance" }, ", ", { b: "Coinbase" }, " ve ", { b: "Kraken" },
    " üzerindeki canlı PAXG/USD fiyatlarının medyanını izler (PAXG, London Good Delivery altınıyla bire bir desteklenen bir tokendır). Fiyatlar günlük orta piyasa kurlarıyla çevrilir. Beş ayarı — 24, 22, 21, 18 ve 14 ayar — ayrıca gümüş, platin ve paladyumu kapsıyoruz.",
  ],
  hi: [
    "हम 53 देशों के लिए 51 मुद्राओं में ", { b: "सोने के लाइव भाव" }, " प्रकाशित करते हैं। हर पेज ",
    { b: "Swissquote के स्पॉट भाव" },
    " से खुलता है, जिसे हमारा सर्वर कम से कम हर पाँच मिनट में दोबारा पढ़ता है; पेज खुला रहने तक सोने का भाव ",
    { b: "Binance" }, ", ", { b: "Coinbase" }, " और ", { b: "Kraken" },
    " पर लाइव PAXG/USD भावों की माध्यिका के साथ चलता है (PAXG एक टोकन है जिसके पीछे एक-एक के अनुपात में London Good Delivery सोना है)। भाव दैनिक मिड-मार्केट विनिमय दरों से बदले जाते हैं। हम पाँच कैरेट — 24, 22, 21, 18 और 14 — के साथ चांदी, प्लैटिनम और पैलेडियम भी कवर करते हैं।",
  ],
};

const TEXT = {
  quickLinks: { en: "Quick links", ar: "روابط سريعة", fr: "Liens rapides", tr: "Hızlı bağlantılar", ur: "فوری لنکس", hi: "त्वरित लिंक" },
  deliversH2: {
    en: "What Gold Prices Arabia delivers",
    ar: "ما الذي يقدمه Gold Prices Arabia",
    fr: "Ce que propose Gold Prices Arabia",
    tr: "Gold Prices Arabia ne sunar",
    ur: "Gold Prices Arabia کیا فراہم کرتا ہے",
    hi: "Gold Prices Arabia क्या देता है",
  },
  coverageH2: {
    en: "Live MENA coverage",
    ar: "تغطية لحظية في الشرق الأوسط وشمال أفريقيا",
    fr: "Couverture MENA en direct",
    tr: "Canlı MENA kapsamı",
    ur: "مشرقِ وسطیٰ و شمالی افریقہ کی لائیو کوریج",
    hi: "MENA की लाइव कवरेज",
  },
  coverageP: {
    en: "Browse live gold rates for the region's biggest markets — Saudi Arabia, UAE, Egypt, Jordan, Kuwait, Qatar, Bahrain, Lebanon, Morocco and Libya — with automatic local-currency conversion and every karat shown per gram and per troy ounce.",
    ar: "تصفح أسعار الذهب الحية لأكبر أسواق المنطقة — السعودية والإمارات ومصر والأردن والكويت وقطر والبحرين ولبنان والمغرب وليبيا — مع تحويل تلقائي للعملة المحلية وعرض جميع العيارات للجرام وللأونصة.",
    fr: "Parcourez les cours de l'or en direct des plus grands marchés de la région — Arabie saoudite, Émirats, Égypte, Jordanie, Koweït, Qatar, Bahreïn, Liban, Maroc et Libye — avec conversion automatique en devise locale et chaque carat affiché au gramme et à l'once troy.",
    tr: "Bölgenin en büyük piyasaları — Suudi Arabistan, BAE, Mısır, Ürdün, Kuveyt, Katar, Bahreyn, Lübnan, Fas ve Libya — için canlı altın fiyatlarına göz atın; otomatik yerel para birimi dönüşümü ve her ayar gram ve troy ons bazında gösterilir.",
    ur: "خطے کی سب سے بڑی منڈیوں — سعودی عرب، امارات، مصر، اردن، کویت، قطر، بحرین، لبنان، مراکش اور لیبیا — کے لیے سونے کی لائیو قیمتیں دیکھیں، مقامی کرنسی میں خودکار تبدیلی کے ساتھ اور ہر قیراط فی گرام اور فی ٹرائے اونس دکھایا جاتا ہے۔",
    hi: "क्षेत्र के सबसे बड़े बाज़ारों — सऊदी अरब, यूएई, मिस्र, जॉर्डन, कुवैत, क़तर, बहरीन, लेबनान, मोरक्को और लीबिया — के लिए सोने का लाइव भाव देखें, स्थानीय मुद्रा में स्वचालित रूपांतरण के साथ और हर कैरेट प्रति ग्राम व प्रति ट्रॉय औंस में।",
  },
} satisfies Record<string, LocaleText>;

export function seoHeaderText(locale: string) {
  return {
    quickLinks: pick(locale, TEXT.quickLinks),
    deliversH2: pick(locale, TEXT.deliversH2),
    delivers: pickList(locale, DELIVERS),
    coverageH2: pick(locale, TEXT.coverageH2),
    coverageP: pick(locale, TEXT.coverageP),
  };
}
