import type { FaqQA } from "@/lib/schemas";

/**
 * Visible FAQ + FAQPage JSON-LD for the spot and unit-price pages
 * (/spot-gold, /gold-price-per-ounce, /gold-price-per-gram, /gold-price-per-kilo).
 *
 * Rewritten 2026-10-19 for the AdSense review: the old copy existed only as
 * JSON-LD (no FAQ on the page), named a crypto median as the only price
 * source, quoted a stale $4,500 example, claimed "40+ currencies", stated an
 * unverified Egyptian VAT rate and answered "Are 1-kg bars a good investment?"
 * with "Yes". Rules: describe how the numbers are produced, give conversions and
 * tax treatment only where well established, never advise buying or selling.
 * ar/en only — these sections are bilingual (lib/metadata.ts BILINGUAL_SECTIONS).
 */
type Pair = { en: FaqQA[]; ar: FaqQA[] };

const SOURCE_EN =
  "This page opens with Swissquote's XAU/USD spot quote, which the server re-reads at least every five minutes. While the page stays open, the price follows live PAXG/USD quotes from Binance, Coinbase and Kraken, taking the median of the three; PAXG is a token backed 1:1 by allocated gold bars and trades within a few cents of spot.";
const SOURCE_AR =
  "تفتح هذه الصفحة على سعر Swissquote الفوري لزوج XAU/USD، الذي يعيد الخادم قراءته كل خمس دقائق على الأقل. وما دامت الصفحة مفتوحة يتبع السعر أسعار PAXG/USD اللحظية من Binance وCoinbase وKraken، مع أخذ الوسيط بين الثلاث؛ وPAXG رمز مدعوم 1:1 بسبائك ذهب مخصصة ويتداول على بُعد سنتات من السعر الفوري.";

const VAT_EN =
  "In Saudi Arabia jewellery carries 15% VAT and in the UAE 5%, while investment-grade bars and coins of 99% purity or more are zero-rated in both.";
const VAT_AR =
  "في السعودية تخضع المشغولات لضريبة القيمة المضافة بنسبة 15% وفي الإمارات 5%، بينما تُعفى (بنسبة صفر) السبائك والعملات الاستثمارية التي لا يقل نقاؤها عن 99% في البلدين.";

export const SPOT_FAQ: Pair = {
  en: [
    { q: "What is the spot gold price?", a: "The price for immediate delivery of one troy ounce (31.1035 g) of pure gold, quoted in US dollars as XAU/USD. It is the wholesale reference every retail price starts from, before making charges, dealer margins and tax." },
    { q: "Where does the price on this page come from?", a: SOURCE_EN },
    { q: "What is the LBMA Gold Price?", a: "A benchmark set twice each London business day, at 10:30 and 15:00 London time, through an electronic auction run by ICE Benchmark Administration. Contracts and central banks refer to it; the spot price keeps moving between the two settings." },
    { q: "What moves the spot price?", a: "US interest rates and the dollar (gold pays no interest, so higher real rates tend to weigh on it), buying by central banks, money moving into or out of gold funds, jewellery demand in India and China, and geopolitical risk." },
    { q: "Why is a jeweller's price higher than spot?", a: `The jeweller adds the cost of making the piece, a retail margin and any tax to the value of the gold. ${VAT_EN}` },
  ],
  ar: [
    { q: "ما هو سعر الذهب الفوري؟", a: "هو سعر التسليم الفوري لأونصة تروي واحدة (31.1035 جرامًا) من الذهب الخالص بالدولار الأمريكي، ويُرمز له XAU/USD. وهو المرجع بالجملة الذي يبدأ منه كل سعر بالتجزئة، قبل المصنعية وهامش التاجر والضريبة." },
    { q: "من أين يأتي السعر في هذه الصفحة؟", a: SOURCE_AR },
    { q: "ما هو سعر LBMA للذهب؟", a: "سعر مرجعي يُحدَّد مرتين في كل يوم عمل في لندن، عند 10:30 و15:00 بتوقيت لندن، عبر مزاد إلكتروني تديره ICE Benchmark Administration. تعتمد عليه العقود والبنوك المركزية، ويواصل السعر الفوري الحركة بين التحديدين." },
    { q: "ما الذي يحرّك السعر الفوري؟", a: "أسعار الفائدة الأمريكية والدولار (فالذهب لا يدر عائدًا، لذا يضغط ارتفاع العائد الحقيقي عليه عادةً)، وشراء البنوك المركزية، ودخول الأموال إلى صناديق الذهب أو خروجها منها، والطلب على المشغولات في الهند والصين، والمخاطر الجيوسياسية." },
    { q: "لماذا سعر الصائغ أعلى من السعر الفوري؟", a: `يضيف الصائغ إلى قيمة الذهب تكلفة تصنيع القطعة وهامش ربح وأي ضريبة. ${VAT_AR}` },
  ],
};

export const OUNCE_FAQ: Pair = {
  en: [
    { q: "What does the ounce price on this page show?", a: "The spot price of one troy ounce of pure gold in US dollars. The calculator below converts it into other currencies, karats and weights." },
    { q: "What is a troy ounce?", a: "31.1035 grams, the unit used to price precious metals worldwide. It is heavier than the ordinary (avoirdupois) ounce of 28.35 grams." },
    { q: "How do I convert the ounce price to grams or kilograms?", a: "Divide by 31.1035 for one gram and multiply by 32.1507 for one kilogram. At $4,000 an ounce, for example, a gram of pure gold is about $128.60 and a kilogram about $128,603." },
    { q: "Is the ounce price what a one-ounce coin costs?", a: "No. Coins and small bars sell at a premium over spot to cover minting and distribution, a few percent for widely traded coins and more for small or collectible pieces." },
    { q: "Why is gold priced in US dollars?", a: "The largest markets, in London and New York, trade in dollars, so every other currency's price is converted from XAU/USD. That is why the price in riyals or pounds can move even when the dollar price does not." },
  ],
  ar: [
    { q: "ماذا يعرض سعر الأونصة في هذه الصفحة؟", a: "السعر الفوري لأونصة تروي واحدة من الذهب الخالص بالدولار الأمريكي. وتحوّله الحاسبة أدناه إلى عملات وعيارات وأوزان أخرى." },
    { q: "ما هي أونصة التروي؟", a: "31.1035 جرامًا، وهي الوحدة المستخدمة لتسعير المعادن النفيسة حول العالم، وهي أثقل من الأونصة العادية البالغة 28.35 جرامًا." },
    { q: "كيف أحوّل سعر الأونصة إلى الجرام أو الكيلوجرام؟", a: "اقسم على 31.1035 لسعر الجرام، واضرب في 32.1507 لسعر الكيلوجرام. فعند 4,000 دولار للأونصة مثلًا يكون جرام الذهب الخالص نحو 128.60 دولارًا والكيلوجرام نحو 128,603 دولارات." },
    { q: "هل سعر الأونصة هو سعر عملة الأونصة الذهبية؟", a: "لا. تُباع العملات والسبائك الصغيرة بعلاوة فوق السعر الفوري لتغطية السك والتوزيع، تبلغ بضعة في المئة للعملات المتداولة على نطاق واسع وأكثر للقطع الصغيرة أو النادرة." },
    { q: "لماذا يُسعَّر الذهب بالدولار الأمريكي؟", a: "لأن أكبر السوقين، في لندن ونيويورك، تتداولان بالدولار، فيُحوَّل سعر كل عملة أخرى من XAU/USD. لذلك قد يتحرك السعر بالريال أو الجنيه حتى لو لم يتغير سعر الدولار." },
  ],
};

export const GRAM_FAQ: Pair = {
  en: [
    { q: "How is the gold price per gram calculated?", a: "Spot ounce price ÷ 31.1035 × purity, converted at the exchange rate. The purities are 99.9% for 24K, 91.7% for 22K, 87.5% for 21K, 75% for 18K and 58.3% for 14K." },
    { q: "Which karat should I compare with a shop's price?", a: "The one stamped on the piece: 21K (stamp 875) is the most common in Gulf jewellery, 22K (916) in India and South Asia, and 18K (750) for gem-set pieces." },
    { q: "Why does a jeweller charge more per gram?", a: `Shops add a making charge (per gram or per piece), a margin and tax to the gold value shown here. ${VAT_EN}` },
    { q: "What will a shop pay me per gram when I sell?", a: "Usually close to the gold value of the karat, minus a deduction for refining and the shop's margin. The making charge you paid is not refunded, which is why newly bought jewellery sells back for less than it cost." },
    { q: "Where does the price on this page come from?", a: SOURCE_EN },
  ],
  ar: [
    { q: "كيف يُحسب سعر جرام الذهب؟", a: "سعر الأونصة الفوري ÷ 31.1035 × نسبة النقاء، ثم يُحوَّل بسعر الصرف. ونسب النقاء هي 99.9% لعيار 24، و91.7% لعيار 22، و87.5% لعيار 21، و75% لعيار 18، و58.3% لعيار 14." },
    { q: "أي عيار أقارن بسعر المحل؟", a: "العيار المختوم على القطعة: عيار 21 (دمغة 875) هو الأكثر شيوعًا في مشغولات الخليج، وعيار 22 (916) في الهند وجنوب آسيا، وعيار 18 (750) للقطع المرصعة بالأحجار." },
    { q: "لماذا يطلب الصائغ سعرًا أعلى للجرام؟", a: `يضيف المحل إلى قيمة الذهب المعروضة هنا مصنعية (للجرام أو للقطعة) وهامش ربح وضريبة. ${VAT_AR}` },
    { q: "كم يدفع المحل للجرام عند البيع؟", a: "عادةً قريبًا من قيمة الذهب للعيار ناقص خصم للتكرير وهامش المحل. ولا تُسترد المصنعية التي دفعتها، لذلك تُباع المشغولات المشتراة حديثًا بأقل من ثمنها." },
    { q: "من أين يأتي السعر في هذه الصفحة؟", a: SOURCE_AR },
  ],
};

export const KILO_FAQ: Pair = {
  en: [
    { q: "How is the price of a kilo of gold calculated?", a: "One kilogram is 32.1507 troy ounces, so the spot price of a kilo of pure gold is the ounce price × 32.1507. The calculator converts it into local currencies." },
    { q: "What is a kilobar?", a: "A one-kilogram bar, usually 99.99% pure, made by refiners on the LBMA Good Delivery list. It is the most common bar in Gulf and Asian bullion markets." },
    { q: "Why do kilobars cost less per gram than small bars?", a: "The cost of making and distributing a bar is spread over a whole kilogram, so the premium over spot per gram is lower than for small bars and coins. Premiums still vary by dealer and market." },
    { q: "Does this page say whether to buy a kilobar?", a: "No. It shows prices, not investment advice. A kilobar ties up a large sum in one piece that cannot be sold in part, while smaller bars and coins cost more per gram but can be sold one at a time." },
    { q: "Why is the kilo price different between countries?", a: `The dollar price is the same everywhere; the local price differs with the exchange rate, tax and dealer margins. ${VAT_EN}` },
  ],
  ar: [
    { q: "كيف يُحسب سعر كيلو الذهب؟", a: "الكيلوجرام يساوي 32.1507 أونصة تروي، لذا فالسعر الفوري لكيلو الذهب الخالص هو سعر الأونصة × 32.1507. وتحوّله الحاسبة إلى العملات المحلية." },
    { q: "ما هي سبيكة الكيلو؟", a: "سبيكة وزنها كيلوجرام واحد، نقاؤها عادةً 99.99%، تصنعها مصافٍ مدرجة في قائمة LBMA Good Delivery، وهي أكثر السبائك شيوعًا في أسواق الخليج وآسيا." },
    { q: "لماذا سعر الجرام في سبيكة الكيلو أقل من السبائك الصغيرة؟", a: "لأن تكلفة تصنيع السبيكة وتوزيعها تتوزع على كيلوجرام كامل، فتكون العلاوة فوق السعر الفوري لكل جرام أقل من السبائك الصغيرة والعملات. وتختلف العلاوات مع ذلك بين التجار والأسواق." },
    { q: "هل تنصح هذه الصفحة بشراء سبيكة كيلو؟", a: "لا. هذه الصفحة تعرض الأسعار ولا تقدّم نصيحة استثمارية. فسبيكة الكيلو تجمّد مبلغًا كبيرًا في قطعة واحدة لا تُباع مجزأة، بينما تكلّف السبائك الصغيرة والعملات أكثر للجرام لكن يمكن بيعها واحدة تلو الأخرى." },
    { q: "لماذا يختلف سعر الكيلو بين الدول؟", a: `سعر الدولار واحد في كل مكان، ويختلف السعر المحلي بسعر الصرف والضريبة وهوامش التجار. ${VAT_AR}` },
  ],
};

export const FAQ_HEADING = { en: "Frequently asked questions", ar: "أسئلة شائعة" };

/** ar → Arabic, everything else → English (tr/hi of these sections 308 to /en). */
export function toolFaq(pair: Pair, locale: string): FaqQA[] {
  return locale === "ar" ? pair.ar : pair.en;
}
