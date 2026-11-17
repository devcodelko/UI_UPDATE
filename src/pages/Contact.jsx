import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    district: '',
    category: '',
    subject: '',
    message: '',
    agree: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState(null);
  const [selectedDistrictAdda, setSelectedDistrictAdda] = useState('Lucknow (HQ)');
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const ref = 'UPICON-2026-' + Math.floor(1000 + Math.random() * 9000);
      setSubmittedRef(ref);
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        district: '',
        category: '',
        subject: '',
        message: '',
        agree: false
      });
    }, 1000);
  };

  const faqs = [
    {
      question: 'How can I request a Detailed Project Report (DPR) from UPICON?',
      answer:
        'You can submit an inquiry via our online contact form selecting "MSME DPR & Project Advisory" or email us directly at dpr.msme@upicon.in. Our project consultants will review your project requirements and guide you through the process.'
    },
    {
      question: 'What are the public visiting hours for UPICON Head Office in Lucknow?',
      answer:
        'The UPICON Lucknow Head Office (Vibhuti Khand, Gomti Nagar) is open Monday through Saturday from 9:30 AM to 6:00 PM IST. It remains closed on Sundays and official Uttar Pradesh state government holidays.'
    },
    {
      question: 'Is prior appointment required to meet UPICON consultants?',
      answer:
        'While walk-ins are welcomed at our public reception desk, we strongly recommend scheduling a prior appointment via email (contact@upicon.in) or by calling our central desk (+91 0522 272-0850) to ensure the concerned departmental officer is available.'
    },
    {
      question: 'Where can I submit vendor empanelment or tender proposals?',
      answer:
        'All tender submissions, vendor empanelment applications, and procurement inquiries should be sent to tenders@upicon.in or submitted at the 5th Floor Reception Desk, UPICON Bhawan, Gomti Nagar, Lucknow.'
    }
  ];

  return (
    <div className="contact-page">
      <PageHeader
        breadcrumb="Contact Us"
        title="Connect with UP Industrial Consultants Limited"
        subtitle="Headquartered in Lucknow with Zonal &amp; District Offices across Uttar Pradesh. We are dedicated to
            empowering MSMEs, entrepreneurs, and government departments."
      />

      {/* CONTACT INFORMATION & INQUIRY FORM GRID */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="flex flex-col gap-3 max-w-3xl mb-12 lg:mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-teal">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-teal"></span>
              <span>Institutional Helpdesk</span>
              <span className="h-px w-12 bg-gradient-to-r from-brand-teal to-transparent"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Connect with Our Advisory Desks
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Reach out to our Registered Head Office in Lucknow, Regional Zonal Hub in Kanpur, or submit an official
              project query online.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 5 cols */}
            <div className="lg:col-span-5 flex flex-col gap-6" data-aos="fade-right">
              {/* HQ Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-100 relative overflow-hidden group hover:border-brand-teal/30 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-bl-full pointer-events-none"></div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center shrink-0 shadow-2xs">
                    <span className="material-symbols-outlined text-2xl">corporate_fare</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">Headquarters</span>
                    <h3 className="text-lg font-bold text-slate-900 m-0">Registered &amp; Head Office</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  <strong className="text-slate-800 font-semibold">UPICON Bhawan</strong>, 5th Floor, Vibhuti Khand,
                  Gomti Nagar, Lucknow – 226010, Uttar Pradesh, India.
                </p>
                <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 text-xs sm:text-sm">
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="material-symbols-outlined text-brand-teal text-base shrink-0">call</span>
                    <span>
                      <strong>Central Phones:</strong> +91 (0522) 272-0850 / 272-0851
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="material-symbols-outlined text-brand-teal text-base shrink-0">mail</span>
                    <span>
                      <strong>Email Desk:</strong> contact@upicon.in | info@upicon.in
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="material-symbols-outlined text-brand-teal text-base shrink-0">schedule</span>
                    <span>
                      <strong>Working Hours:</strong> Mon - Sat: 9:30 AM - 6:00 PM IST
                    </span>
                  </div>
                </div>
              </div>

              {/* Zonal Kanpur Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-100 relative overflow-hidden group hover:border-brand-orange/30 transition-all">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center shrink-0 shadow-2xs">
                    <span className="material-symbols-outlined text-2xl">location_city</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">Regional Wing</span>
                    <h3 className="text-lg font-bold text-slate-900 m-0">Zonal Office (Kanpur)</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  Industrial Estate, Fazalganj, Kanpur – 208012, Uttar Pradesh, India.
                </p>
                <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 text-xs sm:text-sm">
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="material-symbols-outlined text-brand-orange text-base shrink-0">call</span>
                    <span>
                      <strong>Zonal Desk:</strong> +91 (0512) 221-6543
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="material-symbols-outlined text-brand-orange text-base shrink-0">mail</span>
                    <span>
                      <strong>Zonal Email:</strong> kanpur.zone@upicon.in
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 cols: Query Form */}
            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-card border border-slate-100">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal text-xs font-bold mb-2">
                    <span className="material-symbols-outlined text-sm">edit_note</span> Official Query Portal
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Submit an Institutional Enquiry</h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Fill out the form below. Our consultancy desk will address your inquiry within 24–48 working hours.
                  </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rajesh@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-district" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        District (Uttar Pradesh) <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="contact-district"
                        required
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all bg-white"
                      >
                        <option value="">Select District</option>
                        <option value="Lucknow">Lucknow</option>
                        <option value="Kanpur Nagar">Kanpur Nagar</option>
                        <option value="Varanasi">Varanasi</option>
                        <option value="Agra">Agra</option>
                        <option value="Gautam Buddha Nagar (Noida)">Gautam Buddha Nagar (Noida)</option>
                        <option value="Prayagraj">Prayagraj</option>
                        <option value="Gorakhpur">Gorakhpur</option>
                        <option value="Bareilly">Bareilly</option>
                        <option value="Aligarh">Aligarh</option>
                        <option value="Meerut">Meerut</option>
                        <option value="Ayodhya">Ayodhya</option>
                        <option value="Jhansi">Jhansi</option>
                        <option value="Moradabad">Moradabad</option>
                        <option value="Saharanpur">Saharanpur</option>
                        <option value="Other District">Other 75 UP Districts</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-category" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Inquiry Category <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="contact-category"
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all bg-white"
                      >
                        <option value="">Select Department / Topic</option>
                        <option value="MSME DPR & Project Advisory">MSME DPR &amp; Project Advisory</option>
                        <option value="Skill & Entrepreneurship Development">Skill &amp; Entrepreneurship Training</option>
                        <option value="ODOP Facilitation Desk">ODOP Artisans &amp; Cluster Desk</option>
                        <option value="CM Yuva Scheme Assistance">CM Yuva Scheme Support</option>
                        <option value="Government Consultancy & Tenders">Government Consultancy &amp; Tenders</option>
                        <option value="Vendor / Partner Registration">Vendor / Partner Empanelment</option>
                        <option value="General Information">General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Subject Title
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Request for Food Processing DPR"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Detailed Requirement / Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please state your specific consultation requirements, project scope, or queries..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all resize-y"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="contact-agree"
                      required
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                      className="w-4 h-4 rounded text-brand-teal focus:ring-brand-teal cursor-pointer"
                    />
                    <label htmlFor="contact-agree" className="text-xs text-slate-600 cursor-pointer">
                      I verify that the information provided is accurate for official correspondence with UPICON.
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-teal text-white font-bold text-sm tracking-wide shadow-lg hover:bg-brand-teal-dark active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer border-0 disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          <span>Submitting Query...</span>
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-lg">send</span>
                          <span>Submit Official Query</span>
                        </>
                      )}
                    </button>
                  </div>

                  {submittedRef && (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-medium flex items-center gap-3">
                      <span className="material-symbols-outlined text-emerald-600 text-xl">check_circle</span>
                      <div>
                        <strong className="block font-bold">Query Submitted Successfully!</strong>
                        <span>
                          Thank you for contacting UPICON. Reference ID: <strong>{submittedRef}</strong>. Our desk team
                          will get in touch shortly.
                        </span>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS & DISTRICT ADDA NETWORK LOCATOR */}
      <section id="district-network" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="flex flex-col gap-3 max-w-4xl mb-8 lg:mb-10" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-teal">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-teal"></span>
              <span>Physical Footprint</span>
              <span className="h-px w-12 bg-gradient-to-r from-brand-teal to-transparent"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Interactive Office Maps &amp; Network
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Locate UPICON headquarters in Lucknow Gomti Nagar or visit your regional district center across Uttar Pradesh.
            </p>
          </div>


          {/* Maps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" data-aos="fade-up">
            {/* Lucknow HQ Map */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-card flex flex-col gap-4">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-brand-teal"></span>
                  <strong className="text-base text-slate-900 font-bold">Lucknow Head Office Map</strong>
                </div>
                <span className="text-xs text-slate-500 font-medium">Vibhuti Khand, Gomti Nagar</span>
              </div>
              <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-slate-200 shadow-2xs">
                <iframe
                  title="UPICON Lucknow Head Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4878489725515!2d81.00249697624976!3d26.856230976681023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2c246f41e57%3A0x2db4fb8b724581ed!2sUPICON%20Bhawan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Kanpur Zonal Office Map */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-card flex flex-col gap-4">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-brand-orange"></span>
                  <strong className="text-base text-slate-900 font-bold">Kanpur Zonal Office Map</strong>
                </div>
                <span className="text-xs text-slate-500 font-medium">Fazalganj Industrial Area</span>
              </div>
              <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-slate-200 shadow-2xs">
                <iframe
                  title="UPICON Kanpur Zonal Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.492742910246!2d80.30154817623722!3d26.4719269769135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c381c1c38d381%3A0x6b1076f14068598a!2sFazalganj%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16" data-aos="fade-up">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-teal mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-teal"></span>
              <span>Help Desk FAQs</span>
              <span className="w-2.5 h-2.5 rounded-full bg-brand-teal"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Got Questions? We Have Answers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Quick information regarding UPICON services, DPR preparation, and office appointments.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4" data-aos="fade-up">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full font-bold text-left text-slate-900 text-sm sm:text-base py-4 px-6 bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between border-0 cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <span className={`material-symbols-outlined transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-teal' : ''}`}>
                        expand_more
                      </span>
                    </button>
                  </h3>
                  {isOpen && (
                    <div className="text-xs sm:text-sm text-slate-600 leading-relaxed px-6 pb-5 pt-2 border-t border-slate-200/80 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
