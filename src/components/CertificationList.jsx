import { useState } from "react";
import { useCertifications } from "../hooks/useData";

function CertificationList() {
  const { data: certifications } = useCertifications();
  const [showAll, setShowAll] = useState(false);

  // Ambil 4 data pertama jika showAll masih false
  const visibleCertifications = showAll
    ? certifications
    : certifications.slice(0, 4);

  return (
    <section>
      <div className="w-auto relative mx-4">
        {certifications.length > 0 ? (
          <>
            {/* Grid Layout 2 Kolom di Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visibleCertifications.map((certification) => (
                <div
                  key={certification.id}
                  className="p-5 rounded-2xl border-l-4 border-l-amber-500 border-y border-r border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <h3 className="text-base font-bold text-slate-800 mb-1">
                    {certification.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mb-3">
                    {certification.issuer}
                  </p>
                </div>
              ))}
            </div>

            {/* Tombol Lihat Selengkapnya (Hanya Muncul Jika Data > 4) */}
            {certifications.length > 4 && (
              <div className="text-center pt-2">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                >
                  {showAll
                    ? "▲ Tampilkan Lebih Sedikit"
                    : `▼ Lihat Selengkapnya (${certifications.length - 4} Lainnya)`}
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-center py-6 text-slate-400 text-xs">
            Belum ada data sertifikasi.
          </p>
        )}
      </div>
    </section>
  );
}

export default CertificationList;