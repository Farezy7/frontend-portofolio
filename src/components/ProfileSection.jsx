import { useProfile } from "../hooks/useData";
import myHeroImage from "../assets/hero.jpg";

function ProfileSection() {
const { data: profile } = useProfile();

return (
<header className="w-full min-h-screen grid md:grid-cols-2">
{/* Kiri: perkenalan singkat */}
<div className="flex flex-col justify-center px-8 pb-12 pt-28 md:px-16" color="red" >
<p className="text-sm font-medium uppercase tracking-widest text-blue-600">
Halo, saya
</p>
<h1 className="mt-2 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
{profile.name}
</h1>
<p className="mt-4 text-lg text-slate-600">{profile.tagline}</p>

    <div className="mt-8 flex flex-wrap gap-3">
      <a
        href="#kontak"
        className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
      >
        Hubungi saya
      </a>
    </div>
  </div>

  {/* Kanan: foto penuh */}
  <div className="relative min-h-80">
    {myHeroImage ? (
      <img
        src={myHeroImage}
        alt="Foto Profil"
        className="absolute inset-0 h-full w-full object-cover"
      />
    ) : (
      <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 text-xs">
        Foto tidak tersedia
      </div>
    )}
  </div>
</header>

);
}

export default ProfileSection;