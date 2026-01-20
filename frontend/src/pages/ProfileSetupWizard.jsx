import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import { 
  Check, 
  ChevronLeft, 
  ArrowRight, 
  Moon, 
  Sun, 
  Sunset, 
  CloudMoon 
} from 'lucide-react';

const ProfileSetupWizard = () => {
  const navigate = useNavigate(); // Hook to handle page switching

  // Form State
  const [sleepValue, setSleepValue] = useState(70);
  const [cleanliness, setCleanliness] = useState(65);
  const [studyTime, setStudyTime] = useState('late-night');
  const [diet, setDiet] = useState('vegetarian');
  const [smokeDrink, setSmokeDrink] = useState('never');
  const [guests, setGuests] = useState(true);
  const [sharing, setSharing] = useState(false);

  // Stepper Data
  const steps = [
    { id: 1, label: 'Basic Info', status: 'completed' },
    { id: 2, label: 'Lifestyle', status: 'current' },
    { id: 3, label: 'Preferences', status: 'pending' },
  ];

  const handleSave = () => {
    // You can save data to backend here
    console.log("Saving Profile...", { sleepValue, cleanliness, studyTime, guests });
    // Navigate to next page
    navigate('/find-roommates'); 
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col items-center pt-10 pb-12 px-4 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-8 z-10">
        <h2 className="text-[var(--text-secondary)] text-xs font-bold tracking-widest uppercase mb-2">MMMUT</h2>
        <h1 className="text-3xl font-bold text-white mb-2">Complete Your Profile</h1>
        <p className="text-[var(--text-secondary)] text-sm">Help us find your perfect roommate match with AI</p>
      </div>

      {/* Progress Stepper */}
      <div className="w-full max-w-2xl mb-10 relative z-10">
        <div className="flex justify-between items-center relative">
          {/* Background Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[var(--bg-tertiary)] -z-10" />
          {/* Active Line (50% for step 2) */}
          <div className="absolute top-1/2 left-0 w-1/2 h-[1px] bg-[var(--accent-primary)] -z-10" />

          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center gap-2 bg-[var(--bg-primary)] px-2">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300
                ${step.status === 'completed' ? 'bg-[var(--success)] border-[var(--success)] text-white' : ''}
                ${step.status === 'current' ? 'bg-[var(--accent-primary)] border-[var(--accent-primary)] text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]' : ''}
                ${step.status === 'pending' ? 'bg-[var(--bg-secondary)] border-[var(--bg-tertiary)] text-[var(--text-muted)]' : ''}
              `}
              >
                {step.status === 'completed' ? <Check size={14} /> : step.id}
              </div>
              <span className={`text-xs font-medium ${step.status === 'pending' ? 'text-[var(--text-muted)]' : 'text-white'}`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Form Card */}
      <div className="w-full max-w-2xl bg-[var(--bg-secondary)] border border-white/5 rounded-2xl p-8 shadow-2xl relative z-10">
        
        {/* Title */}
        <div className="flex items-center gap-3 mb-8">
          <Moon className="text-[var(--accent-primary)]" size={20} />
          <h3 className="text-lg font-semibold text-white">Lifestyle Habits</h3>
        </div>

        {/* 1. Sleep Slider */}
        <div className="mb-8">
          <label className="block text-[var(--text-secondary)] text-sm mb-4">Typical Sleep Schedule</label>
          <div className="relative w-full h-1.5 bg-[var(--bg-tertiary)] rounded-full mb-2">
            <div 
              className="absolute h-full bg-[var(--accent-primary)] rounded-full" 
              style={{ width: `${sleepValue}%` }} 
            />
            <input 
              type="range" min="0" max="100" value={sleepValue} 
              onChange={(e) => setSleepValue(e.target.value)}
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />
            {/* Thumb */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--accent-primary)] rounded-full border-2 border-[var(--bg-secondary)] shadow-lg pointer-events-none"
              style={{ left: `${sleepValue}%`, transform: `translate(-50%, -50%)` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-[var(--text-muted)] mt-2 uppercase tracking-wide">
            <span>Early Bird (10 PM)</span>
            <span>Night Owl (3 AM)</span>
          </div>
        </div>

        {/* 2. Study Time */}
        <div className="mb-8">
          <label className="block text-[var(--text-secondary)] text-sm mb-4">When do you prefer to study?</label>
          <div className="flex gap-3">
            {[
              { id: 'morning', label: 'Morning', icon: <Sun size={14} /> },
              { id: 'evening', label: 'Evening', icon: <Sunset size={14} /> },
              { id: 'late-night', label: 'Late Night', icon: <CloudMoon size={14} /> }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setStudyTime(opt.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all ${
                  studyTime === opt.id 
                    ? 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] text-[var(--accent-primary)]' 
                    : 'bg-[var(--bg-tertiary)] border-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]/80'
                }`}
              >
                {opt.icon}
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Cleanliness Slider */}
        <div className="mb-8">
          <label className="block text-[var(--text-secondary)] text-sm mb-4">Room Cleanliness Level</label>
          <div className="relative w-full h-1.5 bg-[var(--bg-tertiary)] rounded-full mb-2">
            <div 
              className="absolute h-full bg-[var(--accent-primary)] rounded-full" 
              style={{ width: `${cleanliness}%` }} 
            />
            <input 
              type="range" min="0" max="100" value={cleanliness} 
              onChange={(e) => setCleanliness(e.target.value)}
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--accent-primary)] rounded-full border-2 border-[var(--bg-secondary)] shadow-lg pointer-events-none"
              style={{ left: `${cleanliness}%`, transform: `translate(-50%, -50%)` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-[var(--text-muted)] mt-2 uppercase tracking-wide">
            <span>Relaxed</span>
            <span>Moderate</span>
            <span>Very Neat</span>
          </div>
        </div>

        {/* 4. Grid Preferences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-[var(--text-secondary)] text-sm mb-3">Dietary Preference</label>
            <div className="bg-[var(--bg-tertiary)] p-1 rounded-lg flex">
              {['Vegetarian', 'Non-Vegetarian'].map((opt) => {
                 const val = opt.toLowerCase();
                 return (
                  <button
                    key={val}
                    onClick={() => setDiet(val)}
                    className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-all ${
                      diet === val ? 'bg-[var(--accent-primary)] text-white shadow' : 'text-[var(--text-muted)]'
                    }`}
                  >
                    {opt}
                  </button>
                 )
              })}
            </div>
          </div>
          <div>
            <label className="block text-[var(--text-secondary)] text-sm mb-3">Smoking / Drinking</label>
            <div className="bg-[var(--bg-tertiary)] p-1 rounded-lg flex">
              {['Never', 'Occasionally'].map((opt) => {
                 const val = opt.toLowerCase();
                 return (
                  <button
                    key={val}
                    onClick={() => setSmokeDrink(val)}
                    className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-all ${
                      smokeDrink === val ? 'bg-[var(--bg-secondary)] text-white border border-white/10' : 'text-[var(--text-muted)]'
                    }`}
                  >
                    {opt}
                  </button>
                 )
              })}
            </div>
          </div>
        </div>

        {/* 5. Toggles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="flex items-center justify-between p-3 bg-[var(--bg-tertiary)]/30 rounded-lg border border-white/5">
            <span className="text-white text-sm">Comfortable with guests?</span>
            <button 
              onClick={() => setGuests(!guests)}
              className={`w-10 h-6 rounded-full relative transition-colors ${guests ? 'bg-[var(--accent-primary)]' : 'bg-gray-600'}`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${guests ? 'left-5' : 'left-1'}`} />
            </button>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-[var(--bg-tertiary)]/30 rounded-lg border border-white/5">
            <span className="text-white text-sm">Share personal items?</span>
            <button 
              onClick={() => setSharing(!sharing)}
              className={`w-10 h-6 rounded-full relative transition-colors ${sharing ? 'bg-[var(--accent-primary)]' : 'bg-gray-600'}`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${sharing ? 'left-5' : 'left-1'}`} />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-white/5">
          <button className="flex items-center gap-2 text-[var(--text-secondary)] text-sm hover:text-white transition-colors">
            <ChevronLeft size={16} /> Back
          </button>
          <button 
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white text-sm font-medium transition-all shadow-lg shadow-indigo-500/20"
          >
            Save & Continue <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProfileSetupWizard;