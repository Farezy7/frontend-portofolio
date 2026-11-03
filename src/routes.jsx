import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import AchievementsPage from './pages/AchievementsPage';
import ContactPage from './pages/ContactPage';

const pages = [
{ path: '/', label: 'Beranda', element: <Home /> },
{ path: '/proyek', label: 'Proyek', element: <ProjectsPage /> },
{ path: '/pengalaman', label: 'Pengalaman', element: <ExperiencePage /> },
{ path: '/prestasi', label: 'Prestasi', element: <AchievementsPage /> },
{ path: '/kontak', label: 'Kontak', element: <ContactPage /> },
];

export default pages;