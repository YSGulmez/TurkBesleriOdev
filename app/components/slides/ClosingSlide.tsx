import flagImg from "../../../assets/images/flag.svg";
import React from "react";
import { motion } from "motion/react";
import { Heart, User } from "lucide-react";

export const ClosingSlide = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 md:p-24 relative overflow-hidden bg-black text-white">
      
      
      {/* Premium Background Model (Consistent with HeroSlide) */}
      <div className="absolute inset-0 z-0 bg-neutral-900" />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-red-900/40 via-neutral-900 to-black opacity-100" />
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url(${flagImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "luminosity"
        }}
      />
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-20 h-20 bg-red-600/20 border border-red-500/30 rounded-full flex items-center justify-center mb-12 mx-auto">
             <Heart className="text-red-500 fill-red-500/20" size={32} />
          </div>

          <h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight">Teşekkürler</h2>
          
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-12"></div>
          
          <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto mb-20 italic">
            "Musiki, hayatın neşesi, ruhu, sevinci ve her şeyidir."
          </p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center gap-4"
          >
             <div className="flex items-center gap-3 px-6 py-3 bg-white/[0.03] backdrop-blur-3xl border border-white/20 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-t border-l border-white/20">
                <User size={18} className="text-red-400" />
                <span className="text-neutral-400 text-sm uppercase tracking-[0.3em] font-bold">Hazırlayan:</span>
                <span className="text-white text-lg font-serif italic tracking-wide">Yusuf</span>
             </div>
             
             <p className="text-[10px] text-neutral-600 uppercase tracking-[0.5em] mt-8">
                © 2026 • Türk Beşleri Dijital Arşivi
             </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
