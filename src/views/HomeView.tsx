import React, { useState } from 'react';
import { DISPATCHES } from '../data/dispatches';
import { SHOWCASE_MODELS } from '../data/showcases';
import { ShowcaseModel, DispatchItem, NavTab } from '../types';
import { 
  Flame, 
  ArrowRight, 
  Download, 
  Layers, 
  ChevronRight, 
  Check, 
  Filter, 
  Calendar, 
  Clock, 
  Eye, 
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Send
} from 'lucide-react';

interface HomeViewProps {
  onTabChange: (tab: NavTab) => void;
  onOpenPatreonModal: () => void;
  onOpenModelDetail: (model: ShowcaseModel) => void;
  onSubscribeLeadMagnet: (email: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onTabChange,
  onOpenPatreonModal,
  onOpenModelDetail,
  onSubscribeLeadMagnet
}) => {
  const [selectedShowcaseFilter, setSelectedShowcaseFilter] = useState<string>('All');
  const [selectedDispatch, setSelectedDispatch] = useState<DispatchItem | null>(null);
  const [leadEmail, setLeadEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const showcaseCategories = ['All', 'Weird War WWII', 'Historical Feudal', 'Dark Fantasy', 'War Machines'];

  const filteredShowcases = selectedShowcaseFilter === 'All'
    ? SHOWCASE_MODELS
    : SHOWCASE_MODELS.filter(m => m.category === selectedShowcaseFilter);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail || !leadEmail.includes('@')) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
    onSubscribeLeadMagnet(leadEmail);
  };

  return (
    <div className="space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 overflow-hidden border-b border-[#1c1c1c]">
        {/* Background Dark Industrial Grid & Texture */}
        <div className="absolute inset-0 bg-[#0a0a0a]">
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #262626 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}
          />
          {/* Subtle red spotlight glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#e02020]/10 blur-[130px] rounded-full pointer-events-none" />
          {/* Cinematic dark atmospheric gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#e02020] uppercase tracking-widest bg-[#141414] border border-[#2b2b2b] px-3.5 py-1.5 rounded-[2px] mb-6 shadow-sm">
            <span className="w-2 h-2 bg-[#e02020] rounded-full animate-ping" />
            <span>Digital Sculpting Atelier · 28mm &amp; 32mm Scale</span>
          </div>

          {/* Massive Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase max-w-5xl mx-auto leading-[1.05]">
            Weird War. Feudal Steel. Dark Mythology.
          </h1>

          <p className="font-body text-base sm:text-xl text-[#a3a3a3] max-w-3xl mx-auto mt-6 leading-relaxed font-normal">
            Precision 3D printable resin miniatures engineered for commanders, painters, and wargamers. 
            From diesel-powered combat walkers to authentic Sengoku ashigaru levies—fully pre-supported and battle-tested.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <button
              onClick={onOpenPatreonModal}
              className="w-full sm:w-auto px-8 py-4 bg-[#e02020] hover:bg-[#ff2525] text-white font-heading font-bold text-base uppercase tracking-wider rounded-[2px] shadow-lg shadow-red-950/40 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <span>Get Current Drop (Patreon / Tribes)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                const showcaseEl = document.getElementById('curated-showcases');
                showcaseEl?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-4 bg-[#161616] hover:bg-[#202020] border border-[#2c2c2c] text-white font-heading font-bold text-base uppercase tracking-wider rounded-[2px] transition-colors flex items-center justify-center gap-2"
            >
              <span>Explore Curated Showcases</span>
            </button>
          </div>

          {/* Studio Specs Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="bg-[#121212] border border-[#222222] p-4 rounded-[2px]">
              <div className="text-xs font-mono text-[#888888]">DUAL SCALING</div>
              <div className="font-heading text-xl font-bold text-white mt-1">28mm &amp; 32mm</div>
              <div className="text-xs text-[#6e6e6e] mt-0.5">Heroic &amp; True proportions</div>
            </div>

            <div className="bg-[#121212] border border-[#222222] p-4 rounded-[2px]">
              <div className="text-xs font-mono text-[#888888]">PRINT VERIFICATION</div>
              <div className="font-heading text-xl font-bold text-[#e02020] mt-1">100% Pre-Supported</div>
              <div className="text-xs text-[#6e6e6e] mt-0.5">Tested on 8K &amp; 12K LCDs</div>
            </div>

            <div className="bg-[#121212] border border-[#222222] p-4 rounded-[2px]">
              <div className="text-xs font-mono text-[#888888]">MONTHLY CADENCE</div>
              <div className="font-heading text-xl font-bold text-white mt-1">15+ Figures / Mo</div>
              <div className="text-xs text-[#6e6e6e] mt-0.5">Modular torsos, heads, weapons</div>
            </div>

            <div className="bg-[#121212] border border-[#222222] p-4 rounded-[2px]">
              <div className="text-xs font-mono text-[#888888]">SKIRMISH WARGAME</div>
              <div className="font-heading text-xl font-bold text-white mt-1">Sundered Steel</div>
              <div className="text-xs text-[#6e6e6e] mt-0.5">Custom skirmish system</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LATEST DISPATCHES (NEWS FEED) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#202020] gap-4">
          <div>
            <div className="text-xs font-mono text-[#e02020] uppercase tracking-wider">
              Studio Transmission Feed
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-white mt-1">
              Latest Dispatches
            </h2>
            <p className="font-body text-sm text-[#888888] mt-1">
              Automated feed of monthly releases, ZBrush behind-the-scenes sculpting, and Sundered Steel balance updates.
            </p>
          </div>

          <a
            href="https://patreon.com/kyoushuneko_miniatures"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-[#a0a0a0] hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>View All Transmissions on Patreon</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#e02020]" />
          </a>
        </div>

        {/* News Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DISPATCHES.map((dispatch) => (
            <article 
              key={dispatch.id}
              onClick={() => setSelectedDispatch(dispatch)}
              className="group bg-[#141414] hover:bg-[#181818] border border-[#242424] hover:border-[#e02020]/60 rounded-[2px] transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Dispatch Cover Image */}
                <div className="relative aspect-16/10 w-full bg-[#0d0d0d] overflow-hidden">
                  <img
                    src={dispatch.coverImage}
                    alt={dispatch.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-[#0a0a0a]/90 border border-[#2a2a2a] px-2 py-0.5 text-[10px] font-mono text-[#e02020] rounded-[2px] uppercase">
                    Dispatch #{dispatch.dispatchNumber}
                  </div>
                </div>

                <div className="p-4 space-y-2.5">
                  {/* Clean unboxed metadata separator */}
                  <div className="flex items-center gap-2 text-xs text-[#808080] font-mono">
                    <span>{dispatch.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{dispatch.date}</span>
                  </div>

                  <h3 className="font-heading text-lg font-bold uppercase text-white group-hover:text-[#e02020] transition-colors leading-tight line-clamp-2">
                    {dispatch.title}
                  </h3>

                  <p className="font-body text-xs text-[#9c9c9c] leading-relaxed line-clamp-3">
                    {dispatch.summary}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4 pt-2 border-t border-[#1e1e1e] flex items-center justify-between text-xs text-[#777777] font-mono">
                <span>{dispatch.readTime}</span>
                <span className="text-[#e02020] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                  Read Dispatch <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. CURATED SHOWCASES SECTION */}
      <section id="curated-showcases" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#202020] gap-4">
          <div>
            <div className="text-xs font-mono text-[#e02020] uppercase tracking-wider">
              Studio Archive &amp; Highlights
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-white mt-1">
              Curated Showcases
            </h2>
            <p className="font-body text-sm text-[#888888] mt-1">
              Explore past releases sculpted with meticulous historical detail and dieselpunk imagination.
            </p>
          </div>

          {/* Interactive filter buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#121212] border border-[#222222] rounded-[2px]">
            {showcaseCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedShowcaseFilter(cat)}
                className={`px-3 py-1.5 text-xs font-heading font-semibold uppercase tracking-wider rounded-[2px] transition-colors ${
                  selectedShowcaseFilter === cat
                    ? 'bg-[#e02020] text-white'
                    : 'text-[#888888] hover:text-white hover:bg-[#1c1c1c]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Curated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShowcases.map((model) => (
            <div
              key={model.id}
              className="group bg-[#141414] border border-[#262626] hover:border-[#e02020]/70 rounded-[2px] overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image showcase */}
                <div className="relative aspect-4/3 w-full bg-[#0e0e0e] overflow-hidden">
                  <img
                    src={model.coverImage}
                    alt={model.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/85 backdrop-blur-sm border border-[#2e2e2e] px-2 py-0.5 text-[11px] font-mono text-white rounded-[2px]">
                    {model.scale}
                  </div>
                  {model.featured && (
                    <div className="absolute top-2.5 right-2.5 bg-[#e02020] text-white px-2 py-0.5 text-[10px] font-heading font-bold uppercase tracking-wider rounded-[2px]">
                      Featured Kit
                    </div>
                  )}
                </div>

                {/* Model Body */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8a8a8a]">
                    <span>{model.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{model.faction}</span>
                  </div>

                  <h3 className="font-heading text-xl font-bold uppercase text-white group-hover:text-[#e02020] transition-colors leading-tight">
                    {model.title}
                  </h3>

                  <p className="font-body text-xs text-[#9e9e9e] leading-relaxed line-clamp-3">
                    {model.description}
                  </p>

                  {/* Clean unboxed specs metadata */}
                  <div className="pt-2 border-t border-[#1f1f1f] grid grid-cols-2 gap-2 text-[11px] font-mono text-[#777777]">
                    <div>Parts: <span className="text-[#cccccc]">{model.piecesCount} Bits</span></div>
                    <div>Pre-Supported: <span className="text-[#e02020] font-semibold">100% Lychee</span></div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenModelDetail(model)}
                  className="w-full py-2.5 bg-[#1c1c1c] hover:bg-[#e02020] text-white border border-[#2b2b2b] hover:border-[#e02020] font-heading font-bold text-xs uppercase tracking-wider rounded-[2px] transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Sculpt &amp; Parts</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. NEWSLETTER LEAD MAGNET BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#121212] border-2 border-[#2b2b2b] hover:border-[#e02020]/50 transition-colors rounded-[2px] p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Subtle accent corner element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#e02020]/15 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#e02020] uppercase tracking-wider bg-[#1c1414] border border-[#e02020]/30 px-3 py-1 rounded-[2px]">
                <Download className="w-3.5 h-3.5" />
                <span>Instant Subscriber Starter Pack</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase text-white leading-tight">
                Claim Your Free Print-Ready STL
              </h2>

              <p className="font-body text-sm sm:text-base text-[#a0a0a0] max-w-xl leading-relaxed">
                Join over 14,000 wargamers and hobbyists receiving our monthly dispatches. 
                Subscribe today to instantly download the <strong className="text-white">Weird War Trench Grenadier (32mm Pre-Supported STL + Chitubox &amp; Lychee Scene)</strong> with our official resin slicer profile.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#777777] pt-2">
                <span className="flex items-center gap-1.5 text-[#b0b0b0]">
                  <Check className="w-3.5 h-3.5 text-[#e02020]" />
                  Zero cost, instant file link
                </span>
                <span className="flex items-center gap-1.5 text-[#b0b0b0]">
                  <Check className="w-3.5 h-3.5 text-[#e02020]" />
                  Includes scenic trench base
                </span>
                <span className="flex items-center gap-1.5 text-[#b0b0b0]">
                  <Check className="w-3.5 h-3.5 text-[#e02020]" />
                  No spam, 1-click unsubscribe
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#171717] border border-[#262626] p-6 rounded-[2px]">
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div>
                  <label htmlFor="lead-email" className="block text-xs font-mono uppercase tracking-wider text-[#888888] mb-2">
                    Enter your email address:
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    value={leadEmail}
                    onChange={(e) => {
                      setLeadEmail(e.target.value);
                      if (emailError) setEmailError('');
                    }}
                    placeholder="commander@tabletop.com"
                    className="w-full bg-[#0a0a0a] border border-[#2f2f2f] focus:border-[#e02020] text-white px-4 py-3 rounded-[2px] text-sm font-body outline-none transition-colors"
                  />
                  {emailError && (
                    <div className="text-xs text-[#e02020] font-mono mt-1.5">
                      {emailError}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#e02020] hover:bg-[#ff2525] text-white font-heading font-bold text-sm uppercase tracking-wider rounded-[2px] shadow-lg shadow-red-950/40 transition-colors flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Free STL &amp; Slicing Profile</span>
                </button>
              </form>

              <div className="text-center text-[11px] font-mono text-[#666666] mt-4 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#e02020]" />
                <span>Protected by Studio Dispatch Encryption</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dispatch Reader Modal */}
      {selectedDispatch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-2xl bg-[#141414] border border-[#2e2e2e] rounded-[2px] shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDispatch(null)}
              className="absolute top-4 right-4 p-2 text-[#888888] hover:text-white bg-[#1e1e1e] hover:bg-[#282828] rounded-[2px] transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#e02020] uppercase tracking-wider mb-2">
              <span>DISPATCH #{selectedDispatch.dispatchNumber}</span>
              <span>·</span>
              <span>{selectedDispatch.category}</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase mb-2">
              {selectedDispatch.title}
            </h2>

            <div className="flex items-center gap-3 text-xs text-[#777777] font-mono mb-6">
              <span>By {selectedDispatch.author}</span>
              <span>·</span>
              <span>{selectedDispatch.date}</span>
              <span>·</span>
              <span>{selectedDispatch.readTime}</span>
            </div>

            <div className="aspect-16/9 w-full bg-[#0c0c0c] border border-[#242424] rounded-[2px] overflow-hidden mb-6">
              <img
                src={selectedDispatch.coverImage}
                alt={selectedDispatch.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="font-body text-sm text-[#b8b8b8] leading-relaxed whitespace-pre-line space-y-4">
              {selectedDispatch.fullContent || selectedDispatch.summary}
            </div>

            <div className="mt-8 pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#888888]">
                {selectedDispatch.tags.map((t, idx) => (
                  <span key={idx} className="bg-[#1c1c1c] px-2 py-1 rounded-[2px]">#{t}</span>
                ))}
              </div>

              <a
                href={selectedDispatch.patreonUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#e02020] hover:bg-[#ff2525] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-[2px] flex items-center gap-1.5 transition-colors"
              >
                <span>Discuss on Patreon</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
