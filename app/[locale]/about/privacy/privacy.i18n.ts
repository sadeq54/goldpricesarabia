import { pick, type LocaleText } from "@/lib/i18n-text";

export const PRIVACY_UPDATED = "2026-09-10";
export const SUPPORT_EMAIL = "support@goldpricesarabia.com";

export const TITLE: LocaleText = {
  en: "Privacy Policy",
  ar: "سياسة الخصوصية",
  fr: "Politique de confidentialité",
  tr: "Gizlilik Politikası",
  ur: "رازداری کی پالیسی",
  hi: "गोपनीयता नीति",
};

export const DESCRIPTION: LocaleText = {
  en: "How Gold Prices Arabia collects and uses data: analytics cookies, Google AdSense advertising, your choices and how to contact us.",
  ar: "كيف يجمع موقع أسعار الذهب العربية البيانات ويستخدمها: ملفات تعريف الارتباط التحليلية، إعلانات Google AdSense، خياراتك وطريقة التواصل معنا.",
  fr: "Comment Gold Prices Arabia collecte et utilise les données : cookies d'analyse, publicité Google AdSense, vos choix et contact.",
  tr: "Gold Prices Arabia verileri nasıl toplar ve kullanır: analitik çerezler, Google AdSense reklamları, seçenekleriniz ve iletişim.",
  ur: "گولڈ پرائسز عربیہ ڈیٹا کیسے جمع اور استعمال کرتا ہے: تجزیاتی کوکیز، Google AdSense اشتہارات، آپ کے اختیارات اور رابطہ۔",
  hi: "Gold Prices Arabia डेटा कैसे एकत्र और उपयोग करता है: एनालिटिक्स कुकीज़, Google AdSense विज्ञापन, आपके विकल्प और संपर्क।",
};

type Section = { h: LocaleText; body: LocaleText };

export const SECTIONS: Section[] = [
  {
    h: { en: "What this policy covers", ar: "نطاق هذه السياسة", fr: "Champ d'application", tr: "Bu politikanın kapsamı", ur: "اس پالیسی کا دائرہ", hi: "यह नीति किस पर लागू है" },
    body: {
      en: "This policy explains what information goldpricesarabia.com collects when you visit, why, and the choices you have. The site is an information service about gold prices; it does not sell gold, hold accounts, or process payments, so we never ask for financial details.",
      ar: "توضح هذه السياسة المعلومات التي يجمعها موقع goldpricesarabia.com عند زيارتك، وسبب جمعها، والخيارات المتاحة لك. الموقع خدمة معلومات عن أسعار الذهب؛ لا يبيع الذهب ولا يحتفظ بحسابات ولا يعالج مدفوعات، لذلك لا نطلب أي بيانات مالية.",
      fr: "Cette politique explique quelles informations goldpricesarabia.com collecte lors de votre visite, pourquoi, et vos choix. Le site est un service d'information sur le cours de l'or ; il ne vend pas d'or, ne tient aucun compte et ne traite aucun paiement.",
      tr: "Bu politika, goldpricesarabia.com'u ziyaret ettiğinizde hangi bilgilerin neden toplandığını ve seçeneklerinizi açıklar. Site altın fiyatları hakkında bir bilgi hizmetidir; altın satmaz, hesap tutmaz, ödeme işlemez.",
      ur: "یہ پالیسی بتاتی ہے کہ goldpricesarabia.com آپ کے دورے پر کون سی معلومات کیوں جمع کرتا ہے اور آپ کے پاس کیا اختیارات ہیں۔ سائٹ سونے کی قیمتوں کی معلوماتی سروس ہے؛ نہ سونا بیچتی ہے، نہ اکاؤنٹ رکھتی ہے، نہ ادائیگی پراسیس کرتی ہے۔",
      hi: "यह नीति बताती है कि goldpricesarabia.com आपकी विज़िट पर कौन सी जानकारी क्यों एकत्र करता है और आपके पास क्या विकल्प हैं। साइट सोने के भाव की सूचना सेवा है; यह सोना नहीं बेचती, खाते नहीं रखती, भुगतान प्रोसेस नहीं करती।",
    },
  },
  {
    h: { en: "Data we collect automatically", ar: "البيانات التي تُجمع تلقائياً", fr: "Données collectées automatiquement", tr: "Otomatik toplanan veriler", ur: "خودکار طور پر جمع ہونے والا ڈیٹا", hi: "स्वतः एकत्र डेटा" },
    body: {
      en: "Like most websites we receive standard technical data: IP address, browser and device type, language, pages viewed, referring site and timestamps. We use Google Analytics 4 with IP anonymisation to understand which pages are useful. A country cookie (gpa-country) remembers the market page you were sent to; a theme preference may be stored in your browser. None of this identifies you by name.",
      ar: "كمعظم المواقع، نستقبل بيانات تقنية قياسية: عنوان IP، نوع المتصفح والجهاز، اللغة، الصفحات المعروضة، الموقع المُحيل وتوقيت الزيارة. نستخدم Google Analytics 4 مع إخفاء عنوان IP لفهم الصفحات المفيدة. يحفظ ملف تعريف ارتباط (gpa-country) صفحة السوق التي وُجّهت إليها، وقد يُحفظ تفضيل المظهر في متصفحك. لا يحدد أي من ذلك هويتك بالاسم.",
      fr: "Comme la plupart des sites, nous recevons des données techniques standard : adresse IP, navigateur et appareil, langue, pages vues, site référent et horodatage. Nous utilisons Google Analytics 4 avec anonymisation de l'IP. Un cookie de pays (gpa-country) mémorise la page de marché vers laquelle vous avez été dirigé ; une préférence de thème peut être stockée dans votre navigateur.",
      tr: "Çoğu site gibi standart teknik veriler alırız: IP adresi, tarayıcı ve cihaz türü, dil, görüntülenen sayfalar, yönlendiren site ve zaman damgaları. IP anonimleştirmeli Google Analytics 4 kullanırız. Bir ülke çerezi (gpa-country) yönlendirildiğiniz piyasa sayfasını hatırlar; tema tercihi tarayıcınızda saklanabilir.",
      ur: "زیادہ تر ویب سائٹس کی طرح ہمیں معیاری تکنیکی ڈیٹا ملتا ہے: IP ایڈریس، براؤزر اور ڈیوائس کی قسم، زبان، دیکھے گئے صفحات، حوالہ دینے والی سائٹ اور وقت۔ ہم IP گمنامی کے ساتھ Google Analytics 4 استعمال کرتے ہیں۔ ایک ملکی کوکی (gpa-country) آپ کا مارکیٹ صفحہ یاد رکھتی ہے؛ تھیم کی ترجیح آپ کے براؤزر میں محفوظ ہو سکتی ہے۔",
      hi: "अधिकांश साइटों की तरह हमें मानक तकनीकी डेटा मिलता है: IP पता, ब्राउज़र और डिवाइस, भाषा, देखे गए पेज, रेफ़रिंग साइट और समय। हम IP गुमनामी के साथ Google Analytics 4 का उपयोग करते हैं। एक देश कुकी (gpa-country) आपका मार्केट पेज याद रखती है; थीम वरीयता आपके ब्राउज़र में सहेजी जा सकती है।",
    },
  },
  {
    h: { en: "Advertising (Google AdSense)", ar: "الإعلانات (Google AdSense)", fr: "Publicité (Google AdSense)", tr: "Reklamlar (Google AdSense)", ur: "اشتہارات (Google AdSense)", hi: "विज्ञापन (Google AdSense)" },
    body: {
      en: "We show ads served by Google AdSense to keep the site free. Third-party vendors, including Google, place and read cookies on your browser, and use web beacons and IP addresses to collect information, as a result of ad serving on this site. They use these identifiers to serve ads based on your prior visits to this and other websites, to limit how often you see an ad and to measure it. Google's own use of this data is described at www.google.com/policies/privacy/partners/. You can opt out of personalised advertising at www.google.com/settings/ads, and of many third-party vendors at www.aboutads.info/choices. For visitors in the EEA, the UK and Switzerland, advertising and analytics storage is denied by default and no advertising cookie is set unless you consent through the consent notice.",
      ar: "نعرض إعلانات تقدمها Google AdSense لإبقاء الموقع مجانياً. تضع أطراف ثالثة، من بينها Google، ملفات تعريف الارتباط وتقرأها في متصفحك، وتستخدم منارات الويب وعناوين IP لجمع معلومات نتيجة عرض الإعلانات على هذا الموقع. وتستخدم هذه المعرّفات لعرض إعلانات بناءً على زياراتك السابقة لهذا الموقع ومواقع أخرى، وللحد من تكرار الإعلان وقياسه. وطريقة استخدام Google لهذه البيانات موضحة في www.google.com/policies/privacy/partners/. يمكنك إيقاف الإعلانات المخصصة عبر www.google.com/settings/ads، وإيقاف كثير من الموردين الخارجيين عبر www.aboutads.info/choices. أما زوار المنطقة الاقتصادية الأوروبية والمملكة المتحدة وسويسرا فتُرفض لديهم افتراضياً مساحة تخزين الإعلانات والتحليلات، ولا يُوضع أي ملف إعلاني ما لم توافق عبر إشعار الموافقة.",
      fr: "Nous affichons des publicités diffusées par Google AdSense pour garder le site gratuit. Des fournisseurs tiers, dont Google, déposent et lisent des cookies dans votre navigateur et utilisent des balises web et des adresses IP pour collecter des informations du fait de la diffusion d'annonces sur ce site. Ces identifiants servent à diffuser des annonces basées sur vos visites précédentes, à limiter leur fréquence et à les mesurer. L'usage que Google fait de ces données est décrit sur www.google.com/policies/privacy/partners/. Vous pouvez refuser la publicité personnalisée sur www.google.com/settings/ads et sur www.aboutads.info/choices. Pour les visiteurs de l'EEE, du Royaume-Uni et de la Suisse, le stockage publicitaire est refusé par défaut et aucun cookie publicitaire n'est déposé sans votre consentement.",
      tr: "Siteyi ücretsiz tutmak için Google AdSense reklamları gösteriyoruz. Google dahil üçüncü taraf sağlayıcılar, bu sitede reklam sunulması sonucunda tarayıcınıza çerez yerleştirir ve okur, ayrıca bilgi toplamak için web işaretçileri ve IP adresleri kullanır. Bu tanımlayıcılar, önceki ziyaretlerinize göre reklam sunmak, sıklığını sınırlamak ve ölçmek için kullanılır. Google'ın bu verileri nasıl kullandığı www.google.com/policies/privacy/partners/ adresinde açıklanmıştır. Kişiselleştirilmiş reklamları www.google.com/settings/ads ve www.aboutads.info/choices adreslerinden kapatabilirsiniz. AEA, Birleşik Krallık ve İsviçre'deki ziyaretçiler için reklam depolaması varsayılan olarak reddedilir ve siz onay vermedikçe reklam çerezi yerleştirilmez.",
      ur: "سائٹ کو مفت رکھنے کے لیے ہم Google AdSense کے اشتہارات دکھاتے ہیں۔ Google سمیت فریقِ ثالث فراہم کنندگان اس سائٹ پر اشتہار دکھانے کے نتیجے میں آپ کے براؤزر میں کوکیز رکھتے اور پڑھتے ہیں، اور معلومات جمع کرنے کے لیے ویب بیکنز اور IP پتے استعمال کرتے ہیں۔ یہ شناخت کنندگان آپ کے پچھلے دوروں کی بنیاد پر اشتہار دکھانے، ان کی تعداد محدود کرنے اور پیمائش کے لیے استعمال ہوتے ہیں۔ Google کا اس ڈیٹا کا استعمال www.google.com/policies/privacy/partners/ پر بیان ہے۔ آپ ذاتی نوعیت کے اشتہارات www.google.com/settings/ads اور www.aboutads.info/choices پر بند کر سکتے ہیں۔ EEA، برطانیہ اور سوئٹزرلینڈ کے زائرین کے لیے اشتہاری اسٹوریج بطورِ ڈیفالٹ مسترد ہے اور آپ کی رضامندی کے بغیر کوئی اشتہاری کوکی نہیں رکھی جاتی۔",
      hi: "साइट को मुफ़्त रखने के लिए हम Google AdSense के विज्ञापन दिखाते हैं। Google सहित तृतीय-पक्ष विक्रेता इस साइट पर विज्ञापन दिखाए जाने के परिणामस्वरूप आपके ब्राउज़र में कुकीज़ रखते और पढ़ते हैं, और जानकारी एकत्र करने के लिए वेब बीकन तथा IP पतों का उपयोग करते हैं। इन पहचानकर्ताओं का उपयोग आपकी पिछली विज़िट के आधार पर विज्ञापन दिखाने, उनकी आवृत्ति सीमित करने और मापने के लिए होता है। इस डेटा का Google द्वारा उपयोग www.google.com/policies/privacy/partners/ पर वर्णित है। आप www.google.com/settings/ads और www.aboutads.info/choices पर वैयक्तिकृत विज्ञापन बंद कर सकते हैं। EEA, UK और स्विट्ज़रलैंड के विज़िटर के लिए विज्ञापन स्टोरेज डिफ़ॉल्ट रूप से अस्वीकृत है और आपकी सहमति के बिना कोई विज्ञापन कुकी नहीं रखी जाती।",
    },
  },
  {
    h: { en: "Your choices and rights", ar: "خياراتك وحقوقك", fr: "Vos choix et vos droits", tr: "Seçenekleriniz ve haklarınız", ur: "آپ کے اختیارات اور حقوق", hi: "आपके विकल्प और अधिकार" },
    body: {
      en: "You can block or delete cookies in your browser at any time; the site keeps working. Under GDPR, the Saudi PDPL and similar laws you may ask what data we hold about you and request its deletion. Email us and we will answer within 30 days. Analytics data is retained for 14 months; server logs for 30 days.",
      ar: "يمكنك حظر ملفات تعريف الارتباط أو حذفها من متصفحك في أي وقت، وسيبقى الموقع يعمل. بموجب اللائحة الأوروبية GDPR ونظام حماية البيانات الشخصية السعودي PDPL والقوانين المماثلة، يحق لك معرفة البيانات التي نحتفظ بها عنك وطلب حذفها. راسلنا وسنرد خلال 30 يوماً. تُحفظ بيانات التحليلات 14 شهراً وسجلات الخادم 30 يوماً.",
      fr: "Vous pouvez bloquer ou supprimer les cookies dans votre navigateur à tout moment. En vertu du RGPD et de lois similaires, vous pouvez demander quelles données nous détenons à votre sujet et leur suppression. Écrivez-nous ; réponse sous 30 jours. Données d'analyse conservées 14 mois ; journaux serveur 30 jours.",
      tr: "Çerezleri tarayıcınızdan istediğiniz zaman engelleyebilir veya silebilirsiniz. GDPR, Suudi PDPL ve benzeri yasalar kapsamında hakkınızda tuttuğumuz verileri sorabilir ve silinmesini isteyebilirsiniz. Bize e-posta gönderin; 30 gün içinde yanıtlarız. Analitik verileri 14 ay, sunucu günlükleri 30 gün saklanır.",
      ur: "آپ کسی بھی وقت اپنے براؤزر میں کوکیز بلاک یا حذف کر سکتے ہیں۔ GDPR، سعودی PDPL اور اسی طرح کے قوانین کے تحت آپ پوچھ سکتے ہیں کہ ہمارے پاس آپ کا کیا ڈیٹا ہے اور اسے حذف کرنے کی درخواست کر سکتے ہیں۔ ہمیں ای میل کریں؛ 30 دن میں جواب دیں گے۔ تجزیاتی ڈیٹا 14 ماہ، سرور لاگز 30 دن رکھے جاتے ہیں۔",
      hi: "आप कभी भी अपने ब्राउज़र में कुकीज़ ब्लॉक या हटा सकते हैं। GDPR, सऊदी PDPL और समान क़ानूनों के तहत आप पूछ सकते हैं कि हमारे पास आपका क्या डेटा है और उसे हटाने का अनुरोध कर सकते हैं। हमें ईमेल करें; 30 दिनों में उत्तर देंगे। एनालिटिक्स डेटा 14 महीने, सर्वर लॉग 30 दिन रखे जाते हैं।",
    },
  },
  {
    h: { en: "Contact", ar: "التواصل", fr: "Contact", tr: "İletişim", ur: "رابطہ", hi: "संपर्क" },
    body: {
      en: `Questions about this policy or a data request: ${SUPPORT_EMAIL}. This page is reviewed whenever our tools change; the date above is the last revision.`,
      ar: `للاستفسار عن هذه السياسة أو لطلب يخص بياناتك: ${SUPPORT_EMAIL}. تُراجع هذه الصفحة كلما تغيرت أدواتنا، والتاريخ أعلاه هو آخر تحديث.`,
      fr: `Questions sur cette politique ou demande concernant vos données : ${SUPPORT_EMAIL}. Cette page est révisée à chaque changement d'outil ; la date ci-dessus est celle de la dernière révision.`,
      tr: `Bu politika veya veri talepleri için: ${SUPPORT_EMAIL}. Araçlarımız değiştikçe bu sayfa gözden geçirilir; yukarıdaki tarih son revizyondur.`,
      ur: `اس پالیسی کے بارے میں سوال یا ڈیٹا کی درخواست: ${SUPPORT_EMAIL}۔ ہمارے ٹولز بدلنے پر یہ صفحہ نظرِ ثانی کیا جاتا ہے؛ اوپر دی گئی تاریخ آخری ترمیم ہے۔`,
      hi: `इस नीति के बारे में प्रश्न या डेटा अनुरोध: ${SUPPORT_EMAIL}। हमारे टूल बदलने पर यह पेज समीक्षा किया जाता है; ऊपर की तारीख अंतिम संशोधन है।`,
    },
  },
];

export const privacyText = (locale: string) => ({
  title: pick(locale, TITLE),
  description: pick(locale, DESCRIPTION),
  sections: SECTIONS.map((s) => ({ h: pick(locale, s.h), body: pick(locale, s.body) })),
});
