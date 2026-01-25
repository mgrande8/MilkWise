"use client";

import { useState, useEffect, useRef } from "react";
import {
  symptoms,
  searchSymptoms,
  commonSearches,
  courses,
  getDailyAffirmation,
  getRandomAffirmation,
  getDailyFact,
  getRandomFact,
  type Symptom,
  type Course,
  type Affirmation,
  type Fact,
} from "../data";

// ============================================
// NAVIGATION COMPONENT
// ============================================
function Navigation({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  const tabs = [
    { id: "home", label: "Home", icon: (active: boolean) => (
      <svg className={`w-6 h-6 ${active ? 'stroke-[#C4887A]' : 'stroke-[#9B9299]'}`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    )},
    { id: "learn", label: "Learn", icon: (active: boolean) => (
      <svg className={`w-6 h-6 ${active ? 'stroke-[#C4887A]' : 'stroke-[#9B9299]'}`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    )},
    { id: "symptoms", label: "Search", icon: (active: boolean) => (
      <svg className={`w-6 h-6 ${active ? 'stroke-[#C4887A]' : 'stroke-[#9B9299]'}`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    )},
    { id: "calm", label: "Calm", icon: (active: boolean) => (
      <svg className={`w-6 h-6 ${active ? 'stroke-[#C4887A]' : 'stroke-[#9B9299]'}`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    )},
    { id: "profile", label: "Profile", icon: (active: boolean) => (
      <svg className={`w-6 h-6 ${active ? 'stroke-[#C4887A]' : 'stroke-[#9B9299]'}`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    )},
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg px-2 pt-2 pb-6 flex justify-around shadow-[0_-2px_20px_rgba(74,63,75,0.08)] rounded-t-[24px] z-50 max-w-md mx-auto border-t border-[#F5E6DC]/50">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-200 ${
            activeTab === tab.id
              ? "bg-[#F5E6DC]/70"
              : "hover:bg-[#F5E6DC]/30"
          }`}
        >
          {tab.icon(activeTab === tab.id)}
          <span
            className={`text-[10px] font-medium tracking-wide ${
              activeTab === tab.id ? "text-[#C4887A]" : "text-[#9B9299]"
            }`}
          >
            {tab.label}
          </span>
        </button>
      ))}
    </nav>
  );
}

// ============================================
// HOME SCREEN
// ============================================
function HomeScreen({
  setActiveTab,
  setShowTracker,
}: {
  setActiveTab: (tab: string) => void;
  setShowTracker: (show: boolean) => void;
}) {
  const [affirmation, setAffirmation] = useState<Affirmation | null>(null);
  const [fact, setFact] = useState<Fact | null>(null);
  const [isAffirmationAnimating, setIsAffirmationAnimating] = useState(false);
  const [checkIns, setCheckIns] = useState<string[]>([]);

  useEffect(() => {
    setAffirmation(getDailyAffirmation());
    setFact(getDailyFact());
    // Load check-ins from localStorage
    const saved = localStorage.getItem('weeklyCheckIns');
    if (saved) setCheckIns(JSON.parse(saved));
  }, []);

  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12
      ? "Good morning"
      : currentHour < 17
      ? "Good afternoon"
      : "Good evening";

  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  const handleNewAffirmation = () => {
    setIsAffirmationAnimating(true);
    setTimeout(() => {
      setAffirmation(getRandomAffirmation());
      setIsAffirmationAnimating(false);
    }, 150);
  };

  const handleNewFact = () => {
    setFact(getRandomFact());
  };

  // Get week days for progress tracker
  const getWeekDays = () => {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const today = new Date();
    const dayOfWeek = today.getDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

    return days.map((day, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + mondayOffset + i);
      const dateStr = date.toISOString().split('T')[0];
      const isToday = date.toDateString() === today.toDateString();
      const isFuture = date > today;
      const isCompleted = checkIns.includes(dateStr);

      return { day, isToday, isFuture, isCompleted };
    });
  };

  const weekDays = getWeekDays();
  const completedCount = weekDays.filter(d => d.isCompleted).length;

  return (
    <div className="px-5 pt-8 pb-32">
      {/* Personalized Greeting */}
      <div className="mb-6 animate-fade-in">
        <h1 className="text-[28px] font-semibold text-[#4A3F4B] tracking-tight">
          {greeting}, Mama <span className="text-2xl">☀️</span>
        </h1>
        <p className="text-[14px] text-[#9B9299] mt-1">{dateString}</p>
      </div>

      {/* Today's Affirmation Card */}
      <button
        onClick={handleNewAffirmation}
        className="w-full bg-gradient-to-br from-[#F5E6DC] to-[#FDF8F3] rounded-[20px] p-6 mb-4 relative overflow-hidden shadow-sm text-left transition-transform active:scale-[0.98]"
      >
        <p className="text-[12px] uppercase tracking-[0.12em] text-[#C4887A] font-semibold mb-3">
          💛 Today&apos;s Affirmation
        </p>
        <p className={`text-[18px] font-semibold text-[#4A3F4B] leading-relaxed text-center transition-opacity duration-150 ${isAffirmationAnimating ? 'opacity-0' : 'opacity-100'}`}>
          &ldquo;{affirmation?.text || "Your body knows exactly what your baby needs."}&rdquo;
        </p>
        {affirmation?.subtext && (
          <p className={`text-[13px] text-[#4A3F4B]/60 leading-relaxed text-center mt-2 transition-opacity duration-150 ${isAffirmationAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {affirmation.subtext}
          </p>
        )}
        <p className="text-[12px] text-[#9B9299] text-center mt-4">
          Tap for a new one
        </p>
      </button>

      {/* Did You Know Card - Sage background */}
      <button
        onClick={handleNewFact}
        className="w-full bg-gradient-to-br from-[#8BA888] to-[#7A9A77] rounded-[20px] p-6 mb-4 relative overflow-hidden shadow-sm text-left transition-transform active:scale-[0.98]"
      >
        <p className="text-[12px] uppercase tracking-[0.12em] text-white/80 font-semibold mb-3">
          💡 Did You Know?
        </p>
        <p className="text-[16px] font-semibold text-white leading-relaxed text-center">
          {fact?.text || "Your milk changes composition throughout the day — morning milk is different from evening milk."}
        </p>
        {fact?.source && (
          <p className="text-[11px] text-white/60 text-center mt-3 italic">
            Source: {fact.source}
          </p>
        )}
        <p className="text-[12px] text-white/70 text-center mt-3">
          Tap for another fact
        </p>
      </button>

      {/* Daily Check-In Card */}
      <div className="bg-[#8BA888]/10 rounded-[20px] p-5 mb-4 border-2 border-[#8BA888]/30">
        <div className="flex items-start gap-3">
          <div className="text-2xl">📝</div>
          <div className="flex-1">
            <p className="text-[18px] font-semibold text-[#4A3F4B] mb-1">
              Daily Check-In
            </p>
            <p className="text-[14px] text-[#4A3F4B]/70 mb-4">
              How are you feeling today?
            </p>
            <button
              onClick={() => setShowTracker(true)}
              className="bg-[#C4887A] text-white px-5 py-2.5 rounded-xl font-semibold text-[14px] hover:bg-[#b37a6d] transition-colors"
            >
              Start Check-In →
            </button>
            <p className="text-[12px] text-[#9B9299] mt-3">
              Takes only 30 seconds 🕐
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <p className="text-[11px] uppercase tracking-[0.15em] text-[#9B9299] font-semibold mb-3 mt-2">
        Quick Actions
      </p>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <button
          onClick={() => setActiveTab("symptoms")}
          className="bg-white rounded-[16px] p-4 text-center border border-[#E5E5E5] hover:border-[#8BA888] hover:-translate-y-0.5 transition-all"
        >
          <span className="text-2xl block mb-2">🔍</span>
          <p className="text-[14px] font-semibold text-[#4A3F4B]">Search</p>
          <p className="text-[11px] text-[#9B9299]">Symptoms</p>
        </button>
        <button
          onClick={() => setActiveTab("learn")}
          className="bg-white rounded-[16px] p-4 text-center border border-[#E5E5E5] hover:border-[#8BA888] hover:-translate-y-0.5 transition-all"
        >
          <span className="text-2xl block mb-2">📚</span>
          <p className="text-[14px] font-semibold text-[#4A3F4B]">Learn</p>
          <p className="text-[11px] text-[#9B9299]">Courses</p>
        </button>
        <button
          onClick={() => setActiveTab("calm")}
          className="bg-white rounded-[16px] p-4 text-center border border-[#E5E5E5] hover:border-[#8BA888] hover:-translate-y-0.5 transition-all"
        >
          <span className="text-2xl block mb-2">🍃</span>
          <p className="text-[14px] font-semibold text-[#4A3F4B]">Calm</p>
          <p className="text-[11px] text-[#9B9299]">Zone</p>
        </button>
        <button
          onClick={() => setShowTracker(true)}
          className="bg-white rounded-[16px] p-4 text-center border border-[#E5E5E5] hover:border-[#8BA888] hover:-translate-y-0.5 transition-all"
        >
          <span className="text-2xl block mb-2">📊</span>
          <p className="text-[14px] font-semibold text-[#4A3F4B]">Tracker</p>
          <p className="text-[11px] text-[#9B9299]">History</p>
        </button>
      </div>

      {/* Weekly Progress Tracker */}
      <div className="bg-[#F5E6DC]/50 rounded-[16px] p-4">
        <p className="text-[14px] font-semibold text-[#4A3F4B] mb-3">
          Your Week So Far
        </p>
        <div className="flex justify-between mb-3">
          {weekDays.map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-[11px] text-[#9B9299] font-medium">{d.day}</span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                d.isCompleted
                  ? 'bg-[#8BA888] text-white'
                  : d.isToday
                    ? 'border-2 border-[#C4887A] text-[#C4887A]'
                    : d.isFuture
                      ? 'bg-[#E5E5E5]/50 text-[#9B9299]'
                      : 'bg-[#E5E5E5] text-[#9B9299]'
              }`}>
                {d.isCompleted ? '✓' : d.isToday ? '○' : '·'}
              </div>
            </div>
          ))}
        </div>
        <p className="text-[14px] text-[#4A3F4B]">
          {completedCount} check-in{completedCount !== 1 ? 's' : ''} this week 🌱
        </p>
      </div>
    </div>
  );
}

// ============================================
// LEARN SCREEN (Education Hub)
// ============================================
function LearnScreen() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [currentSection, setCurrentSection] = useState(0);

  if (selectedCourse) {
    return (
      <CourseView
        course={selectedCourse}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        onBack={() => {
          setSelectedCourse(null);
          setCurrentSection(0);
        }}
      />
    );
  }

  return (
    <div className="px-5 pt-8 pb-32">
      <h1 className="text-[24px] font-semibold text-[#4A3F4B] mb-1 tracking-tight">
        Education Hub
      </h1>
      <p className="text-sm text-[#9B9299] mb-6 leading-relaxed">
        Science-backed knowledge to empower your journey
      </p>

      {/* Free Course */}
      <p className="text-[11px] uppercase tracking-[0.15em] text-[#8BA888] font-semibold mb-3">
        Free Course
      </p>
      {courses
        .filter((c) => !c.isPro)
        .map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onSelect={() => setSelectedCourse(course)}
          />
        ))}

      {/* Pro Courses */}
      <div className="flex items-center gap-2 mb-3 mt-6">
        <p className="text-[11px] uppercase tracking-[0.15em] text-[#C4887A] font-semibold">
          Pro Courses
        </p>
        <span className="text-[10px] bg-gradient-to-r from-[#C4887A] to-[#E8B4A6] text-white px-2 py-0.5 rounded-full font-medium">
          $8.99/mo
        </span>
      </div>
      {courses
        .filter((c) => c.isPro)
        .map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onSelect={() => setSelectedCourse(course)}
          />
        ))}
    </div>
  );
}

function CourseCard({
  course,
  onSelect,
}: {
  course: Course;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className="w-full bg-white rounded-[16px] mb-3 overflow-hidden border border-[#F5E6DC] hover:shadow-md hover:border-[#E8B4A6]/50 transition-all duration-200 text-left"
    >
      <div
        className="px-5 py-4 flex items-center gap-4"
        style={{ backgroundColor: `${course.color}30` }}
      >
        <span className="text-3xl">{course.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-[15px] font-semibold text-[#4A3F4B] truncate">
              {course.title}
            </p>
            {course.isPro && (
              <svg className="w-4 h-4 text-[#C4887A] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <p className="text-xs text-[#9B9299] mt-0.5">{course.description}</p>
        </div>
        <div className="flex items-center gap-1 text-xs text-[#9B9299] flex-shrink-0">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          {course.readTime}
        </div>
      </div>
    </button>
  );
}

function CourseView({
  course,
  currentSection,
  setCurrentSection,
  onBack,
}: {
  course: Course;
  currentSection: number;
  setCurrentSection: (n: number) => void;
  onBack: () => void;
}) {
  const section = course.sections[currentSection];
  const progress = ((currentSection + 1) / course.sections.length) * 100;

  return (
    <div className="px-5 pt-6 pb-32">
      {/* Header */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[#9B9299] mb-4 hover:text-[#4A3F4B] transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <span className="text-sm font-medium">Back to courses</span>
      </button>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[11px] text-[#9B9299] font-medium">
            Section {currentSection + 1} of {course.sections.length}
          </span>
          <span className="text-[11px] text-[#9B9299] font-medium">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-1.5 bg-[#F5E6DC] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#C4887A] to-[#E8B4A6] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Course title */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{course.icon}</span>
        <h1 className="text-lg font-semibold text-[#4A3F4B]">{course.title}</h1>
      </div>

      {/* Section content */}
      <div className="bg-white rounded-[20px] p-6 border border-[#F5E6DC] mb-6">
        <h2 className="text-xl font-semibold text-[#4A3F4B] mb-4">
          {section.title}
        </h2>
        <div className="prose prose-sm max-w-none">
          {section.content.split("\n\n").map((paragraph, idx) => (
            <p
              key={idx}
              className="text-[14px] text-[#4A3F4B]/85 leading-relaxed mb-4 last:mb-0"
              dangerouslySetInnerHTML={{
                __html: paragraph
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-[#4A3F4B]">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  .replace(/^- (.*)/gm, '<span class="block ml-4 relative before:content-[\'•\'] before:absolute before:-left-3 before:text-[#C4887A]">$1</span>')
                  .replace(/^✓ (.*)/gm, '<span class="block ml-4 relative before:content-[\'✓\'] before:absolute before:-left-4 before:text-[#8BA888] before:font-bold">$1</span>')
                  .replace(/^✗ (.*)/gm, '<span class="block ml-4 relative before:content-[\'✗\'] before:absolute before:-left-4 before:text-[#C4887A] before:font-bold">$1</span>'),
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3">
        {currentSection > 0 && (
          <button
            onClick={() => setCurrentSection(currentSection - 1)}
            className="flex-1 py-3 px-4 rounded-xl border border-[#F5E6DC] text-[#4A3F4B] font-medium hover:bg-[#F5E6DC]/50 transition-colors"
          >
            Previous
          </button>
        )}
        {currentSection < course.sections.length - 1 ? (
          <button
            onClick={() => setCurrentSection(currentSection + 1)}
            className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#C4887A] to-[#E8B4A6] text-white font-medium hover:opacity-90 transition-opacity"
          >
            Continue
          </button>
        ) : (
          <button
            onClick={onBack}
            className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#8BA888] to-[#B8D4B5] text-white font-medium hover:opacity-90 transition-opacity"
          >
            Complete Course ✓
          </button>
        )}
      </div>
    </div>
  );
}

// ============================================
// SYMPTOMS SCREEN
// ============================================
function SymptomsScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Symptom[]>([]);
  const [selectedSymptom, setSelectedSymptom] = useState<Symptom | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setSearchResults(searchSymptoms(query));
    } else {
      setSearchResults([]);
    }
  };

  const handleSelectSymptom = (symptom: Symptom) => {
    setSelectedSymptom(symptom);
    setSearchQuery("");
    setSearchResults([]);
  };

  if (selectedSymptom) {
    return (
      <SymptomDetail
        symptom={selectedSymptom}
        onBack={() => setSelectedSymptom(null)}
      />
    );
  }

  return (
    <div className="px-5 pt-8 pb-32">
      <h1 className="text-[24px] font-semibold text-[#4A3F4B] mb-1 tracking-tight">
        Is This Normal?
      </h1>
      <p className="text-sm text-[#9B9299] mb-6">
        Search 50+ symptoms for understanding and reassurance
      </p>

      {/* Search Input */}
      <div className="relative mb-5">
        <div className="bg-white rounded-[16px] px-4 py-3.5 flex items-center gap-3 border-2 border-[#E8B4A6] focus-within:border-[#C4887A] transition-colors">
          <svg className="w-5 h-5 text-[#9B9299]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            type="text"
            placeholder="Search symptoms..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="flex-1 text-[15px] text-[#4A3F4B] bg-transparent outline-none placeholder:text-[#9B9299]"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearch("")}
              className="text-[#9B9299] hover:text-[#4A3F4B]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Search Results Dropdown */}
        {searchResults.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[16px] border border-[#F5E6DC] shadow-lg z-10 max-h-64 overflow-y-auto">
            {searchResults.map((symptom) => (
              <button
                key={symptom.id}
                onClick={() => handleSelectSymptom(symptom)}
                className="w-full px-4 py-3 text-left hover:bg-[#F5E6DC]/50 flex items-center justify-between border-b border-[#F5E6DC] last:border-b-0"
              >
                <div>
                  <p className="text-[14px] font-medium text-[#4A3F4B]">
                    {symptom.name}
                  </p>
                  <p className="text-xs text-[#9B9299] capitalize">
                    {symptom.category.replace("-", " ")}
                  </p>
                </div>
                <svg className="w-4 h-4 text-[#9B9299]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Common Searches */}
      <p className="text-[11px] uppercase tracking-[0.15em] text-[#C4887A] font-semibold mb-3">
        Common Searches
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {commonSearches.map((term) => (
          <button
            key={term}
            onClick={() => {
              const results = searchSymptoms(term);
              if (results.length > 0) {
                handleSelectSymptom(results[0]);
              }
            }}
            className="bg-[#F5E6DC]/70 hover:bg-[#F5E6DC] rounded-full px-4 py-2 text-sm text-[#4A3F4B] font-medium transition-colors"
          >
            {term}
          </button>
        ))}
      </div>

      {/* Browse by Category */}
      <p className="text-[11px] uppercase tracking-[0.15em] text-[#8BA888] font-semibold mb-3">
        Browse by Category
      </p>
      <div className="grid grid-cols-2 gap-3">
        {[
          { id: "physical", label: "Physical", count: symptoms.filter(s => s.category === "physical").length, color: "#E8B4A6" },
          { id: "emotional", label: "Emotional", count: symptoms.filter(s => s.category === "emotional").length, color: "#B8D4B5" },
          { id: "baby-related", label: "Baby-Related", count: symptoms.filter(s => s.category === "baby-related").length, color: "#F5E6DC" },
          { id: "supply", label: "Supply", count: symptoms.filter(s => s.category === "supply").length, color: "#9B929933" },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleSearch(cat.id)}
            className="bg-white rounded-[16px] p-4 text-left border border-[#F5E6DC] hover:shadow-md transition-all"
          >
            <div
              className="w-3 h-3 rounded-full mb-2"
              style={{ backgroundColor: cat.color }}
            />
            <p className="text-[14px] font-semibold text-[#4A3F4B]">
              {cat.label}
            </p>
            <p className="text-xs text-[#9B9299]">{cat.count} symptoms</p>
          </button>
        ))}
      </div>
    </div>
  );
}

function SymptomDetail({
  symptom,
  onBack,
}: {
  symptom: Symptom;
  onBack: () => void;
}) {
  return (
    <div className="px-5 pt-6 pb-32">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[#9B9299] mb-4 hover:text-[#4A3F4B] transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <span className="text-sm font-medium">Back to search</span>
      </button>

      {/* Main Card */}
      <div className="bg-white rounded-[20px] overflow-hidden border border-[#F5E6DC]">
        {/* Header */}
        <div
          className={`p-6 ${
            symptom.isNormal ? "bg-[#B8D4B5]/40" : "bg-[#C4887A]/20"
          }`}
        >
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3 ${
              symptom.isNormal ? "bg-[#8BA888]" : "bg-[#C4887A]"
            }`}
          >
            {symptom.isNormal
              ? "✓ Common during breastfeeding"
              : "⚠ May need attention"}
          </span>
          <h1 className="text-xl font-semibold text-[#4A3F4B]">
            {symptom.name}
          </h1>
          {symptom.affectsPercent && (
            <p className="text-sm text-[#4A3F4B]/70 mt-1">
              Affects {symptom.affectsPercent}
            </p>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Also Called */}
          {symptom.alsoCalled.length > 0 && (
            <div className="mb-5">
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#9B9299] font-semibold mb-2">
                Also Called
              </p>
              <div className="flex flex-wrap gap-2">
                {symptom.alsoCalled.map((term, i) => (
                  <span
                    key={i}
                    className="bg-[#F5E6DC]/50 px-3 py-1 rounded-lg text-xs text-[#4A3F4B]"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* What It Is */}
          <div className="mb-5">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#C4887A] font-semibold mb-2">
              What It Is
            </p>
            <p className="text-[14px] text-[#4A3F4B]/85 leading-relaxed">
              {symptom.whatItIs}
            </p>
          </div>

          {/* Why It Happens */}
          <div className="mb-5">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#C4887A] font-semibold mb-2">
              Why It Happens
            </p>
            <p className="text-[14px] text-[#4A3F4B]/85 leading-relaxed">
              {symptom.whyItHappens}
            </p>
          </div>

          {/* Hormones */}
          {symptom.hormones && symptom.hormones.length > 0 && (
            <div className="mb-5">
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#9B9299] font-semibold mb-2">
                Related Hormones
              </p>
              <div className="flex flex-wrap gap-2">
                {symptom.hormones.map((h, i) => (
                  <span
                    key={i}
                    className="bg-[#F5E6DC] px-3 py-1 rounded-xl text-xs text-[#4A3F4B] font-medium"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* What Helps */}
          <div className="mb-5">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#8BA888] font-semibold mb-2">
              What May Help
            </p>
            <ul className="space-y-2">
              {symptom.whatHelps.map((help, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#8BA888] mt-0.5">•</span>
                  <span className="text-[14px] text-[#4A3F4B]/85">{help}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Red Flags */}
          <div className="bg-[#C4887A]/10 rounded-[16px] p-4">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#C4887A] font-semibold mb-2">
              ⚠️ Seek Support If
            </p>
            <ul className="space-y-2">
              {symptom.redFlags.map((flag, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#C4887A] mt-0.5">•</span>
                  <span className="text-[14px] text-[#4A3F4B]/85">{flag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// CALM SCREEN
// ============================================
function CalmScreen() {
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState("Ready");
  const [breathScale, setBreathScale] = useState(1);
  const [activeSound, setActiveSound] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [completedBoosters, setCompletedBoosters] = useState<string[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Load completed boosters from localStorage
    const saved = localStorage.getItem('todayBoosters');
    const today = new Date().toISOString().split('T')[0];
    if (saved) {
      const data = JSON.parse(saved);
      if (data.date === today) {
        setCompletedBoosters(data.completed);
      }
    }
  }, []);

  useEffect(() => {
    if (!breathingActive) {
      setBreathPhase("Ready");
      setBreathScale(1);
      return;
    }

    let timeoutId: NodeJS.Timeout;
    const phases = [
      { text: "Breathe in...", duration: 4000, scale: 1.3 },
      { text: "Hold...", duration: 7000, scale: 1.3 },
      { text: "Breathe out...", duration: 8000, scale: 1 },
      { text: "Hold...", duration: 4000, scale: 1 },
    ];

    const runCycle = (idx: number) => {
      if (!breathingActive) return;
      const phase = phases[idx];
      setBreathPhase(phase.text);
      setBreathScale(phase.scale);
      timeoutId = setTimeout(() => {
        runCycle((idx + 1) % phases.length);
      }, phase.duration);
    };

    runCycle(0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [breathingActive]);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const sounds = [
    { id: 'rain', name: "Rain", icon: "🌧️", file: "/sounds/rain.mp3" },
    { id: 'ocean', name: "Ocean", icon: "🌊", file: "/sounds/ocean.mp3" },
    { id: 'forest', name: "Forest", icon: "🌲", file: "/sounds/forest.mp3" },
    { id: 'whitenoise', name: "White Noise", icon: "☁️", file: "/sounds/whitenoise.mp3" },
  ];

  const boosters = [
    { id: 'skin-to-skin', title: "Skin-to-Skin Contact", icon: "👶", desc: "Hold baby against your bare chest for 10-20 minutes", duration: "10-20 min", benefit: "Triggers oxytocin release for both you and baby" },
    { id: 'warm-compress', title: "Warm Compress", icon: "🧣", desc: "Apply a warm towel to your breasts before nursing", duration: "5 min", benefit: "Relaxes tissue and encourages letdown" },
    { id: 'dim-lighting', title: "Dim the Lights", icon: "🕯️", desc: "Create a calm, dim environment for nursing", duration: "During feeds", benefit: "Reduces stimulation and promotes relaxation" },
    { id: 'gentle-music', title: "Gentle Music", icon: "🎵", desc: "Play soft, calming music while nursing", duration: "During feeds", benefit: "Lowers cortisol, raises oxytocin" },
    { id: 'deep-breathing', title: "Deep Breathing", icon: "🌬️", desc: "Take 5 slow, deep breaths before latching", duration: "1 min", benefit: "Activates parasympathetic nervous system" },
    { id: 'smell-baby', title: "Smell Your Baby", icon: "👃", desc: "Inhale your baby's scent from the top of their head", duration: "A few breaths", benefit: "Powerful oxytocin trigger hardwired in your brain" },
    { id: 'gaze-at-baby', title: "Gaze at Baby", icon: "👁️", desc: "Make eye contact with your baby while nursing", duration: "During feeds", benefit: "Mutual gaze releases oxytocin for both of you" },
    { id: 'warm-drink', title: "Drink Something Warm", icon: "☕", desc: "Sip warm water, tea, or broth while nursing", duration: "During feeds", benefit: "Warmth promotes relaxation and letdown" },
  ];

  const playSound = (sound: typeof sounds[0]) => {
    if (activeSound === sound.id && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.src = sound.file;
        audioRef.current.loop = true;
        audioRef.current.volume = volume;
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions gracefully
        });
      }
      setActiveSound(sound.id);
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleBooster = (id: string) => {
    const today = new Date().toISOString().split('T')[0];
    const newCompleted = completedBoosters.includes(id)
      ? completedBoosters.filter(b => b !== id)
      : [...completedBoosters, id];

    setCompletedBoosters(newCompleted);
    localStorage.setItem('todayBoosters', JSON.stringify({ date: today, completed: newCompleted }));
  };

  const completedCount = completedBoosters.length;
  const totalCount = boosters.length;

  return (
    <div className="px-5 pt-8 pb-32">
      <audio ref={audioRef} />

      <h1 className="text-[24px] font-semibold text-[#4A3F4B] mb-1 tracking-tight">
        Find Your Calm
      </h1>
      <p className="text-sm text-[#9B9299] mb-6">
        Help your body feel safe enough to make milk
      </p>

      {/* Breathing Exercise */}
      <div className="bg-gradient-to-br from-[#B8D4B5] to-[#8BA888]/50 rounded-[20px] p-8 text-center mb-6">
        <p className="text-[11px] uppercase tracking-[0.15em] text-[#4A3F4B]/60 font-semibold mb-5">
          4-7-8 Breathing
        </p>
        <div
          className="w-32 h-32 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 transition-transform duration-1000 ease-in-out"
          style={{ transform: `scale(${breathScale})` }}
        >
          <span className="text-[15px] font-medium text-[#4A3F4B]">
            {breathPhase}
          </span>
        </div>
        <button
          onClick={() => setBreathingActive(!breathingActive)}
          className="bg-white px-8 py-3 rounded-full text-[15px] font-semibold text-[#8BA888] shadow-lg hover:shadow-xl transition-shadow"
        >
          {breathingActive ? "Stop" : "Start Breathing"}
        </button>
      </div>

      {/* Soothing Sounds */}
      <p className="text-[11px] uppercase tracking-[0.15em] text-[#C4887A] font-semibold mb-3">
        Calming Sounds
      </p>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {sounds.map((sound) => (
          <button
            key={sound.id}
            onClick={() => playSound(sound)}
            className={`rounded-[16px] p-5 text-center border-2 transition-all relative ${
              activeSound === sound.id && isPlaying
                ? "bg-[#8BA888] border-[#8BA888] text-white"
                : "bg-white border-[#E5E5E5] hover:border-[#8BA888]"
            }`}
          >
            {activeSound === sound.id && isPlaying && (
              <span className="absolute top-2 right-2 text-xs animate-pulse">▶</span>
            )}
            <span className="text-3xl block mb-2">{sound.icon}</span>
            <span className={`text-[14px] font-medium ${activeSound === sound.id && isPlaying ? 'text-white' : 'text-[#4A3F4B]'}`}>
              {sound.name}
            </span>
          </button>
        ))}
      </div>

      {activeSound && isPlaying && (
        <div className="bg-[#F5E6DC] rounded-[12px] p-4 mb-4 flex items-center gap-3">
          <span>🔈</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
            className="flex-1 h-2 rounded-full appearance-none bg-[#C4887A]/30 cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#C4887A]"
          />
          <span>🔊</span>
          <button
            onClick={() => { audioRef.current?.pause(); setIsPlaying(false); }}
            className="ml-2 text-[13px] text-[#C4887A] font-medium"
          >
            Stop ⏹
          </button>
        </div>
      )}

      {/* Oxytocin Boosters */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] uppercase tracking-[0.15em] text-[#C4887A] font-semibold">
            💛 Oxytocin Boosters
          </p>
          <span className="text-[12px] text-[#9B9299]">{completedCount} of {totalCount}</span>
        </div>
        <p className="text-[13px] text-[#9B9299] mb-3">
          Small actions that support your milk flow
        </p>
        <div className="bg-[#E5E5E5] rounded-full h-2 mb-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#8BA888] to-[#C4887A] rounded-full transition-all duration-300"
            style={{ width: `${(completedCount / totalCount) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-3 mb-4">
        {boosters.map((booster) => (
          <button
            key={booster.id}
            onClick={() => toggleBooster(booster.id)}
            className={`w-full flex gap-3 p-4 rounded-[16px] border-2 text-left transition-all ${
              completedBoosters.includes(booster.id)
                ? 'bg-[#F5E6DC] border-[#8BA888]'
                : 'bg-white border-[#E5E5E5] hover:border-[#8BA888]'
            }`}
          >
            <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
              completedBoosters.includes(booster.id)
                ? 'bg-[#8BA888] border-[#8BA888] text-white'
                : 'border-[#C4887A]'
            }`}>
              {completedBoosters.includes(booster.id) ? '✓' : ''}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{booster.icon}</span>
                <span className="text-[14px] font-semibold text-[#4A3F4B]">{booster.title}</span>
                <span className="text-[11px] text-[#9B9299] ml-auto">{booster.duration}</span>
              </div>
              <p className="text-[13px] text-[#4A3F4B]/70 mb-1">{booster.desc}</p>
              <p className="text-[12px] text-[#8BA888] italic">✨ {booster.benefit}</p>
            </div>
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <div className="bg-[#8BA888] rounded-[12px] p-4 text-center text-white font-medium">
          {completedCount >= 5
            ? "Amazing! You're taking wonderful care of yourself. 💛"
            : completedCount >= 3
            ? "You're doing great! Every little bit helps. 🌱"
            : "Good start! Even one booster makes a difference. 🌸"
          }
        </div>
      )}

      {/* Quote */}
      <div className="bg-[#F5E6DC]/50 rounded-[16px] p-5 mt-6 text-center">
        <p className="text-[14px] text-[#4A3F4B] italic leading-relaxed">
          &quot;Rest is not a reward. It&apos;s a requirement.&quot;
        </p>
      </div>
    </div>
  );
}

// ============================================
// PROFILE SCREEN
// ============================================
type ProfileView = 'main' | 'edit' | 'disclaimer' | 'help' | 'contact' | 'terms' | 'privacy' | 'affirmationTime' | 'insights';

function ProfileScreen() {
  const [currentView, setCurrentView] = useState<ProfileView>('main');

  // Placeholder user state (will be replaced with Supabase auth in Phase 2)
  const [isLoggedIn] = useState(false);
  const [user] = useState({
    name: "Mama",
    email: "",
    initials: "M",
    isPro: false,
    memberSince: null as Date | null,
    nextBilling: null as Date | null,
  });

  if (currentView === 'edit') return <EditProfileScreen onBack={() => setCurrentView('main')} />;
  if (currentView === 'disclaimer') return <DisclaimerScreen onBack={() => setCurrentView('main')} />;
  if (currentView === 'help') return <HelpFAQScreen onBack={() => setCurrentView('main')} />;
  if (currentView === 'contact') return <ContactScreen onBack={() => setCurrentView('main')} />;
  if (currentView === 'terms') return <TermsScreen onBack={() => setCurrentView('main')} />;
  if (currentView === 'privacy') return <PrivacyScreen onBack={() => setCurrentView('main')} />;
  if (currentView === 'affirmationTime') return <AffirmationTimeScreen onBack={() => setCurrentView('main')} />;
  if (currentView === 'insights') return <InsightsScreen onBack={() => setCurrentView('main')} />;

  return (
    <div className="px-5 pt-8 pb-32">
      <h1 className="text-[24px] font-semibold text-[#4A3F4B] mb-6 tracking-tight">
        Profile
      </h1>

      {/* User Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 rounded-full bg-[#8BA888] flex items-center justify-center mb-3">
          <span className="text-3xl font-semibold text-white">{user.initials}</span>
        </div>
        <h2 className="text-xl font-semibold text-[#4A3F4B]">{user.name}</h2>
        {user.email && <p className="text-sm text-[#9B9299]">{user.email}</p>}
        {isLoggedIn && (
          <button onClick={() => setCurrentView('edit')} className="mt-2 text-sm text-[#C4887A] font-medium hover:underline">
            Edit Profile
          </button>
        )}
      </div>

      {/* My Insights Card */}
      <button
        onClick={() => setCurrentView('insights')}
        className="w-full bg-gradient-to-br from-[#8BA888]/20 to-[#B8D4B5]/20 rounded-[16px] p-5 mb-6 border border-[#8BA888]/30 text-left hover:border-[#8BA888]/50 transition-colors"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xl">📊</span>
          <span className="text-[16px] font-semibold text-[#4A3F4B]">My Insights</span>
        </div>
        <p className="text-[13px] text-[#4A3F4B]/70 mb-3">
          View your check-in history and wellness trends
        </p>
        <div className="flex items-center gap-2 text-[#8BA888] font-medium text-[14px]">
          View Insights
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </button>

      {/* Auth Buttons (if not logged in) */}
      {!isLoggedIn && (
        <div className="bg-white rounded-[16px] p-5 border border-[#F5E6DC] mb-6">
          <p className="text-center text-[14px] text-[#4A3F4B] mb-4">
            Create an account to save your progress and sync across devices.
          </p>
          <div className="flex flex-col gap-3">
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C4887A] to-[#E8B4A6] text-white font-semibold">
              Create Account
            </button>
            <button className="w-full py-3 rounded-xl border border-[#F5E6DC] text-[#4A3F4B] font-medium hover:bg-[#F5E6DC]/50 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      )}

      {/* Subscription Card */}
      {user.isPro ? (
        <div className="bg-gradient-to-br from-[#E8B4A6]/30 to-[#F5E6DC] rounded-[16px] p-5 mb-6 border border-[#E8B4A6]/50">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">✨</span>
            <span className="font-semibold text-[#4A3F4B]">Pro Member</span>
          </div>
          <p className="text-sm text-[#4A3F4B]/80 mb-4">Thank you for supporting MilkWise!</p>
          {user.memberSince && <p className="text-xs text-[#9B9299] mb-1">Member since: {user.memberSince.toLocaleDateString()}</p>}
          {user.nextBilling && <p className="text-xs text-[#9B9299] mb-4">Next billing: {user.nextBilling.toLocaleDateString()}</p>}
          <button className="w-full py-2.5 rounded-xl border border-[#C4887A] text-[#C4887A] font-medium text-sm hover:bg-[#C4887A]/10 transition-colors">
            Manage Subscription
          </button>
        </div>
      ) : (
        <div className="bg-[#F5E6DC]/50 rounded-[16px] p-5 mb-6 border border-[#F5E6DC]">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🌱</span>
            <span className="font-semibold text-[#4A3F4B]">Free Plan</span>
          </div>
          <p className="text-sm text-[#4A3F4B]/80 mb-4">Upgrade to Pro to unlock:</p>
          <ul className="space-y-2 mb-5">
            {["Complete Education Courses", "Smart Tracker & Weekly Insights", "Full Calm Zone Experience", "Nutrition Hub", "Weaning Guide", "Resources Directory"].map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-[#4A3F4B]/80">
                <svg className="w-4 h-4 text-[#8BA888]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C4887A] to-[#E8B4A6] text-white font-semibold mb-2">
            Upgrade to Pro — $8.99/mo
          </button>
          <p className="text-center text-xs text-[#9B9299]">or $69.99/year (save 35%)</p>
        </div>
      )}

      {/* Settings Menu */}
      <div className="space-y-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-[#9B9299] font-semibold mb-3 px-1">Account</p>
          <div className="bg-white rounded-[16px] border border-[#F5E6DC] overflow-hidden">
            <SettingsItem label="Edit Profile" onClick={() => setCurrentView('edit')} />
            <SettingsItem label="Change Email" onClick={() => {}} />
            <SettingsItem label="Change Password" onClick={() => {}} isLast />
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-[#9B9299] font-semibold mb-3 px-1">Preferences</p>
          <div className="bg-white rounded-[16px] border border-[#F5E6DC] overflow-hidden">
            <SettingsItem label="Notifications" onClick={() => {}} hasToggle />
            <SettingsItem label="Daily Affirmation Time" onClick={() => setCurrentView('affirmationTime')} value="9:00 AM" isLast />
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-[#9B9299] font-semibold mb-3 px-1">Support</p>
          <div className="bg-white rounded-[16px] border border-[#F5E6DC] overflow-hidden">
            <SettingsItem label="Help & FAQ" onClick={() => setCurrentView('help')} />
            <SettingsItem label="Contact Us" onClick={() => setCurrentView('contact')} />
            <SettingsItem label="Report a Problem" onClick={() => setCurrentView('contact')} isLast />
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-[#9B9299] font-semibold mb-3 px-1">Legal</p>
          <div className="bg-white rounded-[16px] border border-[#F5E6DC] overflow-hidden">
            <SettingsItem label="Terms of Service" onClick={() => setCurrentView('terms')} />
            <SettingsItem label="Privacy Policy" onClick={() => setCurrentView('privacy')} />
            <SettingsItem label="Medical Disclaimer" onClick={() => setCurrentView('disclaimer')} isLast />
          </div>
        </div>

        {isLoggedIn && (
          <div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#9B9299] font-semibold mb-3 px-1">Account Actions</p>
            <div className="bg-white rounded-[16px] border border-[#F5E6DC] overflow-hidden">
              <SettingsItem label="Log Out" onClick={() => {}} textColor="text-[#C4887A]" />
              <SettingsItem label="Delete Account" onClick={() => {}} textColor="text-red-500" isLast />
            </div>
          </div>
        )}
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-[#9B9299]">MilkWise v1.0.0</p>
        <p className="text-xs text-[#9B9299] mt-1">Made with 🤍 for breastfeeding mothers</p>
      </div>
    </div>
  );
}

function SettingsItem({
  label,
  onClick,
  value,
  hasToggle,
  isLast,
  textColor = "text-[#4A3F4B]",
}: {
  label: string;
  onClick: () => void;
  value?: string;
  hasToggle?: boolean;
  isLast?: boolean;
  textColor?: string;
}) {
  const [isOn, setIsOn] = useState(true);

  return (
    <button
      onClick={hasToggle ? () => setIsOn(!isOn) : onClick}
      className={`w-full flex items-center justify-between px-4 py-4 hover:bg-[#F5E6DC]/30 transition-colors ${
        !isLast ? "border-b border-[#F5E6DC]" : ""
      }`}
    >
      <span className={`text-[15px] ${textColor}`}>{label}</span>
      <div className="flex items-center gap-2">
        {value && <span className="text-sm text-[#9B9299]">{value}</span>}
        {hasToggle ? (
          <div
            className={`w-12 h-7 rounded-full p-1 transition-colors ${
              isOn ? "bg-[#8BA888]" : "bg-[#E5E5E5]"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                isOn ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </div>
        ) : (
          <svg className="w-5 h-5 text-[#9B9299]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        )}
      </div>
    </button>
  );
}

// ============================================
// EDIT PROFILE SCREEN
// ============================================
function EditProfileScreen({ onBack }: { onBack: () => void }) {
  const [name, setName] = useState("Mama");
  const [email, setEmail] = useState("");
  const [babyBirthDate, setBabyBirthDate] = useState("");
  const [feedingJourney, setFeedingJourney] = useState<string | null>(null);

  const journeyOptions = [
    { id: "breastfeeding", label: "Breastfeeding" },
    { id: "pumping", label: "Pumping" },
    { id: "combo", label: "Combo feeding" },
    { id: "weaning", label: "Weaning" },
  ];

  return (
    <div className="px-5 pt-6 pb-32">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#9B9299] hover:text-[#4A3F4B] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </button>
        <h1 className="text-lg font-semibold text-[#4A3F4B]">Edit Profile</h1>
        <div className="w-16" /> {/* Spacer for centering */}
      </div>

      {/* Avatar */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full bg-[#8BA888] flex items-center justify-center mb-3">
          <span className="text-4xl font-semibold text-white">M</span>
        </div>
        <button className="text-sm text-[#C4887A] font-medium hover:underline">
          Change Photo
        </button>
      </div>

      {/* Form */}
      <div className="space-y-5">
        {/* Display Name */}
        <div>
          <label className="text-[11px] uppercase tracking-[0.15em] text-[#9B9299] font-semibold mb-2 block">
            Display Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#F5E6DC] bg-white text-[#4A3F4B] text-[15px] focus:outline-none focus:border-[#C4887A] transition-colors"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-[11px] uppercase tracking-[0.15em] text-[#9B9299] font-semibold mb-2 block">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#F5E6DC] bg-white text-[#4A3F4B] text-[15px] focus:outline-none focus:border-[#C4887A] transition-colors"
            placeholder="you@example.com"
          />
        </div>

        {/* Baby's Birth Date */}
        <div>
          <label className="text-[11px] uppercase tracking-[0.15em] text-[#9B9299] font-semibold mb-2 block">
            Baby&apos;s Birth Date <span className="text-[#9B9299] normal-case">(optional)</span>
          </label>
          <input
            type="date"
            value={babyBirthDate}
            onChange={(e) => setBabyBirthDate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#F5E6DC] bg-white text-[#4A3F4B] text-[15px] focus:outline-none focus:border-[#C4887A] transition-colors"
          />
        </div>

        {/* Feeding Journey */}
        <div>
          <label className="text-[11px] uppercase tracking-[0.15em] text-[#9B9299] font-semibold mb-3 block">
            Feeding Journey <span className="text-[#9B9299] normal-case">(optional)</span>
          </label>
          <div className="space-y-2">
            {journeyOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setFeedingJourney(option.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                  feedingJourney === option.id
                    ? "border-[#C4887A] bg-[#F5E6DC]/50"
                    : "border-[#F5E6DC] bg-white hover:bg-[#F5E6DC]/30"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    feedingJourney === option.id
                      ? "border-[#C4887A]"
                      : "border-[#9B9299]"
                  }`}
                >
                  {feedingJourney === option.id && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#C4887A]" />
                  )}
                </div>
                <span className="text-[15px] text-[#4A3F4B]">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Save Button */}
      <button className="w-full mt-8 py-3.5 rounded-xl bg-gradient-to-r from-[#C4887A] to-[#E8B4A6] text-white font-semibold text-[15px] hover:opacity-90 transition-opacity">
        Save Changes
      </button>
    </div>
  );
}

// ============================================
// MEDICAL DISCLAIMER SCREEN
// ============================================
function DisclaimerScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="px-5 pt-6 pb-32">
      <button onClick={onBack} className="flex items-center gap-2 text-[#9B9299] mb-6 hover:text-[#4A3F4B]">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <span className="text-sm font-medium">Back</span>
      </button>

      <div className="bg-white rounded-[20px] p-6 border border-[#F5E6DC]">
        <h1 className="text-xl font-semibold text-[#4A3F4B] mb-4">Medical Disclaimer</h1>

        <div className="bg-[#C4887A]/10 rounded-xl p-4 mb-6">
          <p className="text-[15px] font-semibold text-[#C4887A]">⚠️ Important Notice</p>
          <p className="text-[14px] text-[#4A3F4B] mt-1">MilkWise is an educational resource, not a medical service.</p>
        </div>

        <div className="space-y-5 text-[14px] text-[#4A3F4B]/85 leading-relaxed">
          <div>
            <p className="font-semibold text-[#4A3F4B] mb-2">For Educational Purposes Only</p>
            <p>The information provided in MilkWise — including content about lactation, symptoms, nutrition, and breastfeeding practices — is for educational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment.</p>
          </div>
          <div>
            <p className="font-semibold text-[#4A3F4B] mb-2">Always Consult a Professional</p>
            <p>Always seek the advice of your physician, lactation consultant (IBCLC), or other qualified health provider with any questions about your breastfeeding journey, your baby&apos;s health, any symptoms you experience, or medications while breastfeeding.</p>
          </div>
          <div>
            <p className="font-semibold text-[#4A3F4B] mb-2">Don&apos;t Delay Seeking Care</p>
            <p>Never disregard professional medical advice or delay in seeking it because of something you have read in this App.</p>
          </div>
          <div className="bg-[#C4887A]/10 rounded-xl p-4">
            <p className="font-semibold text-[#C4887A]">Emergency Situations</p>
            <p className="text-[#4A3F4B] mt-1">If you think you or your baby may have a medical emergency, call your doctor, go to the emergency room, or call emergency services immediately.</p>
          </div>
          <div>
            <p className="font-semibold text-[#4A3F4B] mb-2">Red Flags in the App</p>
            <p>When you search for symptoms, you may see &quot;Red Flags&quot; — these are signs that you should seek professional support. Please take these seriously and reach out to a healthcare provider.</p>
          </div>
        </div>

        <button onClick={onBack} className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-[#C4887A] to-[#E8B4A6] text-white font-semibold">
          I Understand
        </button>
      </div>
    </div>
  );
}

// ============================================
// HELP & FAQ SCREEN
// ============================================
function HelpFAQScreen({ onBack }: { onBack: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "How do I use the Daily Check-In?", a: "Tap 'Daily Check-In' on the Home screen. Answer the quick questions about feeds, diapers, your nourishment, and how you're feeling. It takes about 30 seconds and helps you notice patterns that affect your milk supply." },
    { q: "What is the Symptom Search?", a: "The Symptom Search helps you understand what you're experiencing. Type any symptom (like 'nipple pain' or 'feeling anxious') and get clear explanations of what's happening, why, what helps, and when to seek support." },
    { q: "How does the Calm Zone work?", a: "The Calm Zone offers breathing exercises and calming sounds to help you relax. Stress blocks oxytocin (the hormone that helps milk flow), so these tools directly support your breastfeeding journey." },
    { q: "Is my data private?", a: "Yes. Your check-in data stays on your device (and your private account if logged in). We never sell your data or share it with third parties. See our Privacy Policy for full details." },
    { q: "How do I upgrade to Pro?", a: "Go to Profile → tap the upgrade card or 'Manage Subscription'. Pro unlocks all education courses, the full tracker with weekly insights, the Calm Zone, and more." },
    { q: "Can I cancel my Pro subscription?", a: "Yes, anytime. Go to Profile → Manage Subscription → Cancel. You'll keep Pro access until the end of your billing period." },
    { q: "The app says I should see a doctor. What do I do?", a: "Our Symptom Search includes 'red flags' — signs that you should consult a healthcare provider or lactation consultant (IBCLC). We're an education resource, not a replacement for medical care. When in doubt, reach out to a professional." },
    { q: "How do I reset my daily check-in?", a: "Each day starts fresh automatically. If you need to edit today's check-in, go to Home → Daily Check-In and update your entries." },
  ];

  return (
    <div className="px-5 pt-6 pb-32">
      <button onClick={onBack} className="flex items-center gap-2 text-[#9B9299] mb-6 hover:text-[#4A3F4B]">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <span className="text-sm font-medium">Back</span>
      </button>

      <h1 className="text-xl font-semibold text-[#4A3F4B] mb-6">Help & FAQ</h1>

      <div className="space-y-3 mb-8">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-[16px] border border-[#F5E6DC] overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="text-[14px] font-medium text-[#4A3F4B] pr-4">{faq.q}</span>
              <span className="text-[#9B9299] flex-shrink-0">{openIndex === i ? '−' : '+'}</span>
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4 pt-0">
                <p className="text-[14px] text-[#4A3F4B]/80 leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-[#F5E6DC]/50 rounded-[16px] p-5">
        <p className="text-[15px] font-semibold text-[#4A3F4B] mb-2">Still need help?</p>
        <p className="text-[14px] text-[#9B9299] mb-4">We&apos;re here for you.</p>
        <a href="mailto:support@milkwise.app" className="block w-full py-3 rounded-xl bg-[#C4887A] text-white font-semibold text-center">
          Email Us: support@milkwise.app
        </a>
      </div>
    </div>
  );
}

// ============================================
// CONTACT SCREEN
// ============================================
function ContactScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="px-5 pt-6 pb-32">
      <button onClick={onBack} className="flex items-center gap-2 text-[#9B9299] mb-6 hover:text-[#4A3F4B]">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <span className="text-sm font-medium">Back</span>
      </button>

      <h1 className="text-xl font-semibold text-[#4A3F4B] mb-2">Contact Us</h1>
      <p className="text-[14px] text-[#9B9299] mb-6">Have a question, suggestion, or just want to share your story? We&apos;d love to hear from you.</p>

      <div className="space-y-4">
        <a href="mailto:support@milkwise.app" className="block bg-white rounded-[16px] p-5 border border-[#F5E6DC] hover:border-[#C4887A] transition-colors">
          <span className="text-2xl block mb-2">📧</span>
          <p className="text-[15px] font-semibold text-[#4A3F4B]">Email</p>
          <p className="text-[13px] text-[#9B9299] mb-2">For general questions and support</p>
          <p className="text-[14px] text-[#C4887A]">support@milkwise.app</p>
        </a>

        <a href="mailto:ideas@milkwise.app" className="block bg-white rounded-[16px] p-5 border border-[#F5E6DC] hover:border-[#C4887A] transition-colors">
          <span className="text-2xl block mb-2">💡</span>
          <p className="text-[15px] font-semibold text-[#4A3F4B]">Feature Requests</p>
          <p className="text-[13px] text-[#9B9299] mb-2">Have an idea to make the app better?</p>
          <p className="text-[14px] text-[#C4887A]">ideas@milkwise.app</p>
        </a>

        <a href="mailto:bugs@milkwise.app" className="block bg-white rounded-[16px] p-5 border border-[#F5E6DC] hover:border-[#C4887A] transition-colors">
          <span className="text-2xl block mb-2">🐛</span>
          <p className="text-[15px] font-semibold text-[#4A3F4B]">Report a Bug</p>
          <p className="text-[13px] text-[#9B9299] mb-2">Something not working right?</p>
          <p className="text-[14px] text-[#C4887A]">bugs@milkwise.app</p>
        </a>
      </div>

      <p className="text-center text-[14px] text-[#9B9299] mt-6">We typically respond within 24-48 hours. 💛</p>
    </div>
  );
}

// ============================================
// TERMS OF SERVICE SCREEN
// ============================================
function TermsScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="px-5 pt-6 pb-32">
      <button onClick={onBack} className="flex items-center gap-2 text-[#9B9299] mb-6 hover:text-[#4A3F4B]">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <span className="text-sm font-medium">Back</span>
      </button>

      <h1 className="text-xl font-semibold text-[#4A3F4B] mb-2">Terms of Service</h1>
      <p className="text-[12px] text-[#9B9299] mb-6">Last updated: January 2025</p>

      <div className="bg-white rounded-[16px] p-5 border border-[#F5E6DC] space-y-5 text-[14px] text-[#4A3F4B]/85 leading-relaxed">
        <div>
          <p className="font-semibold text-[#4A3F4B] mb-2">1. Acceptance of Terms</p>
          <p>By accessing or using MilkWise (&quot;the App&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.</p>
        </div>
        <div>
          <p className="font-semibold text-[#4A3F4B] mb-2">2. Description of Service</p>
          <p>MilkWise is an educational resource for breastfeeding mothers. The App provides information about lactation, symptoms, nutrition, and self-care practices. The App is not a medical service and does not provide medical advice, diagnosis, or treatment.</p>
        </div>
        <div>
          <p className="font-semibold text-[#4A3F4B] mb-2">3. User Accounts</p>
          <p>To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.</p>
        </div>
        <div>
          <p className="font-semibold text-[#4A3F4B] mb-2">4. Subscription & Billing</p>
          <p>MilkWise offers free and paid (Pro) subscription tiers. Pro subscriptions are billed monthly ($8.99/month) or annually ($69.99/year). Subscriptions auto-renew unless cancelled at least 24 hours before the renewal date.</p>
        </div>
        <div>
          <p className="font-semibold text-[#4A3F4B] mb-2">5. Refund Policy</p>
          <p>We want you to be satisfied with MilkWise. If you&apos;re not happy with your Pro subscription, contact us within 7 days of purchase for a full refund. After 7 days, refunds are provided at our discretion.</p>
        </div>
        <div>
          <p className="font-semibold text-[#4A3F4B] mb-2">6. Intellectual Property</p>
          <p>All content in MilkWise — including text, graphics, logos, and software — is owned by MilkWise or its licensors and is protected by copyright and other intellectual property laws.</p>
        </div>
        <div>
          <p className="font-semibold text-[#4A3F4B] mb-2">7. Disclaimer of Warranties</p>
          <p>The App is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the App will be error-free, uninterrupted, or meet your specific needs.</p>
        </div>
        <div>
          <p className="font-semibold text-[#4A3F4B] mb-2">8. Contact</p>
          <p>Questions about these Terms? Contact us at legal@milkwise.app.</p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// PRIVACY POLICY SCREEN
// ============================================
function PrivacyScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="px-5 pt-6 pb-32">
      <button onClick={onBack} className="flex items-center gap-2 text-[#9B9299] mb-6 hover:text-[#4A3F4B]">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <span className="text-sm font-medium">Back</span>
      </button>

      <h1 className="text-xl font-semibold text-[#4A3F4B] mb-2">Privacy Policy</h1>
      <p className="text-[12px] text-[#9B9299] mb-6">Last updated: January 2025</p>

      <div className="bg-white rounded-[16px] p-5 border border-[#F5E6DC] space-y-5 text-[14px] text-[#4A3F4B]/85 leading-relaxed">
        <div className="bg-[#8BA888]/10 rounded-xl p-4">
          <p className="font-semibold text-[#8BA888]">Our Commitment</p>
          <p className="text-[#4A3F4B] mt-1">Your privacy matters deeply to us. MilkWise is built by mothers, for mothers. We understand you&apos;re sharing sensitive information about your body and your baby, and we treat that data with the utmost care and respect.</p>
        </div>

        <div>
          <p className="font-semibold text-[#4A3F4B] mb-2">Information We Collect</p>
          <p className="mb-2"><strong>Account Information:</strong> Email, name (optional), password (encrypted)</p>
          <p className="mb-2"><strong>Health & Tracking Data:</strong> Feeding logs, diaper counts, nourishment responses, sleep and stress levels. <span className="text-[#8BA888] font-medium">This data is private to you.</span></p>
          <p><strong>Usage Data:</strong> Anonymous data about which features you use, time spent in the App, and crash reports.</p>
        </div>

        <div>
          <p className="font-semibold text-[#4A3F4B] mb-2">What We Never Do</p>
          <ul className="space-y-1">
            <li>❌ Sell your personal data</li>
            <li>❌ Share your health data with third parties</li>
            <li>❌ Use your data for advertising</li>
            <li>❌ Access your data without your consent</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-[#4A3F4B] mb-2">Your Rights</p>
          <p>You have the right to access, correct, delete, and export your personal data. You can also withdraw consent at any time. Contact privacy@milkwise.app to exercise these rights.</p>
        </div>

        <div>
          <p className="font-semibold text-[#4A3F4B] mb-2">Data Retention</p>
          <p>We retain your data for as long as your account is active. If you delete your account, we delete your data within 30 days, except where required by law.</p>
        </div>

        <div>
          <p className="font-semibold text-[#4A3F4B] mb-2">Contact</p>
          <p>Questions about privacy? Contact us at privacy@milkwise.app.</p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// AFFIRMATION TIME SETTING SCREEN
// ============================================
function AffirmationTimeScreen({ onBack }: { onBack: () => void }) {
  const [time, setTime] = useState('08:00');
  const [enabled, setEnabled] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedTime = localStorage.getItem('affirmationTime');
    const savedEnabled = localStorage.getItem('affirmationEnabled');
    if (savedTime) setTime(savedTime);
    if (savedEnabled !== null) setEnabled(savedEnabled === 'true');
  }, []);

  const handleSave = () => {
    localStorage.setItem('affirmationTime', time);
    localStorage.setItem('affirmationEnabled', enabled.toString());
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="px-5 pt-6 pb-32">
      <button onClick={onBack} className="flex items-center gap-2 text-[#9B9299] mb-6 hover:text-[#4A3F4B]">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <span className="text-sm font-medium">Back</span>
      </button>

      <div className="bg-white rounded-[16px] p-5 border border-[#F5E6DC]">
        <h1 className="text-[18px] font-semibold text-[#4A3F4B] mb-1">Daily Affirmation</h1>
        <p className="text-[14px] text-[#9B9299] mb-5">Start your day with encouragement</p>

        <div className="flex items-center justify-between py-4 border-b border-[#F5E6DC]">
          <span className="text-[15px] text-[#4A3F4B]">Enable daily reminder</span>
          <button
            onClick={() => setEnabled(!enabled)}
            className={`w-12 h-7 rounded-full p-1 transition-colors ${enabled ? 'bg-[#8BA888]' : 'bg-[#E5E5E5]'}`}
          >
            <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${enabled ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
        </div>

        {enabled && (
          <div className="py-4">
            <label className="text-[14px] font-medium text-[#4A3F4B] block mb-3">Reminder time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#F5E6DC] text-[18px] text-[#4A3F4B] focus:outline-none focus:border-[#8BA888]"
            />
            <p className="text-[13px] text-[#9B9299] mt-2">We&apos;ll send you a gentle reminder with your daily affirmation</p>
          </div>
        )}

        <button
          onClick={handleSave}
          className={`w-full mt-4 py-3.5 rounded-xl font-semibold transition-all ${
            saved ? 'bg-[#8BA888] text-white' : 'bg-[#C4887A] text-white hover:bg-[#b37a6d]'
          }`}
        >
          {saved ? 'Saved ✓' : 'Save Preference'}
        </button>
      </div>
    </div>
  );
}

// ============================================
// INSIGHTS SCREEN
// ============================================
interface CheckInData {
  date: string;
  feeds: { count: number; lastBreast: string | null };
  babyOutput: { wetDiapers: number; dirtyDiapers: number };
  momNourishment: { ateProtein: boolean | null; ate3Plus: boolean | null; feelingSick: boolean | null };
  hydration: boolean | null;
  sleep: number;
  stress: number;
  completedAt: string;
}

function InsightsScreen({ onBack }: { onBack: () => void }) {
  const [checkIns, setCheckIns] = useState<Record<string, CheckInData>>({});
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    // Load check-ins from localStorage
    const history = JSON.parse(localStorage.getItem('trackerHistory') || '[]');
    const checkInMap: Record<string, CheckInData> = {};
    history.forEach((checkIn: CheckInData) => {
      checkInMap[checkIn.date] = checkIn;
    });
    setCheckIns(checkInMap);
  }, []);

  // Calculate day score
  const calculateDayScore = (checkIn: CheckInData): number => {
    let score = 0;
    let maxScore = 0;

    // Feeds (0-20 points)
    maxScore += 20;
    if (checkIn.feeds.count >= 8) score += 20;
    else if (checkIn.feeds.count >= 6) score += 15;
    else if (checkIn.feeds.count >= 4) score += 10;
    else score += 5;

    // Wet diapers (0-15 points)
    maxScore += 15;
    if (checkIn.babyOutput.wetDiapers >= 6) score += 15;
    else if (checkIn.babyOutput.wetDiapers >= 4) score += 10;
    else score += 5;

    // Dirty diapers (0-10 points)
    maxScore += 10;
    if (checkIn.babyOutput.dirtyDiapers >= 2) score += 10;
    else if (checkIn.babyOutput.dirtyDiapers >= 1) score += 7;
    else score += 3;

    // Nourishment (0-15 points)
    maxScore += 15;
    if (checkIn.momNourishment.ateProtein) score += 5;
    if (checkIn.momNourishment.ate3Plus) score += 5;
    if (!checkIn.momNourishment.feelingSick) score += 5;

    // Hydration (0-10 points)
    maxScore += 10;
    if (checkIn.hydration) score += 10;

    // Sleep (0-15 points)
    maxScore += 15;
    score += (checkIn.sleep / 5) * 15;

    // Stress (0-15 points, inverted)
    maxScore += 15;
    score += ((6 - checkIn.stress) / 5) * 15;

    return Math.round((score / maxScore) * 100);
  };

  // Get day status
  const getDayStatus = (date: Date): 'great' | 'okay' | 'needs' | 'none' | 'today' => {
    const dateKey = date.toISOString().split('T')[0];
    const today = new Date().toISOString().split('T')[0];
    const checkIn = checkIns[dateKey];

    if (!checkIn) {
      if (dateKey === today) return 'today';
      return 'none';
    }

    const score = calculateDayScore(checkIn);
    if (score >= 75) return 'great';
    if (score >= 50) return 'okay';
    return 'needs';
  };

  // Generate calendar days
  const generateCalendarDays = (): Date[] => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startPadding = firstDay.getDay();

    const days: Date[] = [];

    // Add padding days from previous month
    for (let i = startPadding - 1; i >= 0; i--) {
      const d = new Date(year, month, -i);
      days.push(d);
    }

    // Add days of current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    // Add padding days from next month
    const endPadding = 42 - days.length;
    for (let i = 1; i <= endPadding; i++) {
      days.push(new Date(year, month + 1, i));
    }

    return days;
  };

  // Get last N days of check-in data
  const getLastNDaysData = (n: number): CheckInData[] => {
    const data: CheckInData[] = [];
    for (let i = 0; i < n; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateKey = d.toISOString().split('T')[0];
      if (checkIns[dateKey]) {
        data.push(checkIns[dateKey]);
      }
    }
    return data;
  };

  // Calculate wellness score
  const calculateWellnessScore = (): number | null => {
    const lastWeekData = getLastNDaysData(7);
    if (lastWeekData.length === 0) return null;

    const totalScore = lastWeekData.reduce((sum, checkIn) => sum + calculateDayScore(checkIn), 0);
    return Math.round(totalScore / lastWeekData.length);
  };

  // Generate insights
  const generateInsights = () => {
    const lastWeekData = getLastNDaysData(7);
    if (lastWeekData.length === 0) return [];

    const insights: Array<{ type: 'positive' | 'warning'; icon: string; title: string; message: string; tip?: string }> = [];

    // Check sleep
    const avgSleep = lastWeekData.reduce((sum, d) => sum + d.sleep, 0) / lastWeekData.length;
    if (avgSleep < 3) {
      insights.push({
        type: 'warning',
        icon: '💤',
        title: 'Your sleep has been low',
        message: 'Sleep directly impacts milk supply. Even short rests help your body recover.',
        tip: 'Try: Rest when baby rests, even if just 20 minutes.'
      });
    }

    // Check stress
    const avgStress = lastWeekData.reduce((sum, d) => sum + d.stress, 0) / lastWeekData.length;
    if (avgStress > 3.5) {
      insights.push({
        type: 'warning',
        icon: '🧘',
        title: 'Your stress levels are elevated',
        message: 'Stress blocks oxytocin, which is needed for milk letdown.',
        tip: 'Try: 5 deep breaths before each feed, or visit the Calm Zone.'
      });
    }

    // Check hydration
    const hydratedDays = lastWeekData.filter(d => d.hydration).length;
    if (hydratedDays >= 5) {
      insights.push({
        type: 'positive',
        icon: '💧',
        title: 'Great job staying hydrated!',
        message: 'Your milk is 87% water — hydration is crucial. Keep it up!'
      });
    } else if (hydratedDays < 4) {
      insights.push({
        type: 'warning',
        icon: '💧',
        title: 'Remember to hydrate',
        message: 'Breast milk is 87% water. Low hydration can affect supply.',
        tip: 'Try: Keep a water bottle nearby during every feed.'
      });
    }

    // Check protein
    const proteinDays = lastWeekData.filter(d => d.momNourishment.ateProtein).length;
    if (proteinDays >= 5) {
      insights.push({
        type: 'positive',
        icon: '🍳',
        title: "You're fueling your body well!",
        message: 'Protein supports milk production and your recovery.'
      });
    }

    // Check feeds
    const avgFeeds = lastWeekData.reduce((sum, d) => sum + d.feeds.count, 0) / lastWeekData.length;
    if (avgFeeds >= 8) {
      insights.push({
        type: 'positive',
        icon: '🍼',
        title: 'Feeding frequency looks great!',
        message: 'Frequent feeds signal your body to keep making milk.'
      });
    }

    return insights;
  };

  const wellnessScore = calculateWellnessScore();
  const insights = generateInsights();
  const lastWeekData = getLastNDaysData(7);
  const calendarDays = generateCalendarDays();

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const navigateMonth = (direction: number) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
  };

  // Get score message
  const getScoreMessage = (score: number) => {
    if (score >= 80) return { emoji: '🌟', message: "You're thriving!", color: '#8BA888' };
    if (score >= 65) return { emoji: '💛', message: "You're doing well!", color: '#8BA888' };
    if (score >= 50) return { emoji: '🌱', message: "Room to grow — you've got this.", color: '#C4887A' };
    return { emoji: '💜', message: "Be gentle with yourself.", color: '#C4887A' };
  };

  return (
    <div className="px-5 pt-6 pb-32">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-[#9B9299] hover:text-[#4A3F4B]">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </button>
        <h1 className="text-lg font-semibold text-[#4A3F4B]">My Insights</h1>
        <div className="w-16" />
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-[20px] p-5 border border-[#F5E6DC] mb-4">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => navigateMonth(-1)} className="w-9 h-9 rounded-full bg-[#F5E6DC] flex items-center justify-center text-[#4A3F4B]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <h3 className="text-[16px] font-semibold text-[#4A3F4B]">
            📅 {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <button onClick={() => navigateMonth(1)} className="w-9 h-9 rounded-full bg-[#F5E6DC] flex items-center justify-center text-[#4A3F4B]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={i} className="text-center text-[11px] font-semibold text-[#9B9299] py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => {
            const isCurrentMonth = day.getMonth() === currentMonth.getMonth();
            const status = getDayStatus(day);
            const dateKey = day.toISOString().split('T')[0];
            const isToday = dateKey === new Date().toISOString().split('T')[0];

            return (
              <button
                key={index}
                onClick={() => checkIns[dateKey] && setSelectedDate(day)}
                className={`flex flex-col items-center justify-center py-2 rounded-lg transition-colors ${
                  !isCurrentMonth ? 'opacity-30' : ''
                } ${checkIns[dateKey] ? 'cursor-pointer hover:bg-[#F5E6DC]/50' : ''}`}
              >
                <span className={`text-[12px] mb-1 ${isToday ? 'font-bold text-[#C4887A]' : 'text-[#4A3F4B]'}`}>
                  {day.getDate()}
                </span>
                <span className="text-[10px]">
                  {status === 'great' && '🟢'}
                  {status === 'okay' && '🟡'}
                  {status === 'needs' && '🔴'}
                  {status === 'today' && '○'}
                  {status === 'none' && !isToday && '·'}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-[#F5E6DC] text-[11px] text-[#9B9299]">
          <span>🟢 Great</span>
          <span>🟡 Okay</span>
          <span>🔴 Needs care</span>
          <span>○ Today</span>
          <span>· No data</span>
        </div>
      </div>

      {/* Wellness Score */}
      <div className="bg-white rounded-[20px] p-6 border border-[#F5E6DC] mb-4 text-center">
        <h3 className="text-[14px] font-semibold text-[#4A3F4B] mb-4">Your Wellness Score</h3>

        {wellnessScore !== null ? (
          <>
            <div className="mb-4">
              <span className="text-[48px] font-bold text-[#4A3F4B]">{wellnessScore}</span>
              <span className="text-[24px] text-[#9B9299]">/100</span>
            </div>

            <div className="h-3 bg-[#E5E5E5] rounded-full overflow-hidden mb-4">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${wellnessScore}%`,
                  backgroundColor: getScoreMessage(wellnessScore).color
                }}
              />
            </div>

            <p className="text-[16px] font-semibold text-[#4A3F4B]">
              {getScoreMessage(wellnessScore).emoji} {getScoreMessage(wellnessScore).message}
            </p>
            <p className="text-[13px] text-[#9B9299] mt-2">Based on your last 7 days</p>
          </>
        ) : (
          <p className="text-[14px] text-[#9B9299]">Complete a few check-ins to see your score</p>
        )}
      </div>

      {/* Weekly Breakdown */}
      {lastWeekData.length > 0 && (
        <div className="bg-white rounded-[20px] p-5 border border-[#F5E6DC] mb-4">
          <h3 className="text-[14px] font-semibold text-[#4A3F4B] mb-4">📊 This Week&apos;s Breakdown</h3>

          <div className="space-y-3">
            {[
              {
                label: 'Feeds',
                value: Math.round(lastWeekData.reduce((sum, d) => sum + d.feeds.count, 0) / lastWeekData.length),
                max: 12,
                status: (v: number) => v >= 8 ? 'Great' : v >= 6 ? 'Good' : 'Improve'
              },
              {
                label: 'Wet Diapers',
                value: Math.round(lastWeekData.reduce((sum, d) => sum + d.babyOutput.wetDiapers, 0) / lastWeekData.length),
                max: 10,
                status: (v: number) => v >= 6 ? 'Great' : v >= 4 ? 'Good' : 'Low'
              },
              {
                label: 'Nourishment',
                value: Math.round((lastWeekData.filter(d => d.momNourishment.ateProtein).length / lastWeekData.length) * 100),
                max: 100,
                isPercent: true,
                status: (v: number) => v >= 80 ? 'Great' : v >= 60 ? 'Good' : 'Improve'
              },
              {
                label: 'Hydration',
                value: Math.round((lastWeekData.filter(d => d.hydration).length / lastWeekData.length) * 100),
                max: 100,
                isPercent: true,
                status: (v: number) => v >= 80 ? 'Great' : v >= 60 ? 'Good' : 'Improve'
              },
              {
                label: 'Sleep',
                value: Math.round((lastWeekData.reduce((sum, d) => sum + d.sleep, 0) / lastWeekData.length) * 20),
                max: 100,
                isPercent: true,
                status: (v: number) => v >= 80 ? 'Great' : v >= 60 ? 'Okay' : 'Low'
              },
              {
                label: 'Stress',
                value: Math.round(((5 - lastWeekData.reduce((sum, d) => sum + d.stress, 0) / lastWeekData.length) / 5) * 100),
                max: 100,
                isPercent: true,
                status: (v: number) => v >= 60 ? 'Low' : v >= 40 ? 'Moderate' : 'High'
              },
            ].map((metric, i) => (
              <div key={i} className="grid grid-cols-[90px_1fr_60px] items-center gap-3">
                <span className="text-[13px] text-[#4A3F4B]">{metric.label}</span>
                <div className="h-2 bg-[#E5E5E5] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#C4887A] to-[#8BA888] rounded-full"
                    style={{ width: `${metric.isPercent ? metric.value : (metric.value / metric.max) * 100}%` }}
                  />
                </div>
                <span className={`text-[11px] font-semibold text-right ${
                  metric.status(metric.value) === 'Great' || metric.status(metric.value) === 'Good' || metric.status(metric.value) === 'Low' && metric.label === 'Stress'
                    ? 'text-[#8BA888]'
                    : 'text-[#C4887A]'
                }`}>
                  {metric.status(metric.value)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Insights & Suggestions */}
      {insights.length > 0 && (
        <div className="mb-4">
          <h3 className="text-[14px] font-semibold text-[#4A3F4B] mb-3">💡 Insights & Suggestions</h3>

          <div className="space-y-3">
            {insights.map((insight, i) => (
              <div
                key={i}
                className={`p-4 rounded-[16px] border-l-4 ${
                  insight.type === 'positive'
                    ? 'bg-[#8BA888]/10 border-l-[#8BA888]'
                    : 'bg-[#C4887A]/10 border-l-[#C4887A]'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{insight.icon}</span>
                  <span className="text-[14px] font-semibold text-[#4A3F4B]">{insight.title}</span>
                </div>
                <p className="text-[13px] text-[#4A3F4B]/80 mb-2">{insight.message}</p>
                {insight.tip && (
                  <p className="text-[13px] font-medium text-[#4A3F4B] bg-white/50 rounded-lg p-2">
                    {insight.tip}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {lastWeekData.length === 0 && (
        <div className="bg-[#F5E6DC]/50 rounded-[16px] p-6 text-center">
          <span className="text-4xl block mb-3">📝</span>
          <p className="text-[15px] font-semibold text-[#4A3F4B] mb-2">No check-ins yet</p>
          <p className="text-[13px] text-[#9B9299]">
            Start tracking with Daily Check-In to see your insights and wellness patterns.
          </p>
        </div>
      )}

      {/* Day Detail Modal */}
      {selectedDate && checkIns[selectedDate.toISOString().split('T')[0]] && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
          <div className="bg-white rounded-t-[24px] w-full max-w-md p-6 pb-10 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[16px] font-semibold text-[#4A3F4B]">
                {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </h3>
              <button onClick={() => setSelectedDate(null)} className="text-[#9B9299] text-xl">✕</button>
            </div>

            {(() => {
              const dateKey = selectedDate.toISOString().split('T')[0];
              const checkIn = checkIns[dateKey];
              const score = calculateDayScore(checkIn);

              return (
                <>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-[12px] font-semibold text-white ${
                      score >= 75 ? 'bg-[#8BA888]' : score >= 50 ? 'bg-[#C4887A]' : 'bg-[#9B9299]'
                    }`}>
                      {score >= 75 ? '🟢 Great Day' : score >= 50 ? '🟡 Okay Day' : '🔴 Tough Day'}
                    </span>
                    <span className="text-[14px] text-[#9B9299]">{score}/100</span>
                  </div>

                  <div className="space-y-2 text-[14px]">
                    <div className="flex justify-between py-2 border-b border-[#F5E6DC]">
                      <span className="text-[#9B9299]">🍼 Feeds</span>
                      <span className="text-[#4A3F4B]">{checkIn.feeds.count} ({checkIn.feeds.lastBreast || 'N/A'})</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#F5E6DC]">
                      <span className="text-[#9B9299]">👶 Wet Diapers</span>
                      <span className="text-[#4A3F4B]">{checkIn.babyOutput.wetDiapers}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#F5E6DC]">
                      <span className="text-[#9B9299]">👶 Dirty Diapers</span>
                      <span className="text-[#4A3F4B]">{checkIn.babyOutput.dirtyDiapers}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#F5E6DC]">
                      <span className="text-[#9B9299]">🍽️ Ate Protein</span>
                      <span className="text-[#4A3F4B]">{checkIn.momNourishment.ateProtein ? '✓ Yes' : '✗ No'}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#F5E6DC]">
                      <span className="text-[#9B9299]">💧 Hydrated</span>
                      <span className="text-[#4A3F4B]">{checkIn.hydration ? '✓ Yes' : '✗ No'}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#F5E6DC]">
                      <span className="text-[#9B9299]">😴 Sleep</span>
                      <span className="text-[#4A3F4B]">{'★'.repeat(checkIn.sleep)}{'☆'.repeat(5 - checkIn.sleep)}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-[#9B9299]">🧘 Stress</span>
                      <span className="text-[#4A3F4B]">{checkIn.stress <= 2 ? 'Low' : checkIn.stress <= 3 ? 'Moderate' : 'High'}</span>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// TRACKER SCREEN
// ============================================
function TrackerScreen({ onBack, onSave }: { onBack: () => void; onSave: () => void }) {
  const [feeds, setFeeds] = useState(0);
  const [lastBreast, setLastBreast] = useState<string | null>(null);
  const [wetDiapers, setWetDiapers] = useState(0);
  const [dirtyDiapers, setDirtyDiapers] = useState(0);
  const [ateProtein, setAteProtein] = useState<boolean | null>(null);
  const [ate3Plus, setAte3Plus] = useState<boolean | null>(null);
  const [feelingSick, setFeelingSick] = useState<boolean | null>(null);
  const [hydration, setHydration] = useState<boolean | null>(null);
  const [sleep, setSleep] = useState(3);
  const [stress, setStress] = useState(3);
  const [showOptional, setShowOptional] = useState(false);
  const [pumpingSessions, setPumpingSessions] = useState(0);
  const [babyWeight, setBabyWeight] = useState('');
  const [saved, setSaved] = useState(false);

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric'
  });

  const handleSave = () => {
    const checkIn = {
      date: new Date().toISOString().split('T')[0],
      feeds: { count: feeds, lastBreast },
      babyOutput: { wetDiapers, dirtyDiapers },
      momNourishment: { ateProtein, ate3Plus, feelingSick },
      hydration,
      sleep,
      stress,
      optional: { pumpingSessions, babyWeight: babyWeight ? parseFloat(babyWeight) : undefined },
      completedAt: new Date().toISOString()
    };

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('trackerHistory') || '[]');
    existing.push(checkIn);
    localStorage.setItem('trackerHistory', JSON.stringify(existing));

    // Update weekly check-ins
    const weeklyCheckIns = JSON.parse(localStorage.getItem('weeklyCheckIns') || '[]');
    if (!weeklyCheckIns.includes(checkIn.date)) {
      weeklyCheckIns.push(checkIn.date);
      localStorage.setItem('weeklyCheckIns', JSON.stringify(weeklyCheckIns));
    }

    setSaved(true);
    setTimeout(() => {
      onSave();
    }, 1500);
  };

  const encouragingMessages = [
    "Check-in saved! You're doing great. 💛",
    "Logged! Remember: tracking helps you, not judges you.",
    "Done! Your body is working hard. Be gentle with yourself."
  ];

  if (saved) {
    return (
      <div className="px-5 pt-20 pb-32 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-20 h-20 bg-[#8BA888] rounded-full flex items-center justify-center mb-6 animate-scale-in">
          <span className="text-4xl text-white">✓</span>
        </div>
        <p className="text-[18px] font-semibold text-[#4A3F4B] text-center mb-2">
          {encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)]}
        </p>
      </div>
    );
  }

  return (
    <div className="px-5 pt-6 pb-32">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-[#9B9299] hover:text-[#4A3F4B]">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </button>
        <h1 className="text-lg font-semibold text-[#4A3F4B]">Daily Check-In</h1>
        <div className="w-16" />
      </div>

      <p className="text-center text-[14px] text-[#9B9299] mb-6">{today}</p>

      {/* Feeds Section */}
      <div className="bg-white rounded-[16px] p-5 border border-[#F5E6DC] mb-4">
        <p className="text-[15px] font-semibold text-[#4A3F4B] mb-4">🍼 Feeds Today</p>

        <div className="mb-4">
          <p className="text-[13px] text-[#4A3F4B]/70 mb-3">How many feeds so far?</p>
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => setFeeds(Math.max(0, feeds - 1))}
              className="w-11 h-11 rounded-full border-2 border-[#E5E5E5] flex items-center justify-center text-xl text-[#9B9299] hover:border-[#C4887A] hover:text-[#C4887A] transition-colors"
            >−</button>
            <span className="text-[32px] font-bold text-[#4A3F4B] w-12 text-center">{feeds}</span>
            <button
              onClick={() => setFeeds(Math.min(20, feeds + 1))}
              className="w-11 h-11 rounded-full border-2 border-[#E5E5E5] flex items-center justify-center text-xl text-[#9B9299] hover:border-[#8BA888] hover:text-[#8BA888] transition-colors"
            >+</button>
          </div>
        </div>

        <div>
          <p className="text-[13px] text-[#4A3F4B]/70 mb-3">Which breast last?</p>
          <div className="flex gap-2">
            {['Left', 'Right', 'Both'].map(option => (
              <button
                key={option}
                onClick={() => setLastBreast(option)}
                className={`flex-1 py-2.5 rounded-full text-[14px] font-medium transition-all ${
                  lastBreast === option
                    ? 'bg-[#8BA888] text-white'
                    : 'bg-[#F5E6DC]/50 text-[#4A3F4B] hover:bg-[#F5E6DC]'
                }`}
              >{option}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Baby Output Section */}
      <div className="bg-white rounded-[16px] p-5 border border-[#F5E6DC] mb-4">
        <p className="text-[15px] font-semibold text-[#4A3F4B] mb-4">👶 Baby&apos;s Output</p>

        <div className="mb-4">
          <p className="text-[13px] text-[#4A3F4B]/70 mb-3">Wet diapers today</p>
          <div className="flex items-center justify-center gap-6">
            <button onClick={() => setWetDiapers(Math.max(0, wetDiapers - 1))} className="w-11 h-11 rounded-full border-2 border-[#E5E5E5] flex items-center justify-center text-xl text-[#9B9299] hover:border-[#C4887A]">−</button>
            <span className="text-[32px] font-bold text-[#4A3F4B] w-12 text-center">{wetDiapers}</span>
            <button onClick={() => setWetDiapers(Math.min(20, wetDiapers + 1))} className="w-11 h-11 rounded-full border-2 border-[#E5E5E5] flex items-center justify-center text-xl text-[#9B9299] hover:border-[#8BA888]">+</button>
          </div>
        </div>

        <div>
          <p className="text-[13px] text-[#4A3F4B]/70 mb-3">Dirty diapers today</p>
          <div className="flex items-center justify-center gap-6">
            <button onClick={() => setDirtyDiapers(Math.max(0, dirtyDiapers - 1))} className="w-11 h-11 rounded-full border-2 border-[#E5E5E5] flex items-center justify-center text-xl text-[#9B9299] hover:border-[#C4887A]">−</button>
            <span className="text-[32px] font-bold text-[#4A3F4B] w-12 text-center">{dirtyDiapers}</span>
            <button onClick={() => setDirtyDiapers(Math.min(20, dirtyDiapers + 1))} className="w-11 h-11 rounded-full border-2 border-[#E5E5E5] flex items-center justify-center text-xl text-[#9B9299] hover:border-[#8BA888]">+</button>
          </div>
        </div>
      </div>

      {/* Mom Nourishment Section */}
      <div className="bg-white rounded-[16px] p-5 border border-[#F5E6DC] mb-4">
        <p className="text-[15px] font-semibold text-[#4A3F4B] mb-4">🍽️ Your Nourishment</p>

        {[
          { label: 'Ate protein today?', value: ateProtein, setter: setAteProtein },
          { label: 'Ate 3+ times today?', value: ate3Plus, setter: setAte3Plus },
          { label: 'Feeling sick?', value: feelingSick, setter: setFeelingSick },
        ].map((item, i) => (
          <div key={i} className={i < 2 ? 'mb-4' : ''}>
            <p className="text-[13px] text-[#4A3F4B]/70 mb-2">{item.label}</p>
            <div className="flex gap-2">
              <button
                onClick={() => item.setter(true)}
                className={`flex-1 py-2.5 rounded-full text-[14px] font-medium transition-all ${
                  item.value === true ? 'bg-[#8BA888] text-white' : 'bg-[#F5E6DC]/50 text-[#4A3F4B]'
                }`}
              >Yes</button>
              <button
                onClick={() => item.setter(false)}
                className={`flex-1 py-2.5 rounded-full text-[14px] font-medium transition-all ${
                  item.value === false ? 'bg-[#C4887A] text-white' : 'bg-[#F5E6DC]/50 text-[#4A3F4B]'
                }`}
              >No</button>
            </div>
          </div>
        ))}
      </div>

      {/* Hydration Section */}
      <div className="bg-white rounded-[16px] p-5 border border-[#F5E6DC] mb-4">
        <p className="text-[15px] font-semibold text-[#4A3F4B] mb-2">💧 Hydration</p>
        <p className="text-[13px] text-[#4A3F4B]/70 mb-3">Had mineral-rich fluids? (water, coconut water, herbal tea, broth)</p>
        <div className="flex gap-2">
          <button onClick={() => setHydration(true)} className={`flex-1 py-2.5 rounded-full text-[14px] font-medium transition-all ${hydration === true ? 'bg-[#8BA888] text-white' : 'bg-[#F5E6DC]/50 text-[#4A3F4B]'}`}>Yes</button>
          <button onClick={() => setHydration(false)} className={`flex-1 py-2.5 rounded-full text-[14px] font-medium transition-all ${hydration === false ? 'bg-[#C4887A] text-white' : 'bg-[#F5E6DC]/50 text-[#4A3F4B]'}`}>No</button>
        </div>
      </div>

      {/* Sleep Section */}
      <div className="bg-white rounded-[16px] p-5 border border-[#F5E6DC] mb-4">
        <p className="text-[15px] font-semibold text-[#4A3F4B] mb-2">😴 Sleep & Recovery</p>
        <p className="text-[13px] text-[#4A3F4B]/70 mb-4">Sleep in the last 24 hours</p>
        <div className="flex items-center gap-3">
          <span className="text-xl">🟥</span>
          <input
            type="range" min="1" max="5" value={sleep}
            onChange={(e) => setSleep(parseInt(e.target.value))}
            className="flex-1 h-2 rounded-full appearance-none bg-gradient-to-r from-[#C4887A] to-[#8BA888] cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-3 [&::-webkit-slider-thumb]:border-[#4A3F4B] [&::-webkit-slider-thumb]:shadow-md"
          />
          <span className="text-xl">🟩</span>
        </div>
        <div className="flex justify-between text-[11px] text-[#9B9299] mt-2">
          <span>Fragmented</span>
          <span>Restorative</span>
        </div>
      </div>

      {/* Stress Section */}
      <div className="bg-white rounded-[16px] p-5 border border-[#F5E6DC] mb-4">
        <p className="text-[15px] font-semibold text-[#4A3F4B] mb-2">🧘 Stress Level</p>
        <p className="text-[13px] text-[#4A3F4B]/70 mb-4">How&apos;s your nervous system?</p>
        <div className="flex items-center gap-3">
          <span className="text-xl">😌</span>
          <input
            type="range" min="1" max="5" value={stress}
            onChange={(e) => setStress(parseInt(e.target.value))}
            className="flex-1 h-2 rounded-full appearance-none bg-gradient-to-r from-[#8BA888] to-[#C4887A] cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-3 [&::-webkit-slider-thumb]:border-[#4A3F4B] [&::-webkit-slider-thumb]:shadow-md"
          />
          <span className="text-xl">😰</span>
        </div>
        <div className="flex justify-between text-[11px] text-[#9B9299] mt-2">
          <span>Calm</span>
          <span>Overwhelmed</span>
        </div>
      </div>

      {/* Optional Section */}
      <button
        onClick={() => setShowOptional(!showOptional)}
        className="w-full flex items-center justify-between p-4 bg-[#F5E6DC]/30 rounded-[16px] mb-4"
      >
        <span className="text-[14px] text-[#9B9299] font-medium">{showOptional ? '▲' : '▼'} Optional</span>
      </button>

      {showOptional && (
        <div className="bg-white rounded-[16px] p-5 border border-[#F5E6DC] mb-4">
          <div className="mb-4">
            <p className="text-[13px] text-[#4A3F4B]/70 mb-3">🍼 Pumping sessions</p>
            <div className="flex items-center justify-center gap-6">
              <button onClick={() => setPumpingSessions(Math.max(0, pumpingSessions - 1))} className="w-11 h-11 rounded-full border-2 border-[#E5E5E5] flex items-center justify-center text-xl text-[#9B9299]">−</button>
              <span className="text-[32px] font-bold text-[#4A3F4B] w-12 text-center">{pumpingSessions}</span>
              <button onClick={() => setPumpingSessions(pumpingSessions + 1)} className="w-11 h-11 rounded-full border-2 border-[#E5E5E5] flex items-center justify-center text-xl text-[#9B9299]">+</button>
            </div>
          </div>
          <div>
            <p className="text-[13px] text-[#4A3F4B]/70 mb-2">⚖️ Baby&apos;s weight (weekly)</p>
            <input
              type="number"
              step="0.1"
              placeholder="lbs"
              value={babyWeight}
              onChange={(e) => setBabyWeight(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#F5E6DC] text-[15px] text-[#4A3F4B]"
            />
          </div>
        </div>
      )}

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C4887A] to-[#E8B4A6] text-white font-semibold text-[16px]"
      >
        Save Check-In ✓
      </button>
      <p className="text-center text-[13px] text-[#9B9299] mt-3">
        This takes care of YOU so you can take care of baby. 💛
      </p>
    </div>
  );
}

// ============================================
// MAIN APP
// ============================================
export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [showTracker, setShowTracker] = useState(false);

  const renderScreen = () => {
    if (showTracker) {
      return <TrackerScreen onBack={() => setShowTracker(false)} onSave={() => setShowTracker(false)} />;
    }

    switch (activeTab) {
      case "home":
        return <HomeScreen setActiveTab={setActiveTab} setShowTracker={setShowTracker} />;
      case "learn":
        return <LearnScreen />;
      case "symptoms":
        return <SymptomsScreen />;
      case "calm":
        return <CalmScreen />;
      case "profile":
        return <ProfileScreen />;
      default:
        return <HomeScreen setActiveTab={setActiveTab} setShowTracker={setShowTracker} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3] max-w-md mx-auto relative">
      {renderScreen()}
      {!showTracker && <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />}
    </div>
  );
}
