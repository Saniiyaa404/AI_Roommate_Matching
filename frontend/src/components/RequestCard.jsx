import React from 'react';
import { 
  Check, 
  X, 
  Clock, 
  Moon, 
  Sun, 
  Music, 
  BookOpen, 
  Sparkles, 
  VolumeX 
} from 'lucide-react';

const RequestCard = ({ user }) => {
  // Logic to determine color based on match %
  const getMatchColor = (score) => {
    if (score >= 90) return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
    if (score >= 80) return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'; 
    return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
  };

  return (
    <div className="bg-[var(--bg-secondary)] border border-white/5 rounded-2xl p-6 shadow-xl hover:border-[var(--accent-primary)]/30 transition-all">
      
      {/* --- Card Header: Avatar & Name --- */}
      <div className="flex justify-between items-start mb-5">
        <div className="flex gap-4">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-14 h-14 rounded-full object-cover border-2 border-[var(--bg-tertiary)]" 
          />
          <div>
            <h3 className="text-lg font-bold text-white">{user.name}</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              {user.branch} • {user.year} • {user.hostel}
            </p>
          </div>
        </div>
        
        {/* Match Score Badge */}
        <div className={`px-3 py-1 flex items-center gap-1 rounded-full text-sm font-bold border ${getMatchColor(user.matchScore)}`}>
           <span className="text-xs">⚡</span> {user.matchScore}%
        </div>
      </div>

      {/* --- Message Bubble --- */}
      <div className="bg-[#1e2130] rounded-xl p-4 mb-5 border border-white/5 relative">
        {/* Little Triangle for Speech Bubble */}
        <div className="absolute top-[-6px] left-8 w-3 h-3 bg-[#1e2130] border-t border-l border-white/5 rotate-45"></div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          {user.message}
        </p>
      </div>

      {/* --- Tags Row --- */}
      <div className="flex flex-wrap gap-4 mb-6">
        {user.tags.map((tag, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
            {tag.icon}
            <span>{tag.text}</span>
          </div>
        ))}
      </div>

      {/* --- Action Buttons --- */}
      <div className="grid grid-cols-[auto_1fr_1fr] gap-3">
        {/* Reject Button */}
        <button className="w-12 h-10 flex items-center justify-center rounded-lg border border-white/10 text-[var(--text-muted)] hover:text-red-400 hover:border-red-400/30 hover:bg-red-400/5 transition-all">
          <X size={18} />
        </button>
        
        {/* View Profile */}
        <button className="h-10 rounded-lg border border-[var(--bg-tertiary)] text-sm font-medium text-white hover:bg-[var(--bg-tertiary)] transition-colors">
          View Profile
        </button>
        
        {/* Accept Button */}
        <button className="h-10 rounded-lg bg-gradient-to-r from-[var(--accent-gradient-start)] to-[var(--accent-gradient-end)] text-sm font-medium text-white flex items-center justify-center gap-2 hover:opacity-90 shadow-lg shadow-indigo-500/20">
          Accept <Check size={16} />
        </button>
      </div>
    </div>
  );
};

export default RequestCard;