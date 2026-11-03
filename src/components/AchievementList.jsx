import { useState } from "react";
import { useAchievements } from "../hooks/useData";

function AchievementList() {
  const { data: achievements = [], error } = useAchievements();
  
  // State untuk mengontrol apakah semua data ditampilkan atau dibatasi
  const [showAll, setShowAll] = useState(false);

  // Batasi 4 data pertama jika showAll bernilai false
  const visibleAchievements = showAll
    ? achievements
    : achievements.slice(0, 4);

  if (error) return <p className="text-red-500 text-center">Gagal memuat prestasi.</p>;

  return (
    <section>
      <div className="w-auto relative mx-4">
        {achievements.length > 0 ? (
          <>
            {/* Grid Layout 2 Kolom di Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visibleAchievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="p-5 rounded-2xl border-l-4 border-l-amber-500 border-y border-r border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base font-bold text-slate-800 mb-1">
                      {achievement.title}
                    </h3>
                    {achievement.description && (
                      <p className="text-xs font-medium text-slate-500 mb-3">
                        {achievement.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Tombol Lihat Selengkapnya (Hanya Muncul Jika Data > 4) */}
            {achievements.length > 4 && (
              <div className="text-center pt-4">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                >
                  {showAll
                    ? "▲ Tampilkan Lebih Sedikit"
                    : `▼ Lihat Selengkapnya (${achievements.length - 4} Lainnya)`}
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-center py-6 text-slate-400 text-xs">
            Belum ada data prestasi.
          </p>
        )}
      </div>
    </section>
  );
}

export default AchievementList;