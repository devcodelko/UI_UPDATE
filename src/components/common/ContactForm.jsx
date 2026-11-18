import React from "react";

export function ContactForm() {
    return (
        <form id="contact-form" className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Form submitted successfully!'); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/*  Full Name  */}
                <div>
                    <label htmlFor="contact-name"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input type="text" id="contact-name" required placeholder="e.g. Rajesh Kumar"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all" />
                </div>
                {/*  Mobile Number  */}
                <div>
                    <label htmlFor="contact-phone"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input type="tel" id="contact-phone" required placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/*  Email Address  */}
                <div>
                    <label htmlFor="contact-email"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input type="email" id="contact-email" required placeholder="e.g. rajesh@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all" />
                </div>
                {/*  District Dropdown  */}
                <div>
                    <label htmlFor="contact-district"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        District (Uttar Pradesh) <span className="text-rose-500">*</span>
                    </label>
                    <select id="contact-district" required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all bg-white">
                        <option value="" disabled >Select District</option>
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

            {/*  Query Category / Subject  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="contact-category"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Inquiry Category <span className="text-rose-500">*</span>
                    </label>
                    <select id="contact-category" required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all bg-white">
                        <option value="" disabled >Select Department / Topic</option>
                        <option value="MSME DPR & Project Advisory">MSME DPR &amp; Project Advisory</option>
                        <option value="Skill & Entrepreneurship Development">Skill &amp; Entrepreneurship Training
                        </option>
                        <option value="ODOP Facilitation Desk">ODOP Artisans &amp; Cluster Desk</option>
                        <option value="CM Yuva Scheme Assistance">CM Yuva Scheme Support</option>
                        <option value="Government Consultancy & Tenders">Government Consultancy &amp; Tenders</option>
                        <option value="Vendor / Partner Registration">Vendor / Partner Empanelment</option>
                        <option value="General Information">General Inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="contact-subject"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Subject Title
                    </label>
                    <input type="text" id="contact-subject" placeholder="e.g. Request for Food Processing DPR"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all" />
                </div>
            </div>

            {/*  Message Box  */}
            <div>
                <label htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Detailed Requirement / Message <span className="text-rose-500">*</span>
                </label>
                <textarea id="contact-message" rows="4" required
                    placeholder="Please state your specific consultation requirements, project scope, or queries..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all resize-y"></textarea>
            </div>

            {/*  Verification Checkbox  */}
            <div className="flex items-center gap-2 pt-2">
                <input type="checkbox" id="contact-agree" required
                    className="w-4 h-4 rounded text-brand-teal focus:ring-brand-teal" />
                <label htmlFor="contact-agree" className="text-xs text-slate-600">
                    I verify that the information provided is accurate for official correspondence with UPICON.
                </label>
            </div>

            {/*  Submit Button  */}
            <div className="pt-2">
                <button type="submit" id="submit-btn"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-teal text-white font-bold text-sm tracking-wide shadow-lg hover:bg-brand-teal-dark active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer border-0">
                    <span className="material-symbols-outlined text-lg">send</span>
                    <span>Submit Official Query</span>
                </button>
            </div>

            {/*  Success Toast Alert Container  */}
            <div id="form-alert"
                className="hidden p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-medium flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-600 text-xl">check_circle</span>
                <div>
                    <strong className="block font-bold">Query Submitted Successfully!</strong>
                    <span>Thank you for contacting UPICON. Reference ID: <strong id="ref-id">UPICON-2026-8942</strong>.
                        Our desk team will get in touch shortly.</span>
                </div>
            </div>
        </form>
    );
}