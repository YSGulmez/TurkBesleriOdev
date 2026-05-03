import flagImg from "../../../assets/images/flag.svg";
import React from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

export const VisionSlide3 = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 md:p-24 relative overflow-hidden bg-[#050000] text-white">
      
      
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

      <div className="max-w-5xl w-full relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-16 relative"
        >
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-20">
            <Quote size={80} className="text-red-500" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-12 italic relative z-10">
            "Bir milletin yeni değişikliğinde ölçü, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 not-italic font-bold tracking-tight">musikide değişikliği alabilmesi,</span> <br/>
            kavrayabilmesidir."
          </h2>
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-red-500"></div>
            <p className="text-2xl text-white font-light tracking-[0.2em] uppercase italic">
              Mustafa Kemal Atatürk
            </p>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-red-500"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
        >
          <div className="group bg-white/[0.03] backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/20 hover:bg-white/[0.03] hover:border-red-500/30 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-t border-l border-white/20">
            <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border border-red-500/30 group-hover:scale-110 transition-transform">
              <span className="text-red-400 font-bold">01</span>
            </div>
            <h4 className="text-white text-xl font-bold mb-4 uppercase tracking-tighter">Milli Musiki Formülü</h4>
            <p className="text-neutral-200 leading-relaxed font-medium">
              "Osmanlı musikisi Avrupa'da tanınamazdı. Bizim gerçek musikimiz Anadolu halkından işitilebilir. Öz mûsikîmizi, en ileri tekniklerle işleyerek dünya seviyesine çıkarmak zorundayız."
            </p>
          </div>
          <div className="group bg-white/[0.03] backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/20 hover:bg-white/[0.03] hover:border-red-500/30 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-t border-l border-white/20">
            <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border border-red-500/30 group-hover:scale-110 transition-transform">
              <span className="text-red-400 font-bold">02</span>
            </div>
            <h4 className="text-white text-xl font-bold mb-4 uppercase tracking-tighter">Evrensel Hedef</h4>
            <p className="text-neutral-200 leading-relaxed font-medium">
              Atatürk'e göre müzik sadece bir eğlence değil, bir milletin çağdaşlık seviyesinin en somut göstergesiydi. Çokseslilik, bu yolda atılan en büyük adımdı.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
