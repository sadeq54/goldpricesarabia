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
    en: "Iraqi jewellery is sold mostly at 21K, as in the Gulf, and gold is a standard part of the mahr. In October 2026 Iraq devalued the dinar to an official 1,500 per dollar (1,520 for end users at banks), but exchange shops have traded the dollar above that, so a gram priced in dinars depends on the rate a shop uses; this page converts at the official end-user rate. Baghdad's wholesale gold trade is concentrated on Nahr Street, and there is no VAT on jewellery.",
    ar: "تُباع المجوهرات في العراق غالبًا بعيار 21 كما في الخليج، والذهب جزء أساسي من المهر. في أكتوبر 2026 خفّض العراق قيمة الدينار إلى سعر رسمي قدره 1,500 دينار للدولار (1,520 للمستخدم النهائي في المصارف)، لكن الدولار تداول في مكاتب الصرافة فوق ذلك، لذا يتوقف سعر الجرام بالدينار على السعر الذي يعتمده المحل؛ وتحوّل هذه الصفحة بالسعر الرسمي للمستخدم النهائي. وتتركز تجارة الذهب بالجملة في بغداد في شارع النهر، ولا توجد ضريبة قيمة مضافة على المجوهرات.",
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
 * Checked against sources on 2026-10-19: karats without a source were removed,
 * wrong facts rewritten, pegs corrected (Libya SDR, North Macedonia EUR).
 */
export type CountryFacts = {
  /** Most-traded retail gold purity — only where a source confirms it
   *  (2026-10-19 check, scratchpad notes); omitted otherwise. */
  karat?: keyof typeof KARAT_PURITY;
  /** Currency-peg regime — drives the peg sentence. Omit when not pegged. */
  peg?: "usd" | "eur" | "hkd" | "sdr";
  /** One distinctive, sourced market fact — locale-pair translated. */
  note?: { en: string; ar: string };
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
      en: "Baghdad's Nahr Street is the centre of the country's wholesale gold trade.",
      ar: "يُعدّ شارع النهر في بغداد مركز تجارة الذهب بالجملة في البلاد.",
    },
  },
  yemen: {
    karat: "21K",
    note: {
      en: "Since Sana'a banned the newer banknotes in December 2019, the rial has traded at two very different rates.",
      ar: "منذ أن حظرت صنعاء الأوراق النقدية الأحدث في ديسمبر 2019، يُتداول الريال بسعرين مختلفين جدًا.",
    },
  },
  palestine: {
    karat: "21K",
    note: {
      en: "Jewellers quote mainly in shekels, and most of the gold sold is made locally.",
      ar: "يسعّر الصاغة أساسًا بالشيكل، ومعظم الذهب المبيع مصنوع محليًا.",
    },
  },
  algeria: {
    karat: "18K",
    note: {
      en: "Currency controls sustain a parallel dinar rate at Algiers' Square Port Saïd, well below the official one.",
      ar: "تُبقي الرقابة على الصرف سعرًا موازيًا للدينار في ساحة بورسعيد بالعاصمة، أضعف بكثير من السعر الرسمي.",
    },
  },
  tunisia: {
    karat: "18K",
    note: {
      en: "18K is the main jewellery standard, and the dinar may not legally be taken out of the country.",
      ar: "عيار 18 هو المعيار الرئيسي للمجوهرات، ولا يجوز قانونًا إخراج الدينار من البلاد.",
    },
  },
  europe: {
    note: {
      en: "Gold standards vary across the eurozone: 14K (585) is usual in Germany and Austria and 18K (750) in Italy. Wholesale prices reference the LBMA Gold Price, set twice a day in London.",
      ar: "تختلف معايير الذهب داخل منطقة اليورو: فعيار 14 (585) هو المعتاد في ألمانيا والنمسا، وعيار 18 (750) في إيطاليا. وتستند أسعار الجملة إلى سعر LBMA للذهب الذي يُحدَّد مرتين يوميًا في لندن.",
    },
  },
  argentina: {
    karat: "18K",
    note: {
      en: "Argentines have long saved in US dollars rather than gold, though gold buying has grown, and local buy-sell spreads on gold can be wide.",
      ar: "اعتاد الأرجنتينيون طويلًا الادخار بالدولار الأمريكي لا بالذهب، وإن ازداد شراء الذهب، وقد يكون الفرق بين سعرَي البيع والشراء محليًا واسعًا.",
    },
  },
  australia: {
    note: {
      en: "The government-owned Perth Mint is one of the world's largest gold refiners and the source of the Australian Kangaroo bullion coin.",
      ar: "دار سك بيرث المملوكة للحكومة من أكبر مصافي الذهب في العالم وهي مصدر عملة الكنغر الأسترالية السبائكية.",
    },
  },
  brazil: {
    karat: "18K",
    note: {
      en: "18K (750) is the usual jewellery standard in Brazil, and the B3 exchange in São Paulo stopped trading gold contracts in March 2024.",
      ar: "عيار 18 (750) هو المعيار المعتاد للمجوهرات في البرازيل، وقد توقفت بورصة B3 في ساو باولو عن تداول عقود الذهب في مارس 2024.",
    },
  },
  canada: {
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
    note: {
      en: "Colombia is one of Latin America's larger gold producers and exported about 67 tonnes in 2024.",
      ar: "كولومبيا من كبار منتجي الذهب في أمريكا اللاتينية، وقد صدّرت نحو 67 طنًا عام 2024.",
    },
  },
  croatia: {
    note: {
      en: "Croatia adopted the euro in 2023, so gold is now priced in EUR and tracks the wider eurozone market.",
      ar: "اعتمدت كرواتيا اليورو في 2023، لذا يُسعَّر الذهب الآن باليورو ويتتبع سوق منطقة اليورو الأوسع.",
    },
  },
  denmark: {
    peg: "eur",
    note: {
      en: "Danmarks Nationalbank keeps the krone within a narrow band around the euro under the EU's ERM II exchange-rate mechanism.",
      ar: "يُبقي البنك المركزي الدنماركي الكرونة ضمن نطاق ضيق حول اليورو في إطار آلية سعر الصرف الأوروبية ERM II.",
    },
  },
  "hong-kong": {
    peg: "usd",
    note: {
      en: "The Chinese Gold & Silver Exchange Society, founded in 1910, trades its traditional 99 tael gold (990 fine) alongside 999.9 kilobars, at the heart of one of Asia's oldest bullion markets.",
      ar: "تتداول جمعية الصين لتبادل الذهب والفضة، التي تأسست عام 1910، ذهب التايل التقليدي بنقاء 990 إلى جانب سبائك الكيلو بنقاء 999.9، في قلب أحد أقدم أسواق السبائك في آسيا.",
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
    note: {
      en: "Cast bars from the state miner Antam are the investment benchmark, while much jewellery is sold in lower-purity alloys known as 'emas muda'.",
      ar: "تُعدّ سبائك شركة التعدين الحكومية أنتام المرجع الاستثماري، بينما يُباع كثير من المجوهرات بسبائك أقل نقاءً تُعرف باسم «إيماس مودا».",
    },
  },
  japan: {
    note: {
      en: "Tanaka Kikinzoku, founded in 1885 and Japan's largest precious-metals refiner, publishes the country's most-watched daily gold price.",
      ar: "تنشر شركة تاناكا كيكينزوكو، التي تأسست عام 1885 وهي أكبر مصفاة للمعادن الثمينة في اليابان، أكثر أسعار الذهب اليومية متابعةً في البلاد.",
    },
  },
  lebanon: {
    note: {
      en: "After the 2019 financial crisis many Lebanese turned to gold as savings, and the lira has held at about 89,500 per dollar since 2024.",
      ar: "بعد الأزمة المالية عام 2019 لجأ كثير من اللبنانيين إلى الذهب للادخار، واستقرت الليرة عند نحو 89,500 للدولار منذ 2024.",
    },
  },
  libya: {
    peg: "sdr",
    note: {
      en: "The Central Bank of Libya devalued the dinar in January 2026, fixing it at 0.1150 SDR.",
      ar: "خفّض مصرف ليبيا المركزي قيمة الدينار في يناير 2026 وثبّته عند 0.1150 من وحدة حقوق السحب الخاصة.",
    },
  },
  macau: {
    peg: "hkd",
    note: {
      en: "Macau's gold retail mirrors neighbouring Hong Kong, and the pataca is pegged to the Hong Kong dollar.",
      ar: "تحاكي تجارة الذهب بالتجزئة في ماكاو جارتها هونغ كونغ، والباتاكا مربوطة بدولار هونغ كونغ.",
    },
  },
  malaysia: {
    karat: "22K",
    note: {
      en: "Malaysian jewellery favours 22K and 24K, and Bank Negara Malaysia issues the Kijang Emas, the country's official gold bullion coin.",
      ar: "تفضّل المجوهرات في ماليزيا عيارَي 22 و24، ويُصدر البنك المركزي الماليزي عملة كيجانغ إيماس، وهي عملة السبائك الذهبية الرسمية في البلاد.",
    },
  },
  mexico: {
    karat: "14K",
    note: {
      en: "Banco de México issues the Centenario and Libertad gold coins, and retail jewellery centres on 14K.",
      ar: "يُصدر بنك المكسيك عملتَي سنتيناريو وليبرتاد الذهبيتين، وتتركز المجوهرات بالتجزئة على عيار 14.",
    },
  },
  morocco: {
    karat: "18K",
    note: {
      en: "Moroccan jewellers sell 18K, the only gold standard authorised for sale, and the dirham is managed against a euro-and-dollar currency basket.",
      ar: "يبيع الصاغة في المغرب عيار 18، وهو المعيار الوحيد المسموح ببيعه، ويُدار الدرهم مقابل سلة من اليورو والدولار.",
    },
  },
  myanmar: {
    karat: "24K",
    note: {
      en: "Gold is traditionally weighed by the kyattha (about 16.33 g). This page converts at the Central Bank of Myanmar's official rate; the market rate has been much weaker, so local prices run higher.",
      ar: "يُوزن الذهب تقليديًا بوحدة الكياتا (نحو 16.33 جرامًا). وتحوّل هذه الصفحة بالسعر الرسمي للبنك المركزي في ميانمار، أما سعر السوق فكان أضعف بكثير، لذا تكون الأسعار المحلية أعلى.",
    },
  },
  "new-zealand": {
  },
  nigeria: {
    note: {
      en: "Nigeria's gold output is small and largely artisanal; Segilola is its only industrial-scale gold mine.",
      ar: "إنتاج نيجيريا من الذهب صغير ويغلب عليه التعدين الحرفي، ومنجم سيغيلولا هو منجم الذهب الوحيد على نطاق صناعي فيها.",
    },
  },
  "north-macedonia": {
    peg: "eur",
    note: {
      en: "The National Bank of the Republic of North Macedonia has kept the denar stable against the euro for decades as its main monetary anchor.",
      ar: "حافظ البنك الوطني لجمهورية مقدونيا الشمالية على استقرار الدينار مقابل اليورو منذ عقود بوصفه ركيزته النقدية الأساسية.",
    },
  },
  norway: {
    note: {
      en: "Norges Bank sold its 33.5 tonnes of gold bars in 2004 and kept only about 3.5 tonnes of historic coins.",
      ar: "باع البنك المركزي النرويجي سبائكه الذهبية البالغة 33.5 طنًا عام 2004، واحتفظ بنحو 3.5 أطنان فقط من العملات التاريخية.",
    },
  },
  pakistan: {
    karat: "22K",
    note: {
      en: "Pakistan trades gold by the tola (about 11.66 g) with 22K dominant, and the All Pakistan Gems and Jewellers Sarafa Association publishes daily rates.",
      ar: "تتداول باكستان الذهب بالتولة (نحو 11.66 جرامًا) ويهيمن عيار 22، وتنشر جمعية صرافة الأحجار الكريمة والمجوهرات لعموم باكستان الأسعار يوميًا.",
    },
  },
  philippines: {
    karat: "18K",
    note: {
      en: "Philippine jewellery favours 18K, with 22K also common, and the Bangko Sentral buys domestically mined gold to build its reserves.",
      ar: "تفضّل المجوهرات في الفلبين عيار 18، مع شيوع عيار 22 أيضًا، ويشتري البنك المركزي الفلبيني الذهب المستخرج محليًا لبناء احتياطياته.",
    },
  },
  russia: {
    karat: "14K",
    note: {
      en: "Russian hallmarking uses the metric 585 (14K) and 750 (18K) standards, and the Bank of Russia holds about 2,300 tonnes of gold, one of the largest official reserves.",
      ar: "تعتمد الدمغة الروسية المعيارين المتريين 585 (عيار 14) و750 (عيار 18)، ويحتفظ البنك المركزي الروسي بنحو 2,300 طن من الذهب، وهو من أكبر الاحتياطيات الرسمية.",
    },
  },
  serbia: {
  },
  singapore: {
    note: {
      en: "Singapore has exempted investment-grade gold, silver and platinum from GST since 2012, which helped make it a regional bullion hub.",
      ar: "أعفت سنغافورة الذهب والفضة والبلاتين الاستثمارية من ضريبة السلع والخدمات منذ 2012، ما ساعد على جعلها مركزًا إقليميًا للسبائك.",
    },
  },
  "south-africa": {
    note: {
      en: "South Africa's 22-karat Krugerrand, minted since 1967, pioneered the modern bullion-coin market and reflects the country's long gold-mining history.",
      ar: "عملة كروغيراند الجنوب أفريقية من عيار 22، المسكوكة منذ 1967، كانت رائدة سوق عملات السبائك الحديثة، وتعكس تاريخ البلاد الطويل في تعدين الذهب.",
    },
  },
  "south-korea": {
    note: {
      en: "Korean gold is traditionally weighed by the 'don' (3.75 g).",
      ar: "يُوزن الذهب في كوريا تقليديًا بوحدة «دون» (3.75 جرامات).",
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
    note: {
      en: "Switzerland is home to several of the world's largest gold refiners, including Valcambi, PAMP and Argor-Heraeus, whose bars are a global investment standard.",
      ar: "تضم سويسرا عددًا من أكبر مصافي الذهب في العالم، منها فالكامبي وبامب وأرغور-هيرايوس، وتُعدّ سبائكها معيارًا استثماريًا عالميًا.",
    },
  },
  taiwan: {
    note: {
      en: "Gold in Taiwan is traditionally traded by the tael, and the Bank of Taiwan offers gold passbook accounts and bars.",
      ar: "يُتداول الذهب في تايوان تقليديًا بالتايل، ويقدّم بنك تايوان حسابات ادخار بالذهب وسبائك.",
    },
  },
  thailand: {
    karat: "23K",
    note: {
      en: "Thai 'baht gold' (96.5%) is sold by the baht weight, 15.244 g for bars and 15.16 g for jewellery, and Bangkok's Yaowarat Chinatown is the trading centre where the Gold Traders Association sets daily prices.",
      ar: "يُباع «ذهب البات» التايلندي (نقاء 96.5%) بوزن البات، أي 15.244 جرامًا للسبائك و15.16 جرامًا للمجوهرات، وحي يواوارات الصيني في بانكوك هو مركز التداول حيث تحدد جمعية تجار الذهب الأسعار اليومية.",
    },
  },
  turkey: {
    karat: "22K",
    note: {
      en: "The World Gold Council ranked Turkey the world's fifth-largest gold market in 2024; 22K is the cultural standard, and Borsa Istanbul runs a precious-metals market that sets reference prices.",
      ar: "صنّف مجلس الذهب العالمي تركيا خامس أكبر سوق للذهب في العالم عام 2024؛ وعيار 22 هو المعيار الثقافي، وتدير بورصة إسطنبول سوقًا للمعادن الثمينة تحدد الأسعار المرجعية.",
    },
  },
  vietnam: {
    karat: "24K",
    note: {
      en: "Vietnamese gold trades as SJC-branded bars and 99.99 plain rings, priced per tael ('cây', about 37.5 g), and SJC bars often carry a notable premium over the world price.",
      ar: "يُتداول الذهب في فيتنام على شكل سبائك تحمل علامة SJC وخواتم سادة بنقاء 99.99، ويُسعَّر بالتايل («كاي»، نحو 37.5 جرامًا)، وكثيرًا ما تحمل سبائك SJC علاوة ملحوظة فوق السعر العالمي.",
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
  // Nothing sourced to say beyond the exchange rate: omit the note.
  if (!country || !facts || (!facts.karat && !facts.note)) return null;

  const ar = locale === "ar";
  const name = ar ? country.name_ar : country.name_en;
  const cur = country.currency;

  let karatSentence: string | null = null;
  if (facts.karat) {
    const purity = KARAT_PURITY[facts.karat];
    const k = facts.karat.replace("K", "");
    karatSentence = ar
      ? `يتركز سوق الذهب بالتجزئة في ${name} على عيار ${k} (نقاء ${purity})، ويُسعَّر محليًا لكل جرام بعملة ${cur}.`
      : `${name}'s retail gold market centres on ${facts.karat} gold (${purity} pure), quoted locally per gram in ${cur}.`;
  }

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
  } else if (facts.peg === "sdr") {
    pegSentence = ar
      ? `${cur} مربوط بوحدة حقوق السحب الخاصة لصندوق النقد الدولي، وهي سلة من العملات الرئيسية، لذا لا يتغير سعره مقابل الدولار إلا بتغير تلك السلة.`
      : `The ${cur} is pegged to the IMF's special drawing right, a basket of major currencies, so its dollar rate moves only as that basket does.`;
  } else {
    // Not "free-floating": several of these currencies are managed (CNY, VND, MAD...).
    pegSentence = ar
      ? `وتُحوَّل الأسعار هنا من السعر بالدولار بسعر صرف ${cur}/الدولار لليوم، لذا تتحرك مع سعر الصرف كما تتحرك مع الذهب.`
      : `Prices here are converted from the dollar price at the day's ${cur}/USD rate, so they move with that exchange rate as well as with gold.`;
  }

  const note = facts.note ? (ar ? facts.note.ar : facts.note.en) : null;
  return [karatSentence, pegSentence, note].filter(Boolean).join(" ");
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
