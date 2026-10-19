import { pick, type LocaleText } from "@/lib/i18n-text";
import { hasCountryKaratPage } from "@/lib/karat-pages";
import { karatLabel, karatPurity } from "@/lib/karat-label";

/**
 * Per-country tax notes spliced into the FAQ. Checked against tax-authority
 * guidance and press on 2026-10-19; Jordan removed (no source for a current
 * rate). Every locale carries its own sentence so the FAQ never mixes languages.
 */
export const COUNTRY_VAT: Record<string, { rate: string } & LocaleText> = {
  "saudi-arabia": {
    rate: "15%",
    en: "Saudi Arabia charges 15% VAT on the full price of jewellery (investment gold of 99% purity or more is zero-rated)",
    ar: "تفرض السعودية ضريبة قيمة مضافة 15% على سعر المجوهرات كاملًا (الذهب الاستثماري بنقاء 99% فأكثر بنسبة الصفر)",
    tr: "Suudi Arabistan mücevherin tüm fiyatına %15 KDV uygular (saflığı %99 ve üzeri yatırım altını sıfır oranlıdır)",
    hi: "सऊदी अरब गहनों की पूरी क़ीमत पर 15% VAT लगाता है (99% या अधिक शुद्धता का निवेश सोना शून्य-दर पर है)",
  },
  uae: {
    rate: "5%",
    en: "The UAE charges 5% VAT on the full price of jewellery, gold and making charge alike (investment gold of 99% purity or more is zero-rated)",
    ar: "تفرض الإمارات ضريبة قيمة مضافة 5% على سعر المجوهرات كاملًا، الذهب والمصنعية معًا (الذهب الاستثماري بنقاء 99% فأكثر بنسبة الصفر)",
    tr: "BAE, altın ve işçilik dahil mücevherin tüm fiyatına %5 KDV uygular (saflığı %99 ve üzeri yatırım altını sıfır oranlıdır)",
    hi: "UAE सोना और मेकिंग चार्ज मिलाकर गहनों की पूरी क़ीमत पर 5% VAT लगाता है (99% या अधिक शुद्धता का निवेश सोना शून्य-दर पर है)",
  },
  egypt: {
    rate: "14%",
    en: "Egypt charges 14% VAT only on an agreed average making charge per gram, paid when the piece is hallmarked (the gold itself is not taxed)",
    ar: "تفرض مصر ضريبة قيمة مضافة 14% على متوسط متفق عليه للمصنعية لكل جرام فقط، تُدفع عند دمغ القطعة (الذهب نفسه لا يخضع لها)",
    tr: "Mısır yalnızca gram başına üzerinde anlaşılan ortalama işçilik ücretine %14 KDV uygular; vergi damgalama sırasında ödenir (altının kendisi vergilendirilmez)",
    hi: "मिस्र केवल प्रति ग्राम तय औसत मेकिंग चार्ज पर 14% VAT लगाता है, जो हॉलमार्किंग के समय चुकाया जाता है (सोने पर ख़ुद कर नहीं लगता)",
  },
  bahrain: {
    rate: "10%",
    en: "Bahrain charges 10% VAT on jewellery (certified investment gold of 99% purity or more is zero-rated)",
    ar: "تفرض البحرين ضريبة قيمة مضافة 10% على المجوهرات (الذهب الاستثماري المعتمد بنقاء 99% فأكثر بنسبة الصفر)",
    tr: "Bahreyn mücevhere %10 KDV uygular (saflığı %99 ve üzeri sertifikalı yatırım altını sıfır oranlıdır)",
    hi: "बहरीन गहनों पर 10% VAT लगाता है (99% या अधिक शुद्धता का प्रमाणित निवेश सोना शून्य-दर पर है)",
  },
  kuwait: {
    rate: "0%",
    en: "Kuwait levies no VAT on gold",
    ar: "لا تفرض الكويت ضريبة قيمة مضافة على الذهب",
    tr: "Kuveyt altına KDV uygulamaz",
    hi: "कुवैत सोने पर VAT नहीं लगाता",
  },
  qatar: {
    rate: "0%",
    en: "Qatar levies no VAT on gold (jewellery imported from outside the GCC pays 5% customs duty)",
    ar: "لا تفرض قطر ضريبة قيمة مضافة على الذهب (وتُفرض رسوم جمركية 5% على المجوهرات المستوردة من خارج دول مجلس التعاون)",
    tr: "Katar altına KDV uygulamaz (KİK dışından ithal edilen mücevher %5 gümrük vergisi öder)",
    hi: "क़तर सोने पर VAT नहीं लगाता (GCC के बाहर से आयातित गहनों पर 5% सीमा शुल्क लगता है)",
  },
  uk: {
    rate: "20%",
    en: "The UK charges 20% VAT on jewellery (investment bars of 99.5% purity or more, and most gold coins of 90% or more, are VAT-exempt)",
    ar: "تفرض المملكة المتحدة ضريبة قيمة مضافة 20% على المجوهرات (وتُعفى منها السبائك الاستثمارية بنقاء 99.5% فأكثر ومعظم العملات الذهبية بنقاء 90% فأكثر)",
    tr: "Birleşik Krallık mücevhere %20 KDV uygular (saflığı %99,5 ve üzeri yatırım külçeleri ile %90 ve üzeri çoğu altın sikke KDV'den muaftır)",
    hi: "ब्रिटेन गहनों पर 20% VAT लगाता है (99.5% या अधिक शुद्धता की निवेश सिल्लियाँ और 90% या अधिक की ज़्यादातर सोने की मुद्राएँ VAT से मुक्त हैं)",
  },
};

export const homeLabel = (locale: string) =>
  pick(locale, { en: "Home", ar: "الرئيسية", fr: "Accueil", tr: "Ana Sayfa", ur: "ہوم", hi: "होम" });

/** Breadcrumb leaf: "21K Gold Price" / "سعر الذهب عيار 21". */
export function karatCrumb(locale: string, karat: string) {
  const k = karatLabel(locale, karat);
  return pick(locale, {
    en: `${k} Gold Price`,
    ar: `سعر الذهب ${k}`,
    fr: `Prix de l'or ${k}`,
    tr: `${k} altın fiyatı`,
    ur: `${k} سونے کی قیمت`,
    hi: `${k} सोने का भाव`,
  });
}

export type FaqCtx = { karat: string; country: string; currency: string; slug: string };

/** Five-question FAQPage block (also emitted as JSON-LD). */
export function countryKaratFaqs(locale: string, { karat, country, currency, slug }: FaqCtx) {
  const k = karatLabel(locale, karat);
  const upper = karat.toUpperCase();
  const purity = karatPurity(karat);
  const vatNote = COUNTRY_VAT[slug];
  const vat = vatNote ? `${pick(locale, vatNote)}. ` : "";
  return [
    {
      q: pick(locale, {
        en: `What is the ${k} gold price today in ${country}?`,
        ar: `كم سعر الذهب ${k} اليوم في ${country}؟`,
        fr: `Quel est le prix de l'or ${k} aujourd'hui (${country}) ?`,
        tr: `${country} için bugün ${k} altın fiyatı ne kadar?`,
        ur: `آج ${country} میں ${k} سونے کی قیمت کیا ہے؟`,
        hi: `आज ${country} में ${k} सोने का भाव क्या है?`,
      }),
      a: pick(locale, {
        en: `${k} gold price in ${country} is shown in ${currency} in the table above and keeps moving while the page is open. The price is derived from the international spot ounce price (XAU/USD, from Swissquote and live PAXG/USD quotes), divided by 31.1035 grams per troy ounce, multiplied by the purity ratio (${purity}), and converted at the daily ${currency}/USD FX rate.`,
        ar: `يظهر سعر الذهب ${k} في ${country} بـ${currency} في الجدول أعلاه ويواصل التحرك ما دامت الصفحة مفتوحة. السعر مشتق من السعر الفوري العالمي للأونصة (XAU/USD من Swissquote وأسعار PAXG/USD اللحظية)، مقسوماً على 31.1035 جرام لكل أونصة، مضروباً بنسبة النقاء (${purity})، ثم محوّلاً بسعر صرف ${currency}/USD اليومي.`,
        fr: `Le prix de l'or ${k} pour ${country} est actualisé chaque seconde dans le tableau ci-dessus, en ${currency}. Il est dérivé du prix spot mondial de l'once (XAU/USD) fourni par Binance, Coinbase et Kraken, divisé par 31,1035 grammes par once troy, multiplié par le taux de pureté (${purity}) et converti au taux de change quotidien ${currency}/USD.`,
        tr: `${country} ${k} altın fiyatı yukarıdaki tabloda ${currency} cinsinden gösterilir ve sayfa açıkken hareket etmeye devam eder. Fiyat, uluslararası spot ons fiyatının (XAU/USD; Swissquote ve canlı PAXG/USD kotasyonları) troy ons başına 31,1035 grama bölünmesi, saflık oranıyla (${purity}) çarpılması ve günlük ${currency}/USD kuruyla çevrilmesiyle elde edilir.`,
        ur: `${country} میں ${k} سونے کی قیمت اوپر کے جدول میں ${currency} میں ہر سیکنڈ اپ ڈیٹ ہوتی ہے۔ قیمت Binance، Coinbase اور Kraken سے حاصل عالمی اسپاٹ اونس قیمت (XAU/USD) کو فی ٹرائے اونس 31.1035 گرام پر تقسیم، خلوص کے تناسب (${purity}) سے ضرب اور روزانہ ${currency}/USD شرحِ مبادلہ پر تبدیل کر کے نکالی جاتی ہے۔`,
        hi: `${country} में ${k} सोने का भाव ऊपर की तालिका में ${currency} में दिखता है और पेज खुला रहने तक बदलता रहता है। भाव अंतरराष्ट्रीय स्पॉट औंस भाव (XAU/USD, Swissquote और लाइव PAXG/USD भावों से) को प्रति ट्रॉय औंस 31.1035 ग्राम से भाग देकर, शुद्धता अनुपात (${purity}) से गुणा करके और दैनिक ${currency}/USD विनिमय दर पर बदलकर निकाला जाता है।`,
      }),
    },
    {
      q: pick(locale, {
        en: `Does the ${country} gold price include making charges and VAT?`,
        ar: `هل سعر الذهب في ${country} يشمل المصنعية وضريبة القيمة المضافة؟`,
        fr: `Le prix de l'or (${country}) inclut-il la façon et la TVA ?`,
        tr: `${country} altın fiyatına işçilik ve KDV dahil mi?`,
        ur: `کیا ${country} کے سونے کی قیمت میں بناوائی اور VAT شامل ہے؟`,
        hi: `क्या ${country} के सोने के भाव में मेकिंग चार्ज और VAT शामिल है?`,
      }),
      a: pick(locale, {
        en: `No. The displayed price is the raw spot-equivalent gold value only. ${vat}Jewellery shops add a making charge, which each shop sets, and their own margin.`,
        ar: `لا. السعر المعروض هو السعر الفوري للذهب الخام فقط. ${vat}وتضيف محلات المجوهرات مصنعية يحددها كل محل وهامش ربحها.`,
        fr: `Non. Le prix affiché correspond uniquement à la valeur spot de l'or brut. ${vat}Les bijouteries ajoutent la façon (généralement 5 à 30 unités monétaires locales par gramme pour les pièces complexes) et une marge de détail (3 à 10 %).`,
        tr: `Hayır. Gösterilen fiyat yalnızca ham altının spot karşılığıdır. ${vat}Kuyumcular buna her dükkânın belirlediği işçilik ücretini ve kendi marjını ekler.`,
        ur: `نہیں۔ دکھائی گئی قیمت صرف خام سونے کی اسپاٹ قیمت ہے۔ ${vat}جیولرز اس میں بناوائی (پیچیدہ زیورات کے لیے عموماً فی گرام 5-30 مقامی کرنسی یونٹ) اور خوردہ منافع (3-10%) شامل کرتے ہیں۔`,
        hi: `नहीं। दिखाया गया भाव सिर्फ़ कच्चे सोने का स्पॉट मूल्य है। ${vat}ज्वेलर्स इसमें हर दुकान का अपना मेकिंग चार्ज और अपना मार्जिन जोड़ते हैं।`,
      }),
    },
    {
      q: pick(locale, {
        en: `Why does ${k} gold in ${country} differ from the global price?`,
        ar: `لماذا يختلف سعر ${k} في ${country} عن السعر العالمي؟`,
        fr: `Pourquoi l'or ${k} (${country}) diffère-t-il du prix mondial ?`,
        tr: `${country} ${k} altın küresel fiyattan neden farklı?`,
        ur: `${country} میں ${k} سونا عالمی قیمت سے مختلف کیوں ہے؟`,
        hi: `${country} में ${k} सोना वैश्विक भाव से अलग क्यों है?`,
      }),
      a: pick(locale, {
        en: `Global gold is priced in USD. The ${country} price shown here is the same global price converted to ${currency} at the daily FX rate, then divided to a per-gram value at the ${k} purity ratio. There is no real price difference — just unit and currency conversion.`,
        ar: `سعر الذهب العالمي بالدولار. سعر ${country} المعروض هو نفس السعر العالمي محوّلاً إلى ${currency} بسعر الصرف اليومي، ثم مقسوماً لكل جرام بنسبة النقاء ${upper}. لا يوجد فرق سعر حقيقي — فقط تحويل وحدات وعملة.`,
        fr: `L'or mondial est coté en USD. Le prix affiché pour ${country} est ce même prix mondial converti en ${currency} au taux de change du jour, puis ramené au gramme selon le taux de pureté ${k}. Il n'y a aucun écart de prix réel — seulement une conversion d'unité et de devise.`,
        tr: `Küresel altın USD ile fiyatlanır. Burada gösterilen ${country} fiyatı, aynı küresel fiyatın günlük kurla ${currency} cinsine çevrilip ${k} saflık oranıyla grama bölünmüş hâlidir. Gerçek bir fiyat farkı yoktur; yalnızca birim ve para birimi dönüşümü vardır.`,
        ur: `عالمی سونا USD میں قیمت پاتا ہے۔ یہاں دکھائی گئی ${country} کی قیمت وہی عالمی قیمت ہے جو روزانہ شرحِ مبادلہ پر ${currency} میں تبدیل کر کے ${k} خلوص کے تناسب سے فی گرام نکالی گئی ہے۔ قیمت میں کوئی حقیقی فرق نہیں — صرف یونٹ اور کرنسی کی تبدیلی ہے۔`,
        hi: `वैश्विक सोना USD में कोट होता है। यहाँ दिखाया गया ${country} का भाव वही वैश्विक भाव है जिसे दैनिक विनिमय दर पर ${currency} में बदलकर ${k} शुद्धता अनुपात से प्रति ग्राम निकाला गया है। भाव में कोई वास्तविक अंतर नहीं — सिर्फ़ इकाई और मुद्रा का रूपांतरण है।`,
      }),
    },
    {
      q: pick(locale, {
        en: `Where do I buy ${k} gold in ${country}?`,
        ar: `أين أشتري الذهب ${k} في ${country}؟`,
        fr: `Où acheter de l'or ${k} (${country}) ?`,
        tr: `${country} içinde ${k} altın nereden alınır?`,
        ur: `${country} میں ${k} سونا کہاں سے خریدیں؟`,
        hi: `${country} में ${k} सोना कहाँ से खरीदें?`,
      }),
      a: pick(locale, {
        en: `Gold is sold in ${country} at local gold souks and licensed goldsmiths. Always check the hallmark stamp to confirm karat, and obtain a documented receipt. The spot price shown here is your reference for evaluating the shop's price before making charges.`,
        ar: `الذهب يُباع في ${country} في أسواق الذهب المحلية ومحلات الصاغة المرخصة. تحقق دائماً من الختم (الهولمارك) للتأكد من العيار، واحصل على فاتورة موثقة. السعر الفوري المعروض هنا هو مرجعك لتقييم سعر المحل قبل المصنعية.`,
        fr: `${country} : l'or s'achète dans les souks de l'or locaux et chez les bijoutiers agréés. Vérifiez toujours le poinçon pour confirmer le titre et exigez une facture. Le prix spot affiché ici sert de référence pour évaluer le prix en boutique avant la façon.`,
        tr: `${country} içinde altın, yerel altın çarşılarında ve lisanslı kuyumcularda satılır. Ayarı doğrulamak için daima damgayı kontrol edin ve belgeli fatura alın. Burada gösterilen spot fiyat, işçilik öncesi kuyumcu fiyatını değerlendirmek için referansınızdır.`,
        ur: `${country} میں سونا مقامی صرافہ بازاروں اور لائسنس یافتہ سناروں سے ملتا ہے۔ قیراط کی تصدیق کے لیے ہمیشہ ہال مارک مہر دیکھیں اور باقاعدہ رسید لیں۔ یہاں دکھائی گئی اسپاٹ قیمت بناوائی سے پہلے دکان کی قیمت پرکھنے کا آپ کا حوالہ ہے۔`,
        hi: `${country} में सोना स्थानीय सर्राफ़ा बाज़ारों और लाइसेंस प्राप्त सुनारों के यहाँ मिलता है। कैरेट की पुष्टि के लिए हमेशा हॉलमार्क देखें और पक्की रसीद लें। यहाँ दिखाया गया स्पॉट भाव मेकिंग चार्ज से पहले दुकान के भाव को परखने का आपका संदर्भ है।`,
      }),
    },
    {
      q: pick(locale, {
        en: `How often is the ${country} gold price updated?`,
        ar: `كم مرة يُحدّث سعر الذهب في ${country}؟`,
        fr: `À quelle fréquence le prix de l'or (${country}) est-il mis à jour ?`,
        tr: `${country} altın fiyatı ne sıklıkla güncellenir?`,
        ur: `${country} میں سونے کی قیمت کتنی بار اپ ڈیٹ ہوتی ہے؟`,
        hi: `${country} में सोने का भाव कितनी बार अपडेट होता है?`,
      }),
      a: pick(locale, {
        en: `The spot price is refreshed from Swissquote at least every five minutes and moves with live PAXG/USD quotes while the page is open. The ${currency}/USD exchange rate is the day's mid-market rate from the open-source currency-api feed. The price you see is the global spot price converted to the local currency.`,
        ar: `يُحدَّث السعر الفوري من Swissquote كل خمس دقائق على الأقل، ويتحرك مع أسعار PAXG/USD اللحظية ما دامت الصفحة مفتوحة. سعر صرف ${currency}/USD هو السعر المتوسط لليوم من مصدر currency-api المفتوح المصدر. السعر الذي تراه هو السعر الفوري العالمي مُحوّلاً للعملة المحلية.`,
        fr: `Le prix spot est actualisé chaque seconde via WebSocket. Le taux ${currency}/USD est actualisé toutes les heures à partir des données ouvertes des banques centrales. Le prix affiché est le prix mondial en direct converti en devise locale.`,
        tr: `Spot fiyat Swissquote'tan en az beş dakikada bir yenilenir ve sayfa açıkken canlı PAXG/USD kotasyonlarıyla hareket eder. ${currency}/USD kuru, açık kaynaklı currency-api akışından günün orta piyasa kurudur. Gördüğünüz fiyat, yerel para birimine çevrilmiş küresel spot fiyattır.`,
        ur: `اسپاٹ قیمت WebSocket کے ذریعے ہر سیکنڈ اپ ڈیٹ ہوتی ہے۔ ${currency}/USD شرحِ مبادلہ مرکزی بینکوں کے اوپن ڈیٹا سے ہر گھنٹے اپ ڈیٹ ہوتی ہے۔ جو قیمت آپ دیکھتے ہیں وہ مقامی کرنسی میں تبدیل شدہ لائیو عالمی قیمت ہے۔`,
        hi: `स्पॉट भाव Swissquote से कम से कम हर पाँच मिनट में ताज़ा होता है और पेज खुला रहने तक लाइव PAXG/USD भावों के साथ बदलता है। ${currency}/USD विनिमय दर ओपन-सोर्स currency-api फ़ीड से दिन की मध्य-बाज़ार दर है। जो भाव आप देखते हैं वह स्थानीय मुद्रा में बदला हुआ वैश्विक स्पॉट भाव है।`,
      }),
    },
  ];
}

/** "Related {country} pages" link block. */
export function relatedPageLinks(locale: string, { country, currency, slug }: Omit<FaqCtx, "karat">) {
  return {
    heading: pick(locale, {
      en: `Related ${country} pages`,
      ar: `صفحات ذات صلة لـ ${country}`,
      fr: `Pages liées – ${country}`,
      tr: `${country} ile ilgili sayfalar`,
      ur: `${country} سے متعلق صفحات`,
      hi: `${country} से जुड़े पेज`,
    }),
    items: [
      ...(hasCountryKaratPage(locale, slug, "24k")
        ? [
            {
              href: `/${slug}/gold-price/24k`,
              label: `${country} 24K`,
              note: pick(locale, { en: "Highest purity", ar: "أعلى نقاء", fr: "Pureté maximale", tr: "En yüksek saflık", ur: "سب سے زیادہ خلوص", hi: "सर्वोच्च शुद्धता" }),
            },
          ]
        : []),
      {
        href: `/${slug}/gold-price/21k`,
        label: `${country} 21K`,
        note: pick(locale, { en: "Most traded", ar: "الأكثر تداولاً", fr: "Le plus négocié", tr: "En çok işlem gören", ur: "سب سے زیادہ رائج", hi: "सबसे ज़्यादा कारोबार" }),
      },
      {
        href: "/spot-gold",
        label: pick(locale, { en: "Spot Gold (XAU/USD)", ar: "السعر الفوري XAU/USD", fr: "Or spot (XAU/USD)", tr: "Spot altın (XAU/USD)", ur: "اسپاٹ گولڈ (XAU/USD)", hi: "स्पॉट गोल्ड (XAU/USD)" }),
        note: pick(locale, { en: "Global USD reference", ar: "السعر العالمي بالدولار", fr: "Référence mondiale en USD", tr: "Küresel USD referansı", ur: "عالمی USD حوالہ", hi: "वैश्विक USD संदर्भ" }),
      },
      {
        href: "/gold-calculator",
        label: pick(locale, { en: "Gold calculator", ar: "حاسبة الذهب", fr: "Calculateur d'or", tr: "Altın hesaplayıcı", ur: "سونے کا کیلکولیٹر", hi: "सोना कैलकुलेटर" }),
        note: inCurrency(locale, currency),
      },
      {
        href: "/news/spot-gold-vs-retail-jeweller-spread",
        label: pick(locale, { en: "Spot vs retail spread", ar: "هامش الصائغ", fr: "Écart spot / détail", tr: "Spot-perakende farkı", ur: "اسپاٹ بمقابلہ ریٹیل فرق", hi: "स्पॉट बनाम रिटेल अंतर" }),
        note: pick(locale, { en: "How prices are set", ar: "كيف يُحسب السعر", fr: "Comment les prix sont fixés", tr: "Fiyatlar nasıl belirlenir", ur: "قیمتیں کیسے طے ہوتی ہیں", hi: "भाव कैसे तय होते हैं" }),
      },
      {
        href: "/methodology",
        label: pick(locale, { en: "Methodology", ar: "المنهجية", fr: "Méthodologie", tr: "Metodoloji", ur: "طریقۂ کار", hi: "कार्यप्रणाली" }),
        note: pick(locale, { en: "Where prices come from", ar: "من أين تأتي الأسعار", fr: "D'où viennent les prix", tr: "Fiyatlar nereden geliyor", ur: "قیمتیں کہاں سے آتی ہیں", hi: "भाव कहाँ से आते हैं" }),
      },
    ],
  };
}

/** "In JOD" / "بعملة JOD" — note under currency-specific links. */
export const inCurrency = (locale: string, currency: string) =>
  pick(locale, {
    en: `In ${currency}`,
    ar: `بعملة ${currency}`,
    fr: `En ${currency}`,
    tr: `${currency} cinsinden`,
    ur: `${currency} میں`,
    hi: `${currency} में`,
  });

/** "{karat} gold price in nearby countries" block labels. */
export function nearbyText(locale: string, karat: string) {
  const k = karatLabel(locale, karat);
  return {
    heading: pick(locale, {
      en: `${k} gold price in nearby countries`,
      ar: `سعر الذهب ${k} في دول قريبة`,
      fr: `Prix de l'or ${k} dans les pays voisins`,
      tr: `Yakın ülkelerde ${k} altın fiyatı`,
      ur: `قریبی ممالک میں ${k} سونے کی قیمت`,
      hi: `पड़ोसी देशों में ${k} सोने का भाव`,
    }),
    allLabel: pick(locale, { en: "All countries", ar: "كل الدول", fr: "Tous les pays", tr: "Tüm ülkeler", ur: "تمام ممالک", hi: "सभी देश" }),
    allNote: pick(locale, { en: "Browse every market", ar: "تصفّح جميع الأسواق", fr: "Parcourir tous les marchés", tr: "Tüm piyasalara göz atın", ur: "تمام مارکیٹیں دیکھیں", hi: "सभी बाज़ार देखें" }),
  };
}
