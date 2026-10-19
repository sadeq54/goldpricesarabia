/**
 * Country-specific "How to buy gold" editorial blocks for the 4 MENA
 * focus markets (Saudi Arabia, UAE, Egypt, Morocco). Bilingual HTML
 * snippets injected into /buy-gold/[country] hub pages.
 *
 * Structured around the buyer-journey questions Google surfaces in PAA boxes:
 *  - Where to buy?
 *  - What VAT/duties apply?
 *  - What karats dominate?
 *  - How to verify authenticity?
 *
 * Rewritten 2026-10-19 after a source check: only facts confirmed against tax
 * authorities, the World Gold Council or reputable press stay (Saudi/UAE VAT
 * on the full jewellery price, Egypt's VAT on the making charge, Morocco's
 * 18K-only standard). No shop or bank names, no haggling percentages, no
 * making-charge ranges: none of those could be sourced.
 *
 * vatAnswer is reused inside the FAQ schema on the same page to avoid
 * duplicating tax facts in two places.
 */

export type BuyGoldEditorial = {
  en: {
    heading: string;
    body: string;
    vatAnswer: string;
  };
  ar: {
    heading: string;
    body: string;
    vatAnswer: string;
  };
};

export const BUY_GOLD_EDITORIAL: Record<string, BuyGoldEditorial> = {
  "saudi-arabia": {
    en: {
      heading: "How to Buy Gold in Saudi Arabia",
      vatAnswer:
        "Saudi Arabia charges 15% VAT on gold jewellery, on the full price: the gold value and the making charge alike. Investment gold of 99% purity or more, in a form traded on bullion markets, is zero-rated. Ask for a tax invoice; VAT is administered by ZATCA, the Zakat, Tax and Customs Authority.",
      body: `
<p><strong>Market overview.</strong> Saudi Arabia is the largest gold jewellery market in the Gulf: consumers bought 44 tonnes of gold jewellery in 2025, against 29.4 tonnes in the UAE, according to the World Gold Council. Most jewellery is sold in 21K (87.5% gold); 18K is common for gem-set and designer pieces and 24K for bars and coins. Prices are quoted per gram in Saudi riyals.</p>
<p><strong>Where to buy.</strong> Jewellery is sold mainly in the gold souks of the big cities and by jewellery chains in shopping malls. Souk shops usually quote the day's per-gram price plus a making charge; chains tend to sell at fixed prices. Bars and coins are sold by licensed bullion dealers and some banks. Wherever you buy, ask for an invoice that shows the weight, the karat, the making charge and the VAT separately.</p>
<p><strong>Hallmarks and checks.</strong> Look for the purity stamp (875 or 21K for 21K gold, 750 for 18K) and the maker's mark. For bars, keep the refiner's assay card and serial number; bars from refiners on the LBMA Good Delivery list are the easiest to resell.</p>
<p><strong>VAT and making charges.</strong> The 15% VAT applies to the whole price of jewellery, not only to the making charge. Making charges are set by each shop and vary with the design, so compare the per-gram charge for similar pieces at two or three shops.</p>
<p><strong>Working out a fair price.</strong> The spot equivalent shown above is the value of the gold itself. A shop's price adds the making charge and then VAT on the total: <em>(gold value + making charge) × 1.15</em>. A quote far above that for a simple piece is worth questioning.</p>
`,
    },
    ar: {
      heading: "كيفية شراء الذهب في المملكة العربية السعودية",
      vatAnswer:
        "تفرض السعودية ضريبة القيمة المضافة 15% على مشغولات الذهب على سعرها كاملًا، أي على قيمة الذهب والمصنعية معًا. أما الذهب الاستثماري بنقاء 99% فأكثر، في صورة متداولة في أسواق السبائك، فيخضع لنسبة الصفر. اطلب فاتورة ضريبية؛ وتتولى الضريبة هيئة الزكاة والضريبة والجمارك.",
      body: `
<p><strong>نظرة على السوق.</strong> السعودية أكبر سوق لمجوهرات الذهب في الخليج: اشترى المستهلكون 44 طنًا من مشغولات الذهب عام 2025 مقابل 29.4 طن في الإمارات، بحسب مجلس الذهب العالمي. ويُباع معظم المشغولات بعيار 21 (نقاء 87.5%)، ويشيع عيار 18 في القطع المرصعة ومجوهرات المصممين، وعيار 24 في السبائك والعملات. وتُعلن الأسعار للجرام بالريال السعودي.</p>
<p><strong>أين تشتري.</strong> تُباع المشغولات أساسًا في أسواق الذهب بالمدن الكبرى ولدى سلاسل المجوهرات في المراكز التجارية. ومحلات الأسواق تعلن عادةً سعر الجرام لليوم مضافًا إليه المصنعية، بينما تبيع السلاسل غالبًا بأسعار ثابتة. أما السبائك والعملات فيبيعها تجار سبائك مرخصون وبعض البنوك. وأينما اشتريت، اطلب فاتورة تبيّن الوزن والعيار والمصنعية والضريبة كلًّا على حدة.</p>
<p><strong>الدمغة والتحقق.</strong> ابحث عن ختم العيار (875 أو 21K لعيار 21، و750 لعيار 18) وعلامة الصانع. وللسبائك، احتفظ ببطاقة الفحص والرقم التسلسلي من المصفاة؛ فالسبائك الصادرة عن مصافٍ مدرجة في قائمة LBMA للتسليم الجيد هي الأسهل في إعادة البيع.</p>
<p><strong>الضريبة والمصنعية.</strong> تُطبَّق ضريبة 15% على سعر المشغولات كاملًا لا على المصنعية وحدها. ويحدد كل محل مصنعيته وتختلف بحسب التصميم، فقارن مصنعية الجرام لقطع متشابهة في محلين أو ثلاثة.</p>
<p><strong>كيف تقدّر السعر العادل.</strong> السعر الفوري المكافئ المعروض أعلاه هو قيمة الذهب نفسه. ويضيف المحل المصنعية ثم الضريبة على المجموع: <em>(قيمة الذهب + المصنعية) × 1.15</em>. والعرض الذي يزيد كثيرًا على ذلك لقطعة بسيطة يستحق السؤال.</p>
`,
    },
  },
  uae: {
    en: {
      heading: "How to Buy Gold in the UAE",
      vatAnswer:
        "The UAE charges 5% VAT on gold jewellery, on the full price: the gold value and the making charge alike. Investment gold of 99% purity or more, in a form traded on bullion markets, is zero-rated. Visitors can reclaim VAT on eligible purchases through the tax-refund system when they leave the country; ask the shop what can be refunded on gold.",
      body: `
<p><strong>Market overview.</strong> The UAE, and Dubai in particular, is one of the world's largest gold trading hubs. Jewellery is sold mainly in 21K and 22K, with 18K for gem-set and designer pieces and 24K for bars and coins. The dirham is pegged to the US dollar at 3.6725, so dirham gold prices move with the dollar price. Prices are quoted per gram in dirhams.</p>
<p><strong>Where to buy.</strong> The best-known market is the Gold Souk in Deira, Dubai, where many shops compete side by side; jewellery chains in malls sell at fixed prices, and licensed bullion dealers sell bars and coins. Agree the per-gram price and the making charge before the piece is weighed, and ask for an invoice that shows the weight, karat, making charge and VAT.</p>
<p><strong>Hallmarks and checks.</strong> Look for the purity stamp (875 for 21K, 916 for 22K, 750 for 18K) and the maker's mark. For bars, keep the refiner's assay card and serial number.</p>
<p><strong>VAT.</strong> The 5% VAT applies to the whole price of jewellery. If you are visiting, keep the original tax invoice: eligible purchases can be submitted for a VAT refund when you leave.</p>
<p><strong>Working out a fair price.</strong> The spot equivalent shown above is the value of the gold itself. A shop's price is that value plus the making charge, with 5% VAT on the total. Comparing the making charge for similar pieces at a few shops is the simplest way to judge a quote.</p>
`,
    },
    ar: {
      heading: "كيفية شراء الذهب في الإمارات",
      vatAnswer:
        "تفرض الإمارات ضريبة القيمة المضافة 5% على مشغولات الذهب على سعرها كاملًا، أي على قيمة الذهب والمصنعية معًا. أما الذهب الاستثماري بنقاء 99% فأكثر، في صورة متداولة في أسواق السبائك، فيخضع لنسبة الصفر. ويستطيع الزوار استرداد الضريبة عن المشتريات المؤهلة عبر نظام الاسترداد عند مغادرة البلاد؛ فاسأل المحل عمّا يمكن استرداده على الذهب.",
      body: `
<p><strong>نظرة على السوق.</strong> تُعدّ الإمارات، ودبي خاصةً، من أكبر مراكز تجارة الذهب في العالم. وتُباع المشغولات أساسًا بعيارَي 21 و22، مع عيار 18 للقطع المرصعة ومجوهرات المصممين، وعيار 24 للسبائك والعملات. والدرهم مربوط بالدولار الأمريكي عند 3.6725، لذا تتحرك أسعار الذهب بالدرهم مع السعر بالدولار. وتُعلن الأسعار للجرام بالدرهم.</p>
<p><strong>أين تشتري.</strong> أشهر الأسواق سوق الذهب في ديرة بدبي، حيث تتنافس محلات كثيرة متجاورة؛ وتبيع سلاسل المجوهرات في المراكز التجارية بأسعار ثابتة، ويبيع تجار السبائك المرخصون السبائك والعملات. اتفق على سعر الجرام والمصنعية قبل وزن القطعة، واطلب فاتورة تبيّن الوزن والعيار والمصنعية والضريبة.</p>
<p><strong>الدمغة والتحقق.</strong> ابحث عن ختم العيار (875 لعيار 21، و916 لعيار 22، و750 لعيار 18) وعلامة الصانع. وللسبائك، احتفظ ببطاقة الفحص والرقم التسلسلي من المصفاة.</p>
<p><strong>الضريبة.</strong> تُطبَّق ضريبة 5% على سعر المشغولات كاملًا. وإن كنت زائرًا فاحتفظ بالفاتورة الضريبية الأصلية: إذ يمكن تقديم المشتريات المؤهلة لاسترداد الضريبة عند المغادرة.</p>
<p><strong>كيف تقدّر السعر العادل.</strong> السعر الفوري المكافئ المعروض أعلاه هو قيمة الذهب نفسه. وسعر المحل هو هذه القيمة مضافًا إليها المصنعية، ثم ضريبة 5% على المجموع. ومقارنة المصنعية لقطع متشابهة في عدة محلات هي أبسط طريقة للحكم على العرض.</p>
`,
    },
  },
  egypt: {
    en: {
      heading: "How to Buy Gold in Egypt",
      vatAnswer:
        "Egypt charges 14% VAT on gold jewellery, but only on an agreed average making charge per gram, not on the value of the gold. It is paid when the piece is hallmarked, so it is normally already in the price. Ask the shop for an invoice that shows the weight, the karat and the making charge.",
      body: `
<p><strong>Market overview.</strong> Egypt's jewellery trade centres on 21K, with 18K also common and 24K for bars and coins. Prices are quoted per gram in Egyptian pounds. The pound has been devalued several times since 2022, and demand for gold as a store of savings has tended to rise around those moves.</p>
<p><strong>Where to buy.</strong> Cairo's best-known gold market is the El-Sagha quarter next to Khan el-Khalili; other cities have their own jewellers' streets, and jewellery chains sell in malls at fixed prices. Bars and coins are sold by licensed dealers. Agree the per-gram price and the making charge before buying, and keep the invoice.</p>
<p><strong>Hallmarks and checks.</strong> Gold sold in Egypt is hallmarked by the state assay authority (مصلحة الدمغة والموازين). Look for the purity stamp (875 for 21K, 750 for 18K) as well as the maker's mark.</p>
<p><strong>VAT.</strong> The 14% VAT is charged on an agreed average making charge per gram rather than on the gold value, and is paid at hallmarking.</p>
<p><strong>Exchange rate.</strong> The pound prices on this page use a daily mid-market exchange rate from an open-source currency feed, which can differ slightly from the rate a jeweller uses; the dollar price per ounce is the same everywhere.</p>
<p><strong>Working out a fair price.</strong> The spot equivalent shown above is the value of the gold itself; the shop adds its making charge. Compare the making charge for similar pieces at a few shops, and remember that it is not refunded when you sell.</p>
`,
    },
    ar: {
      heading: "كيفية شراء الذهب في مصر",
      vatAnswer:
        "تفرض مصر ضريبة القيمة المضافة 14% على المشغولات الذهبية، لكن على متوسط متفق عليه للمصنعية لكل جرام فقط، لا على قيمة الذهب. وتُدفع عند دمغ القطعة، لذا تكون عادةً داخلة في السعر. اطلب من المحل فاتورة تبيّن الوزن والعيار والمصنعية.",
      body: `
<p><strong>نظرة على السوق.</strong> تتركز تجارة المشغولات في مصر على عيار 21، مع شيوع عيار 18 أيضًا، وعيار 24 للسبائك والعملات. وتُعلن الأسعار للجرام بالجنيه المصري. وقد خُفِّضت قيمة الجنيه عدة مرات منذ 2022، ومال الطلب على الذهب كمخزن للمدخرات إلى الارتفاع حول تلك القرارات.</p>
<p><strong>أين تشتري.</strong> أشهر أسواق الذهب في القاهرة حي الصاغة المجاور لخان الخليلي، ولكل مدينة شوارع صاغتها، وتبيع سلاسل المجوهرات في المراكز التجارية بأسعار ثابتة. أما السبائك والعملات فيبيعها تجار مرخصون. اتفق على سعر الجرام والمصنعية قبل الشراء، واحتفظ بالفاتورة.</p>
<p><strong>الدمغة والتحقق.</strong> تُدمغ المشغولات الذهبية في مصر لدى مصلحة الدمغة والموازين. ابحث عن ختم العيار (875 لعيار 21، و750 لعيار 18) إلى جانب علامة الصانع.</p>
<p><strong>الضريبة.</strong> تُحتسب ضريبة 14% على متوسط متفق عليه للمصنعية لكل جرام لا على قيمة الذهب، وتُدفع عند الدمغ.</p>
<p><strong>سعر الصرف.</strong> تعتمد الأسعار بالجنيه في هذه الصفحة على سعر صرف وسطي يومي من مصدر بيانات عملات مفتوح المصدر، وقد يختلف قليلًا عن السعر الذي يعتمده الصائغ؛ أما سعر الأونصة بالدولار فواحد في كل مكان.</p>
<p><strong>كيف تقدّر السعر العادل.</strong> السعر الفوري المكافئ المعروض أعلاه هو قيمة الذهب نفسه، ويضيف المحل مصنعيته. قارن المصنعية لقطع متشابهة في عدة محلات، وتذكّر أنها لا تُستردّ عند البيع.</p>
`,
    },
  },
  morocco: {
    en: {
      heading: "How to Buy Gold in Morocco",
      vatAnswer:
        "Morocco's standard VAT rate is 20%. Ask the jeweller whether tax is included in the price you are quoted, and for an invoice that shows the weight, the karat, the making charge and any tax separately.",
      body: `
<p><strong>Market overview.</strong> Moroccan jewellers sell 18K, the only gold standard authorised for sale, and gold is central to weddings and family heirlooms. Prices are quoted per gram in dirhams. The dirham is managed against a basket of the euro and the US dollar, so dirham gold prices follow the world price with some influence from the euro.</p>
<p><strong>Where to buy.</strong> Traditional jewellers trade in the medinas of Fes, Marrakech and Casablanca, and modern jewellers in the big cities sell at fixed prices. In the souks the making charge ("façon") is usually negotiable, while the gold value follows the world price. Ask for an invoice that shows the weight, karat and making charge.</p>
<p><strong>Hallmarks and checks.</strong> Look for the official guarantee hallmark showing the purity (750 for 18K) and the maker's mark, and buy from shops with a permanent address.</p>
<p><strong>Exchange rate.</strong> The dirham prices on this page use a daily mid-market exchange rate from an open-source currency feed.</p>
<p><strong>Working out a fair price.</strong> The 18K spot equivalent is the value of the gold itself; the shop's price adds the making charge and any tax. Compare the making charge for similar pieces at a few shops.</p>
`,
    },
    ar: {
      heading: "كيفية شراء الذهب في المغرب",
      vatAnswer:
        "المعدل العادي للضريبة على القيمة المضافة في المغرب 20%. اسأل الصائغ هل الضريبة داخلة في السعر المعروض عليك، واطلب فاتورة تبيّن الوزن والعيار والمصنعية وأي ضريبة كلًّا على حدة.",
      body: `
<p><strong>نظرة على السوق.</strong> يبيع الصاغة في المغرب عيار 18، وهو المعيار الوحيد المسموح ببيعه، والذهب محوري في الأعراس والموروث العائلي. وتُعلن الأسعار للجرام بالدرهم. ويُدار الدرهم مقابل سلة من اليورو والدولار الأمريكي، لذا تتبع أسعار الذهب بالدرهم السعر العالمي مع بعض التأثر باليورو.</p>
<p><strong>أين تشتري.</strong> يعمل الصاغة التقليديون في المدن العتيقة بفاس ومراكش والدار البيضاء، ويبيع الصاغة الحديثون في المدن الكبرى بأسعار ثابتة. وفي الأسواق تكون المصنعية («الفاسون») قابلة للتفاوض عادةً، بينما تتبع قيمة الذهب السعر العالمي. اطلب فاتورة تبيّن الوزن والعيار والمصنعية.</p>
<p><strong>الدمغة والتحقق.</strong> ابحث عن طابع الضمان الرسمي الذي يبيّن العيار (750 لعيار 18) وعلامة الصانع، واشترِ من محلات ذات عنوان ثابت.</p>
<p><strong>سعر الصرف.</strong> تعتمد الأسعار بالدرهم في هذه الصفحة على سعر صرف وسطي يومي من مصدر بيانات عملات مفتوح المصدر.</p>
<p><strong>كيف تقدّر السعر العادل.</strong> السعر الفوري المكافئ لعيار 18 هو قيمة الذهب نفسه، ويضيف سعر المحل المصنعية وأي ضريبة. قارن المصنعية لقطع متشابهة في عدة محلات.</p>
`,
    },
  },
};
