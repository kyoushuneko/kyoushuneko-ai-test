import React, { useState } from 'react';
import { X, Download, CheckCircle2, FileText, Layers, ShieldCheck, Printer } from 'lucide-react';

interface FreeStlModalProps {
  isOpen: boolean;
  onClose: () => void;
  subscriberEmail: string;
}

export const FreeStlModal: React.FC<FreeStlModalProps> = ({
  isOpen,
  onClose,
  subscriberEmail
}) => {
  const [downloadStarted, setDownloadStarted] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadStarted(true);
    // Create a real text file download explaining the pack & resin settings as a tangible artifact
    const content = `==================================================================
KYOUSHUNEKO MINIATURES - FREE PRINT-READY PROMO PACK
Model: Weird War Trench Grenadier (32mm Heroic Scale)
Verification Email: ${subscriberEmail}
==================================================================

INCLUDED ARCHIVE ASSETS:
1. trench_grenadier_32mm_presupported.stl (Calibrated for Elegoo Saturn / Anycubic Photon)
2. trench_grenadier_32mm_unsupported.stl (Raw sculpt with clean topology)
3. scenic_trench_duckboard_base_25mm.stl
4. lychee_scene_grenadier_v2.lys (Editable light support tree)

RECOMMENDED RESIN PRINTER SETTINGS:
- Layer Height: 0.030mm (30 microns) for optimal cloth fold and helmet rivets
- Base / Bottom Layers: 5 layers @ 25-30s exposure
- Normal Exposure: 1.8s - 2.3s (Standard 8K/12K Mono LCD resins, e.g., Siraya Tech Fast)
- Bottom Lift Distance: 7mm @ 60mm/min
- Normal Lift Speed: 120mm/min
- Rest Time / Light-off Delay: 1.0s before cure (reduces blooming and z-banding)

POST-PROCESSING PROTOCOL:
1. Wash in 99% Isopropyl Alcohol for 4 minutes (Ultrasonic cleaner recommended).
2. Immerse model in warm water (45°C - 50°C) for 30 seconds before peeling supports.
3. Post-cure under 405nm UV chamber for 3 to 4 minutes while submerged in water.

SUNDERED STEEL PROFILE:
Unit Type: Trench Shock Infantry
Range: 8" (Stielhandgranate) / 18" (Karabiner 98k)
Damage: High Concussion (Suppression +2)

DISCOUNT CODES:
Visit the Patron Hub on our website to claim 30% off back-catalog releases on MyMiniFactory!
Happy Printing!
- Kyoushuneko Studio Team
==================================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Kyoushuneko-Trench-Grenadier-STL-Pack-Guide.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#141414] border border-[#2e2e2e] rounded-[2px] shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#888888] hover:text-white bg-[#1e1e1e] hover:bg-[#282828] rounded-[2px] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-[#1f1212] border border-[#e02020]/40 rounded-[2px] flex items-center justify-center mx-auto mb-3 text-[#e02020]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-[#e02020] uppercase tracking-wider">
            Dispatch Registration Confirmed
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase mt-1">
            Your Free Print-Ready STL Is Ready!
          </h2>
          <p className="font-body text-sm text-[#999999] mt-2">
            A confirmation dispatch has been sent to <span className="text-white font-mono">{subscriberEmail || 'your email'}</span>. 
            You can download the instant starter kit and print configuration guide right now.
          </p>
        </div>

        {/* Model Spotlight Card */}
        <div className="bg-[#191919] border border-[#292929] rounded-[2px] p-4 sm:p-5 mb-6">
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <div className="w-32 h-32 sm:w-36 sm:h-36 shrink-0 bg-[#0d0d0d] border border-[#2c2c2c] rounded-[2px] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80" 
                alt="Weird War Trench Grenadier"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <span className="absolute bottom-1 right-1 bg-black/80 text-[10px] font-mono px-1 py-0.5 text-[#e02020]">
                32mm Scale
              </span>
            </div>

            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#888888]">
                <span>FREE LEAD MAGNET</span>
                <span>·</span>
                <span className="text-white">PRE-SUPPORTED</span>
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-white">
                Weird War Trench Grenadier
              </h3>
              <p className="font-body text-xs text-[#a0a0a0] leading-relaxed">
                Sculpted with authentic canvas gas mask folds, segmented torso cuirass, high-velocity stick grenades, and detailed trench duckboard base.
              </p>
              
              <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono text-[#777777]">
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#e02020]" />
                  <span>Chitubox &amp; Lychee Scene</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Printer className="w-3.5 h-3.5 text-[#e02020]" />
                  <span>30-Micron Calibrated</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-3">
          <button
            onClick={handleDownload}
            className="w-full py-3.5 bg-[#e02020] hover:bg-[#ff2525] text-white font-heading font-bold text-sm uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>{downloadStarted ? 'Download Package & Guide Again' : 'Download Free STL Package & Print Profile'}</span>
          </button>

          {downloadStarted && (
            <div className="p-3 bg-[#112415] border border-[#225529] rounded-[2px] text-center text-xs text-[#7fe08e] font-mono">
              ✓ Archive package &amp; slicing cheat sheet downloaded successfully!
            </div>
          )}

          <div className="text-center text-xs text-[#707070] font-body flex items-center justify-center gap-2 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#e02020]" />
            <span>Free personal use license included. No spam, unsubscribe anytime.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
