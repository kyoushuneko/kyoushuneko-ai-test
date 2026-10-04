import React, { useState } from 'react';
import { SUNDERED_STEEL_DATA } from '../data/gameRules';
import { 
  Download, 
  BookOpen, 
  ShieldAlert, 
  Crosshair, 
  Layers, 
  Users, 
  Clock, 
  Maximize2, 
  FileText,
  ChevronRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface GamesRulesViewProps {
  onOpenRulebookModal: () => void;
  onOpenPatreonModal: () => void;
}

export const GamesRulesView: React.FC<GamesRulesViewProps> = ({
  onOpenRulebookModal,
  onOpenPatreonModal
}) => {
  const [activeFactionTab, setActiveFactionTab] = useState<string>(SUNDERED_STEEL_DATA.factions[0].id);

  const selectedFaction = SUNDERED_STEEL_DATA.factions.find(f => f.id === activeFactionTab) || SUNDERED_STEEL_DATA.factions[0];

  return (
    <div className="space-y-20">
      {/* 1. SUNDERED STEEL HERO BANNER */}
      <section className="relative min-h-[70vh] flex items-center justify-center py-16 overflow-hidden border-b border-[#202020]">
        {/* Background image & dark atmosphere */}
        <div className="absolute inset-0 bg-[#090909]">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80"
            alt="Sundered Steel Skirmish"
            className="w-full h-full object-cover opacity-20 filter contrast-150 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/90" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#e02020]/15 blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#171212] border border-[#e02020]/40 rounded-[2px] text-xs font-mono text-[#e02020] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-[#e02020] rounded-full animate-pulse" />
            <span>Official Studio Skirmish Wargame · {SUNDERED_STEEL_DATA.version}</span>
          </div>

          <h1 className="font-heading text-5xl sm:text-7xl font-bold uppercase tracking-tight text-white leading-none">
            {SUNDERED_STEEL_DATA.title}
          </h1>

          <p className="font-heading text-lg sm:text-2xl text-[#e02020] uppercase tracking-widest font-semibold">
            {SUNDERED_STEEL_DATA.tagline}
          </p>

          <p className="font-body text-sm sm:text-base text-[#b0b0b0] max-w-2xl mx-auto leading-relaxed">
            {SUNDERED_STEEL_DATA.subtitle}. Field your 28mm and 32mm Kyoushuneko miniatures in gritty squad skirmishes featuring alternating activations, brutal suppression, and articulated walker combat.
          </p>

          {/* Primary Action Download Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenRulebookModal}
              className="w-full sm:w-auto px-8 py-4 bg-[#e02020] hover:bg-[#ff2525] text-white font-heading font-bold text-base uppercase tracking-wider rounded-[2px] shadow-xl shadow-red-950/50 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              <Download className="w-5 h-5" />
              <span>Download Beta Rulebook PDF</span>
            </button>

            <button
              onClick={onOpenPatreonModal}
              className="w-full sm:w-auto px-7 py-4 bg-[#181818] hover:bg-[#222222] border border-[#2e2e2e] text-white font-heading font-bold text-base uppercase tracking-wider rounded-[2px] transition-colors flex items-center justify-center gap-2"
            >
              <span>Get Starter Armies &amp; STLs</span>
            </button>
          </div>

          {/* Fast Tabletop Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 text-left">
            <div className="bg-[#121212]/90 border border-[#222222] p-3 rounded-[2px]">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#888888]">
                <Users className="w-3.5 h-3.5 text-[#e02020]" />
                <span>PLAYERS</span>
              </div>
              <div className="font-heading text-sm font-bold text-white mt-1">{SUNDERED_STEEL_DATA.players}</div>
            </div>

            <div className="bg-[#121212]/90 border border-[#222222] p-3 rounded-[2px]">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#888888]">
                <Clock className="w-3.5 h-3.5 text-[#e02020]" />
                <span>PLAYTIME</span>
              </div>
              <div className="font-heading text-sm font-bold text-white mt-1">{SUNDERED_STEEL_DATA.playtime}</div>
            </div>

            <div className="bg-[#121212]/90 border border-[#222222] p-3 rounded-[2px]">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#888888]">
                <Layers className="w-3.5 h-3.5 text-[#e02020]" />
                <span>SCALE</span>
              </div>
              <div className="font-heading text-sm font-bold text-white mt-1">28mm &amp; 32mm Miniatures</div>
            </div>

            <div className="bg-[#121212]/90 border border-[#222222] p-3 rounded-[2px]">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#888888]">
                <Maximize2 className="w-3.5 h-3.5 text-[#e02020]" />
                <span>TABLE SIZE</span>
              </div>
              <div className="font-heading text-sm font-bold text-white mt-1">36&quot; x 36&quot; Trench Field</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LORE NARRATIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] border border-[#242424] rounded-[2px] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-mono text-[#e02020] uppercase tracking-wider">
                Historical Divergence: 1947
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-white leading-tight">
                The Cinder-Iron Cataclysm
              </h2>
              <div className="w-12 h-1 bg-[#e02020]" />
              <p className="font-body text-xs text-[#888888] font-mono pt-2">
                &ldquo;When traditional artillery ran dry, they drilled into the permafrost. What they awakened demanded blood and steam.&rdquo;
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4 font-body text-sm text-[#b0b0b0] leading-relaxed border-l lg:border-l border-[#242424] lg:pl-8">
              {SUNDERED_STEEL_DATA.lore.split('\n\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE GAMEPLAY PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="text-xs font-mono text-[#e02020] uppercase tracking-wider">
            Tactical Mechanics
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-white mt-1">
            Engineered For The Tabletop
          </h2>
          <p className="font-body text-sm text-[#888888] mt-2">
            No endless bookkeeping. High tactical lethality designed specifically around miniature line-of-sight and physical cover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUNDERED_STEEL_DATA.corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#141414] border border-[#242424] p-6 rounded-[2px] space-y-3 hover:border-[#e02020]/50 transition-colors"
            >
              <div className="text-xs font-mono text-[#e02020]">0{idx + 1}. PILLAR</div>
              <h3 className="font-heading text-xl font-bold uppercase text-white">
                {pillar.title}
              </h3>
              <p className="font-body text-xs text-[#a0a0a0] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FACTIONS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#202020] gap-4">
          <div>
            <div className="text-xs font-mono text-[#e02020] uppercase tracking-wider">
              Battlefield Armies
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-white mt-1">
              Factions of Sundered Steel
            </h2>
          </div>

          {/* Faction selector buttons */}
          <div className="flex flex-wrap gap-2">
            {SUNDERED_STEEL_DATA.factions.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFactionTab(f.id)}
                className={`px-3 py-1.5 text-xs font-heading font-semibold uppercase tracking-wider rounded-[2px] transition-colors ${
                  activeFactionTab === f.id
                    ? 'bg-[#e02020] text-white'
                    : 'bg-[#141414] text-[#888888] hover:text-white border border-[#262626]'
                }`}
              >
                {f.name.split(' ')[0]} {f.name.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Faction Detailed Card */}
        <div className="bg-[#141414] border-2 border-[#262626] rounded-[2px] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: selectedFaction.iconAccent }} 
                />
                <span className="text-xs font-mono text-[#888888] uppercase">
                  {selectedFaction.allegiance} · Code: {selectedFaction.badgeCode}
                </span>
              </div>

              <h3 className="font-heading text-3xl font-bold uppercase text-white">
                {selectedFaction.name}
              </h3>
              <div className="text-sm font-heading font-semibold text-[#e02020] uppercase tracking-wide">
                {selectedFaction.subtitle}
              </div>

              <p className="font-body text-sm text-[#b0b0b0] leading-relaxed">
                {selectedFaction.summary}
              </p>

              {/* Special Doctrine Box */}
              <div className="bg-[#0f0f0f] border-l-2 border-[#e02020] p-4 rounded-[2px] space-y-1">
                <div className="text-xs font-mono text-[#e02020] uppercase font-bold">
                  Faction Special Doctrine:
                </div>
                <div className="font-body text-xs text-[#cccccc] leading-relaxed">
                  {selectedFaction.doctrine}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#181818] border border-[#262626] p-5 rounded-[2px] space-y-4">
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white flex items-center justify-between">
                <span>Core Tabletop Unit Roster</span>
                <span className="text-xs text-[#e02020] font-mono">STLs Available</span>
              </h4>

              <div className="space-y-2">
                {selectedFaction.keyUnits.map((unit, idx) => (
                  <div 
                    key={idx}
                    className="bg-[#101010] border border-[#202020] p-3 rounded-[2px] flex items-center justify-between text-xs font-body text-white"
                  >
                    <span className="font-medium">{unit}</span>
                    <span className="text-[10px] font-mono text-[#777777]">32mm Heroic</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenRulebookModal}
                className="w-full py-2.5 bg-[#e02020] hover:bg-[#ff2525] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors flex items-center justify-center gap-2 mt-4"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Faction Datasheet In Rulebook</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DOWNLOAD CALLOUT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] border border-[#2b2b2b] rounded-[2px] p-8 text-center space-y-4">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white">
            Ready to deploy your strike team?
          </h3>
          <p className="font-body text-sm text-[#999999] max-w-lg mx-auto">
            Grab the Beta Rulebook PDF, print your quickstart reference cards, and join our Discord community to submit playtest match reports.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenRulebookModal}
              className="px-8 py-3.5 bg-[#e02020] hover:bg-[#ff2525] text-white font-heading font-bold text-sm uppercase tracking-wider rounded-[2px] shadow-lg shadow-red-950/40 inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Get Beta Rulebook v0.8.4 PDF</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
