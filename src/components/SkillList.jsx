import { useRef } from "react";
import { useSkills } from '../hooks/useData'; 
import SectionTitle from "./SectionTitle";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SiReact } from 'react-icons/si';

function SkillList() {
  const { data: skills = [] } = useSkills(); 
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section>
      <SectionTitle title="Skill" />

      {/* Pembungkus Utama dengan class 'relative' dan 'group' */}
      <div className="relative group">
        {/* Tombol Panah Kiri (Absolute - Ujung Kiri Tengah) */}
        {skills.length > 0 && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 p-2 text-slate-700 shadow-md backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-red-900 hover:text-white"
            aria-label="Geser Kiri"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}

        {/* Tombol Panah Kanan (Absolute - Ujung Kanan Tengah) */}
        {skills.length > 0 && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 p-2 text-slate-700 shadow-md backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-red-900 hover:text-white"
            aria-label="Geser Kanan"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        )}

        {/* Container Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 mx-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {skills.length > 0 ? (
            skills.map((s) => (
              <div
                key={s.id}
                className="w-40 h-48 flex-shrink-0 snap-start rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
              >
                <div className="flex flex-col items-center gap-3">
                  {/* Wadah Icon Kotak */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 border border-red-100">
                    {/* Icon dinamis dari API jika ada, atau fallback ke SiReact */}
                    {s.icon ? (
                      <img src={s.icon} alt={s.name} className="w-6 h-6 object-contain" />
                    ) : (
                      <SiReact className="w-6 h-6" />
                    )}
                  </div>

                  {/* Teks Judul & Kategori */}
                  <h3 className="text-base font-semibold text-slate-800 text-center truncate w-full">
                    {s.name}
                  </h3>
                  {s.category && (
                    <span className="mt-1 inline-block rounded-md bg-red-50 px-2 py-0.5 text-xs font-medium text-red-600">
                      {s.category}
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="w-full py-8 text-center text-slate-400 text-sm">
              Belum ada data skill.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SkillList;