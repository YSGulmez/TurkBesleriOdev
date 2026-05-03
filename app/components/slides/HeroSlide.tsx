import React from "react";
import { motion } from "motion/react";
import flagImg from "../../../assets/images/flag.svg";
import ataturkImg from "../../../assets/images/ataturk.jpg";

export const HeroSlide = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center relative bg-[#050000] overflow-hidden">
      
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_#1a0505_0%,_#000000_100%)] opacity-100" />
      
      {/* Subtle Glowing Orb */}
      <div className="absolute top-[-15%] left-[-15%] w-[40%] h-[40%] bg-red-950/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Flag Motif (Highly transparent) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url(${flagImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "luminosity"
        }}
      />
      
      <div className="w-full md:w-1/2 p-12 md:p-24 z-10 flex flex-col justify-center h-full relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8">
            Yeni Bir Ulusun <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
              Sesini Yaratmak
            </span>
          </h1>
          
          <div className="border-l-2 border-red-500/50 pl-6 py-2 mb-8 bg-gradient-to-r from-white/[0.03] to-transparent rounded-r-2xl">
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
              Atatürk'ün Müzik Vizyonu, Türk Beşleri ve Çoksesli Türk Müziği
            </p>
          </div>
          
          <p className="text-lg text-white/90 leading-relaxed font-medium text-justify max-w-xl">
            Cumhuriyet'in ilanıyla birlikte girişilen kültür devriminin en kritik cephelerinden biri müzikti. Osmanlı İmparatorluğu'ndan devralınan yapı, modernleşme hedefleri doğrultusunda evrensel ve çoksesli bir forma taşınmalıydı. Bu sunum, Anadolu'nun binlerce yıllık yerel ezgilerini, Batı'nın senfonik formlarıyla harmanlayarak yepyeni bir "Türk Müziği" ekolü yaratan beş dahi bestecinin ve bu devrimin arkasındaki sarsılmaz iradenin hikayesidir.
          </p>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 h-1/2 md:h-full relative z-10 flex items-center justify-center p-12 lg:p-24">
         <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.15)] border border-white/20 group"
         >
             {/* Glassmorphism inner glow */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-white/10 z-20 pointer-events-none"></div>
             
             <img 
                src={ataturkImg} 
                alt="Mustafa Kemal Atatürk" 
                className="object-cover w-full h-full grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
             />
             
             <div className="absolute bottom-0 left-0 right-0 p-8 z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                 <div className="w-12 h-1 bg-red-600 rounded-full mb-4 opacity-80"></div>
                 <p className="text-white text-sm font-bold tracking-[0.2em] uppercase">Cumhuriyet Devrimi</p>
             </div>
         </motion.div>
      </div>
    </div>
  );
};