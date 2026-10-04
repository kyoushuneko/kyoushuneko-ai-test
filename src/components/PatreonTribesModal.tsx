import React, { useState } from 'react';
import { X, Check, ExternalLink, ShieldCheck, Flame, Layers } from 'lucide-react';

interface PatreonTribesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PatreonTribesModal: React.FC<PatreonTribesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<'patreon' | 'tribes'>('patreon');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#141414] border border-[#2b2b2b] rounded-[2px] shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#888888] hover:text-white bg-[#1e1e1e] hover:bg-[#282828] rounded-[2px] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#e02020] uppercase tracking-wider mb-2">
            <Flame className="w-4 h-4" />
            <span>Monthly Subscription &amp; Vault Access</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-wide uppercase">
            Join Kyoushuneko Miniatures
          </h2>
          <p className="font-body text-[#9e9e9e] text-sm sm:text-base mt-2">
            Get instant access to this month&apos;s full release package, welcome stash of 20+ miniatures, and storewide discounts.
          </p>
        </div>

        {/* Platform Selector Switcher */}
        <div className="flex bg-[#0c0c0c] p-1 rounded-[2px] border border-[#242424] max-w-md mx-auto mb-8">
          <button
            onClick={() => setSelectedPlatform('patreon')}
            className={`flex-1 py-2 text-sm font-heading font-bold uppercase tracking-wider rounded-[2px] transition-colors flex items-center justify-center gap-2 ${
              selectedPlatform === 'patreon'
                ? 'bg-[#e02020] text-white'
                : 'text-[#888888] hover:text-white'
            }`}
          >
            <span>Patreon Hub</span>
          </button>
          <button
            onClick={() => setSelectedPlatform('tribes')}
            className={`flex-1 py-2 text-sm font-heading font-bold uppercase tracking-wider rounded-[2px] transition-colors flex items-center justify-center gap-2 ${
              selectedPlatform === 'tribes'
                ? 'bg-[#e02020] text-white'
                : 'text-[#888888] hover:text-white'
            }`}
          >
            <span>MyMiniFactory Tribes</span>
          </button>
        </div>

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Recruit Tier */}
          <div className="bg-[#191919] border border-[#2a2a2a] p-5 rounded-[2px] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#888888] uppercase">Supporter Tier</div>
              <h3 className="font-heading text-xl font-bold uppercase text-white mt-1">Recruit</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-heading text-3xl font-bold text-white">$3</span>
                <span className="text-xs text-[#888888] font-body">/ month</span>
              </div>
              <p className="text-xs text-[#999999] mt-2 font-body">
                For hobbyists wanting to support sculpting development and vote on future projects.
              </p>

              <div className="mt-4 pt-4 border-t border-[#262626] space-y-2 text-xs font-body">
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#e02020] shrink-0 mt-0.5" />
                  <span>Discord Supporter Role &amp; Chat</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#e02020] shrink-0 mt-0.5" />
                  <span>Monthly Poll Voting Rights</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#e02020] shrink-0 mt-0.5" />
                  <span>Behind-the-Scenes ZBrush WIPs</span>
                </div>
              </div>
            </div>

            <a
              href="https://patreon.com/kyoushuneko_miniatures"
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full text-center py-2 bg-[#262626] hover:bg-[#333333] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-[2px] transition-colors"
            >
              Select Recruit
            </a>
          </div>

          {/* Legionnaire Tier (Featured) */}
          <div className="bg-[#1b1b1b] border-2 border-[#e02020] p-5 rounded-[2px] flex flex-col justify-between relative shadow-lg shadow-red-950/20">
            <div className="absolute -top-3 right-4 bg-[#e02020] text-white text-[10px] font-heading font-bold uppercase px-2 py-0.5 rounded-[2px] tracking-wider">
              Most Popular
            </div>
            <div>
              <div className="text-xs font-mono text-[#e02020] uppercase font-bold">Standard Tier</div>
              <h3 className="font-heading text-xl font-bold uppercase text-white mt-1">Legionnaire</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-heading text-3xl font-bold text-white">$10</span>
                <span className="text-xs text-[#888888] font-body">/ month</span>
              </div>
              <p className="text-xs text-[#999999] mt-2 font-body">
                Full access to current month releases, welcome stash, and personal printing license.
              </p>

              <div className="mt-4 pt-4 border-t border-[#2d2d2d] space-y-2 text-xs font-body">
                <div className="flex items-start gap-2 text-white">
                  <Check className="w-3.5 h-3.5 text-[#e02020] shrink-0 mt-0.5" />
                  <span className="font-bold">Current Month 15+ Figure Pack</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#e02020] shrink-0 mt-0.5" />
                  <span>The Welcome Stash (20+ Models)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#e02020] shrink-0 mt-0.5" />
                  <span className="text-[#e02020] font-semibold">30% Storewide Discount Code</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#e02020] shrink-0 mt-0.5" />
                  <span>100% Pre-Supported + Lychee Scenes</span>
                </div>
              </div>
            </div>

            <a
              href="https://patreon.com/kyoushuneko_miniatures"
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full text-center py-2.5 bg-[#e02020] hover:bg-[#ff2525] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-[2px] transition-colors shadow-md"
            >
              Join Legionnaire ($10)
            </a>
          </div>

          {/* Merchant Tier */}
          <div className="bg-[#191919] border border-[#2a2a2a] p-5 rounded-[2px] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#888888] uppercase">Commercial Tier</div>
              <h3 className="font-heading text-xl font-bold uppercase text-white mt-1">Merchant Tier</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-heading text-3xl font-bold text-white">$35</span>
                <span className="text-xs text-[#888888] font-body">/ month</span>
              </div>
              <p className="text-xs text-[#999999] mt-2 font-body">
                Sell physical 3D printed miniatures with an official commercial license and listing directory spot.
              </p>

              <div className="mt-4 pt-4 border-t border-[#262626] space-y-2 text-xs font-body">
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#e02020] shrink-0 mt-0.5" />
                  <span>Commercial Physical Print Rights</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#e02020] shrink-0 mt-0.5" />
                  <span className="text-[#e02020] font-semibold">50% Storewide Back-Catalog Discount</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#e02020] shrink-0 mt-0.5" />
                  <span>Merchant Directory Verification Listing</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#e02020] shrink-0 mt-0.5" />
                  <span>Promo Renders &amp; High-Res Marketing Art</span>
                </div>
              </div>
            </div>

            <a
              href="https://patreon.com/kyoushuneko_miniatures"
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full text-center py-2 bg-[#262626] hover:bg-[#333333] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-[2px] transition-colors"
            >
              Select Merchant ($35)
            </a>
          </div>
        </div>

        {/* Feature comparison guarantee */}
        <div className="bg-[#0e0e0e] border border-[#222222] p-4 rounded-[2px] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body">
          <div className="flex items-center gap-3 text-[#aaaaaa]">
            <ShieldCheck className="w-5 h-5 text-[#e02020] shrink-0" />
            <span>Cancel anytime in your profile. Files remain permanently in your library.</span>
          </div>

          <a
            href={selectedPlatform === 'patreon' ? 'https://patreon.com' : 'https://myminifactory.com'}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#e02020] font-mono flex items-center gap-1.5 shrink-0"
          >
            <span>Proceed to {selectedPlatform === 'patreon' ? 'Patreon' : 'MMF Tribes'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
