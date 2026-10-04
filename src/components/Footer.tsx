import React from 'react';
import { NavTab } from '../types';
import { ExternalLink, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onTabChange: (tab: NavTab) => void;
  onOpenPatreonModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onTabChange, onOpenPatreonModal }) => {
  return (
    <footer className="bg-[#0e0e0e] border-t border-[#1f1f1f] text-[#8e8e8e] mt-24">
      {/* Brand & Links section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Studio Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#161616] border border-[#2a2a2a] rounded-[2px] flex items-center justify-center font-heading font-black text-white">
                <span className="text-[#e02020]">K</span>M
              </div>
              <span className="font-heading text-xl font-bold tracking-wider text-white uppercase">
                KYOUSHUNEKO MINIATURES
              </span>
            </div>
            <p className="text-sm text-[#8e8e8e] leading-relaxed max-w-sm font-body">
              Independent digital sculpting atelier specializing in 28mm and 32mm scale resin-printable miniatures. 
              Bridging Weird War alternate history, Sengoku feudal aesthetics, and dark grim fantasy.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[#a3a3a3]">
              <ShieldCheck className="w-4 h-4 text-[#e02020]" />
              <span>Certified 100% Pre-Supported &amp; Test Printed</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider text-white uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <button
                  onClick={() => onTabChange('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home &amp; Dispatches
                </button>
              </li>
              <li>
                <button
                  onClick={() => onTabChange('stl-gallery')}
                  className="hover:text-white transition-colors text-left"
                >
                  STL Catalog Archive
                </button>
              </li>
              <li>
                <button
                  onClick={() => onTabChange('games-rules')}
                  className="hover:text-white transition-colors text-left"
                >
                  Sundered Steel Game
                </button>
              </li>
              <li>
                <button
                  onClick={() => onTabChange('merchant-directory')}
                  className="hover:text-white transition-colors text-left"
                >
                  Licensed Print Merchants
                </button>
              </li>
              <li>
                <button
                  onClick={() => onTabChange('patron-hub')}
                  className="hover:text-white transition-colors text-left"
                >
                  Patron &amp; Supporter Hub
                </button>
              </li>
            </ul>
          </div>

          {/* Community & Platforms */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider text-white uppercase mb-4">
              Platforms
            </h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <button
                  onClick={onOpenPatreonModal}
                  className="text-[#e02020] hover:text-[#ff4545] font-medium flex items-center gap-1.5 transition-colors"
                >
                  Patreon Vault <ExternalLink className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPatreonModal}
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  MyMiniFactory Tribes <ExternalLink className="w-3 h-3" />
                </button>
              </li>
              <li>
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  Official Discord (4,800+) <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  Community Painters Guild <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Specifications */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider text-white uppercase mb-4">
              Print Specs
            </h4>
            <div className="space-y-2 text-xs font-mono text-[#808080]">
              <div className="border border-[#202020] p-2 bg-[#121212] rounded-[2px]">
                <div className="text-white font-bold mb-1">Standard Scales:</div>
                <div>28mm True &amp; 32mm Heroic</div>
              </div>
              <div className="border border-[#202020] p-2 bg-[#121212] rounded-[2px]">
                <div className="text-white font-bold mb-1">Tested Hardware:</div>
                <div>Anycubic M5s &amp; Saturn 4 (8K/12K)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6e6e6e] gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Kyoushuneko Miniatures. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Personal 3D Print License &amp; Merchant Tier Validated</span>
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-[#e02020] fill-[#e02020]" /> for tabletop commanders
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
