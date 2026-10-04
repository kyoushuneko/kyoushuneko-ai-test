import React, { useState } from 'react';
import { NavTab } from '../types';
import { 
  Menu, 
  X, 
  Layers, 
  BookOpen, 
  Store, 
  ShieldCheck, 
  Home, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onOpenPatreonModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  onOpenPatreonModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'stl-gallery', label: 'STL Gallery', icon: <Layers className="w-4 h-4" /> },
    { id: 'games-rules', label: 'Games & Rules', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'merchant-directory', label: 'Merchant Directory', icon: <Store className="w-4 h-4" /> },
    { id: 'patron-hub', label: 'Patron Hub', icon: <ShieldCheck className="w-4 h-4" /> },
  ];

  const handleTabClick = (tabId: NavTab) => {
    onTabChange(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#222222]">
      {/* Top subtle studio ticker / notice */}
      <div className="w-full bg-[#121212] border-b border-[#1f1f1f] text-[11px] py-1 px-4 text-[#888888] flex justify-between items-center tracking-wider uppercase font-mono">
        <div className="flex items-center gap-3">
          <span className="inline-block w-1.5 h-1.5 bg-[#e02020] rounded-full animate-pulse" />
          <span>CURRENT DROP: MARCH 2026 · FROSTFALL JAEGER CORP & HEAVY WALKERS</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span className="text-stone-400">100% PRE-SUPPORTED · 28MM & 32MM SCALES</span>
          <span className="text-[#e02020]">PATREON & MMF TRIBES ACTIVE</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Studio Brand Logo on Far Left */}
          <button
            onClick={() => handleTabClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#e02020]"
          >
            {/* Custom stylized industrial logo badge */}
            <div className="w-10 h-10 bg-[#161616] border border-[#2a2a2a] group-hover:border-[#e02020] rounded-[2px] flex items-center justify-center transition-colors relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e02020]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* Studio Emblem Monogram */}
              <div className="relative font-heading font-black text-xl text-white tracking-tighter flex items-center">
                <span className="text-[#e02020]">K</span>
                <span className="text-white text-sm ml-0.5">M</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-wider text-white uppercase group-hover:text-[#e02020] transition-colors leading-none">
                KYOUSHUNEKO
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#8e8e8e] uppercase font-body font-semibold mt-1">
                MINIATURES · 3D SCULPTING STUDIO
              </span>
            </div>
          </button>

          {/* Center Navigation Tabs */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`relative px-4 py-2 text-sm font-heading font-semibold tracking-wider uppercase transition-all duration-200 rounded-[2px] ${
                    isActive
                      ? 'text-white bg-[#1a1a1a] shadow-inner'
                      : 'text-[#9e9e9e] hover:text-white hover:bg-[#141414]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e02020]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Far Right Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenPatreonModal}
              className="bg-[#e02020] hover:bg-[#ff2525] text-white px-5 py-2.5 rounded-[2px] font-heading font-bold text-sm tracking-wider uppercase shadow-md shadow-red-950/40 hover:shadow-red-900/60 transition-all flex items-center gap-2 group active:scale-[0.98]"
            >
              <span>Get STLs (Patreon / Tribes)</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenPatreonModal}
              className="sm:hidden bg-[#e02020] text-white px-3 py-1.5 rounded-[2px] font-heading text-xs font-bold uppercase tracking-wider"
            >
              Get STLs
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#9e9e9e] hover:text-white bg-[#161616] border border-[#2a2a2a] rounded-[2px] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111111] border-b border-[#222222] px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-[2px] text-sm font-heading tracking-wider uppercase ${
                  isActive
                    ? 'bg-[#1a1a1a] text-[#ffffff] border-l-2 border-[#e02020]'
                    : 'text-[#a0a0a0] hover:bg-[#161616] hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  {item.icon}
                  {item.label}
                </span>
                {isActive && <span className="text-xs text-[#e02020] font-bold">Active</span>}
              </button>
            );
          })}

          <div className="pt-3 border-t border-[#222222]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPatreonModal();
              }}
              className="w-full bg-[#e02020] hover:bg-[#ff2525] text-white py-3 rounded-[2px] font-heading font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get STLs (Patreon / Tribes)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
