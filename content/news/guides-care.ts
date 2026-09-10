import type { Article } from "@/content/news/articles";

/**
 * What happens after the purchase: storing gold, keeping it in condition, and
 * insuring it. These are the questions readers ask once they already own
 * something, and nothing on a price page speaks to them.
 *
 * Second content batch, 2026-09-10 (see guides-saving.ts for the AdSense
 * context). Dates continue the site's weekly cadence and are not batched.
 */

const AUTHOR = {
  name: "Sadeq Sayed Ahmad",
  url: "/about/sadeq",
  image: "/author/sadeq.jpeg",
};

export const CARE_ARTICLES: Article[] = [
  {
    slug: "storing-gold-safely-home-or-bank",
    publishedAt: "2026-06-11T09:00:00Z",
    title_en: "Storing Gold: Home Safe, Bank Box, or Vault",
    title_ar: "تخزين الذهب: خزنة المنزل أم صندوق البنك أم الخزائن المتخصّصة",
    description_en:
      "Each option trades cost against access against risk, and the differences are bigger than most owners realise — including the one most people never check, which is whether anything in the box is insured at all.",
    description_ar:
      "كل خيار يوازن بين الكلفة وسهولة الوصول والمخاطرة، والفروق أكبر ممّا يدرك معظم المالكين — بما فيها النقطة التي لا يتحقّق منها أحد تقريبًا: هل ما في الصندوق مؤمَّن أصلًا؟",
    tags: ["storage", "security", "savings", "education"],
    author: AUTHOR,
    body_en: `Buying gold is the part people research. Storing it is the part they improvise. That is backwards, because storage is where the ownership actually happens — for years, quietly, and usually without being revisited until something goes wrong.

There are three realistic options, and the right one depends on how much you hold and how often you need to touch it.

## Home storage

**What it is good for:** small holdings, pieces worn regularly, and immediate access. No fees, no opening hours, no third party.

**What it costs you:** risk you carry yourself.

If you keep gold at home, a few things matter far more than the rest:

- **A safe must be bolted down.** An unanchored safe is a container that a thief carries out and opens elsewhere. Anchoring to a concrete floor or a structural wall is the difference between a safe and a box.
- **Fire rating and burglary rating are different things.** A document safe rated for fire may offer very little resistance to force. Check which rating you are buying.
- **Discretion is a real security measure.** The most common way a household is targeted is that someone outside it knows what is inside. That includes tradespeople, social media, and casual conversation.
- **Split the holding.** Everything in one place is one event away from total loss.

The honest limitation: home insurance almost always caps jewellery and valuables at a low figure unless items are specifically listed, and some policies exclude bullion entirely. We cover that in our guide on insuring gold, and it is worth reading before assuming you are covered.

## A bank safe deposit box

**What it is good for:** medium holdings you rarely need, at modest cost.

**What it costs you:** an annual fee, and access only during banking hours.

The point almost nobody checks: **the contents of a safe deposit box are generally not insured by the bank.** The bank rents you a secure space; it does not underwrite what you put in it. Some banks offer a limited contents cover as an add-on, many do not, and the limits are usually well below what a serious holding is worth.

So if you use a bank box, arrange insurance separately, and ask the bank in writing what — if anything — their liability actually is.

Other practicalities:

- **Access is not guaranteed at all times.** Holidays, branch closures and, in some countries, banking disruptions all constrain access. Anyone whose plan is "I can get it whenever I need it" should think about the scenarios in which they would most want it.
- **Keep an inventory outside the box.** Photographs, weights, karats, serial numbers, and receipts, stored somewhere else. A list that lives only inside the box is no list at all.
- **Name a second signatory** if the holding matters to a family, and understand what happens to access on death under your local law. This catches families out constantly.

## A specialist vault

**What it is good for:** large bullion holdings, and anyone who wants storage that comes with insurance built in.

**What it costs you:** an annual percentage of value, typically, rather than a flat fee.

Professional precious-metals vaults are a different product from a bank box. The serious ones offer:

- **Allocated, segregated storage** — specific bars with specific serial numbers recorded as yours, not a claim on a pool. This distinction matters enormously and is covered in our guide on paper versus physical gold.
- **Insurance as part of the service**, at full value.
- **Audits**, and a bar list you can verify.

The questions to ask are: is my metal **allocated** and **segregated**; who insures it and for how much; can I take physical delivery, at what notice and what cost; and what happens if the operator fails.

## Choosing

| | Home safe | Bank box | Vault |
|---|---|---|---|
| Cost | One-off | Low annual fee | % of value per year |
| Access | Immediate | Banking hours | By arrangement |
| Insured by default | No | Usually not | Usually yes |
| Sensible for | Worn pieces, small amounts | Medium holdings | Large bullion |

Most families land on a split, and it is a sensible one: the pieces actually worn stay at home in an anchored safe, and the savings portion — coins and bars — goes into a box or vault where it is insured and out of the way.

*Whatever you choose, keep a written inventory with weight and karat per item. Our country pages let you value that list at today's price in your own currency in about a minute.*`,
    body_ar: `شراء الذهب هو الجزء الذي يبحث فيه الناس، وتخزينه هو الجزء الذي يرتجلونه. وهذا مقلوب، لأن التخزين هو حيث تجري الملكية فعلًا — لسنوات، بهدوء، ودون مراجعة عادةً حتى يقع مكروه.

وثمّة ثلاثة خيارات واقعية، والصحيح منها يتوقّف على حجم ما تملك وعلى تكرار حاجتك إليه.

## التخزين في المنزل

**متى يصلح:** للحيازات الصغيرة، وللقطع التي تُلبس باستمرار، وللوصول الفوري. لا رسوم ولا مواعيد عمل ولا طرف ثالث.

**وما يكلّفك:** مخاطرة تحملها أنت.

وإن احتفظت بالذهب في البيت، فبعض الأمور أهمّ من غيرها بكثير:

- **الخزنة يجب أن تكون مثبَّتة.** فالخزنة غير المثبَّتة صندوق يحمله السارق ويفتحه في مكان آخر. والتثبيت في أرضية خرسانية أو جدار إنشائي هو الفرق بين خزنة وصندوق.
- **مقاومة الحريق غير مقاومة الكسر.** فخزنة الوثائق المصنّفة ضد الحريق قد تقاوم العنف مقاومة ضعيفة جدًا. تحقّق أي تصنيف تشتري.
- **الكتمان إجراء أمني حقيقي.** فأشيع طريقة لاستهداف بيت أن يعرف أحد من خارجه ما بداخله. ويشمل ذلك العمّال ووسائل التواصل والأحاديث العابرة.
- **وزّع الحيازة.** فوضع كل شيء في مكان واحد يجعلك على بعد حادثة واحدة من خسارة كاملة.

والقيد الصادق: تأمين المنزل يضع سقفًا منخفضًا للحلي والنفائس في الغالب الأعمّ ما لم تُدرَج القطع بأسمائها، وبعض الوثائق تستثني السبائك كليًا. وقد تناولنا ذلك في دليلنا عن تأمين الذهب، ويستحق القراءة قبل افتراض أنك مغطّى.

## صندوق الأمانات في البنك

**متى يصلح:** للحيازات المتوسّطة التي نادرًا ما تحتاجها، بكلفة معقولة.

**وما يكلّفك:** رسمًا سنويًا، ووصولًا في أوقات الدوام فقط.

والنقطة التي لا يتحقّق منها أحد تقريبًا: **محتويات صندوق الأمانات غير مؤمَّنة من البنك عمومًا.** فالبنك يؤجّرك حيّزًا آمنًا، ولا يضمن ما تضعه فيه. وبعض البنوك يعرض تغطية محدودة للمحتويات كإضافة، وكثير منها لا يفعل، والسقوف عادةً أدنى بكثير من قيمة حيازة جادّة.

فإن استخدمت صندوق بنك، رتّب التأمين منفصلًا، واسأل البنك كتابةً عن مسؤوليته الفعلية — إن وُجدت.

وأمور عملية أخرى:

- **الوصول ليس مضمونًا في كل وقت.** فالعطل وإغلاق الفروع، وفي بعض البلدان الاضطرابات المصرفية، كلها تقيّد الوصول. ومن كانت خطته "أستطيع أخذه متى شئت" فليفكّر في السيناريوهات التي سيريده فيها أشدّ ما يريد.
- **احتفظ بجرد خارج الصندوق.** صور وأوزان وعيارات وأرقام تسلسلية وفواتير، محفوظة في مكان آخر. فالقائمة التي تعيش داخل الصندوق وحده ليست قائمة.
- **عيّن مفوَّضًا ثانيًا** إن كانت الحيازة تهمّ أسرة، واعرف ماذا يحدث للوصول عند الوفاة في قانون بلدك. وهذا يوقع العائلات باستمرار.

## الخزائن المتخصّصة

**متى تصلح:** لحيازات السبائك الكبيرة، ولمن يريد تخزينًا يأتي بتأمين مدمج.

**وما تكلّفك:** نسبة سنوية من القيمة عادةً، لا رسمًا ثابتًا.

وخزائن المعادن الثمينة المهنية منتج مختلف عن صندوق البنك. والجادّ منها يقدّم:

- **تخزينًا مخصّصًا ومفروزًا** — سبائك بعينها بأرقام تسلسلية مسجّلة باسمك، لا حصّة في وعاء مشترك. وهذا التمييز بالغ الأهمية، وقد تناولناه في دليلنا عن الذهب الورقي مقابل المادي.
- **تأمينًا ضمن الخدمة** بالقيمة الكاملة.
- **تدقيقًا** وقائمة سبائك يمكنك التحقّق منها.

والأسئلة الواجبة: هل معدني **مخصّص** و**مفروز**؛ ومن يؤمّنه وبكم؛ وهل أستطيع التسلّم الفعلي، وبأي مهلة وبأي كلفة؛ وماذا يحدث إن أفلس المشغّل.

## الاختيار

| | خزنة المنزل | صندوق البنك | الخزائن المتخصّصة |
|---|---|---|---|
| الكلفة | مرّة واحدة | رسم سنوي منخفض | نسبة من القيمة سنويًا |
| الوصول | فوري | أوقات الدوام | بترتيب مسبق |
| مؤمَّن تلقائيًا | لا | غالبًا لا | غالبًا نعم |
| يناسب | القطع الملبوسة والمبالغ الصغيرة | الحيازات المتوسّطة | السبائك الكبيرة |

ومعظم العائلات تستقرّ على توزيع، وهو توزيع عاقل: القطع المُلبَسة فعلًا تبقى في البيت في خزنة مثبَّتة، وحصّة الادّخار — عملات وسبائك — تذهب إلى صندوق أو خزنة حيث تكون مؤمَّنة وبعيدة عن الطريق.

*ومهما اخترت، احتفظ بجرد مكتوب فيه الوزن والعيار لكل قطعة. وصفحات الدول لدينا تتيح لك تقويم تلك القائمة بسعر اليوم بعملتك في نحو دقيقة.*`,
  },
  {
    slug: "caring-for-gold-jewellery",
    publishedAt: "2026-07-23T09:00:00Z",
    title_en: "Caring for Gold Jewellery Without Damaging It",
    title_ar: "العناية بالمشغولات الذهبية دون إتلافها",
    description_en:
      "Gold does not tarnish, but the things around it can still ruin a piece — chlorine, ultrasonic cleaners on the wrong settings, and plating that wears through. What is safe, what is not, and when to leave it to a jeweller.",
    description_ar:
      "الذهب لا يصدأ، لكن ما حوله قد يُتلف القطعة — الكلور، وأجهزة التنظيف بالموجات فوق الصوتية بإعدادات خاطئة، والطلاء الذي ينكشط. ما هو آمن، وما ليس كذلك، ومتى تترك الأمر للصائغ.",
    tags: ["care", "jewellery", "buying-guide", "education"],
    author: AUTHOR,
    body_en: `Pure gold does not rust, tarnish or corrode. That is one of the reasons it became money. But the jewellery in your drawer is not pure gold — it is an alloy, often plated, sometimes set with stones, and every one of those additions is more fragile than the metal itself.

Most damage to gold jewellery is avoidable and is caused by things people believe are harmless.

## What actually damages gold jewellery

**Chlorine.** This is the big one. Chlorine attacks the alloying metals in gold — the copper, silver, nickel and zinc that make 18K and 14K workable. Repeated exposure causes the alloy to become brittle and the piece can eventually crack or snap, often at a clasp or a thin section. Swimming pools, hot tubs and household bleach are all sources.

The rule is simple: **take gold off before a pool, and before cleaning with bleach.** The higher the karat, the less alloy there is to attack — 21K and 22K are more resistant than 14K — but no karat benefits from the exposure.

**Abrasion.** Gold is soft. 24K is very soft. Everyday knocks put fine scratches into a surface and, over years, wear metal away — particularly on ring shanks and the underside of bangles. This is normal and is why old pieces feel thinner.

**Cosmetics, lotions and perfume** build a film that dulls the surface and collects in crevices. Not damaging, but the usual reason a piece "loses its shine."

**Ultrasonic cleaners** are excellent for plain gold and dangerous for several common stones. Emerald, opal, pearl, turquoise and any fracture-filled or glued stone can be damaged or loosened. Do not put a stone-set piece into an ultrasonic bath unless you know what the stone is.

**Storing pieces loose together.** Harder stones scratch softer metal. A drawer of mixed jewellery is a drawer of small abrasions.

## Cleaning safely at home

For plain gold, or gold with hard stones such as diamond, ruby or sapphire:

1. Warm water, a few drops of plain dish soap.
2. Soak ten to fifteen minutes.
3. Brush gently with a **soft** toothbrush, paying attention to the back of settings where dirt collects and where it actually affects how a stone looks.
4. Rinse thoroughly — in a bowl, never over an open drain.
5. Dry with a soft lint-free cloth, and let it air-dry fully before storing.

That is the whole method. It handles the great majority of dullness.

**Do not use:** toothpaste (abrasive), baking soda (abrasive), bleach or any chlorine cleaner (damages alloy), or ammonia on anything with soft or treated stones.

## Plating, and why it wears

A lot of jewellery — especially white gold — is **rhodium plated**. Rhodium gives white gold its bright, cool white; the alloy underneath is a warmer, greyer colour. Plating is a surface layer measured in microns, and it wears.

So a white gold ring turning faintly yellow after a few years is not a fake and not a defect. It is plating wearing through, and re-plating is a routine, inexpensive jeweller's job. Expect it periodically on rings, less often on earrings and pendants that see less friction.

The same applies to gold-plated and gold-filled items, which are not solid gold at all and will eventually wear to the base metal. Our guide on reading a hallmark covers how to tell what you actually own.

## When to stop and see a jeweller

Take it in — do not fix it yourself — if you notice:

- **A stone that moves** when you press it gently. Continuing to wear it is how stones are lost.
- **A thin or grooved ring shank.** It can be re-shanked long before it fails; after it fails, the repair is bigger.
- **A stretched or worn clasp**, especially on a heavy chain. Clasps are the most common point of loss.
- **A visible crack or a piece that has become stiff or brittle** — often the signature of chlorine exposure.
- **Anything antique or with unusual stones**, where the right answer is frequently to clean less, not more.

## The one habit that matters most

Put jewellery on last and take it off first. After hair products, perfume and lotion; before swimming, cleaning, sport and sleep. That single habit prevents more damage than any cleaning routine.

*Knowing the karat of each piece tells you how much alloy it contains and therefore how vulnerable it is — our country pages show the current per-gram value of every karat, and our hallmark guide explains how to read the stamp on the piece.*`,
    body_ar: `الذهب الخالص لا يصدأ ولا يتأكسد ولا يتآكل. وهذا أحد أسباب صيرورته نقدًا. لكن الحلي في درجك ليست ذهبًا خالصًا — بل سبيكة، مطليّة غالبًا، ومرصّعة أحيانًا، وكل إضافة من هذه أهشّ من المعدن نفسه.

ومعظم الضرر الذي يصيب المشغولات الذهبية يمكن تفاديه، وسببه أشياء يظنّها الناس غير ضارّة.

## ما يُتلف المشغولات الذهبية فعلًا

**الكلور.** وهذا هو الأهمّ. فالكلور يهاجم المعادن المخلوطة في الذهب — النحاس والفضة والنيكل والزنك التي تجعل عيار 18 و14 قابلين للتشغيل. والتعرّض المتكرّر يجعل السبيكة قصفة، وقد تتشقّق القطعة أو تنكسر في النهاية، عند المشبك أو المقطع الرفيع غالبًا. ومصادره حمامات السباحة وأحواض المياه الساخنة ومبيّض الغسيل المنزلي.

والقاعدة بسيطة: **اخلع الذهب قبل المسبح، وقبل التنظيف بالمبيّض.** وكلّما ارتفع العيار قلّت السبيكة المعرّضة للهجوم — فعيار 21 و22 أكثر مقاومة من عيار 14 — لكن لا عيار يستفيد من التعرّض.

**الاحتكاك.** الذهب طري، وعيار 24 طري جدًا. والاصطدامات اليومية تُحدث خدوشًا دقيقة في السطح، وعلى مرّ السنين تُذهب معدنًا — خصوصًا في ساق الخاتم وأسفل الأساور. وهذا طبيعي، وهو سبب إحساسك بأن القطع القديمة أرقّ.

**مستحضرات التجميل والمرطّبات والعطور** تكوّن طبقة تُطفئ اللمعان وتتجمّع في الشقوق. وهي غير مُتلفة، لكنها السبب المعتاد في أن القطعة "تفقد بريقها".

**أجهزة التنظيف بالموجات فوق الصوتية** ممتازة للذهب السادة وخطرة على عدد من الأحجار الشائعة. فالزمرّد والأوپال واللؤلؤ والفيروز وأي حجر معالَج بالكسور أو ملصوق بالغراء قد يتضرّر أو يرتخي. لا تضع قطعة مرصّعة في حوض فوق صوتي ما لم تعرف ما الحجر.

**تخزين القطع سائبة معًا.** فالأحجار الأصلب تخدش المعدن الأطرى. ودرج فيه حلي مختلطة درجٌ فيه خدوش صغيرة.

## التنظيف الآمن في البيت

للذهب السادة، أو الذهب المرصّع بأحجار صلبة كالألماس والياقوت والزفير:

1. ماء دافئ، وقطرات من صابون أطباق عادي.
2. نقع من عشر إلى خمس عشرة دقيقة.
3. فرك لطيف بفرشاة أسنان **ناعمة**، مع الاهتمام بظهر الأطباق حيث يتجمّع الوسخ وحيث يؤثّر فعلًا في مظهر الحجر.
4. شطف جيّد — في وعاء، لا فوق بالوعة مفتوحة أبدًا.
5. تجفيف بقطعة ناعمة خالية من الوبر، ثم تركها تجفّ تمامًا قبل التخزين.

هذه هي الطريقة كاملة، وهي تعالج الأغلبية الساحقة من حالات فقدان اللمعان.

**ولا تستخدم:** معجون الأسنان (كاشط)، ولا بيكربونات الصوديوم (كاشطة)، ولا المبيّض أو أي منظّف كلوري (يُتلف السبيكة)، ولا النشادر على أي شيء فيه أحجار طريّة أو معالَجة.

## الطلاء، ولماذا ينكشط

كثير من الحلي — وخصوصًا الذهب الأبيض — **مطلي بالروديوم**. والروديوم هو ما يمنح الذهب الأبيض بياضه الساطع البارد؛ أمّا السبيكة تحته فلونها أدفأ وأميل إلى الرمادي. والطلاء طبقة سطحية تُقاس بالميكرونات، وهي تنكشط.

فالخاتم من الذهب الأبيض الذي يميل إلى الاصفرار بعد سنوات ليس مقلّدًا ولا معيبًا، بل هو طلاء انكشط، وإعادة الطلاء عمل صياغة روتيني وغير مكلف. توقّعه دوريًا في الخواتم، وأقلّ في الأقراط والدلايات الأقل احتكاكًا.

وينطبق الأمر نفسه على القطع المطليّة والمحشوّة بالذهب، وهي ليست ذهبًا مصمتًا أصلًا وستنكشط إلى المعدن الأساس في النهاية. ودليلنا عن قراءة الدمغة يبيّن كيف تعرف ما تملكه فعلًا.

## متى تتوقّف وتذهب إلى الصائغ

خذ القطعة إليه — ولا تصلحها بنفسك — إذا لاحظت:

- **حجرًا يتحرّك** عند ضغطه برفق. فمواصلة اللبس هي كيف تُفقد الأحجار.
- **ساق خاتم رفيعة أو محزّزة.** فيمكن تبديلها قبل أن تنكسر بوقت طويل؛ وبعد الكسر يكبر الإصلاح.
- **مشبكًا متمدّدًا أو مهترئًا**، خصوصًا في سلسلة ثقيلة. فالمشابك أشيع نقطة فقدان.
- **شقًّا ظاهرًا أو قطعة صارت متيبّسة أو قصفة** — وهي بصمة التعرّض للكلور غالبًا.
- **أي قطعة أثرية أو ذات أحجار غير مألوفة**، حيث يكون الجواب الصحيح كثيرًا هو التنظيف أقلّ لا أكثر.

## العادة الأهمّ على الإطلاق

البس الحلي آخر شيء، واخلعها أول شيء. بعد مستحضرات الشعر والعطر والمرطّب، وقبل السباحة والتنظيف والرياضة والنوم. هذه العادة وحدها تمنع من الضرر أكثر ممّا يمنعه أي روتين تنظيف.

*ومعرفة عيار كل قطعة تخبرك بكمّية السبيكة فيها ومن ثمّ بمدى هشاشتها — وصفحات الدول لدينا تعرض القيمة الحالية للجرام لكل عيار، ودليل الدمغة يشرح كيف تقرأ الختم على القطعة.*`,
  },
  {
    slug: "insuring-gold-what-policies-cover",
    publishedAt: "2026-08-19T14:00:00Z",
    title_en: "Insuring Gold: What Policies Actually Cover",
    title_ar: "تأمين الذهب: ما تغطّيه الوثائق فعلًا",
    description_en:
      "Most owners assume their home policy covers their gold. Most home policies cap it at a figure far below what a family set is worth, and some exclude bullion entirely. What to check, what to document, and how a claim is actually valued.",
    description_ar:
      "يفترض معظم المالكين أن وثيقة تأمين المنزل تغطّي ذهبهم. ومعظم وثائق المنزل تضع له سقفًا أدنى بكثير من قيمة طقم عائلي، وبعضها يستثني السبائك كليًا. ماذا تتحقّق منه، وماذا توثّق، وكيف تُقوَّم المطالبة فعلًا.",
    tags: ["insurance", "storage", "risk", "education"],
    author: AUTHOR,
    body_en: `Insurance is the part of gold ownership that people discover after a loss rather than before it. The pattern is consistent: an owner assumes the household policy covers everything in the house, discovers a valuables sub-limit at claim time, and recovers a fraction of what the pieces were worth.

The fix is a twenty-minute reading job, done once.

## The sub-limit is the thing to look for

Almost every home contents policy contains a **valuables sub-limit** — a cap on jewellery and precious metals, separate from and much lower than the overall contents sum. It may be expressed as a total, and often also as a **single-article limit** that caps any one piece.

Two consequences follow, and both surprise people:

- A family gold set can exceed the total valuables cap on its own, meaning the rest of your jewellery is effectively uninsured.
- A single heavy necklace can exceed the single-article limit even when the total cap is comfortable.

Find both numbers in your policy. If your holding is worth more, the answer is usually to **schedule** the items — list them specifically, with valuations, for an additional premium. Scheduled items are typically insured for their agreed value and often without the deductible that applies to general contents.

## Bullion is frequently treated separately

Coins and bars are commonly excluded from standard home policies, or covered at a token amount, because insurers treat them as near-cash rather than as household goods. Do not assume the jewellery provision extends to a bar. Ask the question explicitly, in writing.

This is one of the arguments for a specialist vault, where insurance at full value is part of the product rather than an argument you have later.

## Bank boxes are not automatically insured

Worth repeating because it catches so many people: **a bank generally does not insure the contents of a safe deposit box.** It provides a secure space. Some banks offer limited contents cover as a paid add-on; many do not.

If your gold lives in a bank box, either buy that add-on with limits you have actually checked, or extend your own policy to cover property away from the home. Many insurers will do the latter, and it is usually cheap — but it does not happen by default.

## How a claim is valued

This is where documentation pays for itself. Insurers typically settle on one of two bases:

- **Agreed value** — a figure fixed in advance, usually requiring a valuation. Predictable, and the better option for anything unusual or antique.
- **Replacement value** — what it would cost to replace with an equivalent piece today. Note that this rises with the gold price, so a sum insured set five years ago may now be badly out of date.

For gold specifically, the second point is the one that bites. Gold prices move a great deal over a few years. **Review your sum insured annually**, using the current price rather than what you paid. This site's country pages make that a one-minute job: weight × karat × today's per-gram price.

## What to document, before anything happens

Keep this outside the house — cloud storage or with a relative:

- **Photographs** of each piece, front and back, with something for scale.
- **Weight and karat** for each item.
- **Purchase receipts**, which establish both value and ownership.
- **Serial numbers and assay certificates** for bars and coins.
- **A professional valuation** for anything scheduled, refreshed on whatever cycle the insurer requires.

An inventory that exists only in the same building as the gold is not an inventory.

## What commonly voids or reduces cover

- **Unforced entry.** Many policies reduce or refuse a theft claim where there was no sign of forced entry — which is why leaving a door unlocked matters more than it seems.
- **Unoccupancy clauses.** Cover can lapse or narrow if a home is empty beyond a stated number of consecutive days. This affects families who travel for extended periods.
- **Safe conditions.** If the policy requires a specified safe rating for a given value, cover may depend on actually having it.
- **Items away from home.** Wearing a piece to a wedding abroad may fall outside cover unless the policy includes personal effects away from the home, worldwide.
- **Undeclared value.** Underinsuring the contents overall can trigger proportional reduction of any claim.

## The short version

Read three numbers in your policy — the valuables total, the single-article limit, and whether bullion is included. If your gold exceeds any of them, schedule the items or buy a specialist policy. Then photograph everything, store the record elsewhere, and re-check the sum insured once a year against the current gold price.

*Valuing your inventory takes a minute: our country pages carry the live per-gram price for 24, 22, 21, 18 and 14 karat in your own currency.*`,
    body_ar: `التأمين هو الجزء من ملكية الذهب الذي يكتشفه الناس بعد الخسارة لا قبلها. والنمط ثابت: يفترض المالك أن وثيقة المنزل تغطّي كل ما فيه، ثم يكتشف عند المطالبة سقفًا فرعيًا للنفائس، فيسترد جزءًا يسيرًا ممّا كانت تساويه القطع.

والعلاج مهمّة قراءة مدّتها عشرون دقيقة، تُؤدّى مرّة واحدة.

## السقف الفرعي هو ما تبحث عنه

تكاد كل وثيقة لمحتويات المنزل تتضمّن **سقفًا فرعيًا للنفائس** — حدًّا للحلي والمعادن الثمينة، منفصلًا عن مبلغ المحتويات الكلي وأدنى منه بكثير. وقد يُذكر كمجموع، وكثيرًا ما يُذكر معه **حدّ للقطعة الواحدة** يقيّد أي قطعة منفردة.

ويترتّب على ذلك أمران، وكلاهما يفاجئ الناس:

- طقم ذهب عائلي قد يتجاوز سقف النفائس الكلي وحده، ممّا يعني أن بقيّة حليّك غير مؤمَّنة عمليًا.
- وعقد ثقيل واحد قد يتجاوز حدّ القطعة الواحدة حتى لو كان السقف الكلي مريحًا.

ابحث عن الرقمين في وثيقتك. فإن كانت حيازتك أعلى، فالحلّ عادةً **جدولة** القطع — أي إدراجها بأعيانها مع تقويمات، مقابل قسط إضافي. والقطع المجدولة تُؤمَّن عادةً بقيمة متّفق عليها، وكثيرًا ما دون التحمّل المطبَّق على المحتويات العامة.

## السبائك تُعامَل معاملة منفصلة غالبًا

العملات والسبائك مستثناة عادةً من وثائق المنزل القياسية، أو مغطّاة بمبلغ رمزي، لأن شركات التأمين تعاملها كشبه نقد لا كمتاع منزلي. لا تفترض أن بند الحلي يمتدّ إلى سبيكة. اطرح السؤال صراحةً وكتابةً.

وهذه إحدى الحجج لصالح الخزائن المتخصّصة، حيث يكون التأمين بالقيمة الكاملة جزءًا من المنتج لا جدالًا تخوضه لاحقًا.

## صناديق البنوك ليست مؤمَّنة تلقائيًا

يستحق التكرار لكثرة من يقع فيه: **البنك لا يؤمّن محتويات صندوق الأمانات عمومًا.** فهو يوفّر حيّزًا آمنًا. وبعض البنوك يعرض تغطية محدودة للمحتويات كإضافة مدفوعة، وكثير منها لا يفعل.

فإن كان ذهبك في صندوق بنك، فإمّا أن تشتري تلك الإضافة بسقوف تحقّقت منها فعلًا، وإمّا أن توسّع وثيقتك لتغطّي الممتلكات خارج المنزل. وكثير من شركات التأمين تفعل الثانية، وهي رخيصة عادةً — لكنها لا تحدث تلقائيًا.

## كيف تُقوَّم المطالبة

وهنا يسدّد التوثيق كلفته. فشركات التأمين تسوّي عادةً على أحد أساسين:

- **القيمة المتّفق عليها** — رقم يُثبَّت مسبقًا، ويتطلّب تقويمًا عادةً. وهو متوقّع، والخيار الأفضل لأي شيء غير مألوف أو أثري.
- **قيمة الاستبدال** — ما يكلّفه استبدالها بقطعة مكافئة اليوم. ولاحظ أن هذه ترتفع مع سعر الذهب، فمبلغ تأمين حُدِّد قبل خمس سنوات قد يكون اليوم متأخّرًا كثيرًا.

وفي الذهب تحديدًا، النقطة الثانية هي التي تعضّ. فأسعار الذهب تتحرّك كثيرًا خلال سنوات قليلة. **راجع مبلغ التأمين سنويًا**، بالسعر الحالي لا بما دفعته. وصفحات الدول في هذا الموقع تجعلها مهمّة دقيقة واحدة: الوزن × العيار × سعر الجرام اليوم.

## ماذا توثّق قبل وقوع أي شيء

احتفظ بهذا خارج البيت — في تخزين سحابي أو عند قريب:

- **صور** لكل قطعة، من الأمام والخلف، مع ما يدلّ على المقياس.
- **الوزن والعيار** لكل قطعة.
- **فواتير الشراء**، وهي تثبت القيمة والملكية معًا.
- **الأرقام التسلسلية وشهادات الفحص** للسبائك والعملات.
- **تقويم مهني** لكل مجدول، يُجدَّد بحسب الدورة التي تطلبها شركة التأمين.

والجرد الذي لا يوجد إلا في المبنى نفسه الذي فيه الذهب ليس جردًا.

## ما يُبطل التغطية أو ينقصها عادةً

- **الدخول دون كسر.** فكثير من الوثائق تخفض مطالبة السرقة أو ترفضها حين لا يوجد أثر للدخول العنوة — ولهذا يهمّ ترك باب غير مقفل أكثر ممّا يبدو.
- **شروط الخلوّ.** فقد تسقط التغطية أو تضيق إذا خلا المنزل أكثر من عدد أيام متتالية محدّد. وهذا يمسّ الأسر التي تسافر مددًا طويلة.
- **شروط الخزنة.** فإن اشترطت الوثيقة تصنيف خزنة معيّنًا لقيمة معيّنة، فقد تتوقّف التغطية على امتلاكها فعلًا.
- **القطع خارج المنزل.** فارتداء قطعة في عرس بالخارج قد يقع خارج التغطية ما لم تشمل الوثيقة المتعلّقات الشخصية خارج المنزل عالميًا.
- **قيمة غير مُصرَّح بها.** فالتأمين بأقلّ من قيمة المحتويات إجمالًا قد يُفعِّل تخفيضًا تناسبيًا لأي مطالبة.

## الخلاصة القصيرة

اقرأ ثلاثة أرقام في وثيقتك — مجموع النفائس، وحدّ القطعة الواحدة، وهل السبائك مشمولة. فإن تجاوز ذهبك أيًّا منها، فاجدول القطع أو اشترِ وثيقة متخصّصة. ثم صوّر كل شيء، واحفظ السجل في مكان آخر، وأعد فحص مبلغ التأمين مرّة كل سنة مقابل سعر الذهب الحالي.

*وتقويم جردك يستغرق دقيقة: صفحات الدول لدينا تحمل سعر الجرام المباشر لعيار 24 و22 و21 و18 و14 بعملتك أنت.*`,
  },
];
