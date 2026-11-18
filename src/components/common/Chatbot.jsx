import React, { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('hi'); // Default Hindi
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'नमस्ते! 👋 मैं UPICON मित्र हूँ। UPICON से जुड़ी पहलों, योजनाओं, समाचार, करियर या किसी भी जानकारी के बारे में पूछें।',
      quickPills: true
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleLangChange = (newLang) => {
    setLang(newLang);
    const welcomeMsg = newLang === 'hi'
      ? 'नमस्ते! 👋 मैं UPICON मित्र हूँ। UPICON से जुड़ी पहलों, योजनाओं, समाचार, करियर या किसी भी जानकारी के बारे में पूछें।'
      : 'Namaste! 👋 I am UPICON Mitra. Ask me about UPICON initiatives, government schemes, news, careers, or any enterprise service.';
    
    setMessages((prev) => [
      { sender: 'bot', text: welcomeMsg, quickPills: true },
      ...prev.slice(1)
    ]);
  };

  const getBotResponse = (userMsg) => {
    const msg = userMsg.toLowerCase();
    if (lang === 'hi') {
      if (msg.includes('cmyuva') || msg.includes('cm yuva') || msg.includes('loan') || msg.includes('युवा') || msg.includes('ऋण')) {
        return "<strong>मुख्यमंत्री युवा उद्यमी विकास अभियान (CM YUVA)</strong> के तहत युवाओं को बिना किसी गारंटी के ₹5 लाख तक का 0% ब्याज पर ऋण और ₹25,000 की सब्सिडी मिलती है।<br><br>👉 <a href='/cmyuva' class='text-[#138D9E] underline font-bold'>CM YUVA पोर्टल और आवेदन प्रक्रिया देखें</a>";
      } else if (msg.includes('odop') || msg.includes('artisan') || msg.includes('ओडीओपी') || msg.includes('हस्तशिल्प')) {
        return "<strong>एक जनपद एक उत्पाद (ODOP)</strong> योजना यूपी के 75 जिलों के स्थानीय कारीगरों को ब्रांडिंग, स्किल ट्रेनिंग और एक्सपोर्ट सहायता प्रदान करती है।<br><br>👉 <a href='/odop' class='text-[#e06714] underline font-bold'>ODOP उत्पाद और कारीगर निर्देशिका देखें</a>";
      } else if (msg.includes('audit') || msg.includes('quality') || msg.includes('जांच') || msg.includes('गुणवत्ता')) {
        return "UPICON की <strong>तकनीकी गुणवत्ता अनुपालन</strong> शाखा ने यूपी की 1,200+ औद्योगिक इकाइयों का गुणवत्ता ऑडिट किया है।";
      } else if (msg.includes('contact') || msg.includes('phone') || msg.includes('संपर्क') || msg.includes('फोन')) {
        return "<strong>UPICON मुख्यालय:</strong><br>📍 कानपुर / लखनऊ, उत्तर प्रदेश<br>📞 हेल्पलाइन: +91-522-2286700<br>✉️ ईमेल: info@upicon.org.in";
      } else {
        return `धन्यवाद! आपका प्रश्न <em>"${userMsg}"</em> प्राप्त हो गया है। हमारी टीम जल्द ही आपसे संपर्क करेगी।<br><br>तत्काल सहायता के लिए <strong>+91-522-2286700</strong> पर कॉल करें।`;
      }
    } else {
      if (msg.includes('cmyuva') || msg.includes('cm yuva') || msg.includes('loan') || msg.includes('yuva')) {
        return "<strong>CM YUVA Scheme (Mukhya Mantri Yuva Udyami Vikas Abhiyan)</strong> provides collateral-free loans up to ₹5 Lakhs at 0% interest with ₹25,000 capital subsidy.<br><br>👉 <a href='/cmyuva' class='text-[#138D9E] underline font-bold'>View CM YUVA Portal & Flow</a>";
      } else if (msg.includes('odop') || msg.includes('artisan') || msg.includes('craft')) {
        return "<strong>One District One Product (ODOP)</strong> empowers local artisans across 75 UP districts with skill development & export support.<br><br>👉 <a href='/odop' class='text-[#e06714] underline font-bold'>Explore ODOP Directory</a>";
      } else if (msg.includes('audit') || msg.includes('quality')) {
        return "UPICON's <strong>Technical Quality Compliance</strong> wing has audited over 1,200+ industrial facilities across Uttar Pradesh.";
      } else if (msg.includes('contact') || msg.includes('phone') || msg.includes('address')) {
        return "<strong>UPICON Head Office:</strong><br>📍 Kanpur / Lucknow, UP<br>📞 Helpline: +91-522-2286700<br>✉️ Email: info@upicon.org.in";
      } else {
        return `Thank you! Your query regarding <em>"${userMsg}"</em> has been recorded. Our sovereign helpdesk representative will assist you.<br><br>Helpline: <strong>+91-522-2286700</strong>.`;
      }
    }
  };

  const handleSend = (textToSend) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { sender: 'user', text }]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botReply = getBotResponse(text);
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 700);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend();
  };

  const handleMic = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = lang === 'hi' ? 'hi-IN' : 'en-US';
      recognition.start();
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        handleSend(transcript);
      };
    } else {
      alert('Speech Recognition is not supported on this browser.');
    }
  };

  const handleSpeak = () => {
    const lastBotMsg = [...messages].reverse().find((m) => m.sender === 'bot');
    if (lastBotMsg && 'speechSynthesis' in window) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = lastBotMsg.text;
      const cleanText = tempDiv.innerText || tempDiv.textContent;
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <>
      {/* Chatbot Trigger Button (Bottom-Left) */}
      <div className="chatbot-trigger-container">
        <button
          aria-label="Open UPICON Mitra Chatbot"
          className="chatbot-trigger-btn group"
          id="chatbot-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <span className="bot-pulse-ring ring-1"></span>
          <span className="bot-pulse-ring ring-2"></span>

          <span className="absolute -top-1 -right-1 flex h-4 w-4 z-10">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d97706] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#d97706] border-2 border-white"></span>
          </span>
          <span className="material-symbols-outlined text-2xl bot-head-icon z-10">smart_toy</span>
        </button>

        {!isOpen && (
          <div
            className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs px-3.5 py-2 rounded-full shadow-lg border border-slate-700/80 animate-bounce cursor-pointer"
            id="chatbot-tooltip"
            onClick={() => setIsOpen(true)}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-semibold">UPICON Mitra AI</span>
          </div>
        )}
      </div>

      {/* Chatbot Screen Window */}
      <div className={`chatbot-window ${isOpen ? 'active' : ''}`} id="chatbot-screen">
        {/* Header */}
        <div className="chatbot-header">
          <div className="flex items-center gap-2.5">
            <div className="chatbot-header-avatar">
              <span className="material-symbols-outlined text-2xl">smart_toy</span>
            </div>
            <div>
              <h4 className="font-bold text-base tracking-wide text-white leading-tight">UPICON Mitra</h4>
              <p className="text-[11px] text-emerald-300 flex items-center gap-1 mt-0.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Online
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="chatbot-lang-toggle">
              <button
                className={`chatbot-lang-btn ${lang === 'en' ? 'active' : ''}`}
                id="chat-lang-en"
                onClick={() => handleLangChange('en')}
                type="button"
              >
                EN
              </button>
              <button
                className={`chatbot-lang-btn ${lang === 'hi' ? 'active' : ''}`}
                id="chat-lang-hi"
                onClick={() => handleLangChange('hi')}
                type="button"
              >
                हि
              </button>
            </div>
            <button
              aria-label="Close Chatbot"
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer border-0"
              id="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          </div>
        </div>

        {/* Chat Messages Thread Area */}
        <div className="chatbot-body" id="chatbot-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={msg.sender === 'user' ? 'flex items-end justify-end' : 'flex items-start gap-2.5'}
            >
              {msg.sender === 'user' ? (
                <div className="bg-[#138D9E] text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-xs leading-relaxed font-medium text-xs sm:text-sm">
                  {msg.text}
                </div>
              ) : (
                <div className="bg-white p-3.5 rounded-2xl rounded-tl-none border border-amber-200/60 shadow-xs max-w-[90%] space-y-2.5 text-slate-800 leading-relaxed text-xs sm:text-sm">
                  <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                  {msg.quickPills && (
                    <div className="pt-1 flex flex-wrap gap-1.5" id="chatbot-quick-options">
                      <button
                        className="chat-quick-btn px-2.5 py-1 rounded-full bg-amber-50 hover:bg-amber-100 text-brand-teal border border-amber-200 font-semibold transition-colors text-[11px] cursor-pointer"
                        onClick={() => handleSend('CM YUVA Scheme details')}
                        type="button"
                      >
                        ⚡ CM YUVA Scheme
                      </button>
                      <button
                        className="chat-quick-btn px-2.5 py-1 rounded-full bg-amber-50 hover:bg-amber-100 text-brand-orange border border-amber-200 font-semibold transition-colors text-[11px] cursor-pointer"
                        onClick={() => handleSend('ODOP Artisan Registration')}
                        type="button"
                      >
                        📦 ODOP Registration
                      </button>
                      <button
                        className="chat-quick-btn px-2.5 py-1 rounded-full bg-amber-50 hover:bg-amber-100 text-blue-700 border border-amber-200 font-semibold transition-colors text-[11px] cursor-pointer"
                        onClick={() => handleSend('Quality Audit Services')}
                        type="button"
                      >
                        📋 Technical Audits
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="px-4 py-2 bg-[#fbf9f4] flex items-center gap-2 text-[11px] text-slate-500 font-medium shrink-0">
              <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-bounce [animation-delay:0.4s]"></span>
              </div>
              <span>UPICON Mitra is typing...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Footer Bar */}
        <div className="chatbot-footer">
          <form className="chatbot-input-row" id="chatbot-form" onSubmit={handleSubmit}>
            <button
              className="chatbot-btn-circle chatbot-btn-white"
              id="chatbot-mic-btn"
              onClick={handleMic}
              title="Voice Input"
              type="button"
            >
              <span className="material-symbols-outlined text-lg">mic</span>
            </button>
            <input
              className="chatbot-input-field"
              id="chatbot-input"
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your question..."
              type="text"
              value={inputValue}
            />
            <button
              className="chatbot-btn-circle chatbot-btn-white"
              id="chatbot-speak-btn"
              onClick={handleSpeak}
              title="Text-to-Speech"
              type="button"
            >
              <span className="material-symbols-outlined text-lg">volume_up</span>
            </button>
            <button
              aria-label="Send message"
              className="chatbot-btn-circle chatbot-btn-orange"
              type="submit"
            >
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
