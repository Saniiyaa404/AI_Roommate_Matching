import React, { useState } from 'react';
import { Bell, Search, Filter, ChevronDown, Sparkles, SlidersHorizontal } from 'lucide-react';
import RoommateCard from '../components/RoommateCard'; // Importing the component we just made

// Mock Data matching the image
const MOCK_USERS = [
  {
    id: 1,
    name: "Aryan Verma",
    branch: "CSE",
    year: "3rd Year",
    hostel: "Tilak Hostel",
    matchScore: 96,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=faces",
    interests: ["early-riser", "studious", "clean", "nature"],
    matchReason: "Both early risers who prefer quiet study hours. High compatibility in cleanliness standards."
  },
  {
    id: 2,
    name: "Rohan Gupta",
    branch: "IT",
    year: "3rd Year",
    hostel: "Tilak Hostel",
    matchScore: 88,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    interests: ["night-owl", "gamer", "music"],
    matchReason: "Similar gaming interests and sleep schedules. Moderate noise tolerance alignment."
  },
  {
    id: 3,
    name: "Vikram Singh",
    branch: "ECE",
    year: "3rd Year",
    hostel: "Raman Hostel",
    matchScore: 82,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    interests: ["early-riser", "fitness", "coffee"],
    matchReason: "Fitness enthusiasts. Compatible morning routines, but differing study habits."
  },
  {
    id: 4,
    name: "Aditya Kumar",
    branch: "EE",
    year: "3rd Year",
    hostel: "Tilak Hostel",
    matchScore: 78,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
    interests: ["music", "night-owl", "foodie"],
    matchReason: "Shared love for music and late night snacks. Sleep schedules align perfectly."
  },
  {
    id: 5,
    name: "Dev Mishra",
    branch: "CSE",
    year: "3rd Year",
    hostel: "Subhash Hostel",
    matchScore: 85,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=faces",
    interests: ["studious", "coffee", "early-riser"],
    matchReason: "Both prefer quiet environments and are academically focused."
  },
  {
    id: 6,
    name: "Sameer Khan",
    branch: "ME",
    year: "3rd Year",
    hostel: "Tagore Hostel",
    matchScore: 75,
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=faces",
    interests: ["fitness", "night-owl", "music"],
    matchReason: "Gym partners potential. Different study schedules but similar leisure interests."
  }
];

const FindRoommates = () => {
  const [activeTab, setActiveTab] = useState('find');

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] font-sans">
      {/* --- Navbar (Specific to this screenshot) --- */}
      <nav className="border-b border-white/5 bg-[var(--bg-primary)] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-white">
              MMMUT <span className="text-[var(--text-secondary)] font-normal">Roommate AI</span>
            </h1>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Dashboard', 'Find Roommates', 'Requests', 'Messages'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item === 'Find Roommates' ? 'find' : item.toLowerCase())}
                className={`text-sm font-medium transition-colors ${
                  item === 'Find Roommates' 
                    ? 'text-white' 
                    : 'text-[var(--text-secondary)] hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="text-[var(--text-secondary)] hover:text-white transition-colors">
              <Bell size={20} />
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-[2px]">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover border-2 border-[var(--bg-primary)]"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* --- Main Content --- */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">Find Your Perfect Roommate</h2>
          <p className="text-[var(--text-secondary)] text-lg">
            AI-curated matches based on your lifestyle and preferences.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mb-8">
          
          {/* Left: AI Toggle */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-sm font-semibold hover:bg-[var(--accent-primary)]/20 transition-all shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <Sparkles size={16} />
            Top Match
          </button>

          {/* Right: Dropdowns */}
          <div className="flex flex-wrap gap-3 w-full lg:w-auto">
            {['Branch', 'Year', 'Hostel Block'].map((filter) => (
              <div key={filter} className="relative group">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-secondary)] border border-white/5 text-[var(--text-secondary)] text-sm hover:border-white/10 hover:text-white transition-all min-w-[120px] justify-between">
                  {filter}
                  <ChevronDown size={14} className="text-[var(--text-muted)]" />
                </button>
              </div>
            ))}
            
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-[var(--text-secondary)] text-sm hover:bg-white/5 transition-all">
              <SlidersHorizontal size={16} />
              More Filters
            </button>
          </div>
        </div>

        {/* Roommates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_USERS.map((user) => (
            <RoommateCard key={user.id} user={user} />
          ))}
        </div>

      </main>
    </div>
  );
};

export default FindRoommates;