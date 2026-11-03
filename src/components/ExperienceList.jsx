import { useExperiences } from "../hooks/useData";

function ExperienceList() {
  const { data: experiences } = useExperiences();

  return (
    <div className="w-auto mx-4 rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-md max-h-[420px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100">
      {experiences.length > 0 ? (
        <div className="divide-y divide-slate-100">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="py-5 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start"
            >
              {/* KOLOM KIRI: PERIODE / TANGGAL DARI API */}
              <div className="md:col-span-4">
                <span className="inline-block px-3 py-1 bg-red-50 text-red-600 border border-red-100 text-xs font-bold rounded-lg">
                  {exp.period?.start_date} -{" "}
                  {exp.period?.is_current ? "Present" : exp.period?.end_date}
                </span>
              </div>

              {/* KOLOM KANAN: TITLE, COMPANY, DESKRIPSI DARI API */}
              <div className="md:col-span-8">
                <h3 className="text-base md:text-lg font-bold text-slate-800">
                  {exp.title}
                </h3>

                <p className="text-xs md:text-sm font-semibold text-slate-500 mb-2">
                  {exp.company}
                </p>

                <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-3">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center py-8 text-slate-400 text-sm">
          Belum ada data pengalaman.
        </p>
      )}
    </div>
  );
}

export default ExperienceList;