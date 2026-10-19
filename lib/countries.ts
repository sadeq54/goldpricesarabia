import { localeMeta } from "@/i18n/routing";
import { localizedRegionName } from "@/lib/country-names";
import { pick } from "@/lib/i18n-text";

export type Country = {
  slug: string;
  cc: string;
  name_en: string;
  name_ar: string;
  currency: string;
  flag: string;
  /**
   * A second currency the local gold trade is quoted in, shown beside the
   * main one. Palestine: jewellers in the West Bank price in Jordanian dinar,
   * and Search Console queries ask for it outright ("…فلسطين بالدينار عيار
   * 21"), while the page showed only shekels (2026-10-15).
   */
  alsoQuoted?: string;
};

export const COUNTRIES: Country[] = [
  { slug: "usa", cc: "US", name_en: "USA", name_ar: "الولايات المتحدة", currency: "USD", flag: "🇺🇸" },
  { slug: "europe", cc: "EU", name_en: "Europe", name_ar: "أوروبا", currency: "EUR", flag: "🇪🇺" },
  { slug: "argentina", cc: "AR", name_en: "Argentina", name_ar: "الأرجنتين", currency: "ARS", flag: "🇦🇷" },
  { slug: "australia", cc: "AU", name_en: "Australia", name_ar: "أستراليا", currency: "AUD", flag: "🇦🇺" },
  { slug: "bahrain", cc: "BH", name_en: "Bahrain", name_ar: "البحرين", currency: "BHD", flag: "🇧🇭" },
  { slug: "brazil", cc: "BR", name_en: "Brazil", name_ar: "البرازيل", currency: "BRL", flag: "🇧🇷" },
  { slug: "canada", cc: "CA", name_en: "Canada", name_ar: "كندا", currency: "CAD", flag: "🇨🇦" },
  { slug: "china", cc: "CN", name_en: "China", name_ar: "الصين", currency: "CNY", flag: "🇨🇳" },
  { slug: "colombia", cc: "CO", name_en: "Colombia", name_ar: "كولومبيا", currency: "COP", flag: "🇨🇴" },
  { slug: "croatia", cc: "HR", name_en: "Croatia", name_ar: "كرواتيا", currency: "EUR", flag: "🇭🇷" },
  { slug: "denmark", cc: "DK", name_en: "Denmark", name_ar: "الدنمارك", currency: "DKK", flag: "🇩🇰" },
  { slug: "egypt", cc: "EG", name_en: "Egypt", name_ar: "مصر", currency: "EGP", flag: "🇪🇬" },
  { slug: "algeria", cc: "DZ", name_en: "Algeria", name_ar: "الجزائر", currency: "DZD", flag: "🇩🇿" },
  { slug: "hong-kong", cc: "HK", name_en: "Hong Kong", name_ar: "هونغ كونغ", currency: "HKD", flag: "🇭🇰" },
  { slug: "iraq", cc: "IQ", name_en: "Iraq", name_ar: "العراق", currency: "IQD", flag: "🇮🇶" },
  { slug: "hungary", cc: "HU", name_en: "Hungary", name_ar: "المجر", currency: "HUF", flag: "🇭🇺" },
  { slug: "india", cc: "IN", name_en: "India", name_ar: "الهند", currency: "INR", flag: "🇮🇳" },
  { slug: "indonesia", cc: "ID", name_en: "Indonesia", name_ar: "إندونيسيا", currency: "IDR", flag: "🇮🇩" },
  { slug: "japan", cc: "JP", name_en: "Japan", name_ar: "اليابان", currency: "JPY", flag: "🇯🇵" },
  { slug: "jordan", cc: "JO", name_en: "Jordan", name_ar: "الأردن", currency: "JOD", flag: "🇯🇴" },
  { slug: "kuwait", cc: "KW", name_en: "Kuwait", name_ar: "الكويت", currency: "KWD", flag: "🇰🇼" },
  { slug: "lebanon", cc: "LB", name_en: "Lebanon", name_ar: "لبنان", currency: "LBP", flag: "🇱🇧" },
  { slug: "libya", cc: "LY", name_en: "Libya", name_ar: "ليبيا", currency: "LYD", flag: "🇱🇾" },
  { slug: "macau", cc: "MO", name_en: "Macau", name_ar: "ماكاو", currency: "MOP", flag: "🇲🇴" },
  { slug: "malaysia", cc: "MY", name_en: "Malaysia", name_ar: "ماليزيا", currency: "MYR", flag: "🇲🇾" },
  { slug: "mexico", cc: "MX", name_en: "Mexico", name_ar: "المكسيك", currency: "MXN", flag: "🇲🇽" },
  { slug: "morocco", cc: "MA", name_en: "Morocco", name_ar: "المغرب", currency: "MAD", flag: "🇲🇦" },
  { slug: "myanmar", cc: "MM", name_en: "Myanmar", name_ar: "ميانمار", currency: "MMK", flag: "🇲🇲" },
  { slug: "new-zealand", cc: "NZ", name_en: "New Zealand", name_ar: "نيوزيلندا", currency: "NZD", flag: "🇳🇿" },
  { slug: "nigeria", cc: "NG", name_en: "Nigeria", name_ar: "نيجيريا", currency: "NGN", flag: "🇳🇬" },
  { slug: "north-macedonia", cc: "MK", name_en: "North Macedonia", name_ar: "مقدونيا الشمالية", currency: "MKD", flag: "🇲🇰" },
  { slug: "norway", cc: "NO", name_en: "Norway", name_ar: "النرويج", currency: "NOK", flag: "🇳🇴" },
  { slug: "pakistan", cc: "PK", name_en: "Pakistan", name_ar: "باكستان", currency: "PKR", flag: "🇵🇰" },
  // The West Bank and Gaza use the Israeli shekel as their circulating
  // currency alongside JOD and EGP; ILS is what jewellers actually quote.
  { slug: "palestine", cc: "PS", name_en: "Palestine", name_ar: "فلسطين", currency: "ILS", flag: "🇵🇸", alsoQuoted: "JOD" },
  { slug: "philippines", cc: "PH", name_en: "Philippines", name_ar: "الفلبين", currency: "PHP", flag: "🇵🇭" },
  { slug: "qatar", cc: "QA", name_en: "Qatar", name_ar: "قطر", currency: "QAR", flag: "🇶🇦" },
  { slug: "russia", cc: "RU", name_en: "Russia", name_ar: "روسيا", currency: "RUB", flag: "🇷🇺" },
  { slug: "saudi-arabia", cc: "SA", name_en: "Saudi Arabia", name_ar: "السعودية", currency: "SAR", flag: "🇸🇦" },
  { slug: "serbia", cc: "RS", name_en: "Serbia", name_ar: "صربيا", currency: "RSD", flag: "🇷🇸" },
  { slug: "singapore", cc: "SG", name_en: "Singapore", name_ar: "سنغافورة", currency: "SGD", flag: "🇸🇬" },
  { slug: "south-africa", cc: "ZA", name_en: "South Africa", name_ar: "جنوب أفريقيا", currency: "ZAR", flag: "🇿🇦" },
  { slug: "south-korea", cc: "KR", name_en: "South Korea", name_ar: "كوريا الجنوبية", currency: "KRW", flag: "🇰🇷" },
  { slug: "sweden", cc: "SE", name_en: "Sweden", name_ar: "السويد", currency: "SEK", flag: "🇸🇪" },
  { slug: "switzerland", cc: "CH", name_en: "Switzerland", name_ar: "سويسرا", currency: "CHF", flag: "🇨🇭" },
  { slug: "syria", cc: "SY", name_en: "Syria", name_ar: "سوريا", currency: "SYP", flag: "🇸🇾" },
  { slug: "taiwan", cc: "TW", name_en: "Taiwan", name_ar: "تايوان", currency: "TWD", flag: "🇹🇼" },
  { slug: "thailand", cc: "TH", name_en: "Thailand", name_ar: "تايلاند", currency: "THB", flag: "🇹🇭" },
  { slug: "tunisia", cc: "TN", name_en: "Tunisia", name_ar: "تونس", currency: "TND", flag: "🇹🇳" },
  { slug: "turkey", cc: "TR", name_en: "Turkey", name_ar: "تركيا", currency: "TRY", flag: "🇹🇷" },
  { slug: "uk", cc: "GB", name_en: "United Kingdom", name_ar: "المملكة المتحدة", currency: "GBP", flag: "🇬🇧" },
  { slug: "uae", cc: "AE", name_en: "United Arab Emirates", name_ar: "الإمارات", currency: "AED", flag: "🇦🇪" },
  { slug: "vietnam", cc: "VN", name_en: "Vietnam", name_ar: "فيتنام", currency: "VND", flag: "🇻🇳" },
  // USD, not YER: the rial trades near 530/$ in Sana'a and ~3x that in Aden, while
  // FX feeds publish ~236, a rate nobody in Yemen uses (checked 2026-10-19).
  { slug: "yemen", cc: "YE", name_en: "Yemen", name_ar: "اليمن", currency: "USD", flag: "🇾🇪" },
];

export const COUNTRY_BY_SLUG: Record<string, Country> = Object.fromEntries(
  COUNTRIES.map((c) => [c.slug, c])
);

export const COUNTRY_BY_CC: Record<string, Country> = Object.fromEntries(
  COUNTRIES.map((c) => [c.cc, c])
);

export const ALL_CURRENCIES: string[] = Array.from(
  new Set(COUNTRIES.map((c) => c.currency)),
);

export function currencyForCC(cc: string | null | undefined): string | null {
  if (!cc) return null;
  return COUNTRY_BY_CC[cc.toUpperCase()]?.currency ?? null;
}

/**
 * Display name for `locale`: hand-written Arabic / English columns, CLDR
 * region names (with a few overrides) for every other locale, English as the
 * last resort.
 */
export function countryName(c: Country, locale: string): string {
  if (locale === "ar") return c.name_ar;
  if (locale === "en") return c.name_en;
  return localizedRegionName(c.cc, locale) ?? c.name_en;
}

const SORTED = new Map<string, Country[]>();
/** All countries sorted by their localized name with locale-aware collation. */
export function sortedCountries(locale: string): Country[] {
  let list = SORTED.get(locale);
  if (!list) {
    const tag = localeMeta(locale).intl;
    list = [...COUNTRIES].sort((a, b) =>
      countryName(a, locale).localeCompare(countryName(b, locale), tag),
    );
    SORTED.set(locale, list);
  }
  return list;
}

/**
 * Country-specific commentary on gold-buying — VAT, taxes, dominant karats,
 * cultural quirks. Surfaces under the H1 of /[country]/gold-price/[karat]
 * pages to break thin-content sameness across the 368 programmatic SEO
 * permutations. Each note is short (~80 words) and locale-pair-translated.
 *
 * Only flagship markets covered for now; long-tail countries fall back to the
 * generic intro.
 */
export type CountryNote = { en: string; ar: string };

export const COUNTRY_NOTES: Record<string, CountryNote> = {
  // Syria, Iraq, Yemen and Palestine are the site's largest Search Console
  // markets that had no page at all — Syria alone was 33 clicks and 2,983
  // impressions over 28 days, ranking on generic pages. What these readers
  // need is not another karat table: it is the gap between an official rate
  // and the rate a jeweller actually uses, because in each of these markets
  // that gap is the price.
  syria: {
    en: "Syria's gold market runs on 21K jewellery, sold through the souks of Damascus, Aleppo and Homs, and gold here is household savings as much as it is jewellery. The Syrian pound lost most of its value after 2011. On 1 January 2026 a new pound replaced the old one at 100 old pounds to one new pound, and the prices on this page are in new pounds. The Damascus Goldsmiths' Association publishes daily 21K and 18K prices.",
    ar: "يقوم سوق الذهب في سوريا على مجوهرات عيار 21 التي تُباع في أسواق دمشق وحلب وحمص، والذهب هنا مدخرات للأسرة بقدر ما هو حلي. فقدت الليرة السورية معظم قيمتها بعد 2011، وفي 1 يناير 2026 حلّت ليرة جديدة محل القديمة بواقع 100 ليرة قديمة لكل ليرة جديدة، والأسعار في هذه الصفحة بالليرة الجديدة. وتنشر جمعية الصاغة في دمشق نشرة يومية بأسعار عيارَي 21 و18.",
  },
  iraq: {
    en: "Iraqi jewellery is sold mostly at 21K, as in the Gulf, and gold is a standard part of the mahr. The Central Bank of Iraq sets an official rate of 1,310 dinars per dollar, but exchange shops have traded the dollar well above it, so a gram priced in dinars depends on the rate a shop uses; this page converts at the rate published by international data feeds, which is close to the market rate. Baghdad's wholesale gold trade is concentrated on Nahr Street, and there is no VAT on jewellery.",
    ar: "تُباع المجوهرات في العراق غالبًا بعيار 21 كما في الخليج، والذهب جزء أساسي من المهر. يحدد البنك المركزي العراقي سعرًا رسميًا قدره 1,310 دنانير للدولار، لكن الدولار تداول في مكاتب الصرافة فوقه بكثير، لذا يتوقف سعر الجرام بالدينار على السعر الذي يعتمده المحل؛ وتحوّل هذه الصفحة بالسعر الذي تنشره مصادر البيانات الدولية، وهو قريب من سعر السوق. وتتركز تجارة الذهب بالجملة في بغداد في شارع النهر، ولا توجد ضريبة قيمة مضافة على المجوهرات.",
  },
  yemen: {
    en: "Yemen's retail gold is mostly 21K, sold in the old souks of Sana'a, Aden and Taiz, and it keeps its traditional place in the mahr and as portable savings. The central bank split between Sana'a and Aden in 2016, and since Sana'a banned the newer banknotes in December 2019 the rial has traded at two very different rates: around 530 per dollar in Sana'a and several times that in Aden. No single rial price is right for the whole country, so this page shows the price in US dollars; multiply it by the dollar rate in your city to get the local price.",
    ar: "الذهب بالتجزئة في اليمن عيار 21 في معظمه، ويُباع في أسواق صنعاء وعدن وتعز القديمة، ويحتفظ بمكانته التقليدية في المهر وكمدخرات محمولة. انقسم البنك المركزي بين صنعاء وعدن عام 2016، ومنذ أن حظرت صنعاء الأوراق النقدية الأحدث في ديسمبر 2019 يُتداول الريال بسعرين مختلفين جدًا: نحو 530 ريالًا للدولار في صنعاء وأضعاف ذلك في عدن. لا يصلح سعر واحد بالريال للبلد كله، لذا تعرض هذه الصفحة السعر بالدولار الأمريكي؛ اضربه في سعر الدولار في مدينتك لتحصل على السعر المحلي.",
  },
  palestine: {
    en: "Gold in the West Bank and Gaza is bought mainly at 21K, and jewellers quote in shekels, the currency that circulates, though Jordanian dinars and dollars are also used. Most of the gold sold is made locally: 96% of the gold hallmarked in 2022 was Palestinian-made, according to the Ministry of National Economy. Gold is central to the mahr and remains the most liquid asset most households hold, which is why demand holds up when other spending stops.",
    ar: "يُشترى الذهب في الضفة الغربية وغزة بعيار 21 أساسًا، ويسعّر الصاغة بالشيكل لأنه العملة المتداولة، مع استخدام الدينار الأردني والدولار أيضًا. ومعظم الذهب المبيع مصنوع محليًا: 96% من الذهب الذي دُمغ عام 2022 كان صناعة فلسطينية بحسب بيانات وزارة الاقتصاد الوطني. الذهب محوري في المهر ويبقى أكثر الأصول سيولة لدى معظم الأسر، ولهذا يصمد الطلب عليه حين يتوقف الإنفاق الآخر.",
  },
  algeria: {
    en: "Algeria's jewellery trade is built on 18K, the legal standard, unlike the 21K Gulf norm, and Algiers, Constantine and Tlemcen each have long-established goldsmith quarters. Currency controls give the dinar an official rate and a widely used parallel one, traded at Square Port Saïd in Algiers, where a dollar costs considerably more dinars. This page converts at the official rate, so local prices can differ from the figure shown. Gold imports are regulated, every piece must carry the state hallmark, and unhallmarked jewellery may not be sold.",
    ar: "تقوم تجارة المجوهرات في الجزائر على عيار 18، وهو المعيار القانوني، خلافًا لعرف الخليج عند 21، ولكلٍّ من الجزائر العاصمة وقسنطينة وتلمسان أحياء صياغة عريقة. وبسبب الرقابة على الصرف للدينار سعر رسمي وآخر موازٍ واسع الاستخدام يُتداول في ساحة بورسعيد بالعاصمة، حيث يكلّف الدولار دنانير أكثر بكثير. تحوّل هذه الصفحة بالسعر الرسمي، لذا قد تختلف الأسعار المحلية عن الرقم المعروض. واستيراد الذهب نشاط منظَّم، ويجب أن تحمل كل قطعة الدمغة الرسمية، ولا يجوز بيع المجوهرات غير المدموغة.",
  },
  tunisia: {
    en: "Tunisian jewellery is sold mainly in 18K, with 9K for lower-priced pieces, and prices are usually quoted per gram of 18K. The trade is concentrated in the souks of the Tunis medina, including Souk El Berka. The dinar is not freely convertible and may not legally be taken out of the country, which keeps gold demand at home.",
    ar: "تُباع المجوهرات في تونس أساسًا بعيار 18، مع عيار 9 للقطع الأرخص، وتُعلن الأسعار عادةً لجرام عيار 18. وتتركز التجارة في أسواق المدينة العتيقة بتونس، ومنها سوق البركة. والدينار غير قابل للتحويل بحرية ولا يجوز قانونًا إخراجه من البلاد، ما يبقي الطلب على الذهب داخليًا.",
  },
  "saudi-arabia": {
    en: "Saudi Arabia is the largest gold jewellery market in the Gulf: buyers took 44 tonnes in 2025, against 29.4 tonnes in the UAE, according to the World Gold Council. The dominant karat is 21K (87.5% purity), followed by 18K for jewellery and 24K for investment bars. Jewellery carries 15% VAT on its full price, gold value and making charge alike, while investment gold of 99% purity or more in bullion form is zero-rated. Most jewellery is sold by weight at the day's price plus a making charge that depends on the piece.",
    ar: "السعودية أكبر سوق لمجوهرات الذهب في الخليج: اشترى المستهلكون 44 طنًا عام 2025 مقابل 29.4 طن في الإمارات، بحسب مجلس الذهب العالمي. العيار السائد 21 (نقاء 87.5%)، يليه 18 للمجوهرات و24 للسبائك الاستثمارية. وتخضع المجوهرات لضريبة القيمة المضافة 15% على سعرها كاملًا، قيمة الذهب والمصنعية معًا، بينما يخضع الذهب الاستثماري بنقاء 99% فأكثر في صورة سبائك لنسبة الصفر. وتُباع معظم المجوهرات بالوزن وفق سعر اليوم مضافًا إليه مصنعية تختلف حسب القطعة.",
  },
  jordan: {
    en: "Jordan's gold market is dominated by 21K jewellery. The Jordanian dinar has been pegged to the US dollar at about 0.709 dinars per dollar since 1995, so gold prices in dinars move almost one-for-one with the dollar price. The Jordan Jewellers Syndicate publishes the daily price of gold by karat; it covers the metal only, and each shop sets its own making charge. Amman's main gold market is Souq al-Sagha downtown.",
    ar: "يُهيمن على سوق الذهب في الأردن مجوهرات عيار 21. والدينار الأردني مربوط بالدولار الأمريكي عند نحو 0.709 دينار للدولار منذ 1995، لذا تتحرك أسعار الذهب بالدينار تقريبًا مع السعر بالدولار. وتنشر نقابة أصحاب محلات تجارة وصياغة الحلي والمجوهرات السعر اليومي للذهب حسب العيار، وهو سعر المعدن فقط، أما المصنعية فيحددها كل محل. وسوق الذهب الرئيسي في عمّان هو سوق الصاغة في وسط البلد.",
  },
  uae: {
    en: "The UAE, and Dubai's Gold Souk in Deira in particular, is one of the world's largest gold trading hubs. Both 21K and 22K are common in jewellery, and 24K in investment bars. The UAE introduced 5% VAT in 2018; it applies to the full price of jewellery, gold value and making charge alike, while investment gold of 99% purity or more in bullion form is zero-rated. The dirham is pegged to the US dollar at 3.6725, so dirham gold prices mirror the dollar price.",
    ar: "تُعدّ الإمارات، وسوق الذهب في ديرة دبي خاصةً، من أكبر مراكز تجارة الذهب في العالم. ويشيع عيارا 21 و22 في المجوهرات، وعيار 24 في السبائك الاستثمارية. أدخلت الإمارات ضريبة القيمة المضافة 5% عام 2018، وتُطبَّق على سعر المجوهرات كاملًا، قيمة الذهب والمصنعية معًا، بينما يخضع الذهب الاستثماري بنقاء 99% فأكثر في صورة سبائك لنسبة الصفر. والدرهم مربوط بالدولار عند 3.6725، لذا تعكس أسعار الذهب بالدرهم السعر بالدولار.",
  },
  egypt: {
    en: "Egypt's gold market is driven by jewellery demand at 21K and 18K. The Egyptian pound has been devalued several times since 2022, and local demand for gold tends to rise around devaluations as families protect their savings. VAT of 14% is charged on an agreed average making charge per gram, paid when the piece is hallmarked; the gold itself is not taxed. Cairo's main gold market is the El-Sagha quarter next to Khan el-Khalili.",
    ar: "يقود سوقَ الذهب في مصر طلبُ المجوهرات على عيارَي 21 و18. خُفِّضت قيمة الجنيه المصري عدة مرات منذ 2022، ويميل الطلب المحلي على الذهب إلى الارتفاع حول قرارات التخفيض لحماية المدخرات. وتُفرض ضريبة القيمة المضافة 14% على متوسط متفق عليه للمصنعية لكل جرام، تُدفع عند دمغ القطعة، أما الذهب نفسه فلا يخضع لها. وسوق الذهب الرئيسي في القاهرة هو حي الصاغة المجاور لخان الخليلي.",
  },
  qatar: {
    en: "Qatar's gold market favours 21K and 22K jewellery, with 24K bars for investment. The Qatari riyal is pegged to the US dollar at 3.64, so riyal gold prices track the dollar price closely. Qatar has no VAT (as of 2026), and jewellery imported from outside the GCC pays 5% customs duty. Doha's Gold Souq, next to Souq Waqif, is the main retail centre, and shops post their own daily prices based on the world price.",
    ar: "يفضّل سوق الذهب في قطر مجوهرات عيارَي 21 و22، مع سبائك عيار 24 للاستثمار. والريال القطري مربوط بالدولار عند 3.64، لذا تتبع أسعار الذهب بالريال السعر بالدولار عن قرب. ولا توجد في قطر ضريبة قيمة مضافة (حتى 2026)، وتُفرض رسوم جمركية 5% على المجوهرات المستوردة من خارج دول مجلس التعاون. وسوق الذهب في الدوحة، المجاور لسوق واقف، هو مركز التجزئة الرئيسي، وتعلن المحلات أسعارها اليومية بناءً على السعر العالمي.",
  },
  kuwait: {
    en: "In Kuwait, 21K is the most popular karat with Arab buyers, 22K sells mainly to South Asian buyers, and 24K is bought mostly as bars. The Kuwaiti dinar is the world's highest-valued currency unit, at about 0.31 dinars per dollar, so gold prices in dinars are numerically the smallest in the Gulf. Kuwait has no VAT (as of 2026), and jewellery imported from outside the GCC pays 5% customs duty.",
    ar: "في الكويت يُعدّ عيار 21 الأكثر طلبًا لدى المشترين العرب، ويُباع عيار 22 أساسًا للمشترين من جنوب آسيا، ويُشترى عيار 24 غالبًا في صورة سبائك. والدينار الكويتي أعلى وحدة نقدية قيمةً في العالم، بنحو 0.31 دينار للدولار، لذا فأسعار الذهب بالدينار هي الأصغر رقميًا في الخليج. ولا توجد في الكويت ضريبة قيمة مضافة (حتى 2026)، وتُفرض رسوم جمركية 5% على المجوهرات المستوردة من خارج دول مجلس التعاون.",
  },
  bahrain: {
    en: "Bahrain's gold market is small but long-established; Manama's gold souk is one of the oldest in the Gulf. 21K and 22K dominate jewellery sales. The Bahraini dinar is pegged to the US dollar at 0.376. VAT started in 2019 at 5% and rose to 10% on 1 January 2022; jewellery is taxed at the standard rate, while certified investment gold of 99% purity or more is zero-rated. Jewellery imported from outside the GCC pays 5% customs duty.",
    ar: "سوق الذهب في البحرين صغير لكنه عريق؛ إذ يُعدّ سوق الذهب في المنامة من أقدم أسواق الخليج. ويهيمن عيارا 21 و22 على مبيعات المجوهرات. والدينار البحريني مربوط بالدولار عند 0.376. بدأ العمل بضريبة القيمة المضافة عام 2019 بنسبة 5% وارتفعت إلى 10% في 1 يناير 2022؛ وتخضع المجوهرات للنسبة الأساسية، بينما يخضع الذهب الاستثماري المعتمد بنقاء 99% فأكثر لنسبة الصفر. وتُفرض رسوم جمركية 5% على المجوهرات المستوردة من خارج دول مجلس التعاون.",
  },
  usa: {
    en: "In the US, gold is quoted per troy ounce in dollars. The COMEX gold future (CME Group) is the most traded gold futures contract, while the LBMA Gold Price set in London is the global benchmark. There is no federal VAT; sales tax on bullion is set by each state, and many states, including Texas and Florida, exempt investment gold. Dealers sell coins and bars at a premium over spot that varies by product and dealer.",
    ar: "في الولايات المتحدة يُسعَّر الذهب لكل أونصة تروي بالدولار. وعقد الذهب الآجل في COMEX (مجموعة CME) هو أكثر عقود الذهب الآجلة تداولًا، بينما يُعدّ سعر LBMA للذهب الذي يُحدَّد في لندن المرجع العالمي. ولا توجد ضريبة قيمة مضافة فدرالية؛ وتحدد كل ولاية ضريبة المبيعات على السبائك، وتُعفي ولايات كثيرة، منها تكساس وفلوريدا، الذهب الاستثماري. ويبيع التجار العملات والسبائك بعلاوة فوق السعر الفوري تختلف حسب المنتج والتاجر.",
  },
  uk: {
    en: "UK gold prices are quoted per troy ounce in pounds, anchored to the LBMA Gold Price, which has been set in London by electronic auction since 2015 and is also published in sterling. Investment gold is VAT-exempt: bars and wafers of 99.5% purity or more, and most gold coins of 90% purity or more minted after 1800. Britannia and Sovereign coins are also free of Capital Gains Tax because they are sterling legal tender. Jewellery carries 20% VAT.",
    ar: "تُسعَّر أسعار الذهب في المملكة المتحدة لكل أونصة تروي بالجنيه الإسترليني، استنادًا إلى سعر LBMA للذهب الذي يُحدَّد في لندن بمزاد إلكتروني منذ 2015 ويُنشر بالجنيه أيضًا. والذهب الاستثماري معفى من ضريبة القيمة المضافة: السبائك والرقائق بنقاء 99.5% فأكثر، ومعظم العملات الذهبية بنقاء 90% فأكثر المسكوكة بعد 1800. كما أن عملتَي Britannia وSovereign معفاتان من ضريبة الأرباح الرأسمالية لأنهما عملة قانونية بالجنيه. وتخضع المجوهرات لضريبة قيمة مضافة 20%.",
  },
};

/**
 * Return per-country market commentary. Prefers the hand-written long-form
 * COUNTRY_NOTES entry; otherwise falls back to a note composed from
 * COUNTRY_FACTS so every country gets unique copy — no thin/duplicate
 * programmatic pages. Returns null only when neither source has the slug.
 */
export function countryNote(slug: string, locale: string): string | null {
  // Both sources are written in English and Arabic only. `pick()` falls back
  // to English, so on fr/tr/ur/hi pages this used to print an English
  // paragraph inside otherwise-translated body copy — measured 2026-10-10 at
  // 5–9% of the prose on ~1,060 pages, after four AdSense "content quality"
  // rejections. Mixed-language body text is worse than no note, so the note
  // is omitted for locales it was never written in. To restore it, add real
  // human-checked translations to COUNTRY_NOTES / COUNTRY_FACTS first.
  if (locale !== "ar" && locale !== "en") return null;
  const note = COUNTRY_NOTES[slug];
  if (note) return pick(locale, note);
  return composeCountryNote(slug, locale);
}

/** Karat → purity label, shared by composed country notes. */
const KARAT_PURITY: Record<string, string> = {
  "24K": "99.9%",
  "23K": "96.5%",
  "22K": "91.7%",
  "21K": "87.5%",
  "18K": "75%",
  "14K": "58.3%",
};

/**
 * Structured, stable market facts per country — data source for
 * `composeCountryNote`. Deliberately EXCLUDES volatile tax/VAT rates (those
 * live in the hand-verified COUNTRY_NOTES / COUNTRY_VAT). `karat`, the
 * currency-peg regime and the distinctive `note` are textbook-stable facts.
 *
 * NOTE: dominant-karat and market facts here are well-documented but should
 * be spot-checked by the site owner before any are promoted into a full
 * COUNTRY_NOTES entry or relied on as authoritative.
 */
export type CountryFacts = {
  /** Most-traded retail gold purity in this market. */
  karat: keyof typeof KARAT_PURITY;
  /** Currency-peg regime — drives the peg sentence. Omit for free-floating. */
  peg?: "usd" | "eur" | "hkd";
  /** One distinctive, verifiable market fact — locale-pair translated. */
  note: { en: string; ar: string };
};

export const COUNTRY_FACTS: Record<string, CountryFacts> = {
  syria: {
    karat: "21K",
    note: {
      en: "The pound's official and parallel rates have diverged for years, so the souk price and any central-bank conversion rarely agree.",
      ar: "تباعد السعران الرسمي والموازي لليرة لسنوات، لذا نادرًا ما يتطابق سعر السوق مع أي تحويل بسعر المصرف المركزي.",
    },
  },
  iraq: {
    karat: "21K",
    note: {
      en: "Baghdad's Shorja and Nahr markets set the reference the rest of the country follows, with 22K preferred in Kurdistan.",
      ar: "تحدد أسواق الشورجة والنهر في بغداد السعر المرجعي الذي تتبعه بقية البلاد، مع تفضيل عيار 22 في كردستان.",
    },
  },
  yemen: {
    karat: "21K",
    note: {
      en: "Aden and Sana'a have run separate exchange regimes since 2016, so one gram can carry two national prices on the same day.",
      ar: "تعمل عدن وصنعاء بنظامَي صرف منفصلين منذ 2016، لذا قد يحمل الجرام الواحد سعرين وطنيين في اليوم ذاته.",
    },
  },
  palestine: {
    karat: "21K",
    note: {
      en: "Jewellers quote in shekels but stock arrives through Jordanian wholesalers, so prices track Amman within a narrow band.",
      ar: "يسعّر الصاغة بالشيكل لكن البضاعة تصل عبر تجار الجملة الأردنيين، لذا تتبع الأسعار عمّان ضمن نطاق ضيق.",
    },
  },
  algeria: {
    karat: "18K",
    note: {
      en: "Currency controls sustain a parallel dinar rate at Algiers' Square Port Saïd, and import limits keep supply largely recycled.",
      ar: "تُبقي الرقابة على الصرف سعرًا موازيًا للدينار في ساحة بورسعيد بالجزائر، وتجعل قيود الاستيراد المعروض معادَ التدوير غالبًا.",
    },
  },
  tunisia: {
    karat: "18K",
    note: {
      en: "Every piece is struck at a state hallmark office — the ram's head marks 18K — and that stamp carries the local resale value.",
      ar: "تُدمغ كل قطعة في مكتب دمغ حكومي — ورأس الكبش علامة عيار 18 — وعلى تلك الدمغة تقوم قيمة إعادة البيع محليًا.",
    },
  },
  europe: {
    karat: "18K",
    note: {
      en: "Across the eurozone, 24K bars dominate investment while 18K is the jewellery norm, and pricing references the twice-daily LBMA auction in London.",
      ar: "في منطقة اليورو، تهيمن سبائك عيار 24 على الاستثمار بينما يُعد عيار 18 معيار المجوهرات، ويعتمد التسعير على مزاد LBMA في لندن مرتين يوميًا.",
    },
  },
  argentina: {
    karat: "18K",
    note: {
      en: "Chronic inflation makes gold a key store of value for Argentines, and local premiums over the world spot price can be unusually wide.",
      ar: "يجعل التضخم المزمن الذهب مخزنًا رئيسيًا للقيمة لدى الأرجنتينيين، وقد تكون العلاوات المحلية فوق السعر العالمي واسعة بشكل غير معتاد.",
    },
  },
  australia: {
    karat: "18K",
    note: {
      en: "The government-owned Perth Mint is one of the world's largest gold refiners and the source of the Australian Kangaroo bullion coin.",
      ar: "دار سك بيرث المملوكة للحكومة من أكبر مصافي الذهب في العالم وهي مصدر عملة الكنغر الأسترالية السبائكية.",
    },
  },
  brazil: {
    karat: "18K",
    note: {
      en: "Brazilian law sets 18K (750) as the minimum gold-jewellery standard, while investment gold trades on the B3 exchange in Sao Paulo.",
      ar: "يحدد القانون البرازيلي عيار 18 (750) كحد أدنى لمعيار مجوهرات الذهب، بينما يُتداول الذهب الاستثماري في بورصة B3 بساو باولو.",
    },
  },
  canada: {
    karat: "18K",
    note: {
      en: "The Royal Canadian Mint produces the Gold Maple Leaf, one of the purest bullion coins in the world at 99.99%.",
      ar: "تنتج دار سك العملة الملكية الكندية عملة ورقة القيقب الذهبية، إحدى أنقى عملات السبائك في العالم بنقاء 99.99%.",
    },
  },
  china: {
    karat: "24K",
    note: {
      en: "The Shanghai Gold Exchange sets the yuan-denominated Shanghai Gold Benchmark Price, and high-purity gold dominates retail demand.",
      ar: "تحدد بورصة شنغهاي للذهب السعر المرجعي لذهب شنغهاي المقوّم باليوان، ويهيمن الذهب عالي النقاء على طلب التجزئة.",
    },
  },
  colombia: {
    karat: "18K",
    note: {
      en: "Colombia is a major Latin American gold producer, and its domestic jewellery retail is built around 18K.",
      ar: "كولومبيا من كبار منتجي الذهب في أمريكا اللاتينية، وتقوم تجارة المجوهرات المحلية على عيار 18.",
    },
  },
  croatia: {
    karat: "18K",
    note: {
      en: "Croatia adopted the euro in 2023, so gold is now priced in EUR and tracks the wider eurozone market.",
      ar: "اعتمدت كرواتيا اليورو في 2023، لذا يُسعَّر الذهب الآن باليورو ويتتبع سوق منطقة اليورو الأوسع.",
    },
  },
  denmark: {
    karat: "18K",
    peg: "eur",
    note: {
      en: "Danish retail jewellery centres on 18K and 14K, and the krone's euro peg keeps gold prices aligned with the eurozone.",
      ar: "تتركز مجوهرات التجزئة الدنماركية على عيارَي 18 و14، ويبقي ربط الكرونة باليورو أسعار الذهب متوافقة مع منطقة اليورو.",
    },
  },
  "hong-kong": {
    karat: "24K",
    peg: "usd",
    note: {
      en: "The Chinese Gold & Silver Exchange Society, founded in 1910, trades 'four-nines' 99.99 gold at the heart of one of Asia's oldest bullion markets.",
      ar: "تتداول جمعية تبادل الذهب والفضة الصينية، التي تأسست عام 1910، ذهب التسع نقاط الأربع 99.99 في قلب أحد أقدم أسواق السبائك في آسيا.",
    },
  },
  hungary: {
    karat: "14K",
    note: {
      en: "Hungarian retail jewellery follows the Central European norm of 14K, with 18K and investment bars also available.",
      ar: "تتبع مجوهرات التجزئة المجرية المعيار الأوروبي الأوسط لعيار 14، مع توافر عيار 18 وسبائك الاستثمار أيضًا.",
    },
  },
  india: {
    karat: "22K",
    note: {
      en: "India is the world's second-largest gold consumer; 22K (916) jewellery dominates and is traditionally weighed by the tola, with Mumbai's Zaveri Bazaar setting influential regional rates.",
      ar: "الهند ثاني أكبر مستهلك للذهب في العالم؛ تهيمن مجوهرات عيار 22 (916) وتُوزن تقليديًا بالتولة، ويحدد سوق زافيري بازار في مومباي أسعارًا إقليمية مؤثرة.",
    },
  },
  indonesia: {
    karat: "22K",
    note: {
      en: "Indonesian jewellery spans 22K to 24K, and cast bars from state miner Antam are the benchmark investment product.",
      ar: "تتراوح المجوهرات الإندونيسية بين عيار 22 و24، وتُعد سبائك أنتام المصبوبة المملوكة للدولة المنتج الاستثماري المرجعي.",
    },
  },
  japan: {
    karat: "24K",
    note: {
      en: "Japan prizes pure 24K 'junkin'; Tanaka Kikinzoku, established in 1885, is the dominant bullion retailer and publishes a closely watched daily price.",
      ar: "تُقدّر اليابان الذهب الخالص عيار 24 'جونكين'؛ وتُعد تاناكا كيكينزوكو، المؤسسة عام 1885، أكبر بائع تجزئة للسبائك وتنشر سعرًا يوميًا يُتابَع عن كثب.",
    },
  },
  lebanon: {
    karat: "21K",
    note: {
      en: "Lebanon's gold trade, long centred on Beirut's souks, runs largely in cash and US dollars amid currency instability, with 21K the jewellery standard.",
      ar: "تجارة الذهب في لبنان، المتمركزة منذ زمن في أسواق بيروت، تجري غالبًا بالنقد والدولار الأمريكي وسط عدم استقرار العملة، وعيار 21 هو معيار المجوهرات.",
    },
  },
  libya: {
    karat: "21K",
    note: {
      en: "Libyan gold demand centres on 21K jewellery, with the dinar's value shaped by oil revenues and parallel exchange rates.",
      ar: "يتركز الطلب على الذهب في ليبيا على مجوهرات عيار 21، وتتشكل قيمة الدينار من عائدات النفط وأسعار الصرف الموازية.",
    },
  },
  macau: {
    karat: "24K",
    peg: "hkd",
    note: {
      en: "Macau's gold retail mirrors neighbouring Hong Kong, favouring 999.9 pure gold, and the pataca is pegged to the Hong Kong dollar.",
      ar: "تجارة الذهب بالتجزئة في ماكاو تعكس هونغ كونغ المجاورة، مع تفضيل الذهب النقي 999.9، والباتاكا مربوطة بدولار هونغ كونغ.",
    },
  },
  malaysia: {
    karat: "22K",
    note: {
      en: "Malaysian jewellery favours 22K and 24K, and Bank Negara's Kijang Emas bullion coin anchors the investment market.",
      ar: "تفضل المجوهرات الماليزية عيارَي 22 و24، وترسي عملة كيجانغ إيماس السبائكية الصادرة عن بنك نيجارا سوق الاستثمار.",
    },
  },
  mexico: {
    karat: "14K",
    note: {
      en: "Banco de Mexico issues the Centenario and Libertad gold coins, while retail jewellery centres on 14K and 18K.",
      ar: "يصدر بنك المكسيك عملتي سنتيناريو وليبرتاد الذهبيتين، بينما تتركز مجوهرات التجزئة على عيارَي 14 و18.",
    },
  },
  morocco: {
    karat: "18K",
    note: {
      en: "Moroccan gold markets in Casablanca and Fez trade mainly 18K and 21K, and the dirham is managed against a euro-and-dollar currency basket.",
      ar: "تتداول أسواق الذهب المغربية في الدار البيضاء وفاس عياري 18 و21 بشكل رئيسي، والدرهم مُدار مقابل سلة عملات من اليورو والدولار.",
    },
  },
  myanmar: {
    karat: "24K",
    note: {
      en: "Myanmar trades gold at very high purity, traditionally by the kyattha weight (about 16.6 g), with Yangon's market setting daily reference rates.",
      ar: "تتداول ميانمار الذهب بنقاء عالٍ جدًا، تقليديًا بوحدة الكياتثا (نحو 16.6 جم)، ويحدد سوق يانغون الأسعار المرجعية اليومية.",
    },
  },
  "new-zealand": {
    karat: "18K",
    note: {
      en: "New Zealand retail jewellery commonly uses 9K and 18K, while investment bullion follows the Australian and global markets.",
      ar: "تستخدم مجوهرات التجزئة في نيوزيلندا عادةً عيارَي 9 و18، بينما تتبع سبائك الاستثمار الأسواق الأسترالية والعالمية.",
    },
  },
  nigeria: {
    karat: "18K",
    note: {
      en: "Nigeria is a fast-growing gold producer, and the naira's volatility makes gold a popular hedge, with retail jewellery around 18K.",
      ar: "نيجيريا منتج للذهب سريع النمو، ويجعل تقلب النايرا الذهب أداة تحوّط شائعة، مع مجوهرات تجزئة قرب عيار 18.",
    },
  },
  "north-macedonia": {
    karat: "14K",
    note: {
      en: "Retail gold in North Macedonia follows Balkan and Central European norms, with 14K jewellery the most common.",
      ar: "تتبع تجارة الذهب بالتجزئة في مقدونيا الشمالية معايير البلقان وأوروبا الوسطى، وعيار 14 هو الأكثر شيوعًا في المجوهرات.",
    },
  },
  norway: {
    karat: "18K",
    note: {
      en: "Norway's central bank sold its entire gold reserves in 2004, and domestic demand now centres on 18K jewellery.",
      ar: "باع البنك المركزي النرويجي كامل احتياطياته من الذهب عام 2004، ويتركز الطلب المحلي الآن على مجوهرات عيار 18.",
    },
  },
  pakistan: {
    karat: "22K",
    note: {
      en: "Pakistan trades gold by the tola (about 11.66 g) with 22K dominant, and the All Pakistan Sarafa Association publishes daily rates.",
      ar: "تتداول باكستان الذهب بالتولة (نحو 11.66 جم) مع هيمنة عيار 22، وتنشر جمعية صرافة عموم باكستان الأسعار اليومية.",
    },
  },
  philippines: {
    karat: "18K",
    note: {
      en: "Philippine jewellery favours 18K and 21K, and the Bangko Sentral buys domestically mined gold to build its reserves.",
      ar: "تفضل المجوهرات الفلبينية عيارَي 18 و21، ويشتري المصرف المركزي الفلبيني الذهب المُعدَّن محليًا لبناء احتياطياته.",
    },
  },
  russia: {
    karat: "14K",
    note: {
      en: "Russian hallmarking uses the metric 585 (14K) and 750 (18K) standards, and the central bank is among the world's largest official gold buyers.",
      ar: "يستخدم الدمغ الروسي المعيارين المتريين 585 (عيار 14) و750 (عيار 18)، والبنك المركزي من أكبر مشتري الذهب الرسميين في العالم.",
    },
  },
  serbia: {
    karat: "14K",
    note: {
      en: "Serbian retail gold follows Central European 14K norms, with investment bars priced against the dinar.",
      ar: "تتبع تجارة الذهب بالتجزئة في صربيا معايير عيار 14 الأوروبية الوسطى، وتُسعَّر سبائك الاستثمار مقابل الدينار.",
    },
  },
  singapore: {
    karat: "24K",
    note: {
      en: "Singapore exempts investment-grade precious metals from GST, making it a regional bullion hub where 999 fine gold dominates investment demand.",
      ar: "تعفي سنغافورة المعادن الثمينة ذات الجودة الاستثمارية من ضريبة السلع والخدمات، مما يجعلها مركزًا إقليميًا للسبائك حيث يهيمن الذهب النقي 999 على الطلب الاستثماري.",
    },
  },
  "south-africa": {
    karat: "22K",
    note: {
      en: "South Africa's Krugerrand, minted since 1967 at 22K, was the world's first modern bullion coin, reflecting the country's deep gold-mining heritage.",
      ar: "كانت عملة الكروغراند الجنوب أفريقية، المسكوكة منذ 1967 بعيار 22، أول عملة سبائك حديثة في العالم، وتعكس إرث تعدين الذهب العريق في البلاد.",
    },
  },
  "south-korea": {
    karat: "24K",
    note: {
      en: "Korean gold is traditionally weighed by the 'don' (3.75 g), and pure 24K is favoured for both gifts and investment.",
      ar: "يُوزن الذهب الكوري تقليديًا بوحدة 'الدون' (3.75 جم)، ويُفضَّل الذهب الخالص عيار 24 للهدايا والاستثمار معًا.",
    },
  },
  sweden: {
    karat: "18K",
    note: {
      en: "Swedish retail jewellery centres on 18K, and the freely floating krona means local gold prices move with the SEK/USD rate.",
      ar: "تتركز مجوهرات التجزئة السويدية على عيار 18، ويعني التعويم الحر للكرونة أن أسعار الذهب المحلية تتحرك مع سعر صرف الكرونة/الدولار.",
    },
  },
  switzerland: {
    karat: "24K",
    note: {
      en: "Switzerland refines an estimated two-thirds of the world's gold, and bars from Valcambi, PAMP and Argor-Heraeus are a global investment standard.",
      ar: "تكرر سويسرا ما يُقدَّر بثلثي ذهب العالم، وتُعد سبائك Valcambi وPAMP وArgor-Heraeus معيارًا استثماريًا عالميًا.",
    },
  },
  taiwan: {
    karat: "24K",
    note: {
      en: "Taiwan favours 99.99 pure gold, traditionally traded by the tael, and the Bank of Taiwan offers gold passbook accounts and bars.",
      ar: "تفضل تايوان الذهب النقي 99.99، الذي يُتداول تقليديًا بوحدة التَيل، ويوفر بنك تايوان حسابات دفتر الذهب والسبائك.",
    },
  },
  thailand: {
    karat: "23K",
    note: {
      en: "Thai 'baht gold' is sold by the baht weight (15.244 g), and Bangkok's Yaowarat Chinatown is the trading centre where the Gold Traders Association sets daily prices.",
      ar: "يُباع 'ذهب الباهت' التايلاندي بوحدة وزن الباهت (15.244 جم)، وحي ياوارات الصيني في بانكوك هو مركز التداول حيث تحدد جمعية تجار الذهب الأسعار اليومية.",
    },
  },
  turkey: {
    karat: "22K",
    note: {
      en: "Turkey is among the world's top-five gold consumers; 22K is the cultural standard, and the Istanbul Grand Bazaar alongside the Borsa Istanbul gold market anchors pricing amid high lira inflation.",
      ar: "تركيا من أكبر خمسة مستهلكين للذهب في العالم؛ عيار 22 هو المعيار الثقافي، ويرسي البازار الكبير في إسطنبول إلى جانب سوق الذهب في بورصة إسطنبول التسعير وسط تضخم مرتفع في الليرة.",
    },
  },
  vietnam: {
    karat: "24K",
    note: {
      en: "Vietnamese gold trades mainly as SJC-branded bars by the tael ('cay', about 37.5 g), and SJC gold often carries a notable premium over the world spot price.",
      ar: "يُتداول الذهب الفيتنامي بشكل رئيسي كسبائك بعلامة SJC بوحدة التَيل ('كاي'، نحو 37.5 جم)، وغالبًا ما يحمل ذهب SJC علاوة ملحوظة فوق السعر العالمي الفوري.",
    },
  },
};

/**
 * Compose a unique ~3-sentence market note from COUNTRY_FACTS. Combines the
 * dominant karat, the currency-peg regime and a distinctive per-country fact
 * so each programmatic country×karat page carries non-duplicate copy.
 * Returns null when no facts entry exists for the slug.
 */
export function composeCountryNote(slug: string, locale: string): string | null {
  const country = COUNTRY_BY_SLUG[slug];
  const facts = COUNTRY_FACTS[slug];
  if (!country || !facts) return null;

  const ar = locale === "ar";
  const name = ar ? country.name_ar : country.name_en;
  const cur = country.currency;
  const purity = KARAT_PURITY[facts.karat];
  const k = facts.karat.replace("K", "");

  const karatSentence = ar
    ? `يتركز سوق الذهب بالتجزئة في ${name} على عيار ${k} (نقاء ${purity})، ويُسعَّر محليًا لكل جرام بعملة ${cur}.`
    : `${name}'s retail gold market centres on ${facts.karat} gold (${purity} pure), quoted locally per gram in ${cur}.`;

  let pegSentence: string;
  if (facts.peg === "usd") {
    pegSentence = ar
      ? `ولأن ${cur} مربوط بالدولار الأمريكي، تتبع تلك الأسعار السعر الفوري العالمي بدقة كبيرة.`
      : `Because the ${cur} is pegged to the US dollar, those prices track the international spot rate almost exactly.`;
  } else if (facts.peg === "eur") {
    pegSentence = ar
      ? `${cur} مربوط باليورو، لذا تتبع الأسعار السوق المقوّمة باليورو.`
      : `The ${cur} is pegged to the euro, so prices follow the euro-denominated market.`;
  } else if (facts.peg === "hkd") {
    pegSentence = ar
      ? `${cur} مربوط بدولار هونغ كونغ، مما يبقي الأسعار قريبة من السعر العالمي الفوري.`
      : `The ${cur} is pegged to the Hong Kong dollar, which keeps prices close to global spot.`;
  } else {
    pegSentence = ar
      ? `وبما أن ${cur} عملة حرة التعويم، تعكس الأسعار أيضًا تحركات صرف ${cur}/الدولار اليومية.`
      : `As a free-floating currency, the ${cur} means prices also reflect daily ${cur}/USD exchange-rate moves.`;
  }

  const note = ar ? facts.note.ar : facts.note.en;
  return `${karatSentence} ${pegSentence} ${note}`;
}

/* ----------------------------- Region grouping ---------------------------- *
 * Geographic / economic clusters used by the country hub page and RelatedLinks
 * cross-linking. Turns the footer's flat 47-country list into a structured
 * internal-link graph so every country×karat page gains contextual inbound
 * links — the signal that makes programmatic pages index and stay indexed.
 * -------------------------------------------------------------------------- */

export type Region =
  | "gcc"
  | "levant"
  | "north-africa"
  | "africa"
  | "asia"
  | "europe"
  | "americas"
  | "oceania";

export type RegionMeta = { id: Region; en: string; ar: string };

/** Hub display order — MENA-first to match the site's primary audience. */
export const REGIONS: RegionMeta[] = [
  // Not "GCC": Yemen is on the Arabian Peninsula but not in the bloc, and a
  // label that says GCC while listing Yemen is simply wrong.
  { id: "gcc", en: "Gulf & Arabian Peninsula", ar: "الخليج وشبه الجزيرة العربية" },
  { id: "levant", en: "Levant", ar: "بلاد الشام" },
  { id: "north-africa", en: "North Africa", ar: "شمال أفريقيا" },
  { id: "africa", en: "Sub-Saharan Africa", ar: "أفريقيا جنوب الصحراء" },
  { id: "asia", en: "Asia", ar: "آسيا" },
  { id: "europe", en: "Europe", ar: "أوروبا" },
  { id: "americas", en: "Americas", ar: "الأمريكتان" },
  { id: "oceania", en: "Oceania", ar: "أوقيانوسيا" },
];

/** Country slug → region. Every COUNTRIES entry is mapped exactly once. */
export const COUNTRY_REGION: Record<string, Region> = {
  "saudi-arabia": "gcc",
  uae: "gcc",
  qatar: "gcc",
  kuwait: "gcc",
  bahrain: "gcc",
  // Yemen sits in the Gulf bucket for the Arabian Peninsula, not for GCC
  // membership — hence the region's wider label. Iraq groups with the Levant:
  // it borders Syria and Jordan and its trade follows them, not the Gulf.
  yemen: "gcc",
  iraq: "levant",
  jordan: "levant",
  lebanon: "levant",
  syria: "levant",
  palestine: "levant",
  egypt: "north-africa",
  libya: "north-africa",
  morocco: "north-africa",
  algeria: "north-africa",
  tunisia: "north-africa",
  nigeria: "africa",
  "south-africa": "africa",
  china: "asia",
  "hong-kong": "asia",
  macau: "asia",
  taiwan: "asia",
  japan: "asia",
  "south-korea": "asia",
  india: "asia",
  pakistan: "asia",
  indonesia: "asia",
  malaysia: "asia",
  singapore: "asia",
  thailand: "asia",
  vietnam: "asia",
  philippines: "asia",
  myanmar: "asia",
  europe: "europe",
  uk: "europe",
  croatia: "europe",
  denmark: "europe",
  hungary: "europe",
  "north-macedonia": "europe",
  norway: "europe",
  russia: "europe",
  serbia: "europe",
  sweden: "europe",
  switzerland: "europe",
  turkey: "europe",
  usa: "americas",
  canada: "americas",
  mexico: "americas",
  brazil: "americas",
  argentina: "americas",
  colombia: "americas",
  australia: "oceania",
  "new-zealand": "oceania",
};

/** All countries in a region, in COUNTRIES declaration order (deterministic). */
export function countriesInRegion(region: Region): Country[] {
  return COUNTRIES.filter((c) => COUNTRY_REGION[c.slug] === region);
}

/** Region for a slug, or null if unmapped. */
export function regionOf(slug: string): Region | null {
  return COUNTRY_REGION[slug] ?? null;
}

/** Adjacency used to top up RelatedLinks when a region is too small (Levant
 *  and Oceania have only 2 members) so every page still gets a full set. */
const REGION_NEIGHBOURS: Record<Region, Region[]> = {
  gcc: ["levant", "north-africa", "asia"],
  levant: ["gcc", "north-africa"],
  "north-africa": ["levant", "gcc", "africa"],
  africa: ["north-africa", "europe"],
  asia: ["gcc", "oceania", "europe"],
  europe: ["levant", "asia", "africa"],
  americas: ["europe", "asia"],
  oceania: ["asia"],
};

/**
 * Up to `count` sibling countries for cross-linking — same region first, then
 * topped up from neighbouring regions. Excludes the source country. Output is
 * deterministic (declaration order) so the static build stays stable.
 */
export function relatedCountries(slug: string, count = 4): Country[] {
  const region = COUNTRY_REGION[slug];
  if (!region) return [];
  const seen = new Set<string>([slug]);
  const out: Country[] = [];
  const take = (list: Country[]) => {
    for (const c of list) {
      if (out.length >= count) break;
      if (seen.has(c.slug)) continue;
      seen.add(c.slug);
      out.push(c);
    }
  };
  take(countriesInRegion(region));
  for (const nb of REGION_NEIGHBOURS[region]) {
    if (out.length >= count) break;
    take(countriesInRegion(nb));
  }
  return out.slice(0, count);
}
