export interface Booster {
  id: string;
  title: string;
  icon: string;
  desc: string;
  duration: string;
  benefit: string;
}

export const boosters: Booster[] = [
  // Original 8
  {
    id: 'skin-to-skin',
    title: "Skin-to-Skin Contact",
    icon: "👶",
    desc: "Hold baby against your bare chest for 10-20 minutes",
    duration: "10-20 min",
    benefit: "Triggers oxytocin release for both you and baby"
  },
  {
    id: 'warm-compress',
    title: "Warm Compress",
    icon: "🧣",
    desc: "Apply a warm towel to your breasts before nursing",
    duration: "5 min",
    benefit: "Relaxes tissue and encourages letdown"
  },
  {
    id: 'dim-lighting',
    title: "Dim the Lights",
    icon: "🕯️",
    desc: "Create a calm, dim environment for nursing",
    duration: "During feeds",
    benefit: "Reduces stimulation and promotes relaxation"
  },
  {
    id: 'gentle-music',
    title: "Gentle Music",
    icon: "🎵",
    desc: "Play soft, calming music while nursing",
    duration: "During feeds",
    benefit: "Lowers cortisol, raises oxytocin"
  },
  {
    id: 'deep-breathing',
    title: "Deep Breathing",
    icon: "🌬️",
    desc: "Take 5 slow, deep breaths before latching",
    duration: "1 min",
    benefit: "Activates parasympathetic nervous system"
  },
  {
    id: 'smell-baby',
    title: "Smell Your Baby",
    icon: "👃",
    desc: "Inhale your baby's scent from the top of their head",
    duration: "A few breaths",
    benefit: "Powerful oxytocin trigger hardwired in your brain"
  },
  {
    id: 'gaze-at-baby',
    title: "Gaze at Baby",
    icon: "👁️",
    desc: "Make eye contact with your baby while nursing",
    duration: "During feeds",
    benefit: "Mutual gaze releases oxytocin for both of you"
  },
  {
    id: 'warm-drink',
    title: "Drink Something Warm",
    icon: "☕",
    desc: "Sip warm water, tea, or broth while nursing",
    duration: "During feeds",
    benefit: "Warmth promotes relaxation and letdown"
  },

  // 16 new boosters
  {
    id: 'get-sunlight',
    title: "Get Some Sunlight",
    icon: "☀️",
    desc: "Step outside or sit by a sunny window for a few minutes",
    duration: "5-10 min",
    benefit: "Sunlight boosts serotonin, which converts to melatonin and supports milk flow"
  },
  {
    id: 'watch-funny',
    title: "Watch Something Funny",
    icon: "😂",
    desc: "Watch a short clip or show that makes you genuinely laugh",
    duration: "5-10 min",
    benefit: "Laughter releases endorphins and oxytocin simultaneously"
  },
  {
    id: 'hum-or-sing',
    title: "Hum or Sing",
    icon: "🎶",
    desc: "Hum a melody or sing softly to your baby",
    duration: "A few minutes",
    benefit: "Vibrations from humming stimulate vagus nerve and calm your nervous system"
  },
  {
    id: 'pet-animal',
    title: "Pet an Animal",
    icon: "🐾",
    desc: "Spend a moment petting your dog, cat, or any furry friend",
    duration: "5 min",
    benefit: "Animal bonding releases oxytocin in both you and the animal"
  },
  {
    id: 'baby-photos',
    title: "Look at Baby Photos",
    icon: "📸",
    desc: "Scroll through your favorite photos or videos of your baby",
    duration: "2-5 min",
    benefit: "Visual connection triggers the same oxytocin as physical closeness"
  },
  {
    id: 'dark-chocolate',
    title: "Eat Dark Chocolate",
    icon: "🍫",
    desc: "Savor a small piece of dark chocolate mindfully",
    duration: "A moment",
    benefit: "Dark chocolate contains compounds that promote endorphin release"
  },
  {
    id: 'gentle-stretching',
    title: "Gentle Stretching",
    icon: "🧘",
    desc: "Do a few slow neck rolls, shoulder stretches, or side bends",
    duration: "3-5 min",
    benefit: "Releases tension in nursing muscles and improves circulation"
  },
  {
    id: 'warm-bath',
    title: "Warm Bath or Shower",
    icon: "🛁",
    desc: "Take a warm bath or let a hot shower run over your shoulders",
    duration: "10-15 min",
    benefit: "Heat relaxes muscles and stimulates oxytocin and letdown"
  },
  {
    id: 'gratitudes',
    title: "Write Three Gratitudes",
    icon: "📝",
    desc: "Jot down three things you're grateful for today",
    duration: "2 min",
    benefit: "Gratitude practice lowers cortisol and shifts your nervous system to rest mode"
  },
  {
    id: 'hug-someone',
    title: "Hug Someone for 20 Seconds",
    icon: "🤗",
    desc: "Share a long, lingering hug with your partner or loved one",
    duration: "20 seconds",
    benefit: "A 20-second hug triggers significant oxytocin release"
  },
  {
    id: 'foot-massage',
    title: "Foot Massage",
    icon: "🦶",
    desc: "Gently massage your own feet or ask someone to rub them",
    duration: "5-10 min",
    benefit: "Foot reflexology activates relaxation pathways throughout your body"
  },
  {
    id: 'nature-sounds',
    title: "Nature Sounds",
    icon: "🌿",
    desc: "Listen to birdsong, rain, or flowing water for a few minutes",
    duration: "5-10 min",
    benefit: "Natural soundscapes lower cortisol and heart rate"
  },
  {
    id: 'smell-lavender',
    title: "Smell Lavender",
    icon: "💜",
    desc: "Inhale lavender essential oil or a sachet of dried lavender",
    duration: "A few breaths",
    benefit: "Lavender activates parasympathetic response and promotes calm"
  },
  {
    id: 'eat-mindfully',
    title: "Eat Mindfully",
    icon: "🥗",
    desc: "Sit down and eat one meal slowly, savoring each bite",
    duration: "15 min",
    benefit: "Mindful eating reduces stress and supports digestion and nourishment"
  },
  {
    id: 'call-friend',
    title: "Call a Friend",
    icon: "📱",
    desc: "Call or voice-note a friend who makes you feel good",
    duration: "5-15 min",
    benefit: "Social connection is one of the strongest natural oxytocin triggers"
  },
  {
    id: 'walk-barefoot',
    title: "Walk Barefoot",
    icon: "🌱",
    desc: "Walk barefoot on grass, sand, or a soft rug for a few minutes",
    duration: "3-5 min",
    benefit: "Grounding through your feet calms the nervous system and reduces inflammation"
  },
];

/**
 * Returns `count` boosters for today using a date-seeded shuffle.
 * Same 8 boosters all day, different set tomorrow.
 */
export function getDailyBoosters(count: number = 8): Booster[] {
  const today = new Date();
  const dateStr = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

  // Simple date-seeded pseudo-random number generator
  let seed = 0;
  for (let i = 0; i < dateStr.length; i++) {
    seed = ((seed << 5) - seed + dateStr.charCodeAt(i)) | 0;
  }

  const seededRandom = () => {
    seed = (seed * 1664525 + 1013904223) | 0;
    return (seed >>> 0) / 4294967296;
  };

  // Fisher-Yates shuffle with seeded random
  const shuffled = [...boosters];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}
