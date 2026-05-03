import flagImg from "../../../assets/images/flag.svg";
import React from "react";
import { motion } from "motion/react";
import { Building2, GraduationCap, Users } from "lucide-react";

export const VisionSlide2 = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 md:p-24 relative overflow-hidden bg-neutral-950 text-white">
      
      
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
      <div className="absolute top-[-15%] right-[-15%] w-[40%] h-[40%] bg-red-950/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-15%] w-[40%] h-[40%] bg-red-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10 flex flex-col h-full justify-center">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-snug mb-4 text-white/90">
            Müzik Devriminin <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Kurumsal Adımları</span>
          </h2>
          <p className="text-lg text-neutral-400 font-light tracking-wide max-w-2xl mx-auto">
            Büyük vizyonun, akademik kurumlar ve devasa bir eğitim seferberliğiyle hayata geçişi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
             className="group bg-white/[0.03] backdrop-blur-3xl p-10 rounded-3xl border border-white/20 hover:border-red-500/30 hover:bg-white/[0.03] transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-t border-l border-white/20 relative overflow-hidden"
          >
             <div className="absolute top-0 left-10 w-20 h-1 bg-gradient-to-r from-red-500 to-transparent"></div>
             <Building2 size={40} className="text-red-400 mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
             <h3 className="text-xl font-serif text-white/90 mb-4 tracking-wide">Riyaset-i Cumhur Musiki Heyeti</h3>
             <p className="text-neutral-200 text-sm leading-relaxed font-medium mb-4">
                1924 yılında Osmanlı'nın Mızıka-i Hümayun'u Ankara'ya taşınarak "Riyaset-i Cumhur Musiki Heyeti" adını aldı (Bugünkü Cumhurbaşkanlığı Senfoni Orkestrası).
             </p>
             <p className="text-neutral-200 text-sm leading-relaxed font-medium">
                Bu hamle, çoksesli müziğin doğrudan devletin en üst makamı tarafından korunup destekleneceğinin sembolik ilanıydı.
             </p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
             className="group bg-white/[0.03] backdrop-blur-3xl p-10 rounded-3xl border border-white/20 hover:border-red-500/30 hover:bg-white/[0.03] transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-t border-l border-white/20 relative overflow-hidden"
          >
             <div className="absolute top-0 left-10 w-20 h-1 bg-gradient-to-r from-white/50 to-transparent"></div>
             <GraduationCap size={40} className="text-white/70 mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
             <h3 className="text-xl font-serif text-white/90 mb-4 tracking-wide">Musiki Muallim Mektebi (1924)</h3>
             <p className="text-neutral-200 text-sm leading-relaxed font-medium mb-4">
                Ankara'da kurulan bu okul, Cumhuriyet'in müzik öğretmeni ihtiyacını karşılamak için açıldı. 1936'da Ankara Devlet Konservatuvarı'na dönüştü.
             </p>
             <p className="text-neutral-200 text-sm leading-relaxed font-medium">
                Paul Hindemith gibi dünyaca ünlü müzikologlar ve Carl Ebert gibi tiyatro adamları davet edilerek konservatuvarın bilimsel temelleri atıldı.
             </p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
             className="group bg-white/[0.03] from-red-950/15 to-neutral-900/40 backdrop-blur-3xl p-10 rounded-3xl border border-red-500/30 hover:border-red-500/30 hover:bg-white/[0.03] transition-all duration-500 shadow-[0_0_30px_rgba(220,38,38,0.1)] relative overflow-hidden"
          >
             <div className="absolute top-0 left-10 w-20 h-1 bg-gradient-to-r from-red-500 to-transparent"></div>
             <Users size={40} className="text-red-400 mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
             <h3 className="text-xl font-serif text-white/90 mb-4 tracking-wide">Avrupa'ya Gönderilen Gençler</h3>
             <p className="text-neutral-100 text-sm leading-relaxed font-medium mb-4">
                "Sizi birer kıvılcım olarak gönderiyorum, alevler olarak geri dönmelisiniz!" şiarıyla, 1925'ten itibaren yetenekli gençler devlet bursuyla Avrupa'ya gönderildi.
             </p>
             <p className="text-neutral-100 text-sm leading-relaxed font-medium">
                İşte "Türk Beşleri" olarak anılacak olan bu dehalar, aldıkları üst düzey batı formasyonuyla Türkiye'ye dönüp Cumhuriyet'in müzikal inşasını başlattılar.
             </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};