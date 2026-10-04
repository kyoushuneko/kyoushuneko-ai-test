import React, { useState } from 'react';
import { X, Download, FileText, Printer, CheckCircle, ShieldAlert, Award } from 'lucide-react';
import { SUNDERED_STEEL_DATA } from '../data/gameRules';

interface RulebookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RulebookModal: React.FC<RulebookModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadSuccess(true);

    const pdfContent = `SUNDERED STEEL: BETA PLAYTEST RULEBOOK v0.8.4
Studio: Kyoushuneko Miniatures
Tagline: Where diesel smoke mingles with runic sorcery.
Scale: 28mm & 32mm Heroic Skirmish

============================================================
1. CORE TURN SEQUENCE (ALTERNATING ACTIVATIONS)
============================================================
Each Battle Round consists of 3 Phases:
- INITIATIVE PHASE: Both commanders roll 2D10 + Commander Tactical Trait. Highest chooses first activation.
- ACTIVATION PHASE: Players alternate selecting 1 Squad or 1 Walker until all units have acted.
  Actions per Activation (Choose 2):
  * MOVE: Up to Base Movement (Infantry: 5", Heavy Walker: 6", Scout: 8")
  * ADVANCE & FIRE: Move 3" and fire ranged weapons with -1 to hit penalty.
  * AIM & FIRE: Stationary stance. +1 to hit target within weapon optimal bracket.
  * CHARGE: Move Base Movement + 1D6" into base contact. Must pass Morale if suppressed.
  * RALLY / REMOVE PIN: Officer commands squad to shed 1D3 Suppression tokens.
- END OF ROUND CONSOLIDATION: Remove 1 natural suppression marker from all squads. Check battlefield objectives.

============================================================
2. BALLISTICS & ARMOR PENETRATION (AP)
============================================================
To Hit: Roll D10 against Soldier Ballistic Skill (BS).
- Base BS: Recruit (6+), Regular (5+), Veteran (4+), Officer (3+).
- Modifiers: Light Cover (+1 to Target Defense), Heavy Bunker (+2 to Target Defense), Aimed (+1 to hit).

Damage & Armor Check:
- Weapon Strength (STR) vs Target Armor (ARM).
- If STR >= ARM: Target rolls Armor Save or takes 1 Casualty.
- High-Caliber / Anti-Tank weapons deal Armor Piercing (AP-1 to AP-3), directly reducing target armor roll.

============================================================
3. DYNAMIC SUPPRESSION SYSTEM
============================================================
Whenever a unit is targeted by Burst weapons (Machine Guns, Volley Teppo, Mortars):
- Gain 1 Suppression Pin for being attacked, plus 1 Pin for every casualty suffered.
- 1-2 Pins: Squad is Shaken (-1 Movement, -1 Ballistics).
- 3+ Pins: Squad is PINNED. Unit may only take RALLY actions until pins are reduced.

============================================================
4. WALKER STRUCTURAL INTEGRITY CHART
============================================================
When a Bipedal Combat Chassis takes an AP penetration hit, roll 1D6 on the Walker Mishap Table:
1: Optical Sensor Blinded (-2 to shooting next activation)
2: Hydraulic Leg Piston Rupture (Movement halved)
3: Boiler Steam Leak (Lose 1 Action per turn until repaired)
4: Weapon Hardpoint Detonation (Primary cannon disabled)
5: Gyroscope Failure (Walker falls prone; must spend full turn righting itself)
6: Catastrophic Core Meltdown (5" explosive blast radius; 2D6 Damage)

============================================================
5. FACTIONS SUMMARY
============================================================
- Karelian Frost-Veil Directorate: Blizzard infiltration, submachine gun bursts, steam shields.
- Imperial Chrysanthemum Vanguard: Sengoku discipline, rapid matchlocks, naginata shock elites.
- Albion Commonwealth: Mud-soaked 14th Armoured, sustained Vickers fire, Gurkha commandos.
- Black Forest Occult Iron Pact: Arc-shock halberds, heavy flame projectors, Drachen walkers.

Official feedback portal: Discord #sundered-steel-playtest
(c) Kyoushuneko Miniatures. Free community playtest edition.
============================================================`;

    const blob = new Blob([pdfContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sundered-Steel-Beta-Rulebook-v0.8.4.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#141414] border border-[#2e2e2e] rounded-[2px] shadow-2xl p-6 sm:p-8 text-white max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#888888] hover:text-white bg-[#1e1e1e] hover:bg-[#282828] rounded-[2px] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-[#1e1414] border border-[#e02020]/40 rounded-[2px] flex items-center justify-center text-[#e02020]">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono text-[#e02020] uppercase tracking-wider">
              Official PDF Download &amp; Reference Sheet
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase">
              Sundered Steel: Beta Rulebook v0.8.4
            </h2>
          </div>
        </div>

        <p className="font-body text-xs sm:text-sm text-[#999999] mb-6">
          Everything you need to field your 28mm and 32mm miniatures on the tabletop. Includes alternating activation sequences, weapon ballistics, suppression markers, and the modular Walker damage table.
        </p>

        {/* Interactive Quick Reference Document Shell */}
        <div className="bg-[#0b0b0b] border border-[#222222] rounded-[2px] p-5 mb-6 font-mono text-xs text-[#b8b8b8] space-y-4 max-h-72 overflow-y-auto">
          <div className="border-b border-[#222222] pb-3 flex justify-between items-center text-white">
            <span className="font-heading font-bold text-sm uppercase text-[#e02020]">
              Quick Reference Combat Grid
            </span>
            <span className="text-[11px] text-[#777777]">PAGE 1 OF 18</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#121212] p-3 border border-[#1e1e1e] rounded-[2px]">
              <div className="text-white font-bold mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#e02020] rounded-full" />
                1. Round Phases
              </div>
              <ul className="text-[11px] text-[#999999] space-y-1 list-disc list-inside">
                <li>Initiative: 2D10 + Tactical Trait</li>
                <li>Alternating Squad Activations</li>
                <li>2 Actions: Move, Fire, Aim, Charge</li>
                <li>End of Round: Shed 1 Pin</li>
              </ul>
            </div>

            <div className="bg-[#121212] p-3 border border-[#1e1e1e] rounded-[2px]">
              <div className="text-white font-bold mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#e02020] rounded-full" />
                2. Suppression Rules
              </div>
              <ul className="text-[11px] text-[#999999] space-y-1 list-disc list-inside">
                <li>1 Pin on every burst attack incoming</li>
                <li>1-2 Pins: Shaken (-1 Move, -1 BS)</li>
                <li>3+ Pins: Pinned (Rally actions only)</li>
                <li>Officers grant +2 to Morale roll</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#121212] p-3 border border-[#1e1e1e] rounded-[2px]">
            <div className="text-white font-bold mb-2 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-[#e02020]" />
              Walker Critical Penetration Table (1D6)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[10px] text-[#888888]">
              <div>1: Sensor Blinded (-2 BS)</div>
              <div>2: Piston Ruptured (Half Spd)</div>
              <div>3: Steam Leak (Lose 1 Act)</div>
              <div>4: Weapon Blown Off</div>
              <div>5: Gyro Failure (Prone)</div>
              <div className="text-[#e02020] font-bold">6: Boiler Meltdown (2D6 Area)</div>
            </div>
          </div>
        </div>

        {/* Download Action Bar */}
        <div className="space-y-3">
          <button
            onClick={handleDownload}
            className="w-full py-3.5 bg-[#e02020] hover:bg-[#ff2525] text-white font-heading font-bold text-sm uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>{downloadSuccess ? 'Download Beta Rulebook PDF Again' : 'Download Complete Beta Rulebook (PDF)'}</span>
          </button>

          {downloadSuccess && (
            <div className="p-3 bg-[#112415] border border-[#225529] rounded-[2px] text-center text-xs text-[#7fe08e] font-mono flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Sundered Steel Beta Rulebook downloaded! Ready for your tabletop gaming session.</span>
            </div>
          )}

          <div className="flex items-center justify-between text-xs text-[#777777] font-body pt-1">
            <span>Free Community Playtest Edition</span>
            <span>File size: ~2.4MB printable PDF · Version 0.8.4</span>
          </div>
        </div>
      </div>
    </div>
  );
};
