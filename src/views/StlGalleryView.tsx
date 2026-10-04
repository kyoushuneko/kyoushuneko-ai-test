import React, { useState } from 'react';
import { 
  Layers, 
  Search, 
  Filter, 
  GitBranch, 
  ExternalLink, 
  Terminal, 
  Database, 
  FolderGit2, 
  RefreshCw,
  Box,
  HardDrive
} from 'lucide-react';

interface StlGalleryViewProps {
  onOpenPatreonModal: () => void;
}

export const StlGalleryView: React.FC<StlGalleryViewProps> = ({ onOpenPatreonModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [simulatedRefresh, setSimulatedRefresh] = useState(false);

  const tags = ['All', 'Weird War WWII', 'Historical Feudal', 'Dark Fantasy', 'Heavy Walkers', 'Terrain & Bases', 'Free STLs'];

  const handleSimulateSync = () => {
    setSimulatedRefresh(true);
    setTimeout(() => {
      setSimulatedRefresh(false);
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Required Placeholder Hero Shell */}
      <div className="relative bg-[#111111] border-2 border-[#2b2b2b] rounded-[2px] p-8 sm:p-14 overflow-hidden text-center">
        {/* Radar / grid background */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative max-w-2xl mx-auto space-y-5">
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#1a1212] border border-[#e02020]/40 rounded-[2px] text-xs font-mono text-[#e02020] uppercase tracking-wider">
            <span className={`w-2 h-2 bg-[#e02020] rounded-full ${simulatedRefresh ? 'animate-spin' : 'animate-ping'}`} />
            <span>GitHub Repository Bridge Active</span>
          </div>

          {/* User's exact requested phrase in prominent Oswald bold uppercase */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
            Full Catalog Loading...
          </h1>

          <p className="font-body text-sm sm:text-base text-[#a3a3a3] leading-relaxed">
            The studio STL repository shell is initialized. Once linked to your designated GitHub gallery and MyMiniFactory release endpoints, this space will dynamically render all 100+ releases with 3D model previews, Lychee support logs, and instant downloads.
          </p>

          {/* GitHub Hook Wireframe Info Box */}
          <div className="bg-[#0b0b0b] border border-[#222222] p-4 rounded-[2px] text-left font-mono text-xs text-[#8e8e8e] space-y-2">
            <div className="flex items-center justify-between text-white border-b border-[#1c1c1c] pb-2">
              <span className="flex items-center gap-2 text-[#e02020]">
                <FolderGit2 className="w-4 h-4" />
                <span>kyoushuneko/stl-gallery-catalog</span>
              </span>
              <span className="text-[10px] text-[#666666]">main branch · v2.4.0</span>
            </div>
            <div className="text-[11px] text-[#aaaaaa]">
              <code>GET /api/v1/releases/catalog.json → [Syncing 48 Dispatches &amp; 380+ STL Assets]</code>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={handleSimulateSync}
              className="px-5 py-2.5 bg-[#1f1f1f] hover:bg-[#282828] text-white border border-[#333333] font-heading font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-2 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${simulatedRefresh ? 'animate-spin text-[#e02020]' : ''}`} />
              <span>{simulatedRefresh ? 'Syncing Repository...' : 'Check Connection Status'}</span>
            </button>

            <button
              onClick={onOpenPatreonModal}
              className="px-6 py-2.5 bg-[#e02020] hover:bg-[#ff2525] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-[2px] shadow-md shadow-red-950/40 flex items-center gap-2 transition-colors"
            >
              <span>Access STL Vault on Patreon / Tribes</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Catalog Search & Filter Shell Interface */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-[#131313] border border-[#242424] p-4 rounded-[2px]">
          {/* Search bar */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-[#777777] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catalog (e.g. Ashigaru, Walker, Panzer)..."
              className="w-full bg-[#0a0a0a] border border-[#2a2a2a] focus:border-[#e02020] text-white pl-9 pr-4 py-2 text-xs font-body rounded-[2px] outline-none transition-colors"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 text-xs font-heading font-semibold uppercase tracking-wider rounded-[2px] transition-colors ${
                  selectedTag === tag
                    ? 'bg-[#e02020] text-white'
                    : 'text-[#888888] hover:text-white bg-[#0e0e0e] hover:bg-[#1a1a1a] border border-[#242424]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Catalog Skeleton Grid Shell (Visual placeholder of upcoming gallery items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
            { title: 'Sengoku Arquebusier Squad', category: 'Historical Feudal', scale: '28mm & 32mm', stlFiles: '14 STLs' },
            { title: 'Trench Jaeger Scout Mech', category: 'Weird War WWII', scale: '32mm Heroic', stlFiles: '22 STLs' },
            { title: 'Ryū Flame Howdah Dragon', category: 'Dark Fantasy', scale: '32mm Behemoth', stlFiles: '34 STLs' },
            { title: 'Mark IV "Karhu" Combat Walker', category: 'Heavy Walkers', scale: '32mm Dual', stlFiles: '18 STLs' },
            { title: '14th Armoured Tracked Carrier', category: 'Weird War WWII', scale: '28mm / 32mm', stlFiles: '26 STLs' },
            { title: 'Scenic Duckboard Trench System', category: 'Terrain & Bases', scale: 'Modular Grid', stlFiles: '12 STLs' },
            { title: 'Occult Tesla Halberd Breakers', category: 'Weird War WWII', scale: '32mm Heroic', stlFiles: '16 STLs' },
            { title: 'Free Starter Grenadier Pack', category: 'Free STLs', scale: '32mm Heroic', stlFiles: '4 STLs' },
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#141414] border border-[#242424] rounded-[2px] p-4 flex flex-col justify-between group hover:border-[#383838] transition-colors relative"
            >
              <div>
                <div className="aspect-4/3 w-full bg-[#0d0d0d] border border-[#1e1e1e] rounded-[2px] mb-3 flex flex-col items-center justify-center text-[#555555] group-hover:text-[#888888] transition-colors relative overflow-hidden">
                  <Box className="w-8 h-8 mb-1 opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all" />
                  <span className="text-[10px] font-mono uppercase tracking-wider">3D Mesh Preview Shell</span>
                  <div className="absolute top-2 left-2 text-[10px] font-mono text-[#888888] bg-black/70 px-1.5 py-0.5 rounded-[1px]">
                    {item.scale}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-[#e02020] uppercase">{item.category}</div>
                  <h3 className="font-heading text-base font-bold uppercase text-white group-hover:text-[#e02020] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs text-[#777777] font-mono">{item.stlFiles} · Pre-Supported</div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1e1e1e] flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#666666]">GitHub Hook Pending</span>
                <button
                  onClick={onOpenPatreonModal}
                  className="text-white hover:text-[#e02020] font-heading font-bold uppercase tracking-wider transition-colors"
                >
                  View on Vault →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
