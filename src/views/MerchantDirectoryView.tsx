import React, { useState } from 'react';
import { MERCHANTS } from '../data/merchants';
import { Merchant } from '../types';
import { 
  Search, 
  Store, 
  MapPin, 
  Star, 
  ExternalLink, 
  Printer, 
  ShieldCheck, 
  Package, 
  Sparkles,
  Truck,
  CheckCircle2
} from 'lucide-react';

interface MerchantDirectoryViewProps {
  onOpenPatreonModal: () => void;
}

export const MerchantDirectoryView: React.FC<MerchantDirectoryViewProps> = ({
  onOpenPatreonModal
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMerchantModal, setSelectedMerchantModal] = useState<Merchant | null>(null);

  const regions = ['All', 'US', 'Europe', 'UK', 'Asia/Oceania'];

  const filteredMerchants = MERCHANTS.filter((merchant) => {
    const matchesRegion = selectedRegion === 'All' || merchant.region === selectedRegion;
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      merchant.name.toLowerCase().includes(query) ||
      merchant.location.toLowerCase().includes(query) ||
      merchant.specialty.toLowerCase().includes(query) ||
      merchant.hardware.toLowerCase().includes(query);
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Header Banner */}
      <div className="bg-[#121212] border border-[#242424] rounded-[2px] p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#e02020]/10 blur-[100px] pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a1212] border border-[#e02020]/30 rounded-[2px] text-xs font-mono text-[#e02020] uppercase tracking-wider">
            <Store className="w-3.5 h-3.5" />
            <span>Licensed Physical Print Merchants</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold uppercase text-white tracking-tight">
            No 3D Printer? Order Physical Miniatures.
          </h1>

          <p className="font-body text-sm sm:text-base text-[#a0a0a0] leading-relaxed">
            Support our vetted network of certified commercial partners. Every listed merchant holds an active Kyoushuneko Commercial License, printing at 30-micron layer heights using heavy-duty impact-resistant 8K/12K resin formulations.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-[#777777]">
            <span className="flex items-center gap-1.5 text-[#b0b0b0]">
              <ShieldCheck className="w-4 h-4 text-[#e02020]" />
              Authentic Authorized Sculpt Rights
            </span>
            <span className="flex items-center gap-1.5 text-[#b0b0b0]">
              <Printer className="w-4 h-4 text-[#e02020]" />
              Ultrasonic Cleaned &amp; Post-Cured
            </span>
            <span className="flex items-center gap-1.5 text-[#b0b0b0]">
              <Truck className="w-4 h-4 text-[#e02020]" />
              Safe Worldwide Delivery
            </span>
          </div>
        </div>
      </div>

      {/* Search & Region Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-[#131313] border border-[#242424] p-4 rounded-[2px]">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-[#777777] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by merchant name, country, or printer..."
            className="w-full bg-[#0a0a0a] border border-[#2a2a2a] focus:border-[#e02020] text-white pl-9 pr-4 py-2.5 text-xs font-body rounded-[2px] outline-none transition-colors"
          />
        </div>

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-4 py-2 text-xs font-heading font-semibold uppercase tracking-wider rounded-[2px] transition-colors ${
                selectedRegion === reg
                  ? 'bg-[#e02020] text-white'
                  : 'text-[#888888] hover:text-white bg-[#0e0e0e] hover:bg-[#1c1c1c] border border-[#242424]'
              }`}
            >
              {reg === 'All' ? 'All Regions' : reg}
            </button>
          ))}
        </div>
      </div>

      {/* Merchants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMerchants.map((merchant) => (
          <div
            key={merchant.id}
            className="group bg-[#141414] border border-[#262626] hover:border-[#e02020]/70 rounded-[2px] p-6 flex flex-col justify-between transition-all duration-200"
          >
            <div className="space-y-4">
              {/* Top Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#e02020] uppercase">
                    <span>{merchant.region} Hub</span>
                    <span>·</span>
                    <span>Since {merchant.certifiedSince}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold uppercase text-white group-hover:text-[#e02020] transition-colors mt-0.5">
                    {merchant.name}
                  </h3>
                </div>

                <div className="flex items-center gap-1 bg-[#1c1c1c] border border-[#2b2b2b] px-2 py-1 rounded-[2px] text-xs font-mono text-amber-400 shrink-0">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-white font-bold">{merchant.rating}</span>
                  <span className="text-[#777777]">({merchant.reviewsCount})</span>
                </div>
              </div>

              {/* Location & Specialty */}
              <div className="space-y-2 text-xs font-body">
                <div className="flex items-center gap-2 text-[#999999]">
                  <MapPin className="w-3.5 h-3.5 text-[#e02020] shrink-0" />
                  <span>{merchant.location}</span>
                </div>

                <div className="bg-[#0e0e0e] border border-[#1f1f1f] p-3 rounded-[2px] space-y-1.5 font-mono text-[11px]">
                  <div className="text-[#888888]">
                    <strong className="text-white">Printer Tech:</strong> {merchant.hardware}
                  </div>
                  <div className="text-[#888888]">
                    <strong className="text-white">Resin:</strong> {merchant.resinType}
                  </div>
                  <div className="text-[#888888]">
                    <strong className="text-white">Focus:</strong> {merchant.specialty}
                  </div>
                </div>
              </div>

              {/* Shipping Highlight */}
              <div className="text-[11px] font-body text-[#777777] flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5 text-[#e02020] shrink-0" />
                <span>{merchant.shippingHighlights}</span>
              </div>
            </div>

            {/* Merchant Actions */}
            <div className="pt-5 mt-4 border-t border-[#1f1f1f] flex items-center gap-2">
              <a
                href={merchant.storeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 bg-[#e02020] hover:bg-[#ff2525] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-colors"
              >
                <span>Visit {merchant.platform}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setSelectedMerchantModal(merchant)}
                className="px-3 py-2.5 bg-[#1b1b1b] hover:bg-[#252525] border border-[#2f2f2f] text-white text-xs font-heading uppercase rounded-[2px] transition-colors"
                title="View verified details"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredMerchants.length === 0 && (
        <div className="bg-[#121212] border border-[#242424] p-12 text-center rounded-[2px] space-y-3">
          <p className="text-sm font-mono text-[#888888]">No merchants found matching your search criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedRegion('All');
            }}
            className="px-4 py-2 bg-[#1f1f1f] hover:bg-[#282828] text-white text-xs font-heading uppercase tracking-wider rounded-[2px]"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Become a Licensed Merchant Callout */}
      <div className="bg-[#121212] border-2 border-[#2b2b2b] rounded-[2px] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="text-xs font-mono text-[#e02020] uppercase tracking-wider">
            Commercial Tier Opportunity
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white">
            Do You Own a 3D Print Farm?
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#999999] max-w-xl">
            Join the Kyoushuneko Commercial Merchant Tier on Patreon or MMF Tribes for $35/mo. 
            Receive licensed physical rights, 50% discount on the entire studio back-catalog, and an official listing in this merchant directory.
          </p>
        </div>

        <button
          onClick={onOpenPatreonModal}
          className="px-7 py-3.5 bg-[#e02020] hover:bg-[#ff2525] text-white font-heading font-bold text-sm uppercase tracking-wider rounded-[2px] shrink-0 shadow-lg shadow-red-950/40 transition-colors"
        >
          Become a Licensed Merchant ($35/mo)
        </button>
      </div>

      {/* Merchant Details Modal */}
      {selectedMerchantModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-lg bg-[#141414] border border-[#2e2e2e] rounded-[2px] shadow-2xl p-6 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMerchantModal(null)}
              className="absolute top-4 right-4 p-2 text-[#888888] hover:text-white bg-[#1e1e1e] hover:bg-[#282828] rounded-[2px]"
            >
              ✕
            </button>

            <div className="text-xs font-mono text-[#e02020] uppercase tracking-wider mb-1">
              Verified Commercial Partner
            </div>
            <h3 className="font-heading text-2xl font-bold uppercase mb-2">
              {selectedMerchantModal.name}
            </h3>
            <p className="text-xs text-[#888888] font-mono mb-4">
              {selectedMerchantModal.location} · {selectedMerchantModal.platform}
            </p>

            <div className="space-y-3 bg-[#0d0d0d] p-4 rounded-[2px] border border-[#202020] text-xs font-mono text-[#b0b0b0]">
              <div>
                <span className="text-white font-bold">Printer Array:</span> {selectedMerchantModal.hardware}
              </div>
              <div>
                <span className="text-white font-bold">Resin Chemistry:</span> {selectedMerchantModal.resinType}
              </div>
              <div>
                <span className="text-white font-bold">Studio Certification:</span> Since {selectedMerchantModal.certifiedSince} (Current Active Commercial License)
              </div>
              <div>
                <span className="text-white font-bold">Licensed Tiers:</span> {selectedMerchantModal.licensedTiers.join(', ')}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={selectedMerchantModal.storeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 bg-[#e02020] hover:bg-[#ff2525] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-[2px] text-center"
              >
                Go to Storefront
              </a>
              <button
                onClick={() => setSelectedMerchantModal(null)}
                className="px-5 py-3 bg-[#222222] hover:bg-[#333333] text-white font-heading font-bold text-xs uppercase rounded-[2px]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
