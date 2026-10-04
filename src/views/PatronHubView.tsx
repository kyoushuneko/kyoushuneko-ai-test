import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  Sparkles, 
  MessageSquare, 
  Users, 
  Layers, 
  HelpCircle,
  FileArchive,
  Printer,
  Compass,
  Tag
} from 'lucide-react';

interface PatronHubViewProps {
  onOpenPatreonModal: () => void;
  onOpenRulebookModal: () => void;
}

export const PatronHubView: React.FC<PatronHubViewProps> = ({
  onOpenPatreonModal,
  onOpenRulebookModal
}) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [simulatedDownload, setSimulatedDownload] = useState<string | null>(null);

  const patronCode = 'KYOSHU-PATRON-30-MAR';
  const merchantCode = 'KYOSHU-COMMERCE-50-MAR';

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2500);
  };

  const handleTriggerDownload = (title: string, filename: string) => {
    setSimulatedDownload(title);

    // Create a real text file download for the supporter asset info
    const content = `=======================================================
KYOUSHUNEKO MINIATURES - PATRON VAULT DOWNLOAD MANIFEST
Pack: ${title}
Timestamp: ${new Date().toISOString()}
=======================================================

DOWNLOAD INSTRUCTIONS:
This download is provisioned for active Kyoushuneko Supporters (Legionnaire & Merchant Tiers).
Your authorized repository link has been generated.

SUPPORT CHANNELS:
- Report support failures in Discord: #lychee-troubleshooting
- Monthly release files remain permanently in your MyMiniFactory library if synced.

DISCOUNT REMINDER:
Use code ${patronCode} for 30% off any previous month's release on MyMiniFactory.

Thank you for fueling the forge!
- Kyoushuneko Studio
=======================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setSimulatedDownload(null);
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Dashboard Supporter Header */}
      <div className="bg-[#121212] border border-[#262626] rounded-[2px] p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#e02020]/10 blur-[100px] pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a1212] border border-[#e02020]/40 rounded-[2px] text-xs font-mono text-[#e02020] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Active Supporter Command Center</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-bold uppercase text-white tracking-tight">
              Patron &amp; Tribes Hub
            </h1>

            <p className="font-body text-sm sm:text-base text-[#a0a0a0] leading-relaxed">
              Welcome back, Commander. Retrieve your monthly discount vouchers, access master STL archives, download slicing configurations, and connect with our community of miniature painters.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-[#888888] pt-1">
              <span>CURRENT CYCLE: <strong className="text-white">MARCH 2026</strong></span>
              <span>·</span>
              <span>DROP: <strong className="text-[#e02020]">FROSTFALL JAEGER CORP</strong></span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <button
              onClick={onOpenPatreonModal}
              className="px-6 py-3 bg-[#e02020] hover:bg-[#ff2525] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-[2px] shadow-lg shadow-red-950/40 flex items-center justify-center gap-2 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Manage Supporter Tier</span>
            </button>
            <a
              href="https://myminifactory.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-[#1c1c1c] hover:bg-[#252525] border border-[#2e2e2e] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-colors"
            >
              <span>Sync MMF Library</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#888888]" />
            </a>
          </div>
        </div>
      </div>

      {/* VISUAL CARDS: 30% PATRON & 50% MERCHANT DISCOUNT CODES */}
      <section className="space-y-4">
        <div>
          <div className="text-xs font-mono text-[#e02020] uppercase tracking-wider">
            Exclusive Storewide Savings
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white mt-0.5">
            Active Studio Discount Codes
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#888888]">
            Apply these codes at checkout on the Kyoushuneko MyMiniFactory store to discount any back-catalog models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: 30% Patron Code */}
          <div className="bg-[#141414] border-2 border-[#2b2b2b] hover:border-[#e02020]/60 rounded-[2px] p-6 sm:p-7 relative overflow-hidden group transition-all">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#888888] uppercase tracking-wider">
                  Legionnaire &amp; Patron Tier
                </span>
                <h3 className="font-heading text-3xl font-bold uppercase text-white flex items-center gap-2">
                  <span className="text-[#e02020]">30% OFF</span>
                  <span className="text-lg text-[#b8b8b8]">Storewide</span>
                </h3>
              </div>
              <div className="w-10 h-10 bg-[#1c1c1c] border border-[#2e2e2e] rounded-[2px] flex items-center justify-center text-[#e02020]">
                <Tag className="w-5 h-5" />
              </div>
            </div>

            <p className="font-body text-xs text-[#a0a0a0] mt-3 leading-relaxed">
              Valid for all individual STLs, squad packs, and scatter terrain bundles released prior to the current cycle.
            </p>

            {/* Code Box with 1-Click Copy */}
            <div className="mt-6 bg-[#0a0a0a] border border-[#262626] rounded-[2px] p-3 flex items-center justify-between gap-3">
              <div className="font-mono text-sm sm:text-base font-bold text-white tracking-widest pl-2">
                {patronCode}
              </div>

              <button
                onClick={() => handleCopy(patronCode)}
                className="px-4 py-2 bg-[#e02020] hover:bg-[#ff2525] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-1.5 transition-colors shrink-0"
              >
                {copiedCode === patronCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#666666]">
              <span>Refreshes on the 1st of each month</span>
              <span className="text-[#888888]">Unlimited Uses</span>
            </div>
          </div>

          {/* Card 2: 50% Merchant Code */}
          <div className="bg-[#141414] border-2 border-[#e02020]/40 hover:border-[#e02020] rounded-[2px] p-6 sm:p-7 relative overflow-hidden group transition-all shadow-md shadow-red-950/20">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#e02020] uppercase tracking-wider font-bold">
                  Licensed Commercial Tier
                </span>
                <h3 className="font-heading text-3xl font-bold uppercase text-white flex items-center gap-2">
                  <span className="text-[#e02020]">50% OFF</span>
                  <span className="text-lg text-[#b8b8b8]">Back-Catalog</span>
                </h3>
              </div>
              <div className="w-10 h-10 bg-[#1f1212] border border-[#e02020]/50 rounded-[2px] flex items-center justify-center text-[#e02020]">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>

            <p className="font-body text-xs text-[#a0a0a0] mt-3 leading-relaxed">
              Exclusively for licensed commercial merchants to expand their physical print store offerings at half retail cost.
            </p>

            {/* Code Box with 1-Click Copy */}
            <div className="mt-6 bg-[#0a0a0a] border border-[#262626] rounded-[2px] p-3 flex items-center justify-between gap-3">
              <div className="font-mono text-sm sm:text-base font-bold text-white tracking-widest pl-2">
                {merchantCode}
              </div>

              <button
                onClick={() => handleCopy(merchantCode)}
                className="px-4 py-2 bg-[#e02020] hover:bg-[#ff2525] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-1.5 transition-colors shrink-0"
              >
                {copiedCode === merchantCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#666666]">
              <span>Requires Active Merchant License</span>
              <span className="text-[#e02020] font-semibold">Commercial Rights Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK-ACCESS DOWNLOAD BUTTONS */}
      <section className="space-y-4">
        <div>
          <div className="text-xs font-mono text-[#e02020] uppercase tracking-wider">
            Immediate Vault Access
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white mt-0.5">
            Quick-Access Download Packs
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#888888]">
            One-click retrieval for core archives, welcome kits, and slicer configuration profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: 'March 2026 Core Release Pack',
              subtitle: '18 Figures + Karhu Heavy Walker (Pre-Supported)',
              size: '1.42 GB · ZIP Archive',
              filename: 'Kyoushuneko-March-2026-Release-Pack.txt',
              icon: <FileArchive className="w-5 h-5 text-[#e02020]" />
            },
            {
              title: 'The Welcome Stash Vault',
              subtitle: '20+ Starter Miniatures, Diorama Props & Scenic Bases',
              size: '980 MB · Master ZIP',
              filename: 'Kyoushuneko-Welcome-Stash-Vault.txt',
              icon: <Layers className="w-5 h-5 text-[#e02020]" />
            },
            {
              title: 'Lychee Slicer Scene Files (.lys)',
              subtitle: 'Editable support geometry, custom light-support trees',
              size: '310 MB · Scene Bundle',
              filename: 'Kyoushuneko-Lychee-Scenes-Pack.txt',
              icon: <Printer className="w-5 h-5 text-[#e02020]" />
            },
            {
              title: 'Modular Weapon & Head Expansion',
              subtitle: 'Universal ball-joints, helmets, swords & matchlocks',
              size: '420 MB · Bits Kit',
              filename: 'Kyoushuneko-Modular-Armory-Kit.txt',
              icon: <Compass className="w-5 h-5 text-[#e02020]" />
            },
            {
              title: 'Sundered Steel Beta Rulebook PDF',
              subtitle: 'Full game system v0.8.4 + printable reference sheets',
              size: '2.4 MB · Digital PDF',
              filename: 'Sundered-Steel-Beta-Rulebook-v0.8.4.txt',
              actionOverride: onOpenRulebookModal,
              icon: <Download className="w-5 h-5 text-[#e02020]" />
            },
            {
              title: 'Resin Slicing Profiles (8K/12K)',
              subtitle: 'Chitubox & Lychee calibrated profiles for Saturn/Photon',
              size: '12 MB · Config Files',
              filename: 'Kyoushuneko-Slicer-Resin-Profiles.txt',
              icon: <Printer className="w-5 h-5 text-[#e02020]" />
            }
          ].map((pack, idx) => (
            <div
              key={idx}
              className="bg-[#141414] border border-[#242424] hover:border-[#383838] p-5 rounded-[2px] flex flex-col justify-between space-y-4 group transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#1b1b1b] border border-[#262626] rounded-[2px] shrink-0">
                  {pack.icon}
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold uppercase text-white group-hover:text-[#e02020] transition-colors">
                    {pack.title}
                  </h3>
                  <p className="font-body text-xs text-[#999999] mt-0.5 leading-relaxed">
                    {pack.subtitle}
                  </p>
                  <div className="text-[11px] font-mono text-[#666666] mt-2">
                    {pack.size}
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  if (pack.actionOverride) {
                    pack.actionOverride();
                  } else {
                    handleTriggerDownload(pack.title, pack.filename);
                  }
                }}
                className="w-full py-2.5 bg-[#1c1c1c] hover:bg-[#e02020] text-white border border-[#2c2c2c] hover:border-[#e02020] font-heading font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>
                  {simulatedDownload === pack.title ? 'Preparing Download...' : 'Download Pack'}
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* DISCORD & COMMUNITY HUBS */}
      <section className="bg-[#121212] border border-[#242424] rounded-[2px] p-8 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#202020] pb-4">
          <div>
            <div className="text-xs font-mono text-[#e02020] uppercase tracking-wider">
              Fellowship of Painters &amp; Commanders
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white mt-1">
              Community Channels &amp; Discussion
            </h2>
          </div>
          <span className="text-xs font-mono text-[#777777]">
            Active Community of 4,800+ Hobbyists
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Discord Hub */}
          <div className="bg-[#151515] border border-[#262626] p-6 rounded-[2px] flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#5865F2] font-bold">OFFICIAL DISCORD GUILD</span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  1,240 Online
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-white">
                Kyoushuneko Miniatures Discord
              </h3>
              <p className="font-body text-xs text-[#a0a0a0] leading-relaxed">
                Connect directly with lead sculptors, get print troubleshooting help in <code>#support-lab</code>, submit paint entries for the Golden Chisel contest, and arrange Sundered Steel tabletop matches.
              </p>
            </div>

            <a
              href="https://discord.gg"
              target="_blank"
              rel="noreferrer"
              className="py-3 bg-[#5865F2] hover:bg-[#4752c4] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Join Official Discord Server</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Facebook Group Hub */}
          <div className="bg-[#151515] border border-[#262626] p-6 rounded-[2px] flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#1877F2] font-bold">FACEBOOK PAINTERS GROUP</span>
                <span className="text-[11px] font-mono text-[#888888]">3,500+ Members</span>
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-white">
                Community Painters &amp; Hobbyists Guild
              </h3>
              <p className="font-body text-xs text-[#a0a0a0] leading-relaxed">
                Share high-resolution photos of your painted Ashigaru units, customized walker dioramas, and tabletop battle setups with painters around the globe.
              </p>
            </div>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="py-3 bg-[#1c1c1c] hover:bg-[#252525] border border-[#2e2e2e] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-colors"
            >
              <Users className="w-4 h-4 text-[#1877F2]" />
              <span>Visit Facebook Community Group</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
