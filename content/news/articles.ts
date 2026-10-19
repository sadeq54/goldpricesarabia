/**
 * Editorial news articles authored by the Gold Prices Arabia team.
 *
 * Add new articles as a new entry in `ARTICLES` below. Each article has both
 * English and Arabic versions of title, description, and body (markdown).
 *
 * Conventions:
 *  - `slug`: kebab-case, locale-agnostic, unique. Used as URL: /news/{slug}.
 *  - `publishedAt` / `updatedAt`: ISO 8601 timestamps.
 *  - `body_en` / `body_ar`: GitHub-flavoured markdown. Rendered via react-markdown.
 *  - `tags`: SEO + internal filtering. Re-use existing tags where possible.
 *  - `hero`: optional path under /public for the article hero image.
 *  - All articles authored by Sadeq Sayed Ahmad unless overridden.
 */

import { GUIDE_ARTICLES } from "@/content/news/guides";
import { SELLING_ARTICLES } from "@/content/news/guides-selling";
import { SAVING_ARTICLES } from "@/content/news/guides-saving";
import { MARKET_ARTICLES } from "@/content/news/guides-market";
import { REGIONAL_ARTICLES } from "@/content/news/guides-regional";
import { CARE_ARTICLES } from "@/content/news/guides-care";
import { RISK_ARTICLES } from "@/content/news/guides-risk";
import { CONTEXT_ARTICLES } from "@/content/news/guides-context";

export type Article = {
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
  body_en: string;
  body_ar: string;
  tags: string[];
  hero?: string;
  author?: {
    name: string;
    url: string;
    image: string;
  };
};

const DEFAULT_AUTHOR = {
  name: "Sadeq Sayed Ahmad",
  url: "/about/sadeq",
  image: "/author/sadeq.jpeg",
};

const NEWS_ARTICLES: Article[] = [
  {
    slug: "saudi-gold-21k-may-2026-overview",
    publishedAt: "2026-05-13T08:00:00Z",
    title_en: "Saudi Gold 21K — Why MENA Jewellery Buyers Still Anchor on This Karat",
    title_ar: "الذهب السعودي عيار 21 — معيار مجوهرات الشرق الأوسط",
    description_en:
      "21K gold is one of the most widely sold jewellery karats in Saudi Arabia, the UAE, Egypt and Jordan. We break down why the 87.5% purity standard persists, how spot price translates to per-gram retail, and what to verify before buying.",
    description_ar:
      "يُعدّ الذهب عيار 21 من أكثر عيارات المجوهرات مبيعاً في السعودية والإمارات ومصر والأردن. نوضّح لماذا يستمر معيار النقاء 87.5%، وكيف يترجم سعر السوق الفوري إلى سعر الجرام في التجزئة، وما الذي يجب التحقق منه قبل الشراء.",
    body_en: `Across the Gulf and the wider Arab world, 21-karat gold sits at the centre of the jewellery economy. While 24K dominates investment-grade bullion, **21K is the workhorse for wedding sets, daily-wear chains, and gift gold**. Understanding why helps explain the entire MENA pricing structure.

## The 87.5% purity standard

21K means 21 parts gold out of 24 — **87.5% pure**. The remaining 12.5% is alloy (typically copper and silver), which gives the metal enough hardness to hold a clasp, a stone setting, or daily wear. Pure 24K is too soft for most jewellery applications; it dents, scratches, and bends under normal use.

The popularity of 21K is usually explained by the way it balances three competing demands:

1. **Value retention** — close enough to pure that resale weight still translates into real liquidity at any souk
2. **Durability** — hard enough to survive everyday wear
3. **Workability** — soft enough that goldsmiths can shape it by hand

Much fine jewellery in Europe is made in 18K (75% pure) or in lower, harder karats such as 14K and 9K. MENA buyers have traditionally favoured higher karats, which hold more gold per gram.

## How spot price translates to 21K per-gram retail

When you see "spot gold" quoted on this site or anywhere else, that price is for **pure 24K gold per troy ounce in USD**. To convert to a 21K per-gram retail estimate:

\`\`\`
21K price per gram (SAR) = (spot USD / 31.1035) × 0.875 × USD-to-SAR FX
\`\`\`

An illustrative worked example with round numbers (not today's price — see the live page):
- Spot gold: $2,400 / oz
- $/g pure: $2,400 / 31.1035 = $77.16
- $/g 21K: $77.16 × 0.875 = $67.52
- SAR/g 21K (FX 3.75): $67.52 × 3.75 = **SAR 253.20 / gram**

This is the **spot equivalent only**. Saudi jewellers add a making charge on top to cover workmanship, design and the shop's margin, and 15% VAT applies to the full price of jewellery. The premium varies by piece complexity, dealer reputation, and location (Riyadh vs Jeddah vs Khobar).

## What to verify before buying

1. **Hallmark stamp** — The piece should carry a purity stamp such as 21K or 875 (purity in parts per thousand). No stamp = walk away.
2. **Daily reference price** — many shops display the day's per-gram rate. Cross-check against [our Saudi 21K page](/saudi-arabia/gold-price/21k) before negotiating.
3. **Weight on a calibrated scale** — for purchases over a few grams, ask to see the scale read zero before the piece is placed on it.
4. **Receipt with weight + purity + per-gram price separately** — protects you on resale or exchange.

## When the premium is worth it (and when it isn't)

A handmade design from a named goldsmith carries genuine craftsmanship value above spot. A mass-produced chain doesn't. Treat the spot equivalent on our price pages as your **floor price** — anything significantly above it should be justified by complexity, brand, or convenience, not assumed.

## Bottom line

21K remains a core karat in MENA jewellery. It's the resale-friendly standard that survives weddings, gifts, and the secondary market. Knowing how to derive the spot-equivalent per-gram price in your local currency turns you from a price-taker into an informed buyer. Bookmark the [21K live page](/gold-price/21k) and check it before walking into the souk.`,
    body_ar: `في الخليج والعالم العربي الأوسع، يتصدّر الذهب عيار 21 قيراط اقتصاد المجوهرات. فبينما يهيمن عيار 24 على السبائك الاستثمارية، **21 قيراط هو العيار الأساسي لأطقم الزفاف وسلاسل الاستخدام اليومي وذهب الهدايا**. فهم السبب يفسّر هيكل التسعير في الشرق الأوسط بأكمله.

## معيار النقاء 87.5%

21 قيراط يعني 21 جزء ذهب من أصل 24 — أي **نقاء 87.5%**. الـ 12.5% المتبقية هي سبيكة (نحاس وفضّة عادةً) تمنح المعدن صلابة كافية لتثبيت إغلاق أو ترصيع حجر أو تحمّل الاستخدام اليومي. الذهب الخالص عيار 24 ناعم جداً لمعظم تطبيقات المجوهرات؛ يتشوّه ويتخدش وينحني تحت الاستخدام العادي.

يُفسَّر انتشار عيار 21 عادةً بأنه يوازن بين ثلاثة متطلبات متنافسة:

1. **الحفاظ على القيمة** — قريب بما يكفي من النقاء بحيث يترجم وزن إعادة البيع إلى سيولة حقيقية في أي سوق
2. **المتانة** — صلب بما يكفي ليتحمّل الاستخدام اليومي
3. **القابلية للتشكيل** — لين بما يكفي ليتمكّن الصاغة من تشكيله يدوياً

تُصنع كثير من المجوهرات في أوروبا من عيار 18 (نقاء 75%) أو من عيارات أدنى وأكثر صلابة مثل 14 و9. أما مشترو الشرق الأوسط فقد مالوا تقليدياً إلى العيارات الأعلى التي تحوي ذهباً أكثر في كل جرام.

## كيف يترجم السعر الفوري إلى سعر تجزئة للجرام 21

عندما ترى "السعر الفوري للذهب" مُسعَّراً على هذا الموقع أو أي مكان آخر، فهذا السعر هو **للذهب الخالص عيار 24 لكل أونصة ترويسية بالدولار الأمريكي**. لتحويله إلى تقدير سعر تجزئة للجرام عيار 21:

\`\`\`
سعر الجرام عيار 21 (ريال) = (السعر الفوري بالدولار / 31.1035) × 0.875 × سعر صرف الدولار للريال
\`\`\`

مثال توضيحي بأرقام مدوّرة (ليس سعر اليوم؛ راجع الصفحة الحية):
- السعر الفوري: 2400 دولار / أونصة
- دولار/جرام نقي: 2400 / 31.1035 = 77.16 دولار
- دولار/جرام 21: 77.16 × 0.875 = 67.52 دولار
- ريال/جرام 21 (سعر صرف 3.75): 67.52 × 3.75 = **253.20 ريال / جرام**

هذا **السعر الفوري المكافئ فقط**. يضيف الصاغة السعوديون فوقه مصنعية تغطي العمل والتصميم وهامش المحل، وتُفرض ضريبة القيمة المضافة بنسبة 15% على السعر الكامل للمجوهرات. يختلف الهامش حسب تعقيد القطعة وسمعة التاجر والموقع (الرياض مقابل جدة مقابل الخبر).

## ما الذي يجب التحقق منه قبل الشراء

1. **ختم الدمغة** — يجب أن تحمل القطعة ختم عيار مثل 21K أو 875 (النقاء بالألف). لا دمغة = ابتعد.
2. **سعر اليوم المرجعي** — كثير من المحلات تعرض سعر الجرام لليوم. قارن مع [صفحة الـ 21 السعودية لدينا](/saudi-arabia/gold-price/21k) قبل التفاوض.
3. **الوزن على ميزان معاير** — للمشتريات فوق بضع جرامات، اطلب أن ترى الميزان يقرأ صفراً قبل وضع القطعة عليه.
4. **فاتورة بالوزن والنقاء وسعر الجرام بشكل منفصل** — تحميك عند إعادة البيع أو الاستبدال.

## متى يستحق الهامش (ومتى لا)

تصميم مصنوع يدوياً من صائغ معروف يحمل قيمة حرفية حقيقية فوق السعر الفوري. سلسلة منتجة بكميات كبيرة لا تحمل ذلك. تعامل مع السعر الفوري المكافئ في صفحات الأسعار لدينا على أنه **سعر الحد الأدنى** — أي شيء أعلى منه بفارق ملحوظ يجب أن يبرَّر بالتعقيد أو العلامة التجارية أو الراحة، لا بالافتراض.

## الخلاصة

يبقى عيار 21 قيراط عياراً أساسياً في مجوهرات الشرق الأوسط. إنه المعيار الصديق لإعادة البيع الذي يصمد في الأعراس والهدايا والسوق الثانوية. معرفة كيفية اشتقاق السعر الفوري المكافئ للجرام بعملتك المحلية يحوّلك من متلقّي سعر إلى مشترٍ مطّلع. احفظ [صفحة الـ 21 الحية](/gold-price/21k) وراجعها قبل دخول السوق.`,
    tags: ["21k", "saudi-arabia", "jewellery", "buying-guide"],
    author: DEFAULT_AUTHOR,
  },
  {
    slug: "spot-gold-vs-retail-jeweller-spread",
    publishedAt: "2026-05-13T10:00:00Z",
    title_en: "Spot Gold vs. Your Jeweller's Price — Where the Spread Goes",
    title_ar: "السعر الفوري للذهب مقابل سعر الصائغ",
    description_en:
      "The gap between the live XAU/USD spot price and what you pay at the counter varies by shop, country and design. We break down where it goes: making charges, the retailer's margin and VAT.",
    description_ar:
      "الفجوة بين السعر الفوري الحي لـ XAU/USD وما تدفعه عند البائع تختلف حسب المحل والدولة والتصميم. نحلّل أين تذهب: المصنعية، وهامش بائع التجزئة، وضريبة القيمة المضافة.",
    body_en: `Visit any Arab gold souk and you'll notice the per-gram price displayed at the shop differs from the "live spot" rate quoted on financial sites. The gap isn't fraud — it's the **retail spread**, and understanding its components puts you in a much stronger negotiating position.

## What "spot" actually means

The price on [our live spot page](/spot-gold) starts from Swissquote's XAU/USD spot quote, re-read at least every 5 minutes. While the page is open, it follows the median of live PAXG/USD quotes on Binance, Coinbase and Kraken. PAXG is a token backed by allocated gold held in London Good Delivery bars of about 400 oz each, one token per fine troy ounce, and it usually trades within a few dollars of spot.

Spot is quoted per troy ounce of pure gold for wholesale trades in large bars — in London, **Good Delivery bars of about 400 oz and at least 99.5% purity**. Almost nobody outside the wholesale market actually buys gold at that price — including jewellers themselves.

## The retail spread, decomposed

When you walk into a Saudi or Emirati gold shop and buy a 10g 21K bangle, the per-gram price typically breaks down like this:

| Component | Size | Notes |
|-----------|---------------|-------|
| Spot equivalent (21K) | 100% baseline | What you'd pay if buying wholesale |
| Workmanship (مصنعية) | Varies by shop and design | Shop's labour. Higher for handmade / complex designs |
| Retailer margin | Varies by shop | Shop's profit |
| Local taxes (VAT) | 0% to 15%, by country | Saudi Arabia: 15% on the full price of jewellery; UAE: 5% on the full price of jewellery; Egypt: 14% on an agreed average making charge per gram, not on the gold value; Kuwait and Qatar: no VAT |

**The total markup over spot is usually much larger on jewellery than on bullion bars and coins.**

## Where you can negotiate vs. where you can't

**Negotiable:**
- Workmanship — the single biggest variable. Identical-looking pieces from different shops can carry very different making charges. Always ask for the مصنعية to be quoted separately.
- Retailer margin — some shops will lower their margin on larger purchases.

**Not negotiable:**
- Spot — set by global markets, neither buyer nor seller controls it.
- VAT — government rate, fixed by law in each country.

## The buyback discount trap

When you sell back, shops usually pay for the gold content at a discount to the spot equivalent that varies from shop to shop, and the making charge you originally paid is not refunded — you paid for labour, not melt-value gold. This is why **bullion bars and coins**, which carry much smaller premiums, lose less of their purchase price on resale than handcrafted jewellery.

## A 30-second pre-purchase checklist

1. Check [our 21K live page](/gold-price/21k) for the spot-equivalent per-gram in your currency
2. Ask the shop for: weight (g), purity (K), per-gram spot reference, مصنعية, total
3. Divide the making charge by the gold value of the piece and multiply by 100 to get the making charge as a percentage. Compare across 2–3 shops.
4. If the making charge on a simple design is well above what other shops quote, try the next shop.

## Why we publish spot, not retail

Gold Prices Arabia is a **price-reference site**, not a marketplace or affiliate broker for jewellers. We publish the spot equivalent — the floor — because that's the only number where the global market sets a single truth. Retail varies by shop, country, and design. Knowing the floor empowers your negotiation. Bookmark the [calculator](/gold-calculator) for any weight/karat/currency combination.`,
    body_ar: `زر أي سوق ذهب عربي وستلاحظ أن سعر الجرام المعروض في المحل يختلف عن سعر "السوق الفوري" المُسعَّر على المواقع المالية. الفارق ليس احتيالاً — إنه **هامش التجزئة**، وفهم مكوّناته يضعك في موقف تفاوضي أقوى بكثير.

## ما الذي يعنيه "السعر الفوري" فعلاً

يبدأ السعر على [صفحة السعر الفوري الحية لدينا](/spot-gold) من سعر XAU/USD الفوري لدى Swissquote، ويُعاد قراءته كل 5 دقائق على الأكثر. وأثناء فتح الصفحة يتبع الوسيط لأسعار PAXG/USD الحية على Binance و Coinbase و Kraken. وPAXG رمز رقمي مدعوم بذهب مخصّص محفوظ في سبائك London Good Delivery تزن كل منها نحو 400 أونصة، يقابل كل رمز أونصة ترويسية من الذهب الخالص، ويُتداول عادةً على بُعد دولارات قليلة من السعر الفوري.

يُسعَّر السعر الفوري لكل أونصة ترويسية من الذهب الخالص في صفقات الجملة على سبائك كبيرة — في لندن، **سبائك Good Delivery بوزن نحو 400 أونصة ونقاء لا يقل عن 99.5%**. تقريباً لا أحد خارج سوق الجملة يشتري الذهب بهذا السعر فعلاً — بما في ذلك الصاغة أنفسهم.

## هامش التجزئة، مفكَّكاً

عندما تدخل محل ذهب سعودياً أو إماراتياً وتشتري سواراً 10 جرام عيار 21، يتفكّك سعر الجرام عادةً كما يلي:

| العنصر | الحجم | ملاحظات |
|---------|----------------|-----------|
| السعر الفوري المكافئ (عيار 21) | 100% أساس | ما ستدفعه لو اشتريت بالجملة |
| المصنعية | تختلف حسب المحل والتصميم | عمالة المحل. أعلى للتصاميم اليدوية / المعقّدة |
| هامش بائع التجزئة | يختلف حسب المحل | ربح المحل |
| الضرائب المحلية (ضريبة القيمة المضافة) | من 0% إلى 15% حسب الدولة | السعودية: 15% على السعر الكامل للمجوهرات؛ الإمارات: 5% على السعر الكامل للمجوهرات؛ مصر: 14% على متوسط متفق عليه للمصنعية لكل جرام لا على قيمة الذهب؛ الكويت وقطر: لا ضريبة قيمة مضافة |

**إجمالي الزيادة فوق السعر الفوري أكبر عادةً بكثير على المجوهرات منه على السبائك والعملات.**

## أين يمكنك التفاوض وأين لا تستطيع

**قابل للتفاوض:**
- المصنعية — أكبر متغيّر منفرد. قد تختلف مصنعية قطع متطابقة الشكل كثيراً من محل لآخر. اطلب دائماً تسعير المصنعية بشكل منفصل.
- هامش بائع التجزئة — بعض المحلات تخفّض هامشها على المشتريات الكبيرة.

**غير قابل للتفاوض:**
- السعر الفوري — تحدّده الأسواق العالمية، لا المشتري ولا البائع يتحكّم به.
- ضريبة القيمة المضافة — معدل حكومي، ثابت بموجب القانون في كل دولة.

## فخ خصم إعادة الشراء

عندما تعيد البيع، تدفع المحلات عادةً قيمة محتوى الذهب بخصم من السعر الفوري المكافئ يختلف من محل لآخر، ولا تُستردّ المصنعية التي دفعتها أصلاً — فقد دفعتها مقابل العمل، لا مقابل قيمة الذهب القابل للصهر. لهذا السبب تخسر **السبائك والعملات**، ذات الهوامش الأصغر بكثير، جزءاً أقل من سعر شرائها عند إعادة البيع مقارنة بالمجوهرات المصنوعة يدوياً.

## قائمة تحقّق ما قبل الشراء في 30 ثانية

1. تحقّق من [صفحة الـ 21 الحية لدينا](/gold-price/21k) للسعر الفوري المكافئ للجرام بعملتك
2. اطلب من المحل: الوزن (جرام)، النقاء (قيراط)، مرجع سعر الجرام الفوري، المصنعية، الإجمالي
3. اقسم المصنعية على قيمة الذهب في القطعة واضرب الناتج في 100 لتحصل على نسبة المصنعية. قارن عبر 2-3 محلات.
4. إذا كانت المصنعية على تصميم بسيط أعلى بكثير مما تعرضه محلات أخرى، جرّب المحل التالي.

## لماذا ننشر السعر الفوري لا سعر التجزئة

Gold Prices Arabia هو **موقع مرجعي للأسعار**، ليس سوقاً ولا وسيطاً تابعاً للصاغة. ننشر السعر الفوري المكافئ — الحد الأدنى — لأنه الرقم الوحيد الذي تحدّد فيه السوق العالمية حقيقة واحدة. التجزئة تختلف حسب المحل والدولة والتصميم. معرفة الحد الأدنى تمكّن تفاوضك. احفظ [الحاسبة](/gold-calculator) لأي مزيج من الوزن والعيار والعملة.`,
    tags: ["spot-gold", "retail", "buying-guide", "education"],
    author: DEFAULT_AUTHOR,
  },
];

NEWS_ARTICLES.push(
  {
    slug: "ramadan-eid-2026-gold-demand-cycle",
    publishedAt: "2026-05-13T11:00:00Z",
    title_en: "Ramadan & Eid — How the MENA Gold Demand Cycle Affects Local Prices",
    title_ar: "رمضان والعيد — دورة الطلب على الذهب في الشرق الأوسط",
    description_en:
      "Ramadan, Eid and the wedding season are busy periods for gold buying in many Arab markets. We explain how local demand interacts with global spot prices and what to check before buying.",
    description_ar:
      "يُعدّ رمضان والعيد وموسم الأفراح من فترات النشاط في شراء الذهب في كثير من الأسواق العربية. نوضّح كيف يتفاعل الطلب المحلي مع السعر الفوري العالمي وما الذي يجب التحقق منه قبل الشراء.",
    body_en: `Ramadan and Eid al-Fitr are among the busiest gold-buying periods in many MENA markets; the World Gold Council noted that Ramadan and Eid supported jewellery demand in early 2026. Wedding gold and Eid family gifting drive this seasonal demand, which can affect local making charges and stock — though not the global spot price directly.

## What actually moves during Ramadan

The global spot gold price (XAU/USD) is formed mainly in London, New York and Shanghai — far larger markets than MENA retail. **Ramadan buying on its own does not set the global price**. What it moves:

1. **Local retail premium** — some jewellers raise making charges or offer fewer discounts during peak demand
2. **Dealer availability** — popular designs can sell out at smaller shops

## Timing a purchase

No one can reliably time the gold price, and making charges and stock vary by shop as well as by season. Comparing quotes from two or three shops on the day you buy usually matters more than the calendar.


## The next Ramadan

Ramadan 2026 ran from about 18 February to 19 March 2026. Ramadan 2027 is expected to begin around 8 February 2027 (exact dates depend on moon sighting). Factors worth checking ahead of it:
- **Global spot price** — check the current level on [our spot page](/spot-gold)
- **USD strength** — affects local-currency cost. SAR, AED and JOD are pegged to the dollar, but the EGP has a flexible rate and can swing
- **Saudi VAT** — 15% on the full price of jewellery; factor it into total cost

## Track these data points

1. [21K live page](/gold-price/21k) — daily spot equivalent baseline
2. Local jeweller posted per-gram rate — compare it with the spot equivalent; the gap is the making charge, margin and any VAT
3. Making charge — compare the per-gram making charge for the same design across shops
4. Discounts on larger purchases — ask whether the shop reduces the making charge on bigger orders

## Bottom line

Ramadan and Eid don't make global gold "more expensive" — global spot is global. Local making charges and stock, however, can tighten in busy seasons. Comparing several shops' making charges on the day you buy is the most reliable way to avoid overpaying.

Check the [Saudi 21K page](/saudi-arabia/gold-price/21k) and [UAE 21K page](/uae/gold-price/21k) for live local-currency spot equivalents before any major purchase.`,
    body_ar: `يُعدّ رمضان وعيد الفطر من أنشط فترات شراء الذهب في كثير من أسواق الشرق الأوسط، وقد أشار مجلس الذهب العالمي إلى أن رمضان والعيد دعما الطلب على المجوهرات في مطلع 2026. ذهب الأعراس والإهداء العائلي في العيد يقودان هذا الطلب الموسمي، الذي قد يؤثر على المصنعية والمخزون محلياً — وإن لم يؤثر على السعر الفوري العالمي مباشرة.

## ما الذي يتحرّك فعلياً في رمضان

يتشكّل السعر الفوري العالمي للذهب (XAU/USD) أساساً في لندن ونيويورك وشنغهاي — أسواق أكبر بكثير من تجزئة الشرق الأوسط. **شراء رمضان وحده لا يحدّد السعر العالمي**. ما يحرّكه:

1. **الهامش المحلي للتجزئة** — قد يرفع بعض الصاغة المصنعية أو يقلّلون الخصومات خلال ذروة الطلب
2. **توفّر التجار** — قد تنفد التصاميم الأكثر طلباً لدى المحلات الصغيرة

## توقيت الشراء

لا أحد يستطيع توقّع سعر الذهب بدقّة، كما أن المصنعية والمخزون يختلفان من محل لآخر لا من موسم لآخر فقط. ومقارنة عروض محلين أو ثلاثة يوم الشراء أهم عادةً من التقويم.


## رمضان المقبل

امتد رمضان 2026 من نحو 18 فبراير إلى 19 مارس 2026، ويُتوقَّع أن يبدأ رمضان 2027 في نحو 8 فبراير 2027 (تتوقف المواعيد الدقيقة على رؤية الهلال). عوامل تستحق المتابعة قبله:
- **السعر الفوري العالمي** — راجع مستواه الحالي على [صفحة السعر الفوري لدينا](/spot-gold)
- **قوة الدولار** — تؤثر على التكلفة بالعملة المحلية. الريال السعودي والدرهم الإماراتي والدينار الأردني مربوطة بالدولار، أما الجنيه المصري فسعره مرن وقد يتأرجح
- **ضريبة القيمة المضافة السعودية** — 15% على السعر الكامل للمجوهرات، احسبها في التكلفة الإجمالية

## تتبّع نقاط البيانات هذه

1. [صفحة الـ 21 الحية](/gold-price/21k) — السعر الفوري المكافئ اليومي كأساس
2. سعر الجرام المعلن لدى الصائغ المحلي — قارنه بالسعر الفوري المكافئ؛ الفرق هو المصنعية والهامش وأي ضريبة
3. المصنعية — قارن مصنعية الجرام للتصميم نفسه بين عدة محلات
4. الخصم على المشتريات الكبيرة — اسأل إن كان المحل يخفّض المصنعية على الطلبات الأكبر

## الخلاصة

رمضان والعيد لا يجعلان الذهب العالمي "أغلى" — السعر الفوري العالمي عالمي. لكن المصنعية والمخزون محلياً قد يتأثران في المواسم المزدحمة. ومقارنة مصنعية عدة محلات يوم الشراء هي أكثر الطرق موثوقية لتجنّب دفع مبلغ زائد.

تحقّق من [صفحة 21 السعودية](/saudi-arabia/gold-price/21k) و [صفحة 21 الإماراتية](/uae/gold-price/21k) للحصول على السعر الفوري المكافئ بالعملة المحلية الحية قبل أي عملية شراء كبرى.`,
    tags: ["ramadan", "eid", "demand-cycle", "seasonal", "21k"],
    author: DEFAULT_AUTHOR,
  },
  {
    slug: "egypt-18k-vs-21k-gold-shift",
    publishedAt: "2026-05-13T13:00:00Z",
    title_en: "18K vs 21K in Egypt — Why Some Buyers Choose 18K",
    title_ar: "عيار 18 أم 21 في مصر — لماذا يختار بعض المشترين عيار 18",
    description_en:
      "Traditionally a 21K market, Egypt also has buyers who choose 18K. We look at why — the weaker pound, modern designs, stone settings — and how the two karats compare.",
    description_ar:
      "السوق المصري سوق عيار 21 تقليدياً، لكن بعض المشترين يختارون عيار 18. نوضّح الأسباب — ضعف الجنيه والتصاميم الحديثة وترصيع الأحجار — وكيف يقارن العياران.",
    body_en: `Egyptian gold-buyers have always preferred 21K — the same 87.5% standard widely used in Saudi, UAE and Jordanian markets. But 18K (75% pure) also has a following, especially for modern and stone-set designs. The reasons are worth understanding.

## Why some buyers choose 18K

### 1. EGP weakness compresses purchasing power

The Egyptian Pound has lost more than 50% of its value against USD since 2016. For a household budgeting for a wedding set, the absolute weight of gold they can afford has dropped — but the **aspirational design** (the look, the size, the brand) hasn't. 18K stretches purchasing power: because it contains 75% gold instead of 87.5%, the same budget buys about 17% more grams of 18K than 21K, before making charges.

### 2. Modern designer aesthetic

Imported European-style designs, and local pieces made in that style, are typically 18K. The diamond-set engagement ring, the slim modern chain, the minimalist bracelet — these are 18K vocabulary. Buyers who prefer modern minimalist designs therefore often end up with 18K.

### 3. Workability for fine settings

Stone-set jewellery (diamonds, gemstones) is structurally more secure in 18K than 21K. The harder alloy holds prongs longer.

## What this means for buyers

### Resale value: the making charge decides

When you sell, dealers pay for the pure gold content, less a buyback discount that varies by shop. At spot-equivalent prices the same budget buys about the same pure gold in either karat — a 50g 18K bracelet and about 43g of 21K both contain roughly 37.5g of pure gold. What you lose on resale is mainly the making charge, which is not refunded, plus the buyback discount. If an 18K piece carries a higher making charge, more of its purchase price is lost when you sell.

### Wear durability: 18K is better

18K is harder than 21K, so rings, watches and pendants worn every day tend to keep their shape and resist scratches better in 18K.

### What to ask the jeweller

1. **Per-gram price for both karats** — let the math drive the decision, not the brochure
2. **Workmanship per gram** — making charges on handmade or designer 18K can be higher than on mass-produced 21K; ask for the figure in writing, and note that Egypt's 14% VAT is charged on the making charge, not on the gold value
3. **Resale policy from this specific shop** — many Egyptian dealers buy back only at melt value; some offer trade-in at slight premium
4. **Hallmark stamp confirmation** — the piece should carry an assay mark showing its purity (750 equals 18K; 875 equals 21K). Reject any unmarked piece

## How the choice usually breaks down

- **Gold content and resale** → buyers focused on these usually look at 24K bars and coins or low-making-charge 21K. See [our 21K page](/gold-price/21k)
- **Daily wear and diamond settings** → 18K is the usual choice. See [our 18K page](/gold-price/18k)
- **Mixed sets** → some families combine an 18K diamond ring with 21K bangles

## Sources to validate

Always cross-check your local jeweller's per-gram rate against our [Egypt page](/egypt/gold-price/21k) for 21K and [global 18K page](/gold-price/18k) for 18K. The displayed spot equivalent in EGP uses a daily mid-market exchange rate from an open-source currency feed, not the central bank's rate. Compare the jeweller's making charge and margin with what other shops quote before you buy.`,
    body_ar: `لطالما فضّل مشترو الذهب المصريون عيار 21 — معيار النقاء 87.5% نفسه المنتشر في الأسواق السعودية والإماراتية والأردنية. لكن لعيار 18 (نقاء 75%) جمهوره أيضاً، خاصة في التصاميم الحديثة والمرصّعة بالأحجار. وأسباب ذلك تستحق الفهم.

## لماذا يختار بعض المشترين عيار 18

### 1. ضعف الجنيه يضغط القوة الشرائية

فقد الجنيه المصري أكثر من 50% من قيمته مقابل الدولار منذ 2016. بالنسبة لعائلة تخطّط ميزانية طقم زفاف، انخفض الوزن المطلق للذهب الذي يستطيعون شراءه — لكن **التصميم المرغوب** (الشكل والحجم والعلامة) لم ينخفض. يمدّ عيار 18 القوة الشرائية: لأنه يحوي 75% ذهباً بدلاً من 87.5%، تشتري الميزانية نفسها نحو 17% جرامات أكثر من عيار 18 مقارنة بعيار 21، قبل احتساب المصنعية.

### 2. الذوق التصميمي الحديث

التصاميم الأوروبية المستوردة، والقطع المحلية المصنوعة على طرازها، تأتي عادةً بعيار 18. خاتم الخطوبة المرصّع بالماس، السلسلة العصرية النحيفة، السوار البسيط — هذه هي مفردات عيار 18. لذلك ينتهي المشترون الذين يفضّلون التصاميم الحديثة البسيطة غالباً إلى عيار 18.

### 3. القابلية للتشكيل في التطعيمات الدقيقة

المجوهرات المرصّعة بالأحجار (الماس، الأحجار الكريمة) أكثر أماناً هيكلياً في عيار 18 من عيار 21. السبيكة الأقوى تثبت الأطراف لفترة أطول.

## ما يعنيه هذا للمشترين

### قيمة إعادة البيع: المصنعية هي العامل الحاسم

عند البيع، يدفع التاجر قيمة محتوى الذهب الخالص مع خصم إعادة شراء يختلف من محل لآخر. وبأسعار السعر الفوري المكافئ، تشتري الميزانية نفسها كمية متقاربة من الذهب الخالص في العيارين — فسوار 50 جرام عيار 18 ونحو 43 جرام من عيار 21 يحتوي كلاهما على نحو 37.5 جرام من الذهب الخالص. ما تخسره عند البيع هو أساساً المصنعية، التي لا تُستردّ، إضافة إلى خصم إعادة الشراء. فإذا كانت مصنعية قطعة عيار 18 أعلى، تخسر جزءاً أكبر من سعر شرائها عند البيع.

### متانة الاستخدام: عيار 18 أفضل

عيار 18 أصلب من عيار 21، لذا تحافظ الخواتم والساعات والقلائد التي تُلبس يومياً على شكلها وتقاوم الخدوش بشكل أفضل عادةً في عيار 18.

### ما تسأله الصائغ

1. **سعر الجرام لكلا العيارين** — دع الحسابات تقود القرار، لا الكتيّب
2. **المصنعية لكل جرام** — قد تكون مصنعية عيار 18 المصنوع يدوياً أو المصمَّم أعلى من مصنعية عيار 21 المنتج بكميات كبيرة؛ اطلب الرقم مكتوباً، ولاحظ أن ضريبة القيمة المضافة المصرية (14%) تُحسب على المصنعية لا على قيمة الذهب
3. **سياسة إعادة الشراء من هذا المحل بالذات** — كثير من التجار المصريين يشترون فقط بقيمة الصهر؛ بعضهم يقدّم استبدالاً بهامش طفيف
4. **تأكيد ختم الدمغة** — يجب أن تحمل القطعة دمغة تبيّن عيارها (750 تعادل عيار 18، و875 تعادل عيار 21). ارفض أي قطعة بدون ختم

## كيف يتوزّع الاختيار عادةً

- **محتوى الذهب وإعادة البيع** → يتّجه المهتمون بهما عادةً إلى سبائك وعملات عيار 24 أو عيار 21 قليل المصنعية. راجع [صفحة الـ 21 لدينا](/gold-price/21k)
- **الاستخدام اليومي وترصيع الماس** → عيار 18 هو الخيار المعتاد. راجع [صفحة الـ 18 لدينا](/gold-price/18k)
- **أطقم مختلطة** → تجمع بعض العائلات بين خاتم ماس عيار 18 وأساور عيار 21

## مصادر للتحقّق

تحقّق دائماً من سعر الجرام لدى صائغك المحلي مقابل [صفحة مصر لدينا](/egypt/gold-price/21k) لعيار 21 و [صفحة عيار 18 العالمية](/gold-price/18k) لعيار 18. يعتمد السعر الفوري المكافئ المعروض بالجنيه على سعر صرف وسطي يُحدَّث يومياً من مصدر بيانات عملات مفتوح المصدر، لا على سعر البنك المركزي. قارن المصنعية وهامش البائع بما تعرضه محلات أخرى قبل الشراء.`,
    tags: ["egypt", "18k", "21k", "market-trends", "buying-guide"],
    author: DEFAULT_AUTHOR,
  },
  {
    slug: "5-home-tests-to-spot-fake-gold",
    publishedAt: "2026-05-13T14:00:00Z",
    title_en: "5 At-Home Tests to Spot Fake Gold Before You Sell or Buy",
    title_ar: "5 اختبارات منزلية لاكتشاف الذهب المزيّف",
    description_en:
      "You don't need a professional assay to catch obvious fakes. Five quick tests with simple tools can flag many obvious fakes, though none is as reliable as a professional test.",
    description_ar:
      "لا تحتاج إلى تحليل احترافي لاكتشاف المزيّف الواضح. خمسة اختبارات سريعة بأدوات بسيطة تكشف كثيراً من المزيّف الواضح، وإن لم يبلغ أيّ منها دقّة الفحص المهني.",
    body_en: `Before reselling inherited jewellery, accepting a "vintage" piece from a private seller, or simply verifying a recent purchase, run these five tests. None replaces a professional test — but together they can flag many obvious fakes.

## Test 1 — The hallmark check

Solid gold pieces (24K, 22K, 21K, 18K, 14K) usually carry a stamp indicating purity:

| Purity | Hallmark variations |
|--------|---------------------|
| 24K | 999, 24K, 24KT |
| 22K | 916, 22K |
| 21K | 875, 21K |
| 18K | 750, 18K, 18KT |
| 14K | 585, 14K |

**Look on the clasp, the inside of a ring band, or the back of a pendant.** Use a 10× jeweller's loupe (~$10 on Amazon) for fine detail. Stamps that say "GP" (gold-plated), "GF" (gold-filled), "1/20 12K GF" (12K gold-filled rolled to 1/20 weight), or "RGP" (rolled gold plate) are NOT solid gold — they have a thin gold layer over a base metal core.

## Test 2 — The magnet test

Pure gold is NOT magnetic. Hold a strong neodymium magnet (a small one from any DIY store) close to the piece:
- **No attraction at all** → consistent with gold (but doesn't prove gold; brass, copper, lead also non-magnetic)
- **Strong pull** → contains a magnetic metal such as iron or steel → not solid gold (a clasp's small steel spring can also attract, so test the body of the piece)

This test catches steel-core "gold" pieces. It doesn't catch gold-coloured brass or copper.

## Test 3 — The density test

Gold is heavy. Density: 19.3 g/cm³ for pure gold; about 17 g/cm³ for 21K; about 15.5 g/cm³ for 18K; about 13–14 g/cm³ for 14K (the exact figure depends on the alloy). Most fake metals (brass, copper, zinc alloys) sit at 7.5–8.9 g/cm³ — roughly **half** the density.

Method:
1. Weigh the piece on a scale that reads to 0.01 g if possible (mass in grams = M)
2. Put a cup of water on the scale and press tare/zero
3. Hang the piece on a thin thread so it is fully under water without touching the cup; the new reading in grams equals its volume in cm³ (V)
4. Density = M / V

A 21K piece should land close to 17 g/cm³ (readings on small pieces are rough). A brass fake will land near 8 g/cm³. **Half the density = fake.** A normal reading does not prove gold: tungsten is almost as dense as gold and has been used in counterfeits.

## Test 4 — The ceramic scratch test

Buy a small unglazed ceramic tile (a "streak plate" — $5 at lapidary supply or hardware). Drag the gold piece firmly across the tile:
- **Gold streak (yellowish)** → consistent with gold
- **Black streak** → pyrite ("fool's gold") or gold-plated brass
- **No streak at all** → too hard; could be steel, ceramic, or other non-gold metal

This is a destructive test on the surface of the jewellery (very minor scratch) — only use on pieces you intend to sell or are confident are fake.

## Test 5 — The nitric acid test (advanced)

The most informative home test, but it requires care. Gold-testing kits include:
- Testing acids for different karats (nitric acid, plus nitric–hydrochloric mixes for higher karats)
- Pipette dropper
- A black touchstone

Method:
1. Lightly scratch the piece on the test stone, leaving a small gold streak
2. Put one drop of the acid for the karat you want to test on the streak
3. **Streak stays unchanged** → the metal is at least the karat of the acid you used (an 18K acid leaves 18K and higher untouched but dissolves lower-karat gold)
4. **Streak turns green** → base metal (brass, copper alloys)
5. **Streak fades or dissolves** → lower karat than the acid, or not gold at all. Gold does not dissolve in nitric acid, which dissolves silver and base metals — so a plated piece fails once the streak reaches the base metal under the thin gold layer

**Safety:** wear gloves and eye protection. Work outside or in a well-ventilated area. Neutralise spilled acid with baking soda before disposal.

## When to walk to a professional

If two or more of the above tests fail OR if the piece is high-value (>$500 USD), get a professional XRF assay. Many gold dealers and assay offices offer XRF testing, which is quick and does not damage the piece.

## What you can do today

1. Loupe + hallmark check — 30 seconds, costs nothing
2. Magnet test — 10 seconds with a strong neodymium magnet (not a weak fridge magnet)
3. Weigh on a kitchen scale, cross-check against [our calculator](/gold-calculator) for expected market value at the stated weight and karat

If the math doesn't match — if a "50g 21K" piece weighs 35g, or the seller wants 60% of spot value for a "guaranteed 24K" coin — walk away. Genuine gold is rarely offered far below its spot value.

Bookmark [our 24K page](/gold-price/24k) for the daily reference, and check it before any private-market transaction.`,
    body_ar: `قبل إعادة بيع المجوهرات الموروثة أو قبول قطعة "أثرية" من بائع خاص أو ببساطة التحقق من شراء حديث، شغّل هذه الاختبارات الخمسة. لا يحلّ أيٌّ منها محل الفحص المهني — لكنها معاً قد تكشف كثيراً من المزيّف الواضح.

## الاختبار 1 — فحص الدمغة

قطع الذهب الحقيقي (عيار 24، 22، 21، 18، 14) تحمل عادةً ختماً يشير إلى النقاء:

| النقاء | اختلافات الدمغة |
|---------|------------------|
| عيار 24 | 999, 24K, 24KT |
| عيار 22 | 916, 22K |
| عيار 21 | 875, 21K |
| عيار 18 | 750, 18K, 18KT |
| عيار 14 | 585, 14K |

**ابحث على المشبك، أو داخل خاتم، أو خلف قلادة.** استخدم عدسة صائغ 10× (~10 دولارات على أمازون) للتفاصيل الدقيقة. الأختام التي تحمل "GP" (مطلي بالذهب)، "GF" (مملوء بالذهب)، "1/20 12K GF" (مملوء بذهب 12 قيراط مدلفن إلى 1/20 الوزن)، أو "RGP" (طلاء ذهب مدلفن) **ليست ذهباً صلباً** — لديها طبقة ذهب رقيقة فوق معدن أساسي.

## الاختبار 2 — اختبار المغناطيس

الذهب الخالص ليس مغناطيسياً. أمسك مغناطيس نيوديميوم قوي (مغناطيس صغير من أي محل أدوات منزلية) قرب القطعة:
- **لا انجذاب على الإطلاق** → متّسق مع الذهب (لكن لا يثبت الذهب؛ النحاس الأصفر والنحاس والرصاص أيضاً غير مغناطيسية)
- **سحب قوي** → يحتوي معدناً مغناطيسياً كالحديد أو الفولاذ → ليس ذهباً صلباً (قد ينجذب نابض المشبك الفولاذي الصغير، لذا اختبر جسم القطعة)

هذا الاختبار يكشف القطع ذات النواة الفولاذية. لا يكتشف النحاس الأصفر أو النحاسي بلون الذهب.

## الاختبار 3 — اختبار الكثافة

الذهب ثقيل. الكثافة: 19.3 جم/سم³ للذهب الخالص؛ نحو 17 جم/سم³ لعيار 21؛ نحو 15.5 جم/سم³ لعيار 18؛ نحو 13-14 جم/سم³ لعيار 14 (يتوقف الرقم الدقيق على السبيكة). معظم المعادن المزيّفة (النحاس الأصفر، النحاس، سبائك الزنك) تكون عند 7.5-8.9 جم/سم³ — تقريباً **نصف الكثافة**.

الطريقة:
1. زن القطعة على ميزان بدقّة 0.01 جم إن أمكن (الكتلة بالجرامات = M)
2. ضع كوب ماء على الميزان واضغط زر التصفير
3. علّق القطعة بخيط رفيع بحيث تغمرها المياه بالكامل دون أن تلمس الكوب؛ القراءة الجديدة بالجرامات تساوي حجمها بالسنتيمتر المكعب (V)
4. الكثافة = M / V

قطعة عيار 21 يجب أن تقترب من 17 جم/سم³ (القراءات على القطع الصغيرة تقريبية). مزيّف من النحاس الأصفر سيكون قرب 8 جم/سم³. **نصف الكثافة = مزيّف.** لكن القراءة الطبيعية لا تثبت أنها ذهب: فالتنغستن يقارب الذهب في كثافته واستُخدم في التزييف.

## الاختبار 4 — اختبار الخدش بالسيراميك

اشترِ بلاطة سيراميك صغيرة غير لامعة ("صفيحة خدش" — 5 دولارات في محلات النحت أو الأدوات). اسحب قطعة الذهب بقوة عبر البلاطة:
- **أثر ذهبي (أصفر)** → متّسق مع الذهب
- **أثر أسود** → بيريت ("ذهب الأحمق") أو نحاس مطلي بالذهب
- **لا أثر على الإطلاق** → صلب جداً؛ قد يكون فولاذ أو سيراميك أو معدن آخر غير الذهب

هذا اختبار يدمّر سطح المجوهرات (خدش صغير جداً) — استخدمه فقط على القطع التي تنوي بيعها أو واثق أنها مزيّفة.

## الاختبار 5 — اختبار حمض النيتريك (متقدّم)

أكثر الاختبارات المنزلية دلالة، لكنه يتطلب حذراً. تشمل أطقم فحص الذهب:
- أحماض اختبار لعيارات مختلفة (حمض النيتريك، ومزائج النيتريك والهيدروكلوريك للعيارات الأعلى)
- قطّارة
- حجر محكّ أسود

الطريقة:
1. اخدش القطعة بخفّة على حجر الاختبار، تاركاً أثراً ذهبياً صغيراً
2. ضع قطرة واحدة من حمض العيار الذي تريد اختباره على الأثر
3. **يبقى الأثر دون تغيير** → المعدن بعيار الحمض المستخدم أو أعلى (حمض عيار 18 يترك عيار 18 وما فوقه دون مساس ويذيب الذهب الأقل عياراً)
4. **يتحوّل الأثر إلى أخضر** → معدن أساسي (نحاس أصفر، سبائك نحاسية)
5. **يبهت الأثر أو يذوب** → عيار أقل من عيار الحمض، أو ليس ذهباً أصلاً. فالذهب لا يذوب في حمض النيتريك الذي يذيب الفضة والمعادن الأساسية — لذا تفشل القطعة المطلية حين يصل الأثر إلى المعدن الأساسي تحت طبقة الذهب الرقيقة

**السلامة:** ارتدِ قفازات وواقي عين. اعمل في الخارج أو في منطقة جيّدة التهوية. حيّد الحمض المسكوب ببيكربونات الصودا قبل التخلّص منه.

## متى تذهب إلى محترف

إذا فشلت اثنان أو أكثر من الاختبارات أعلاه أو إذا كانت القطعة عالية القيمة (>500 دولار)، احصل على تحليل XRF احترافي. يقدّم كثير من تجار الذهب ومكاتب الدمغة فحص XRF، وهو سريع ولا يضرّ القطعة.

## ما يمكنك فعله اليوم

1. عدسة + فحص الدمغة — 30 ثانية، لا تكلفة
2. اختبار المغناطيس — 10 ثوانٍ بمغناطيس نيوديميوم قوي (لا مغناطيس ثلاجة ضعيف)
3. زن على ميزان مطبخ، قارن مع [حاسبتنا](/gold-calculator) للقيمة السوقية المتوقّعة بالوزن والعيار المُذكَر

إذا لم تتطابق الحسابات — إذا كانت قطعة "50 جرام عيار 21" تزن 35 جرام، أو يريد البائع 60% من قيمة السعر الفوري لـ "عملة 24 قيراط مضمونة" — ابتعد. نادراً ما يُعرض الذهب الحقيقي بأقل بكثير من قيمته بالسعر الفوري.

احفظ [صفحة عيار 24 لدينا](/gold-price/24k) كمرجع يومي، وراجعها قبل أي صفقة في السوق الخاصة.`,
    tags: ["fraud-prevention", "buying-guide", "authentication", "education"],
    author: DEFAULT_AUTHOR,
  },
  {
    slug: "silver-platinum-palladium-investment-comparison",
    publishedAt: "2026-05-13T15:00:00Z",
    title_en: "Silver vs Platinum vs Palladium — A Practical Investment Comparison",
    title_ar: "الفضة والبلاتين والبلاديوم — مقارنة استثمارية",
    description_en:
      "Beyond gold, three other precious metals trade actively. We compare silver, platinum, and palladium on volatility, industrial demand, MENA availability, and long-term hold characteristics.",
    description_ar:
      "إلى جانب الذهب، تُتداول ثلاثة معادن نفيسة أخرى بنشاط. نقارن الفضة والبلاتين والبلاديوم على التقلّب والطلب الصناعي والتوفّر في الشرق الأوسط وخصائص الاحتفاظ طويل المدى.",
    body_en: `Gold gets the headlines, but **silver, platinum, and palladium** trade in deep international markets too. For MENA precious-metals investors looking to diversify beyond gold, here's how each metal compares on the factors that actually matter for long-term holding.

## Silver (XAG)

**Price:** silver has swung widely in recent years, touching about $121 an ounce in January 2026. See [our silver page](/precious-metals/silver) for today's price and our [gold-silver ratio page](/gold-silver-ratio) for how it compares with gold.

**Volatility:** higher than gold — silver's daily moves are typically larger than gold's, and it lost more than a quarter of its value in a single day in January 2026. Industrial demand (electronics, solar panels) creates more price sensitivity to economic cycles than gold has.

**MENA availability:** common — most jewellers stock sterling silver (92.5% pure) and bullion bars. 99.9% silver bars are available from bullion dealers in the Gulf.

**Hold characteristics:**
- Storage volume: silver of the same value takes up more than 100 times the space of gold at recent price ratios (it is far cheaper and only about half as dense) — meaningful at scale
- VAT: silver jewellery is taxed at the standard rate (15% in Saudi Arabia, 5% in the UAE), but investment bars and coins of at least 99% purity are zero-rated in both; Kuwait and Qatar have no VAT
- Resale: dealers buy back bars and coins; ask for the buyback price before you buy, as spreads on silver vary

**In short:** a cheaper and more volatile precious metal than gold, with a large industrial share of demand.

## Platinum (XPT)

**Price:** platinum's yearly average was roughly $890–1,100 an ounce from 2020 to 2024 (USGS), far below gold. See [our platinum page](/precious-metals/platinum) for today's price.

**Volatility:** generally higher than gold's, with periodic sharp moves.

**MENA availability:** rare in jewellery form outside premium designer brands (white gold is often rhodium-plated and can look similar — check for a platinum hallmark such as 950). Bullion bars and coins are usually bought through bullion dealers rather than jewellers.

**Hold characteristics:**
- Automotive demand: catalytic converters for diesel and petrol engines take about 40% of platinum demand (WPIC, 2024 forecast); battery-electric cars need none, which is often cited as a long-term risk to this demand
- Geographic risk: about 70% of mine output is in South Africa (USGS, 2024), vulnerable to political/labour disruption
- Premiums on bullion: typically higher than gold's
- Hallmark: 950 or 900 indicates platinum content

**In short:** a metal whose price depends heavily on car-industry demand and South African supply.

## Palladium (XPD)

**Spot price range:** wildly variable. Peaked above $3,000 / oz in 2022, often trades $800–1,800.

**Volatility:** highest of the three. Palladium can swing 10%+ in a single week. Russia produces ~40% of global palladium — sanctions and supply shocks dominate price action.

**MENA availability:** essentially zero in retail form. Investment-grade palladium requires direct purchase from major refiners or ETF exposure.

**Hold characteristics:**
- Industrial demand: most palladium goes into catalytic converters for petrol cars — the same long-term EV risk as platinum
- No meaningful jewellery market
- Refining/storage infrastructure is more limited than gold or silver
- Wide bid-ask spreads on physical bullion

**In short:** the most volatile of the four, with little retail availability in the region.

## Comparison table

| Metal | Volatility | Industrial demand share | MENA retail availability |
|-------|------------|------------------------|---------------------------|
| Silver | Medium-high | About 59% (2024) | Strong |
| Platinum | Medium-high | About 70% (autos ~40%, other industry ~30%) | Weak |
| Palladium | Very high | Most of it (autos) | Very weak |
| Gold | Low-medium | About 7% (technology, 2024) | Very strong |

## How to track each metal

We publish prices for all four metals:
- [Gold](/precious-metals/gold) — Swissquote XAU/USD spot, re-read at least every 5 minutes; while the page is open it follows the median of live PAXG/USD quotes on Binance, Coinbase and Kraken
- [Silver](/precious-metals/silver) — Swissquote XAG/USD spot, re-read at least every 5 minutes
- [Platinum](/precious-metals/platinum) — Swissquote XPT/USD spot, re-read at least every 5 minutes
- [Palladium](/precious-metals/palladium) — Swissquote XPD/USD spot, re-read at least every 5 minutes


Bookmark our [precious-metals hub](/precious-metals) to track all four; each metal's chart converts prices into 51 currencies, including SAR, JOD, AED and EGP, using daily mid-market exchange rates.`,
    body_ar: `الذهب يحصل على العناوين، لكن **الفضة والبلاتين والبلاديوم** تُتداول في أسواق دولية عميقة أيضاً. لمستثمري المعادن النفيسة في الشرق الأوسط الذين يبحثون عن التنويع خارج الذهب، إليكم كيف يقارن كل معدن على العوامل التي تهمّ فعلاً للاحتفاظ طويل المدى.

## الفضة (XAG)

**السعر:** تقلّب سعر الفضة بشدّة في السنوات الأخيرة، وبلغ نحو 121 دولاراً للأونصة في يناير 2026. راجع [صفحة الفضة لدينا](/precious-metals/silver) لسعر اليوم و[صفحة نسبة الذهب إلى الفضة](/gold-silver-ratio) لمقارنته بالذهب.

**التقلّب:** أعلى من الذهب — تحرّكات الفضة اليومية أكبر عادةً من تحرّكات الذهب، وقد فقدت أكثر من ربع قيمتها في يوم واحد في يناير 2026. يخلق الطلب الصناعي (إلكترونيات، ألواح شمسية) حساسية سعرية أكبر للدورات الاقتصادية من الذهب.

**التوفّر في الشرق الأوسط:** شائع — معظم الصاغة يخزّنون الفضة الإسترلينية (نقاء 92.5%) والسبائك. وتتوفّر سبائك فضة بنقاء 99.9% لدى تجار السبائك في الخليج.

**خصائص الاحتفاظ:**
- حجم التخزين: تشغل الفضة المساوية في القيمة حيّزاً يزيد على 100 ضعف حيّز الذهب بنسب الأسعار الأخيرة (فهي أرخص بكثير وكثافتها نحو نصف كثافة الذهب) — مهمّ على نطاق واسع
- الضريبة: تخضع مشغولات الفضة للنسبة الأساسية (15% في السعودية و5% في الإمارات)، أما السبائك والعملات الاستثمارية بنقاء 99% فأكثر فخاضعة لنسبة الصفر في البلدين؛ ولا توجد ضريبة قيمة مضافة في الكويت وقطر
- إعادة البيع: يشتري التجار السبائك والعملات، فاسأل عن سعر إعادة الشراء قبل الشراء، إذ تختلف هوامش الفضة من تاجر لآخر

**باختصار:** معدن نفيس أرخص من الذهب وأكثر تقلّباً، وللصناعة حصّة كبيرة من الطلب عليه.

## البلاتين (XPT)

**السعر:** بلغ متوسط سعر البلاتين السنوي نحو 890-1100 دولار للأونصة بين 2020 و2024 (بحسب هيئة المسح الجيولوجي الأمريكية)، أي أقل بكثير من الذهب. راجع [صفحة البلاتين لدينا](/precious-metals/platinum) لسعر اليوم.

**التقلّب:** أعلى عموماً من تقلّب الذهب، مع تحرّكات حادّة بين حين وآخر.

**التوفّر في الشرق الأوسط:** نادر في شكل مجوهرات خارج العلامات التجارية المصمَّمة الفاخرة (الذهب الأبيض يُطلى غالباً بالروديوم وقد يبدو مشابهاً — ابحث عن دمغة البلاتين مثل 950). تُشترى السبائك والعملات عادةً عبر تجار السبائك لا الصاغة.

**خصائص الاحتفاظ:**
- طلب السيارات: تستهلك المحوّلات الحفّازة لمحرّكات الديزل والبنزين نحو 40% من الطلب على البلاتين (توقعات مجلس الاستثمار العالمي في البلاتين لعام 2024)؛ والسيارات الكهربائية بالكامل لا تحتاج إليها، وهو ما يُذكر غالباً كخطر طويل المدى على هذا الطلب
- المخاطر الجغرافية: نحو 70% من إنتاج المناجم في جنوب أفريقيا (هيئة المسح الجيولوجي الأمريكية، 2024)، عرضة للاضطراب السياسي/العمّالي
- هوامش على السبائك: عادةً أعلى من هوامش الذهب
- الدمغة: 950 أو 900 تشير إلى محتوى البلاتين

**باختصار:** معدن يرتبط سعره بشدّة بطلب صناعة السيارات وبالإمدادات من جنوب أفريقيا.

## البلاديوم (XPD)

**نطاق السعر الفوري:** متغيّر بشدّة. ذروة فوق 3,000 دولار / أونصة في 2022، غالباً يتداول 800-1800.

**التقلّب:** الأعلى بين الثلاثة. يمكن للبلاديوم أن يتأرجح 10%+ في أسبوع واحد. تنتج روسيا ~40% من البلاديوم العالمي — العقوبات وصدمات الإمدادات تهيمن على حركة السعر.

**التوفّر في الشرق الأوسط:** صفر تقريباً في شكل تجزئة. يتطلب البلاديوم الاستثماري شراءً مباشراً من المصافي الرئيسية أو انكشافاً عبر صناديق ETF.

**خصائص الاحتفاظ:**
- الطلب الصناعي: يذهب معظم البلاديوم إلى المحوّلات الحفّازة لسيارات البنزين — مع الخطر طويل المدى نفسه من السيارات الكهربائية كما في البلاتين
- لا سوق مجوهرات ذي معنى
- البنية التحتية للتكرير/التخزين أكثر محدودية من الذهب أو الفضة
- هوامش عرض-طلب واسعة على السبائك الفعلية

**باختصار:** الأكثر تقلّباً بين المعادن الأربعة، وتوفّره للأفراد في المنطقة محدود.

## جدول المقارنة

| المعدن | التقلّب | حصّة الطلب الصناعي | توفّر التجزئة في الشرق الأوسط |
|---------|---------|----------------------|--------------------------------|
| الفضة | متوسط-عالي | نحو 59% (2024) | قوي |
| البلاتين | متوسط-عالي | نحو 70% (السيارات ~40%، وصناعات أخرى ~30%) | ضعيف |
| البلاديوم | عالي جداً | معظمه (سيارات) | ضعيف جداً |
| الذهب | منخفض-متوسط | نحو 7% (التكنولوجيا، 2024) | قوي جداً |

## كيف تتتبّع كل معدن

ننشر أسعار المعادن الأربعة:
- [الذهب](/precious-metals/gold) — سعر XAU/USD الفوري من Swissquote، يُعاد قراءته كل 5 دقائق على الأكثر؛ وأثناء فتح الصفحة يتبع الوسيط لأسعار PAXG/USD الحية على Binance و Coinbase و Kraken
- [الفضة](/precious-metals/silver) — سعر XAG/USD الفوري من Swissquote، يُعاد قراءته كل 5 دقائق على الأكثر
- [البلاتين](/precious-metals/platinum) — سعر XPT/USD الفوري من Swissquote، يُعاد قراءته كل 5 دقائق على الأكثر
- [البلاديوم](/precious-metals/palladium) — سعر XPD/USD الفوري من Swissquote، يُعاد قراءته كل 5 دقائق على الأكثر


احفظ [مركز المعادن النفيسة لدينا](/precious-metals) لتتبع المعادن الأربعة؛ ويحوّل الرسم البياني لكل معدن الأسعار إلى 51 عملة، منها الريال السعودي والدينار الأردني والدرهم الإماراتي والجنيه المصري، بأسعار صرف وسطية تُحدَّث يومياً.`,
    tags: ["silver", "platinum", "palladium", "investment", "diversification"],
    author: DEFAULT_AUTHOR,
  },
);

/**
 * Every article on the site, newest first.
 *
 * Split across files so none exceeds the repo's size rule: the launch batch
 * lives above, the practical buying guides in `guides.ts` and
 * `guides-selling.ts`. Consumers (sitemap, RSS, /news, article pages) import
 * only `ARTICLES` and are unaffected by the split.
 */
export const ARTICLES: Article[] = [
  ...NEWS_ARTICLES,
  ...GUIDE_ARTICLES,
  ...SELLING_ARTICLES,
  ...SAVING_ARTICLES,
  ...MARKET_ARTICLES,
  ...REGIONAL_ARTICLES,
  ...CARE_ARTICLES,
  ...RISK_ARTICLES,
  ...CONTEXT_ARTICLES,
].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function listArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug);
}

/** Word count for NewsArticle schema. Uses the locale-specific body. */
export function articleWordCount(article: Article, locale: string): number {
  const body = locale === "ar" ? article.body_ar : article.body_en;
  // Strip markdown syntax (headers, tables, code), then count whitespace-separated tokens.
  const text = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/[#*_>|\-]/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
  return text.split(/\s+/).filter(Boolean).length;
}
