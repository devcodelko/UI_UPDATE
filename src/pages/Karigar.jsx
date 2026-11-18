import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInteractiveEffects } from '../hooks/useInteractiveEffects.js';

const artisansData = [
  {
    id: 'varanasi',
    badge: '01',
    date: 'SEP | 2026',
    label: 'Varanasi • वकील प्रसाद',
    title: 'यूपी के कारीगर - वकील प्रसाद, वाराणसी',
    tagline: 'राह चलते राहगीर से मिली एक सलाह क्या कर सकती है?',
    image: '/assets/images/karigar-craft.jpg',
    imageAlt: 'यूपी के कारीगर वकील प्रसाद वाराणसी',
    craft: 'बढ़ई शिल्प (Carpentry)',
    paragraphs: [
      'एक साधारण मजदूर से सफल कारोबारी बने <strong>वकील प्रसाद</strong> इसका सीधा-साधा जवाब है।',
      'वाराणसी का एक छोटा सा प्यारा मौजा गाँव। इस गांव में ही एक साधारण सी <strong>बढ़ई की दुकान</strong>, जिसमें रोजाना मज़दूरी कर अपना जीवन चला रहे थे, वकील प्रसाद।',
      'वकील प्रसाद के बनाए लकड़ी के फर्नीचर उनके हुनर के गवाह थे। लेकिन इस हुनर की पहचान रोज की <strong>400 रुपए की मज़दूरी</strong> ही थी, जिससे वकील प्रसाद का घर चलता था।',
      'जितने दिन दुकान पर काम, उतने ही दिन गुजर-बसर। जिस दिन काम नहीं, उस दिन मुश्किल वक्त के लिए बचाये पैसों से गुज़ारा होता था।',
      'एक दिन दुकान पर काम न था। वकील प्रसाद काम खोजने के लिए परेशानी में यहाँ-वहाँ भटकने लगे। रास्ते में पड़ोस के गांव का एक परिचित उन्हें मिला। काम के लिए परेशान वकील प्रसाद को इस परिचित ने <strong>विश्वकर्मा श्रम सम्मान योजना, वीएसएसवाई (VSSY)</strong> के तहत UPICON ट्रेनिंग सेंटर से जोड़ा और मुफ्त पावर टूलकिट प्रदान कराया। आज वे ₹1,500 प्रतिदिन कमाते हैं और अपनी स्वतंत्र कार्यशाला चला रहे हैं।'
    ]
  },
  {
    id: 'gorakhpur',
    badge: '02',
    date: 'AUG | 2026',
    label: 'Gorakhpur • राम स्वरूप',
    title: 'यूपी के कारीगर - राम स्वरूप प्रजापति, गोरखपुर',
    tagline: 'पारंपरिक चाक से आधुनिक इलेक्ट्रिक व्हील तक टेराकोटा शिल्प की नई उड़ान',
    image: '/assets/images/odop-pottery.jpg',
    imageAlt: 'यूपी के कारीगर राम स्वरूप गोरखपुर',
    craft: 'टेराकोटा मूर्तिकला (Terracotta)',
    paragraphs: [
      'गोरखपुर के औरंगाबाद गांव के प्रसिद्ध मूर्तिकार <strong>राम स्वरूप प्रजापति</strong> पुश्तों से मिट्टी के बर्तन और टेराकोटा शिल्प गढ़ते आ रहे थे।',
      'हाथ से चलने वाले भारी चाक और सीमित संसाधनों के कारण दिनभर की मेहनत के बाद भी पर्याप्त आमदनी नहीं हो पाती थी।',
      'UPICON ने <strong>विश्वकर्मा श्रम सम्मान योजना (VSSY)</strong> और <strong>ODOP मिशन</strong> के अंतर्गत राम स्वरूप को आधुनिक तकनीकी प्रशिक्षण से जोड़ा।',
      'प्रशिक्षण के उपरांत उन्हें निःशुल्क आधुनिक <strong>इलेक्ट्रिक चाक और पगमिल टूलकिट</strong> प्रदान की गई, जिससे उत्पादन क्षमता तीन गुना बढ़ गई।',
      'आज राम स्वरूप के तैयार किए टेराकोटा शिल्प राज्य स्तरीय प्रदर्शनियों और अंतरराष्ट्रीय एक्सपोर्ट हब्स में सराहे जा रहे हैं, और उनकी दैनिक आय ₹1,800 तक पहुंच गई है।'
    ]
  },
  {
    id: 'lucknow',
    badge: '03',
    date: 'JUL | 2026',
    label: 'Lucknow • बेगम नसरीन',
    title: 'यूपी के कारीगर - बेगम नसरीन बानो, लखनऊ',
    tagline: 'चिकनकारी के बारीक धागों से 450 ग्रामीण महिलाओं के स्वावलंबन की दास्तान',
    image: '/assets/images/odop-textiles.jpg',
    imageAlt: 'यूपी के कारीगर बेगम नसरीन लखनऊ',
    craft: 'चिकनकारी एवं ज़रदोज़ी (Embroidery)',
    paragraphs: [
      'लखनऊ के काकोरी क्षेत्र की मास्टर क्राफ्ट्सवुमन <strong>बेगम नसरीन बानो</strong> पीढ़ियों पुरानी चिकनकारी और ज़रदोज़ी की अद्वितीय पारखी हैं।',
      'उत्कृष्ट हुनर के बावजूद बिचौलियों के हस्तक्षेप से कारीगर महिलाओं को उनकी मेहनत का उचित मूल्य नहीं मिल पा रहा था।',
      'UPICON के क्लस्टर विकास अभियान के अंतर्गत नसरीन बानो को आधुनिक डिजाइनिंग, कलर मैचिंग और डिजिटल कैटलॉगिंग का विशेष प्रशिक्षण दिया गया।',
      'नसरीन ने <strong>450 ग्रामीण महिलाओं का स्वयं-सहायता समूह</strong> संगठित किया और टूलकिट वितरण के माध्यम से घर-घर सिलाई-कढ़ाई के केंद्र स्थापित किए।',
      'आज उनका समूह बिचौलियों से मुक्त होकर लखनऊ, दिल्ली और मुंबई के प्रमुख फैशन आउटलेट्स में सीधे माल सप्लाई कर रहा है।'
    ]
  },
  {
    id: 'saharanpur',
    badge: '04',
    date: 'JUN | 2026',
    label: 'Saharanpur • कन्हैया लाल',
    title: 'यूपी के कारीगर - कन्हैया लाल, सहारनपुर',
    tagline: 'काष्ठ कला के जादूगर को मिला आधुनिक पॉवर टूल्स और ई-मार्केटप्लेस का साथ',
    image: '/assets/images/karigar-carving.jpg',
    imageAlt: 'यूपी के कारीगर कन्हैया लाल सहारनपुर',
    craft: 'काष्ठ कला एवं नक्काशी (Wood Carving)',
    paragraphs: [
      'सहारनपुर के प्रसिद्ध काष्ठ शिल्प (Wood Carving) में <strong>कन्हैया लाल</strong> पिछले तीन दशकों से शीशम पर बारीक नक्काशी का काम कर रहे हैं।',
      'पुराने छेनी-हथौड़े से नक्काशी करने में समय अधिक लगता था और हाथ की चोटों का जोखिम हमेशा बना रहता था।',
      'UPICON के <strong>VSSY स्किल अपग्रेडेशन कार्यक्रम</strong> में शामिल होकर उन्होंने कंप्यूटर-एडेड डिजाइन (CAD) और हाई-स्पीड रोटरी टूल्स चलाना सीखा।',
      'ट्रेनिंग पूरी होने पर UPICON द्वारा आधुनिक कार्विंग मशीन और सेफ्टी गियर की टूलकिट निःशुल्क उपलब्ध कराई गई।',
      'अब कन्हैया लाल का काम 50% कम समय में दोगुने फिनिशिंग के साथ तैयार होता है और वे सीधे सरकारी GeM पोर्टल पर अपने उत्पाद बेच रहे हैं।'
    ]
  },
  {
    id: 'moradabad',
    badge: '05',
    date: 'MAY | 2026',
    label: 'Moradabad • रशीद अहमद',
    title: 'यूपी के कारीगर - रशीद अहमद, मुरादाबाद',
    tagline: 'पीतल नगरी के उस्ताद कारीगर को मिला आधुनिक एनग्रेविंग टूल्स और वैश्विक मंच',
    image: '/assets/images/karigar-metal.jpg',
    imageAlt: 'यूपी के कारीगर रशीद अहमद मुरादाबाद',
    craft: 'पीतल शिल्प एवं मेटल एनग्रेविंग (Metal Craft)',
    paragraphs: [
      'मुरादाबाद के पीतल शिल्पकार <strong>रशीद अहमद</strong> ब्रास मेटलवेयर पर बारीक \'मरोड़ी\' और \'खुदाई\' नक्काशी के माहिर उस्ताद हैं।',
      'पारंपरिक कार्यशाला में उचित सुरक्षा उपकरणों और आधुनिक फिनिशिंग मशीनों के अभाव में काम की रफ्तार धीमी थी।',
      'UPICON के तकनीकी मार्गदर्शन में रशीद अहमद ने आधुनिक लेजर एनग्रेविंग और पर्यावरण-अनुकूल बफिंग तकनीकों का प्रशिक्षण प्राप्त किया।',
      'VSSY योजना के तहत उन्हें आधुनिक ब्रास कटिंग एवं एनग्रेविंग टूलकिट प्रदान की गई, जिससे जटिल कलाकृतियों का निर्माण सहज हो गया।',
      'रशीद के बनाए पीतल के लैंप और डेकोर आइटम्स अब बड़े अंतरराष्ट्रीय एक्सपोर्ट ऑर्डर्स का हिस्सा हैं और वे 15 स्थानीय कारीगरों को रोजगार दे रहे हैं।'
    ]
  },
  {
    id: 'bhadohi',
    badge: '06',
    date: 'APR | 2026',
    label: 'Bhadohi • शिवकुमार बिंद',
    title: 'यूपी के कारीगर - शिवकुमार बिंद, भदोही',
    tagline: 'हस्तनिर्मित कालीन बुनाई की पारंपरिक विरासत से आधुनिक वैश्विक लूम्स तक का सफर',
    image: '/assets/images/karigar-weaver.jpg',
    imageAlt: 'यूपी के कारीगर शिवकुमार बिंद भदोही',
    craft: 'कालीन एवं दरी बुनाई (Carpet Weaving)',
    paragraphs: [
      'कालीन नगरी भदोही के कुशल बुनकर <strong>शिवकुमार बिंद</strong> पीढ़ियों से हाथ से बुनी ऊनी और रेशमी कालीनों के निर्माण में जुटे हैं।',
      'हाथ के पुराने खड्डे (Loom) पर लगातार झुककर काम करने से स्वास्थ्य प्रभावित हो रहा था और डिजाइनिंग में नए प्रयोग करना कठिन था।',
      'UPICON और हस्तशिल्प विकास मिशन के संयुक्त प्रयास से शिवकुमार को एर्गोनोमिक लूम संचालन और प्राकृतिक रंगों के प्रयोग का प्रशिक्षण मिला।',
      'योजना के तहत आधुनिक नॉटिंग टूल्स, स्टील कॉम्ब्स और आधुनिक करघे के सहायक उपकरण मिलने से बुनाई की गति और गुणवत्ता दोनों में उल्लेखनीय वृद्धि हुई।',
      'आज शिवकुमार अपने गांव में 25 बुनकरों का समूह संचालित कर रहे हैं और उनके हाथ के बने कालीन सीधे अमेरिका और यूरोपीय देशों में निर्यात हो रहे हैं।'
    ]
  }
];

export default function Karigar() {
  useInteractiveEffects();
  const [activeArtisanId, setActiveArtisanId] = useState('varanasi');

  const currentArtisan = artisansData.find((a) => a.id === activeArtisanId) || artisansData[0];

  return (
    <main className="min-h-screen">
      <section
        className="bg-gradient-to-br from-[#0c2f35] via-[#094b5c] to-[#081f23] py-16 lg:py-24 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#138D9E_1px,transparent_1px)] [background-size:24px_24px]">
        </div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 text-center flex flex-col items-center gap-4"
          data-aos="fade-up">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Link className="hover:text-brand-orange transition-colors flex items-center gap-1 text-white" to="/" >
              <span className="material-symbols-outlined text-sm">home</span> Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-brand-orange font-bold">UP KE Karigar</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Honouring the Master Artisans &amp; Craftsmen of UP
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            UPICON provides technical skill upgrading, modern toolkit distribution, bank credit linkages, and direct market
            access to traditional artisans across all 75 districts under Vishwakarma Shram Samman Yojana.
          </p>
        </div>
      </section>



      {/*  MAIN ARTISAN SHOWCASE & LEFT LIST SIDEBAR SECTION          */}

      <section className="py-12 lg:py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/*  Left Side: Artisan List Sidebar  */}
            <div className="lg:col-span-4 flex flex-col gap-3" data-aos="fade-right">
              <div className="pb-2 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Select Edition &amp; District</span>
                <span className="text-[11px] font-semibold text-brand-orange bg-brand-orange-light px-2 py-0.5 rounded-full">{artisansData.length}
                  Artisans</span>
              </div>

              <div className="flex flex-col gap-2.5" id="karigar-list-container">
                {artisansData.map((artisan) => {
                  const isActive = artisan.id === activeArtisanId;
                  return (
                    <button
                      key={artisan.id}
                      type="button"
                      data-id={artisan.id}
                      onClick={() => setActiveArtisanId(artisan.id)}
                      className={`page-item-btn ${isActive ? 'active' : ''} w-full text-left p-3.5 sm:p-4 rounded-2xl flex items-center justify-between cursor-pointer group`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="item-badge w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0">
                          {artisan.badge}
                        </span>
                        <div className="flex flex-col items-start">
                          <span className="text-[11px] font-mono tracking-wide text-slate-400 font-semibold">{artisan.date}</span>
                          <span className="item-title text-sm font-extrabold">{artisan.label}</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined item-icon text-xl">chevron_right</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/*  Right Side: Featured Artisan Showcase Card  */}
            <div className="lg:col-span-8" data-aos="fade-left" data-aos-delay="200">
              <div id="artisan-showcase-card"
                className="bg-[#c6d7d2] rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-300/80 shadow-md transition-all duration-500">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">

                  {/*  Left Text Content  */}
                  <div className="md:col-span-7 flex flex-col justify-center">
                    <h2 id="artisan-title"
                      className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#d86520] mb-3 leading-snug">
                      {currentArtisan.title}
                    </h2>
                    <h3 id="artisan-tagline"
                      className="text-sm sm:text-base font-semibold text-slate-800 mb-3.5 leading-relaxed">
                      {currentArtisan.tagline}
                    </h3>

                    <div id="artisan-story" className="space-y-3 text-slate-800 text-xs sm:text-sm font-normal leading-relaxed">
                      {currentArtisan.paragraphs.map((para, idx) => (
                        <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
                      ))}
                    </div>
                  </div>

                  {/*  Right Artisan Image Container  */}
                  <div className="md:col-span-5 flex justify-center">
                    <div
                      className="relative w-full max-w-xs h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border-4 border-[#aabeb8] shadow-lg bg-slate-200">
                      <img id="artisan-image" alt={currentArtisan.imageAlt}
                        className="w-full h-full object-cover transition-opacity duration-500"
                        key={currentArtisan.id}
                        src={currentArtisan.image} />
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/*  ARTISAN GRID SHOWCASE SECTION                              */}

      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block mb-2">Statewide Artisan
              Heritage</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Featured Karigars Across Uttar Pradesh</h2>
            <p className="text-sm text-slate-600 mt-2">Empowering traditional craftsmen with technology, modern toolkits, and
              financial access.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {/*  Card 1  */}
            <div
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-card transition-all"
              data-aos="fade-up" data-aos-delay="100">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-12 h-12 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold text-base border border-brand-orange/20">
                    VP
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">वकील प्रसाद</h3>
                    <span className="text-xs text-slate-500 font-medium">बढ़ई शिल्प (Carpentry) • वाराणसी</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  "VSSY योजना के तहत UPICON ट्रेनिंग और इलेक्ट्रिक कारपेंट्री टूलकिट मिलने के बाद मेरी दैनिक आय ₹400 मजदूरी
                  से
                  बढ़कर ₹1,500 प्रतिदिन की खुद की वर्कशॉप बन गई।"
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="font-bold text-brand-orange">SEP 2026 Beneficiary</span>
                <span className="text-slate-400">Varanasi District</span>
              </div>
            </div>

            {/*  Card 2  */}
            <div
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-card transition-all"
              data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-12 h-12 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center font-bold text-base border border-brand-teal/20">
                    RP
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">राम स्वरूप प्रजापति</h3>
                    <span className="text-xs text-slate-500 font-medium">टेराकोटा मूर्तिकार (Terracotta) • गोरखपुर</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  "इलेक्ट्रिक चाक और मॉडर्न भट्टी से उत्पादन 3 गुना बढ़ा। अब हमारे बनाए टेराकोटा शिल्प सीधे राज्य स्तरीय
                  प्रदर्शनी और एक्सपोर्ट हब तक पहुँच रहे हैं।"
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="font-bold text-brand-teal">AUG 2026 Beneficiary</span>
                <span className="text-slate-400">Gorakhpur District</span>
              </div>
            </div>

            {/*  Card 3  */}
            <div
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-card transition-all"
              data-aos="fade-up" data-aos-delay="300">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-12 h-12 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold text-base border border-brand-orange/20">
                    NB
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">बेगम नसरीन बानो</h3>
                    <span className="text-xs text-slate-500 font-medium">चिकनकारी एवं ज़री (Embroidery) • लखनऊ</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  "450 ग्रामीण महिलाओं का स्व-सहायता समूह बनाकर बिचौलियों से मुक्ति पाई और लखनऊ रिटेल स्टोर्स में सीधे
                  सप्लाई
                  शुरू की।"
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="font-bold text-brand-orange">JUL 2026 Beneficiary</span>
                <span className="text-slate-400">Lucknow District</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
