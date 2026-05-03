import flagImg from "../../../assets/images/flag.svg";
import React from "react";
import { motion } from "motion/react";

const events = [
  { year: "1924", title: "Musiki Muallim Mektebi", desc: "Ankara'da ilk müzik eğitimi kurumunun açılışı." },
  { year: "1932", title: "Halkevleri", desc: "Yerel ezgilerin derlenmeye başlaması." },
  { year: "1934", title: "İlk Türk Operası", desc: "Özsoy Operası'nın (Saygun) ilk temsili." },
  { year: "1936", title: "Ankara Konservatuvarı", desc: "Paul Hindemith'in gelişi ve kurumsallaşma." },
  { year: "1946", title: "Yunus Emre Oratoryosu", desc: "Türk müziğinin evrensel zirvesi." }
];

export const TimelineSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 bg-[#050000] text-white relative overflow-hidden">
      
      
      {/* Premium Background Model (Consistent with HeroSlide) */}
      <div className="absolute inset-0 z-0 bg-[#050000]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_#1a0505_0%,_#000000_100%)] opacity-100" />
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url(${flagImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "luminosity"
        }}
      />
      <div className="absolute bottom-[-15%] right-[-15%] w-[40%] h-[40%] bg-red-950/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[-15%] left-[-15%] w-[40%] h-[40%] bg-red-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-serif mb-6">Devrimin <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Kilometre Taşları</span></h2>
          <div className="flex items-center justify-center gap-4">
             <div className="h-[1px] w-12 bg-white/20"></div>
             <p className="text-neutral-400 font-light uppercase tracking-[0.4em] text-xs">Cumhuriyet Müzik Kronolojisi</p>
             <div className="h-[1px] w-12 bg-white/20"></div>
          </div>
        </motion.div>

        <div className="relative pt-12">
          {/* Main timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="relative flex flex-col items-center group"
              >
                {/* Year Bubble */}
                <div className="w-20 h-20 rounded-3xl bg-white/[0.03] backdrop-blur-3xl border border-white/20 flex flex-col items-center justify-center mb-8 relative z-10 group-hover:border-red-500/30 group-hover:bg-white/[0.03] transition-all duration-500 shadow-xl group-hover:-translate-y-2">
                  <span className="text-xl font-serif text-red-500 font-bold">{event.year}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
                </div>

                {/* Content Card */}
                <div className="bg-white/[0.03] backdrop-blur-3xl p-6 rounded-2xl border border-white/20 text-center group-hover:bg-white/[0.03] transition-colors duration-500 h-full w-full shadow-[0_20px_50px_rgba(0,0,0,1)]">
                  <h4 className="text-white font-bold text-xs mb-3 uppercase tracking-widest leading-tight h-8 flex items-center justify-center">{event.title}</h4>
                  <div className="w-8 h-[1px] bg-red-500/30 mx-auto mb-3"></div>
                  <p className="text-neutral-400 text-[11px] leading-relaxed font-medium">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
