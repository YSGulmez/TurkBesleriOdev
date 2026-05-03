import flagImg from "../../../assets/images/flag.svg";
import React from "react";
import { motion } from "motion/react";
import saygunImg from "../../../assets/images/saygun.jpg";
import aksesImg from "../../../assets/images/akses.jpg";

const composers = [
  {
    name: "Ahmed Adnan Saygun",
    city: "Paris Eğitimli",
    focus: "Etnomüzikoloji, Modal Yapı, Ulusal Opera",
    work: "Özsoy, Yunus Emre Oratoryosu",
    image: saygunImg,
    bio: "Türk müziğinin en uluslararası tanınırlığa sahip ismidir. 1936'da ünlü Macar besteci Béla Bartók ile Anadolu'da köy köy gezerek halk türkülerini derledi. 1934'te henüz 27 yaşındayken, Atatürk'ün bizzat verdiği sipariş üzerine İran Şahı'nın ziyareti için sadece 2 ayda Türkiye'nin ilk ulusal operası olan 'Özsoy'u besteledi."
  },
  {
    name: "Necil Kazım Akses",
    city: "Viyana ve Prag Eğitimli",
    focus: "Modern Senfonik Şiir ve Mikrotonalite",
    work: "Barış İçin Savaş, 50. Yıl Marşı",
    image: aksesImg,
    bio: "Grubun en genç ve modernist ismi olan Akses, müziğinde Viyana okulunun (özellikle Alban Berg'in) etkilerini taşır. Geleneksel Türk müziğindeki çeyrek sesleri (mikrotonalite) Batı çalgılarıyla ustalıkla harmanlamıştır. Sadece besteci değil, uzun yıllar Ankara Devlet Konservatuvarı müdürlüğü yaparak kurumun akademik temellerini sarsılmaz kılmıştır."
  }
];

export const ComposersSlide2 = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-[#050000] overflow-hidden text-white relative">
      
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
      <div className="absolute top-[-15%] right-[-15%] bottom-auto left-auto w-[40%] h-[40%] bg-red-950/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-15%] top-auto right-auto w-[40%] h-[40%] bg-red-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white/90 mb-4 tracking-wide">
            Türk Beşleri <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 font-light italic">(Bölüm II)</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Gelenekten evrensele uzanan köprünün iki dev sütunu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {composers.map((composer, index) => (
            <motion.div
              key={composer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              className="group bg-white/[0.03] backdrop-blur-3xl border border-white/20 rounded-3xl overflow-hidden flex flex-col h-full hover:border-red-500/30 hover:bg-white/[0.03] transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-t border-l border-white/20 relative"
            >
              {/* Subtle side glow */}
              <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="p-10 flex-1 flex flex-col relative z-10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-8">
                    <div className="w-32 h-32 rounded-full bg-[#050000] flex items-center justify-center overflow-hidden shrink-0 shadow-xl ring-2 ring-white/10 group-hover:ring-red-500/50 transition-all duration-500">
                       <img src={composer.image} alt={composer.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                    </div>
                    <div className="text-center sm:text-left pt-4">
                        <h3 className="font-serif text-3xl text-white/90 mb-2">{composer.name}</h3>
                        <p className="text-xs text-red-400 uppercase tracking-widest font-medium">{composer.city}</p>
                    </div>
                </div>
                
                <div className="mb-8 flex-1 flex flex-col">
                  <div className="bg-red-950/30 border border-red-500/20 px-5 py-2.5 rounded-xl mb-6 self-start">
                      <span className="text-red-300 text-xs font-medium uppercase tracking-wider">
                          {composer.focus}
                      </span>
                  </div>
                  <p className="text-base text-neutral-200 leading-relaxed font-medium text-justify">
                      {composer.bio}
                  </p>
                </div>

                <div className="pt-8 border-t border-white/15 mt-auto">
                  <p className="text-[10px] text-neutral-300 uppercase tracking-widest mb-2 font-bold">Öne Çıkan Eserleri</p>
                  <p className="text-base text-white font-bold">{composer.work}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
