import React from 'react';
import { UserPlus, Sun, Moon, BookOpen, Leaf, Gamepad2, Music, Dumbbell, Coffee, Wind, Utensils } from 'lucide-react';

const RoommateCard = ({ user }) => {
  // Helper to get icons based on interest tags
  const getIcon = (tag) => {
    const icons = {
      'early-riser': <Sun size={14} />,
      'night-owl': <Moon size={14} />,
      'studious': <BookOpen size={14} />,
      'clean': <Leaf size={14} />,
      'gamer': <Gamepad2 size={14} />,
      'music': <Music size={14} />,
      'fitness': <Dumbbell size={14} />,
      'coffee': <Coffee size={14} />,
      'nature': <Wind size={14} />,
      'foodie': <Utensils size={14} />,
    };
    return icons[tag] || <Sun size={14} />;
  };

  // Color logic for match percentage
  const getMatchColor = (score) => {
    if (score >= 90) return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
    if (score >= 80) return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
    return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
  };

  return (
    <div className="bg-[var(--bg-secondary)] border border-white/5 rounded-2xl p-5 hover:border-[var(--accent-primary)]/30 transition-all duration-300 group">
      {/* Header: Avatar & Info */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-4">
          <div className="relative">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="w-14 h-14 rounded-full object-cover border-2 border-[var(--bg-tertiary)]"
            />
            {/* Online Indicator dot could go here */}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-[var(--accent-primary)] transition-colors">
              {user.name}
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              {user.branch} • {user.year}
            </p>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              {user.hostel}
            </p>
          </div>
        </div>
        
        {/* Match Badge */}
        <div className={`px-3 py-1 rounded-full text-sm font-bold border ${getMatchColor(user.matchScore)}`}>
          {user.matchScore}%
        </div>
      </div>

      {/* Icons Row */}
      <div className="flex gap-2 mb-4">
        {user.interests.map((tag, index) => (
          <div 
            key={index} 
            className="w-8 h-8 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--text-secondary)] border border-white/5"
            title={tag}
          >
            {getIcon(tag)}
          </div>
        ))}
      </div>

      {/* "Why a match?" Box */}
      <div className="bg-[#1e2130] rounded-xl p-3 mb-5 border border-white/5">
        <h4 className="text-xs font-bold text-white mb-1">Why a match?</h4>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          {user.matchReason}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button className="px-4 py-2.5 rounded-lg border border-[var(--bg-tertiary)] text-sm font-medium text-white hover:bg-[var(--bg-tertiary)] transition-colors">
          View Profile
        </button>
        <button className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-[var(--accent-gradient-start)] to-[var(--accent-gradient-end)] text-sm font-medium text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20">
          Connect <UserPlus size={16} />
        </button>
      </div>
    </div>
  );
};

export default RoommateCard;