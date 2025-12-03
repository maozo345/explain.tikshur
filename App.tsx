import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Eye, 
  Sparkles, 
  Lightbulb, 
  Music, 
  Brain, 
  ChevronDown, 
  CheckCircle2,
  Users,
  Feather,
  Star,
  ArrowDown,
  X
} from 'lucide-react';
import { Section } from './components/Section';
import { VideoPlayer } from './components/VideoPlayer';
import { CTAButton } from './components/Button';
import { FAQItem } from './types';

// Calendly Modal Component
const CalendlyModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        // Cleanup script if needed, though usually fine to leave or manage carefully
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-deep-950/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl bg-white rounded-xl overflow-hidden shadow-2xl h-[85vh]">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-50 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800 transition-colors shadow-md"
        >
          <X size={24} />
        </button>
        <div 
          className="calendly-inline-widget w-full h-full" 
          data-url="https://calendly.com/habaitharochni/new-meeting-1" 
          style={{ minWidth: '320px', height: '100%' }} 
        />
      </div>
    </div>
  );
};

function App() {
  const [showSticky, setShowSticky] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCalendly = () => setShowCalendly(true);

  const faqs: FAQItem[] = [
    { question: "האם צריך ניסיון קודם?", answer: "לא. זה בנוי במיוחד למתחילות ולמי שרוצה לעשות את הצעדים הראשונים בביטחון." },
    { question: "מה אם אני לא מצליחה?", answer: "כולן מצליחות עם תרגול נכון, הקשבה והכוונה מדויקת." },
    { question: "האם זה מפחיד?", answer: "ממש לא. התהליך נעשה באור, באהבה ובהגנה. זה מרגיש כמו שקט עמוק וחזרה הביתה." },
    { question: "כמה זמן עד שרואים תוצאות?", answer: "ברוב המקרים משתתפות חוות חיבור ותקשור כבר מהמפגש הראשון." }
  ];

  return (
    <div className="min-h-screen font-sans text-white pb-24 overflow-x-hidden bg-deep-950">
      
      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Glow */}
        <div className="absolute top-0 left-0 right-0 h-[800px] bg-hero-glow opacity-60"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-spiritual-700/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] animate-float-delayed"></div>
        
        {/* Stars/Dust (simulated) */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-8 md:pt-24 md:pb-12 text-center">
          
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-deep-800/50 border border-spiritual-500/30 text-spiritual-200 text-sm font-medium mb-8 backdrop-blur-md animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>וובינר תקשור - הצעד הראשון אל עולם הידיעה הפנימית</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold leading-[1.1] pb-6 mb-2">
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">לחזור אל מה</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-spiritual-300 via-white to-spiritual-300 text-glow">שתמיד היה שלך</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-spiritual-100/80 font-light max-w-3xl mx-auto leading-relaxed mb-10">
            בוובינר הזה תגלי איך תקשור הוא יכולת טבעית שנמצאת בתוכך כבר עכשיו<br className="hidden md:block" />
            ואיך לגשת אליה בצורה יציבה, רגועה וברורה.
          </p>

          <div className="flex justify-center mb-16">
             <CTAButton onClick={openCalendly} className="text-lg md:text-xl py-5 px-10" />
          </div>

          {/* Video 1: Intro */}
          <div className="max-w-5xl mx-auto relative group">
             {/* Glow behind video */}
             <div className="absolute -inset-1 bg-gradient-to-r from-spiritual-600 via-gold-500/30 to-spiritual-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000"></div>
             
             <div className="relative p-1 rounded-2xl bg-deep-900 shadow-2xl">
                <VideoPlayer 
                  src="https://player.vimeo.com/video/1143137311?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1" 
                  title="הכשרת תקשור עם אביב אפרת 1" 
                />
             </div>
             
             <p className="mt-6 text-spiritual-200 font-medium text-lg flex items-center justify-center gap-2 opacity-80">
                צפו בפתיח וחוו את האנרגיה של התקשור כבר מהרגע הראשון
                <ArrowDown className="w-4 h-4 text-gold-400 animate-bounce" />
             </p>
          </div>
        </div>
      </div>

      {/* For Whom Section */}
      <Section className="relative">
        <div className="glass-card-dark rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-spiritual-500 to-transparent opacity-50"></div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">למי ההדרכה מתאימה?</h2>
            <p className="text-lg text-spiritual-200/70">האם את מזהה את עצמך באחד מהסעיפים?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { text: "למי שמרגישה אינטואיציה חזקה ורוצה להבין אותה", icon: Eye },
              { text: "למי שמרגישה עומק פנימי שלא מקבל מקום", icon: Heart },
              { text: "למטפלות שרוצות להרחיב את סל הכלים", icon: Users },
              { text: "למי ששואלת שאלות פנימיות ורוצה בהירות", icon: Lightbulb },
              { text: "למי שמרגישה שזה הזמן שלה להתחבר לעצמה", icon: Star },
              { text: "למי שרוצה לדעת לתקשר בביטחון מלא", icon: CheckCircle2 },
            ].map((item, idx) => (
              <div key={idx} className="group p-6 bg-deep-800/40 hover:bg-deep-800/80 rounded-2xl border border-white/5 hover:border-spiritual-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(145,53,224,0.15)] hover:-translate-y-1">
                <div className="w-12 h-12 bg-deep-900 group-hover:bg-spiritual-900 rounded-full flex items-center justify-center text-spiritual-300 group-hover:text-gold-400 mb-4 transition-colors border border-white/10">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-100 leading-snug">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Video 2: Deep Observation */}
      <Section darker className="text-center">
        <h3 className="text-2xl md:text-3xl font-serif text-spiritual-100 mb-8 font-medium">
          התבוננות עמוקה בדרך שבה מתחילים לתקשר
        </h3>
        <VideoPlayer 
          src="https://player.vimeo.com/video/1143137188?badge=0&autopause=0&player_id=0&app_id=58479" 
          title="הכשרת תקשור עם אביב אפרת 2" 
        />
      </Section>

      {/* What You Will Learn */}
      <Section>
        <div className="bg-gradient-to-br from-deep-800 to-deep-900 p-8 md:p-12 rounded-[2rem] shadow-2xl border border-white/10 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-spiritual-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="absolute -top-6 -right-6 text-white/5 rotate-12">
            <Feather size={150} strokeWidth={1} />
          </div>
          
          <div className="relative z-10 md:flex md:items-start md:gap-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
                 מה תלמדי<br/>בוובינר?
               </h2>
               <div className="w-20 h-1.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mb-6"></div>
               <p className="text-spiritual-200 text-lg">כלים מעשיים ותובנות שישנו את הדרך שבה את מקשיבה לקול הפנימי שלך.</p>
            </div>

            <div className="md:w-2/3">
              <ul className="space-y-6">
                {[
                  "איך להיכנס למצב תודעתי שבו תקשור נהיה ברור",
                  "איך להבדיל בין מחשבה לבין מסר אמיתי",
                  "כיצד לתרגל תקשור גם בלי ניסיון",
                  "הטעות שמונעת מאנשים לתקשר",
                  "תרגיל קצר שמראה שהיכולת קיימת בך"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-spiritual-600 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(169,96,238,0.5)] mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xl text-gray-100 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Video 3: Synchronicity */}
      <Section darker className="text-center">
         <h3 className="text-2xl md:text-3xl font-serif text-spiritual-100 mb-8 font-medium">הבנה דרך סינכרונים אנרגטיים</h3>
         <VideoPlayer 
            src="https://player.vimeo.com/video/1143141484?badge=0&autopause=0&player_id=0&app_id=58479" 
            title="5 סינכרונים" 
          />
      </Section>

      {/* Inspirational Text */}
      <Section className="py-24">
        <div className="relative max-w-4xl mx-auto text-center px-6">
           {/* Center glow */}
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-spiritual-600/20 blur-[100px] rounded-full -z-10"></div>
           
           <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-lg">
             תקשור הוא שפה פנימית
           </h3>
           <div className="text-xl md:text-3xl text-spiritual-100 space-y-4 font-light leading-relaxed">
             <p>הוא לא שמור ליחידי סגולה.</p>
             <p className="font-medium text-gold-400">הוא נמצא בכולנו.</p>
             <p>הרגע שבו מישהו מראה לך את הדרך<br/>הוא הרגע שבו משהו נפתח.</p>
           </div>
        </div>
      </Section>

      {/* Video 4: Dreams */}
      <Section darker className="text-center">
         <div className="inline-flex items-center justify-center p-4 bg-deep-800 rounded-full text-spiritual-300 mb-6 shadow-lg border border-spiritual-500/20">
            <Brain className="w-8 h-8" />
         </div>
         <h3 className="text-2xl md:text-3xl font-serif text-spiritual-100 mb-8 font-medium">תובנות דרך חלומות</h3>
         <VideoPlayer 
            src="https://player.vimeo.com/video/1143146785?badge=0&autopause=0&player_id=0&app_id=58479" 
            title="1- חלומות" 
          />
      </Section>

      {/* After the Webinar */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">מה קורה אחרי הוובינר?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {/* Step 1 */}
           <div className="glass-card-dark p-8 rounded-[2rem] text-center hover:bg-deep-800/80 transition-all relative z-10 group">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform cursor-default filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">🚀</div>
              <h4 className="text-xl font-bold text-white mb-3">המשך המסע</h4>
              <p className="text-spiritual-200 leading-relaxed">תוכלי להצטרף למסע של תשעה מפגשי עומק מרתקים</p>
           </div>

           {/* Step 2 - Highlighted */}
           <div className="bg-gradient-to-b from-spiritual-900 to-deep-900 p-8 rounded-[2rem] shadow-[0_0_30px_rgba(120,50,200,0.3)] text-center text-white transform md:-translate-y-6 relative z-20 border border-spiritual-500/30">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent rounded-[2rem] pointer-events-none"></div>
              <div className="text-6xl mb-6 transform hover:scale-110 transition-transform cursor-default filter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">🧘‍♀️</div>
              <h4 className="text-xl font-bold mb-3 text-gold-300">תרגול מעשי</h4>
              <p className="text-gray-200 leading-relaxed">בכל מפגש נכנסים למצב תודעתי עמוק, מתרגלים עם שותפה ומעבירים מסרים</p>
           </div>

           {/* Step 3 */}
           <div className="glass-card-dark p-8 rounded-[2rem] text-center hover:bg-deep-800/80 transition-all relative z-10 group">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform cursor-default filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">✨</div>
              <h4 className="text-xl font-bold text-white mb-3">תוצאות מהירות</h4>
              <p className="text-spiritual-200 leading-relaxed">רוב המשתתפות מתחילות לתקשר כבר במפגש הראשון או השני</p>
           </div>
        </div>
      </Section>

      {/* Video 5: Sounds */}
      <Section darker className="text-center">
         <div className="inline-flex items-center justify-center p-4 bg-deep-800 rounded-full text-spiritual-300 mb-6 shadow-lg border border-spiritual-500/20">
            <Music className="w-8 h-8" />
         </div>
         <h3 className="text-2xl md:text-3xl font-serif text-spiritual-100 mb-8 font-medium">הבנה דרך צלילים ומוזיקה</h3>
         <VideoPlayer 
            src="https://player.vimeo.com/video/1143146491?badge=0&autopause=0&player_id=0&app_id=58479" 
            title="2 צלילים ומוזיקה" 
          />
      </Section>

      {/* Results / Testimonials */}
      <Section>
        <div className="glass-card-dark rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
          {/* Subtle colored blobs */}
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-spiritual-600 rounded-full blur-[80px] opacity-40"></div>
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-600 rounded-full blur-[80px] opacity-40"></div>
          
          <Feather className="w-12 h-12 text-gold-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">תוצאות של משתתפות</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               "בהירות פנימית חדשה", 
               "פתיחה אנרגטית ברורה", 
               "חיבור לקלפים ולמסרים", 
               "תחושת ביטחון וחיבור ללב"
             ].map((text, i) => (
               <div key={i} className="p-6 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 shadow-lg flex items-center justify-center min-h-[100px] transition-all">
                 <p className="text-lg font-medium text-spiritual-100">{text}</p>
               </div>
             ))}
          </div>
        </div>
      </Section>

      {/* Video 6: YouTube - Fixed */}
      <Section darker className="text-center">
         <h3 className="text-2xl md:text-3xl font-serif text-spiritual-100 mb-8 font-medium">דוגמה נוספת לחיבור רוחני</h3>
         <VideoPlayer 
            src="https://www.youtube.com/embed/ZXSiDk6It4w" 
            title="דוגמה נוספת לחיבור רוחני" 
            isYouTube
          />
      </Section>

      {/* FAQ */}
      <Section className="mb-20">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white text-center mb-12">שאלות נפוצות</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-deep-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/5 hover:border-gold-500/30 transition-all">
              <h3 className="text-xl font-bold text-spiritual-100 mb-3 flex items-start gap-3">
                <span className="text-gold-400 mt-1">
                  <Lightbulb size={20} />
                </span> 
                {faq.question}
              </h3>
              <p className="text-gray-400 leading-relaxed pr-8">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="text-center pb-32 md:pb-40 relative">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">
            הגיע הזמן שלך<br/>להתחבר פנימה.
          </h2>
          <CTAButton onClick={openCalendly} className="text-xl py-5 px-12" />
          <p className="mt-12 text-sm text-gray-500">© {new Date().getFullYear()} אביב אפרת. כל הזכויות שמורות.</p>
        </div>
      </footer>

      {/* Sticky Bottom CTA */}
      <div 
        className={`
          fixed bottom-0 left-0 right-0 p-4 bg-deep-900/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.5)] z-50 transition-all duration-500 transform
          ${showSticky ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
        `}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="text-white font-bold text-lg">וובינר תקשור - הצעד הראשון שלך</p>
            <p className="text-gray-400 text-sm">הצטרפי למאות נשים שכבר גילו את הכוח הפנימי</p>
          </div>
          <CTAButton fullWidth onClick={openCalendly} className="sm:w-auto py-3 px-8 text-base !shadow-none !m-0" text="תיאום שיחת הכרות" />
        </div>
      </div>

    </div>
  );
}

export default App;