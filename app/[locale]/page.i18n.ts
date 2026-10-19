import { pick, type LocaleText } from "@/lib/i18n-text";

/**
 * Inline homepage copy (methodology summary, trust bullets, sources intro)
 * (ar/en/tr/hi). Source and cadence wording must match the methodology page.
 */

const HOW_H2: LocaleText = {
  en: "How we calculate gold prices",
  ar: "كيف نحسب سعر الذهب",
  fr: "Comment nous calculons le cours de l'or",
  tr: "Altın fiyatını nasıl hesaplıyoruz",
  ur: "ہم سونے کی قیمت کیسے نکالتے ہیں",
  hi: "हम सोने का भाव कैसे निकालते हैं",
};

const HOW_P1: LocaleText = {
  en: "Spot gold (XAU/USD) is the global price of one troy ounce in US dollars. Each page opens with Swissquote's XAU/USD spot quote, which our server re-reads at least every five minutes. While the page stays open, the price follows the median of live PAXG/USD quotes on Binance, Coinbase and Kraken; PAXG is a token backed one-to-one by allocated London Good Delivery gold and trades close to spot, usually within a few dollars an ounce.",
  ar: "السعر الفوري للذهب (XAU/USD) هو السعر العالمي للأونصة الترويسية بالدولار الأمريكي. تفتح كل صفحة على سعر Swissquote الفوري لزوج XAU/USD، الذي يعيد خادمنا قراءته كل خمس دقائق على الأقل. وما دامت الصفحة مفتوحة يتبع السعر الوسيط بين أسعار PAXG/USD اللحظية في Binance وCoinbase وKraken؛ وPAXG رمز مدعوم واحدًا لواحد بذهب مخصص من فئة London Good Delivery، ويتداول قريبًا من السعر الفوري، عادةً بفارق بضعة دولارات للأونصة.",
  tr: "Spot altın (XAU/USD), bir troy onsun ABD doları cinsinden küresel fiyatıdır. Her sayfa, sunucumuzun en az beş dakikada bir yeniden okuduğu Swissquote XAU/USD spot fiyatıyla açılır. Sayfa açık kaldığı sürece fiyat, Binance, Coinbase ve Kraken'deki canlı PAXG/USD fiyatlarının medyanını izler; PAXG, tahsisli London Good Delivery altınıyla bire bir desteklenen bir tokendır ve spota yakın, genellikle ons başına birkaç dolar farkla işlem görür.",
  hi: "स्पॉट गोल्ड (XAU/USD) अमेरिकी डॉलर में एक ट्रॉय औंस का वैश्विक भाव है। हर पेज Swissquote के XAU/USD स्पॉट भाव से खुलता है, जिसे हमारा सर्वर कम से कम हर पाँच मिनट में दोबारा पढ़ता है। पेज खुला रहने तक भाव Binance, Coinbase और Kraken पर लाइव PAXG/USD भावों की माध्यिका के साथ चलता है; PAXG आवंटित London Good Delivery सोने से एक-एक के अनुपात में समर्थित टोकन है और स्पॉट के क़रीब, आमतौर पर प्रति औंस कुछ डॉलर के अंतर से ट्रेड होता है।",
};

const HOW_P2: LocaleText = {
  en: "To turn spot into a price per gram for each karat, we divide by 31.1035 (grams per troy ounce) and multiply by the karat's gold content: 24K is counted as pure gold (100%), 22K as 91.7%, 21K as 87.5%, 18K as 75% and 14K as 58.3%. We then multiply by the day's mid-market exchange rate from the open-source currency-api feed, giving per-gram prices in 52 currencies including SAR, JOD, AED and EGP.",
  ar: "لتحويل السعر الفوري إلى سعر الجرام لكل عيار نقسم على 31.1035 (عدد جرامات الأونصة الترويسية) ثم نضرب في نسبة الذهب في العيار: يُحسب عيار 24 ذهبًا خالصًا (100%)، وعيار 22 بنسبة 91.7%، وعيار 21 بنسبة 87.5%، وعيار 18 بنسبة 75%، وعيار 14 بنسبة 58.3%. ثم نضرب في سعر الصرف الوسطي لليوم من تغذية currency-api المفتوحة المصدر، فنحصل على سعر الجرام بـ52 عملة منها الريال السعودي والدينار الأردني والدرهم الإماراتي والجنيه المصري.",
  tr: "Spot fiyatı her ayar için gram fiyatına çevirmek üzere 31,1035'e (troy ons başına gram) bölüp ayarın altın oranıyla çarpıyoruz: 24 ayar saf altın (%100), 22 ayar %91,7, 21 ayar %87,5, 18 ayar %75 ve 14 ayar %58,3 olarak hesaplanır. Ardından açık kaynaklı currency-api akışındaki günün orta piyasa kuruyla çarparak SAR, JOD, AED ve EGP dahil 52 para biriminde gram fiyatı elde ediyoruz.",
  hi: "स्पॉट भाव को हर कैरेट के प्रति ग्राम भाव में बदलने के लिए हम 31.1035 (ग्राम प्रति ट्रॉय औंस) से भाग देते हैं और कैरेट में सोने के अनुपात से गुणा करते हैं: 24 कैरेट को शुद्ध सोना (100%), 22 कैरेट को 91.7%, 21 कैरेट को 87.5%, 18 कैरेट को 75% और 14 कैरेट को 58.3% गिना जाता है। फिर ओपन-सोर्स currency-api फ़ीड की उस दिन की मिड-मार्केट विनिमय दर से गुणा करके SAR, JOD, AED और EGP सहित 52 मुद्राओं में प्रति ग्राम भाव मिलता है।",
};

const HOW_P3: LocaleText = {
  en: "The figure shown is the value of the gold itself, before anything a shop adds. A jeweller's price also includes a making charge (per gram or per piece), the shop's margin and any local tax, and these differ by country and by piece. See our methodology page for the full method and its limits.",
  ar: "الرقم المعروض هو قيمة الذهب نفسه قبل أي إضافة من المحل. ويشمل سعر الصائغ أيضًا المصنعية (للجرام أو للقطعة) وهامش ربح المحل وأي ضريبة محلية، وتختلف هذه من بلد إلى آخر ومن قطعة إلى أخرى. راجع صفحة المنهجية للطريقة كاملة وحدودها.",
  tr: "Gösterilen rakam, bir dükkânın eklediği her şeyden önce altının kendi değeridir. Kuyumcu fiyatı ayrıca işçilik ücretini (gram ya da parça başına), dükkânın kârını ve varsa yerel vergiyi içerir; bunlar ülkeye ve parçaya göre değişir. Yöntemin tamamı ve sınırları için metodoloji sayfamıza bakın.",
  hi: "दिखाया गया आंकड़ा सोने का अपना मूल्य है, दुकान की किसी भी जोड़ से पहले। ज्वैलर के भाव में मेकिंग चार्ज (प्रति ग्राम या प्रति पीस), दुकान का मार्जिन और कोई भी स्थानीय कर भी शामिल होता है, और ये देश और गहने के हिसाब से अलग होते हैं। पूरी पद्धति और इसकी सीमाओं के लिए हमारा कार्यप्रणाली पेज देखें।",
};

const TRUST_H2: LocaleText = {
  en: "Why trust Gold Prices Arabia",
  ar: "لماذا تثق في Gold Prices Arabia",
  fr: "Pourquoi faire confiance à Gold Prices Arabia",
  tr: "Gold Prices Arabia'ya neden güvenmelisiniz",
  ur: "Gold Prices Arabia پر بھروسا کیوں کریں",
  hi: "Gold Prices Arabia पर भरोसा क्यों करें",
};

type Bullet = { label: LocaleText; text: LocaleText };

const TRUST_BULLETS: Bullet[] = [
  {
    label: {
      en: "Transparent data: ",
      ar: "بيانات شفافة: ",
      fr: "Données transparentes : ",
      tr: "Şeffaf veri: ",
      ur: "شفاف ڈیٹا: ",
      hi: "पारदर्शी डेटा: ",
    },
    text: {
      en: "Every calculation documented at /methodology. No hidden numbers, no secret pricing margins.",
      ar: "كل حساب موثق في /methodology. لا أرقام مخفية، لا هوامش تسعير سرية.",
      fr: "Chaque calcul est documenté sur /methodology. Aucun chiffre caché, aucune marge secrète.",
      tr: "Her hesaplama /methodology sayfasında belgelenmiştir. Gizli rakam yok, gizli fiyat marjı yok.",
      ur: "ہر حساب /methodology پر درج ہے۔ نہ کوئی چھپا ہوا عدد، نہ کوئی خفیہ مارجن۔",
      hi: "हर गणना /methodology पर दर्ज है। न कोई छिपा आंकड़ा, न कोई गुप्त मार्जिन।",
    },
  },
  {
    label: {
      en: "Named author: ",
      ar: "مؤلف معروف: ",
      fr: "Auteur identifié : ",
      tr: "Bilinen yazar: ",
      ur: "معلوم مصنف: ",
      hi: "ज्ञात लेखक: ",
    },
    text: {
      en: "Site founded by Sadeq Sayed Ahmad. LinkedIn contact available for identity verification.",
      ar: "أسس الموقع صادق سيد أحمد. التواصل عبر LinkedIn متاح للتحقق من الهوية.",
      fr: "Site fondé par Sadeq Sayed Ahmad. Contact LinkedIn disponible pour vérifier l'identité.",
      tr: "Site Sadeq Sayed Ahmad tarafından kuruldu. Kimlik doğrulaması için LinkedIn iletişimi mevcut.",
      ur: "یہ سائٹ صادق سید احمد نے قائم کی۔ شناخت کی تصدیق کے لیے LinkedIn رابطہ دستیاب ہے۔",
      hi: "साइट की स्थापना सादिक़ सैयद अहमद ने की। पहचान सत्यापन के लिए LinkedIn संपर्क उपलब्ध है।",
    },
  },
  {
    label: {
      en: "Not financial advice: ",
      ar: "ليست نصيحة مالية: ",
      fr: "Pas un conseil financier : ",
      tr: "Yatırım tavsiyesi değildir: ",
      ur: "مالی مشورہ نہیں: ",
      hi: "वित्तीय सलाह नहीं: ",
    },
    text: {
      en: "We publish prices, not recommendations. Consult a licensed financial advisor before investment decisions.",
      ar: "ننشر الأسعار، لا التوصيات. استشر مستشاراً مالياً مرخّصاً قبل اتخاذ قرارات الاستثمار.",
      fr: "Nous publions des prix, pas des recommandations. Consultez un conseiller financier agréé avant toute décision d'investissement.",
      tr: "Fiyat yayımlıyoruz, öneri değil. Yatırım kararlarından önce lisanslı bir finans danışmanına başvurun.",
      ur: "ہم قیمتیں شائع کرتے ہیں، سفارشات نہیں۔ سرمایہ کاری کے فیصلوں سے پہلے لائسنس یافتہ مالی مشیر سے رجوع کریں۔",
      hi: "हम भाव प्रकाशित करते हैं, सिफ़ारिशें नहीं। निवेश निर्णय से पहले लाइसेंस प्राप्त वित्तीय सलाहकार से परामर्श लें।",
    },
  },
  {
    label: {
      en: "Continuously updated: ",
      ar: "تحديث مستمر: ",
      fr: "Mise à jour continue : ",
      tr: "Sürekli güncel: ",
      ur: "مسلسل اپ ڈیٹ: ",
      hi: "लगातार अपडेट: ",
    },
    text: {
      en: "Gold opens at Swissquote's spot price, re-read at least every five minutes, then follows a live median of three exchanges while the page is open. Silver, platinum and palladium are re-read every five minutes.",
      ar: "يبدأ الذهب بسعر Swissquote الفوري الذي يُعاد قراءته كل خمس دقائق على الأقل، ثم يتبع وسيطًا لحظيًا من ثلاث منصات ما دامت الصفحة مفتوحة. وتُعاد قراءة الفضة والبلاتين والبلاديوم كل خمس دقائق.",
      tr: "Altın, en az beş dakikada bir yeniden okunan Swissquote spot fiyatıyla açılır, sayfa açık kaldığı sürece üç platformun canlı medyanını izler. Gümüş, platin ve paladyum beş dakikada bir yeniden okunur.",
      hi: "सोना Swissquote के स्पॉट भाव से शुरू होता है, जिसे कम से कम हर पाँच मिनट में दोबारा पढ़ा जाता है, फिर पेज खुला रहने तक तीन प्लेटफ़ॉर्म की लाइव माध्यिका के साथ चलता है। चांदी, प्लैटिनम और पैलेडियम हर पाँच मिनट में दोबारा पढ़े जाते हैं।",
    },
  },
  {
    label: {
      en: "Free for everyone: ",
      ar: "مجاني للجميع: ",
      fr: "Gratuit pour tous : ",
      tr: "Herkese ücretsiz: ",
      ur: "سب کے لیے مفت: ",
      hi: "सबके लिए मुफ़्त: ",
    },
    text: {
      en: "No subscription, no login, no rate limits. A public service for the MENA region.",
      ar: "لا اشتراك، لا تسجيل دخول، لا حد للاستخدام. خدمة عامة لمنطقة الشرق الأوسط وشمال أفريقيا.",
      fr: "Pas d'abonnement, pas de connexion, pas de limite d'usage. Un service public pour la région MENA.",
      tr: "Abonelik yok, giriş yok, kullanım sınırı yok. MENA bölgesi için bir kamu hizmeti.",
      ur: "نہ سبسکرپشن، نہ لاگ اِن، نہ استعمال کی حد۔ مشرقِ وسطیٰ اور شمالی افریقہ کے لیے ایک عوامی خدمت۔",
      hi: "न सब्सक्रिप्शन, न लॉगिन, न उपयोग की सीमा। MENA क्षेत्र के लिए एक सार्वजनिक सेवा।",
    },
  },
];

const SOURCES_H2: LocaleText = {
  en: "Data sources & references",
  ar: "مصادر البيانات والمراجع",
  fr: "Sources de données et références",
  tr: "Veri kaynakları ve referanslar",
  ur: "ڈیٹا کے ذرائع اور حوالہ جات",
  hi: "डेटा स्रोत और संदर्भ",
};

const SOURCES_P: LocaleText = {
  en: "Our gold price comes from Swissquote's spot feed and live PAXG/USD quotes on Binance, Coinbase and Kraken; exchange rates are daily mid-market rates. Check the figures against these independent references:",
  ar: "يأتي سعر الذهب لدينا من تغذية Swissquote الفورية وأسعار PAXG/USD اللحظية في Binance وCoinbase وKraken، وأسعار الصرف أسعار وسطية يومية. قارن الأرقام بهذه المراجع المستقلة:",
  tr: "Altın fiyatımız Swissquote spot akışından ve Binance, Coinbase ve Kraken'deki canlı PAXG/USD fiyatlarından gelir; döviz kurları günlük orta piyasa kurlarıdır. Rakamları şu bağımsız kaynaklarla karşılaştırın:",
  hi: "हमारा सोने का भाव Swissquote की स्पॉट फ़ीड और Binance, Coinbase व Kraken पर लाइव PAXG/USD भावों से आता है; विनिमय दरें दैनिक मिड-मार्केट दरें हैं। आंकड़ों को इन स्वतंत्र संदर्भों से मिलाएँ:",
};

/** Resolve every inline homepage string for one locale. */
export function homeText(locale: string) {
  return {
    howH2: pick(locale, HOW_H2),
    howP1: pick(locale, HOW_P1),
    howP2: pick(locale, HOW_P2),
    howP3: pick(locale, HOW_P3),
    trustH2: pick(locale, TRUST_H2),
    trustBullets: TRUST_BULLETS.map((b) => ({
      label: pick(locale, b.label),
      text: pick(locale, b.text),
    })),
    sourcesH2: pick(locale, SOURCES_H2),
    sourcesP: pick(locale, SOURCES_P),
  };
}
