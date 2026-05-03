import flagImg from "../../../assets/images/flag.svg";
import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Landmark, Music4 } from "lucide-react";

export const LegacySlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 bg-[#050505] text-white relative overflow-hidden">
        
      
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
      <div className="absolute top-[25%] right-[-20%] w-[40%] h-[40%] bg-red-950/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[25%] left-[-20%] w-[40%] h-[40%] bg-red-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10 flex flex-col items-center">
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center mb-16"
        >
            <div className="inline-block px-6 py-2 rounded-full border border-white/20 bg-[#050000]/20 backdrop-blur-md mb-6">
                <p className="text-xs text-red-400 uppercase tracking-[0.2em] font-medium">Atatürk'ün Müzik Devrimi</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white/90 mb-6 leading-tight">
              Kalıcı Bir Miras: <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Özünden Evrensele</span>
            </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="group bg-white/[0.03] backdrop-blur-3xl p-10 rounded-3xl border border-white/20 hover:border-red-500/30 hover:bg-white/[0.03] transition-all duration-500 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,1)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#050000]/50 flex items-center justify-center mb-8 border border-white/20 group-hover:border-red-500/30 transition-colors">
                  <Landmark className="text-red-400/80 group-hover:text-red-400 transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-serif text-white mb-4 tracking-wide">Kurumsal Temeller</h3>
              <p className="text-neutral-200 text-sm leading-relaxed text-justify font-medium">
                Türk Beşleri'nin mirası sadece notalardan ibaret değildir. Onlar, Ankara Devlet Konservatuvarı, CSO'nun modernizasyonu, Devlet Opera ve Balesi gibi Cumhuriyet'in devasa sanat kurumlarının sarsılmaz kurucu babaları oldular.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="group bg-white/[0.03] backdrop-blur-3xl p-10 rounded-3xl border border-white/20 hover:border-red-500/30 hover:bg-white/[0.03] transition-all duration-500 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,1)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#050000]/50 flex items-center justify-center mb-8 border border-white/20 group-hover:border-red-500/30 transition-colors">
                  <GraduationCap className="text-white/60 group-hover:text-red-400 transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-serif text-white mb-4 tracking-wide">Yetiştirilen Nesiller</h3>
              <p className="text-neutral-200 text-sm leading-relaxed text-justify font-medium">
                Kendilerinden sonra gelen "İkinci Kuşak" devleri bizzat yetiştirdiler. Bu dehaların öğrencileri, bugün dünyanın dört bir yanındaki orkestralarda şeflik yapıyor ve çağdaş Türk müziğini yeni boyutlara taşıyor.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="group bg-white/[0.03] from-red-900/30 to-black backdrop-blur-3xl p-10 rounded-3xl border border-red-500/30 shadow-[0_0_40px_rgba(220,38,38,0.1)] flex flex-col relative overflow-hidden"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-950/50 flex items-center justify-center mb-8 border border-red-500/30 relative z-10">
                  <Music4 className="text-red-400" size={32} />
              </div>
              <h3 className="text-xl font-serif text-white/90 mb-4 tracking-wide relative z-10">Tarihi Başarı</h3>
              <p className="text-red-300 text-sm leading-relaxed text-justify relative z-10 mb-6 font-medium italic">
                "Evrenselliğe giden yol, kişinin kendi en derin yerel köklerinde ustalaşmasından geçer." 
              </p>
              <p className="text-neutral-200 text-sm leading-relaxed text-justify relative z-10 font-medium mt-auto border-t border-white/20 pt-6">
                Atatürk'ün devrim vizyonu başarıya ulaşmıştır. Türk Beşleri, Anadolu'ruhunu evrensel bir dille harmanlayarak dünya kültür mirasına yepyeni bir ses hediye etmiştir.
              </p>
            </motion.div>
        </div>
      </div>
    </div>
  );
};
