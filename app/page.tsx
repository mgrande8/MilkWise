"use client";

import { useState, useEffect } from "react";
import {
  symptoms,
  searchSymptoms,
  commonSearches,
  courses,
  getDailyAffirmation,
  getDailyFact,
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
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg px-2 pt-2 pb-6 flex justify-around shadow-[0_-2px_20px_rgba(74,63,75,0.08)] rounded-t-[24px] z-50 max-w-md mx-auto border-t border-[#F5E6DC]/50">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center gap-1 px-5 py-2 rounded-2xl transition-all duration-200 ${
            activeTab === tab.id
              ? "bg-[#F5E6DC]/70"
              : "hover:bg-[#F5E6DC]/30"
          }`}
        >
          {tab.icon(activeTab === tab.id)}
          <span
            className={`text-[11px] font-medium tracking-wide ${
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
}: {
  setActiveTab: (tab: string) => void;
}) {
  const [affirmation, setAffirmation] = useState<Affirmation | null>(null);
  const [fact, setFact] = useState<Fact | null>(null);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  useEffect(() => {
    setAffirmation(getDailyAffirmation());
    setFact(getDailyFact());
  }, []);

  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12
      ? "Good morning"
      : currentHour < 18
      ? "Good afternoon"
      : "Good evening";

  const moods = [
    { emoji: "😴", label: "Tired" },
    { emoji: "😊", label: "Good" },
    { emoji: "😔", label: "Sad" },
    { emoji: "💪", label: "Strong" },
    { emoji: "😰", label: "Anxious" },
  ];

  return (
    <div className="px-5 pt-8 pb-32">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm text-[#9B9299] mb-1 font-medium">{greeting}</p>
        <h1 className="text-[28px] font-semibold text-[#4A3F4B] tracking-tight">
          Mama <span className="text-2xl">💛</span>
        </h1>
      </div>

      {/* Daily Affirmation Card */}
      <div className="bg-gradient-to-br from-[#E8B4A6] to-[#F5E6DC] rounded-[20px] p-6 mb-5 relative overflow-hidden shadow-sm">
        <div className="absolute -top-8 -right-8 text-[100px] opacity-10 select-none">
          🌸
        </div>
        <p className="text-[11px] uppercase tracking-[0.15em] text-[#4A3F4B]/60 font-semibold mb-3">
          Today&apos;s Reminder
        </p>
        <p className="text-lg font-medium text-[#4A3F4B] leading-relaxed mb-2 relative z-10">
          {affirmation?.text || "Your body knows exactly what your baby needs."}
        </p>
        {affirmation?.subtext && (
          <p className="text-sm text-[#4A3F4B]/70 leading-relaxed relative z-10">
            {affirmation.subtext}
          </p>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <button
          onClick={() => setActiveTab("symptoms")}
          className="bg-white rounded-[16px] p-5 text-left border border-[#F5E6DC] hover:shadow-md hover:border-[#E8B4A6] transition-all duration-200 group"
        >
          <div className="w-11 h-11 rounded-full bg-[#F5E6DC] flex items-center justify-center mb-3 group-hover:bg-[#E8B4A6]/30 transition-colors">
            <svg className="w-5 h-5 stroke-[#C4887A]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <p className="text-[15px] font-semibold text-[#4A3F4B] mb-0.5">
            Is this normal?
          </p>
          <p className="text-xs text-[#9B9299]">Search 50+ symptoms</p>
        </button>
        <button
          onClick={() => setActiveTab("calm")}
          className="bg-gradient-to-br from-[#B8D4B5] to-[#8BA888]/40 rounded-[16px] p-5 text-left hover:shadow-md transition-all duration-200 group"
        >
          <div className="w-11 h-11 rounded-full bg-white/50 flex items-center justify-center mb-3 group-hover:bg-white/70 transition-colors">
            <svg className="w-5 h-5 stroke-[#8BA888]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </div>
          <p className="text-[15px] font-semibold text-[#4A3F4B] mb-0.5">
            Need a moment?
          </p>
          <p className="text-xs text-[#4A3F4B]/60">Breathing & calm</p>
        </button>
      </div>

      {/* Did You Know */}
      <div className="bg-[#FFFBF7] rounded-[16px] p-5 mb-5 border border-[#F5E6DC]">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm">✨</span>
          <p className="text-xs font-semibold text-[#C4887A] uppercase tracking-wide">
            Did you know?
          </p>
        </div>
        <p className="text-[14px] text-[#4A3F4B] leading-relaxed">
          {fact?.text || "Your milk changes composition throughout the day — morning milk is different from evening milk."}
        </p>
      </div>

      {/* Mood Check */}
      <div className="bg-white rounded-[16px] p-5 border border-[#F5E6DC]">
        <div className="flex justify-between items-center mb-4">
          <p className="text-[15px] font-semibold text-[#4A3F4B]">
            How are you feeling?
          </p>
          <span className="text-[11px] text-[#9B9299] font-medium">Optional</span>
        </div>
        <div className="flex gap-2">
          {moods.map((mood) => (
            <button
              key={mood.label}
              onClick={() => setSelectedMood(mood.label)}
              className={`flex-1 py-3 rounded-xl text-center transition-all duration-200 ${
                selectedMood === mood.label
                  ? "bg-[#F5E6DC] ring-2 ring-[#C4887A]/30"
                  : "bg-[#FFFBF7] hover:bg-[#F5E6DC]/50"
              }`}
            >
              <span className="text-xl block mb-1">{mood.emoji}</span>
              <span className="text-[10px] text-[#9B9299] font-medium">
                {mood.label}
              </span>
            </button>
          ))}
        </div>
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
  const [selectedSound, setSelectedSound] = useState<string | null>(null);

  useEffect(() => {
    if (!breathingActive) {
      setBreathPhase("Ready");
      setBreathScale(1);
      return;
    }

    let phaseIndex = 0;
    const phases = [
      { text: "Breathe in...", duration: 4000, scale: 1.3 },
      { text: "Hold...", duration: 7000, scale: 1.3 },
      { text: "Breathe out...", duration: 8000, scale: 1 },
      { text: "Hold...", duration: 4000, scale: 1 },
    ];

    const runPhase = () => {
      if (!breathingActive) return;

      const phase = phases[phaseIndex];
      setBreathPhase(phase.text);
      setBreathScale(phase.scale);

      phaseIndex = (phaseIndex + 1) % phases.length;
    };

    runPhase();
    const interval = setInterval(() => {
      runPhase();
    }, phases.reduce((sum, p, i) => i < phaseIndex ? sum + p.duration : sum, 0) || phases[phaseIndex === 0 ? 3 : phaseIndex - 1].duration);

    // More accurate timing
    let timeoutId: NodeJS.Timeout;
    const runCycle = (idx: number) => {
      if (!breathingActive) return;
      const phase = phases[idx];
      setBreathPhase(phase.text);
      setBreathScale(phase.scale);
      timeoutId = setTimeout(() => {
        runCycle((idx + 1) % phases.length);
      }, phase.duration);
    };

    clearInterval(interval);
    runCycle(0);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(interval);
    };
  }, [breathingActive]);

  const sounds = [
    { name: "Rain", icon: "🌧️" },
    { name: "Ocean", icon: "🌊" },
    { name: "Forest", icon: "🌲" },
    { name: "White Noise", icon: "〰️" },
  ];

  const boosters = [
    { title: "Skin-to-skin contact", icon: "👶", desc: "Boosts oxytocin naturally" },
    { title: "Warm compress", icon: "🫖", desc: "Relaxes let-down reflex" },
    { title: "Dim lighting", icon: "🕯️", desc: "Signals safety to your body" },
    { title: "Gentle music", icon: "🎵", desc: "Lowers cortisol levels" },
  ];

  return (
    <div className="px-5 pt-8 pb-32">
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
        Soothing Sounds
      </p>
      <div className="grid grid-cols-4 gap-3 mb-6">
        {sounds.map((sound) => (
          <button
            key={sound.name}
            onClick={() =>
              setSelectedSound(selectedSound === sound.name ? null : sound.name)
            }
            className={`rounded-[16px] p-4 text-center border transition-all ${
              selectedSound === sound.name
                ? "bg-[#B8D4B5]/30 border-[#8BA888]"
                : "bg-white border-[#F5E6DC] hover:border-[#E8B4A6]"
            }`}
          >
            <span className="text-2xl block mb-1">{sound.icon}</span>
            <span className="text-[10px] text-[#4A3F4B] font-medium">
              {sound.name}
            </span>
          </button>
        ))}
      </div>

      {/* Oxytocin Boosters */}
      <p className="text-[11px] uppercase tracking-[0.15em] text-[#C4887A] font-semibold mb-3">
        Oxytocin Boosters
      </p>
      <div className="bg-white rounded-[16px] border border-[#F5E6DC] overflow-hidden">
        {boosters.map((item, i) => (
          <div
            key={item.title}
            className={`flex items-center p-4 ${
              i < boosters.length - 1 ? "border-b border-[#F5E6DC]" : ""
            }`}
          >
            <span className="text-2xl mr-4">{item.icon}</span>
            <div>
              <p className="text-[14px] font-medium text-[#4A3F4B]">
                {item.title}
              </p>
              <p className="text-xs text-[#9B9299]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

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
// MAIN APP
// ============================================
export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen setActiveTab={setActiveTab} />;
      case "learn":
        return <LearnScreen />;
      case "symptoms":
        return <SymptomsScreen />;
      case "calm":
        return <CalmScreen />;
      default:
        return <HomeScreen setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3] max-w-md mx-auto relative">
      {renderScreen()}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
