import { useState, useRef } from "react";
import { useProjects } from '../hooks/useData'; // Sesuaikan jika ada hook khusus proyek, misal: useProjects
import SectionTitle from "./SectionTitle";
import { ArrowRight, ArrowLeft } from "lucide-react";
import myProjectImage from "../assets/kms.png";

function ProjectList() {
  const { data: projects = [] } = useProjects(); 
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  // Fungsi scroll ke slide spesifik
  const scrollTo = (index) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.clientWidth;
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  // Handler tombol panah Kiri
  const prevSlide = () => {
    const targetIndex =
      activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
    scrollTo(targetIndex);
  };

  // Handler tombol panah Kanan
  const nextSlide = () => {
    const targetIndex =
      activeIndex === projects.length - 1 ? 0 : activeIndex + 1;
    scrollTo(targetIndex);
  };

  // Sinkronisasi activeIndex saat di-swipe/scroll manual di HP
  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const index = Math.round(container.scrollLeft / container.clientWidth);
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  return (
    <section>
      <SectionTitle title="Proyek" />

      <div className="w-full relative">
        {/* 1. KONTAINER CARD PROYEK UTAMA */}
        <div className="relative w-auto mx-4 rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden group">
          {/* TRACK SLIDER PROYEK */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {projects.length > 0 ? (
              projects.map((p) => (
                <div
                  key={p.id}
                  className="w-full flex-shrink-0 snap-start grid grid-cols-1 md:grid-cols-12 min-h-[100px] overflow-hidden"
                >
                  {/* SISI KIRI: GAMBAR INSTANSI / MENU + GRADIENT FADING */}
                  <div className="relative md:col-span-7 h-64 md:h-full bg-red-100 flex items-center justify-center overflow-hidden">
                    {/* Gambar / Icon langsung di-fade */}
                    <img 
                      src={p.image || myProjectImage} 
                      alt={p.title}
                      className="w-full h-full object-contain bg-red-500 text-white [mask-image:linear-gradient(to_bottom,black_60%,transparent)] md:[mask-image:linear-gradient(to_right,black_60%,transparent)]" 
                    />
                  </div>

                  {/* SISI KANAN: TEKS PROYEK */}
                  <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-white z-10">
                    <div>
                      {/* Judul Proyek */}
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
                        {p.title}
                      </h3>

                      {/* Deskripsi Singkat */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                        {p.description}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {Array.isArray(p.tech_stack) 
                          ? p.tech_stack.map((tech, idx) => (
                              <span key={idx} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md">
                                {tech}
                              </span>
                            ))
                          : p.tech_stack}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full py-12 text-center text-slate-400 text-sm">
                Belum ada data proyek.
              </div>
            )}
          </div>

          {/* 2. TOMBOL PANAH NAVIGASI (KIRI & KANAN) */}
          {projects.length > 1 && (
            <>
              {/* Panah Kiri */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/80 hover:bg-white text-slate-700 shadow-md backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
                aria-label="Proyek Sebelumnya"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Panah Kanan */}
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/80 hover:bg-white text-slate-700 shadow-md backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
                aria-label="Proyek Selanjutnya"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* 3. INDIKATOR TITIK (. . . .) DI BAWAH CARD */}
        {projects.length > 1 && (
          <div className="flex justify-center items-center gap-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-red-600" // AKTIF: Memanjang & Berwarna Merah
                    : "w-2.5 bg-slate-300 hover:bg-slate-400" // INAKTIF: Titik Bulat Biasa
                }`}
                aria-label={`Ke slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectList;