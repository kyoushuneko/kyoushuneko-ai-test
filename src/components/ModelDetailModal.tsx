import React, { useState } from 'react';
import { ShowcaseModel } from '../types';
import { X, Check, Layers, ExternalLink, Calendar, Shield, Sparkles } from 'lucide-react';

interface ModelDetailModalProps {
  model: ShowcaseModel | null;
  onClose: () => void;
  onOpenPatreonModal: () => void;
}

export const ModelDetailModal: React.FC<ModelDetailModalProps> = ({
  model,
  onClose,
  onOpenPatreonModal
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!model) return null;

  const images = model.galleryImages && model.galleryImages.length > 0 
    ? model.galleryImages 
    : [model.coverImage];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#131313] border border-[#2c2c2c] rounded-[2px] shadow-2xl p-6 sm:p-8 text-white max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#888888] hover:text-white bg-[#1e1e1e] hover:bg-[#282828] rounded-[2px] transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Visual Showcase (Images) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-4/3 w-full bg-[#0a0a0a] border border-[#242424] rounded-[2px] overflow-hidden group">
              <img
                src={images[activeImageIndex] || model.coverImage}
                alt={model.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm border border-[#333333] px-2.5 py-1 text-xs font-mono text-white rounded-[2px]">
                {model.scale}
              </div>
              {model.preSupported && (
                <div className="absolute top-3 right-3 bg-[#e02020] px-2.5 py-1 text-xs font-heading font-bold text-white rounded-[2px] uppercase tracking-wider">
                  100% Pre-Supported
                </div>
              )}
            </div>

            {/* Thumbnail switcher if multiple images */}
            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 h-16 rounded-[2px] overflow-hidden border transition-all ${
                      activeImageIndex === idx 
                        ? 'border-[#e02020] ring-1 ring-[#e02020]' 
                        : 'border-[#262626] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Specs bar */}
            <div className="grid grid-cols-3 gap-2 bg-[#0c0c0c] border border-[#1f1f1f] p-3 rounded-[2px] text-center text-xs font-mono">
              <div>
                <div className="text-[#777777]">PARTS COUNT</div>
                <div className="text-white font-bold mt-0.5">{model.piecesCount} Modular Bits</div>
              </div>
              <div className="border-x border-[#1f1f1f]">
                <div className="text-[#777777]">RELEASE DATE</div>
                <div className="text-white font-bold mt-0.5">{model.releaseDate}</div>
              </div>
              <div>
                <div className="text-[#777777]">FORMAT</div>
                <div className="text-white font-bold mt-0.5">STL + LYS</div>
              </div>
            </div>
          </div>

          {/* Model Info & Lore */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#e02020] uppercase tracking-wider">
                  <span>{model.category}</span>
                  <span>·</span>
                  <span>{model.faction}</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase mt-1">
                  {model.title}
                </h2>
                <div className="text-xs text-[#888888] font-mono mt-0.5">
                  Timeline Setting: {model.period}
                </div>
              </div>

              {/* Lore Quote */}
              <div className="bg-[#181818] border-l-2 border-[#e02020] p-3 rounded-[2px] text-xs font-body italic text-[#cccccc] leading-relaxed">
                &ldquo;{model.loreSnippet}&rdquo;
              </div>

              {/* Description */}
              <p className="font-body text-xs sm:text-sm text-[#a4a4a4] leading-relaxed">
                {model.description}
              </p>

              {/* Included Parts List */}
              <div>
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#e02020]" />
                  <span>Modular Kit Breakdown:</span>
                </h4>
                <div className="space-y-1.5 bg-[#0e0e0e] border border-[#202020] p-3 rounded-[2px]">
                  {model.includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#b8b8b8] font-body">
                      <Check className="w-3.5 h-3.5 text-[#e02020] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-4 border-t border-[#222222]">
              <button
                onClick={() => {
                  onClose();
                  onOpenPatreonModal();
                }}
                className="w-full py-3 bg-[#e02020] hover:bg-[#ff2525] text-white font-heading font-bold text-sm uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 shadow-md shadow-red-950/30 transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get This Release on Patreon / Tribes</span>
              </button>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#666666] px-1">
                <span>Tested on 8K Mono LCD</span>
                <span className="text-[#999999]">Lychee Slicer Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
