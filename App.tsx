import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Circle } from 'lucide-react';
import { CustomCursor, BackgroundGeometry, DotAccent } from './components/UI';
import HomePage from './pages/HomePage';
import AssignmentDetail from './pages/AssignmentDetail';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-screen selection:bg-[#FF2D2D] selection:text-white overflow-x-hidden">
    <CustomCursor />
    <BackgroundGeometry />

    {/* Navigation */}
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/20 backdrop-blur-md rounded-full px-8 py-4 border border-white/5 pointer-events-auto">
        <Link to="/" className="text-xl font-bold doto-font uppercase tracking-tighter hover:text-white transition-colors">SN.</Link>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
          <a href="/#about" className="hover:text-[#FF2D2D] transition-colors">About</a>
          <a href="/#activities" className="hover:text-[#FF2D2D] transition-colors">Activities</a>
          <a href="/#academic" className="hover:text-[#FF2D2D] transition-colors">Academic</a>
          <a href="/#contact" className="hover:text-[#FF2D2D] transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <span className="block text-[10px] text-zinc-500 uppercase tracking-widest">Status</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-emerald-500">Available</span>
            </div>
          </div>
        </div>
      </div>
    </nav>

    {children}

    {/* Footer */}
    <footer className="relative z-10 border-t border-white/5 py-20 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full" />
            </div>
            <span className="heading-font font-bold tracking-tighter uppercase text-3xl">Robotics.OS</span>
          </div>
          <p className="text-zinc-500 max-w-sm text-sm">
            Exploring the convergence of computer science and physical robotics. Built with precision and minimal design.
          </p>
        </div>
        <div className="text-left md:text-right space-y-4">
          <p className="text-xs doto-font text-[#FF2D2D] animate-pulse uppercase tracking-wider">
            <DotAccent /> STATUS: DISCONNECTED (IDLE)
          </p>
          <p className="text-sm text-zinc-400">
            © 2024 PORTFOLIO FOR INTRO TO ROBOTICS <br />
            <span className="text-white font-bold doto-font uppercase text-lg">SHAN NEERAJ • RA2311003012089</span>
          </p>
          <div className="flex gap-4 md:justify-end">
            <Circle className="w-4 h-4 text-zinc-800" fill="currentColor" />
            <Circle className="w-4 h-4 text-zinc-800" fill="currentColor" />
            <Circle className="w-4 h-4 text-[#FF2D2D]" fill="currentColor" />
          </div>
        </div>
      </div>
    </footer>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assignment/:id" element={<AssignmentDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
