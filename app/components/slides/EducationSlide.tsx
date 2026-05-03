import flagImg from "../../../assets/images/flag.svg";
import React from "react";
import { motion } from "motion/react";
import { Landmark, GraduationCap, Library } from "lucide-react";

export const EducationSlide = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 md:p-16 relative bg-[#050000] text-white overflow-hidden">
      
      
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
      <div className="absolute top-[25%] left-[-20%] w-[40%] h-[40%] bg-red-950/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[25%] right-[-20%] w-[40%] h-[40%] bg-red-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 bg-red-600/10 border border-red-500/20 rounded-full text-red-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">
               Akademik Altyapı
            </div>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Geleceği <span className="text-red-500">İnşa Etmek</span></h2>
            <p className="text-xl text-neutral-300 mb-12 leading-relaxed font-medium">
              Türk Beşleri sadece beste yapmakla kalmadılar; Türkiye'nin müzik eğitim sistemini sıfırdan inşa ettiler.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: Landmark, title: "Ankara Devlet Konservatuvarı", year: "1936", desc: "Müzik devriminin en büyük akademik üssü." },
                { icon: GraduationCap, title: "Musiki Muallim Mektebi", year: "1924", desc: "Cumhuriyet'in ilk müzik öğretmeni ocağı." },
                { icon: Library, title: "Devlet Opera ve Balesi", year: "1940", desc: "Sahne sanatlarının profesyonel merkezi." }
              ].map((item, i) => (
                <div key={i} className="group flex gap-6 items-center p-6 bg-white/[0.03] backdrop-blur-3xl border border-white/20 rounded-3xl hover:bg-white/[0.03] hover:border-red-500/30 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,1)]">
                  <div className="w-14 h-14 rounded-2xl bg-[#050000] border border-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="text-red-500" size={28} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                       <h4 className="text-white font-bold text-lg">{item.title}</h4>
                       <span className="text-[10px] bg-red-600/20 text-red-400 px-2 py-0.5 rounded-full font-bold">{item.year}</span>
                    </div>
                    <p className="text-neutral-400 text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-red-600/10 blur-[100px] rounded-full"></div>
            <div className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/20 p-1 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-t border-l border-white/20 overflow-hidden">
               <div className="bg-[#050000]/80 rounded-[2.8rem] p-16 text-center border border-white/15">
                  <div className="w-20 h-20 bg-red-600 rounded-3xl mx-auto mb-10 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                     <GraduationCap size={40} className="text-white" />
                  </div>
                  <h3 className="text-7xl font-serif text-white mb-4">88 <span className="text-2xl align-top text-red-500">+</span></h3>
                  <p className="text-neutral-400 tracking-[0.4em] uppercase text-xs mb-10 font-bold">Yıllık Köklü Miras</p>
                  <p className="text-lg text-neutral-200 font-medium leading-relaxed italic">
                    "Bu kurumlar, bir milletin modern dünya ile aynı dili konuşacağının sarsılmaz kanıtıdır."
                  </p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
