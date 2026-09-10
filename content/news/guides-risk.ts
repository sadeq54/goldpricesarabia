import type { Article } from "@/content/news/articles";

/**
 * Where people lose money in gold that has nothing to do with the gold price:
 * investment fraud, jeweller instalment schemes whose terms nobody reads, and
 * the allocated/unallocated distinction that decides whether you own metal or
 * merely a promise.
 *
 * Second content batch, 2026-09-10 (see guides-saving.ts for the AdSense
 * context). Distinct from `5-home-tests-to-spot-fake-gold`, which is about
 * testing metal; this set is about testing counterparties.
 */

const AUTHOR = {
  name: "Sadeq Sayed Ahmad",
  url: "/about/sadeq",
  image: "/author/sadeq.jpeg",
};

export const RISK_ARTICLES: Article[] = [
  {
    slug: "gold-investment-scams-and-how-they-work",
    publishedAt: "2026-06-04T09:00:00Z",
    title_en: "Gold Investment Scams and How They Actually Work",
    title_ar: "احتيالات الاستثمار في الذهب وكيف تعمل فعلًا",
    description_en:
      "The fraud is rarely fake metal. It is a real-sounding company, a guaranteed monthly return, and gold you never take delivery of. The recurring structures, the specific red flags, and the checks that take ten minutes.",
    description_ar:
      "الاحتيال نادرًا ما يكون معدنًا مزيّفًا. بل شركة تبدو حقيقية، وعائد شهري مضمون، وذهب لا تتسلّمه أبدًا. الهياكل المتكرّرة، والعلامات التحذيرية المحدّدة، والفحوص التي تستغرق عشر دقائق.",
    tags: ["fraud", "risk", "investment", "education"],
    author: AUTHOR,
    body_en: `Most people picture a gold scam as a gold-plated tungsten bar. That happens, and our guide on home tests for fake gold covers it. But the frauds that take the largest sums from ordinary families almost never involve the buyer holding any metal at all. The gold is real in the brochure and absent in the vault.

Here are the structures that recur, and how to check before rather than after.

## Structure 1: the guaranteed monthly return

The offer: invest in gold through us and receive a fixed return — often 3–8% *per month* — while the gold "works" through trading, mining, or a wholesale operation.

Why it cannot be what it claims: **gold generates no income.** A bar in a vault produces nothing. Any fixed, guaranteed return must therefore come from trading profits, which are never guaranteed, or from other investors' deposits, which is a Ponzi scheme.

The tell is the word **guaranteed** attached to a return on a non-yielding asset. There is no legitimate version of that sentence.

These schemes usually pay reliably at first — that is the mechanism, because early payouts fund the testimonials that recruit the next wave. Collapse arrives when inflows slow, which is also why they intensify recruitment pressure over time.

## Structure 2: gold you never receive

The offer: buy physical gold at an attractive price; we store it for you securely, free or nearly free.

Sometimes this is a legitimate allocated-storage product. Often it is not, and the difference is precise:

- **Allocated and segregated** — specific bars with specific serial numbers, recorded as your property, held apart from the firm's own assets. If the firm fails, your metal is yours.
- **Unallocated** — you are a general creditor of the company. If it fails, you queue with everyone else.
- **Nothing at all** — the metal was never purchased.

Ask for the **serial numbers of your bars**, a **third-party audit**, and the terms for **physical delivery**. A legitimate operator answers all three without friction. Free storage on a large holding should itself prompt the question of who is paying for the vault.

## Structure 3: the affinity introduction

The offer arrives through someone trusted — a relative, a colleague, someone from your mosque or community — who is themselves invested and genuinely enthusiastic.

This is the most effective delivery mechanism in fraud, because it replaces due diligence with trust in a person who is not the fraudster and has no idea they are recruiting. The person introducing you may be an early investor being paid with later investors' money.

The uncomfortable rule: **the trustworthiness of the introducer tells you nothing about the scheme.** Run exactly the same checks you would on a stranger's offer.

## Structure 4: pressure and secrecy

Common to nearly all of them:

- **A closing window.** "The allocation closes Thursday." Urgency exists to prevent the checks in the next section.
- **Discouraged scrutiny.** Being told not to discuss it, or that outsiders "won't understand the model."
- **Recruitment rewards.** A commission for bringing others in is a defining feature of a pyramid, not an investment.
- **Difficulty withdrawing.** Delays, new fees, or a requirement to reinvest are the last stage before collapse — and the point at which many victims put in more.

## The checks, which take about ten minutes

1. **Is the firm licensed by your country's financial regulator?** Look it up on the regulator's own website — never a link the seller gives you. Many regulators also publish warning lists of unauthorised firms; check those too.
2. **Does the return make sense?** Gold has no yield. Ask precisely where the money comes from and expect a specific, verifiable answer.
3. **Is the metal allocated, segregated, and audited?** Ask for serial numbers and an auditor's name you can contact independently.
4. **Can you take delivery?** Ask what it costs and how long it takes. Then ask for that in writing.
5. **Who holds the money?** Payment into a personal account, a crypto wallet, or an overseas company unconnected to the named firm is close to conclusive.
6. **Search the name with the words "scam", "warning" and "regulator"**, and in Arabic as well as English.

## If you are already in

Stop adding money — including any "release fee" to unlock a withdrawal, which is a documented second-stage fraud against victims. Save everything: contracts, receipts, messages, names, bank details. Report to your national regulator and to the police; recovery odds are low but reporting is what stops the operation continuing against others. And be wary of "recovery agents" who appear afterwards, since they frequently target the same list.

## The honest frame

Gold is a way to hold value, not a way to generate income. Any product promising both, on a guaranteed basis, has departed from what gold actually is. Buying metal you hold, or metal that is allocated in your name at an audited vault, is the version with no counterparty story to believe.

*If you want to check whether a quoted "wholesale" price is even plausible, our country pages carry the live per-gram and per-ounce price — a price far below the market is not a bargain, it is a signal.*`,
    body_ar: `يتخيّل معظم الناس احتيال الذهب سبيكة تنجستن مطليّة بالذهب. وهذا يحدث، ودليلنا عن اختبارات الذهب المزيّف المنزلية يغطّيه. لكن الاحتيالات التي تسلب أكبر المبالغ من الأسر العادية لا تتضمّن غالبًا أن يحمل المشتري أي معدن إطلاقًا. فالذهب حقيقي في الكتيّب وغائب عن الخزنة.

وهذه هي الهياكل المتكرّرة، وكيف تتحقّق قبل لا بعد.

## الهيكل الأول: العائد الشهري المضمون

العرض: استثمر في الذهب عبرنا واحصل على عائد ثابت — 3–8% *شهريًا* غالبًا — بينما "يعمل" الذهب في التداول أو التعدين أو عملية جملة.

ولماذا لا يمكن أن يكون كما يدّعي: **الذهب لا يولّد دخلًا.** فالسبيكة في الخزنة لا تُنتج شيئًا. وأي عائد ثابت مضمون لا بدّ أن يأتي إذًا من أرباح تداول، وهي غير مضمونة أبدًا، أو من ودائع مستثمرين آخرين، وهذا مخطّط بونزي.

والعلامة هي كلمة **مضمون** ملحقة بعائد على أصل لا يدرّ عائدًا. ولا توجد نسخة مشروعة من هذه الجملة.

وهذه المخطّطات تدفع بانتظام في البداية عادةً — وتلك هي الآلية، لأن الدفعات المبكّرة تموّل الشهادات التي تجنّد الموجة التالية. ويأتي الانهيار حين تتباطأ التدفّقات الداخلة، وهو أيضًا سبب تصاعد ضغط التجنيد مع الوقت.

## الهيكل الثاني: ذهب لا تتسلّمه أبدًا

العرض: اشترِ ذهبًا ماديًا بسعر جذّاب، ونحن نخزّنه لك بأمان، مجانًا أو شبه مجانًا.

وهذا أحيانًا منتج تخزين مخصّص مشروع، وكثيرًا ما لا يكون، والفرق دقيق:

- **مخصّص ومفروز** — سبائك بعينها بأرقام تسلسلية مسجّلة ملكًا لك، محفوظة بمعزل عن أصول الشركة. فإن أفلست الشركة بقي معدنك لك.
- **غير مخصّص** — أنت دائن عادي للشركة. فإن أفلست وقفت في الطابور مع الجميع.
- **لا شيء إطلاقًا** — فالمعدن لم يُشترَ أصلًا.

اطلب **الأرقام التسلسلية لسبائكك**، و**تدقيقًا من طرف ثالث**، وشروط **التسلّم الفعلي**. والمشغّل المشروع يجيب عن الثلاثة دون احتكاك. والتخزين المجاني لحيازة كبيرة ينبغي أن يثير بذاته سؤال: من يدفع كلفة الخزنة؟

## الهيكل الثالث: التوصية عبر الثقة

يصل العرض عبر شخص موثوق — قريب أو زميل أو أحد من المسجد أو الحيّ — يكون هو نفسه مستثمرًا ومتحمّسًا بصدق.

وهذه أنجع آلية توصيل في الاحتيال، لأنها تستبدل بالتحرّي ثقةً بشخص ليس هو المحتال ولا يدري أنه يجنّد. وقد يكون من عرّفك عليه مستثمرًا مبكّرًا يُدفع له من أموال المتأخّرين.

والقاعدة غير المريحة: **موثوقية من عرّفك لا تخبرك شيئًا عن المخطّط.** أجرِ الفحوص نفسها تمامًا التي كنت ستجريها على عرض من غريب.

## الهيكل الرابع: الضغط والسرّية

وهو مشترك بينها جميعًا تقريبًا:

- **نافذة تُغلق.** "التخصيص يُقفل الخميس." والاستعجال موجود لمنع الفحوص الواردة في القسم التالي.
- **تثبيط التدقيق.** بأن يُقال لك لا تناقش الأمر، أو إن الخارجين "لن يفهموا النموذج".
- **مكافآت التجنيد.** فالعمولة على إدخال آخرين سمة مُعرِّفة للهرم لا للاستثمار.
- **صعوبة السحب.** فالتأخير أو الرسوم الجديدة أو اشتراط إعادة الاستثمار هي المرحلة الأخيرة قبل الانهيار — وهي اللحظة التي يضخّ فيها كثير من الضحايا مزيدًا.

## الفحوص، وتستغرق نحو عشر دقائق

1. **هل الشركة مرخّصة من الجهة الرقابية المالية في بلدك؟** ابحث عنها في موقع الجهة نفسه — لا عبر رابط يعطيك إياه البائع. وكثير من الجهات تنشر أيضًا قوائم تحذير بالشركات غير المصرّح لها؛ راجعها كذلك.
2. **هل العائد معقول؟** الذهب بلا عائد. اسأل تحديدًا من أين يأتي المال وتوقّع جوابًا محدّدًا قابلًا للتحقّق.
3. **هل المعدن مخصّص ومفروز ومدقَّق؟** اطلب أرقامًا تسلسلية واسم مدقّق تستطيع الاتصال به باستقلال.
4. **هل تستطيع التسلّم؟** اسأل كم يكلّف وكم يستغرق. ثم اطلب ذلك كتابةً.
5. **من يحتفظ بالمال؟** فالدفع إلى حساب شخصي أو محفظة عملات رقمية أو شركة خارجية لا صلة لها بالشركة المذكورة قريب من الحسم.
6. **ابحث عن الاسم مقرونًا بكلمات "نصب" و"تحذير" و"هيئة رقابية"**، بالعربية والإنجليزية معًا.

## إن كنت داخلًا فعلًا

توقّف عن ضخّ المال — بما في ذلك أي "رسم إفراج" لفكّ السحب، وهو احتيال ثانٍ موثّق ضد الضحايا. واحفظ كل شيء: العقود والإيصالات والرسائل والأسماء وبيانات الحسابات. وأبلغ الجهة الرقابية الوطنية والشرطة؛ فاحتمالات الاسترداد ضعيفة لكن الإبلاغ هو ما يوقف استمرار العملية ضد غيرك. واحذر "وكلاء الاسترداد" الذين يظهرون بعدها، فهم كثيرًا ما يستهدفون القائمة نفسها.

## التأطير الصادق

الذهب وسيلة لحفظ القيمة لا لتوليد الدخل. وأي منتج يعد بالاثنين معًا على أساس مضمون فقد غادر ما هو الذهب فعلًا. وشراء معدن تمسكه بيدك، أو معدن مخصّص باسمك في خزنة مدقّقة، هو النسخة التي لا تتضمّن قصّة طرف مقابل عليك تصديقها.

*وإن أردت التحقّق هل سعر "الجملة" المذكور معقول أصلًا، فصفحات الدول لدينا تحمل السعر المباشر للجرام وللأونصة — والسعر الأدنى بكثير من السوق ليس صفقة، بل إشارة.*`,
  },
  {
    slug: "jeweller-gold-savings-schemes-terms",
    publishedAt: "2026-07-02T14:00:00Z",
    title_en: "Jeweller Gold Savings Schemes: Read the Terms First",
    title_ar: "خطط ادّخار الذهب عند الصاغة: اقرأ الشروط أولًا",
    description_en:
      "Pay monthly for eleven months, the shop adds the twelfth. It can be a genuinely good deal or an expensive way to lock yourself into one showroom. The five clauses that decide which.",
    description_ar:
      "تدفع شهريًا أحد عشر شهرًا فيضيف المحل الشهر الثاني عشر. قد تكون صفقة جيدة فعلًا، وقد تكون طريقة مكلفة لتقييد نفسك بمعرض واحد. البنود الخمسة التي تحسم الأمر.",
    tags: ["savings", "retail", "buying-guide", "risk"],
    author: AUTHOR,
    body_en: `Instalment gold schemes are everywhere — common across India and Pakistan, widespread in Gulf showrooms, and increasingly offered by Arab jewellers too. The pitch is appealing: pay a fixed amount monthly, and at the end you buy jewellery, often with a bonus instalment paid by the shop.

Some of these are genuinely good. Others are a marketing device that costs the customer more than the bonus is worth. The terms decide it, and the terms are rarely read.

## The two designs, and why the difference is everything

**Design A — you accumulate money.** Your instalments build a cash balance. At the end you spend it at that day's gold price.

**Design B — you accumulate gold.** Each instalment buys grams at that month's price, and your balance is a weight.

These behave in opposite ways when the price moves.

Under **Design A**, you carry the price risk. If gold rises 20% over the term, your accumulated cash buys 20% less metal than it would have at the start. You have effectively saved in currency, not in gold.

Under **Design B**, you have been buying gradually at an average price. A rising market does not erode what you have already accumulated — this is cost averaging, and it is the version that actually functions as gold saving.

**Ask which design you are signing, in those terms.** Many customers assume B and are enrolled in A. If the scheme's paperwork records amounts in currency rather than grams, it is A.

## The bonus is smaller than it looks

"Pay 11, get 12" sounds like a 9% return. It is not, because you did not have all the money in for the full year.

The average instalment sits in the scheme for roughly half the term. So a one-month bonus on an eleven-month plan is closer to an effective annual rate in the mid-teens on the money actually committed — still decent, but not what the headline suggests. And if the bonus is credited as a discount on making charges rather than as metal or cash, its value depends entirely on the making charge being fair in the first place.

## The five clauses to read

1. **What happens if you miss a payment.** Some schemes forfeit the bonus entirely on a single missed instalment. Others charge a penalty or extend the term. This is the most common way customers lose the benefit.
2. **What happens if you exit early.** Can you get your money back? All of it? Is there a fee? Some schemes refund only after deductions that make early exit genuinely costly.
3. **What you are allowed to buy at the end.** Frequently the balance can only be spent on jewellery — not coins, not bars — and sometimes only on selected collections. If the eligible pieces carry high making charges, the shop has recovered the bonus and more.
4. **How making charges are treated.** The single biggest variable. A scheme that credits a bonus and then applies a 25% making charge on the purchase has given you nothing. Ask for the making charge in writing *before* enrolling, not at the end.
5. **What protects your money if the shop fails.** This is the serious one. In most cases you are an unsecured creditor of a retail business, with no deposit insurance and no regulator. Ask whether funds are held separately, and whether the scheme is registered with any authority.

## When these schemes are actually good

They work well when:

- the scheme accumulates **grams**, not currency;
- the making charge is **fixed and disclosed at enrolment**;
- you can buy **plain pieces or coins**, not only worked collections;
- the shop is long-established, and you were going to buy from it anyway;
- and the monthly amount is one you can sustain without strain, because missing payments is where the value leaks.

They work badly when the balance is in currency, the eligible products are the highest-margin pieces in the showroom, and the making charge is only revealed at the end.

## The alternative worth comparing against

The honest comparison is not "scheme versus nothing." It is "scheme versus buying a small coin every month or two yourself."

Doing it yourself gives you cost averaging with no counterparty risk, no lock-in to one shop, no forfeiture clauses, and a product — bullion coins — with a much narrower resale spread than jewellery. It requires discipline, which is exactly what the scheme is selling.

If the scheme's bonus genuinely exceeds the extra premium you would pay on jewellery versus coins, it is worth it. Work that out with real numbers before signing.

*Our country pages carry the live per-gram price for every karat, which is what you need to check the value of any scheme balance, bonus or making charge you are quoted.*`,
    body_ar: `خطط شراء الذهب بالتقسيط منتشرة في كل مكان — شائعة في الهند وباكستان، وواسعة الانتشار في معارض الخليج، ويعرضها الصاغة العرب أكثر فأكثر. والعرض جذّاب: ادفع مبلغًا ثابتًا شهريًا، وفي النهاية تشتري مشغولات، وغالبًا مع قسط إضافي يدفعه المحل.

وبعض هذه الخطط جيّد فعلًا، وبعضها أداة تسويق تكلّف الزبون أكثر ممّا تساويه المكافأة. والشروط هي الحاسمة، والشروط نادرًا ما تُقرأ.

## التصميمان، ولماذا الفرق بينهما هو كل شيء

**التصميم أ — تراكم مالًا.** فأقساطك تبني رصيدًا نقديًا، وفي النهاية تنفقه بسعر الذهب في ذلك اليوم.

**التصميم ب — تراكم ذهبًا.** فكل قسط يشتري جرامات بسعر ذلك الشهر، ورصيدك وزن.

وهما يتصرّفان تصرّفين متعاكسين حين يتحرّك السعر.

ففي **التصميم أ** تتحمّل أنت مخاطرة السعر. فإن ارتفع الذهب 20% خلال المدّة، اشترى مالك المتراكم معدنًا أقلّ بـ20% ممّا كان سيشتريه في البداية. وتكون قد ادّخرت بالعملة لا بالذهب.

وفي **التصميم ب** تكون قد اشتريت تدريجيًا بسعر متوسّط. والسوق الصاعدة لا تُآكل ما راكمته سلفًا — وهذا هو متوسّط التكلفة، وهو النسخة التي تعمل فعلًا بوصفها ادّخارًا بالذهب.

**اسأل أي تصميم توقّع عليه، بهذه العبارة.** فكثير من الزبائن يفترضون "ب" ويُسجَّلون في "أ". وإذا كانت أوراق الخطة تسجّل مبالغ بالعملة لا جرامات، فهي "أ".

## المكافأة أصغر ممّا تبدو

"ادفع 11 واحصل على 12" تبدو عائدًا 9%. وليست كذلك، لأن المال لم يكن كله لديك طوال السنة.

فالقسط المتوسّط يبقى في الخطة نحو نصف المدّة. فمكافأة شهر واحد على خطة أحد عشر شهرًا أقرب إلى معدّل سنوي فعّال في منتصف العشرات على المال الملتزَم به فعلًا — وهو لا يزال محترمًا، لكنه ليس ما يوحي به العنوان. وإن قُيّدت المكافأة خصمًا على المصنعية بدل أن تكون معدنًا أو نقدًا، فقيمتها تتوقّف كليًا على كون المصنعية عادلة أصلًا.

## البنود الخمسة الواجب قراءتها

1. **ماذا يحدث إن فاتك قسط.** فبعض الخطط تُسقط المكافأة كليًا عند قسط واحد فائت، وأخرى تفرض غرامة أو تمدّد المدّة. وهذا أشيع سبب لفقدان الزبائن للميزة.
2. **ماذا يحدث إن خرجت مبكرًا.** هل تسترد مالك؟ كله؟ وهل ثمّة رسم؟ فبعض الخطط لا تردّ إلا بعد خصومات تجعل الخروج المبكر مكلفًا فعلًا.
3. **ماذا يُسمح لك بشرائه في النهاية.** فكثيرًا ما لا يُنفَق الرصيد إلا على مشغولات — لا عملات ولا سبائك — وأحيانًا على مجموعات مختارة فقط. فإن كانت القطع المؤهَّلة عالية المصنعية، يكون المحل قد استردّ المكافأة وزيادة.
4. **كيف تُعامَل المصنعية.** وهو المتغيّر الأكبر منفردًا. فخطة تقيّد مكافأة ثم تطبّق مصنعية 25% على الشراء لم تعطك شيئًا. اطلب المصنعية كتابةً *قبل* التسجيل لا في النهاية.
5. **ما الذي يحمي مالك إن أفلس المحل.** وهذا هو البند الجادّ. ففي معظم الحالات أنت دائن غير مضمون لمنشأة تجزئة، بلا تأمين ودائع ولا جهة رقابية. اسأل هل تُحفظ الأموال منفصلة، وهل الخطة مسجّلة لدى أي جهة.

## متى تكون هذه الخطط جيّدة فعلًا

تعمل جيّدًا حين:

- تراكم الخطة **جرامات** لا عملة؛
- وتكون المصنعية **ثابتة ومُفصحًا عنها عند التسجيل**؛
- وتستطيع شراء **قطع سادة أو عملات**، لا المجموعات المشغولة فقط؛
- ويكون المحل عريقًا، وكنت ستشتري منه على أي حال؛
- ويكون المبلغ الشهري ممّا تحتمله دون إجهاد، لأن تفويت الأقساط هو حيث تتسرّب القيمة.

وتعمل بشكل سيئ حين يكون الرصيد بالعملة، والمنتجات المؤهَّلة هي الأعلى هامشًا في المعرض، ولا تُكشف المصنعية إلا في النهاية.

## البديل الجدير بالمقارنة

المقارنة الصادقة ليست "خطة مقابل لا شيء"، بل "خطة مقابل أن تشتري عملة صغيرة كل شهر أو شهرين بنفسك".

فالقيام بها بنفسك يعطيك متوسّط تكلفة بلا مخاطرة طرف مقابل، وبلا تقييد بمحل واحد، وبلا بنود إسقاط، وبمنتج — العملات السبائكية — فارق إعادة بيعه أضيق بكثير من المشغولات. وهو يتطلّب انضباطًا، وهو بالضبط ما تبيعه لك الخطة.

فإن كانت مكافأة الخطة تتجاوز فعلًا العلاوة الإضافية التي ستدفعها على المشغولات مقابل العملات، فهي تستحق. احسب ذلك بأرقام حقيقية قبل التوقيع.

*وصفحات الدول لدينا تحمل السعر المباشر للجرام لكل عيار، وهو ما تحتاجه للتحقّق من قيمة أي رصيد خطة أو مكافأة أو مصنعية تُذكر لك.*`,
  },
  {
    slug: "paper-gold-vs-physical-what-you-own",
    publishedAt: "2026-08-06T14:00:00Z",
    title_en: "Paper Gold vs Physical: What You Actually Own",
    title_ar: "الذهب الورقي مقابل المادي: ما الذي تملكه فعلًا",
    description_en:
      "ETFs, digital gold apps, bank gold accounts and bars in your hand are not the same asset. The difference is counterparty risk and the allocated/unallocated distinction — which decides what you hold if the issuer fails.",
    description_ar:
      "صناديق المؤشّرات وتطبيقات الذهب الرقمي وحسابات الذهب البنكية والسبيكة في يدك ليست أصلًا واحدًا. والفرق هو مخاطرة الطرف المقابل والتمييز بين المخصّص وغير المخصّص — وهو ما يحدّد ما تملكه إن أفلس المُصدِر.",
    tags: ["etf", "digital-gold", "risk", "investment"],
    author: AUTHOR,
    body_en: `"I own gold" can mean five quite different things. They behave similarly when markets are calm, which is why the differences get ignored, and they behave very differently in exactly the circumstances people buy gold for.

## The spectrum

**1. Physical gold you hold.** Coins and bars in your possession. No counterparty at all. If every financial institution failed tomorrow, you would still have the metal. Costs: premium on purchase, storage, insurance, a spread on sale.

**2. Allocated, segregated vault storage.** Specific bars with specific serial numbers, recorded as your property and held apart from the operator's own assets. You own metal; the vault is a custodian. If the operator fails, your bars are not part of its estate. Costs: an annual storage fee, usually a percentage.

**3. Unallocated accounts.** You have a claim on a quantity of gold, not on specific bars. The institution owes you metal. **You are a general creditor.** This is often cheaper or free to "store" — because the institution is using the balance. If it fails, you queue with other creditors.

**4. Gold ETFs and funds.** You own units in a fund that holds bullion. The good ones are backed by allocated metal with a published bar list and independent audits. Well regulated, extremely liquid, low annual fees. But you hold a security, not metal, and redemption in physical form is typically available only to very large institutional holders.

**5. Digital gold apps and tokens.** The widest quality range by far. Some are fully backed by allocated, audited metal with published attestations. Others are a database entry with a promise attached. The technology tells you nothing; the custody arrangement and the audits do.

## The one question that separates them

**If the issuer fails tomorrow, do you own metal or do you own a claim?**

That is the whole distinction, and it is worth being blunt about: unallocated gold is a credit exposure to an institution, denominated in gold. It may be perfectly fine. It is simply not the same asset as a bar, and it is specifically weakest in a systemic crisis — which is the scenario much of gold's appeal rests on.

## Comparing honestly

| | Physical held | Allocated vault | Unallocated | ETF | Digital app |
|---|---|---|---|---|---|
| Counterparty risk | None | Low | **High** | Low–moderate | Varies widely |
| Ongoing cost | Storage/insurance | ~0.1–1%/yr | Often none | ~0.1–0.4%/yr | Varies |
| Liquidity | Local dealer | Good | Good | Excellent | Platform only |
| Buy/sell spread | Widest | Narrow | Narrow | Narrowest | Varies |
| Deliverable | Already yours | Yes | Sometimes | Rarely | Sometimes |
| Divisible | Poorly | Yes | Yes | Yes | Yes |

## What each is genuinely good for

**Trading or medium-term exposure** — an ETF, almost always. Cheapest, most liquid, tightest spread. If your goal is exposure to the gold price rather than possession of metal, paying jewellery premiums to get it is an expensive mistake.

**Long-term insurance against systemic problems** — physical held, or allocated vault storage. This is the use case where counterparty risk is the entire point, and where an unallocated account undermines the purpose.

**Small, regular accumulation** — a reputable digital platform or allocated vault, converting to physical delivery once the balance justifies it. Check the delivery terms *before* you start, not when you want out.

**Wearing it** — jewellery, which is a consumption decision with a savings component, covered in our guide on coins, bars and jewellery.

## Due diligence on any non-physical product

- Is the metal **allocated** and **segregated**? Get it in writing.
- Is there an **independent audit**, and can you read it?
- Is there a **published bar list** with serial numbers?
- Who is the **custodian**, and are they separate from the issuer?
- Is the issuer **regulated**, and by whom? Verify on the regulator's own site.
- What are the **delivery terms** — minimum size, cost, notice period?
- What are the **total annual costs**, including any spread on conversion?

A product that answers all seven clearly is a product you can assess. Evasion on any of them is the answer.

## The practical conclusion

Most people are best served by a mix: an ETF or allocated account for the bulk of price exposure, and some physical metal held directly for the scenario the rest is not designed to survive. What matters is knowing which one you have — because "I own gold" is not a specific enough statement to plan around.

*Whatever form you hold, our country pages give the live per-gram and per-ounce price to value it against, in your own currency.*`,
    body_ar: `عبارة "أنا أملك ذهبًا" قد تعني خمسة أشياء مختلفة تمامًا. وهي تتصرّف تصرّفًا متشابهًا حين تكون الأسواق هادئة، ولهذا تُتجاهل الفروق، وتتصرّف تصرّفًا شديد الاختلاف في الظروف نفسها التي يشتري الناس الذهب من أجلها.

## الطيف

**1. ذهب مادي في حوزتك.** عملات وسبائك تمسكها. بلا طرف مقابل إطلاقًا. فلو أفلست كل المؤسسات المالية غدًا لبقي المعدن معك. والكلفة: علاوة عند الشراء، وتخزين، وتأمين، وفارق عند البيع.

**2. تخزين مخصّص مفروز في خزنة.** سبائك بعينها بأرقام تسلسلية مسجّلة ملكًا لك ومحفوظة بمعزل عن أصول المشغّل. فأنت تملك معدنًا، والخزنة أمينة حفظ. وإن أفلس المشغّل لم تكن سبائكك من تركته. والكلفة: رسم تخزين سنوي، نسبة عادةً.

**3. الحسابات غير المخصّصة.** لك مطالبة بكمّية ذهب، لا بسبائك بعينها. فالمؤسسة مَدينة لك بمعدن. و**أنت دائن عادي**. وهذا أرخص أو "مجاني" التخزين غالبًا — لأن المؤسسة تستخدم الرصيد. فإن أفلست وقفت في الطابور مع بقيّة الدائنين.

**4. صناديق المؤشّرات والصناديق الاستثمارية.** تملك وحدات في صندوق يحوز سبائك. والجيّد منها مغطّى بمعدن مخصّص، بقائمة سبائك منشورة وتدقيق مستقل. وهي منظّمة جيدًا وشديدة السيولة ومنخفضة الرسوم السنوية. لكنك تملك ورقة مالية لا معدنًا، والاسترداد بشكل مادي متاح عادةً لكبار المؤسسات فقط.

**5. تطبيقات الذهب الرقمي والرموز.** وهي الأوسع تفاوتًا في الجودة بفارق كبير. فبعضها مغطّى بالكامل بمعدن مخصّص مدقَّق بشهادات منشورة. وبعضها قيد في قاعدة بيانات مع وعد ملحق. والتقنية لا تخبرك شيئًا؛ وإنما يخبرك ترتيب الحفظ والتدقيق.

## السؤال الوحيد الذي يفصل بينها

**إن أفلس المُصدِر غدًا، هل تملك معدنًا أم تملك مطالبة؟**

هذا هو التمييز كله، ويستحق الصراحة: فالذهب غير المخصّص تعرّض ائتماني لمؤسسة، مقوَّم بالذهب. وقد يكون سليمًا تمامًا. لكنه ببساطة ليس الأصل نفسه الذي هو سبيكة، وهو أضعف ما يكون تحديدًا في أزمة نظامية — وهو السيناريو الذي يقوم عليه كثير من جاذبية الذهب.

## مقارنة صادقة

| | مادي بحوزتك | خزنة مخصّصة | غير مخصّص | صندوق مؤشّر | تطبيق رقمي |
|---|---|---|---|---|---|
| مخاطرة الطرف المقابل | لا شيء | منخفضة | **مرتفعة** | منخفضة–متوسّطة | متفاوتة جدًا |
| الكلفة الجارية | تخزين/تأمين | ~0.1–1% سنويًا | غالبًا لا شيء | ~0.1–0.4% سنويًا | متفاوتة |
| السيولة | تاجر محلي | جيدة | جيدة | ممتازة | داخل المنصّة |
| فارق الشراء/البيع | الأوسع | ضيّق | ضيّق | الأضيق | متفاوت |
| قابلية التسلّم | لك أصلًا | نعم | أحيانًا | نادرًا | أحيانًا |
| قابلية التجزئة | ضعيفة | نعم | نعم | نعم | نعم |

## ما يصلح له كل منها فعلًا

**التداول أو التعرّض متوسّط الأجل** — صندوق مؤشّر، في الغالب الأعمّ. فهو الأرخص والأكثر سيولة والأضيق فارقًا. وإن كان هدفك التعرّض لسعر الذهب لا حيازة المعدن، فدفع علاوات المشغولات لبلوغه خطأ مكلف.

**تأمين طويل الأجل ضد المشكلات النظامية** — مادي بحوزتك، أو تخزين مخصّص في خزنة. فهذه هي الحالة التي تكون فيها مخاطرة الطرف المقابل هي الغرض كله، والتي يقوّض فيها الحساب غير المخصّص المقصد.

**التراكم الصغير المنتظم** — منصّة رقمية ذات سمعة أو خزنة مخصّصة، مع التحويل إلى تسلّم مادي حين يبرّر الرصيد ذلك. وتحقّق من شروط التسليم *قبل* أن تبدأ، لا حين تريد الخروج.

**الارتداء** — مشغولات، وهي قرار استهلاك فيه مكوّن ادّخاري، تناولناه في دليلنا عن العملات والسبائك والمشغولات.

## التحرّي في أي منتج غير مادي

- هل المعدن **مخصّص** و**مفروز**؟ خذها كتابةً.
- هل يوجد **تدقيق مستقل**، وهل تستطيع قراءته؟
- هل توجد **قائمة سبائك منشورة** بأرقام تسلسلية؟
- من هو **أمين الحفظ**، وهل هو منفصل عن المُصدِر؟
- هل المُصدِر **منظَّم**، ومن الجهة؟ تحقّق في موقع الجهة نفسه.
- ما **شروط التسليم** — الحدّ الأدنى، والكلفة، ومدّة الإشعار؟
- ما **إجمالي الكلفة السنوية**، شاملًا أي فارق عند التحويل؟

والمنتج الذي يجيب عن السبعة بوضوح منتج تستطيع تقييمه. والتهرّب في أي منها هو الجواب.

## الخلاصة العملية

معظم الناس يخدمهم المزج: صندوق مؤشّر أو حساب مخصّص لمعظم التعرّض للسعر، وبعض المعدن المادي بحوزتهم مباشرةً للسيناريو الذي لم يُصمَّم الباقي للنجاة منه. والمهمّ أن تعرف أيّها لديك — لأن "أنا أملك ذهبًا" ليست عبارة محدّدة بما يكفي للتخطيط عليها.

*ومهما كانت الصورة التي تحوزها، فصفحات الدول لدينا تعطيك السعر المباشر للجرام وللأونصة لتقوّمها به، بعملتك أنت.*`,
  },
];
