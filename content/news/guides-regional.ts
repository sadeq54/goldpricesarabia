import type { Article } from "@/content/news/articles";

/**
 * Regional and practical guides: moving gold across borders, what families
 * actually buy for a wedding, and why the subcontinent's gold market differs
 * from the Gulf's despite serving overlapping populations.
 *
 * Part of the 2026-09-10 content build (see guides-saving.ts for why).
 *
 * The customs piece deliberately gives thresholds as *shapes of rule* rather
 * than hard figures per country: allowances change without notice and a stale
 * number in an article is worse than no number. It sends the reader to the
 * authority instead.
 */

const AUTHOR = {
  name: "Sadeq Sayed Ahmad",
  url: "/about/sadeq",
  image: "/author/sadeq.jpeg",
};

export const REGIONAL_ARTICLES: Article[] = [
  {
    slug: "carrying-gold-across-borders-what-to-know",
    publishedAt: "2026-09-01T09:00:00Z",
    title_en: "Carrying Gold Across Borders: What Travellers Get Wrong",
    title_ar: "حمل الذهب عبر الحدود: ما يُخطئ فيه المسافرون",
    description_en:
      "Worn jewellery, gifts and bullion are treated very differently at customs — and the rules that catch people out are rarely about the gold itself. What to declare, what to document before you fly, and why 'it's personal jewellery' is not always enough.",
    description_ar:
      "الحلي المُلبَسة والهدايا والسبائك تُعامَل معاملة مختلفة تمامًا في الجمارك — والقواعد التي توقع الناس نادرًا ما تتعلّق بالذهب نفسه. ماذا تُصرِّح، وما توثّقه قبل السفر، ولماذا لا تكفي عبارة \"هذه حلي شخصية\" دائمًا.",
    tags: ["travel", "customs", "regulation", "education"],
    author: AUTHOR,
    body_en: `Gold moves across the borders of this region constantly — a bride's set flown from Dubai, a mother's bangles carried to a daughter abroad, coins bought on a trip. Most of it passes without incident. The cases that go wrong usually do so for reasons the traveller never considered, and almost none of them are about the gold being illegal.

*Rules change frequently and differ by nationality, residency and route. Nothing here is a substitute for checking the customs authority of the country you are entering, before you travel. What follows is the shape of the rules, so you know what to look for.*

## Three categories, three treatments

Customs regimes almost everywhere distinguish between:

**1. Personal jewellery you are wearing or carrying for use.** Usually the most permissive category, often with a value or weight allowance for a returning resident or a visitor. The reasoning is that a traveller's own effects are not an import.

**2. Gifts and new purchases.** Treated as goods. This is where allowances bite, and where a receipt matters — a boxed, unworn set with a shop tag is visibly a purchase, not personal effects.

**3. Bullion — coins and bars.** Frequently a separate regime altogether. Some countries restrict it, tax it, or require declaration at any quantity. Do not assume the jewellery allowance covers a bar.

The most common traveller error is assuming category 1 stretches to cover categories 2 and 3. It generally does not.

## The rule that actually catches people

Here is the thing most travellers miss entirely: **gold can trigger currency-declaration rules, not just goods rules.**

Many countries require a declaration when you carry more than a set amount of "cash and monetary instruments," and a number of them include bullion, coins, or gold above a threshold in that definition. The obligation is to **declare**, not to pay — declaring is usually free and takes minutes. Failing to declare is what creates a penalty, and it can be severe even when the gold is entirely legitimately owned.

So the failure mode is rarely "you were not allowed to bring this." It is "you were required to tell us and you did not."

## Before you fly

A few minutes of preparation removes almost all of the risk:

- **Check the destination's customs authority website**, and the transit country's if you change planes. Allowances differ by whether you are a citizen, resident or visitor, and sometimes by how long you have been away.
- **Keep the invoices.** For anything bought recently, carry the receipt showing weight, karat and price. It settles both the value question and the "is this new" question instantly.
- **Photograph pieces you already own**, ideally with a dated valuation or an old receipt. This is what distinguishes your existing jewellery from a fresh purchase.
- **Declare when the threshold is close.** The cost of declaring is a form. The cost of not declaring, when you should have, is not.
- **Do not split a quantity among family members to stay under a limit.** This is structuring, it is well understood by customs officers, and it converts a paperwork question into a serious one.
- **Check the departure side too.** Export restrictions exist as well as import ones, and are easy to forget.

## Practical points on carriage

- **Hand luggage, not hold.** Valuables in checked bags are generally excluded from airline liability, and you cannot present what you cannot reach.
- **Airport security is not customs.** Passing a scanner says nothing about your declaration obligations.
- **Expect to be asked about worn items too.** Wearing a heavy set does not automatically place it outside the rules; it just makes the personal-use argument more credible.
- **Insurance rarely follows you automatically.** Home contents cover may not extend abroad or in transit. Check before assuming.

## Why this matters more in this region

Two features make the question unusually live for our readers.

First, **gold is a normal savings and gifting medium here**, so ordinary families move meaningful quantities across borders for entirely ordinary reasons — a wedding, a move, a gift to relatives abroad.

Second, **price differences between neighbouring markets are real**, which creates a genuine incentive to buy in one country and carry to another. That is legitimate within the allowances. It stops being legitimate when quantities cross the line from personal to commercial, and the line is drawn by the destination country, not by intent.

If you are buying abroad specifically because it is cheaper there, do the arithmetic including any duty you may owe on arrival. Our guide on why neighbouring countries differ explains where those price gaps come from — and a gap that looks large before duty is sometimes not a gap at all afterwards.

*Live per-gram prices for every country we cover are on this site, so you can compare two markets honestly before deciding a trip is worth it.*`,
    body_ar: `ينتقل الذهب عبر حدود هذه المنطقة باستمرار — طقم عروس يُنقل من دبي، وأساور أمّ تُحمل إلى ابنتها في الغربة، وعملات تُشترى في رحلة. ومعظمه يمرّ دون حادثة. أمّا الحالات التي تتعثّر فتتعثّر غالبًا لأسباب لم تخطر للمسافر أصلًا، ولا يكاد أيٌّ منها يتعلّق بكون الذهب ممنوعًا.

*القواعد تتغيّر كثيرًا وتختلف بحسب الجنسية والإقامة وخط الرحلة. ولا شيء هنا يغني عن مراجعة هيئة الجمارك في البلد الذي تدخله قبل السفر. وما يلي هو شكل القواعد، لتعرف عمّا تبحث.*

## ثلاث فئات، وثلاث معاملات

تفرّق أنظمة الجمارك في معظم الدول بين:

**1. الحلي الشخصية التي ترتديها أو تحملها للاستعمال.** وهي الفئة الأيسر عادةً، ولها في الغالب حدّ بالقيمة أو الوزن للمقيم العائد أو للزائر. والعلّة أن متاع المسافر الشخصي ليس استيرادًا.

**2. الهدايا والمشتريات الجديدة.** وتُعامَل معاملة البضائع. وهنا تعضّ الحدود، وهنا تهمّ الفاتورة — فالطقم المعلَّب غير المستعمل ببطاقة المحل يظهر بوضوح أنه شراء لا متاع شخصي.

**3. السبائك — العملات والسبائك.** وكثيرًا ما تكون نظامًا منفصلًا تمامًا. فبعض الدول تقيّدها أو تفرض عليها ضريبة أو تشترط التصريح عند أي كمّية. لا تفترض أن حدّ الحلي يشمل سبيكة.

وأشهر أخطاء المسافرين افتراض أن الفئة الأولى تمتدّ لتغطّي الثانية والثالثة. وهي لا تفعل عمومًا.

## القاعدة التي توقع الناس فعلًا

وهذا ما يفوت معظم المسافرين تمامًا: **الذهب قد يُفعِّل قواعد التصريح عن النقد، لا قواعد البضائع فحسب.**

فكثير من الدول توجب التصريح عند حمل أكثر من مبلغ محدّد من "النقد والأدوات النقدية"، وعدد منها يُدخل السبائك أو العملات أو الذهب فوق حدّ معيّن في هذا التعريف. والواجب هو **التصريح** لا الدفع — والتصريح مجاني عادةً ويستغرق دقائق. أمّا عدم التصريح فهو ما يُنشئ العقوبة، وقد تكون شديدة حتى لو كان الذهب مملوكًا ملكية مشروعة تمامًا.

فصورة الفشل نادرًا ما تكون "لم يكن مسموحًا لك بإحضار هذا"، بل "كان عليك إخبارنا فلم تفعل".

## قبل السفر

دقائق من التحضير تزيل معظم المخاطرة:

- **راجع موقع هيئة الجمارك في بلد الوصول**، وبلد الترانزيت إن كنت تغيّر طائرة. فالحدود تختلف بحسب كونك مواطنًا أو مقيمًا أو زائرًا، وأحيانًا بحسب مدّة غيابك.
- **احتفظ بالفواتير.** ولأي شيء اشتريته حديثًا، احمل الإيصال الذي يبيّن الوزن والعيار والسعر. فهو يحسم مسألة القيمة ومسألة "هل هذا جديد" فورًا.
- **صوّر القطع التي تملكها من قبل**، ويُفضَّل مع تقويم مؤرَّخ أو إيصال قديم. فهذا ما يميّز حليّك القائم عن شراء جديد.
- **صرِّح إذا اقتربت من الحدّ.** فكلفة التصريح استمارة، وكلفة عدم التصريح حين يجب ليست كذلك.
- **لا توزّع الكمّية على أفراد الأسرة للبقاء تحت الحدّ.** فهذه تجزئة، ورجال الجمارك يعرفونها جيدًا، وهي تحوّل مسألة أوراق إلى مسألة خطيرة.
- **تحقّق من جهة المغادرة أيضًا.** فقيود التصدير موجودة كقيود الاستيراد، ويسهل نسيانها.

## أمور عملية في الحمل

- **حقيبة اليد لا المشحونة.** فالنفائس في الحقائب المشحونة مستثناة عمومًا من مسؤولية شركة الطيران، ولا تستطيع إبراز ما لا تصل إليه.
- **تفتيش المطار ليس الجمارك.** فمرورك من جهاز المسح لا يقول شيئًا عن واجبات التصريح.
- **توقّع السؤال عن المرتديات أيضًا.** فارتداء طقم ثقيل لا يضعه تلقائيًا خارج القواعد، وإنما يجعل حجّة الاستعمال الشخصي أقرب للتصديق.
- **التأمين نادرًا ما يتبعك تلقائيًا.** فتغطية محتويات المنزل قد لا تمتدّ للخارج ولا للترانزيت. تحقّق قبل أن تفترض.

## لماذا يهمّ هذا في منطقتنا أكثر

سِمتان تجعلان المسألة حيّة على نحو غير معتاد لقرّائنا.

الأولى أن **الذهب وسيط ادّخار وإهداء عادي هنا**، فتنقل أسر عادية كمّيات معتبرة عبر الحدود لأسباب عادية تمامًا — عرس، أو انتقال، أو هدية لأقارب في الخارج.

والثانية أن **فروق الأسعار بين الأسواق المتجاورة حقيقية**، وهو ما يخلق حافزًا فعليًا للشراء في بلد والحمل إلى آخر. وهذا مشروع ضمن الحدود المسموحة، ويتوقّف عن كونه مشروعًا حين تعبر الكمّيات الخطّ من الشخصي إلى التجاري، والخطّ يرسمه بلد الوصول لا نيّتك أنت.

فإن كنت تشتري في الخارج لأنه أرخص هناك تحديدًا، فأجرِ الحساب شاملًا أي رسم قد يترتّب عليك عند الوصول. ودليلنا عن اختلاف الدول المتجاورة يشرح من أين تأتي تلك الفجوات — وفجوة تبدو كبيرة قبل الرسوم قد لا تكون فجوة أصلًا بعدها.

*أسعار الجرام المباشرة لكل دولة نغطّيها موجودة على هذا الموقع، لتقارن بين سوقين بصدق قبل أن تقرّر أن الرحلة تستحق.*`,
  },
  {
    slug: "wedding-gold-what-families-actually-buy",
    publishedAt: "2026-09-05T09:00:00Z",
    title_en: "Wedding Gold: What Families Actually Buy",
    title_ar: "ذهب العرس: ما تشتريه العائلات فعلًا",
    description_en:
      "The shabka is the largest single gold purchase most families ever make. What is customary in different markets, how to budget it against a live gram price, and the choices that hold value versus the ones that do not.",
    description_ar:
      "الشبكة أكبر عملية شراء ذهب تقوم بها معظم العائلات في حياتها. ما هو المعتاد في الأسواق المختلفة، وكيف توازن ميزانيتها مع سعر جرام مباشر، والخيارات التي تحفظ قيمتها من التي لا تحفظها.",
    tags: ["wedding", "shabka", "buying-guide", "culture"],
    author: AUTHOR,
    body_en: `For most families in this region, the wedding set — the **shabka** — is the largest single gold purchase they will ever make. It is also the one made under the most time pressure, the most social observation, and the least price research. That combination is expensive.

None of what follows is an argument against tradition. It is an argument for walking into the shop knowing the numbers.

## What the shabka is, and is not

The shabka is gold given by the groom's family to the bride, presented before the wedding. Its cultural role is layered: a gift, a public statement of commitment, and — importantly — **property that belongs to the bride**. In much of the region it functions as her own financial security, legally hers regardless of what follows.

That last point is the reason the resale characteristics of the set genuinely matter. This is not only jewellery. For many women it is the only substantial asset in their own name, and how it was bought determines what it is worth if she ever needs it.

## What is customary varies more than people assume

There is no single regional standard, and the differences are large:

- **Gulf markets** — typically 21K or 22K, often a substantial multi-piece set: necklace, bracelet, ring, earrings. Weight expectations are high, and 24K pieces appear more often than elsewhere.
- **Egypt** — historically 21K, with 18K taking meaningful share as prices rose; the shift is significant enough that we wrote a separate piece on it. Sets are often lighter than Gulf equivalents but more worked.
- **Levant (Jordan, Syria, Lebanon)** — 21K dominant, with strong preference for pieces that read as substantial.
- **North Africa (Morocco, Tunisia, Libya)** — 18K is far more common than in the Mashriq, and local craft traditions carry real premiums.
- **Turkey** — bracelets and coins by the gram alongside jewellery; gifting *çeyrek* and *tam* coins at the ceremony is standard.

If you are marrying across markets — increasingly common — agree explicitly on which convention applies. A family expecting a Gulf-weight 21K set and a family planning a Moroccan 18K set are not disagreeing about generosity; they are using different units.

## Budgeting it properly

The mistake is budgeting in **pieces** rather than in **grams and karats**. "A full set" means nothing until it has a weight.

Do it in this order:

1. **Fix the total budget** in your currency, honestly, before entering any shop.
2. **Look up today's gram price** for the karat you intend to buy.
3. **Divide** to get the gold weight your budget buys, then reduce it by the expected making charge — 10–25% is a realistic range for worked wedding pieces.
4. **That weight is your target.** Now shop for a set that hits it, rather than being shown pieces and working backwards.

A worked illustration, using a 21K gram price of 400 units:

| Budget | Gold value after ~20% making | Weight you can expect |
|---|---|---|
| 40,000 | 33,300 | ~83 g |
| 60,000 | 50,000 | ~125 g |
| 100,000 | 83,300 | ~208 g |

Walking in with "we are looking for about 120 grams of 21K, what can you show us" is an entirely different conversation from "what do you have."

## The choices that hold value

Given that the set is partly financial security, some choices matter more than they appear:

- **Plain and heavy beats worked and light**, if resale is a consideration. Craftsmanship is not paid back on resale — the piece is valued as metal.
- **Ask for the making charge separately.** On a large purchase, a few percentage points is a serious sum, and it is the negotiable part.
- **Weigh every piece at the counter.** Reputable shops expect this and have a calibrated scale.
- **Keep the invoices**, with weight and karat per piece. They matter for insurance, for customs if the set ever travels, and for any future sale.
- **Consider a few coins alongside the set.** Bullion coins carry far lower premiums than worked jewellery, and some families now split the shabka — jewellery to wear, coins to hold. It is a quietly sensible practice.

## The conversation worth having

The most useful thing a family can do is separate two questions that usually get merged: *what should the set look like*, and *what should it be worth*. The first is culture and taste, and the shop is the right place for it. The second is arithmetic, and it should be settled at home, with a live gram price in front of you.

*Every country page on this site shows the current per-gram price for 24, 22, 21 and 18 karat in the local currency — the number to budget against before anyone visits a showroom.*`,
    body_ar: `بالنسبة لمعظم العائلات في هذه المنطقة، طقم العرس — **الشبكة** — هو أكبر عملية شراء ذهب تقوم بها في حياتها. وهو أيضًا الشراء الذي يجري تحت أشدّ ضغط زمني، وأكثر مراقبة اجتماعية، وأقلّ بحث في الأسعار. وهذا المزيج مكلف.

ولا شيء ممّا يلي حجّة ضد العادة، بل حجّة لأن تدخل المحل وأنت تعرف الأرقام.

## ما هي الشبكة وما ليست هي

الشبكة ذهب تقدّمه أسرة العريس للعروس قبل الزفاف. ودورها الثقافي متعدّد الطبقات: هدية، وإعلان علني للالتزام، و— وهذا مهم — **ملك خاص بالعروس**. وفي كثير من المنطقة تعمل بوصفها أمانها المالي الخاص، ملكًا لها شرعًا مهما جرى بعد ذلك.

وهذه النقطة الأخيرة هي سبب أهمية خصائص إعادة بيع الطقم أهميةً حقيقية. فالأمر ليس حليًّا فحسب. فلكثير من النساء هو الأصل الوحيد المعتبر باسمهنّ، وطريقة شرائه تحدّد ما يساويه إن احتجن إليه يومًا.

## المعتاد يختلف أكثر ممّا يُظنّ

لا يوجد معيار إقليمي واحد، والفروق كبيرة:

- **الأسواق الخليجية** — عيار 21 أو 22 عادةً، وغالبًا طقم متعدّد القطع كبير: عقد وإسورة وخاتم وأقراط. وتوقّعات الوزن عالية، وتظهر قطع عيار 24 أكثر من غيرها.
- **مصر** — عيار 21 تاريخيًا، مع حصّة معتبرة لعيار 18 مع ارتفاع الأسعار؛ والتحوّل كبير إلى حدّ أفردنا له مقالًا مستقلًا. والأطقم أخفّ من نظيرتها الخليجية غالبًا لكنها أكثر شغلًا.
- **بلاد الشام (الأردن وسوريا ولبنان)** — عيار 21 هو الغالب، مع تفضيل قوي للقطع التي تبدو ذات حضور.
- **شمال أفريقيا (المغرب وتونس وليبيا)** — عيار 18 أشيع بكثير منه في المشرق، وللتقاليد الحرفية المحلية علاوات حقيقية.
- **تركيا** — أساور وعملات بالجرام إلى جانب المشغولات؛ وإهداء عملات *چيريك* و*تام* في الحفل أمر معتاد.

وإن كان الزواج عابرًا للأسواق — وهو يزداد — فاتّفقوا صراحةً على العرف المعتمد. فالأسرة التي تتوقّع طقم عيار 21 بوزن خليجي والأسرة التي تخطّط لطقم عيار 18 مغربي لا تختلفان على الكرم، بل تستخدمان وحدتين مختلفتين.

## ضبط الميزانية كما ينبغي

الخطأ هو وضع الميزانية بـ**القطع** لا بـ**الجرامات والعيارات**. فعبارة "طقم كامل" لا تعني شيئًا حتى يكون لها وزن.

افعلها بهذا الترتيب:

1. **حدّد الميزانية الإجمالية** بعملتك، بصدق، قبل دخول أي محل.
2. **ابحث عن سعر الجرام اليوم** للعيار الذي تنوي شراءه.
3. **اقسم** لتحصل على وزن الذهب الذي تشتريه ميزانيتك، ثم اخصم المصنعية المتوقّعة — و10–25% نطاق واقعي لقطع الأعراس المشغولة.
4. **هذا الوزن هو هدفك.** والآن ابحث عن طقم يبلغه، بدل أن تُعرض عليك القطع فتحسب بالعكس.

مثال توضيحي، بسعر جرام عيار 21 قدره 400 وحدة:

| الميزانية | قيمة الذهب بعد مصنعية ~20% | الوزن المتوقّع |
|---|---|---|
| 40,000 | 33,300 | ~83 جم |
| 60,000 | 50,000 | ~125 جم |
| 100,000 | 83,300 | ~208 جم |

والدخول بعبارة "نبحث عن نحو 120 جرامًا عيار 21، ماذا لديكم" حديث مختلف تمامًا عن "ماذا عندكم".

## الخيارات التي تحفظ قيمتها

ولأن الطقم أمان مالي جزئيًا، فبعض الخيارات أهمّ ممّا تبدو:

- **السادة الثقيل خير من المشغول الخفيف** إن كانت إعادة البيع في الحسبان. فالحرفية لا تُردّ عند البيع — إذ تُقوَّم القطعة معدنًا.
- **اطلب المصنعية منفصلة.** ففي شراء كبير، تكون بضع نقاط مئوية مبلغًا جادًّا، وهي الجزء القابل للتفاوض.
- **زِن كل قطعة عند الطاولة.** فالمحال المحترمة تتوقّع ذلك ولديها ميزان معايَر.
- **احتفظ بالفواتير** مع الوزن والعيار لكل قطعة. فهي تهمّ للتأمين، وللجمارك إن سافر الطقم يومًا، ولأي بيع مستقبلي.
- **فكّر في بضع عملات إلى جانب الطقم.** فالعملات السبائكية تحمل علاوات أدنى بكثير من المشغولات، وبعض العائلات صارت تقسّم الشبكة — مشغولات للُّبس وعملات للحفظ. وهي ممارسة عاقلة بهدوء.

## الحوار الذي يستحق أن يدور

أنفع ما تفعله أسرة هو الفصل بين سؤالين يُدمجان عادةً: *كيف ينبغي أن يبدو الطقم*، و*كم ينبغي أن يساوي*. الأول ثقافة وذوق، والمحل مكانه الصحيح. والثاني حساب، ومكانه البيت، وأمامك سعر جرام مباشر.

*كل صفحة دولة على هذا الموقع تعرض سعر الجرام الحالي لعيار 24 و22 و21 و18 بالعملة المحلية — وهو الرقم الذي تُبنى عليه الميزانية قبل أن يزور أحد أي معرض.*`,
  },
  {
    slug: "why-subcontinent-gold-differs-from-the-gulf",
    publishedAt: "2026-09-09T09:00:00Z",
    title_en: "Why Indian and Pakistani Gold Differs From the Gulf",
    title_ar: "لماذا يختلف ذهب الهند وباكستان عن ذهب الخليج",
    description_en:
      "Two markets that share workers, families and flight routes price gold quite differently. Import duty, the 22K tradition, hallmarking regimes and tola weights — what actually separates a Mumbai price from a Dubai one.",
    description_ar:
      "سوقان يتشاركان العمالة والعائلات وخطوط الطيران، ومع ذلك يسعّران الذهب على نحو مختلف. رسوم الاستيراد، وتقليد عيار 22، وأنظمة الدمغ، ووحدة التولة — ما الذي يفصل فعلًا سعر مومباي عن سعر دبي.",
    tags: ["india", "pakistan", "gulf", "market-structure"],
    author: AUTHOR,
    body_en: `Millions of people move between the Gulf and the subcontinent, and a great many of them buy gold on both sides. They notice quickly that the two markets do not behave alike — different karats on the board, different weight units, and a persistent price gap that is not explained by the world gold price. Here is what actually drives it.

## Import duty is the largest single factor

The Gulf states are, broadly, low-duty gold markets. Dubai's position as a bullion hub was built on exactly that: metal moves in and out with minimal friction, and the retail price sits close to the world price plus a modest local premium.

India is the opposite case by policy. Gold is a major import and a significant drain on the country's external accounts, so import duty has long been used as a lever to manage demand. That duty is passed straight through to the retail price, and it is the main reason a gram in Mumbai costs more than a gram in Dubai on the same day.

The rate has changed repeatedly over the years — sometimes sharply, in both directions — which is why we do not quote a figure here that will be stale within months. What is stable is the **mechanism**: India's gold price includes a policy component that the Gulf's does not.

Pakistan sits between the two in structure but shares a second factor with India that the Gulf largely escapes: a **floating currency**. When the rupee moves against the dollar, the local gold price moves with it regardless of what gold did.

## 22K versus 21K

The Gulf and the Levant buy predominantly **21K** (875). The subcontinent buys predominantly **22K** (916).

This is not a small stylistic difference. It changes:

- **The price you compare.** A 22K gram is 91.7% gold; a 21K gram is 87.5%. Comparing them directly overstates the gap by about 5% before anything else is considered.
- **What resells easily.** A 21K piece taken to an Indian jeweller is bought as metal at its own purity, not at 22K. Nothing is lost in value terms, but expectations sometimes are.
- **The hallmark you should look for.** 916 in India and Pakistan; 875 in most Arab markets.

There is also a strong **24K** presence in the subcontinent for investment — coins and bars — and 18K has grown in urban Indian retail for lighter, stone-set, everyday pieces.

## Hallmarking is a genuine regulatory difference

India operates a mandatory hallmarking regime under the **Bureau of Indian Standards (BIS)**, with a unique identification number on hallmarked articles. This is a consumer-protection system with real enforcement behind it, and it means an Indian buyer can verify purity in a way that is not universally available elsewhere in the region.

Gulf markets have their own testing and assay arrangements — Dubai's, in particular, is well developed — but the specific regime, the marks used, and what is legally required differ. When buying across markets, look for the mark used *in that market* rather than the one you are used to.

Our guide on reading a gold hallmark covers the marks themselves in detail.

## Tola, and other unit traps

The subcontinent uses the **tola** alongside the gram, particularly in Pakistan and in traditional Indian retail. One tola is approximately **11.6638 grams**.

That number matters. A price quoted per tola is roughly 11.66× a per-gram price, and a reader who mentally treats a tola as "about 10 grams" will misjudge by around 17%. Pakistani gold prices are very commonly quoted per tola.

Also in circulation: the **masha** and **ratti** in older usage, and **bhori** in Bangladesh, equal to the tola.

## Reading the gap honestly

If you want to compare a subcontinental price against a Gulf one properly:

| Step | Why |
|---|---|
| Convert to the same weight unit | Tola ≠ gram; ounce ≠ tola |
| Convert to the same purity | 916 vs 875 is a ~5% difference |
| Convert to the same currency at today's rate | The floating-currency effect |
| Then compare | What remains is duty, tax and local premium |

Most of the "shocking" price gaps people report between Dubai and Karachi or Mumbai shrink substantially once the first three steps are done. What survives is real — and it is mostly policy: duty and tax.

## The practical implication for travellers

Because a genuine gap survives, buying in the Gulf and carrying to the subcontinent is a well-worn idea. It is legitimate within customs allowances and a problem outside them — and the duty you may owe on arrival can erase the saving entirely. Our guide on carrying gold across borders covers what to check before assuming a trip pays for itself.

*This site carries live per-gram prices for India, Pakistan and every Gulf market in their own currencies, so the first three rows of that table are already done for you.*`,
    body_ar: `يتنقّل ملايين الناس بين الخليج وشبه القارة الهندية، وكثير منهم يشترون الذهب على الجانبين. ويلاحظون سريعًا أن السوقين لا تتصرّفان تصرّفًا واحدًا — عيارات مختلفة على اللوحة، ووحدات وزن مختلفة، وفجوة سعرية ثابتة لا يفسّرها سعر الذهب العالمي. وإليك ما يحرّكها فعلًا.

## رسوم الاستيراد هي العامل الأكبر منفردًا

دول الخليج عمومًا أسواق ذهب منخفضة الرسوم. وقد بُني موقع دبي كمركز للسبائك على ذلك بالضبط: المعدن يدخل ويخرج باحتكاك أدنى، وسعر التجزئة قريب من السعر العالمي زائد علاوة محلية متواضعة.

أمّا الهند فالحالة المقابلة بحكم السياسة. فالذهب واردات كبرى واستنزاف معتبر لحسابات البلاد الخارجية، ولذا استُخدم رسم الاستيراد طويلًا أداةً لإدارة الطلب. وهذا الرسم يُمرَّر مباشرةً إلى سعر التجزئة، وهو السبب الرئيس في أن الجرام في مومباي أغلى من الجرام في دبي في اليوم نفسه.

وقد تغيّر المعدّل مرارًا عبر السنين — وبحدّة أحيانًا، وفي الاتجاهين — ولهذا لا نذكر هنا رقمًا سيصير قديمًا خلال أشهر. والثابت هو **الآلية**: سعر الذهب في الهند يتضمّن مكوّنًا سياسيًا لا يتضمّنه سعر الخليج.

وتقع باكستان بين الاثنين بنيويًا، لكنها تشارك الهند عاملًا ثانيًا ينجو منه الخليج غالبًا: **عملة عائمة**. فحين تتحرّك الروبية أمام الدولار، يتحرّك سعر الذهب المحلي معها بصرف النظر عمّا فعله الذهب.

## عيار 22 مقابل عيار 21

الخليج والشام يشتريان **عيار 21** (875) في الأغلب. وشبه القارة تشتري **عيار 22** (916) في الأغلب.

وهذا ليس فرقًا أسلوبيًا صغيرًا، بل يغيّر:

- **السعر الذي تقارنه.** فجرام عيار 22 ذهبه 91.7%، وجرام عيار 21 ذهبه 87.5%. ومقارنتهما مباشرةً تضخّم الفجوة بنحو 5% قبل النظر في أي شيء آخر.
- **ما يُعاد بيعه بسهولة.** فقطعة عيار 21 تُحمل إلى صائغ هندي تُشترى معدنًا بنقائها هي لا بنقاء عيار 22. ولا شيء يُفقد من حيث القيمة، لكن التوقّعات تُفقد أحيانًا.
- **الدمغة التي تبحث عنها.** 916 في الهند وباكستان، و875 في معظم الأسواق العربية.

وثمّة حضور قوي لـ**عيار 24** في شبه القارة للاستثمار — عملات وسبائك — كما نما عيار 18 في تجزئة المدن الهندية للقطع الأخفّ المرصّعة للاستعمال اليومي.

## الدمغ فرق تنظيمي حقيقي

تدير الهند نظام دمغ إلزاميًا تحت **هيئة المواصفات الهندية (BIS)**، برقم تعريف فريد على المصوغات المدموغة. وهو نظام لحماية المستهلك وراءه إنفاذ حقيقي، ويعني أن المشتري الهندي يستطيع التحقّق من النقاء بطريقة ليست متاحة في كل مكان في المنطقة.

ولأسواق الخليج ترتيباتها في الفحص والعيار — ودبي على وجه الخصوص متقدّمة فيها — لكن النظام بعينه، والعلامات المستخدمة، وما هو مطلوب قانونًا، كلها تختلف. فعند الشراء عبر الأسواق، ابحث عن العلامة المستخدمة *في تلك السوق* لا التي اعتدتها.

ودليلنا عن قراءة دمغة الذهب يغطّي العلامات نفسها بالتفصيل.

## التولة، ومصائد الوحدات الأخرى

تستخدم شبه القارة **التولة** إلى جانب الجرام، خصوصًا في باكستان وفي التجزئة الهندية التقليدية. والتولة الواحدة نحو **11.6638 جرامًا**.

وهذا الرقم مهم. فالسعر المذكور للتولة يعادل تقريبًا 11.66 ضعف سعر الجرام، ومن يعامل التولة ذهنيًا على أنها "نحو 10 جرامات" يُخطئ بنحو 17%. وأسعار الذهب الباكستانية تُذكر للتولة في الغالب الأعمّ.

ومتداول أيضًا: **الماشة** و**الرتّي** في الاستعمال القديم، و**البهوري** في بنغلاديش، وهي تعادل التولة.

## قراءة الفجوة بصدق

إن أردت مقارنة سعر في شبه القارة بسعر خليجي مقارنة صحيحة:

| الخطوة | السبب |
|---|---|
| وحّد وحدة الوزن | التولة ≠ الجرام، والأونصة ≠ التولة |
| وحّد النقاء | 916 مقابل 875 فرق نحو 5% |
| وحّد العملة بسعر اليوم | أثر العملة العائمة |
| ثم قارن | ما يتبقّى هو الرسوم والضريبة والعلاوة المحلية |

ومعظم الفجوات "الصادمة" التي يذكرها الناس بين دبي وكراتشي أو مومباي تتقلّص كثيرًا بعد إتمام الخطوات الثلاث الأولى. وما ينجو منها حقيقي — وهو في معظمه سياسة: رسوم وضريبة.

## الأثر العملي للمسافرين

ولأن فجوة حقيقية تنجو، فإن الشراء في الخليج والحمل إلى شبه القارة فكرة مطروقة. وهي مشروعة ضمن حدود الجمارك، ومشكلة خارجها — والرسم الذي قد يترتّب عليك عند الوصول قد يمحو الوفر كله. ودليلنا عن حمل الذهب عبر الحدود يغطّي ما ينبغي التحقّق منه قبل افتراض أن الرحلة تسدّد كلفتها.

*هذا الموقع يحمل أسعار الجرام المباشرة للهند وباكستان وكل سوق خليجية بعملاتها، فتكون الصفوف الثلاثة الأولى من ذلك الجدول منجزة لك سلفًا.*`,
  },
];
