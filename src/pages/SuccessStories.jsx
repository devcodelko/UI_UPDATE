import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInteractiveEffects } from '../hooks/useInteractiveEffects.js';

const storiesData = [
  {
    id: 'kanpur',
    badge: '01',
    date: 'SEP | 2026',
    label: 'Kanpur • EcoJute Innovations',
    title: 'सफलता की कहानी - इकोजूट इनोवेशन, कानपुर',
    tagline: '₹5 लाख के बीज ऋण से ₹1.8 करोड़ का वार्षिक कारोबार खड़ा करने का सफर',
    image: '/assets/images/success-hero.jpg',
    imageAlt: 'सफलता की कहानी इकोजूट इनोवेशन कानपुर',
    paragraphs: [
      'कानपुर के 26 वर्षीय युवा उद्यमी <strong>इंजीनियर अजय सिंह</strong> ने प्लास्टिक मुक्त पैकेजिंग समाधान बनाने का सपना देखा।',
      'शुरुआत में बैंक लोन और परियोजना रिपोर्ट बनाने में आ रही कठिनाइयों का समाधान <strong>UPICON की बैंकेबल DPR सर्विस</strong> और <strong>मुख्यमंत्री युवा (CM YUVA) योजना</strong> के माध्यम से हुआ।',
      'UPICON के विशेषज्ञों ने प्रोजेक्ट रिपोर्ट तैयार की, सिडबी (SIDBI) और केनरा बैंक से <strong>ऋण स्वीकृति सम्बद्धता</strong> कराई, और तकनीकी सब्सिडी का लाभ दिलाया।',
      'आज इकोजूट इनोवेशन इकाई में <strong>42 स्थानीय युवाओं को प्रत्यक्ष रोजगार</strong> मिल रहा है और प्रमुख रिटेल ब्रांड्स को पर्यावरण-अनुकूल पैकेजिंग सप्लाई हो रही है।',
      'अजय सिंह का कहना है कि सही सलाह और सरकारी सहायता ने एक विचार को ₹1.8 करोड़ के सफल ब्रांड में बदल दिया।'
    ]
  },
  {
    id: 'agra',
    badge: '02',
    date: 'AUG | 2026',
    label: 'Agra • Organic Oil Expeller',
    title: 'सफलता की कहानी - जैविक ऑइल एक्सपैलर, आगरा',
    tagline: 'PMEGP सब्सिडी और UPICON EDP ट्रेनिंग से ₹65 लाख वार्षिक कारोबार का मुकाम',
    image: '/assets/images/success-agro.jpg',
    imageAlt: 'सफलता की कहानी जैविक ऑइल एक्सपैलर आगरा',
    paragraphs: [
      'आगरा की उद्यमी <strong>सुनीता यादव</strong> ने शुद्ध एवं जैविक सरसों तेल निष्कर्षण के क्षेत्र में आत्मनिर्भर बनने का निर्णय लिया।',
      'UPICON के उद्यमिता विकास कार्यक्रम (<strong>EDP Training</strong>) में शामिल होकर उन्होंने आधुनिक कोल्ड-प्रेस तकनीक और व्यावसायिक प्रबंधन सीखा।',
      'UPICON के मार्गदर्शन से <strong>PMEGP योजना</strong> के अंतर्गत वित्तीय अनुदान और बैंक ऋण सुलभ हुआ, जिससे स्वचालित निष्कर्षण प्लांट स्थापित किया गया।',
      'वर्तमान में इस इकाई से <strong>20 से अधिक स्थानीय परिवारों</strong> को आजीविका मिल रही है तथा शुद्ध जैविक तेल सीधे खुदरा बाजारों में पहुंच रहा है।',
      'सुनीता यादव का कहना है कि UPICON के समयबद्ध सहयोग ने एक घरेलू विचार को ₹65 लाख के प्रतिष्ठित उद्यम में तब्दील कर दिया।'
    ]
  },
  {
    id: 'gorakhpur',
    badge: '03',
    date: 'JUL | 2026',
    label: 'Gorakhpur • Solar Assembly',
    title: 'सफलता की कहानी - पूर्वांचल सोलर असेंबली, गोरखपुर',
    tagline: 'क्लीन एनर्जी मिशन के तहत ₹2.2 करोड़ के सोलर पैनल निर्माण का सफल विस्तार',
    image: '/assets/images/hero-consultant.jpg',
    imageAlt: 'सफलता की कहानी पूर्वांचल सोलर असेंबली गोरखपुर',
    paragraphs: [
      'गोरखपुर के युवा तकनीकी विशेषज्ञ <strong>रोहित वर्मा</strong> ने पूर्वांचल में स्वच्छ ऊर्जा और सौर उपकरणों की मांग को देखते हुए असेंबली प्लांट की स्थापना की।',
      'UPICON के एमएसएमई कंसल्टेंसी सेल ने परियोजना की विस्तृत तकनीकी-आर्थिक रिपोर्ट (<strong>Bankable DPR</strong>) तैयार की और गीडा (GIDA) में औद्योगिक आवंटन में सहायता की।',
      'यूनियन बैंक ऑफ इंडिया से <strong>₹1.2 करोड़ का क्रेडिट लिंकेज</strong> और राज्य स्वच्छ ऊर्जा प्रोत्साहन नीति के तहत पूंजीगत सब्सिडी कराई गई।',
      'इकाई रूफटॉप सोलर पैनल्स और कृषि पंपों के लिए उच्च गुणवत्ता वाले मॉड्यूल बना रही है, जिसमें <strong>35 स्थानीय युवाओं</strong> को प्रत्यक्ष रोजगार मिल रहा है।',
      'रोहित वर्मा के अनुसार UPICON की तकनीकी हैंडहोल्डिंग ने उनके उद्यम को आत्मनिर्भर और पर्यावरण-अनुकूल बनाने में महत्वपूर्ण योगदान दिया।'
    ]
  },
  {
    id: 'varanasi',
    badge: '04',
    date: 'JUN | 2026',
    label: 'Varanasi • Ayush Herbal Oils',
    title: 'सफलता की कहानी - आयुष हर्बल ऑइल्स, वाराणसी',
    tagline: 'पारंपरिक आयुर्वेद और आधुनिक निष्कर्षण से वैश्विक ई-कॉमर्स ब्रांड की स्थापना',
    image: '/assets/images/success-pharma.jpg',
    imageAlt: 'सफलता की कहानी आयुष हर्बल ऑइल्स वाराणसी',
    paragraphs: [
      'वाराणसी के उद्यमी <strong>डॉ. विकास त्रिपाठी</strong> ने पूर्वांचल की पारंपरिक जड़ी-बूटियों से गुणवत्तापूर्ण आयुर्वेदिक व औषधीय तेल निर्माण का उपक्रम शुरू किया।',
      'उत्पाद मानकीकरण, आयुष जीएमपी (GMP) प्रमाणन और प्रयोगशाला परीक्षण प्रोटोकॉल के लिए <strong>UPICON के गुणवत्ता अनुपालन विशेषज्ञों</strong> ने निरंतर मार्गदर्शन दिया।',
      'UPICON के वित्तीय सलाहकार प्रकोष्ठ द्वारा मुद्रा एवं स्टैंड-अप इंडिया योजना से <strong>₹50 लाख का कार्यशील पूंजी ऋण</strong> सुलभ कराया गया।',
      'आज आयुष हर्बल ऑइल्स ODOP ई-मार्ट, GeM पोर्टल और वैश्विक डिजिटल मार्केटप्लेस पर सक्रिय रूप से उपलब्ध हैं, जिससे <strong>50+ किसान परिवारों</strong> को संबल मिल रहा है।',
      'पारंपरिक विरासत और आधुनिक गुणवत्ता नियंत्रण के संगम से यह इकाई पूर्वांचल में हर्बल उद्यमिता का गौरव बन चुकी है।'
    ]
  },
  {
    id: 'barabanki',
    badge: '05',
    date: 'MAY | 2026',
    label: 'Barabanki • अजय कुमार (शुद्धिमा डेयरी)',
    title: 'सफलता की कहानी - शुद्धिमा डेयरी फार्म, बाराबंकी',
    tagline: 'रिटायरमेंट के बाद ₹2.72 करोड़ ऋण से खड़ा किया आधुनिक हाइजीनिक डेयरी प्लांट',
    image: '/assets/images/success-dairy.jpg',
    imageAlt: 'सफलता की कहानी शुद्धिमा डेयरी फार्म बाराबंकी',
    paragraphs: [
      'लोक निर्माण विभाग (PWD) से सेवानिवृत्ति के बाद 64 वर्षीय <strong>अजय कुमार</strong> ने बाराबंकी में एक अत्याधुनिक डेयरी फार्म शुरू करने का संकल्प लिया।',
      'पशुपालन, स्वचालित मिलकिंग सिस्टम और बायो-गैस ऊर्जा संयंत्र की व्यवहार्यता के लिए UPICON ने संपूर्ण <strong>DPR व तकनीकी मूल्यांकन</strong> तैयार किया।',
      'भारतीय स्टेट बैंक (SBI) के माध्यम से नाबार्ड (NABARD) समर्थित योजना के तहत <strong>₹2.72 करोड़ का रियायती ऋण</strong> स्वीकृत कराया गया।',
      'आज शुद्धिमा डेयरी फार्म में 120 से अधिक उन्नत नस्ल की गायें हैं और दैनिक <strong>1,500 लीटर पाश्चुरीकृत दूध</strong> लखनऊ और आसपास के बाजारों में सीधे आपूर्ति हो रहा है।',
      'अजय कुमार साबित करते हैं कि उद्यम शुरू करने की कोई उम्र नहीं होती, बशर्ते UPICON जैसा अनुभवी तकनीकी साथी साथ हो।'
    ]
  },
  {
    id: 'moradabad',
    badge: '06',
    date: 'APR | 2026',
    label: 'Moradabad • ZED Brass Foundry',
    title: 'सफलता की कहानी - जेड ब्रास फाउंड्री, मुरादाबाद',
    tagline: 'ZED गोल्ड सर्टिफिकेशन और ग्रीन एनर्जी तकनीक से निर्यात में 150% की छलांग',
    image: '/assets/images/msme-audit.jpg',
    imageAlt: 'सफलता की कहानी जेड ब्रास फाउंड्री मुरादाबाद',
    paragraphs: [
      'मुरादाबाद के पीतल उद्योग में कार्यरत दूसरी पीढ़ी के निर्यातक <strong>मोहम्मद आरिफ</strong> ने अपनी फाउंड्री को पर्यावरण-अनुकूल और ऊर्जा-कुशल बनाने का निर्णय लिया।',
      'विश्व बैंक समर्थित <strong>RAMP योजना</strong> के अंतर्गत UPICON के तकनीकी ऑडिटरों ने ऊर्जा संरक्षण और शून्य-दोष विनिर्माण (ZED) मानकों का कार्यान्वयन कराया।',
      'इकाई को ₹5 लाख का हरित प्रौद्योगिकी अनुदान मिला तथा शून्य-उत्सर्जन इंडक्शन फर्नेस स्थापित करने हेतु बैंक वित्तपोषण में <strong>UPICON ने पूर्ण हैंडहोल्डिंग</strong> की।',
      'ZED गोल्ड सर्टिफिकेशन प्राप्त होने से विदेशी खरीदारों से सीधे निर्यात ऑर्डर प्राप्त हुए और उत्पादन लागत में <strong>28% की कमी</strong> आई।',
      'यह इकाई सिद्ध करती है कि पारंपरिक पीतल शिल्प आधुनिक सस्टेनेबल इंजीनियरिंग के साथ मिलकर वैश्विक स्तर पर अग्रणी बन सकता है।'
    ]
  }
];

export default function SuccessStories() {
  useInteractiveEffects();
  const [activeStoryId, setActiveStoryId] = useState('kanpur');

  const currentStory = storiesData.find((s) => s.id === activeStoryId) || storiesData[0];

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
            <span className="text-brand-orange font-bold">Success Stories</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Transforming Dreams into Self-Reliant MSME Reality
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Discover how UPICON's turn-key advisory, bankable DPR preparation, and EDP mentorship empowered over 50,000
            first-generation founders to build high-growth enterprises across Uttar Pradesh.
          </p>
        </div>
      </section>


      {/*  MAIN SUCCESS STORIES SHOWCASE & LEFT LIST SIDEBAR SECTION  */}

      <section className="py-12 lg:py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/*  Left Side: Success Stories List Sidebar  */}
            <div className="lg:col-span-4 flex flex-col gap-3" data-aos="fade-right">
              <div className="pb-2 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Select Featured Impact Story</span>
                <span className="text-[11px] font-semibold text-brand-orange bg-brand-orange-light px-2 py-0.5 rounded-full">{storiesData.length}
                  Stories</span>
              </div>

              <div className="flex flex-col gap-2.5" id="story-list-container">
                {storiesData.map((story) => {
                  const isActive = story.id === activeStoryId;
                  return (
                    <button
                      key={story.id}
                      type="button"
                      data-id={story.id}
                      onClick={() => setActiveStoryId(story.id)}
                      className={`story-item-btn ${isActive ? 'active' : ''} w-full text-left p-3.5 sm:p-4 rounded-2xl flex items-center justify-between cursor-pointer group`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="item-badge w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0">
                          {story.badge}
                        </span>
                        <div className="flex flex-col items-start">
                          <span className="text-[11px] font-mono tracking-wide text-slate-400 font-semibold">{story.date}</span>
                          <span className="item-title text-sm font-extrabold">{story.label}</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined item-icon text-xl">chevron_right</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/*  Right Side: Featured Story Showcase Card  */}
            <div className="lg:col-span-8" data-aos="fade-left" data-aos-delay="200">
              <div id="story-showcase-card"
                className="bg-[#c6d7d2] rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-300/80 shadow-md transition-all duration-500">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">

                  {/*  Left Text Content  */}
                  <div className="md:col-span-7 flex flex-col justify-center">
                    <h2 id="story-title"
                      className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#d86520] mb-3 leading-snug">
                      {currentStory.title}
                    </h2>
                    <h3 id="story-tagline" className="text-sm sm:text-base font-semibold text-slate-800 mb-3.5 leading-relaxed">
                      {currentStory.tagline}
                    </h3>

                    <div id="story-body" className="space-y-3 text-slate-800 text-xs sm:text-sm font-normal leading-relaxed">
                      {currentStory.paragraphs.map((para, idx) => (
                        <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
                      ))}
                    </div>
                  </div>

                  {/*  Right Enterprise Image Container  */}
                  <div className="md:col-span-5 flex justify-center">
                    <div
                      className="relative w-full max-w-xs h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border-4 border-[#aabeb8] shadow-lg bg-slate-200">
                      <img id="story-image" alt={currentStory.imageAlt}
                        className="w-full h-full object-cover transition-opacity duration-500"
                        key={currentStory.id}
                        src={currentStory.image} />
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/*  SUCCESS STORIES GRID SECTION                               */}

      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block mb-2">Statewide Enterprise
              Roll</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Featured Entrepreneurs Across Uttar Pradesh</h2>
            <p className="text-sm text-slate-600 mt-2">Empowering first-generation founders with technology, bankable DPRs, and
              market access.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {/*  Story 1  */}
            <div
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-card transition-all"
              data-aos="fade-up" data-aos-delay="100">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-12 h-12 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold text-base border border-brand-orange/20">
                    AS
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">इंजीनियर अजय सिंह</h3>
                    <span className="text-xs text-slate-500 font-medium">इकोजूट पैकेजिंग (EcoJute) • कानपुर</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  "UPICON की बैंकेबल DPR रिपोर्ट और CM YUVA ऋण सहायता से मेरी इकाई ₹1.8 करोड़ वार्षिक कारोबार के साथ 42
                  युवाओं को रोजगार दे रही है।"
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="font-bold text-brand-orange">CM YUVA Beneficiary</span>
                <span className="text-slate-400">Kanpur District</span>
              </div>
            </div>

            {/*  Story 2  */}
            <div
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-card transition-all"
              data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-12 h-12 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center font-bold text-base border border-brand-teal/20">
                    AK
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">अजय कुमार (64 वर्ष)</h3>
                    <span className="text-xs text-slate-500 font-medium">शुद्धिमा डेयरी फार्म • बाराबंकी</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  "लोक निर्माण विभाग से रिटायरमेंट के बाद UPICON की सलाह से SBI से ₹2.72 करोड़ लोन स्वीकृत हुआ और आधुनिक
                  हाइजीनिक डेयरी फार्म शुरू हुआ।"
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="font-bold text-brand-teal">MAY 2026 Beneficiary</span>
                <span className="text-slate-400">Barabanki District</span>
              </div>
            </div>

            {/*  Story 3  */}
            <div
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-card transition-all"
              data-aos="fade-up" data-aos-delay="300">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-12 h-12 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold text-base border border-brand-orange/20">
                    SY
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">सुनीता यादव</h3>
                    <span className="text-xs text-slate-500 font-medium">जैविक ऑइल एक्सपैलर • आगरा</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  "UPICON EDP ट्रेनिंग और PMEGP सब्सिडी से स्वचालित सरसों तेल निष्कर्षण इकाई स्थापित की। आज वार्षिक कारोबार
                  ₹65 लाख है।"
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="font-bold text-brand-orange">PMEGP Beneficiary</span>
                <span className="text-slate-400">Agra District</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
