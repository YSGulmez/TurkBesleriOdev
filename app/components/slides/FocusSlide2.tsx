import flagImg from "../../../assets/images/flag.svg";
import React from "react";
import { motion } from "motion/react";
import { BookOpen, Globe, PenTool } from "lucide-react";
import notebookImg from "../../../assets/images/notebook.png";

export const FocusSlide2 = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 relative bg-[#050000] text-white overflow-hidden">
      
      
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
        
        {/* Left Column: Image/Visual */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative rounded-3xl p-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_rgba(220,38,38,0.15)] transition-all duration-700"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                <img 
                    src={notebookImg} 
                    alt="Vintage Notebook" 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />
            </div>
            <div className="mt-8 px-4 pb-4">
                <div className="flex items-start gap-4">
                    <PenTool className="text-red-500/70 shrink-0 mt-1" size={20} />
                    <p className="text-sm text-neutral-300 font-light italic leading-relaxed">
                      "Halkın bağrından kopan nağmeler, bilimsel süzgeçten geçirilip senfonilere dökülmeliydi."
                    </p>
                </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
                 Sahada Müzikoloji: <br/> 
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Anadolu'nun Ses Haritası</span>
              </h2>
              <p className="text-lg text-neutral-400 font-light max-w-xl">
                 Türk Beşleri, sadece masa başında nota yazmadılar; aynı zamanda birer etnomüzikolog gibi Anadolu'yu karış karış gezdiler.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="bg-white/[0.03] backdrop-blur-3xl p-8 rounded-3xl border border-white/20 hover:bg-white/[0.03] hover:border-red-500/30 transition-all duration-500 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,1)]"
            >
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-red-500/50 group-hover:bg-red-500 transition-colors duration-500 rounded-r-full"></div>
              <h3 className="text-xl font-serif text-white/90 mb-4 flex items-center gap-3">
                 <BookOpen size={20} className="text-red-400" />
                 Béla Bartók ve Saygun (1936)
              </h3>
              <p className="text-neutral-200 leading-relaxed text-sm font-medium text-justify pl-4">
                1936 yılında efsanevi Macar besteci Béla Bartók, Türkiye'ye davet edildi. Ahmed Adnan Saygun ile birlikte Osmaniye civarında çadır çadır gezerek Yörük Türkmenlerinin türkülerini balmumu silindirlere kaydettiler. Bu araştırma, Türk halk müziğinin Macar müziği ile ortak köklere sahip olduğunu ve pentatonik (beş sesli) Asya özelliklerini barındırdığını tüm dünyaya bilimsel olarak kanıtladı.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="bg-gradient-to-br from-neutral-900 to-black p-8 rounded-3xl border border-white/15 hover:border-red-500/20 transition-all duration-500 relative overflow-hidden"
            >
              <Globe className="absolute -bottom-8 -right-8 text-white/5" size={140} />
              <h3 className="text-xl font-serif text-red-400 mb-4 relative z-10">Makamsal Yapının Çokseslendirilmesi</h3>
              <p className="text-neutral-100 leading-relaxed text-sm font-medium text-justify relative z-10">
                Batı müziğinin majör ve minör kalıpları, Türk müziğinin zengin makam sistemini ifade etmeye yetmiyordu. Türk Beşleri, bu çeyrek sesleri Batı enstrümanlarına uyarlamak için yeni armoni teknikleri geliştirdiler. Ulvi Cemal Erkin'in "Aksak" ritimleri kullanımı bunun en parlak örneğidir.
              </p>
            </motion.div>
        </div>

      </div>
    </div>
  );
};
