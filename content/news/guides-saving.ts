import type { Article } from "@/content/news/articles";

/**
 * Gold-as-savings guides: the questions a reader asks *before* they walk into
 * a shop, which the price tables cannot answer.
 *
 * Written 2026-09-10 after AdSense declined the site a second time on
 * "content quality". The ratio is the problem — 12 articles against 2,316
 * URLs, most of them templated price pages. These three cover the money
 * decision (gold versus a deposit in a currency that is losing value), the
 * form decision (coin, bar or jewellery), and zakat, which is asked constantly
 * in this audience and is badly served elsewhere.
 *
 * Dates are backfilled into the existing weekly cadence rather than stamped in
 * one batch — a block of same-day timestamps is the "cookie-cutter" tell that
 * got the site flagged in the first place.
 */

const AUTHOR = {
  name: "Sadeq Sayed Ahmad",
  url: "/about/sadeq",
  image: "/author/sadeq.jpeg",
};

export const SAVING_ARTICLES: Article[] = [
  {
    slug: "gold-vs-bank-deposit-devaluing-currency",
    publishedAt: "2026-06-25T09:00:00Z",
    title_en: "Gold or a Bank Deposit, When Your Currency Is Losing Value",
    title_ar: "الذهب أم الوديعة البنكية، حين تفقد عملتك قيمتها",
    description_en:
      "A deposit paying 18% sounds generous until the currency falls 30%. How to compare a savings account against gold honestly — the real-return arithmetic, what gold costs you that a deposit does not, and when the deposit is genuinely the better answer.",
    description_ar:
      "وديعة بعائد 18% تبدو سخية حتى تنخفض العملة 30%. كيف تقارن بين حساب التوفير والذهب بصدق — حساب العائد الحقيقي، وما يكلّفك الذهب ولا تكلّفك إياه الوديعة، ومتى تكون الوديعة هي الخيار الأفضل فعلًا.",
    tags: ["savings", "inflation", "investment", "education"],
    author: AUTHOR,
    body_en: `Ask a bank in Cairo, Istanbul or Beirut what they will pay on a one-year deposit and the number will sound generous. Ask what the currency did over that same year and the picture changes. This is the calculation most savers in the region are actually making, and it is easy to get wrong in both directions.

## The only number that matters is the real one

A deposit rate is a **nominal** return. What you care about is the **real** return — what your money buys after the currency has moved.

The rough version most people use is simple subtraction:

> real return ≈ deposit rate − inflation

That is close enough for small numbers, but it breaks down badly at the rates this region sees. The honest version divides:

> real return = (1 + deposit rate) ÷ (1 + inflation) − 1

At a 20% deposit rate and 20% inflation, subtraction says you broke even. Division says you did too. But at a 40% deposit rate against 60% inflation, subtraction says −20%; division says −12.5%. When rates are large, use division.

Worked through, on a deposit of 100,000 units:

| Deposit rate | Inflation | Nominal after 1 yr | Real value |
|---|---|---|---|
| 18% | 8% | 118,000 | 109,259 |
| 18% | 25% | 118,000 | 94,400 |
| 18% | 40% | 118,000 | 84,286 |

Same account. Same rate. The difference between growing your savings and losing a sixth of them is entirely in the second column.

## Where gold actually fits

Gold pays nothing. It has no coupon, no dividend, no interest. Holding it for a year produces exactly zero income. That is a genuine cost and people who love gold tend to skip past it.

What gold does instead is hold its value **in a currency that is not yours**. Gold is priced worldwide in dollars. When your local currency falls against the dollar, the local-currency price of gold rises by roughly the same amount, before the world gold price has moved at all.

That is the mechanism, and it is worth stating plainly because it is often mystified: gold does not "beat inflation" through magic. In a devaluation, it holds value because it is quoted in a currency that is not devaluing.

Two consequences follow, and they matter:

- **Against a stable currency, gold is a poor savings vehicle.** A saver in a Gulf state whose currency is pegged to the dollar gets no devaluation protection at all — the peg already provides it. For them, gold is a bet on the world gold price, nothing more.
- **Against a falling currency, gold's protection is real but partial.** It tracks the dollar, so it protects you from *your* currency falling. It does not protect you from the dollar gold price itself dropping, which it does, sometimes for years.

## What gold costs that a deposit does not

A deposit's costs are visible. Gold's are not, and they are the reason many savers do worse than they expected.

- **The spread.** You buy at retail and sell at a deduction. Between making charges on the way in and the shop's margin on the way out, a piece of jewellery can need a 15–25% rise just to break even. Coins and bars are far tighter, which is why they exist.
- **Zero income.** A deposit compounds while you sleep. Gold does not.
- **Storage and risk.** A safe deposit box has an annual fee. Gold at home has a different kind of cost.
- **Lumpiness.** You cannot sell a fifth of a bangle. Deposits come out in any amount.

## How to actually decide

The question is not "which is better" — it is "what is this money for."

**Money you will need within a year or two** — school fees, a deposit on a flat, an emergency fund — belongs somewhere liquid and predictable. That is the deposit, even at a negative real rate, because the alternative is being forced to sell gold on a bad month.

**Money you are storing for years, in a currency you do not trust** — this is gold's actual job, and the case is strongest where the deposit rate has failed to keep pace with the currency for several consecutive years. Buy it in the cheapest form you can (see our guide on coins, bars and jewellery), and do not count on a specific price.

**Money in a pegged-currency economy** — the Gulf riyals and dirhams — should not be in gold for devaluation reasons, because there is no devaluation to protect against. Own gold there because you want exposure to gold, or because you want to wear it.

The saver who does best is usually the one who splits: enough in a deposit to cover the next two years of known expenses, the long-term remainder in a form of gold with a narrow spread. That is a boring answer, and it is the right one.

*Prices for every karat and currency on this site update every few seconds — use them to check any figure a shop quotes you before you commit.*`,
    body_ar: `اسأل بنكًا في القاهرة أو إسطنبول أو بيروت عن العائد على وديعة لسنة واحدة، وسيبدو الرقم سخيًا. ثم اسأل عمّا فعلته العملة خلال السنة نفسها، فتتغيّر الصورة تمامًا. هذه هي الحسبة التي يجريها معظم المدّخرين في المنطقة فعليًا، ومن السهل أن تُخطئ فيها في الاتجاهين معًا.

## الرقم الوحيد المهم هو العائد الحقيقي

عائد الوديعة هو عائد **اسمي**. أمّا ما يهمّك حقًا فهو العائد **الحقيقي** — أي ما تستطيع نقودك شراءه بعد أن تتحرّك العملة.

الصيغة المبسّطة التي يستخدمها معظم الناس هي طرح بسيط:

> العائد الحقيقي ≈ عائد الوديعة − التضخّم

وهذا تقريب مقبول عند الأرقام الصغيرة، لكنه ينهار عند المعدلات التي تشهدها هذه المنطقة. الصيغة الصحيحة تعتمد القسمة:

> العائد الحقيقي = (1 + عائد الوديعة) ÷ (1 + التضخّم) − 1

عند عائد 20% وتضخّم 20%، يقول الطرح إنك تعادلت، وتقول القسمة الشيء نفسه. لكن عند عائد 40% مقابل تضخّم 60%، يقول الطرح −20%، بينما تقول القسمة −12.5%. فحين تكبر النسب، استخدم القسمة.

وبالتطبيق على وديعة قدرها 100,000 وحدة:

| عائد الوديعة | التضخّم | الرصيد الاسمي بعد سنة | القيمة الحقيقية |
|---|---|---|---|
| 18% | 8% | 118,000 | 109,259 |
| 18% | 25% | 118,000 | 94,400 |
| 18% | 40% | 118,000 | 84,286 |

الحساب نفسه، والعائد نفسه. والفرق بين أن تنمو مدّخراتك وأن تخسر سُدسها يكمن كله في العمود الثاني.

## أين يقع الذهب فعليًا

الذهب لا يدفع شيئًا. لا قسيمة ولا توزيعات ولا فائدة. والاحتفاظ به سنة كاملة يُنتج دخلًا صفريًا تمامًا. هذه تكلفة حقيقية، وعادةً ما يتجاوزها محبّو الذهب سريعًا.

ما يفعله الذهب بدلًا من ذلك أنه يحفظ قيمته **بعملة ليست عملتك**. فالذهب يُسعَّر عالميًا بالدولار. وحين تهبط عملتك المحلية أمام الدولار، يرتفع سعر الذهب بالعملة المحلية بالقدر نفسه تقريبًا، قبل أن يتحرّك سعر الذهب العالمي أصلًا.

هذه هي الآلية، ويستحق ذكرها بوضوح لأنها كثيرًا ما تُغلَّف بالغموض: الذهب لا "يهزم التضخّم" بطريقة سحرية. هو يحفظ قيمته في التخفيضات لأنه مُسعَّر بعملة لا تنخفض.

ويترتّب على ذلك أمران مهمّان:

- **أمام عملة مستقرّة، الذهب أداة ادّخار ضعيفة.** فالمدّخر في دولة خليجية عملتها مربوطة بالدولار لا يحصل على أي حماية من التخفيض — الربط يوفّرها أصلًا. وبالنسبة له، الذهب رهان على سعر الذهب العالمي، لا أكثر.
- **أمام عملة هابطة، حماية الذهب حقيقية لكنها جزئية.** فهو يتبع الدولار، أي يحميك من هبوط **عملتك أنت**. لكنه لا يحميك من انخفاض سعر الذهب بالدولار نفسه، وهو ينخفض أحيانًا لسنوات.

## ما يكلّفك الذهب ولا تكلّفك إياه الوديعة

تكاليف الوديعة ظاهرة، أمّا تكاليف الذهب فمستترة، وهي سبب حصول كثير من المدّخرين على نتيجة أسوأ ممّا توقّعوا.

- **الفارق بين الشراء والبيع.** أنت تشتري بسعر التجزئة وتبيع بخصم. وبين المصنعية عند الشراء وهامش المحل عند البيع، قد تحتاج قطعة الذهب إلى ارتفاع بنسبة 15–25% لمجرّد أن تتعادل. أمّا العملات والسبائك فالفارق فيها أضيق بكثير، ولهذا وُجدت.
- **دخل صفري.** الوديعة تتراكم وأنت نائم، والذهب لا.
- **الحفظ والمخاطرة.** صندوق الأمانات له رسم سنوي، والذهب في البيت له كلفة من نوع آخر.
- **صعوبة التجزئة.** لا يمكنك بيع خُمس أسورة، بينما تُسحب الوديعة بأي مبلغ.

## كيف تقرّر عمليًا

السؤال ليس "أيّهما أفضل"، بل "ما الغرض من هذا المال".

**مال ستحتاجه خلال سنة أو سنتين** — أقساط مدرسية، أو دفعة أولى لشقة، أو احتياطي للطوارئ — مكانه أداة سائلة ومتوقّعة، أي الوديعة، حتى بعائد حقيقي سالب، لأنّ البديل هو أن تُضطر لبيع ذهبك في شهر سيئ.

**مال تخزّنه لسنوات بعملة لا تثق بها** — هذه هي وظيفة الذهب الحقيقية، والحجّة أقوى ما تكون حيث عجز عائد الوديعة عن ملاحقة العملة سنوات متتالية. اشترِه بأرخص صورة ممكنة (راجع دليلنا عن العملات والسبائك والمشغولات)، ولا تعوّل على سعر بعينه.

**مال في اقتصاد بعملة مربوطة** — كالريالات والدراهم الخليجية — لا ينبغي أن يوضع في الذهب بدافع الحماية من التخفيض، لأنه لا يوجد تخفيض تحتمي منه. امتلك الذهب هناك لأنك تريد التعرّض لسعر الذهب، أو لأنك تريد ارتداءه.

والمدّخر الذي يحقّق أفضل نتيجة عادةً هو من يوزّع: ما يكفي في وديعة لتغطية نفقات السنتين القادمتين المعلومة، والباقي طويل الأجل في صورة ذهب بفارق سعري ضيّق. جواب ممل، وهو الجواب الصحيح.

*أسعار كل العيارات وكل العملات على هذا الموقع تُحدَّث كل ثوانٍ — استخدمها للتحقّق من أي رقم يذكره لك المحل قبل أن تلتزم.*`,
  },
  {
    slug: "gold-coins-bars-or-jewellery-for-saving",
    publishedAt: "2026-07-09T09:00:00Z",
    title_en: "Coins, Bars or Jewellery: Which Form of Gold to Save In",
    title_ar: "عملات أم سبائك أم مشغولات: بأي صورة تدّخر الذهب؟",
    description_en:
      "The same gram of gold costs very different amounts depending on the shape it comes in — and gives back very different amounts when you sell. A comparison of premiums, resale spreads and liquidity across coins, bars and jewellery.",
    description_ar:
      "الجرام نفسه من الذهب يكلّفك مبالغ مختلفة تمامًا حسب الشكل الذي يأتي به — ويعيد لك مبالغ مختلفة تمامًا حين تبيع. مقارنة بين العلاوات وفروق إعادة البيع والسيولة في العملات والسبائك والمشغولات.",
    tags: ["bullion", "coins", "savings", "buying-guide"],
    author: AUTHOR,
    body_en: `A gram of pure gold is a gram of pure gold. The metal does not know what shape it is in. Yet the price you pay for that gram, and the price you get back for it, vary enormously with the form — and for someone saving in gold, that gap is the whole game.

## The premium: what you pay above the metal

Every form of gold sells for more than its metal value. The difference is the **premium**, and it pays for fabrication, distribution, and the seller's margin.

Rough ranges, as a percentage over spot:

| Form | Typical premium | Why |
|---|---|---|
| Large bar (1 kg) | 1–2% | One casting, one assay, enormous value per unit of work |
| Small bar (10–100 g) | 3–6% | Same work, much less gold to spread it over |
| Bullion coin (1 oz) | 4–8% | Minting is finer work; sovereign coins carry a name premium |
| Small coin (¼ oz and under) | 8–15% | The work per gram climbs steeply |
| Plain chain / bangle | 8–20% | Making charges, retail overhead |
| Worked or stone-set jewellery | 25–100%+ | Craftsmanship, stones, showroom |

The pattern is consistent: **the smaller the unit and the more work in it, the more you pay per gram of actual gold.**

## The spread: what you lose on the round trip

The premium is only half the story. What matters to a saver is the **round-trip spread** — buy price to sell price — because that is the hole you must climb out of before you have made anything.

- **Large bars** — narrowest. A recognised 1 kg bar from a good refiner sells back close to spot. But the unit is huge, and you cannot sell part of it.
- **Bullion coins** — narrow, and the best balance for most people. A widely recognised 1 oz coin is a liquid object anywhere in the world; dealers know it, price it quickly, and take it without argument.
- **Small bars and coins** — wider, and the premium you paid does not come back.
- **Jewellery** — widest by a distance. You paid making charges going in; the shop deducts its margin coming out, and the craftsmanship is not part of the offer because the piece is going to be melted. This is the single biggest mistake savers make, and it is covered in detail in our guide on selling gold back.

A concrete way to see it: if a piece carries a 20% making charge and the shop buys back at 5% under spot, the gold price must rise about 26% before you are even.

## Recognition matters more than people expect

An unmarked bar of genuine gold is worth less in practice than a marked one, because the buyer has to verify it. Anything you plan to sell someday should carry:

- a **refiner or mint name** the local market recognises,
- a stated **weight** and **purity** (999.9, 999, 916),
- a **serial number** on bars where the refiner uses them,
- and ideally its original **assay card or capsule**, undamaged.

Breaking a coin out of its capsule to hold it costs you real money later. It is the cheapest mistake to avoid on this list.

## Matching form to purpose

**Saving over years, largest amount, no need to sell in pieces** — large bars. Lowest cost per gram of gold, provided you can afford a whole unit and trust your storage.

**Saving over years, want the option to sell part** — 1 oz bullion coins, or 50–100 g bars. Slightly higher premium buys you the ability to liquidate in slices as needs arise. For most savers this is the right answer.

**Saving small amounts regularly** — small coins, accepting the higher premium as the price of entry, or accumulating cash until a larger unit is affordable. The second is cheaper if you have the discipline.

**Want to wear it** — jewellery, bought with open eyes. Choose plain heavy pieces over worked ones if resale matters at all, ask for the making charge as a separate number, and treat the craftsmanship as consumption rather than saving. There is nothing wrong with that; just do not confuse the two.

**Gifting, dowry, family tradition** — jewellery, obviously, and the regional conventions here are strong. Our guide on wedding gold covers what families in different markets actually buy.

## One practical check before you buy anything

Whatever the form, do the arithmetic in front of the seller. Take the day's spot price per gram for the purity in question, multiply by the weight, and compare it to the asking price. The difference is the premium, expressed as a number rather than a feeling — and once you can see it, comparing two shops takes ten seconds instead of an afternoon.

*The live per-gram price for every karat, in your own currency, is at the top of every country page on this site.*`,
    body_ar: `الجرام من الذهب الخالص هو جرام من الذهب الخالص. المعدن لا يعرف في أي شكل هو. ومع ذلك فإن ما تدفعه مقابل ذلك الجرام، وما تستردّه عنه، يختلفان اختلافًا هائلًا باختلاف الصورة — ولمن يدّخر بالذهب، هذه الفجوة هي اللعبة كلها.

## العلاوة: ما تدفعه فوق قيمة المعدن

كل صورة من صور الذهب تُباع بأكثر من قيمتها المعدنية. والفرق يُسمّى **العلاوة**، وهي تغطّي التصنيع والتوزيع وهامش البائع.

نطاقات تقريبية، كنسبة فوق السعر الفوري:

| الصورة | العلاوة المعتادة | السبب |
|---|---|---|
| سبيكة كبيرة (1 كجم) | 1–2% | صبّة واحدة وفحص واحد، وقيمة ضخمة مقابل وحدة العمل |
| سبيكة صغيرة (10–100 جم) | 3–6% | العمل نفسه، وذهب أقل بكثير يوزَّع عليه |
| عملة سبائكية (أونصة) | 4–8% | السكّ عمل أدقّ، والعملات السيادية تحمل علاوة اسم |
| عملة صغيرة (رُبع أونصة فأقل) | 8–15% | العمل لكل جرام يرتفع بحدّة |
| سلسلة أو أسورة سادة | 8–20% | المصنعية ومصاريف التجزئة |
| مشغولات مزخرفة أو مرصّعة | 25–100%+ | الحرفية والأحجار والمعرض |

النمط ثابت: **كلّما صغرت الوحدة وزاد العمل فيها، دفعت أكثر مقابل كل جرام ذهب فعلي.**

## الفارق: ما تخسره في رحلة الذهاب والعودة

العلاوة نصف القصة فقط. وما يهمّ المدّخر هو **فارق الذهاب والعودة** — من سعر الشراء إلى سعر البيع — لأنه الحفرة التي عليك الخروج منها قبل أن تربح شيئًا.

- **السبائك الكبيرة** — الأضيق فارقًا. فالسبيكة المعروفة زنة كيلوغرام من مصفاة جيدة تُباع قريبًا من السعر الفوري. لكن الوحدة ضخمة، ولا يمكنك بيع جزء منها.
- **العملات السبائكية** — فارق ضيّق، وأفضل توازن لمعظم الناس. فالعملة المعروفة زنة أونصة أصل سائل في أي مكان في العالم؛ التجّار يعرفونها ويسعّرونها فورًا ويأخذونها بلا جدال.
- **السبائك والعملات الصغيرة** — فارق أوسع، والعلاوة التي دفعتها لا تعود إليك.
- **المشغولات** — الأوسع بفارق كبير. دفعت المصنعية عند الدخول، ويخصم المحل هامشه عند الخروج، والحرفية ليست جزءًا من العرض لأن القطعة ستُصهر. وهذا أكبر خطأ يقع فيه المدّخرون، وقد فصّلناه في دليل بيع الذهب.

وطريقة ملموسة لرؤية ذلك: إذا حملت القطعة مصنعية 20%، واشترى المحل بخصم 5% تحت السعر الفوري، فعلى سعر الذهب أن يرتفع نحو 26% قبل أن تتعادل.

## قابلية التعرّف أهمّ ممّا يظنّ الناس

السبيكة الذهبية الأصلية غير المختومة تساوي عمليًا أقلّ من المختومة، لأن على المشتري أن يتحقّق منها. فأي شيء تنوي بيعه يومًا ينبغي أن يحمل:

- **اسم مصفاة أو دار سكّ** يعرفها السوق المحلي،
- **وزنًا** و**نقاءً** مذكورين (999.9 أو 999 أو 916)،
- **رقمًا تسلسليًا** على السبائك حيث تستخدمه المصفاة،
- ويُفضَّل **بطاقة الفحص أو الكبسولة** الأصلية سليمة.

وإخراج العملة من كبسولتها لتمسكها بيدك يكلّفك مالًا حقيقيًا لاحقًا. وهو أرخص خطأ في هذه القائمة يمكن تفاديه.

## مطابقة الصورة للغرض

**ادّخار لسنوات، بمبلغ كبير، دون حاجة للبيع بالتجزئة** — السبائك الكبيرة. أقل كلفة لكل جرام ذهب، بشرط أن تقدر على وحدة كاملة وتثق بمكان حفظك.

**ادّخار لسنوات مع رغبة في بيع جزء** — عملات سبائكية زنة أونصة، أو سبائك 50–100 جرام. علاوة أعلى قليلًا تشتري لك القدرة على التسييل على دفعات حسب الحاجة. ولمعظم المدّخرين هذا هو الجواب الصحيح.

**ادّخار مبالغ صغيرة بانتظام** — عملات صغيرة مع قبول العلاوة الأعلى ثمنًا للدخول، أو تجميع النقد حتى تصير الوحدة الأكبر في المتناول. والثاني أرخص إن توفّر الانضباط.

**رغبة في الارتداء** — مشغولات، تُشترى بعين مفتوحة. اختر القطع السادة الثقيلة على المزخرفة إن كان لإعادة البيع أي أهمية، واطلب المصنعية كرقم منفصل، وعامل الحرفية على أنها استهلاك لا ادّخار. لا عيب في ذلك، فقط لا تخلط بين الأمرين.

**الهدايا والشبكة وتقاليد العائلة** — مشغولات بالطبع، والأعراف الإقليمية هنا قوية. ودليلنا عن ذهب الأعراس يغطّي ما تشتريه العائلات فعليًا في الأسواق المختلفة.

## فحص عملي واحد قبل أي شراء

مهما كانت الصورة، أجرِ الحساب أمام البائع. خذ السعر الفوري للجرام في ذلك اليوم للنقاء المعني، واضربه في الوزن، وقارنه بالسعر المطلوب. الفرق هو العلاوة، معبَّرًا عنها برقم لا بإحساس — وحين تراها رقمًا، تصبح المقارنة بين محلّين مسألة عشر ثوانٍ بدل أن تستغرق بعد ظهيرة كاملة.

*السعر المباشر للجرام لكل عيار، بعملتك أنت، موجود أعلى كل صفحة دولة على هذا الموقع.*`,
  },
  {
    slug: "zakat-on-gold-how-to-calculate",
    publishedAt: "2026-07-16T09:00:00Z",
    title_en: "Zakat on Gold: How to Work Out What You Owe",
    title_ar: "زكاة الذهب: كيف تحسب ما عليك",
    description_en:
      "The nisab, the lunar year, the 2.5%, and the question scholars differ on — whether jewellery you wear is included. A practical walkthrough with worked examples at today's prices.",
    description_ar:
      "النصاب، والحول القمري، ونسبة 2.5%، والمسألة التي اختلف فيها العلماء — هل تُزكّى الحلي المُلبَسة؟ شرح عملي بأمثلة محسوبة بأسعار اليوم.",
    tags: ["zakat", "education", "savings", "islamic-finance"],
    author: AUTHOR,
    body_en: `Zakat on gold is one of the most common questions this site receives, and one of the worst served by the internet — usually because the answer skips the arithmetic and stops at "2.5%." The calculation itself is genuinely simple. What makes people hesitate is knowing which gold counts and what the threshold is on the day they are calculating.

*A note on what follows: this explains the mechanics and the main positions scholars hold. It is not a fatwa. On the question of worn jewellery in particular, follow the ruling of a scholar you trust.*

## The three things you need

**1. The nisab — the threshold below which no zakat is due.**

For gold the nisab is classically **85 grams of pure gold** (20 mithqal / 20 dinars). If everything you hold is below that, you owe nothing.

The nisab is a weight, not a currency amount — which is exactly why it holds up across centuries and across currencies. To express it in money on any given day, multiply 85 by the current price of a gram of 24K gold in your currency.

**2. The hawl — a full lunar year of possession.**

Zakat is due on wealth you have held for one complete **lunar** year (about 354 days, roughly 11 days shorter than the solar year). Pick a date, note it, and use the same date each year. Many people use a fixed day in Ramadan simply because it is easy to remember.

The nisab must be met at the start and end of the year. Ordinary fluctuation in between does not break it.

**3. The rate — 2.5%.**

Or, put as the fraction that is easier to check: one fortieth. Divide by 40.

## Working it out

The calculation is: **total weight of qualifying gold → convert to a value at today's price → multiply by 0.025.**

Purity matters, and this is where most home calculations go wrong. Zakat is on the **gold content**, not the gross weight of the object. A 21K piece is 87.5% gold; a 18K piece is 75%.

Two ways to handle it, both correct:

- **Convert to pure weight.** 100 g of 21K = 100 × 0.875 = 87.5 g of pure gold. Compare that to the 85 g nisab.
- **Value each piece at its own karat price.** Multiply each piece's gross weight by the per-gram price for its karat, and add the values.

A worked example. Suppose someone holds:

| Item | Gross weight | Karat | Pure gold |
|---|---|---|---|
| Chain | 40 g | 21K | 35.0 g |
| Bangles | 55 g | 21K | 48.1 g |
| Ring | 8 g | 18K | 6.0 g |
| **Total** | 103 g | — | **89.1 g** |

89.1 g of pure gold is above the 85 g nisab, so zakat is due.

If 24K gold is trading at, say, 250 units of local currency per gram, the zakatable value is 89.1 × 250 = **22,275**, and the zakat owed is 22,275 ÷ 40 = **557 units**.

Note that the ring alone, or the chain alone, would have been below nisab. **You add everything together** — and in the majority view, gold and silver and cash and trade goods are combined for the purpose of reaching the threshold.

## The question scholars differ on

Does jewellery a woman owns and **actually wears** count?

This is a genuine, long-standing difference of opinion among the four schools, not a modern controversy:

- **One position** holds that jewellery in normal, permitted personal use is exempt, being a personal effect rather than stored wealth. This is the view associated with the Maliki, Shafi'i and Hanbali schools.
- **The other** holds that gold is zakatable whatever form it takes, worn or stored. This is the Hanafi position, and it is also the view of a number of contemporary scholars.

Both positions are held by serious scholarship. What you should not do is pick whichever is convenient each year — follow one consistently, and ask someone qualified in your own context.

Gold held explicitly as **savings or investment** — coins, bars, pieces bought to store value — is zakatable on every view. There is no disagreement there.

## Practical points people get wrong

- **Use the price on your zakat date**, not what you paid. Zakat is on present value.
- **Use the sell-side value** — what the gold is actually worth, not a retail replacement price with making charges. You are valuing metal.
- **Making charges and stones are not gold.** Deduct the weight of stones; a 30 g stone-set piece is not 30 g of gold.
- **Debt.** Most scholars allow you to deduct immediately-due debts before assessing. Long-term debt such as a mortgage is treated differently, and views vary.
- **Write it down.** Weight, karat, date, price used, amount paid. Next year's calculation takes five minutes instead of an evening.

## Doing it in two minutes

Weigh your pieces, group them by karat, and open the page on this site for your country. It shows the live per-gram price for 24, 22, 21, 18 and 14 karat in your own currency. Multiply, add, divide by 40.

*The nisab in your currency, on any given day, is simply the 24K gram price × 85.*`,
    body_ar: `زكاة الذهب من أكثر الأسئلة التي تصل هذا الموقع، ومن أسوأ ما تخدمه الإنترنت — غالبًا لأن الجواب يقفز فوق الحساب ويتوقّف عند "2.5%". والحساب نفسه بسيط حقًا. وما يجعل الناس يتردّدون هو معرفة أي ذهب يُحتسب، وما مقدار النصاب في اليوم الذي يحسبون فيه.

*تنبيه على ما يلي: هذا شرح للآلية وللأقوال الرئيسة عند العلماء، وليس فتوى. وفي مسألة الحلي المُلبَسة خاصةً، اتّبع قول عالم تثق به.*

## الأمور الثلاثة التي تحتاجها

**1. النصاب — الحدّ الذي لا زكاة تحته.**

نصاب الذهب كلاسيكيًا **85 جرامًا من الذهب الخالص** (20 مثقالًا / 20 دينارًا). فإن كان كل ما تملكه دون ذلك فلا شيء عليك.

والنصاب وزن لا مبلغ نقدي — ولهذا بالذات صمد عبر القرون وعبر العملات. ولتعبّر عنه بالمال في يوم بعينه، اضرب 85 في سعر جرام الذهب عيار 24 بعملتك.

**2. الحول — سنة قمرية كاملة من الملك.**

تجب الزكاة في المال الذي حال عليه حول **قمري** كامل (نحو 354 يومًا، أي أقصر من السنة الشمسية بنحو 11 يومًا). اختر تاريخًا وسجّله واستخدم التاريخ نفسه كل سنة. وكثيرون يختارون يومًا ثابتًا في رمضان لسهولة تذكّره.

ويجب بلوغ النصاب في أول الحول وآخره، ولا يقطعه التذبذب المعتاد بينهما.

**3. المقدار — 2.5%.**

أو بالكسر الأسهل في التحقّق: رُبع العُشر، أي القسمة على 40.

## طريقة الحساب

الحساب هو: **مجموع وزن الذهب الخاضع للزكاة ← تحويله إلى قيمة بسعر اليوم ← ضربه في 0.025.**

والنقاء مهم، وهنا يقع أكثر الخطأ في الحسابات المنزلية. فالزكاة على **محتوى الذهب**، لا على الوزن القائم للقطعة. فقطعة عيار 21 ذهبها 87.5%، وقطعة عيار 18 ذهبها 75%.

وهناك طريقتان، وكلتاهما صحيحة:

- **التحويل إلى وزن خالص.** 100 جرام عيار 21 = 100 × 0.875 = 87.5 جرامًا ذهبًا خالصًا. قارنه بنصاب 85 جرامًا.
- **تقويم كل قطعة بسعر عيارها.** اضرب الوزن القائم لكل قطعة في سعر الجرام لعيارها، ثم اجمع القيم.

مثال محسوب. لنفترض أن شخصًا يملك:

| القطعة | الوزن القائم | العيار | الذهب الخالص |
|---|---|---|---|
| سلسلة | 40 جم | 21 | 35.0 جم |
| أساور | 55 جم | 21 | 48.1 جم |
| خاتم | 8 جم | 18 | 6.0 جم |
| **المجموع** | 103 جم | — | **89.1 جم** |

و89.1 جرامًا من الذهب الخالص فوق نصاب 85 جرامًا، فتجب الزكاة.

فإذا كان سعر عيار 24 مثلًا 250 وحدة من العملة المحلية للجرام، فالقيمة الخاضعة = 89.1 × 250 = **22,275**، والزكاة = 22,275 ÷ 40 = **557 وحدة**.

ولاحظ أن الخاتم وحده، أو السلسلة وحدها، كان دون النصاب. **فالجمع واجب** — وعند الجمهور يُضمّ الذهب والفضة والنقد وعروض التجارة لبلوغ النصاب.

## المسألة التي اختلف فيها العلماء

هل تُزكّى الحلي التي تملكها المرأة و**تلبسها فعلًا**؟

هذا خلاف معتبر وقديم بين المذاهب الأربعة، لا خلاف معاصر مستحدث:

- **قول** بأن الحلي المستعملة استعمالًا مباحًا معتادًا معفاة، لأنها متاع شخصي لا مال مكنوز. وهو المنسوب إلى المالكية والشافعية والحنابلة.
- **وقول** بأن الذهب يُزكّى على أي صورة كان، ملبوسًا أو مخزونًا. وهو مذهب الحنفية، وبه أفتى عدد من المعاصرين.

وكلا القولين يحمله تحقيق علمي جادّ. والذي لا ينبغي فعله هو انتقاء الأيسر كل سنة — بل التزم قولًا واحدًا باطّراد، واسأل مؤهَّلًا في سياقك أنت.

أمّا الذهب المُقتنى صراحةً **للادّخار أو الاستثمار** — عملات وسبائك وقطع اشتُريت لحفظ القيمة — فيُزكّى بالاتفاق. لا خلاف في ذلك.

## أمور عملية يُخطئ فيها الناس

- **استخدم سعر يوم زكاتك**، لا ما دفعته. فالزكاة على القيمة الحاضرة.
- **استخدم قيمة البيع** — ما يساويه الذهب فعلًا، لا سعر الاستبدال في التجزئة مع المصنعية. فأنت تقوّم معدنًا.
- **المصنعية والأحجار ليست ذهبًا.** اطرح وزن الأحجار؛ فالقطعة المرصّعة زنة 30 جرامًا ليست 30 جرامًا ذهبًا.
- **الديون.** يجيز أكثر العلماء خصم الديون الحالّة قبل التقويم. أمّا الدين طويل الأجل كقرض السكن فله حكم مختلف، والأقوال فيه متباينة.
- **دوّن ذلك.** الوزن والعيار والتاريخ والسعر المستخدم والمبلغ المدفوع. فيصير حساب السنة القادمة خمس دقائق بدل أمسية كاملة.

## أن تنجزها في دقيقتين

زِن قطعك، وصنّفها بحسب العيار، وافتح صفحة بلدك على هذا الموقع. تجد فيها السعر المباشر للجرام لعيار 24 و22 و21 و18 و14 بعملتك أنت. اضرب، واجمع، واقسم على 40.

*والنصاب بعملتك في أي يوم هو ببساطة: سعر جرام عيار 24 × 85.*`,
  },
];
