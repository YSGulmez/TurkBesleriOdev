import flagImg from "../../../assets/images/flag.svg";
import React from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

export const VisionSlide = () => {
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
      <div className="absolute top-[-20%] left-[25%] w-[40%] h-[40%] bg-red-950/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[25%] w-[40%] h-[40%] bg-red-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <Quote size={56} className="text-red-500/50 mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8 text-white/90">
            "Bir ulusun yeni değişikliğinde ölçü, musikide değişikliği alabilmesi, kavrayabilmesidir."
          </h2>
          <div className="mb-10">
            <p className="text-xl text-red-400 font-light mb-1">
              Mustafa Kemal Atatürk
            </p>
            <p className="text-sm text-neutral-500 tracking-wider uppercase">1934, TBMM Açılış Konuşması</p>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-3xl rounded-2xl p-8 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-t border-l border-white/20 relative overflow-hidden">
             <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-900"></div>
             <p className="text-neutral-100 leading-relaxed text-sm font-medium">
                Atatürk'ün bu vizyonu, sadece sanatsal bir zevk meselesi değil, toplumsal bir mühendislik projesiydi. Ziya Gökalp'in fikirlerinden beslenen bu anlayış; Batı'nın klasik müzik tekniği ile Türk halk müziğinin özgün ezgi yapısının milliyetçi bir eksende, modern bir sentezde birleştirilmesini hedefliyordu.
             </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-6 justify-center"
        >
          {/* Card 1 */}
          <div className="group bg-white/[0.03] backdrop-blur-3xl p-8 rounded-3xl border border-white/20 hover:border-red-500/30 hover:bg-white/[0.03] transition-all duration-500 shadow-xl">
            <h3 className="text-red-400 font-bold text-xl mb-3 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-red-400/50 inline-block"></span> Hedef: Milli Devrim
            </h3>
            <p className="text-neutral-200 text-sm leading-relaxed font-medium pl-12">
              Sadece siyasi bağımsızlık değil, kültürel ve estetik bir devrim gerçekleştirmek esastı. Osmanlı'nın saray müziği halktan kopuk görülüyordu. Halkın gerçek müziği olan türkülerin, evrensel standartlarda yeniden işlenmesi gerekiyordu.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="group bg-white/[0.03] backdrop-blur-3xl p-8 rounded-3xl border border-white/20 hover:border-red-500/30 hover:bg-white/[0.03] transition-all duration-500 shadow-xl">
            <h3 className="text-red-400 font-bold text-xl mb-3 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-red-400/50 inline-block"></span> Gereksinim: Yeni Bir Dil
            </h3>
            <p className="text-neutral-200 text-sm leading-relaxed font-medium pl-12">
              Evrensel son müzik kurallarına göre işlenmiş, yüksek deyişleri anlatan ulusal bir müzik dili yaratılmalıydı. Bu dil, Anadolu'nun dağlarından Avrupa'nın konser salonlarına sarsılmaz bir köprü kuracaktı.
            </p>
          </div>

          {/* Card 3 - Highlighted */}
          <div className="group bg-gradient-to-br from-red-950/15 to-black p-8 rounded-3xl border border-red-500/20 shadow-[0_0_30px_rgba(220,38,38,0.1)] relative overflow-hidden">
            <div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/10 transition-colors duration-500"></div>
            <h3 className="text-white font-serif text-xl mb-3 flex items-center gap-4 relative z-10">
              <span className="w-8 h-[2px] bg-red-500 inline-block"></span> Yöntem: Sentez
            </h3>
            <p className="text-white text-sm leading-relaxed font-medium pl-12 relative z-10">
              Geleneksel Türk müziği özünün, çoksesli Batı müziği teknikleriyle (Senfoni, Opera, Konçerto) sentezlenmesi şarttı. Batı'yı olduğu gibi kopyalamak değil, kendi özümüzü Batı'nın bilimsel metodolojisiyle dünyaya sunmaktı.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};