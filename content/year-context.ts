import type { LocaleText } from "@/lib/i18n-text";

/**
 * What moved gold in each year — hand-written, shown on
 * /historical-gold-prices/{year} under the year's numbers.
 *
 * Why: the year pages are the site's best earners, yet two years shared every
 * line of prose except the numbers (measured 2026-10-19: 2023 vs 2024, 0 unique
 * lines). AdSense rejects "auto-generated pages" and asks for "complete
 * sentences and paragraphs"; this is the part a template cannot write.
 *
 * Rules kept: only well-documented events and price milestones; no yearly
 * percentages (the page computes those from its own data, so text and table can
 * never disagree); no forecasts. tr/hi translated from the English (numbers
 * checked to match). 2025 onward is left to the data until the year can be
 * written up from settled sources.
 */
export const YEAR_CONTEXT: Record<number, { en: string; ar: string; tr: string; hi: string }> = {
  2000: {
    en: "Gold spent most of the year below $300 an ounce. Investors were focused on the end of the dot-com boom in stocks, and European central banks were still selling reserves under the 1999 Washington Agreement on Gold, which capped those sales but did not stop them.",
    ar: "بقي الذهب معظم العام دون 300 دولار للأونصة. كان اهتمام المستثمرين منصبًّا على نهاية فقاعة شركات الإنترنت في الأسهم، وكانت البنوك المركزية الأوروبية لا تزال تبيع من احتياطياتها بموجب اتفاقية واشنطن للذهب لعام 1999، التي حدّت من تلك المبيعات من دون أن توقفها.",
    tr: "Altın yılın büyük bölümünü ons başına $300 seviyesinin altında geçirdi. Yatırımcıların odağında hisse senetlerindeki dot-com yükselişinin sona ermesi vardı; Avrupa merkez bankaları ise 1999 tarihli Washington Altın Anlaşması kapsamında rezerv satışlarını sürdürüyordu. Anlaşma bu satışlara sınır getirmiş, ancak onları durdurmamıştı.",
    hi: "साल के ज़्यादातर समय सोना $300 प्रति औंस से नीचे रहा। निवेशकों का ध्यान शेयर बाज़ार में डॉट-कॉम बूम के खत्म होने पर था, और यूरोपीय केंद्रीय बैंक 1999 के वॉशिंगटन गोल्ड समझौते के तहत अब भी अपना भंडार बेच रहे थे। इस समझौते ने इस बिक्री पर सीमा तो लगाई, लेकिन इसे रोका नहीं।",
  },
  2001: {
    en: "Gold traded near its lowest level in two decades early in the year. The US slipped into recession, the Federal Reserve cut interest rates repeatedly, and the September 11 attacks brought a brief jump in demand for safe havens. The long decline that began in 1980 was ending.",
    ar: "تداول الذهب قرب أدنى مستوياته في عقدين مطلع العام. دخل الاقتصاد الأمريكي في ركود، وخفّض الاحتياطي الفيدرالي الفائدة مرات متتالية، وأحدثت هجمات 11 سبتمبر قفزة قصيرة في الطلب على الملاذات الآمنة. كان الهبوط الطويل الذي بدأ عام 1980 يقترب من نهايته.",
    tr: "Altın yılın başında son yirmi yılın en düşük seviyesine yakın işlem gördü. ABD resesyona girdi, ABD Merkez Bankası (Fed) faiz oranlarını art arda indirdi ve 11 Eylül saldırıları güvenli limanlara yönelik talepte kısa süreli bir sıçrama yarattı. 1980'de başlayan uzun düşüş sona eriyordu.",
    hi: "साल की शुरुआत में सोना दो दशक के सबसे निचले स्तर के करीब कारोबार कर रहा था। अमेरिका मंदी में चला गया, अमेरिकी फ़ेडरल रिज़र्व ने बार-बार ब्याज दरें घटाईं, और 11 सितंबर के हमलों से सुरक्षित निवेश की मांग में थोड़े समय के लिए उछाल आया। 1980 में शुरू हुई लंबी गिरावट खत्म हो रही थी।",
  },
  2002: {
    en: "The bull market began. Falling US interest rates, a weakening dollar and heavy losses in technology stocks after the dot-com crash sent investors back to gold, which rose through the year to its highest level since the late 1990s.",
    ar: "بدأت موجة الصعود الطويلة. فقد أعاد انخفاض الفائدة الأمريكية وضعف الدولار والخسائر الكبيرة في أسهم التكنولوجيا بعد انهيار فقاعة الإنترنت المستثمرين إلى الذهب، فارتفع طوال العام إلى أعلى مستوياته منذ أواخر التسعينيات.",
    tr: "Boğa piyasası başladı. ABD'de düşen faiz oranları, zayıflayan dolar ve dot-com çöküşünün ardından teknoloji hisselerinde yaşanan ağır kayıplar yatırımcıları yeniden altına yöneltti; altın yıl boyunca yükselerek 1990'ların sonundan bu yana en yüksek seviyesine çıktı.",
    hi: "तेज़ी का दौर शुरू हुआ। अमेरिका में घटती ब्याज दरों, कमज़ोर होते डॉलर और डॉट-कॉम क्रैश के बाद टेक्नोलॉजी शेयरों में भारी नुकसान ने निवेशकों को फिर से सोने की ओर मोड़ दिया। सोना पूरे साल चढ़ता रहा और 1990 के दशक के आखिरी सालों के बाद के सबसे ऊंचे स्तर पर पहुंच गया।",
  },
  2003: {
    en: "The run-up to the Iraq war in March and a falling dollar kept gold climbing. Prices passed $400 an ounce in December, and US interest rates were cut to 1%, their lowest in decades.",
    ar: "أبقى التمهيد لحرب العراق في مارس وتراجع الدولار الذهب في صعود. وتجاوز السعر 400 دولار للأونصة في ديسمبر، فيما خُفّضت الفائدة الأمريكية إلى 1%، وهو أدنى مستوى لها منذ عقود.",
    tr: "Mart'taki Irak savaşına giden süreç ve düşen dolar, altının yükselişini sürdürmesini sağladı. Fiyatlar Aralık'ta ons başına $400 seviyesini aştı; ABD'de faiz oranları ise son on yılların en düşük seviyesi olan 1% düzeyine indirildi.",
    hi: "मार्च में हुए इराक युद्ध से पहले के माहौल और गिरते डॉलर ने सोने की तेज़ी बनाए रखी। दिसंबर में भाव $400 प्रति औंस के पार चले गए, और अमेरिका में ब्याज दरें घटाकर 1% कर दी गईं, जो दशकों का सबसे निचला स्तर था।",
  },
  2004: {
    en: "A quieter year of gains. The Federal Reserve began raising rates in June, but the dollar kept weakening. In November the first US gold exchange-traded fund (GLD) launched, letting ordinary investors hold bullion through a stock account for the first time.",
    ar: "عام مكاسب أهدأ. بدأ الاحتياطي الفيدرالي رفع الفائدة في يونيو، لكن الدولار واصل الضعف. وفي نوفمبر أُطلق أول صندوق متداول للذهب في الولايات المتحدة (GLD)، ما أتاح للمستثمر العادي امتلاك السبائك عبر حساب أسهم لأول مرة.",
    tr: "Daha sakin geçen bir kazanç yılı. ABD Merkez Bankası (Fed) Haziran'da faiz artırmaya başladı, ancak dolar zayıflamayı sürdürdü. Kasım'da ABD'nin ilk altın borsa yatırım fonu (GLD) piyasaya sürüldü ve sıradan yatırımcılar ilk kez bir borsa hesabı üzerinden külçe altın tutabilir hale geldi.",
    hi: "बढ़त का एक अपेक्षाकृत शांत साल। अमेरिकी फ़ेडरल रिज़र्व ने जून में ब्याज दरें बढ़ाना शुरू किया, लेकिन डॉलर कमज़ोर होता रहा। नवंबर में अमेरिका का पहला गोल्ड एक्सचेंज-ट्रेडेड फंड (GLD) लॉन्च हुआ, जिससे आम निवेशक पहली बार शेयर खाते के ज़रिए बुलियन रख सके।",
  },
  2005: {
    en: "Gold rose even as the dollar strengthened, a sign that demand was coming from more than currency moves. In December it crossed $500 an ounce for the first time since 1987, helped by rising oil prices and growing buying from India and China.",
    ar: "ارتفع الذهب رغم قوة الدولار، وهي علامة على أن الطلب لم يعد مرتبطًا بحركة العملة وحدها. وفي ديسمبر تجاوز 500 دولار للأونصة لأول مرة منذ 1987، مدعومًا بارتفاع أسعار النفط وتزايد الشراء من الهند والصين.",
    tr: "Altın, dolar güçlenirken bile yükseldi; bu, talebin yalnızca kur hareketlerinden kaynaklanmadığının bir işaretiydi. Aralık'ta yükselen petrol fiyatları ile Hindistan ve Çin'den gelen artan alımların desteğiyle 1987'den bu yana ilk kez ons başına $500 seviyesini aştı.",
    hi: "डॉलर के मज़बूत होने के बावजूद सोना चढ़ा, जो इस बात का संकेत था कि मांग सिर्फ़ मुद्रा की चाल से नहीं आ रही थी। दिसंबर में यह 1987 के बाद पहली बार $500 प्रति औंस के पार गया, जिसमें तेल की बढ़ती कीमतों और भारत व चीन से बढ़ती खरीदारी ने मदद की।",
  },
  2006: {
    en: "Gold jumped to a 26-year high above $700 an ounce in May, then fell back sharply as commodity markets corrected. It finished the year well above where it started, with money flowing into the new gold exchange-traded funds.",
    ar: "قفز الذهب في مايو إلى أعلى مستوى منذ 26 عامًا فوق 700 دولار للأونصة، ثم تراجع بقوة مع تصحيح أسواق السلع. وأنهى العام أعلى بكثير مما بدأه، مع تدفق الأموال إلى صناديق الذهب المتداولة الجديدة.",
    tr: "Altın Mayıs'ta ons başına $700 seviyesinin üzerine çıkarak 26 yılın en yüksek seviyesine sıçradı, ardından emtia piyasalarındaki düzeltmeyle sert biçimde geriledi. Yeni altın borsa yatırım fonlarına para akarken yılı, başladığı seviyenin oldukça üzerinde tamamladı.",
    hi: "मई में सोना उछलकर $700 प्रति औंस से ऊपर 26 साल के उच्चतम स्तर पर पहुंचा, फिर कमोडिटी बाज़ारों में करेक्शन के साथ इसमें तेज़ गिरावट आई। सोने ने साल का अंत शुरुआती स्तर से काफ़ी ऊपर किया, और नए गोल्ड एक्सचेंज-ट्रेडेड फंड में पैसा आता रहा।",
  },
  2007: {
    en: "The US subprime mortgage crisis broke out in August, and the Federal Reserve started cutting rates in September. Gold climbed above $800 an ounce in November for the first time since 1980 as investors looked for protection from the credit crunch.",
    ar: "اندلعت أزمة الرهن العقاري الأمريكية في أغسطس، وبدأ الاحتياطي الفيدرالي خفض الفائدة في سبتمبر. وصعد الذهب فوق 800 دولار للأونصة في نوفمبر لأول مرة منذ 1980، بحثًا من المستثمرين عن حماية من أزمة الائتمان.",
    tr: "ABD'deki yüksek riskli konut kredisi (subprime) krizi Ağustos'ta patlak verdi ve ABD Merkez Bankası (Fed) Eylül'de faiz indirmeye başladı. Yatırımcıların kredi sıkışmasına karşı koruma aramasıyla altın Kasım'da 1980'den bu yana ilk kez ons başına $800 seviyesinin üzerine çıktı.",
    hi: "अगस्त में अमेरिका का सबप्राइम मॉर्गेज संकट भड़का, और अमेरिकी फ़ेडरल रिज़र्व ने सितंबर में ब्याज दरें घटाना शुरू किया। नवंबर में सोना 1980 के बाद पहली बार $800 प्रति औंस के ऊपर गया, क्योंकि निवेशक क्रेडिट संकट से बचाव का रास्ता खोज रहे थे।",
  },
  2008: {
    en: "In March, as Bear Stearns was rescued, gold passed $1,000 an ounce for the first time. After Lehman Brothers collapsed in September, investors sold almost everything to raise dollars and gold fell back toward $700, before recovering by year-end as central banks cut rates to near zero.",
    ar: "في مارس، ومع إنقاذ بنك بير ستيرنز، تجاوز الذهب 1,000 دولار للأونصة لأول مرة. وبعد انهيار ليمان براذرز في سبتمبر باع المستثمرون كل شيء تقريبًا للحصول على الدولار، فتراجع الذهب نحو 700 دولار، قبل أن يتعافى بنهاية العام مع خفض البنوك المركزية الفائدة إلى قرب الصفر.",
    tr: "Mart'ta Bear Stearns kurtarılırken altın ilk kez ons başına $1,000 seviyesini aştı. Eylül'de Lehman Brothers'ın çökmesinin ardından yatırımcılar dolar bulmak için neredeyse her şeyi sattı ve altın $700 seviyesine doğru geriledi; ancak merkez bankalarının faiz oranlarını sıfıra yakın seviyelere indirmesiyle yıl sonuna kadar toparlandı.",
    hi: "मार्च में, जब बेयर स्टर्न्स को बचाया गया, सोना पहली बार $1,000 प्रति औंस के पार गया। सितंबर में लीमैन ब्रदर्स के डूबने के बाद निवेशकों ने डॉलर जुटाने के लिए लगभग सब कुछ बेच डाला और सोना फिसलकर $700 की ओर आ गया, लेकिन साल के अंत तक यह फिर संभल गया, जब केंद्रीय बैंकों ने ब्याज दरें घटाकर लगभग शून्य कर दीं।",
  },
  2009: {
    en: "Money printing by the Federal Reserve and other central banks weakened confidence in paper currencies. In November the Reserve Bank of India bought 200 tonnes of gold from the International Monetary Fund, and gold set new records above $1,200 in December.",
    ar: "أضعف التيسير الكمي من الاحتياطي الفيدرالي والبنوك المركزية الأخرى الثقة في العملات الورقية. وفي نوفمبر اشترى بنك الاحتياطي الهندي 200 طن من الذهب من صندوق النقد الدولي، وسجّل الذهب أرقامًا قياسية جديدة فوق 1,200 دولار في ديسمبر.",
    tr: "ABD Merkez Bankası (Fed) ve diğer merkez bankalarının para basması, kâğıt paralara duyulan güveni zayıflattı. Kasım'da Hindistan Merkez Bankası, Uluslararası Para Fonu'ndan 200 ton altın satın aldı; altın Aralık'ta $1,200 seviyesinin üzerinde yeni rekorlar kırdı.",
    hi: "अमेरिकी फ़ेडरल रिज़र्व और दूसरे केंद्रीय बैंकों के नोट छापने से कागज़ी मुद्राओं पर भरोसा कमज़ोर हुआ। नवंबर में भारतीय रिज़र्व बैंक ने अंतरराष्ट्रीय मुद्रा कोष से 200 टन सोना खरीदा, और दिसंबर में सोने ने $1,200 के ऊपर नए रिकॉर्ड बनाए।",
  },
  2010: {
    en: "The European debt crisis, starting with Greece's bailout in May, and a second round of US money printing in November drove gold to repeated records near $1,400. Central banks as a group became net buyers of gold for the first time in about two decades.",
    ar: "دفعت أزمة الديون الأوروبية، بدءًا من إنقاذ اليونان في مايو، وجولة ثانية من التيسير الكمي الأمريكي في نوفمبر الذهب إلى أرقام قياسية متكررة قرب 1,400 دولار. وأصبحت البنوك المركزية مجتمعةً مشترية صافية للذهب لأول مرة منذ نحو عقدين.",
    tr: "Mayıs'ta Yunanistan'ın kurtarılmasıyla başlayan Avrupa borç krizi ve ABD'nin Kasım'daki ikinci para basma turu, altını $1,400 civarında art arda rekorlara taşıdı. Merkez bankaları toplu olarak yaklaşık yirmi yıl sonra ilk kez net altın alıcısı oldu.",
    hi: "मई में ग्रीस के बेलआउट से शुरू हुए यूरोपीय कर्ज़ संकट और नवंबर में अमेरिका में नोट छापने के दूसरे दौर ने सोने को बार-बार $1,400 के करीब रिकॉर्ड स्तर पर पहुंचाया। कुल मिलाकर केंद्रीय बैंक करीब दो दशक में पहली बार सोने के शुद्ध खरीदार बने।",
  },
  2011: {
    en: "The peak of the decade-long rally. After the United States lost its AAA credit rating in August and the euro crisis deepened, gold rose above $1,900 an ounce in early September, a record that stood for nine years. It then fell back in the final months.",
    ar: "ذروة موجة الصعود التي استمرت عقدًا. فبعد خسارة الولايات المتحدة تصنيفها الائتماني الممتاز في أغسطس وتعمّق أزمة اليورو، تجاوز الذهب 1,900 دولار للأونصة مطلع سبتمبر، وهو رقم قياسي صمد تسع سنوات، ثم تراجع في الأشهر الأخيرة.",
    tr: "On yıl süren yükselişin zirvesi. ABD'nin Ağustos'ta AAA kredi notunu kaybetmesi ve euro krizinin derinleşmesinin ardından altın Eylül başında ons başına $1,900 seviyesinin üzerine çıktı; bu rekor dokuz yıl boyunca kırılamadı. Altın ardından yılın son aylarında geri çekildi.",
    hi: "दशक भर चली तेज़ी का शिखर। अगस्त में अमेरिका से उसकी AAA क्रेडिट रेटिंग छिनने और यूरो संकट गहराने के बाद सितंबर की शुरुआत में सोना $1,900 प्रति औंस के पार चला गया, जो नौ साल तक रिकॉर्ड बना रहा। इसके बाद साल के आखिरी महीनों में यह नीचे आया।",
  },
  2012: {
    en: "Gold traded mostly between $1,550 and $1,800. The Federal Reserve launched a third round of bond buying in September, and the year ended higher for the twelfth year in a row — the last gain of the long bull market.",
    ar: "تداول الذهب في معظم العام بين 1,550 و1,800 دولار. وأطلق الاحتياطي الفيدرالي جولة ثالثة من شراء السندات في سبتمبر، وأنهى الذهب العام مرتفعًا للسنة الثانية عشرة على التوالي، وكانت تلك آخر مكاسب موجة الصعود الطويلة.",
    tr: "Altın çoğunlukla $1,550 ile $1,800 arasında işlem gördü. ABD Merkez Bankası (Fed) Eylül'de üçüncü tahvil alımı turunu başlattı ve altın yılı üst üste on ikinci kez yükselişle kapattı — bu, uzun boğa piyasasının son kazancı oldu.",
    hi: "सोना ज़्यादातर $1,550 और $1,800 के बीच कारोबार करता रहा। अमेरिकी फ़ेडरल रिज़र्व ने सितंबर में बॉन्ड खरीद का तीसरा दौर शुरू किया, और सोने ने लगातार बारहवें साल बढ़त के साथ साल खत्म किया — यह तेज़ी के लंबे दौर की आखिरी बढ़त थी।",
  },
  2013: {
    en: "The twelve-year winning streak ended with gold's worst year since 1981. A two-day crash in April and the Federal Reserve's talk of slowing its bond buying pushed investors out of gold funds, even as jewellery and coin buyers in China and India rushed in at the lower prices.",
    ar: "انتهت سلسلة المكاسب الممتدة 12 عامًا بأسوأ عام للذهب منذ 1981. فقد دفع انهيار استمر يومين في أبريل وحديث الاحتياطي الفيدرالي عن إبطاء شراء السندات المستثمرين إلى الخروج من صناديق الذهب، حتى مع اندفاع مشتري المشغولات والعملات في الصين والهند للشراء بالأسعار الأدنى.",
    tr: "On iki yıllık kazanç serisi, altının 1981'den bu yana en kötü yılıyla sona erdi. Nisan'daki iki günlük çöküş ve ABD Merkez Bankası'nın (Fed) tahvil alımlarını yavaşlatmayı gündeme getirmesi yatırımcıları altın fonlarından çıkmaya itti; oysa Çin ve Hindistan'daki mücevher ve sikke alıcıları daha düşük fiyatlardan alım yapmak için akın etti.",
    hi: "बारह साल से चला आ रहा बढ़त का सिलसिला 1981 के बाद सोने के सबसे खराब साल के साथ टूट गया। अप्रैल में दो दिन की भारी गिरावट और अमेरिकी फ़ेडरल रिज़र्व की ओर से बॉन्ड खरीद धीमी करने की बातों ने निवेशकों को गोल्ड फंड से बाहर धकेल दिया, जबकि चीन और भारत में गहनों और सिक्कों के खरीदार कम दामों पर खरीदारी के लिए टूट पड़े।",
  },
  2014: {
    en: "A flat to lower year around $1,200. The Federal Reserve ended its bond buying in October, the dollar strengthened and oil prices collapsed, which removed much of the inflation worry that had supported gold. Russia's central bank kept adding to its reserves.",
    ar: "عام مستقر إلى منخفض حول 1,200 دولار. أنهى الاحتياطي الفيدرالي شراء السندات في أكتوبر، وارتفع الدولار وانهارت أسعار النفط، ما أزال كثيرًا من مخاوف التضخم التي كانت تدعم الذهب. وواصل البنك المركزي الروسي زيادة احتياطياته.",
    tr: "$1,200 civarında yatay ya da düşüşle geçen bir yıl. ABD Merkez Bankası (Fed) Ekim'de tahvil alımlarını sonlandırdı, dolar güçlendi ve petrol fiyatları çöktü; bu da altını destekleyen enflasyon kaygılarının büyük bölümünü ortadan kaldırdı. Rusya Merkez Bankası rezervlerini artırmayı sürdürdü.",
    hi: "$1,200 के आसपास सपाट या गिरावट वाला साल। अमेरिकी फ़ेडरल रिज़र्व ने अक्टूबर में बॉन्ड खरीद बंद कर दी, डॉलर मज़बूत हुआ और तेल की कीमतें धड़ाम हो गईं, जिससे महंगाई को लेकर वह चिंता काफ़ी हद तक दूर हो गई जो सोने को सहारा दे रही थी। रूस का केंद्रीय बैंक अपना भंडार बढ़ाता रहा।",
  },
  2015: {
    en: "Gold fell to its lowest level in about six years in December, near $1,050, as the Federal Reserve raised interest rates for the first time since 2006. In July China's central bank disclosed its first increase in gold reserves in six years.",
    ar: "هبط الذهب في ديسمبر إلى أدنى مستوياته في نحو ست سنوات قرب 1,050 دولارًا، مع رفع الاحتياطي الفيدرالي الفائدة لأول مرة منذ 2006. وفي يوليو كشف البنك المركزي الصيني عن أول زيادة في احتياطياته من الذهب منذ ست سنوات.",
    tr: "ABD Merkez Bankası'nın (Fed) 2006'dan bu yana ilk kez faiz oranlarını artırmasıyla altın Aralık'ta $1,050 civarında, yaklaşık altı yılın en düşük seviyesine geriledi. Temmuz'da Çin Merkez Bankası, altı yıl aradan sonra altın rezervlerindeki ilk artışı açıkladı.",
    hi: "दिसंबर में सोना $1,050 के आसपास, करीब छह साल के सबसे निचले स्तर पर आ गया, जब अमेरिकी फ़ेडरल रिज़र्व ने 2006 के बाद पहली बार ब्याज दरें बढ़ाईं। जुलाई में चीन के केंद्रीय बैंक ने छह साल में पहली बार अपने सोने के भंडार में बढ़ोतरी का खुलासा किया।",
  },
  2016: {
    en: "Gold rallied in the first half as interest rates turned negative in Europe and Japan and the United Kingdom voted to leave the European Union in June. The gains faded after the US election in November and a Federal Reserve rate rise in December.",
    ar: "ارتفع الذهب في النصف الأول مع تحوّل الفائدة إلى السالب في أوروبا واليابان وتصويت المملكة المتحدة في يونيو على الخروج من الاتحاد الأوروبي. ثم تلاشت المكاسب بعد الانتخابات الأمريكية في نوفمبر ورفع الفائدة في ديسمبر.",
    tr: "Avrupa ve Japonya'da faiz oranlarının negatife dönmesi ve Birleşik Krallık'ın Haziran'da Avrupa Birliği'nden ayrılma yönünde oy vermesiyle altın yılın ilk yarısında yükseliş kaydetti. Kazançlar, Kasım'daki ABD seçiminin ve ABD Merkez Bankası'nın (Fed) Aralık'taki faiz artırımının ardından eridi.",
    hi: "साल की पहली छमाही में सोने में तेज़ी आई, क्योंकि यूरोप और जापान में ब्याज दरें नेगेटिव हो गईं और जून में ब्रिटेन ने यूरोपीय संघ छोड़ने के पक्ष में वोट दिया। नवंबर में अमेरिकी चुनाव और दिसंबर में अमेरिकी फ़ेडरल रिज़र्व की ओर से ब्याज दरें बढ़ाए जाने के बाद यह बढ़त फीकी पड़ गई।",
  },
  2017: {
    en: "A steady year of gains despite three US rate rises. A weaker dollar and tension over North Korea's missile tests supported prices, and gold had its best year since 2010.",
    ar: "عام مكاسب ثابتة رغم ثلاث زيادات في الفائدة الأمريكية. دعم ضعفُ الدولار والتوتر بشأن تجارب كوريا الشمالية الصاروخية الأسعار، وحقق الذهب أفضل أداء سنوي له منذ 2010.",
    tr: "ABD'deki üç faiz artırımına rağmen istikrarlı kazançlarla geçen bir yıl. Zayıf dolar ve Kuzey Kore'nin füze denemeleri nedeniyle yaşanan gerilim fiyatları destekledi; altın 2010'dan bu yana en iyi yılını geçirdi.",
    hi: "अमेरिका में तीन बार ब्याज दरें बढ़ने के बावजूद स्थिर बढ़त का साल। कमज़ोर डॉलर और उत्तर कोरिया के मिसाइल परीक्षणों को लेकर तनाव ने भावों को सहारा दिया, और सोने के लिए यह 2010 के बाद का सबसे अच्छा साल रहा।",
  },
  2018: {
    en: "Four US rate rises and a strong dollar pushed gold down to around $1,170 in August. It recovered late in the year as stock markets fell. Central banks bought more gold than in any year since 1971, led by Russia, Turkey and Kazakhstan.",
    ar: "دفعت أربع زيادات في الفائدة الأمريكية وقوة الدولار الذهب إلى نحو 1,170 دولارًا في أغسطس، ثم تعافى أواخر العام مع هبوط أسواق الأسهم. واشترت البنوك المركزية ذهبًا أكثر من أي عام منذ 1971، بقيادة روسيا وتركيا وكازاخستان.",
    tr: "ABD'deki dört faiz artırımı ve güçlü dolar, altını Ağustos'ta $1,170 civarına kadar düşürdü. Altın, yılın sonlarına doğru borsaların gerilemesiyle toparlandı. Merkez bankaları 1971'den bu yana herhangi bir yılda olduğundan daha fazla altın satın aldı; alımlara Rusya, Türkiye ve Kazakistan öncülük etti.",
    hi: "अमेरिका में चार बार ब्याज दरें बढ़ने और मज़बूत डॉलर ने अगस्त में सोने को करीब $1,170 तक नीचे धकेल दिया। साल के आखिर में शेयर बाज़ारों में गिरावट के साथ यह फिर संभला। केंद्रीय बैंकों ने 1971 के बाद किसी भी साल से ज़्यादा सोना खरीदा, जिसमें रूस, तुर्की और कज़ाकिस्तान सबसे आगे रहे।",
  },
  2019: {
    en: "The US–China trade war and growing expectations of interest-rate cuts brought gold back above $1,400 in June for the first time since 2013, and the Federal Reserve went on to cut rates three times in the second half of the year. Central banks again bought on a large scale, and a growing share of the world's government bonds paid negative yields.",
    ar: "أعادت الحرب التجارية بين الولايات المتحدة والصين وتزايد التوقعات بخفض الفائدة الذهبَ فوق 1,400 دولار في يونيو لأول مرة منذ 2013، ثم خفّض الاحتياطي الفيدرالي الفائدة ثلاث مرات في النصف الثاني من العام. وعادت البنوك المركزية إلى الشراء بكميات كبيرة، فيما اتسعت حصة السندات الحكومية العالمية ذات العائد السالب.",
    tr: "ABD-Çin ticaret savaşı ve artan faiz indirimi beklentileri, altını Haziran'da 2013'ten bu yana ilk kez yeniden $1,400 seviyesinin üzerine taşıdı; ABD Merkez Bankası (Fed) ardından yılın ikinci yarısında faizi üç kez indirdi. Merkez bankaları yine büyük çapta alım yaptı; dünyadaki devlet tahvillerinin giderek artan bir bölümü negatif getiri sağlıyordu.",
    hi: "अमेरिका-चीन ट्रेड वॉर और ब्याज दरों में कटौती की बढ़ती उम्मीदों ने जून में सोने को 2013 के बाद पहली बार फिर से $1,400 के ऊपर पहुंचा दिया, और इसके बाद अमेरिकी फ़ेडरल रिज़र्व ने साल की दूसरी छमाही में ब्याज दरें तीन बार घटाईं। केंद्रीय बैंकों ने एक बार फिर बड़े पैमाने पर खरीदारी की, और दुनिया के सरकारी बॉन्ड का बढ़ता हिस्सा नेगेटिव यील्ड दे रहा था।",
  },
  2020: {
    en: "The COVID-19 pandemic and vast government stimulus sent gold to a record above $2,000 an ounce in August, breaking the 2011 high. Money poured into gold funds at a record pace as interest rates fell below inflation.",
    ar: "دفعت جائحة كوفيد-19 وحزم التحفيز الحكومية الضخمة الذهب إلى رقم قياسي فوق 2,000 دولار للأونصة في أغسطس، متجاوزًا قمة 2011. وتدفقت الأموال إلى صناديق الذهب بوتيرة قياسية مع انخفاض الفائدة دون معدل التضخم.",
    tr: "COVID-19 salgını ve hükümetlerin devasa teşvik paketleri, altını Ağustos'ta ons başına $2,000 seviyesinin üzerinde rekor seviyeye taşıdı ve 2011 zirvesi aşıldı. Faiz oranlarının enflasyonun altına inmesiyle altın fonlarına rekor hızda para aktı.",
    hi: "कोविड-19 महामारी और सरकारों के भारी-भरकम राहत पैकेजों ने अगस्त में सोने को $2,000 प्रति औंस से ऊपर के रिकॉर्ड पर पहुंचा दिया, जिससे 2011 का उच्चतम स्तर टूट गया। ब्याज दरें महंगाई से नीचे आने के साथ गोल्ड फंड में रिकॉर्ड रफ़्तार से पैसा झोंका गया।",
  },
  2021: {
    en: "As vaccines rolled out and bond yields rose, gold drifted lower and posted its first annual decline since 2018, even as inflation climbed. Jewellery demand recovered strongly after the 2020 lockdowns.",
    ar: "مع انطلاق حملات التطعيم وارتفاع عوائد السندات، تراجع الذهب تدريجيًا وسجّل أول انخفاض سنوي منذ 2018 رغم صعود التضخم. وتعافى الطلب على المشغولات بقوة بعد إغلاقات 2020.",
    tr: "Aşıların yaygınlaşması ve tahvil getirilerinin yükselmesiyle altın yavaş yavaş geriledi ve enflasyonun yükselmesine rağmen 2018'den bu yana ilk yıllık düşüşünü kaydetti. Mücevher talebi, 2020'deki kapanmaların ardından güçlü biçimde toparlandı.",
    hi: "टीकाकरण शुरू होने और बॉन्ड यील्ड बढ़ने के साथ सोना धीरे-धीरे नीचे खिसका और महंगाई बढ़ने के बावजूद 2018 के बाद अपनी पहली सालाना गिरावट दर्ज की। 2020 के लॉकडाउन के बाद गहनों की मांग में ज़ोरदार सुधार हुआ।",
  },
  2022: {
    en: "Russia's invasion of Ukraine in February sent gold back near its record in March. The Federal Reserve then raised rates at the fastest pace in decades and the dollar surged, pulling gold down to about $1,620 by November. Central banks bought more gold than in any year on record.",
    ar: "أعاد الغزو الروسي لأوكرانيا في فبراير الذهب قرب رقمه القياسي في مارس. ثم رفع الاحتياطي الفيدرالي الفائدة بأسرع وتيرة منذ عقود وارتفع الدولار بقوة، فهبط الذهب إلى نحو 1,620 دولارًا بحلول نوفمبر. واشترت البنوك المركزية ذهبًا أكثر من أي عام مسجّل.",
    tr: "Rusya'nın Şubat'ta Ukrayna'yı işgal etmesi, altını Mart'ta yeniden rekor seviyesine yakın bir düzeye taşıdı. Ardından ABD Merkez Bankası (Fed) faiz oranlarını on yılların en hızlı temposuyla artırdı ve dolar sert yükseldi; bu da altını Kasım'a gelindiğinde yaklaşık $1,620 seviyesine geriletti. Merkez bankaları, kayıtlardaki tüm yıllardan daha fazla altın satın aldı.",
    hi: "फ़रवरी में रूस के यूक्रेन पर हमले ने मार्च में सोने को फिर उसके रिकॉर्ड के करीब पहुंचा दिया। इसके बाद अमेरिकी फ़ेडरल रिज़र्व ने दशकों की सबसे तेज़ रफ़्तार से ब्याज दरें बढ़ाईं और डॉलर में ज़बरदस्त उछाल आया, जिससे नवंबर तक सोना गिरकर करीब $1,620 पर आ गया। केंद्रीय बैंकों ने रिकॉर्ड में दर्ज किसी भी साल से ज़्यादा सोना खरीदा।",
  },
  2023: {
    en: "US bank failures in March and the war in Gaza from October supported gold, and central banks bought more than 1,000 tonnes for a second year. Gold ended the year at a record closing price above $2,000 an ounce.",
    ar: "دعمت انهيارات البنوك الأمريكية في مارس والحرب في غزة منذ أكتوبر الذهب، واشترت البنوك المركزية أكثر من 1,000 طن للعام الثاني على التوالي. وأنهى الذهب العام عند سعر إغلاق قياسي فوق 2,000 دولار للأونصة.",
    tr: "Mart'taki ABD banka iflasları ve Ekim'den itibaren Gazze'deki savaş altını destekledi; merkez bankaları üst üste ikinci yıl 1,000 tonun üzerinde altın aldı. Altın yılı ons başına $2,000 seviyesinin üzerinde rekor bir kapanış fiyatıyla tamamladı.",
    hi: "मार्च में अमेरिकी बैंकों के डूबने और अक्टूबर से गाज़ा में चल रहे युद्ध ने सोने को सहारा दिया, और केंद्रीय बैंकों ने लगातार दूसरे साल 1,000 टन से ज़्यादा सोना खरीदा। सोने ने साल का अंत $2,000 प्रति औंस से ऊपर के रिकॉर्ड क्लोजिंग भाव पर किया।",
  },
  2024: {
    en: "Gold set record after record, peaking near $2,800 an ounce in late October, its best year since 2010. Steady central bank buying, strong demand in Asia and the start of US interest rate cuts in September all pushed it higher.",
    ar: "سجّل الذهب رقمًا قياسيًا تلو الآخر، وبلغ ذروته قرب 2,800 دولار للأونصة أواخر أكتوبر، في أفضل عام له منذ 2010. ودفعه إلى الأعلى شراء البنوك المركزية المستمر والطلب القوي في آسيا وبدء خفض الفائدة الأمريكية في سبتمبر.",
    tr: "Altın rekor üstüne rekor kırarak Ekim sonunda ons başına $2,800 civarında zirve yaptı ve 2010'dan bu yana en iyi yılını geçirdi. Merkez bankalarının istikrarlı alımları, Asya'daki güçlü talep ve ABD'de faiz indirimlerinin Eylül'de başlaması, hep birlikte altını yukarı taşıdı.",
    hi: "सोने ने एक के बाद एक रिकॉर्ड बनाए और अक्टूबर के आखिर में करीब $2,800 प्रति औंस के शिखर पर पहुंचा; यह 2010 के बाद उसका सबसे अच्छा साल रहा। केंद्रीय बैंकों की लगातार खरीदारी, एशिया में मज़बूत मांग और सितंबर में अमेरिका में ब्याज दरों में कटौती की शुरुआत, इन सबने इसे ऊपर पहुंचाया।",
  },
};

export const YEAR_CONTEXT_HEADING: LocaleText = {
  en: "What moved gold in {year}",
  ar: "ما الذي حرّك الذهب في {year}",
  tr: "{year} yılında altını hareketlendiren gelişmeler",
  hi: "{year} में सोने की चाल पर किन बातों का असर रहा",
};
