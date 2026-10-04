import { Faction } from '../types';

export const SUNDERED_STEEL_DATA = {
  title: 'Sundered Steel',
  subtitle: 'A Grim Dieselpunk & Occult Tabletop Skirmish Game',
  version: 'Beta v0.8.4 (Community Playtest Edition)',
  tagline: 'Where diesel smoke mingles with runic sorcery on torn earth.',
  scale: 'Designed for 28mm and 32mm Miniatures on 25mm to 80mm Bases',
  playtime: '45 - 75 Minutes',
  players: '2 Players (Solo / Coop AI Mode Included in Annex C)',
  tableSize: '36" x 36" or 48" x 48" Trench & Urban Battlegrounds',
  lore: `In the catastrophic winter of 1947, the global war did not end—it mutated.

Beneath the permafrost of the Karelian Isthmus and the blasted craters of the Western Front, exploratory drilling units unsealed veins of "Cinder-Iron"—an extraterrestrial obsidian metal charged with dormant kinetic arc energy. Within months, traditional military doctrines shattered.

Steam-jacketed exosuits and bipedal walkers superseded the tank. Occult shock battalions fused ancient clan rituals with high-velocity ballistic weaponry. Today, across poison gas mudlands and smog-choked ruins, small task forces of veterans fight bloody skirmishes for scrap, arcane reactors, and forgotten command bunkers.`,
  corePillars: [
    {
      title: 'Alternating Squad Activations',
      desc: 'No waiting 20 minutes while your opponent rolls. Turn-by-turn reactive priority where every move demands tactical trade-offs between Overwatch, Suppressive Volley, and Trench Rush.'
    },
    {
      title: 'Dynamic Suppression & Morale',
      desc: 'Bullets don’t just kill; they pin. Heavy machineguns and mortar fire stack suppression markers that degrade squad aim, force heads down, and demand heroic rally orders from officers.'
    },
    {
      title: 'Structural Walker Penetration',
      desc: 'Armored combat walkers feature modular hit charts. Target knee servos to cripple mobility, breach boiler vents to force emergency vent cycles, or blow off primary weapon hardpoints.'
    },
    {
      title: 'True Miniature Line of Sight',
      desc: 'Built specifically for Kyoushuneko 28mm and 32mm dynamic sculpts. Duckboards, sandbags, and ruined masonry provide tactile cover that directly impacts bullet trajectory.'
    }
  ],
  factions: [
    {
      id: 'karelian-frost',
      name: 'Karelian Frost-Veil Directorate',
      subtitle: 'The White Ghosts of the Arctic Taiga',
      allegiance: 'Northern Defensive League',
      badgeCode: 'KFD-01',
      summary: 'Master survivalists fighting across sub-zero tundra with silenced submachine guns, thermal cloaks, and nimble steam-scout walkers.',
      doctrine: 'Guerilla Blizzard Doctrine: Can deploy into no-mans-land undetected and gain +1 to hit targets caught in smoke or snowstorms.',
      keyUnits: ['Frost Jaeger Sharpshooters', 'Steam-Pioneer Breach Squad', 'Mark IV "Karhu" Bipedal Chassis'],
      iconAccent: '#38bdf8'
    },
    {
      id: 'imperial-chrysanthemum',
      name: 'Imperial Chrysanthemum Vanguard',
      subtitle: 'Sengoku Honor Meets High-Explosive Ballistics',
      allegiance: 'Pacific Shogunate Coalition',
      badgeCode: 'ICV-09',
      summary: 'Disciplined formations of armored Ashigaru backed by honor-bound samurai champions and walking gun platforms wielding rapid-firing teppo cannons.',
      doctrine: 'The Iron Code: Units never break from suppression when an Officer or Clan Banner bearer is within 6 inches.',
      keyUnits: ['Matchlock Teppo Line', 'Naginata Shock Retainers', 'Ryū Heavy Bipedal Gun Platform'],
      iconAccent: '#f59e0b'
    },
    {
      id: 'albion-commonwealth',
      name: 'Albion Commonwealth Expedition',
      subtitle: 'The Mud-Soaked 14th Armoured Veterans',
      allegiance: 'Allied Crown Forces',
      badgeCode: 'ACE-14',
      summary: 'Gritty trench fighters armed with drum-fed Vickers guns, tracked mechanized carriers, and Gurkha trench-raiding commandos.',
      doctrine: 'Steadfast Volley: May fire ranged weapons during opponent charge reactions at point-blank range without penalty.',
      keyUnits: ['Slouch Hat Trench Veterans', 'Bren Motorized Weapon Carrier', 'Vickers Sustained-Fire Team'],
      iconAccent: '#10b981'
    },
    {
      id: 'occult-iron-pact',
      name: 'Black Forest Occult Iron Pact',
      subtitle: 'Alchemical Reactors & Arc-Shock Specialists',
      allegiance: 'Dread Syndicate',
      badgeCode: 'BFP-44',
      summary: 'Ruthless storm pioneers wielding superheated flame throwers, runic obsidian halberds, and diesel-hydraulic Drachen behemoths.',
      doctrine: 'Overcharged Core: May ignite walker boiler reserves for an extra movement surge, risking overheat tokens for devastating impact.',
      keyUnits: ['Tesla-Halberd Stormbreakers', 'Flammenwerfer Shock pioneers', 'Mark VII "Drachen" Heavy Walker'],
      iconAccent: '#e02020'
    }
  ] as Faction[]
};
