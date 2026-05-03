import flagImg from "../../../assets/images/flag.svg";
import React from "react";
import { motion } from "motion/react";
import { Music, Flag, Star } from "lucide-react";
import ataturkImg from "../../../assets/images/ataturk.jpg";

const composersFocus = [
  { name: "Cemal Reşit Rey", contribution: "Çoksesliliğin İlk Tohumları & Makam Sentezi" },
  { name: "Hasan Ferit Alnar", contribution: "Klasik Türk Sazlarının Batı Orkestrasıyla Buluşması" },
  { name: "Ulvi Cemal Erkin", contribution: "Anadolu Aksak Ritimlerinin Senfonik Dile Aktarımı" },
  { name: "Ahmed Adnan Saygun", contribution: "Ulusal Opera ve Etnomüzikolojik Derlemeler" },
  { name: "Necil Kazım Akses", contribution: "Modern Senfonik Şiir ve Mikrotonalite" }
];

export const FocusSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden bg-[#050000] text-white">
      
      
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
      <div className="absolute top-[-15%] left-[-15%] w-[40%] h-[40%] bg-red-950/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-15%] w-[40%] h-[40%] bg-red-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10 flex flex-col h-full justify-between">
        
        {/* Header */}
        <div className="text-center mb-12">
            <motion.div
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="inline-flex items-center gap-3 px-6 py-2 bg-white/[0.03] backdrop-blur-3xl rounded-full border border-white/20 mb-6 shadow-xl"
            >
                <Flag className="text-red-500" size={16} />
                <span className="text-neutral-300 font-medium tracking-widest uppercase text-xs">Cumhuriyet'in Altın Kuşağı</span>
                <Star className="text-red-500" size={16} />
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6"
            >
                Atatürk'ün İzinde <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 italic">Beş Öncü</span>
            </motion.h2>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="bg-red-950/30 border border-red-500/20 px-6 py-2 inline-block rounded-2xl backdrop-blur-sm"
            >
                <p className="text-lg text-red-200 font-light tracking-wide">
                  "Müzik devrimi, Cumhuriyet devrimlerinin şahikasıdır."
                </p>
            </motion.div>
        </div>

        {/* Composers List & Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1">
            
            {/* Left Column: The 5 Composers */}
            <div className="lg:col-span-7 flex flex-col justify-center gap-4">
                {composersFocus.map((comp, idx) => (
                    <motion.div 
                        key={comp.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (idx * 0.1), duration: 0.5, ease: "easeOut" }}
                        className="group bg-white/[0.03] backdrop-blur-3xl p-5 rounded-2xl border border-white/20 flex items-center gap-5 hover:bg-white/[0.03] hover:border-red-500/30 transition-all duration-300 shadow-lg cursor-default"
                    >
                        <div className="w-10 h-10 rounded-full bg-red-950/50 border border-red-500/30 flex items-center justify-center shrink-0 group-hover:bg-red-600/20 transition-colors duration-300">
                            <span className="font-serif text-red-400 text-lg group-hover:text-red-300 transition-colors">{idx + 1}</span>
                        </div>
                        <div>
                            <h4 className="text-white font-serif text-lg tracking-wide mb-1">{comp.name}</h4>
                            <p className="text-xs text-neutral-200 font-medium">{comp.contribution}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Right Column: Mission */}
            <div className="lg:col-span-5">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                    className="bg-gradient-to-br from-neutral-900/80 to-black p-10 rounded-3xl border border-red-500/20 shadow-[0_0_40px_rgba(220,38,38,0.15)] relative overflow-hidden backdrop-blur-md"
                >
                    <Music className="absolute -top-8 -right-8 text-white/5" size={160} />
                    <h3 className="text-2xl font-serif text-red-400 mb-6 tracking-wide relative z-10">Türkçü Müzik Anlayışı</h3>
                    <p className="text-neutral-100 leading-relaxed text-sm font-medium mb-8 relative z-10 text-justify">
                        Amaç sadece Batı'yı taklit etmek değil; <span className="text-red-400 font-bold">Göktürklerden, Selçuklu'dan ve Anadolu'nun bin yıllık ezgilerinden</span> süzülen milli ruhu, çoksesli evrensel formlarla dünyaya zarifçe ulaştırmaktı.
                    </p>
                    <div className="space-y-5 relative z-10">
                        <div className="flex items-center gap-4 text-neutral-200 font-medium text-sm">
                            <div className="w-8 h-[1px] bg-red-500"></div>
                            <span>Halk türkülerinin derlenmesi</span>
                        </div>
                        <div className="flex items-center gap-4 text-neutral-200 font-medium text-sm">
                            <div className="w-8 h-[1px] bg-red-500"></div>
                            <span>Makamların çokseslendirilmesi</span>
                        </div>
                        <div className="flex items-center gap-4 text-neutral-200 font-medium text-sm">
                            <div className="w-8 h-[1px] bg-red-500"></div>
                            <span>Milli operaların yazılması</span>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
      </div>
    </div>
  );
};
