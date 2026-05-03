import flagImg from "../../../assets/images/flag.svg";
import React from "react";
import { motion } from "motion/react";
import reyImg from "../../../assets/images/rey.jpg";
import alnarImg from "../../../assets/images/alnar.jpg";
import erkinImg from "../../../assets/images/erkin.jpg";

const composers = [
  {
    name: "Cemal Reşit Rey",
    city: "Paris Eğitimli",
    focus: "Türk Halk Ezgileri ve Makam Sentezi",
    work: "Onuncu Yıl Marşı, Lüküs Hayat",
    image: reyImg,
    bio: "Gruptaki besteciler arasında en yaşlısı olan Rey, eğitimini Paris'te Gabriel Fauré'nin okulunda aldı. Türkiye'ye döndükten sonra İstanbul Şehir Orkestrası'nı kurdu. Batı klasik müziği ile makamsal yapıyı başarıyla sentezleyen Rey, Lüküs Hayat gibi popüler operetlerle çoksesli müziği sevdiren ilk isimlerden oldu."
  },
  {
    name: "Hasan Ferit Alnar",
    city: "Viyana Eğitimli",
    focus: "Geleneksel Sazların Senfonik Kullanımı",
    work: "Kanun Konçertosu, İstanbul Süiti",
    image: alnarImg,
    bio: "Geleneksel Türk müziğinden (kanun virtüözlüğünden) gelerek klasik Batı müziğine yönelen tek isimdir. Bu benzersiz geçmişi, Klasik Türk sazlarını (Kanun) ilk kez dev bir senfoni orkestrası ile aynı sahneye, bir konçerto formu içinde yerleştirme cesareti vermiştir. 1951 tarihli Kanun Konçertosu eşsiz bir örnektir."
  },
  {
    name: "Ulvi Cemal Erkin",
    city: "Paris Eğitimli",
    focus: "Aksak Ritimlerin Senfonik İşlenişi",
    work: "Köçekçe, Keman Konçertosu",
    image: erkinImg,
    bio: "Eserlerinde Anadolu halk oyunlarının o kendine has 'aksak' ritimlerini, son derece canlı ve renkli bir senfonik orkestrasyonla birleştirir. En ünlü eseri 'Köçekçe', Karadeniz ve Orta Anadolu motiflerinin virtüöz bir orkestra yazısıyla harmanlandığı bir şaheserdir."
  }
];

export const ComposersSlide = () => {
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
      <div className="absolute bottom-[-20%] left-[25%] w-[40%] h-[40%] bg-red-950/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[-20%] right-[25%] w-[40%] h-[40%] bg-red-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white/90 mb-4 tracking-wide">
            Türk Beşleri <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 font-light italic">(Bölüm I)</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Avrupa'nın önde gelen akademilerinde yoğrulan ve döndüklerinde kendi toprağının sesini dünyaya duyuran kurucu kuşak.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {composers.map((composer, index) => (
            <motion.div
              key={composer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              className="group bg-white/[0.03] backdrop-blur-3xl border border-white/20 rounded-3xl overflow-hidden flex flex-col h-full hover:border-red-500/30 hover:bg-white/[0.03] transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-t border-l border-white/20 relative"
            >
              {/* Subtle top glow */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="p-8 flex-1 flex flex-col relative z-10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                    <div className="w-24 h-24 rounded-full bg-[#050000] flex items-center justify-center overflow-hidden shrink-0 shadow-lg ring-2 ring-white/10 group-hover:ring-red-500/50 transition-all duration-500">
                       <img src={composer.image} alt={composer.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                    </div>
                    <div className="text-center sm:text-left pt-2">
                        <h3 className="font-serif text-2xl text-white/90 mb-1">{composer.name}</h3>
                        <p className="text-xs text-red-400 uppercase tracking-widest font-medium">{composer.city}</p>
                    </div>
                </div>
                
                <div className="mb-6 flex-1 flex flex-col">
                  <div className="bg-red-950/30 border border-red-500/20 px-4 py-2 rounded-xl mb-4 self-start">
                      <span className="text-red-300 text-xs font-medium uppercase tracking-wider">
                          {composer.focus}
                      </span>
                  </div>
                  <p className="text-sm text-neutral-200 leading-relaxed font-medium text-justify">
                      {composer.bio}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/15 mt-auto">
                  <p className="text-[10px] text-neutral-300 uppercase tracking-widest mb-1 font-bold">Öne Çıkan Eserleri</p>
                  <p className="text-sm text-white font-bold">{composer.work}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
