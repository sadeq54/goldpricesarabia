import type { LocaleText } from "@/lib/i18n-text";

/**
 * What moved gold in each year — hand-written, shown on
 * /historical-gold-prices/{year} under the year's numbers.
 *
 * Why: the year pages are the site's best earners, yet two years shared every
 * line of prose except the numbers (measured 2026-10-19: 2023 vs 2024, 0 unique
 * lines). AdSense rejects "auto-generated pages" and asks for "complete
 * sentences and paragraphs"; this is the part a template cannot write.
 *
 * Rules kept: only well-documented events and price milestones; no yearly
 * percentages (the page computes those from its own data, so text and table can
 * never disagree); no forecasts. ar/en only — tr/hi pages omit the section
 * rather than show English (see BILINGUAL_SECTIONS for why). 2025 onward is left
 * to the data until the year can be written up from settled sources.
 */
export const YEAR_CONTEXT: Record<number, { en: string; ar: string }> = {
  2000: {
    en: "Gold spent most of the year below $300 an ounce. Investors were focused on the end of the dot-com boom in stocks, and European central banks were still selling reserves under the 1999 Washington Agreement on Gold, which capped those sales but did not stop them.",
    ar: "بقي الذهب معظم العام دون 300 دولار للأونصة. كان اهتمام المستثمرين منصبًّا على نهاية فقاعة شركات الإنترنت في الأسهم، وكانت البنوك المركزية الأوروبية لا تزال تبيع من احتياطياتها بموجب اتفاقية واشنطن للذهب لعام 1999، التي حدّت من تلك المبيعات من دون أن توقفها.",
  },
  2001: {
    en: "Gold traded near its lowest level in two decades early in the year. The US slipped into recession, the Federal Reserve cut interest rates repeatedly, and the September 11 attacks brought a brief jump in demand for safe havens. The long decline that began in 1980 was ending.",
    ar: "تداول الذهب قرب أدنى مستوياته في عقدين مطلع العام. دخل الاقتصاد الأمريكي في ركود، وخفّض الاحتياطي الفيدرالي الفائدة مرات متتالية، وأحدثت هجمات 11 سبتمبر قفزة قصيرة في الطلب على الملاذات الآمنة. كان الهبوط الطويل الذي بدأ عام 1980 يقترب من نهايته.",
  },
  2002: {
    en: "The bull market began. Falling US interest rates, a weakening dollar and heavy losses in technology stocks after the dot-com crash sent investors back to gold, which rose through the year to its highest level since the late 1990s.",
    ar: "بدأت موجة الصعود الطويلة. فقد أعاد انخفاض الفائدة الأمريكية وضعف الدولار والخسائر الكبيرة في أسهم التكنولوجيا بعد انهيار فقاعة الإنترنت المستثمرين إلى الذهب، فارتفع طوال العام إلى أعلى مستوياته منذ أواخر التسعينيات.",
  },
  2003: {
    en: "The run-up to the Iraq war in March and a falling dollar kept gold climbing. Prices passed $400 an ounce in December, and US interest rates were cut to 1%, their lowest in decades.",
    ar: "أبقى التمهيد لحرب العراق في مارس وتراجع الدولار الذهب في صعود. وتجاوز السعر 400 دولار للأونصة في ديسمبر، فيما خُفّضت الفائدة الأمريكية إلى 1%، وهو أدنى مستوى لها منذ عقود.",
  },
  2004: {
    en: "A quieter year of gains. The Federal Reserve began raising rates in June, but the dollar kept weakening. In November the first US gold exchange-traded fund (GLD) launched, letting ordinary investors hold bullion through a stock account for the first time.",
    ar: "عام مكاسب أهدأ. بدأ الاحتياطي الفيدرالي رفع الفائدة في يونيو، لكن الدولار واصل الضعف. وفي نوفمبر أُطلق أول صندوق متداول للذهب في الولايات المتحدة (GLD)، ما أتاح للمستثمر العادي امتلاك السبائك عبر حساب أسهم لأول مرة.",
  },
  2005: {
    en: "Gold rose even as the dollar strengthened, a sign that demand was coming from more than currency moves. In December it crossed $500 an ounce for the first time since 1987, helped by rising oil prices and growing buying from India and China.",
    ar: "ارتفع الذهب رغم قوة الدولار، وهي علامة على أن الطلب لم يعد مرتبطًا بحركة العملة وحدها. وفي ديسمبر تجاوز 500 دولار للأونصة لأول مرة منذ 1987، مدعومًا بارتفاع أسعار النفط وتزايد الشراء من الهند والصين.",
  },
  2006: {
    en: "Gold jumped to a 26-year high above $700 an ounce in May, then fell back sharply as commodity markets corrected. It finished the year well above where it started, with money flowing into the new gold exchange-traded funds.",
    ar: "قفز الذهب في مايو إلى أعلى مستوى منذ 26 عامًا فوق 700 دولار للأونصة، ثم تراجع بقوة مع تصحيح أسواق السلع. وأنهى العام أعلى بكثير مما بدأه، مع تدفق الأموال إلى صناديق الذهب المتداولة الجديدة.",
  },
  2007: {
    en: "The US subprime mortgage crisis broke out in August, and the Federal Reserve started cutting rates in September. Gold climbed above $800 an ounce in November for the first time since 1980 as investors looked for protection from the credit crunch.",
    ar: "اندلعت أزمة الرهن العقاري الأمريكية في أغسطس، وبدأ الاحتياطي الفيدرالي خفض الفائدة في سبتمبر. وصعد الذهب فوق 800 دولار للأونصة في نوفمبر لأول مرة منذ 1980، بحثًا من المستثمرين عن حماية من أزمة الائتمان.",
  },
  2008: {
    en: "In March, as Bear Stearns was rescued, gold passed $1,000 an ounce for the first time. After Lehman Brothers collapsed in September, investors sold almost everything to raise dollars and gold fell back toward $700, before recovering by year-end as central banks cut rates to near zero.",
    ar: "في مارس، ومع إنقاذ بنك بير ستيرنز، تجاوز الذهب 1,000 دولار للأونصة لأول مرة. وبعد انهيار ليمان براذرز في سبتمبر باع المستثمرون كل شيء تقريبًا للحصول على الدولار، فتراجع الذهب نحو 700 دولار، قبل أن يتعافى بنهاية العام مع خفض البنوك المركزية الفائدة إلى قرب الصفر.",
  },
  2009: {
    en: "Money printing by the Federal Reserve and other central banks weakened confidence in paper currencies. In November the Reserve Bank of India bought 200 tonnes of gold from the International Monetary Fund, and gold set new records above $1,200 in December.",
    ar: "أضعف التيسير الكمي من الاحتياطي الفيدرالي والبنوك المركزية الأخرى الثقة في العملات الورقية. وفي نوفمبر اشترى بنك الاحتياطي الهندي 200 طن من الذهب من صندوق النقد الدولي، وسجّل الذهب أرقامًا قياسية جديدة فوق 1,200 دولار في ديسمبر.",
  },
  2010: {
    en: "The European debt crisis, starting with Greece's bailout in May, and a second round of US money printing in November drove gold to repeated records near $1,400. Central banks as a group became net buyers of gold for the first time in about two decades.",
    ar: "دفعت أزمة الديون الأوروبية، بدءًا من إنقاذ اليونان في مايو، وجولة ثانية من التيسير الكمي الأمريكي في نوفمبر الذهب إلى أرقام قياسية متكررة قرب 1,400 دولار. وأصبحت البنوك المركزية مجتمعةً مشترية صافية للذهب لأول مرة منذ نحو عقدين.",
  },
  2011: {
    en: "The peak of the decade-long rally. After the United States lost its AAA credit rating in August and the euro crisis deepened, gold reached about $1,920 an ounce in early September, a record that stood for nine years. It then fell back in the final months.",
    ar: "ذروة موجة الصعود التي استمرت عقدًا. فبعد خسارة الولايات المتحدة تصنيفها الائتماني الممتاز في أغسطس وتعمّق أزمة اليورو، بلغ الذهب نحو 1,920 دولارًا للأونصة مطلع سبتمبر، وهو رقم قياسي صمد تسع سنوات، ثم تراجع في الأشهر الأخيرة.",
  },
  2012: {
    en: "Gold traded mostly between $1,550 and $1,800. The Federal Reserve launched a third round of bond buying in September, and the year ended higher for the twelfth year in a row — the last gain of the long bull market.",
    ar: "تداول الذهب في معظم العام بين 1,550 و1,800 دولار. وأطلق الاحتياطي الفيدرالي جولة ثالثة من شراء السندات في سبتمبر، وأنهى الذهب العام مرتفعًا للسنة الثانية عشرة على التوالي، وكانت تلك آخر مكاسب موجة الصعود الطويلة.",
  },
  2013: {
    en: "The twelve-year winning streak ended with gold's worst year since 1981. A two-day crash in April and the Federal Reserve's talk of slowing its bond buying pushed investors out of gold funds, even as jewellery and coin buyers in China and India rushed in at the lower prices.",
    ar: "انتهت سلسلة المكاسب الممتدة 12 عامًا بأسوأ عام للذهب منذ 1981. فقد دفع انهيار استمر يومين في أبريل وحديث الاحتياطي الفيدرالي عن إبطاء شراء السندات المستثمرين إلى الخروج من صناديق الذهب، حتى مع اندفاع مشتري المشغولات والعملات في الصين والهند للشراء بالأسعار الأدنى.",
  },
  2014: {
    en: "A flat to lower year around $1,200. The Federal Reserve ended its bond buying in October, the dollar strengthened and oil prices collapsed, which removed much of the inflation worry that had supported gold. Russia's central bank kept adding to its reserves.",
    ar: "عام مستقر إلى منخفض حول 1,200 دولار. أنهى الاحتياطي الفيدرالي شراء السندات في أكتوبر، وارتفع الدولار وانهارت أسعار النفط، ما أزال كثيرًا من مخاوف التضخم التي كانت تدعم الذهب. وواصل البنك المركزي الروسي زيادة احتياطياته.",
  },
  2015: {
    en: "Gold fell to its lowest level in about six years in December, near $1,050, as the Federal Reserve raised interest rates for the first time since 2006. In July China's central bank disclosed its first increase in gold reserves in six years.",
    ar: "هبط الذهب في ديسمبر إلى أدنى مستوياته في نحو ست سنوات قرب 1,050 دولارًا، مع رفع الاحتياطي الفيدرالي الفائدة لأول مرة منذ 2006. وفي يوليو كشف البنك المركزي الصيني عن أول زيادة في احتياطياته من الذهب منذ ست سنوات.",
  },
  2016: {
    en: "Gold rallied in the first half as interest rates turned negative in Europe and Japan and the United Kingdom voted to leave the European Union in June. The gains faded after the US election in November and a Federal Reserve rate rise in December.",
    ar: "ارتفع الذهب في النصف الأول مع تحوّل الفائدة إلى السالب في أوروبا واليابان وتصويت المملكة المتحدة في يونيو على الخروج من الاتحاد الأوروبي. ثم تلاشت المكاسب بعد الانتخابات الأمريكية في نوفمبر ورفع الفائدة في ديسمبر.",
  },
  2017: {
    en: "A steady year of gains despite three US rate rises. A weaker dollar and tension over North Korea's missile tests supported prices, and gold had its best year since 2010.",
    ar: "عام مكاسب ثابتة رغم ثلاث زيادات في الفائدة الأمريكية. دعم ضعفُ الدولار والتوتر بشأن تجارب كوريا الشمالية الصاروخية الأسعار، وحقق الذهب أفضل أداء سنوي له منذ 2010.",
  },
  2018: {
    en: "Four US rate rises and a strong dollar pushed gold down to around $1,170 in August. It recovered late in the year as stock markets fell. Central banks bought more gold than in any year since 1971, led by Russia, Turkey and Kazakhstan.",
    ar: "دفعت أربع زيادات في الفائدة الأمريكية وقوة الدولار الذهب إلى نحو 1,170 دولارًا في أغسطس، ثم تعافى أواخر العام مع هبوط أسواق الأسهم. واشترت البنوك المركزية ذهبًا أكثر من أي عام منذ 1971، بقيادة روسيا وتركيا وكازاخستان.",
  },
  2019: {
    en: "The US–China trade war and three Federal Reserve rate cuts brought gold back above $1,400 in June for the first time since 2013. Central banks again bought on a large scale, and a growing share of the world's government bonds paid negative yields.",
    ar: "أعادت الحرب التجارية بين الولايات المتحدة والصين وثلاثة تخفيضات للفائدة من الاحتياطي الفيدرالي الذهب فوق 1,400 دولار في يونيو لأول مرة منذ 2013. وعادت البنوك المركزية إلى الشراء بكميات كبيرة، فيما اتسعت حصة السندات الحكومية العالمية ذات العائد السالب.",
  },
  2020: {
    en: "The COVID-19 pandemic and vast government stimulus sent gold to a record of about $2,070 an ounce in August, breaking the 2011 high. Money poured into gold funds at a record pace as interest rates fell below inflation.",
    ar: "دفعت جائحة كوفيد-19 وحزم التحفيز الحكومية الضخمة الذهب إلى رقم قياسي بلغ نحو 2,070 دولارًا للأونصة في أغسطس، متجاوزًا قمة 2011. وتدفقت الأموال إلى صناديق الذهب بوتيرة قياسية مع انخفاض الفائدة دون معدل التضخم.",
  },
  2021: {
    en: "As vaccines rolled out and bond yields rose, gold drifted lower and posted its first annual decline since 2018, even as inflation climbed. Jewellery demand recovered strongly after the 2020 lockdowns.",
    ar: "مع انطلاق حملات التطعيم وارتفاع عوائد السندات، تراجع الذهب تدريجيًا وسجّل أول انخفاض سنوي منذ 2018 رغم صعود التضخم. وتعافى الطلب على المشغولات بقوة بعد إغلاقات 2020.",
  },
  2022: {
    en: "Russia's invasion of Ukraine in February sent gold back near its record in March. The Federal Reserve then raised rates at the fastest pace in decades and the dollar surged, pulling gold down to about $1,620 by November. Central banks bought more gold than in any year on record.",
    ar: "أعاد الغزو الروسي لأوكرانيا في فبراير الذهب قرب رقمه القياسي في مارس. ثم رفع الاحتياطي الفيدرالي الفائدة بأسرع وتيرة منذ عقود وارتفع الدولار بقوة، فهبط الذهب إلى نحو 1,620 دولارًا بحلول نوفمبر. واشترت البنوك المركزية ذهبًا أكثر من أي عام مسجّل.",
  },
  2023: {
    en: "US bank failures in March and the war in Gaza from October supported gold, and central banks bought more than 1,000 tonnes for a second year. Gold ended the year at a record closing price above $2,000 an ounce.",
    ar: "دعمت انهيارات البنوك الأمريكية في مارس والحرب في غزة منذ أكتوبر الذهب، واشترت البنوك المركزية أكثر من 1,000 طن للعام الثاني على التوالي. وأنهى الذهب العام عند سعر إغلاق قياسي فوق 2,000 دولار للأونصة.",
  },
  2024: {
    en: "Gold set record after record, peaking near $2,790 an ounce in late October, its best year since 2010. Steady central bank buying, strong demand in Asia and the start of US interest rate cuts in September all pushed it higher.",
    ar: "سجّل الذهب رقمًا قياسيًا تلو الآخر، وبلغ ذروته قرب 2,790 دولارًا للأونصة أواخر أكتوبر، في أفضل عام له منذ 2010. ودفعه إلى الأعلى شراء البنوك المركزية المستمر والطلب القوي في آسيا وبدء خفض الفائدة الأمريكية في سبتمبر.",
  },
};

export const YEAR_CONTEXT_HEADING: LocaleText = {
  en: "What moved gold in {year}",
  ar: "ما الذي حرّك الذهب في {year}",
};
