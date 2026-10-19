/**
 * Short explainers for the tool pages that were numbers-only (2026-10-19, AdSense
 * review: "complete sentences and paragraphs, not only headlines").
 * Facts are stable, well-documented ones; no forecasts, no advice. ar/en only —
 * tr/hi omit them rather than show English.
 */
export type Explainer = { heading: string; paragraphs: string[] };

export const SGE_EXPLAINER: { en: Explainer; ar: Explainer } = {
  en: {
    heading: "What the Shanghai Gold Exchange is",
    paragraphs: [
      "The Shanghai Gold Exchange (SGE), opened in 2002, is China's national market for physical gold. Its main contract, Au99.99, is quoted in yuan per gram, and since 2016 the exchange has also set the Shanghai Gold Benchmark Price, the yuan reference for one kilogram of gold, twice each trading day.",
      "China is the world's largest gold producer and one of its two largest consumers, and gold imports need permission from the central bank. Because metal cannot flow freely in and out, Shanghai prices can sit above or below the London price converted to yuan; that gap is called the Shanghai premium and widens when Chinese demand is strong.",
      "The figures on this page are international spot gold converted to yuan at the day's exchange rate, so they show where Shanghai would trade with no premium at all. Compare them with the SGE's own published price to see the premium on any day.",
    ],
  },
  ar: {
    heading: "ما هي بورصة شنغهاي للذهب",
    paragraphs: [
      "بورصة شنغهاي للذهب (SGE)، التي افتُتحت عام 2002، هي السوق الوطنية الصينية للذهب الفعلي. يُسعَّر عقدها الرئيسي Au99.99 باليوان للجرام، ومنذ 2016 تحدد البورصة أيضًا «سعر شنغهاي المرجعي للذهب»، وهو المرجع باليوان لكيلوجرام الذهب، مرتين في كل يوم تداول.",
      "الصين أكبر منتج للذهب في العالم وأحد أكبر مستهلكَين له، ويحتاج استيراد الذهب إليها إلى إذن من البنك المركزي. ولأن المعدن لا يتدفق بحرية إلى داخل الصين وخارجها، قد يكون سعر شنغهاي أعلى أو أقل من سعر لندن بعد تحويله إلى اليوان، ويُسمى هذا الفرق «علاوة شنغهاي» ويتسع عندما يقوى الطلب الصيني.",
      "الأرقام في هذه الصفحة هي السعر الفوري العالمي محوّلًا إلى اليوان بسعر صرف اليوم، أي أنها تبيّن أين سيتداول ذهب شنغهاي من دون أي علاوة. قارنها بالسعر الذي تنشره البورصة نفسها لترى العلاوة في أي يوم.",
    ],
  },
};

export const RATIO_EXPLAINER: { en: Explainer; ar: Explainer } = {
  en: {
    heading: "How to read the gold/silver ratio",
    paragraphs: [
      "The ratio is the gold price divided by the silver price: how many ounces of silver one ounce of gold buys. A ratio of 80 means an ounce of gold costs as much as 80 ounces of silver.",
      "It moves a lot. It fell to about 31 in 2011, when silver spiked near $50 an ounce, and rose above 120 in March 2020, when silver collapsed in the first weeks of the pandemic. Under the bimetallic money standards of the nineteenth century, governments fixed it at about 15 or 16.",
      "A high ratio means silver is cheap compared with gold; a low ratio means it is expensive. Silver depends more on industrial demand than gold does, which is why the ratio tends to rise in recessions and fall in booms. The ratio describes the two prices; it does not predict which metal will rise next.",
    ],
  },
  ar: {
    heading: "كيف تقرأ نسبة الذهب إلى الفضة",
    paragraphs: [
      "النسبة هي سعر الذهب مقسومًا على سعر الفضة، أي عدد أونصات الفضة التي تشتريها أونصة ذهب واحدة. فالنسبة 80 تعني أن أونصة الذهب تساوي ثمن 80 أونصة فضة.",
      "وهي تتحرك كثيرًا: هبطت إلى نحو 31 عام 2011 حين قفزت الفضة قرب 50 دولارًا للأونصة، وارتفعت فوق 120 في مارس 2020 حين انهارت الفضة في الأسابيع الأولى من الجائحة. وفي أنظمة المعدنين النقدية في القرن التاسع عشر ثبّتتها الحكومات عند نحو 15 أو 16.",
      "النسبة المرتفعة تعني أن الفضة رخيصة مقارنةً بالذهب، والمنخفضة تعني أنها غالية. والفضة أكثر اعتمادًا على الطلب الصناعي من الذهب، لذلك تميل النسبة إلى الارتفاع في فترات الركود والانخفاض في فترات الازدهار. والنسبة تصف السعرين ولا تتنبأ بأي المعدنين سيرتفع بعد ذلك.",
    ],
  },
};

export const CHART_EXPLAINER: { en: Explainer; ar: Explainer } = {
  en: {
    heading: "About this chart",
    paragraphs: [
      "The chart plots daily closing prices of the COMEX gold future, the most traded gold contract, which usually trades a little above spot. Use the period menu to switch between time ranges and the currency menu to see the same history in riyals, dirhams, pounds or any other currency the site covers.",
      "Converted lines use the current exchange rate for the whole period, so they show how the gold price moved, not what it cost in that currency on each past date. For a year's monthly open, high, low and close, see the historical gold prices pages.",
    ],
  },
  ar: {
    heading: "عن هذا الرسم البياني",
    paragraphs: [
      "يعرض الرسم أسعار الإغلاق اليومية لعقد الذهب الآجل في COMEX، وهو أكثر عقود الذهب تداولًا، ويتداول عادةً أعلى قليلًا من السعر الفوري. استخدم قائمة الفترة للتنقل بين المدد، وقائمة العملات لرؤية التاريخ نفسه بالريال أو الدرهم أو الجنيه أو أي عملة يغطيها الموقع.",
      "تستخدم الخطوط المحوَّلة سعر الصرف الحالي للفترة كلها، فهي تبيّن كيف تحرك سعر الذهب، لا ما كانت تكلفته بتلك العملة في كل تاريخ سابق. وللافتتاح والأعلى والأدنى والإغلاق الشهري لأي عام، راجع صفحات أسعار الذهب التاريخية.",
    ],
  },
};
