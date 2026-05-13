import flagImg from "../../../assets/images/flag.svg";
import React, { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";

const videos = [
  {
    id: "sn3m1AGSeyw",
    title: "Ulvi Cemal Erkin - Köçekçe (Olten Filarmoni - 18.04.2018)",
    description: "Şef: İbrahim Yazıcı | Ahmed Adnan Saygun Sanat Merkezi"
  },
  {
    id: "j5Y-3sFEVec",
    title: "A. Adnan Saygun - Yunus Emre Oratoryosu / Alto Arya",
    description: "Fazıl Say, piyano - Senem Demircioğlu, mezzosoprano"
  },
  {
    id: "kgW9Q3x5mtc",
    title: "Ferit Alnar Kanun Konçertosu 1.Bölüm:Moderato",
    description: "Ferit Alnar'ın 106.doğum yıldönümü anısına Kanun Konçertosu. Tahir AYDOĞDU - ÖZSOY KENTET"
  },
  {
    id: "iyvAy-b2afU",
    title: "Cemal Reşit Rey 'Lüküs Hayat' 3 Kasım 1992",
    description: "Sezai Altekin, Suna Pekuysal ve  Zihni Göktay İBB  Kültür Sanat Arşiv’inden 3 Kasım 1992 Cemal Reşit Rey Konser Salonu"
  },
  {
    id: "Wr584mfTcGs",
    title: "Necil Kazim Akses Moderato ",
    description: "Concerto for orchestra, Conductor - Rengim Gökmen"
  },
    {
    id: "XAYToESb1kA",
    title: "Özsoy Operası Cumuriyeti'in 101'inci Yılında Atatürk Kültür Merkezi'nde2",
    description: "Atatürk Kültür Merkezi."
  }
];

export const MediaSlide = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const currentVideo = videos[currentVideoIndex];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 bg-neutral-950 text-white relative overflow-hidden">
      
      
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

      <div className="max-w-6xl w-full relative z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white/90 mb-4 flex items-center justify-center gap-4">
              <PlayCircle className="text-red-500/80" size={40} /> 
              <span className="tracking-wide">Eserleri Dinleyin</span>
          </h2>
          <p className="text-red-400 font-light tracking-widest uppercase text-sm">Türk Beşleri Seçkisi</p>
        </motion.div>

        <motion.div 
          key={currentVideo.id} // Animate on video change
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-5xl rounded-3xl bg-white/[0.03] backdrop-blur-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/20"
        >
          {/* YouTube Embed Container */}
          <div className="relative aspect-video bg-[#050000]/80">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=0&rel=0`}
              title={currentVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* Playlist / Info Area */}
          <div className="p-8 bg-gradient-to-t from-black/80 to-transparent flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/15">
             <div className="text-center md:text-left flex-1">
               <h4 className="text-xl md:text-2xl font-serif text-white mb-2">{currentVideo.title}</h4>
               <p className="text-sm text-neutral-200 font-medium tracking-wide">{currentVideo.description}</p>
             </div>
             
             <div className="flex flex-col items-center gap-4 shrink-0">
               <div className="flex gap-4">
                 <button 
                    onClick={prevVideo}
                    className="group flex items-center justify-center w-16 h-16 rounded-full bg-[#050000]/20 hover:bg-[#050000]/40 border border-white/20 active:scale-90 transition-all duration-300"
                    aria-label="Önceki Eser"
                 >
                    <ChevronLeft size={28} className="text-white/70 group-hover:text-white" />
                 </button>
                 <button 
                    onClick={nextVideo}
                    className="group flex items-center justify-center w-16 h-16 rounded-full bg-red-600/20 hover:bg-red-600/40 border border-red-500/30 active:scale-90 transition-all duration-300"
                    aria-label="Sonraki Eser"
                 >
                    <ChevronRight size={28} className="text-red-400 group-hover:text-red-300" />
                 </button>
               </div>
               
               {/* Indicator Dots - Moved inside footer */}
               <div className="flex gap-3">
                   {videos.map((_, idx) => (
                       <button 
                         key={idx} 
                         onClick={() => setCurrentVideoIndex(idx)}
                         className={`h-2 rounded-full transition-all duration-500 ${idx === currentVideoIndex ? 'w-8 bg-red-500' : 'w-3 bg-white/20 hover:bg-white/40'}`}
                         aria-label={`Video ${idx + 1}`}
                       />
                   ))}
               </div>
             </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};
