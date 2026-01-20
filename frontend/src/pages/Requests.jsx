import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Menu, Clock, Moon, Sun, Music, BookOpen, Sparkles, VolumeX } from 'lucide-react';

// Import the component we just made
import RequestCard from '../components/RequestCard';

// --- Mock Data ---
const MOCK_REQUESTS = [
  {
    id: 1,
    name: "Arjun Verma",
    branch: "CSE",
    year: "3rd Year",
    hostel: "Tagore Hostel",
    matchScore: 92,
    avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=150&h=150&fit=crop&crop=faces",
    message: "Hey! I saw we both are into competitive coding and prefer a quiet room. Let's connect?",
    tags: [
      { icon: <Moon size={14} />, text: "Night Owl" },
      { icon: <VolumeX size={14} />, text: "Quiet Study" },
      { icon: <Clock size={14} />, text: "Received 2h ago" }
    ]
  },
  {
    id: 2,
    name: "Vikram Singh",
    branch: "ECE",
    year: "3rd Year",
    hostel: "Raman Hostel",
    matchScore: 78,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    message: "Looking for a roommate who plays football. I'm usually out in the evenings.",
    tags: [
      { icon: <Sun size={14} />, text: "Early Riser" },
      { icon: <Music size={14} />, text: "Music Lover" },
      { icon: <Clock size={14} />, text: "Received 1d ago" }
    ]
  },
  {
    id: 3,
    name: "Dev Patel",
    branch: "Civil",
    year: "3rd Year",
    hostel: "Raman Hostel",
    matchScore: 85,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces",
    message: "Hi, my friend recommended you. I'm clean and organized. Let me know.",
    tags: [
      { icon: <Sparkles size={14} />, text: "Neat Freak" },
      { icon: <BookOpen size={14} />, text: "Studious" },
      { icon: <Clock size={14} />, text: "Received 2d ago" }
    ]
  }
];

const Requests = () => {
  const [activeTab, setActiveTab] = useState('received');
  const navigate = useNavigate();
  const navItems = ['Dashboard', 'Find Roommates', 'Requests', 'Messages'];

  const handleNavigation = (item) => {
    const path = item.toLowerCase().replace(' ', '-');
    navigate(`/${path}`);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] font-sans">
      
      {/* --- Navbar (Integrated directly here) --- */}
      <nav className="border-b border-white/5 bg-[var(--bg-primary)] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/dashboard')}>
            <h1 className="text-xl font-bold tracking-tight text-white">
              MMMUT <span className="text-[var(--text-secondary)] font-normal">Roommate AI</span>
            </h1>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className={`text-sm font-medium transition-colors relative ${
                  item === 'Requests' 
                    ? 'text-white' 
                    : 'text-[var(--text-secondary)] hover:text-white'
                }`}
              >
                {item}
                {item === 'Requests' && (
                  <span className="absolute -bottom-[22px] left-0 w-full h-[2px] bg-[var(--accent-primary)] shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
                )}
              </button>
            ))}
          </div>

          {/* Profile & Notifications */}
          <div className="flex items-center gap-4">
            <button className="text-[var(--text-secondary)] hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
              <Bell size={20} />
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-[2px] cursor-pointer hover:scale-105 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover border-2 border-[var(--bg-primary)]"
              />
            </div>
            <button className="md:hidden text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- Main Page Content --- */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Requests & Matches</h2>
          <p className="text-[var(--text-secondary)]">Manage your incoming roommate requests and view your matches.</p>
        </div>

        {/* Tabs System */}
        <div className="flex gap-8 border-b border-white/5 mb-8 overflow-x-auto">
          {[
            { id: 'received', label: 'Received Requests', count: 3 },
            { id: 'sent', label: 'Sent Requests', count: 1 },
            { id: 'matches', label: 'Accepted Matches', count: 2 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-sm font-medium relative transition-colors whitespace-nowrap ${
                activeTab === tab.id ? 'text-white' : 'text-[var(--text-muted)] hover:text-white'
              }`}
            >
              {tab.label}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab.id ? 'bg-[var(--accent-primary)] text-white' : 'bg-[var(--bg-tertiary)] text-[var(--text-muted)]'
              }`}>
                {tab.count}
              </span>
              {/* Active Tab Indicator */}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--accent-primary)] shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
              )}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_REQUESTS.map((req) => (
            <RequestCard key={req.id} user={req} />
          ))}
        </div>

      </main>
    </div>
  );
};

export default Requests;