import type { Article } from "@/content/news/articles";

/**
 * How the gold market actually reaches the reader: the chain from the London
 * benchmark to a shop window, how to read the board once you are standing in
 * front of it, and why Turkey — the one market in our set with a floating
 * currency and a gram-gold culture — behaves unlike the rest.
 *
 * Part of the 2026-09-10 content build (see guides-saving.ts for why).
 */

const AUTHOR = {
  name: "Sadeq Sayed Ahmad",
  url: "/about/sadeq",
  image: "/author/sadeq.jpeg",
};

export const MARKET_ARTICLES: Article[] = [
  {
    slug: "from-london-benchmark-to-your-jewellers-window",
    publishedAt: "2026-07-30T09:00:00Z",
    title_en: "From the London Benchmark to Your Jeweller's Window",
    title_ar: "من مؤشّر لندن إلى واجهة الصائغ في حيّك",
    description_en:
      "The price in a shop in Amman started as a number set in London and traded in Chicago. The full chain — benchmark, futures, local premium, exchange rate, making charge — and where each link adds or subtracts.",
    description_ar:
      "السعر في محل بعمّان بدأ رقمًا يُحدَّد في لندن ويُتداول في شيكاغو. السلسلة كاملة — المؤشّر، والعقود الآجلة، والعلاوة المحلية، وسعر الصرف، والمصنعية — وأين تضيف كل حلقة أو تطرح.",
    tags: ["market-structure", "education", "spot-price", "lbma"],
    author: AUTHOR,
    body_en: `When a jeweller in Amman, Casablanca or Karachi writes today's gram price on the board, he is at the end of a chain that began thousands of kilometres away. Understanding that chain tells you which parts of the price are fixed by the world and which are negotiable in the room — and that distinction is worth money.

## Link 1: the benchmark

Gold's reference price is set in **London**, the centre of the physical bullion trade for more than a century. Twice each business day, at 10:30 and 15:00 London time, an electronic auction run under the LBMA establishes a settlement price in dollars per **troy ounce** — the "London fix," now formally the LBMA Gold Price.

Two things about that unit matter downstream:

- **A troy ounce is 31.1035 grams**, not the 28.35 g of an ordinary ounce. Every gram price you ever see is a division by 31.1035.
- **The quote is in dollars.** Gold's world price is a dollar price. Everything else is a conversion.

The fix is a benchmark, used for contracts and valuations. It is not the price at every moment.

## Link 2: continuous trading

Between the fixes, gold trades continuously — over-the-counter in London, and as futures on **COMEX** in New York, alongside Shanghai and other centres. This is what produces the number that moves every few seconds, the **spot price**.

Spot and futures differ slightly and predictably. A futures contract for delivery in three months costs a little more than metal today, because someone must finance and store the metal in the meantime. That gap is normal market structure, not a discrepancy.

*This site's live spot figure is a median of PAXG/USD across Binance, Coinbase and Kraken — PAXG being a token backed one-to-one by allocated London bullion. Taking the median of three venues rather than one price keeps a single exchange's glitch from moving the number. The daily close figures come from COMEX futures.*

## Link 3: the local physical premium

Here the world price stops being the whole story. Physical gold in Dubai, Istanbul or Cairo does not trade at exactly the London price, because getting real metal into a real vault in a real city costs money and takes time.

The local premium reflects:

- **Import and logistics** — freight, insurance, security.
- **Duties and taxes** — India's import duty is the well-known case; VAT treatment differs sharply across the region.
- **Local supply and demand** — a wedding season or a festival can push the local premium up for weeks.
- **Refining to local standards** — the karat a market actually buys. A country that wants 21K needs metal alloyed to 21K.

In a calm market this premium is small. During a currency crisis or a buying panic it can widen dramatically, which is why the local price sometimes moves when the world price has not.

## Link 4: the exchange rate

Now the dollar price becomes a local price, and this link is the one that dominates in much of our coverage area. If your currency falls 10% against the dollar and gold does not move at all in dollars, gold rises 10% in your currency.

For countries with a **dollar peg** — Saudi Arabia, the UAE, Jordan, Qatar, Bahrain — this link is nearly invisible, because the rate barely moves. For **Egypt, Turkey, Pakistan and Lebanon** it frequently matters more than the world gold price itself. And where a country has more than one exchange rate in practice, which rate the shop uses changes the answer; we cover that in a separate guide.

## Link 5: the shop

Finally the metal becomes an object with a price tag. The shop adds:

- the **making charge**, covering fabrication and its own margin,
- the cost of **stones**, if any,
- and its **retail overhead**.

This is the only link in the entire chain where the number is genuinely up for discussion. Nobody behind the counter sets the London price, the COMEX spread, the import duty or the exchange rate. They do set the making charge.

## Reading the chain backwards

That is the practical payoff. When a price feels wrong, work up the chain and ask which link explains it:

| What you notice | Which link |
|---|---|
| Price moved and world gold did not | Exchange rate, or local premium |
| Two shops on the same street differ | Making charge and retail margin |
| Your country is dearer than the neighbour | Duty, tax, local premium |
| The board changed twice today | Spot, moving continuously |
| Quoted gram price ≠ ounce ÷ 31.1035 × purity | Premium and margin, by definition |

The last row is the most useful check you can run. Take the day's ounce price, divide by 31.1035, multiply by the purity of the karat in question — 0.999, 0.916, 0.875, 0.750 — and you have the pure metal value of a gram. Everything above that number is the local chain, and you now know what each part of it is for.

*Every country page on this site shows exactly that calculation, live, in the local currency.*`,
    body_ar: `حين يكتب صائغ في عمّان أو الدار البيضاء أو كراتشي سعر الجرام اليوم على اللوحة، فهو يقف في نهاية سلسلة بدأت على بُعد آلاف الكيلومترات. وفهم هذه السلسلة يخبرك أي أجزاء السعر تحدّدها السوق العالمية وأيها قابل للتفاوض داخل المحل — وهذا التمييز يساوي مالًا.

## الحلقة الأولى: المؤشّر المرجعي

يُحدَّد السعر المرجعي للذهب في **لندن**، مركز تجارة السبائك المادية منذ أكثر من قرن. ومرّتين في كل يوم عمل، الساعة 10:30 و15:00 بتوقيت لندن، يُجري مزاد إلكتروني تحت مظلة LBMA تسويةً بالدولار لكل **أونصة تروي** — وهو ما يُعرف بـ"تثبيت لندن"، ورسميًا اليوم سعر الذهب من LBMA.

وأمران في هذه الوحدة يهمّان بقيّة السلسلة:

- **أونصة التروي 31.1035 جرامًا**، لا 28.35 جرامًا كالأونصة العادية. فكل سعر جرام تراه في حياتك هو قسمة على 31.1035.
- **التسعير بالدولار.** فسعر الذهب العالمي سعر دولاري، وكل ما عداه تحويل.

والتثبيت مؤشّر مرجعي يُستخدم في العقود والتقويم، وليس هو السعر في كل لحظة.

## الحلقة الثانية: التداول المستمر

بين التثبيتَين يُتداول الذهب باستمرار — خارج المقصورة في لندن، وكعقود آجلة في **كومكس** بنيويورك، إلى جانب شنغهاي ومراكز أخرى. وهذا ما يُنتج الرقم الذي يتحرّك كل ثوانٍ، أي **السعر الفوري**.

ويختلف الفوري عن الآجل اختلافًا طفيفًا ومتوقّعًا. فالعقد الآجل للتسليم بعد ثلاثة أشهر يكلّف أكثر قليلًا من المعدن اليوم، لأن على أحدهم تمويل المعدن وتخزينه في الأثناء. وهذه الفجوة بنية سوق طبيعية لا تناقض.

*الرقم الفوري المباشر على هذا الموقع هو الوسيط بين أسعار PAXG/USD في Binance وCoinbase وKraken — وPAXG رمز مدعوم واحدًا لواحد بسبائك لندن المخصّصة. وأخذ الوسيط بين ثلاث منصّات بدل سعر واحد يمنع خللًا في منصّة بعينها من تحريك الرقم. أمّا أسعار الإغلاق اليومية فمن عقود كومكس الآجلة.*

## الحلقة الثالثة: العلاوة المحلية على المعدن

هنا يتوقّف السعر العالمي عن كونه القصة كلها. فالذهب المادي في دبي أو إسطنبول أو القاهرة لا يُتداول بسعر لندن تمامًا، لأن إيصال معدن حقيقي إلى خزنة حقيقية في مدينة حقيقية يكلّف مالًا ويستغرق وقتًا.

وتعكس العلاوة المحلية:

- **الاستيراد واللوجستيات** — الشحن والتأمين والحراسة.
- **الرسوم والضرائب** — رسم الاستيراد في الهند المثال المشهور، ومعاملة ضريبة القيمة المضافة تختلف بحدّة عبر المنطقة.
- **العرض والطلب المحليان** — فموسم أعراس أو عيد قد يرفع العلاوة المحلية أسابيع.
- **التكرير إلى المعايير المحلية** — أي العيار الذي تشتريه السوق فعلًا. فالبلد الذي يريد عيار 21 يحتاج معدنًا مسبوكًا على عيار 21.

وفي سوق هادئة تكون هذه العلاوة صغيرة. أمّا في أزمة عملة أو موجة شراء ذعرية فقد تتّسع اتّساعًا كبيرًا، ولهذا يتحرّك السعر المحلي أحيانًا والسعر العالمي ساكن.

## الحلقة الرابعة: سعر الصرف

الآن يصير السعر الدولاري سعرًا محليًا، وهذه الحلقة هي المهيمنة في كثير من نطاق تغطيتنا. فإذا هبطت عملتك 10% أمام الدولار ولم يتحرّك الذهب بالدولار إطلاقًا، ارتفع الذهب 10% بعملتك.

وفي الدول ذات **الربط بالدولار** — السعودية والإمارات والأردن وقطر والبحرين — تكاد هذه الحلقة تكون غير مرئية، لأن السعر لا يكاد يتحرّك. أمّا في **مصر وتركيا وباكستان ولبنان** فهي كثيرًا ما تكون أهمّ من سعر الذهب العالمي نفسه. وحيث يوجد في البلد أكثر من سعر صرف عمليًا، يتغيّر الجواب بحسب السعر الذي يستخدمه المحل، وقد أفردنا لذلك دليلًا مستقلًا.

## الحلقة الخامسة: المحل

أخيرًا يصير المعدن قطعةً لها بطاقة سعر. ويضيف المحل:

- **المصنعية**، وتغطّي التصنيع وهامشه هو،
- وثمن **الأحجار** إن وُجدت،
- و**مصاريف التجزئة**.

وهذه هي الحلقة الوحيدة في السلسلة كلها التي يكون الرقم فيها قابلًا للنقاش فعلًا. فلا أحد خلف الطاولة يحدّد سعر لندن، ولا فارق كومكس، ولا رسم الاستيراد، ولا سعر الصرف. لكنّهم يحدّدون المصنعية.

## قراءة السلسلة بالعكس

وهنا الفائدة العملية. فحين يبدو لك سعر غريبًا، اصعد في السلسلة واسأل أي حلقة تفسّره:

| ما تلاحظه | الحلقة المسؤولة |
|---|---|
| السعر تحرّك والذهب العالمي لم يتحرّك | سعر الصرف، أو العلاوة المحلية |
| محلّان في الشارع نفسه مختلفان | المصنعية وهامش التجزئة |
| بلدك أغلى من البلد المجاور | الرسوم والضرائب والعلاوة المحلية |
| اللوحة تغيّرت مرّتين اليوم | السعر الفوري، وهو يتحرّك باستمرار |
| سعر الجرام المعلن ≠ الأونصة ÷ 31.1035 × النقاء | العلاوة والهامش، بحكم التعريف |

والسطر الأخير أنفع فحص تستطيع إجراءه. خذ سعر الأونصة في اليوم، واقسمه على 31.1035، واضربه في نقاء العيار المعني — 0.999 أو 0.916 أو 0.875 أو 0.750 — فتحصل على قيمة المعدن الخالص في الجرام. وكل ما فوق هذا الرقم هو السلسلة المحلية، وقد صرت تعرف وظيفة كل جزء منها.

*كل صفحة دولة على هذا الموقع تعرض هذه الحسبة نفسها، مباشرةً، بالعملة المحلية.*`,
  },
  {
    slug: "how-to-read-a-jewellers-daily-board",
    publishedAt: "2026-08-12T09:00:00Z",
    title_en: "How to Read a Jeweller's Daily Board",
    title_ar: "كيف تقرأ لوحة الأسعار اليومية عند الصائغ",
    description_en:
      "Every gold shop posts a board of numbers each morning. What the columns mean, why there are two prices for the same karat, and the four questions that turn the board into something you can actually use.",
    description_ar:
      "كل محل ذهب يعلّق لوحة أرقام كل صباح. ماذا تعني الأعمدة، ولماذا يوجد سعران للعيار الواحد، والأسئلة الأربعة التي تحوّل اللوحة إلى شيء تستطيع استخدامه فعلًا.",
    tags: ["buying-guide", "retail", "education", "spread"],
    author: AUTHOR,
    body_en: `Walk into any gold souk and the first thing you see is a board — a whiteboard, an LED panel, or a printed sheet taped inside the glass. It is updated each morning and sometimes again during the day. Most customers glance at it, find one number, and stop. The board is telling you considerably more than that.

## The two columns

The single most important feature of the board is that most karats carry **two** numbers, not one.

- **The sell price** (البيع) — what the shop sells to you at. Higher.
- **The buy price** (الشراء) — what the shop pays if you bring gold in. Lower.

The shop is on both sides of the market, and the gap between the columns is its margin on the metal. Read that gap first, before anything else. It tells you what a round trip through this particular shop costs you.

A narrow gap signals a high-turnover dealer competing on price. A wide gap signals the opposite. In most Arab markets a normal spread on plain 21K runs a few percent; when it is very wide, that is information.

Note that the buy column is for **metal only**. Bring in a worked piece and you are paid on the gold content — the craftsmanship does not appear in that column, ever.

## The rows

Rows are karats, usually descending: **24, 22, 21, 18**, sometimes 14. Each is a purity:

| Karat | Purity | Hallmark |
|---|---|---|
| 24K | 99.9% | 999 |
| 22K | 91.7% | 916 |
| 21K | 87.5% | 875 |
| 18K | 75.0% | 750 |
| 14K | 58.3% | 585 |

The prices should be proportional to purity. That is the check almost nobody performs, and it takes five seconds: **21K should be about 87.5 ÷ 99.9 = 87.6% of the 24K price.** If the 24K gram is 300, the 21K gram should be near 263. If a row is meaningfully out of line with its purity, ask why — sometimes there is a good reason, such as the shop pricing a karat it rarely stocks, and sometimes there is not.

## What the board does not tell you

Three costs sit outside it entirely, and they are where the money goes:

- **Making charges.** Not on the board, almost never posted, always negotiable. The board price is metal.
- **Stones.** Priced separately, and their weight is not gold.
- **Tax.** VAT treatment varies by country and is sometimes shown, sometimes added at the till.

This is why the board price and the till price differ, and why a customer who compares only board prices between two shops can still overpay at the cheaper-looking one.

## When it was last updated

A board is a snapshot. Gold trades continuously, so a board written at 9 a.m. is stale by afternoon on a volatile day. Many shops update once daily and absorb intraday movement into their spread — which is a legitimate way to run a shop, and a reason the spread is not pure profit.

On a fast-moving day, ask when the board was set. Then check the live price yourself and you will know immediately whether the number in front of you is current.

## The four questions

Standing at the counter, these turn the board into a decision:

1. **"Is this price per gram, and for which karat?"** Removes the most common misunderstanding before it starts.
2. **"What is the making charge on this piece?"** The board number plus this number is what you actually pay.
3. **"When was the board last updated?"** Tells you whether to trust it today.
4. **"What would you buy this same piece back at?"** The single most revealing question in the shop. It surfaces the real spread on a specific object, not the theoretical one on the board.

A shop that answers all four plainly is a shop you can deal with. Hesitation on the fourth is worth noticing.

## Using the board with a live price in your pocket

The board is a local, once-a-day approximation of a number that moves every second. You can carry the real one. Open your country's page on this site, look at the live 24K and 21K gram price in your own currency, and compare.

You are not trying to catch the shop out — a retail price is legitimately above spot, for all the reasons in our guide on how the price reaches the shop. You are trying to know **how far** above, which is the only way to tell a fair board from a padded one.

*Live per-gram prices for 24, 22, 21, 18 and 14 karat, in your currency, are at the top of every country page here.*`,
    body_ar: `ادخل أي سوق ذهب، وأول ما تراه لوحة — لوح أبيض أو شاشة LED أو ورقة مطبوعة ملصقة داخل الزجاج. تُحدَّث كل صباح، وأحيانًا مرّة أخرى خلال اليوم. ومعظم الزبائن يلمحونها فيلتقطون رقمًا واحدًا ويتوقّفون. واللوحة تخبرك أكثر من ذلك بكثير.

## العمودان

أهمّ ما في اللوحة أن معظم العيارات تحمل **رقمين** لا رقمًا واحدًا.

- **سعر البيع** — وهو ما يبيعك المحل به. وهو الأعلى.
- **سعر الشراء** — وهو ما يدفعه لك المحل إن جئته بذهب. وهو الأدنى.

فالمحل قائم على طرفَي السوق، والفجوة بين العمودين هي هامشه على المعدن. اقرأ هذه الفجوة أولًا قبل أي شيء، فهي تخبرك كم تكلّفك رحلة ذهاب وعودة عبر هذا المحل بعينه.

الفجوة الضيّقة تدلّ على تاجر كثيف الحركة يتنافس على السعر. والواسعة تدلّ على العكس. وفي معظم الأسواق العربية يكون الفارق المعتاد على عيار 21 السادة بضع نقاط مئوية؛ فإذا اتّسع كثيرًا فتلك معلومة.

ولاحظ أن عمود الشراء **للمعدن فقط**. فإن جئت بقطعة مشغولة دُفع لك على محتوى الذهب — والحرفية لا تظهر في ذلك العمود أبدًا.

## الصفوف

الصفوف عيارات، تنازليًا عادةً: **24 و22 و21 و18**، وأحيانًا 14. وكل عيار نقاء:

| العيار | النقاء | الدمغة |
|---|---|---|
| 24 | 99.9% | 999 |
| 22 | 91.7% | 916 |
| 21 | 87.5% | 875 |
| 18 | 75.0% | 750 |
| 14 | 58.3% | 585 |

ويُفترض أن تتناسب الأسعار مع النقاء. وهذا هو الفحص الذي لا يكاد أحد يجريه، ولا يستغرق خمس ثوانٍ: **عيار 21 ينبغي أن يكون نحو 87.5 ÷ 99.9 = 87.6% من سعر عيار 24.** فإن كان جرام عيار 24 بـ300، فجرام عيار 21 قريب من 263. فإذا خرج صفّ عن تناسبه مع نقائه خروجًا ملحوظًا فاسأل عن السبب — فقد يكون هناك سبب وجيه، كأن يسعّر المحل عيارًا نادرًا لديه، وقد لا يكون.

## ما لا تخبرك به اللوحة

ثلاث تكاليف خارجها تمامًا، وفيها يذهب المال:

- **المصنعية.** ليست على اللوحة، ولا تكاد تُعلَن، وهي قابلة للتفاوض دائمًا. فسعر اللوحة للمعدن.
- **الأحجار.** تُسعَّر منفصلة، ووزنها ليس ذهبًا.
- **الضريبة.** معاملة القيمة المضافة تختلف بحسب البلد، وتُعرض أحيانًا وتُضاف عند الدفع أحيانًا.

ولهذا يختلف سعر اللوحة عن سعر الفاتورة، ولهذا قد يدفع من يقارن أسعار اللوحات وحدها بين محلّين مبلغًا أكبر في المحل الذي بدا أرخص.

## متى حُدِّثت آخر مرّة

اللوحة لقطة ثابتة. والذهب يُتداول باستمرار، فاللوحة المكتوبة التاسعة صباحًا تصير قديمة بعد الظهر في يوم متقلّب. وكثير من المحال تحدّث مرّة يوميًا وتمتصّ حركة اليوم داخل فارقها — وهذه طريقة مشروعة في إدارة محل، وسبب في أن الفارق ليس ربحًا صافيًا.

وفي يوم سريع الحركة، اسأل متى ضُبطت اللوحة. ثم تحقّق من السعر المباشر بنفسك، فتعرف فورًا هل الرقم أمامك حديث أم لا.

## الأسئلة الأربعة

وأنت واقف عند الطاولة، هذه الأسئلة تحوّل اللوحة إلى قرار:

1. **"هل هذا السعر للجرام، ولأي عيار؟"** يزيل أشهر سوء فهم قبل أن يبدأ.
2. **"كم المصنعية على هذه القطعة؟"** فرقم اللوحة زائد هذا الرقم هو ما تدفعه فعلًا.
3. **"متى حُدِّثت اللوحة؟"** يخبرك هل تثق بها اليوم.
4. **"بكم تشتري منّي هذه القطعة نفسها؟"** أكشف سؤال في المحل على الإطلاق. فهو يُظهر الفارق الحقيقي على قطعة بعينها، لا الفارق النظري على اللوحة.

والمحل الذي يجيب عن الأربعة بوضوح محل تستطيع التعامل معه. والتردّد في الرابع يستحق الانتباه.

## استخدام اللوحة وفي جيبك سعر مباشر

اللوحة تقريب محلي يومي لرقم يتحرّك كل ثانية. وأنت تستطيع حمل الرقم الحقيقي. افتح صفحة بلدك على هذا الموقع، وانظر سعر الجرام المباشر لعيار 24 و21 بعملتك، وقارن.

ولست تحاول الإيقاع بالمحل — فسعر التجزئة أعلى من الفوري بحقّ، لكل الأسباب الواردة في دليلنا عن كيف يصل السعر إلى المحل. أنت تحاول معرفة **كم** يعلو، وهو السبيل الوحيد للتمييز بين لوحة عادلة وأخرى منفوخة.

*أسعار الجرام المباشرة لعيار 24 و22 و21 و18 و14، بعملتك، أعلى كل صفحة دولة هنا.*`,
  },
  {
    slug: "why-turkish-gold-prices-move-differently",
    publishedAt: "2026-08-25T09:00:00Z",
    title_en: "Why Turkish Gold Prices Move Differently",
    title_ar: "لماذا تتحرّك أسعار الذهب في تركيا بشكل مختلف",
    description_en:
      "Turkey buys gold by the gram, prices it in a floating currency, and treats it as everyday savings rather than an occasional purchase. Why the lira turns a quiet day in the world gold market into a loud one in Istanbul.",
    description_ar:
      "تركيا تشتري الذهب بالجرام، وتسعّره بعملة عائمة، وتتعامل معه كادّخار يومي لا كشراء عرَضي. لماذا تحوّل الليرة يومًا هادئًا في سوق الذهب العالمية إلى يوم صاخب في إسطنبول.",
    tags: ["turkey", "currency", "market-structure", "education"],
    author: AUTHOR,
    body_en: `Of all the markets this site covers, Turkey is the one that most often confuses readers who follow the world gold price. A reader watches the dollar gold price sit still for a week, then sees the Istanbul gram price make a series of new highs. Nothing is wrong with either number. They are measuring different things.

## The lira does most of the work

Gold is priced in dollars. A Turkish buyer pays in lira. The gram price in Istanbul is therefore the product of two moving parts:

> lira gram price ≈ (dollar ounce price ÷ 31.1035) × purity × USD/TRY rate

When a currency floats and has been under sustained pressure, that last term can dominate everything else. A 5% move in the exchange rate produces a 5% move in the local gold price even if the world gold market did not trade a single dollar differently.

This is the single most important thing to understand about Turkish gold prices, and it generalises: **in any country with a floating currency, the local gold price is partly a gold story and partly a currency story.** Egypt and Pakistan behave the same way. The pegged Gulf currencies do not, which is why a Saudi reader and a Turkish reader can look at the same week and reasonably disagree about whether gold "went up."

## Gold as ordinary savings, not an occasional purchase

Turkey's relationship with gold is unusually deep, and it changes market behaviour.

- **The gram is the unit.** Turkish savers think in grams, buy in grams, and gift in grams. Gram-gold products — small stamped bars in sealed cards — are sold widely, including through banks.
- **Coins have a formal vocabulary.** *Çeyrek* (quarter), *yarım* (half), *tam* (full) and *cumhuriyet* coins are standard gift items at weddings and circumcisions, and their prices are quoted publicly alongside the gram.
- **"Under-the-pillow" gold is a real economic quantity.** Household gold holdings in Turkey are large enough that campaigns to draw them into the banking system are recurring national policy, not a curiosity.

The practical consequence is that Turkish demand responds quickly and visibly to the lira. When confidence in the currency drops, buying gold is a mainstream reflex rather than a specialist trade — and that surge in local demand can widen the **local premium** over the world price, adding a third moving part on top of gold and the exchange rate.

## The Grand Bazaar sets a real price

Istanbul's Kapalıçarşı is not a tourist relic in gold terms; it is a working wholesale market, and its quotes matter. Alongside it, Borsa İstanbul operates a regulated precious metals market. Between them, Turkey produces genuine domestic price discovery rather than a pure import of the London number.

That is why the Turkish domestic price can occasionally diverge from the simple conversion above. When local demand is intense, or when import supply is constrained, the local premium widens and the gram price runs ahead of the arithmetic.

## What this means for a reader comparing countries

If you are comparing the Turkish gram price against a Gulf one, hold three things in mind:

| Factor | Gulf (pegged) | Turkey (floating) |
|---|---|---|
| Currency effect | Negligible | Frequently dominant |
| Dominant retail karat | 21K / 22K | 22K, with heavy 24K gram-gold |
| Local premium volatility | Low | Can widen sharply |
| Typical framing | Jewellery purchase | Savings instrument |

A Turkish price that looks high against a Gulf price on the same day is usually not a mispricing. It is the exchange rate plus a demand-driven premium, expressed in a currency that has moved.

## The honest takeaway

Turkish gold does not protect a saver from a falling world gold price. It protects them from a falling lira — which, over the periods that made gold a national habit, was the risk that actually mattered.

For anyone tracking the market, the discipline is simply to look at both numbers. Watch the dollar ounce price to know what gold did, and the lira gram price to know what your money did. They answer different questions, and confusing them is where most of the frustration comes from.

*Turkey's live gram prices for every karat, in lira, are on this site's Turkey page, alongside the dollar ounce price they derive from — so you can see both halves of the move at once.*`,
    body_ar: `من بين كل الأسواق التي يغطّيها هذا الموقع، تركيا هي الأكثر إرباكًا للقرّاء الذين يتابعون سعر الذهب العالمي. فيرى القارئ سعر الذهب بالدولار ساكنًا أسبوعًا كاملًا، ثم يرى سعر الجرام في إسطنبول يسجّل قممًا متتالية. ولا خطأ في أي من الرقمين، فهما يقيسان شيئين مختلفين.

## الليرة تقوم بمعظم العمل

الذهب مسعَّر بالدولار، والمشتري التركي يدفع بالليرة. فسعر الجرام في إسطنبول إذًا حاصل ضرب جزأين متحرّكين:

> سعر الجرام بالليرة ≈ (سعر الأونصة بالدولار ÷ 31.1035) × النقاء × سعر صرف الدولار/الليرة

وحين تكون العملة عائمة وتحت ضغط ممتدّ، قد يهيمن الحدّ الأخير على كل ما عداه. فحركة 5% في سعر الصرف تُنتج حركة 5% في سعر الذهب المحلي، ولو لم تتداول السوق العالمية دولارًا واحدًا بشكل مختلف.

وهذه أهمّ نقطة في فهم أسعار الذهب التركية، وهي قابلة للتعميم: **في أي بلد بعملة عائمة، سعر الذهب المحلي قصّة ذهب وقصّة عملة معًا.** ومصر وباكستان تسلكان المسلك نفسه. أمّا العملات الخليجية المربوطة فلا، ولهذا قد ينظر قارئ سعودي وقارئ تركي إلى الأسبوع نفسه ويختلفان بحقّ حول ما إذا كان الذهب "قد ارتفع".

## الذهب ادّخار يومي لا شراء عرَضي

علاقة تركيا بالذهب عميقة على نحو غير معتاد، وهي تغيّر سلوك السوق.

- **الجرام هو الوحدة.** فالمدّخر التركي يفكّر بالجرام ويشتري بالجرام ويُهدي بالجرام. ومنتجات "ذهب الجرام" — سبائك صغيرة مختومة في بطاقات محكمة — تُباع على نطاق واسع، بما في ذلك عبر البنوك.
- **للعملات مفردات رسمية.** فـ*چيريك* (رُبع) و*يارِم* (نصف) و*تام* (كامل) وعملات *جمهوريت* هدايا معتادة في الأعراس والختان، وتُنشر أسعارها علنًا إلى جانب سعر الجرام.
- **"ذهب تحت الوسادة" كمّية اقتصادية حقيقية.** فحيازات الأسر من الذهب في تركيا كبيرة إلى حدّ جعل حملات جذبها إلى الجهاز المصرفي سياسة وطنية متكرّرة لا طُرفة.

والنتيجة العملية أن الطلب التركي يستجيب للّيرة بسرعة ووضوح. فحين تهبط الثقة بالعملة، يصير شراء الذهب ردّ فعل جماهيريًا لا صفقة متخصّصين — وهذه القفزة في الطلب المحلي قد توسّع **العلاوة المحلية** فوق السعر العالمي، فيُضاف جزء متحرّك ثالث فوق الذهب وسعر الصرف.

## السوق المسقوف يصنع سعرًا حقيقيًا

سوق كاپالي تشارشي في إسطنبول ليس أثرًا سياحيًا في عالم الذهب؛ بل سوق جملة عاملة، وتسعيراته مؤثّرة. وإلى جانبه تدير بورصة إسطنبول سوقًا منظّمة للمعادن الثمينة. وبينهما تُنتج تركيا اكتشاف سعر محلي حقيقي، لا استيرادًا صرفًا لرقم لندن.

ولهذا قد ينحرف السعر المحلي التركي أحيانًا عن التحويل البسيط أعلاه. فحين يشتدّ الطلب المحلي، أو يضيق عرض الاستيراد، تتّسع العلاوة المحلية ويسبق سعر الجرام الحسبة.

## ماذا يعني هذا لقارئ يقارن بين الدول

إن كنت تقارن سعر الجرام التركي بسعر خليجي، فاحفظ ثلاثة أمور:

| العامل | الخليج (مربوط) | تركيا (عائمة) |
|---|---|---|
| أثر العملة | مهمَل | مهيمن كثيرًا |
| العيار السائد في التجزئة | 21 / 22 | 22، مع ذهب جرام 24 بكثافة |
| تقلّب العلاوة المحلية | منخفض | قد يتّسع بحدّة |
| التأطير المعتاد | شراء مشغولات | أداة ادّخار |

فالسعر التركي الذي يبدو مرتفعًا أمام سعر خليجي في اليوم نفسه ليس تسعيرًا خاطئًا عادةً. بل هو سعر الصرف زائد علاوة يقودها الطلب، معبَّرًا عنها بعملة تحرّكت.

## الخلاصة الصادقة

الذهب التركي لا يحمي المدّخر من هبوط سعر الذهب العالمي، بل يحميه من هبوط الليرة — وهي المخاطرة التي كانت تهمّ فعلًا في الفترات التي جعلت الذهب عادة وطنية.

ولمن يتابع السوق، فالانضباط ببساطة أن ينظر إلى الرقمين معًا: سعر الأونصة بالدولار ليعرف ما فعله الذهب، وسعر الجرام بالليرة ليعرف ما فعله ماله. فهما يجيبان عن سؤالين مختلفين، ومن الخلط بينهما يأتي أكثر الإحباط.

*أسعار الجرام المباشرة في تركيا لكل عيار، بالليرة، على صفحة تركيا في هذا الموقع، إلى جانب سعر الأونصة بالدولار المشتقّة منه — لترى شطرَي الحركة معًا.*`,
  },
];
