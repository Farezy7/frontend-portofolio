import { useState, useEffect, useRef } from 'react';

function Navbar() {
  const [active, setActive] = useState('profil');
  const navRef = useRef(null);

  const menu = [
    { id: 'profil', label: 'Profil' },
    { id: 'proyek', label: 'Proyek' },
    { id: 'pengalaman', label: 'Pengalaman' },
    { id: 'prestasi', label: 'Prestasi' },
    { id: 'kontak', label: 'Kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = navRef.current ? navRef.current.offsetHeight : 0;

      const scrollPosition = window.scrollY + navbarHeight;

      menu.forEach((m) => {
        const element = document.getElementById(m.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(m.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 py-4 bg-red-900/80 backdrop-blur-md"
    >
      <div className="flex flex-wrap justify-end items-center gap-4 mx-10">
        {menu.map((m) => {
          const isActive = active === m.id;

          return (
            <a
              key={m.id}
              href={'#' + m.id}
              onClick={() => setActive(m.id)}
              className={`rounded-md px-3 py-1.5 text-sm transition-all duration-200 ${
                isActive
                  ? 'bg-white font-semibold text-red-900'
                  : 'font-medium text-white/80 hover:bg-white hover:text-red-900'
              }`}
            >
              {m.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;