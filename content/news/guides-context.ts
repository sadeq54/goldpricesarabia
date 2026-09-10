import type { Article } from "@/content/news/articles";

/**
 * The macro layer: what actually drives the dollar gold price, why central
 * banks have been the marginal buyer, and how much gold belongs in a household
 * budget. These answer the "why did it move" and "how much should I hold"
 * questions that a price table provokes but cannot address.
 *
 * Second content batch, 2026-09-10 (see guides-saving.ts for the AdSense
 * context). Deliberately avoids forecasts — the site reports prices, it does
 * not predict them, and an article that guesses ages badly.
 */

const AUTHOR = {
  name: "Sadeq Sayed Ahmad",
  url: "/about/sadeq",
  image: "/author/sadeq.jpeg",
};

export const CONTEXT_ARTICLES: Article[] = [
  {
    slug: "what-actually-moves-the-gold-price",
    publishedAt: "2026-05-28T09:00:00Z",
    title_en: "What Actually Moves the Gold Price",
    title_ar: "ما الذي يحرّك سعر الذهب فعلًا",
    description_en:
      "Real interest rates, the dollar, central bank buying and ETF flows explain most of gold's large moves. What each one does, why 'inflation' is a worse predictor than people assume, and how to read a move you didn't expect.",
    description_ar:
      "أسعار الفائدة الحقيقية، والدولار، وشراء البنوك المركزية، وتدفّقات الصناديق تفسّر معظم تحرّكات الذهب الكبيرة. ماذا يفعل كل عامل، ولماذا التضخّم مؤشّر أضعف ممّا يُظنّ، وكيف تقرأ حركة لم تتوقّعها.",
    tags: ["market-drivers", "macro", "education", "spot-price"],
    author: AUTHOR,
    body_en: `Gold has no earnings, no dividend and no management. That makes it unusually hard to value and unusually easy to explain badly. Most of what is said about gold on a given day is narrative fitted after the fact. A small number of drivers, however, genuinely do most of the work.

## Real interest rates: the big one

The most reliable single relationship in gold is with **real interest rates** — the interest rate after inflation, not the headline rate.

The logic is direct. Gold pays nothing. If you can earn 3% *above* inflation in a safe government bond, holding a non-yielding metal has a real cost, and gold tends to struggle. If that same bond yields 1% *below* inflation, the cost of holding gold disappears — you are giving up nothing — and gold tends to do well.

So the question is not "are rates high" but "are rates high **relative to inflation**." This is why gold can rally while central banks are raising rates, if inflation is rising faster, and why it can fall during a rate-cutting cycle if inflation is falling faster still. That single distinction explains a large share of the moves people find counterintuitive.

## The dollar

Gold is priced in dollars, so a stronger dollar mechanically makes gold more expensive for buyers in every other currency, which tends to soften demand. A weaker dollar does the reverse.

The relationship is real but looser than the real-rates one, and it is partly the same relationship wearing a different hat — the dollar and US real rates move together much of the time.

For readers in this region there is a second, more important version of this point: **the dollar's effect on your local gold price is usually larger than its effect on the world gold price**, because your currency's move against the dollar passes straight through. We cover that in our guides on Turkey and on the price chain.

## Central bank buying

Over recent years, central banks have been a substantial and persistent source of demand, and this is a genuine structural change rather than a talking point. Reserve managers buy gold for reasons that have little to do with price forecasting:

- **Diversification** away from concentration in any single currency.
- **No counterparty.** Gold held domestically is not anyone's liability and cannot be frozen by another government — a consideration that has become more prominent, not less.
- **Long horizons.** Central banks are not trading; purchases can continue through price levels that would deter a speculator.

Because this demand is price-insensitive and slow-moving, it acts less like a spark and more like a floor.

## Investment flows

**ETF holdings** are the visible, fast-moving part of investment demand, and are reported frequently enough to track. Sustained inflows tend to accompany rising prices; sustained outflows the reverse. Whether flows cause the move or follow it is genuinely debatable — but they are a good thermometer.

**Futures positioning** on COMEX matters over shorter horizons and can amplify moves in both directions, particularly when crowded positions unwind.

## Jewellery and physical demand

This is the driver most readers of this site are closest to, and it works differently from the others: it is **price-elastic**. When prices spike, jewellery demand in India, China and the Gulf tends to fall, and scrap supply rises as households sell into strength. When prices fall, buying returns.

So physical demand behaves as a stabiliser rather than a driver. It rarely starts a major move; it frequently limits one. Seasonal patterns — the Indian wedding season, Ramadan and Eid, Chinese New Year — sit inside this category, and our guide on the Ramadan and Eid demand cycle covers the regional version.

## Crises

Gold's reputation as a crisis asset is broadly earned but frequently misapplied. In an acute panic, gold often falls *first*, because investors sell whatever is liquid to meet margin calls elsewhere. The strength typically comes afterwards, during the policy response — rate cuts, liquidity injections, currency debasement fears.

A reader who expects gold to rise on the day bad news breaks is often disappointed, and concludes the relationship is fake. The relationship is real; the timing is just not what the headline suggests.

## How to read a move you didn't expect

Work down this list:

| Ask | If yes |
|---|---|
| Did real yields move? | Usually the explanation |
| Did the dollar move? | Partly the same story |
| Was there a central bank or reserves headline? | Slow driver, real |
| Did ETF holdings shift notably? | Flow-driven |
| Is it only *my currency* that moved? | Not a gold move at all |

That last row is the one worth internalising in this region. A great many "gold surges" reported locally are exchange-rate stories. Checking the dollar ounce price alongside your local gram price separates the two in seconds.

## What we deliberately do not do

We do not forecast. Anyone who states confidently where gold will be in six months is describing a guess, and an article built on one ages into a liability. What is useful is understanding the mechanisms — because those keep working long after any particular prediction has expired.

*This site shows the live dollar ounce price beside every local gram price, which is exactly the comparison the last row of that table requires.*`,
    body_ar: `الذهب بلا أرباح ولا توزيعات ولا إدارة. وهذا يجعل تقويمه صعبًا على نحو غير معتاد، وشرحه شرحًا رديئًا سهلًا على نحو غير معتاد. ومعظم ما يُقال عن الذهب في يوم بعينه سردية رُكِّبت بعد وقوع الحدث. غير أن عددًا قليلًا من المحرّكات يقوم فعلًا بمعظم العمل.

## أسعار الفائدة الحقيقية: المحرّك الأكبر

أوثق علاقة مفردة في الذهب هي مع **أسعار الفائدة الحقيقية** — أي الفائدة بعد التضخّم، لا الفائدة المعلنة.

والمنطق مباشر. فالذهب لا يدفع شيئًا. فإن استطعت كسب 3% *فوق* التضخّم في سند حكومي آمن، صار للاحتفاظ بمعدن لا يدرّ عائدًا كلفة حقيقية، ومال الذهب إلى التعثّر. وإن كان ذلك السند نفسه يعطي 1% *تحت* التضخّم، اختفت كلفة الاحتفاظ بالذهب — فأنت لا تتنازل عن شيء — ومال الذهب إلى الأداء الجيّد.

فالسؤال ليس "هل الفائدة مرتفعة" بل "هل هي مرتفعة **قياسًا إلى التضخّم**". ولهذا قد يصعد الذهب بينما ترفع البنوك المركزية الفائدة، إن كان التضخّم يرتفع أسرع، وقد يهبط خلال دورة خفض إن كان التضخّم يهبط أسرع منها. وهذا التمييز وحده يفسّر حصّة كبيرة من التحرّكات التي يجدها الناس معاكسة للحدس.

## الدولار

الذهب مسعَّر بالدولار، فالدولار الأقوى يجعل الذهب ميكانيكيًا أغلى على المشترين بكل عملة أخرى، وهو ما يميل إلى إضعاف الطلب. والدولار الأضعف يفعل العكس.

والعلاقة حقيقية لكنها أرخى من علاقة الفائدة الحقيقية، وهي جزئيًا العلاقة نفسها بقبّعة مختلفة — إذ يتحرّك الدولار والفائدة الحقيقية الأمريكية معًا في كثير من الأحيان.

ولقرّاء هذه المنطقة نسخة ثانية أهمّ من هذه النقطة: **أثر الدولار في سعر ذهبك المحلي أكبر عادةً من أثره في سعر الذهب العالمي**، لأن حركة عملتك أمام الدولار تمرّ مباشرةً. وقد تناولنا ذلك في دليلَي تركيا وسلسلة السعر.

## شراء البنوك المركزية

في السنوات الأخيرة، كانت البنوك المركزية مصدر طلب كبيرًا ومستمرًا، وهذا تحوّل بنيوي حقيقي لا مجرّد نقطة حديث. فمديرو الاحتياطيات يشترون الذهب لأسباب لا علاقة لها كثيرًا بتوقّع الأسعار:

- **التنويع** بعيدًا عن التركّز في عملة واحدة.
- **لا طرف مقابل.** فالذهب المحفوظ داخليًا ليس التزامًا على أحد ولا يمكن تجميده من حكومة أخرى — وهو اعتبار صار أبرز لا أقلّ.
- **آفاق طويلة.** فالبنوك المركزية لا تتاجر؛ وقد يستمرّ الشراء عبر مستويات سعرية تردع المضارب.

ولأن هذا الطلب غير حسّاس للسعر وبطيء الحركة، فهو يعمل أقلّ كشرارة وأكثر كأرضية.

## تدفّقات الاستثمار

**حيازات صناديق المؤشّرات** هي الجزء المرئي السريع من الطلب الاستثماري، وتُنشر بتواتر يكفي لتتبّعها. فالتدفّقات الداخلة المستمرّة تصاحب ارتفاع الأسعار عادةً، والخارجة العكس. وهل التدفّقات تسبّب الحركة أم تتبعها؟ مسألة قابلة للجدل فعلًا — لكنها ميزان حرارة جيّد.

و**مراكز العقود الآجلة** في كومكس تهمّ على آفاق أقصر، وقد تضخّم الحركة في الاتجاهين، خصوصًا عند تصفية المراكز المزدحمة.

## الطلب على المشغولات والطلب المادي

وهذا المحرّك أقرب ما يكون إلى قرّاء هذا الموقع، وهو يعمل بشكل مختلف عن غيره: فهو **مرن السعر**. فحين تقفز الأسعار يميل الطلب على المشغولات في الهند والصين والخليج إلى الانخفاض، ويرتفع عرض الكسر مع بيع الأسر في القوّة. وحين تهبط الأسعار يعود الشراء.

فالطلب المادي يتصرّف كمثبّت لا كمحرّك. وهو نادرًا ما يبدأ حركة كبيرة، وكثيرًا ما يحدّها. والأنماط الموسمية — موسم الأعراس الهندي، ورمضان والعيد، ورأس السنة الصينية — تقع داخل هذه الفئة، ودليلنا عن دورة الطلب في رمضان والعيد يغطّي النسخة الإقليمية.

## الأزمات

سمعة الذهب كأصل أزمات مستحقّة في العموم لكنها كثيرًا ما تُطبَّق في غير موضعها. ففي الذعر الحادّ يهبط الذهب *أولًا* في الغالب، لأن المستثمرين يبيعون ما هو سائل لتلبية نداءات هامش في مواضع أخرى. والقوّة تأتي بعد ذلك عادةً، خلال استجابة السياسة — خفض الفائدة وضخّ السيولة والمخاوف من تآكل العملة.

فالقارئ الذي يتوقّع صعود الذهب يوم انفجار الخبر السيّئ يخيب ظنّه كثيرًا، فيستنتج أن العلاقة وهمية. والعلاقة حقيقية، وإنما التوقيت ليس ما يوحي به العنوان.

## كيف تقرأ حركة لم تتوقّعها

انزل في هذه القائمة:

| اسأل | إن كان الجواب نعم |
|---|---|
| هل تحرّكت العوائد الحقيقية؟ | هذا هو التفسير عادةً |
| هل تحرّك الدولار؟ | القصّة نفسها جزئيًا |
| هل ورد خبر عن بنك مركزي أو احتياطيات؟ | محرّك بطيء وحقيقي |
| هل تغيّرت حيازات الصناديق تغيّرًا ملحوظًا؟ | مدفوع بالتدفّقات |
| هل تحرّكت *عملتي* وحدها؟ | ليست حركة ذهب أصلًا |

والسطر الأخير هو الجدير بالترسيخ في هذه المنطقة. فكثير جدًا من "قفزات الذهب" المذكورة محليًا قصص أسعار صرف. والنظر إلى سعر الأونصة بالدولار إلى جانب سعر جرامك المحلي يفصل بينهما في ثوانٍ.

## ما نمتنع عنه عمدًا

نحن لا نتوقّع. فمن يقرّر بثقة أين سيكون الذهب بعد ستة أشهر إنما يصف تخمينًا، والمقال المبني على تخمين يشيخ ليصير عبئًا. والمفيد هو فهم الآليات — لأنها تظلّ تعمل بعد انتهاء صلاحية أي تنبّؤ بعينه بزمن طويل.

*وهذا الموقع يعرض سعر الأونصة بالدولار مباشرةً بجانب كل سعر جرام محلي، وهي بالضبط المقارنة التي يتطلّبها السطر الأخير من ذلك الجدول.*`,
  },
  {
    slug: "why-central-banks-buy-gold",
    publishedAt: "2026-08-28T14:00:00Z",
    title_en: "Why Central Banks Buy Gold, and Why It Matters to You",
    title_ar: "لماذا تشتري البنوك المركزية الذهب، ولماذا يهمّك ذلك",
    description_en:
      "Central banks became persistent net buyers of gold, and the reasons are institutional rather than speculative. What reserve managers are actually solving for, and what it means for a household holding a few grams.",
    description_ar:
      "صارت البنوك المركزية مشترية صافية مستمرّة للذهب، والأسباب مؤسسية لا مضاربية. ما الذي يحلّه مديرو الاحتياطيات فعلًا، وماذا يعني ذلك لأسرة تملك بضعة جرامات.",
    tags: ["central-banks", "reserves", "macro", "education"],
    author: AUTHOR,
    body_en: `For most of the late twentieth century, central banks were net *sellers* of gold. Western institutions in particular ran down reserves that felt like a relic of a monetary system that no longer existed. That pattern reversed, and central banks have since been a steady and significant source of demand.

It is worth understanding why, because the reasoning is not the reasoning of an investor — and that difference is exactly what makes it matter.

## What a reserve manager is actually solving for

A central bank's reserves exist to defend a currency, settle international obligations, and provide confidence. The people managing them are not trying to outperform a benchmark. They are trying to ensure the reserves work **in the conditions where reserves are needed** — which are, by definition, bad conditions.

Judged that way, gold has properties that look unremarkable in calm times and decisive in bad ones:

- **It is nobody's liability.** A foreign government bond is a promise by a foreign government. Gold in a domestic vault is not a promise by anyone. Nothing has to go right for it to still be there.
- **It cannot be frozen or sanctioned in the same way.** Reserves held as claims within another country's financial system depend on continued access to that system. Gold held domestically does not. This consideration has moved from theoretical to concrete in recent years, and it is a substantial part of the explanation for the shift.
- **It is universally accepted.** Gold does not depend on any particular country's credit remaining good.
- **It has no correlation obligation.** It frequently performs when other reserve assets are under stress, which is the whole point of holding it.

Against those, the standard objection — gold pays no interest — matters far less to a reserve manager than it does to a fund. Reserves are not held to generate income.

## Why the shift happened when it did

Several things moved in the same direction:

- **Concentration risk.** Reserves heavily weighted to a small number of currencies carry exposure to those issuers' politics and policy.
- **The precedent of frozen reserves.** Once it became clear that reserves held abroad can be immobilised, the appeal of an asset held at home rose sharply for a wide range of countries.
- **Fiscal and monetary expansion** across major economies raised long-horizon questions about the purchasing power of currency-denominated reserves.
- **Repatriation.** A related trend: not only buying gold, but moving existing holdings home, for the same reason.

Emerging-market central banks have been the most active, which makes sense — they are the institutions with the most to gain from reducing dependence on a system they do not control.

## What this means for a household

Three practical implications, and one caution.

**1. There is a large, price-insensitive buyer in the market.** Central banks are not trading in and out. That does not put a floor under the price in any guaranteed sense, but it is a structurally different kind of demand from speculative flows, and it does not vanish when the price falls.

**2. The reasoning scales down.** The logic a reserve manager applies — hold something that is not anyone's liability, in case the system you depend on becomes unavailable — is exactly the logic behind a household holding physical gold rather than an unallocated claim. It is the same argument at a different size, and it is why the allocated/unallocated distinction in our paper-versus-physical guide matters.

**3. It is a slow signal, not a trading signal.** Central bank purchases are reported with a lag and accumulate over quarters. Nobody should buy or sell on a monthly reserves headline.

**The caution:** central banks buying gold does not mean gold only goes up. They bought through periods when the price fell, because their horizon is measured in decades and their objective is not return. Borrowing their conclusion without borrowing their time horizon is a mistake.

## The honest summary

Central bank buying is real, structural, and driven by institutional risk management rather than a price view. For a household, the useful takeaway is not "prices will rise." It is that the most conservative financial institutions in the world, when asked what to hold in case things go wrong, have increasingly answered: some gold, held where we can reach it.

That is a reason to own some. It is not a reason to own only that.

*Our country pages show the live gold price in your own currency — the number to use when sizing any holding, however you were persuaded to start one.*`,
    body_ar: `في معظم أواخر القرن العشرين كانت البنوك المركزية **بائعة** صافية للذهب. والمؤسسات الغربية خاصةً كانت تصفّي احتياطيات بدت أثرًا من نظام نقدي لم يعد قائمًا. ثم انعكس النمط، وصارت البنوك المركزية منذئذٍ مصدر طلب ثابتًا ومعتبرًا.

ويستحق الأمر فهم السبب، لأن المنطق ليس منطق مستثمر — وهذا الفرق بالذات هو ما يجعله مهمًّا.

## ما الذي يحلّه مدير الاحتياطيات فعلًا

احتياطيات البنك المركزي موجودة للدفاع عن العملة، وتسوية الالتزامات الدولية، وتوفير الثقة. ومن يديرونها لا يحاولون التفوّق على مؤشّر مرجعي، بل يحاولون ضمان أن تعمل الاحتياطيات **في الظروف التي تُحتاج فيها الاحتياطيات** — وهي بحكم التعريف ظروف سيئة.

وبهذا المعيار، للذهب خصائص تبدو عادية في أوقات الهدوء وحاسمة في الأوقات السيئة:

- **ليس التزامًا على أحد.** فالسند الحكومي الأجنبي وعد من حكومة أجنبية. أمّا الذهب في خزنة محلية فليس وعدًا من أحد. ولا يلزم أن يسير أي شيء على ما يُرام ليظلّ موجودًا.
- **لا يمكن تجميده أو فرض عقوبات عليه بالطريقة نفسها.** فالاحتياطيات المحفوظة كمطالبات داخل النظام المالي لبلد آخر تتوقّف على استمرار النفاذ إلى ذلك النظام. والذهب المحفوظ داخليًا لا يتوقّف على ذلك. وقد انتقل هذا الاعتبار من النظري إلى الملموس في السنوات الأخيرة، وهو جزء جوهري من تفسير التحوّل.
- **مقبول عالميًا.** فالذهب لا يتوقّف على بقاء ائتمان بلد بعينه جيّدًا.
- **لا التزام ارتباط عليه.** فهو كثيرًا ما يؤدّي جيّدًا حين تكون أصول الاحتياطي الأخرى تحت الضغط، وهذا هو الغرض كله من حيازته.

وأمام ذلك، فإن الاعتراض المعتاد — أن الذهب لا يدفع فائدة — يهمّ مدير الاحتياطيات أقلّ بكثير ممّا يهمّ صندوقًا. فالاحتياطيات لا تُحاز لتوليد دخل.

## لماذا حدث التحوّل حين حدث

تحرّكت عدّة أمور في الاتجاه نفسه:

- **مخاطرة التركّز.** فالاحتياطيات المرجّحة بشدّة نحو عدد قليل من العملات تحمل تعرّضًا لسياسات مُصدِريها.
- **سابقة تجميد الاحتياطيات.** فما إن اتّضح أن الاحتياطيات المحفوظة في الخارج قابلة للتجميد، حتى ارتفعت جاذبية أصل يُحفظ في الداخل ارتفاعًا حادًّا لدى طيف واسع من الدول.
- **التوسّع المالي والنقدي** في الاقتصادات الكبرى أثار أسئلة طويلة الأفق عن القوّة الشرائية للاحتياطيات المقوَّمة بالعملات.
- **الإعادة إلى الوطن.** واتجاه متّصل: لا شراء الذهب فحسب، بل نقل الحيازات القائمة إلى الداخل، للسبب نفسه.

وكانت البنوك المركزية في الأسواق الناشئة الأنشط، وهو أمر منطقي — فهي المؤسسات الأكثر كسبًا من تقليل الاعتماد على نظام لا تتحكّم فيه.

## ماذا يعني هذا لأسرة

ثلاثة آثار عملية، وتحذير واحد.

**1. في السوق مشترٍ كبير غير حسّاس للسعر.** فالبنوك المركزية لا تدخل وتخرج. وهذا لا يضع أرضية للسعر بأي معنى مضمون، لكنه نوع من الطلب مختلف بنيويًا عن التدفّقات المضاربية، ولا يتبخّر حين يهبط السعر.

**2. المنطق ينزل إلى المقياس الأصغر.** فالمنطق الذي يطبّقه مدير الاحتياطيات — احفظ شيئًا ليس التزامًا على أحد، تحسّبًا لأن يصير النظام الذي تعتمد عليه غير متاح — هو بعينه المنطق وراء حيازة أسرة ذهبًا ماديًا بدل مطالبة غير مخصّصة. إنها الحجّة نفسها بحجم مختلف، ولهذا يهمّ التمييز بين المخصّص وغير المخصّص في دليلنا عن الورقي مقابل المادي.

**3. إنها إشارة بطيئة لا إشارة تداول.** فمشتريات البنوك المركزية تُنشر متأخّرة وتتراكم عبر أرباع سنوية. ولا ينبغي لأحد أن يشتري أو يبيع على عنوان احتياطيات شهري.

**والتحذير:** شراء البنوك المركزية للذهب لا يعني أن الذهب يصعد فقط. فقد اشترت خلال فترات هبط فيها السعر، لأن أفقها يُقاس بالعقود وهدفها ليس العائد. واستعارة استنتاجها دون استعارة أفقها الزمني خطأ.

## الخلاصة الصادقة

شراء البنوك المركزية حقيقي وبنيوي ومدفوع بإدارة مخاطر مؤسسية لا برأي في السعر. وبالنسبة لأسرة، الخلاصة المفيدة ليست "الأسعار سترتفع"، بل أن أكثر المؤسسات المالية تحفّظًا في العالم، حين سُئلت ماذا تحفظ تحسّبًا لأن تسوء الأمور، أجابت على نحو متزايد: بعض الذهب، محفوظًا حيث نستطيع الوصول إليه.

وهذا سبب لامتلاك بعضه. وليس سببًا لامتلاكه وحده.

*وصفحات الدول لدينا تعرض سعر الذهب المباشر بعملتك — وهو الرقم الذي تستخدمه عند تحديد حجم أي حيازة، مهما كان ما أقنعك بالبدء.*`,
  },
  {
    slug: "how-much-gold-in-a-family-budget",
    publishedAt: "2026-09-02T09:00:00Z",
    title_en: "How Much Gold Belongs in a Family Budget",
    title_ar: "كم من الذهب ينبغي أن يكون في ميزانية الأسرة",
    description_en:
      "The answer is a share, not an amount — and it depends far more on your currency and your emergency fund than on any view about the gold price. A framework for sizing a holding you can actually live with.",
    description_ar:
      "الجواب حصّة لا مبلغ — ويتوقّف على عملتك وصندوق طوارئك أكثر بكثير من أي رأي في سعر الذهب. إطار لتحديد حجم حيازة تستطيع التعايش معها فعلًا.",
    tags: ["allocation", "savings", "budgeting", "education"],
    author: AUTHOR,
    body_en: `"How much gold should I own?" is the question this site is asked most often, and it does not have a numerical answer that applies to everybody. What it does have is a decent framework, and following it produces a figure you can defend to yourself in a bad month — which is the only test that matters.

## First: gold is not the first thing you buy

Before any gold, two things should exist:

**An emergency fund in cash.** Three to six months of expenses, in your local currency, immediately accessible. Gold is a bad emergency fund: it is lumpy, it trades at a spread, and the months when you most need money are often months when selling is least convenient.

**No expensive debt.** Paying off a debt at 20% is a guaranteed 20% return. No allocation to any asset competes with that.

If gold is being bought instead of either of these, the allocation question is premature.

## The framework: a share of long-term savings

For money that is genuinely long-term — not next year's fees, not the emergency fund — a widely used range for gold is **5–15% of investable savings**. That range exists because:

- Below about 5%, a holding is too small to change anything in the scenarios you bought it for.
- Above about 15–20%, you are no longer diversifying; you are taking a concentrated position on one non-yielding asset.

Where you sit inside the range depends on a small number of honest questions.

## What moves you higher in the range

- **Your income and savings are in a currency with a history of devaluation.** This is the strongest single factor for readers in Egypt, Turkey, Lebanon, Pakistan and similar markets. Gold's protection here is genuine and mechanical, as covered in our guide on gold versus bank deposits.
- **Your local banking system has been unreliable**, or capital controls are a live memory. The case for an asset that is nobody's liability strengthens considerably.
- **You have no other hard-currency assets.** If everything you own is in the local currency, gold is doing more work.
- **Your horizon is long** and you will not need to sell into a weak market.

## What moves you lower

- **You live in a pegged-currency economy** — Saudi Arabia, UAE, Qatar, Bahrain, Jordan. The devaluation protection that justifies a large allocation elsewhere is largely absent, because the peg already provides it. Gold here is a bet on the world gold price, which is a fine thing to own a little of and a poor thing to concentrate in.
- **You already hold foreign-currency savings or overseas assets.**
- **You may need the money within a few years.**
- **You would be tempted to sell in a drawdown.** An allocation you abandon at the bottom is worse than a smaller one you keep.

## Counting it properly

Two mistakes are common here.

**Counting the jewellery you wear as your allocation.** It is an asset, and it is genuinely yours — but it carries a wide resale spread and you may not be willing to sell it. If a piece is not something you would actually liquidate, do not count it as your gold allocation. Count it separately, honestly.

**Counting at retail value.** Value your holding at what you would *receive*, not what you paid. Our guide on selling gold back explains the gap.

## A worked example

A family with 100,000 units of long-term savings, income in a currency that has lost value repeatedly, no foreign assets, and a funded emergency fund separately:

| | Amount | Note |
|---|---|---|
| Emergency fund | Held separately | Not part of the allocation |
| Long-term savings | 100,000 | The base for the calculation |
| Gold at 12% | 12,000 | Upper-middle of the range, justified by the currency |
| Form | Coins / small bars | Narrow spread, divisible |
| Wedding jewellery | Counted separately | Not liquid in practice |

At a 24K gram price of 250, that 12,000 is about 48 grams. That is a target to accumulate towards over time, not a purchase to make in one day.

## Rebalancing, and the discipline it enforces

If gold rises sharply, it becomes a larger share of your savings than you chose. Selling a little to return to your target is not a lack of conviction; it is the mechanism that makes you sell high. If it falls, buying back to target makes you buy low.

Check once or twice a year. More often than that turns an allocation into a trade.

## The short answer

Somewhere between 5% and 15% of long-term savings, higher if your currency is unreliable and you hold nothing else in hard assets, lower if you live under a dollar peg and already hold foreign currency. Held in a form with a narrow spread. Counted at sell-side value. Reviewed twice a year.

And built after — not instead of — an emergency fund.

*Sizing it takes a minute: our country pages carry the live per-gram price for every karat in your own currency, so you can convert a target percentage into an actual weight.*`,
    body_ar: `"كم من الذهب ينبغي أن أملك؟" هو أكثر سؤال يصل هذا الموقع، وليس له جواب رقمي ينطبق على الجميع. لكن له إطارًا محترمًا، واتّباعه يُنتج رقمًا تستطيع الدفاع عنه أمام نفسك في شهر سيئ — وهذا هو الاختبار الوحيد المهمّ.

## أولًا: الذهب ليس أول ما تشتريه

قبل أي ذهب، ينبغي أن يوجد أمران:

**صندوق طوارئ نقدي.** من ثلاثة إلى ستة أشهر من النفقات، بعملتك المحلية، متاح فورًا. فالذهب صندوق طوارئ رديء: صعب التجزئة، ويُتداول بفارق، والأشهر التي تحتاج فيها المال أشدّ الحاجة كثيرًا ما تكون أقلّ الأشهر ملاءمةً للبيع.

**ألّا يكون عليك دين مكلف.** فسداد دين بفائدة 20% عائد مضمون قدره 20%. ولا تنافس ذلك حصّة في أي أصل.

فإن كان الذهب يُشترى بدلًا من أحدهما، فسؤال الحصّة سابق لأوانه.

## الإطار: حصّة من الادّخار طويل الأجل

للمال الطويل الأجل حقًا — لا أقساط السنة القادمة ولا صندوق الطوارئ — النطاق الشائع للذهب هو **5–15% من المدّخرات القابلة للاستثمار**. وهذا النطاق موجود لأن:

- دون 5% تقريبًا، تكون الحيازة أصغر من أن تغيّر شيئًا في السيناريوهات التي اشتريتها لأجلها.
- وفوق 15–20% تقريبًا، لم تعد تنوّع، بل تأخذ مركزًا مركّزًا في أصل واحد لا يدرّ عائدًا.

وموقعك داخل النطاق يتوقّف على عدد قليل من الأسئلة الصادقة.

## ما يرفعك في النطاق

- **دخلك ومدّخراتك بعملة لها تاريخ من التخفيض.** وهذا أقوى عامل مفرد لقرّاء مصر وتركيا ولبنان وباكستان والأسواق المشابهة. وحماية الذهب هنا حقيقية وميكانيكية، كما في دليلنا عن الذهب مقابل الودائع البنكية.
- **نظامك المصرفي المحلي كان غير موثوق**، أو ضوابط رأس المال ذكرى حيّة. فحجّة أصل ليس التزامًا على أحد تقوى كثيرًا.
- **ليس لديك أصول أخرى بعملة صعبة.** فإن كان كل ما تملكه بالعملة المحلية، فالذهب يقوم بعمل أكبر.
- **أفقك طويل** ولن تُضطر للبيع في سوق ضعيفة.

## ما يخفضك في النطاق

- **تعيش في اقتصاد بعملة مربوطة** — السعودية والإمارات وقطر والبحرين والأردن. فالحماية من التخفيض التي تبرّر حصّة كبيرة في غيرها غائبة إلى حدّ بعيد، لأن الربط يوفّرها أصلًا. والذهب هنا رهان على سعر الذهب العالمي، وهو شيء حسن أن تملك قليلًا منه ورديء أن تتركّز فيه.
- **لديك بالفعل مدّخرات بعملة أجنبية أو أصول خارجية.**
- **قد تحتاج المال خلال سنوات قليلة.**
- **قد تُغريك نفسك بالبيع عند الهبوط.** فالحصّة التي تتخلّى عنها في القاع أسوأ من حصّة أصغر تحتفظ بها.

## احتسابها احتسابًا صحيحًا

وهنا يشيع خطآن.

**احتساب الحلي التي ترتديها ضمن حصّتك.** فهي أصل، وهي ملكك حقًا — لكنها تحمل فارق إعادة بيع واسعًا وقد لا تكون مستعدًّا لبيعها. فإن كانت القطعة ممّا لن تسيّله فعلًا، فلا تحتسبها ضمن حصّة الذهب. احتسبها منفصلة، بصدق.

**الاحتساب بقيمة التجزئة.** قوّم حيازتك بما **ستقبضه** لا بما دفعته. ودليلنا عن بيع الذهب يشرح الفجوة.

## مثال محسوب

أسرة لديها 100,000 وحدة مدّخرات طويلة الأجل، ودخلها بعملة فقدت قيمتها مرارًا، وليس لديها أصول أجنبية، ولديها صندوق طوارئ مموَّل منفصل:

| | المبلغ | ملاحظة |
|---|---|---|
| صندوق الطوارئ | محفوظ منفصلًا | ليس جزءًا من الحصّة |
| المدّخرات طويلة الأجل | 100,000 | أساس الحساب |
| الذهب بنسبة 12% | 12,000 | أعلى وسط النطاق، تبرّره العملة |
| الصورة | عملات / سبائك صغيرة | فارق ضيّق وقابلية تجزئة |
| ذهب العرس | يُحتسب منفصلًا | غير سائل عمليًا |

وبسعر جرام عيار 24 قدره 250، تكون الـ12,000 نحو 48 جرامًا. وهذا هدف تتراكم نحوه مع الوقت، لا عملية شراء تتمّ في يوم واحد.

## إعادة التوازن، والانضباط الذي تفرضه

إن ارتفع الذهب ارتفاعًا حادًّا، صار حصّة من مدّخراتك أكبر ممّا اخترت. وبيع قليل منه للعودة إلى هدفك ليس ضعف قناعة، بل هو الآلية التي تجعلك تبيع عاليًا. وإن هبط، فالشراء عودةً إلى الهدف يجعلك تشتري منخفضًا.

راجع مرّة أو مرّتين في السنة. وأكثر من ذلك يحوّل الحصّة إلى مضاربة.

## الجواب القصير

بين 5% و15% من الادّخار طويل الأجل، أعلى إن كانت عملتك غير موثوقة ولا تملك غيرها من الأصول الصلبة، وأدنى إن كنت تحت ربط بالدولار وتملك عملة أجنبية أصلًا. محفوظًا في صورة ذات فارق ضيّق. محتسَبًا بقيمة البيع. مراجَعًا مرّتين في السنة.

ومبنيًّا بعد صندوق الطوارئ لا بدلًا منه.

*وتحديد الحجم يستغرق دقيقة: صفحات الدول لدينا تحمل السعر المباشر للجرام لكل عيار بعملتك، فتحوّل نسبة مستهدفة إلى وزن فعلي.*`,
  },
];
