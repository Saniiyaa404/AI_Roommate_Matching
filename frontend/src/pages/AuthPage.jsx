import React, { useState, useEffect } from 'react';
import { User, Lock, Mail, ShieldCheck, GraduationCap, ArrowLeft, Smartphone } from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState('auth'); // 'auth' or 'otp'
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(30);

  // Timer logic for Resend OTP
  useEffect(() => {
    let interval;
    if (step === 'otp' && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0f1e] p-4 font-sans">
      {/* Decorative background glows */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600 rounded-full filter blur-[120px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 -right-4 w-72 h-72 bg-purple-600 rounded-full filter blur-[120px] opacity-10 animate-pulse"></div>

      <div className="relative w-full max-w-[450px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl transition-all duration-500 min-h-[600px] flex flex-col">
        
        {/* Header */}
        <div className="pt-10 pb-6 px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-4 border border-white/10">
            <img src="https://www.mmmut.ac.in/images/logo.png" alt="MMMUT" className="w-12 h-12 object-contain" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            MMMUT Hostel Mate
          </h1>
        </div>

        {step === 'auth' ? (
          /* LOGIN / SIGNUP VIEW */
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex p-1 mx-8 mb-6 bg-black/40 rounded-xl border border-white/5">
              <button onClick={() => setIsLogin(true)} className={`flex-1 py-2 text-sm rounded-lg transition-all ${isLogin ? 'bg-white/10 text-white shadow-lg' : 'text-slate-500'}`}>Login</button>
              <button onClick={() => setIsLogin(false)} className={`flex-1 py-2 text-sm rounded-lg transition-all ${!isLogin ? 'bg-white/10 text-white shadow-lg' : 'text-slate-500'}`}>Signup</button>
            </div>

            <div className="px-8 space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase ml-1">University ID</label>
                <div className="relative group">
                  <GraduationCap className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-blue-400" size={18} />
                  <input type="text" placeholder="Enrollment No." className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase ml-1">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-purple-400" size={18} />
                  <input type="password" placeholder="••••••••" className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all" />
                </div>
              </div>

              <button 
                onClick={() => setStep('otp')}
                className="w-full py-4 mt-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-blue-500/10"
              >
                {isLogin ? 'Request OTP' : 'Create Account'}
              </button>
            </div>
          </div>
        ) : (
          /* OTP VERIFICATION VIEW */
          <div className="px-8 space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <button onClick={() => setStep('auth')} className="flex items-center text-slate-400 hover:text-white transition-colors text-sm mb-2">
              <ArrowLeft size={16} className="mr-2" /> Back to Login
            </button>
            
            <div className="text-center">
              <div className="inline-flex p-3 rounded-full bg-blue-500/10 mb-4">
                <Smartphone className="text-blue-400" size={24} />
              </div>
              <h2 className="text-xl font-semibold text-white">Verify Your Identity</h2>
              <p className="text-slate-400 text-sm mt-2">We've sent a 6-digit code to your university email.</p>
            </div>

            <div className="flex justify-between gap-2">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-12 h-14 bg-black/30 border border-white/10 rounded-xl text-center text-xl font-bold text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  value={data}
                  onChange={e => handleOtpChange(e.target, index)}
                  onFocus={e => e.target.select()}
                />
              ))}
            </div>

            <button className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 shadow-lg">
              Verify & Enter Portal
            </button>

            <div className="text-center">
              {timer > 0 ? (
                <p className="text-slate-500 text-sm">Resend code in <span className="text-blue-400 font-mono">{timer}s</span></p>
              ) : (
                <button onClick={() => setTimer(30)} className="text-blue-400 hover:underline text-sm font-medium">Resend OTP Code</button>
              )}
            </div>
          </div>
        )}

        <div className="mt-auto pb-10 px-8 text-center">
           <div className="flex items-center gap-2 p-3 bg-white/5 border border-white/5 rounded-xl text-left mb-6">
              <ShieldCheck className="text-green-400 shrink-0" size={18} />
              <p className="text-[10px] text-slate-400">Secure session for Madan Mohan Malviya University of Technology Portal.</p>
           </div>
           <p className="text-[11px] text-slate-600 uppercase tracking-[0.2em]">Restricted Academic Access</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;