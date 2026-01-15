"use client";

import { useState } from "react";

// Color palette
const colors = {
  cream: "#FDF8F3",
  warmWhite: "#FFFBF7",
  blush: "#F5E6DC",
  terracotta: "#C4887A",
  terracottaLight: "#E8B4A6",
  sage: "#8BA888",
  sageLight: "#B8D4B5",
  deepPlum: "#4A3F4B",
  softGray: "#9B9299",
};

// Navigation Component
function Navigation({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  const tabs = [
    { id: "home", icon: "🏠", label: "Home" },
    { id: "learn", icon: "📖", label: "Learn" },
    { id: "nutrition", icon: "🥗", label: "Nourish" },
    { id: "symptoms", icon: "🔍", label: "Search" },
    { id: "calm", icon: "🌸", label: "Calm" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white px-4 pt-3 pb-7 flex justify-around shadow-[0_-4px_20px_rgba(74,63,75,0.08)] rounded-t-3xl z-50">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all ${
            activeTab === tab.id ? "bg-[#F5E6DC]" : ""
          }`}
        >
          <span className="text-2xl">{tab.icon}</span>
          <span className={`text-xs ${activeTab === tab.id ? "font-semibold text-[#C4887A]" : "text-[#9B9299]"}`}>
            {tab.label}
          </span>
        </button>
      ))}
    </nav>
  );
}

// Home Screen
function HomeScreen({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";

  const dailyAffirmation = {
    main: "Your body prioritizes milk production over nearly everything else.",
    sub: "The hunger you feel? That's deep biological work happening. Honor it."
  };

  return (
    <div className="px-5 pt-6 pb-32">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm text-[#9B9299] mb-1">{greeting}</p>
        <h1 className="text-3xl font-semibold text-[#4A3F4B]">Mama 💛</h1>
      </div>

      {/* Daily Affirmation Card */}
      <div className="bg-gradient-to-br from-[#E8B4A6] to-[#F5E6DC] rounded-3xl p-7 mb-6 relative overflow-hidden">
        <div className="absolute -top-5 -right-5 text-8xl opacity-15">🌸</div>
        <p className="text-xs uppercase tracking-wider text-[#4A3F4B] opacity-70 mb-3">Today&apos;s reminder</p>
        <p className="text-xl font-medium text-[#4A3F4B] leading-snug mb-3">{dailyAffirmation.main}</p>
        <p className="text-sm text-[#4A3F4B] opacity-80 leading-relaxed">{dailyAffirmation.sub}</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button 
          onClick={() => setActiveTab("symptoms")}
          className="bg-white border border-[#F5E6DC] rounded-2xl p-5 text-left hover:shadow-md transition-shadow"
        >
          <span className="text-3xl block mb-2">🔍</span>
          <p className="text-base font-semibold text-[#4A3F4B] mb-1">Is this normal?</p>
          <p className="text-xs text-[#9B9299]">Search symptoms</p>
        </button>
        <button 
          onClick={() => setActiveTab("calm")}
          className="bg-gradient-to-br from-[#B8D4B5] to-[#8BA88880] rounded-2xl p-5 text-left hover:shadow-md transition-shadow"
        >
          <span className="text-3xl block mb-2">🌿</span>
          <p className="text-base font-semibold text-[#4A3F4B] mb-1">Need a moment?</p>
          <p className="text-xs text-[#4A3F4B] opacity-70">Breathing & calm</p>
        </button>
      </div>

      {/* Did You Know */}
      <div className="bg-[#FFFBF7] border border-[#F5E6DC] rounded-2xl p-5 mb-6">
        <p className="text-xs text-[#C4887A] font-semibold mb-2">✨ Did you know?</p>
        <p className="text-sm text-[#4A3F4B] leading-relaxed">
          Breastfeeding burns 300-500 calories per day. Your body is working hard, even when you&apos;re resting.
        </p>
      </div>

      {/* Mood Check */}
      <div className="bg-white border border-[#F5E6DC] rounded-2xl p-5">
        <div className="flex justify-between items-center mb-4">
          <p className="text-base font-semibold text-[#4A3F4B]">How are you feeling?</p>
          <span className="text-xs text-[#9B9299]">Optional</span>
        </div>
        <div className="flex gap-2">
          {["😴", "😊", "😔", "💪", "😰"].map((emoji, i) => (
            <button key={i} className="w-12 h-12 rounded-xl border border-[#F5E6DC] bg-white text-2xl hover:bg-[#F5E6DC] transition-colors">
              {emoji}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Learn Screen (Lactation 101)
function LearnScreen() {
  const categories = [
    { title: "How Lactation Works", icon: "🧬", lessons: ["What lactation actually is", "Milk production basics", "Supply & demand explained"], color: "#E8B4A6" },
    { title: "Your Hormones", icon: "⚡", lessons: ["Prolactin & what it does", "Oxytocin: the love hormone", "Cortisol & stress effects"], color: "#B8D4B5" },
    { title: "Common Experiences", icon: "💭", lessons: ["Why you feel so hungry", "Sleep changes explained", "Emotional shifts are normal"], color: "#F5E6DC" },
    { title: "Benefits Overview", icon: "💛", lessons: ["For your baby", "For your health", "Long-term impact"], color: "#D4A57466" },
  ];

  return (
    <div className="px-5 pt-6 pb-32">
      <h1 className="text-2xl font-semibold text-[#4A3F4B] mb-2">Lactation 101</h1>
      <p className="text-sm text-[#9B9299] mb-7 leading-relaxed">Understanding what your body is doing — clearly and calmly.</p>

      {categories.map((cat, idx) => (
        <div key={idx} className="bg-white rounded-2xl mb-4 overflow-hidden border border-[#F5E6DC]">
          <div style={{ backgroundColor: cat.color }} className="p-5 flex items-center gap-3">
            <span className="text-3xl">{cat.icon}</span>
            <div>
              <p className="text-base font-semibold text-[#4A3F4B]">{cat.title}</p>
              <p className="text-xs text-[#4A3F4B] opacity-70">{cat.lessons.length} lessons</p>
            </div>
          </div>
          <div className="px-5 py-2">
            {cat.lessons.map((lesson, i) => (
              <div key={i} className={`flex items-center justify-between py-3 ${i < cat.lessons.length - 1 ? "border-b border-[#F5E6DC]" : ""}`}>
                <span className="text-sm text-[#4A3F4B]">{lesson}</span>
                <span className="text-[#9B9299]">→</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Nutrition Screen
function NutritionScreen() {
  const nutrients = [
    { name: "Protein", desc: "Building blocks for milk", icon: "🥚" },
    { name: "Healthy Fats", desc: "Brain development support", icon: "🥑" },
    { name: "Complex Carbs", desc: "Sustained energy", icon: "🍠" },
    { name: "Iron", desc: "Prevents fatigue", icon: "🥬" },
  ];

  const lactationFoods = [
    { name: "Oats", benefit: "May boost supply", icon: "🥣" },
    { name: "Fennel", benefit: "Traditional galactagogue", icon: "🌿" },
    { name: "Salmon", benefit: "Omega-3 rich", icon: "🐟" },
    { name: "Leafy Greens", benefit: "Iron & vitamins", icon: "🥬" },
    { name: "Nuts & Seeds", benefit: "Healthy fats", icon: "🥜" },
    { name: "Legumes", benefit: "Protein & fiber", icon: "🫘" },
  ];

  return (
    <div className="px-5 pt-6 pb-32">
      <h1 className="text-2xl font-semibold text-[#4A3F4B] mb-2">Nourish Yourself</h1>
      <p className="text-sm text-[#9B9299] mb-7">Feed the mother. Support the milk.</p>

      {/* Hydration Card */}
      <div className="bg-gradient-to-br from-[#B8D4B5] to-white rounded-2xl p-5 mb-6 flex items-center gap-4">
        <span className="text-4xl">💧</span>
        <div>
          <p className="text-base font-semibold text-[#4A3F4B]">Stay Hydrated</p>
          <p className="text-sm text-[#4A3F4B] opacity-80">Aim for 100+ oz of fluids daily. Your milk is 87% water.</p>
        </div>
      </div>

      {/* Key Nutrients */}
      <p className="text-xs uppercase tracking-wide text-[#C4887A] font-semibold mb-3">Key Nutrients</p>
      <div className="grid grid-cols-2 gap-3 mb-7">
        {nutrients.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 border border-[#F5E6DC]">
            <span className="text-2xl block mb-2">{item.icon}</span>
            <p className="text-sm font-semibold text-[#4A3F4B] mb-1">{item.name}</p>
            <p className="text-xs text-[#9B9299]">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Lactation Foods */}
      <p className="text-xs uppercase tracking-wide text-[#C4887A] font-semibold mb-3">Foods That May Support Supply</p>
      <div className="bg-white rounded-2xl border border-[#F5E6DC] overflow-hidden">
        {lactationFoods.map((food, i) => (
          <div key={i} className={`flex items-center p-4 ${i < lactationFoods.length - 1 ? "border-b border-[#F5E6DC]" : ""}`}>
            <span className="text-2xl mr-4">{food.icon}</span>
            <div>
              <p className="text-sm font-medium text-[#4A3F4B]">{food.name}</p>
              <p className="text-xs text-[#9B9299]">{food.benefit}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-[#9B9299] mt-4 text-center leading-relaxed">
        Note: Individual responses vary. Consistent nursing/pumping is the primary driver of supply.
      </p>
    </div>
  );
}

// Symptoms Screen
function SymptomsScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedResult, setSelectedResult] = useState<any>(null);

  const commonSearches = ["anxiety", "rage", "sadness while nursing", "low supply", "exhaustion", "brain fog", "intense hunger", "night sweats"];

  const symptomData: { [key: string]: any } = {
    anxiety: {
      title: "Anxiety During Breastfeeding",
      isNormal: true,
      explanation: "Anxiety is very common during breastfeeding. Hormonal fluctuations, particularly in prolactin and cortisol, can affect mood regulation. Sleep deprivation amplifies these feelings.",
      hormones: ["Prolactin", "Cortisol", "Oxytocin"],
      helps: ["Rest when possible", "Deep breathing before feeds", "Limiting caffeine", "Support from others"],
      redFlags: ["Panic attacks interfering with care", "Intrusive thoughts", "Unable to sleep even when baby sleeps"],
    },
    rage: {
      title: "Breastfeeding Rage / Agitation",
      isNormal: true,
      explanation: "Breastfeeding agitation (also called nursing aversion) is a real phenomenon. It can feel like intense irritation, the urge to unlatch baby, or skin-crawling sensations. Often linked to hormonal shifts.",
      hormones: ["Oxytocin", "Dopamine", "Prolactin"],
      helps: ["Distraction during feeds", "Shorter feeding sessions", "Ensuring adequate rest", "Setting boundaries"],
      redFlags: ["Thoughts of harming yourself or baby", "Complete inability to nurse", "Severe depression alongside"],
    },
    exhaustion: {
      title: "Extreme Exhaustion",
      isNormal: true,
      explanation: "Profound fatigue is one of the most common experiences during breastfeeding. Your body is producing milk 24/7, which requires significant energy. Combined with interrupted sleep, exhaustion is expected.",
      hormones: ["Prolactin", "Thyroid hormones", "Iron levels"],
      helps: ["Sleep when baby sleeps", "Accept help from others", "Nutrient-dense foods", "Stay hydrated"],
      redFlags: ["Unable to get out of bed", "Fatigue with depression", "Hair loss or extreme cold sensitivity"],
    },
    "intense hunger": {
      title: "Intense Hunger",
      isNormal: true,
      explanation: "Breastfeeding burns 300-500 extra calories per day. Your body is signaling that it needs more fuel. This hunger is biological and appropriate.",
      hormones: ["Prolactin", "Ghrelin", "Leptin"],
      helps: ["Eat when hungry", "Keep snacks nearby", "Protein-rich foods", "Complex carbohydrates"],
      redFlags: ["Inability to feel satisfied no matter how much you eat", "Rapid weight loss", "Dizziness or fainting"],
    },
  };

  const handleSearch = (term: string) => {
    setSearchQuery(term);
    const key = term.toLowerCase();
    if (symptomData[key]) {
      setSelectedResult(symptomData[key]);
    } else {
      setSelectedResult(null);
    }
  };

  return (
    <div className="px-5 pt-6 pb-32">
      <h1 className="text-2xl font-semibold text-[#4A3F4B] mb-2">Is This Normal?</h1>
      <p className="text-sm text-[#9B9299] mb-6">Search any symptom for understanding and reassurance.</p>

      {/* Search Input */}
      <div className="bg-white rounded-2xl px-5 py-4 flex items-center gap-3 border-2 border-[#E8B4A6] mb-5">
        <span className="text-xl">🔍</span>
        <input
          type="text"
          placeholder="Search symptoms..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="flex-1 text-base text-[#4A3F4B] bg-transparent outline-none"
        />
      </div>

      {/* Common Searches */}
      {!selectedResult && (
        <>
          <p className="text-xs uppercase tracking-wide text-[#C4887A] font-semibold mb-3">Common Searches</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {commonSearches.map((term, i) => (
              <button key={i} onClick={() => handleSearch(term)} className="bg-[#F5E6DC] rounded-full px-4 py-2 text-sm text-[#4A3F4B]">
                {term}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Search Result */}
      {selectedResult && (
        <div className="bg-white rounded-3xl overflow-hidden border border-[#F5E6DC]">
          <div className={`p-6 ${selectedResult.isNormal ? "bg-[#B8D4B5]" : "bg-[#C4887A33]"}`}>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3 ${selectedResult.isNormal ? "bg-[#8BA888]" : "bg-[#C4887A]"}`}>
              {selectedResult.isNormal ? "✓ Common during breastfeeding" : "⚠ May need attention"}
            </span>
            <h2 className="text-xl font-semibold text-[#4A3F4B]">{selectedResult.title}</h2>
          </div>

          <div className="p-6">
            <p className="text-sm text-[#4A3F4B] leading-relaxed mb-6">{selectedResult.explanation}</p>

            <p className="text-xs uppercase tracking-wide text-[#C4887A] font-semibold mb-2">Related Hormones</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {selectedResult.hormones.map((h: string, i: number) => (
                <span key={i} className="bg-[#F5E6DC] px-3 py-1 rounded-xl text-xs text-[#4A3F4B]">{h}</span>
              ))}
            </div>

            <p className="text-xs uppercase tracking-wide text-[#8BA888] font-semibold mb-2">What May Help</p>
            <ul className="list-disc list-inside mb-5">
              {selectedResult.helps.map((h: string, i: number) => (
                <li key={i} className="text-sm text-[#4A3F4B] mb-2">{h}</li>
              ))}
            </ul>

            <div className="bg-[#C4887A22] rounded-2xl p-4">
              <p className="text-xs uppercase tracking-wide text-[#C4887A] font-semibold mb-2">⚠️ Seek Support If</p>
              <ul className="list-disc list-inside">
                {selectedResult.redFlags.map((f: string, i: number) => (
                  <li key={i} className="text-sm text-[#4A3F4B] mb-1">{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Calm Screen
function CalmScreen() {
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState("Ready");
  const [selectedSound, setSelectedSound] = useState<string | null>(null);

  const sounds = [
    { name: "Rain", icon: "🌧️" },
    { name: "Ocean", icon: "🌊" },
    { name: "Forest", icon: "🌲" },
    { name: "White Noise", icon: "〰️" },
  ];

  const practices = [
    { title: "Skin-to-skin contact", icon: "👶", desc: "Boosts oxytocin naturally" },
    { title: "Warm compress", icon: "🫖", desc: "Relaxes let-down reflex" },
    { title: "Dim lighting", icon: "🕯️", desc: "Signals safety to your body" },
    { title: "Gentle music", icon: "🎵", desc: "Lowers cortisol levels" },
  ];

  const startBreathing = () => {
    setBreathingActive(true);
    let phase = 0;
    const phases = ["Breathe in...", "Hold...", "Breathe out...", "Hold..."];
    const durations = [4000, 7000, 8000, 4000];
    
    const runPhase = () => {
      setBreathPhase(phases[phase]);
      setTimeout(() => {
        phase = (phase + 1) % 4;
        if (breathingActive) runPhase();
      }, durations[phase]);
    };
    runPhase();
  };

  const stopBreathing = () => {
    setBreathingActive(false);
    setBreathPhase("Ready");
  };

  return (
    <div className="px-5 pt-6 pb-32">
      <h1 className="text-2xl font-semibold text-[#4A3F4B] mb-2">Find Your Calm</h1>
      <p className="text-sm text-[#9B9299] mb-6">Help your body feel safe enough to make milk.</p>

      {/* Breathing Exercise */}
      <div className="bg-gradient-to-br from-[#B8D4B5] to-[#8BA88880] rounded-3xl p-8 text-center mb-6">
        <p className="text-xs uppercase tracking-wider text-[#4A3F4B] opacity-70 mb-4">Guided Breathing</p>
        <div className={`w-28 h-28 rounded-full bg-white/50 flex items-center justify-center mx-auto mb-5 transition-transform duration-1000 ${breathingActive ? "scale-110" : "scale-100"}`}>
          <span className="text-base font-semibold text-[#4A3F4B]">{breathPhase}</span>
        </div>
        <button
          onClick={breathingActive ? stopBreathing : startBreathing}
          className="bg-white px-8 py-3 rounded-full text-base font-semibold text-[#8BA888] shadow-lg"
        >
          {breathingActive ? "Stop" : "Start 4-7-8 Breathing"}
        </button>
      </div>

      {/* Soothing Sounds */}
      <p className="text-xs uppercase tracking-wide text-[#C4887A] font-semibold mb-3">Soothing Sounds</p>
      <div className="grid grid-cols-4 gap-3 mb-7">
        {sounds.map((sound, i) => (
          <button
            key={i}
            onClick={() => setSelectedSound(selectedSound === sound.name ? null : sound.name)}
            className={`rounded-2xl p-4 text-center border transition-colors ${selectedSound === sound.name ? "bg-[#B8D4B5] border-[#8BA888]" : "bg-white border-[#F5E6DC]"}`}
          >
            <span className="text-3xl block mb-1">{sound.icon}</span>
            <span className="text-xs text-[#4A3F4B]">{sound.name}</span>
          </button>
        ))}
      </div>

      {/* Oxytocin Boosters */}
      <p className="text-xs uppercase tracking-wide text-[#C4887A] font-semibold mb-3">Oxytocin Boosters</p>
      <div className="bg-white rounded-2xl border border-[#F5E6DC] overflow-hidden">
        {practices.map((p, i) => (
          <div key={i} className={`flex items-center p-4 ${i < practices.length - 1 ? "border-b border-[#F5E6DC]" : ""}`}>
            <span className="text-3xl mr-4 w-10 text-center">{p.icon}</span>
            <div>
              <p className="text-base font-medium text-[#4A3F4B]">{p.title}</p>
              <p className="text-xs text-[#9B9299]">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="bg-[#F5E6DC] rounded-2xl p-5 mt-6 text-center">
        <p className="text-sm text-[#4A3F4B] italic">&quot;Rest is not a reward. It&apos;s a requirement.&quot;</p>
      </div>
    </div>
  );
}

// Main App
export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const renderScreen = () => {
    switch (activeTab) {
      case "home": return <HomeScreen setActiveTab={setActiveTab} />;
      case "learn": return <LearnScreen />;
      case "nutrition": return <NutritionScreen />;
      case "symptoms": return <SymptomsScreen />;
      case "calm": return <CalmScreen />;
      default: return <HomeScreen setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3] max-w-md mx-auto">
      {renderScreen()}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}