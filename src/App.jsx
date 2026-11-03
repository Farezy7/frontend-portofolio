import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
return (
<div className="min-h-screen selection:bg-zinc-950 selection:text-zinc-100 antialiased bg-rose-50 text-white">
<Navbar />
<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="*" element={<p>Halaman tidak ditemukan</p>} />
</Routes>
</main>
</div>
);
}

export default App;