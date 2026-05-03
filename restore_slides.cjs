const fs = require('fs');
const basePath = 'd:/Projeler/src/app/components/slides';

const heroContent = `import React from "react";
import { motion } from "motion/react";

export const HeroSlide = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center relative bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-red-950 via-black to-neutral-900 opacity-80" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg')", backgroundSize: "cover", backgroundPosition: "center", mixBlendMode: "luminosity" }} />
      
      <div className="w-full md:w-1/2 p-12 md:p-24 z-10 flex flex-col justify-center h-full relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8">
            Yeni Bir Ulusun <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Sesini Yaratmak</span>
          </h1>
          <div className="border-l-2 border-red-500/50 pl-6 py-2 mb-8 bg-gradient-to-r from-white/[0.03] to-transparent rounded-r-2xl">
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
              Atatürk'ün Müzik Vizyonu, Türk Beşleri ve Çoksesli Türk Müziği
            </p>
          </div>
          <p className="text-lg text-neutral-400 leading-relaxed font-light text-justify max-w-xl">
            Cumhuriyet'in ilanıyla birlikte girişilen kültür devriminin en kritik cephelerinden biri müzikti. Osmanlı İmparatorluğu'ndan devralınan yapı, modernleşme hedefleri doğrultusunda evrensel ve çoksesli bir forma taşınmalıydı. Bu sunum, Anadolu'nun binlerce yıllık yerel ezgilerini, Batı'nın senfonik formlarıyla harmanlayarak yepyeni bir "Türk Müziği" ekolü yaratan beş dahi bestecinin ve bu devrimin arkasındaki sarsılmaz iradenin hikayesidir.
          </p>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 h-1/2 md:h-full relative z-10 flex items-center justify-center p-12 lg:p-24">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1, ease: "easeOut" }} className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.15)] border border-white/10 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-white/10 z-20 pointer-events-none"></div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Mustafa_Kemal_Atat%C3%BCrk_in_1923.jpg" alt="Mustafa Kemal Atatürk" className="object-cover w-full h-full grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out" />
          <div className="absolute bottom-0 left-0 right-0 p-8 z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <div className="w-12 h-1 bg-red-600 rounded-full mb-4 opacity-80"></div>
            <p className="text-white/90 text-sm font-medium tracking-[0.2em] uppercase">Cumhuriyet Devrimi</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};`;

const visionContent = `import React from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

export const VisionSlide = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 md:p-24 relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-bl from-neutral-900 via-black to-red-950/30 z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="lg:col-span-5 flex flex-col justify-center">
          <Quote size={56} className="text-red-500/50 mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8 text-white/90">
            "Bir ulusun yeni değişikliğinde ölçü, musikide değişikliği alabilmesi, kavrayabilmesidir."
          </h2>
          <div className="mb-10">
            <p className="text-xl text-red-400 font-light mb-1">Mustafa Kemal Atatürk</p>
            <p className="text-sm text-neutral-500 tracking-wider uppercase">1934, TBMM Açılış Konuşması</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-900"></div>
            <p className="text-neutral-300 leading-relaxed text-sm font-light">
              Atatürk'ün bu vizyonu, sadece sanatsal bir zevk meselesi değil, toplumsal bir mühendislik projesiydi. Ziya Gökalp'in fikirlerinden beslenen bu anlayış; Batı'nın klasik müzik tekniği ile Türk halk müziğinin özgün ezgi yapısının milliyetçi bir eksende, modern bir sentezde birleştirilmesini hedefliyordu.
            </p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="lg:col-span-7 flex flex-col gap-6 justify-center">
          <div className="group bg-neutral-900/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-red-500/30 hover:bg-neutral-800/50 transition-all duration-500">
            <h3 className="text-red-400 font-serif text-xl mb-3 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-red-400/50 inline-block"></span> Hedef: Milli Devrim
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed font-light pl-12">
              Sadece siyasi bağımsızlık değil, kültürel ve estetik bir devrim gerçekleştirmek esastı. Osmanlı'nın saray müziği halktan kopuk görülüyordu. Halkın gerçek müziği olan türkülerin, evrensel standartlarda yeniden işlenmesi gerekiyordu.
            </p>
          </div>
          <div className="group bg-neutral-900/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-red-500/30 hover:bg-neutral-800/50 transition-all duration-500">
            <h3 className="text-red-400 font-serif text-xl mb-3 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-red-400/50 inline-block"></span> Gereksinim: Yeni Bir Dil
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed font-light pl-12">
              Evrensel son müzik kurallarına göre işlenmiş, yüksek deyişleri anlatan ulusal bir müzik dili yaratılmalıydı. Bu dil, Anadolu'nun dağlarından Avrupa'nın konser salonlarına sarsılmaz bir köprü kuracaktı.
            </p>
          </div>
          <div className="group bg-gradient-to-br from-red-900/40 to-black p-8 rounded-3xl border border-red-500/20 shadow-[0_0_30px_rgba(220,38,38,0.1)] relative overflow-hidden">
            <div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/10 transition-colors duration-500"></div>
            <h3 className="text-white font-serif text-xl mb-3 flex items-center gap-4 relative z-10">
              <span className="w-8 h-[2px] bg-red-500 inline-block"></span> Yöntem: Sentez
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed font-light pl-12 relative z-10">
              Geleneksel Türk müziği özünün, çoksesli Batı müziği teknikleriyle (Senfoni, Opera, Konçerto) sentezlenmesi şarttı. Batı'yı olduğu gibi kopyalamak değil, kendi özümüzü Batı'nın bilimsel metodolojisiyle dünyaya sunmaktı.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};`;

const vision2Content = `import React from "react";
import { motion } from "motion/react";
import { Building2, GraduationCap, Users } from "lucide-react";

export const VisionSlide2 = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 md:p-24 relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-black z-0"></div>

      <div className="max-w-7xl w-full relative z-10 flex flex-col h-full justify-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-snug mb-4 text-white/90">
            Müzik Devriminin <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Kurumsal Adımları</span>
          </h2>
          <p className="text-lg text-neutral-400 font-light tracking-wide max-w-2xl mx-auto">
            Büyük vizyonun, akademik kurumlar ve devasa bir eğitim seferberliğiyle hayata geçişi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }} className="group bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 hover:border-red-500/30 hover:bg-white/10 transition-all duration-500 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-10 w-20 h-1 bg-gradient-to-r from-red-500 to-transparent"></div>
            <Building2 size={40} className="text-red-400 mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            <h3 className="text-xl font-serif text-white/90 mb-4 tracking-wide">Riyaset-i Cumhur Musiki Heyeti</h3>
            <p className="text-neutral-400 text-sm leading-relaxed font-light mb-4">
              1924 yılında Osmanlı'nın Mızıka-i Hümayun'u Ankara'ya taşınarak "Riyaset-i Cumhur Musiki Heyeti" adını aldı (Bugünkü Cumhurbaşkanlığı Senfoni Orkestrası).
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed font-light">
              Bu hamle, çoksesli müziğin doğrudan devletin en üst makamı tarafından korunup destekleneceğinin sembolik ilanıydı.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }} className="group bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 hover:border-red-500/30 hover:bg-white/10 transition-all duration-500 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-10 w-20 h-1 bg-gradient-to-r from-white/50 to-transparent"></div>
            <GraduationCap size={40} className="text-white/70 mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            <h3 className="text-xl font-serif text-white/90 mb-4 tracking-wide">Musiki Muallim Mektebi (1924)</h3>
            <p className="text-neutral-400 text-sm leading-relaxed font-light mb-4">
              Ankara'da kurulan bu okul, Cumhuriyet'in müzik öğretmeni ihtiyacını karşılamak için açıldı. 1936'da Ankara Devlet Konservatuvarı'na dönüştü.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed font-light">
              Paul Hindemith gibi dünyaca ünlü müzikologlar ve Carl Ebert gibi tiyatro adamları davet edilerek konservatuvarın bilimsel temelleri atıldı.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }} className="group bg-gradient-to-b from-red-900/40 to-neutral-900/40 backdrop-blur-md p-10 rounded-3xl border border-red-500/20 hover:border-red-500/50 transition-all duration-500 shadow-[0_0_30px_rgba(220,38,38,0.1)] relative overflow-hidden">
            <div className="absolute top-0 left-10 w-20 h-1 bg-gradient-to-r from-red-500 to-transparent"></div>
            <Users size={40} className="text-red-400 mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            <h3 className="text-xl font-serif text-white/90 mb-4 tracking-wide">Avrupa'ya Gönderilen Gençler</h3>
            <p className="text-neutral-300 text-sm leading-relaxed font-light mb-4">
              "Sizi birer kıvılcım olarak gönderiyorum, alevler olarak geri dönmelisiniz!" şiarıyla, 1925'ten itibaren yetenekli gençler devlet bursuyla Avrupa'ya gönderildi.
            </p>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              İşte "Türk Beşleri" olarak anılacak olan bu dehalar, aldıkları üst düzey batı formasyonuyla Türkiye'ye dönüp Cumhuriyet'in müzikal inşasını başlattılar.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};`;

fs.writeFileSync(basePath + '/HeroSlide.tsx', heroContent, 'utf8');
fs.writeFileSync(basePath + '/VisionSlide.tsx', visionContent, 'utf8');
fs.writeFileSync(basePath + '/VisionSlide2.tsx', vision2Content, 'utf8');
console.log('Wrote HeroSlide, VisionSlide, VisionSlide2');
