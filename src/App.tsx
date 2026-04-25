import { useState, type ReactNode } from 'react';
import { 
  Menu, 
  Settings, 
  Sparkles, 
  PlayCircle, 
  Library, 
  AudioLines, 
  History, 
  Share2,
  Waves
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [prompt, setPrompt] = useState('');
  const tags = ['Ambient', 'Lo-Fi', 'Ethereal', 'Cyberpunk'];

  return (
    <div className="relative min-h-screen flex flex-col items-center selection:bg-purple-500/30 overflow-hidden font-sans">
      {/* Aurora Backgrounds */}
      <div className="aurora-blur -top-40 -left-40 bg-purple-600/20" />
      <div className="aurora-blur -bottom-40 -right-40 bg-blue-600/20" />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="aurora-blur top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500/10" 
      />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/5 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-white/5 transition-colors text-purple-500 active:scale-95">
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 tracking-tight">
            SonicAI
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-gray-500 hover:text-white transition-colors">
            <Settings size={20} />
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-[1px] cursor-pointer active:scale-95 transition-transform group">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuClzZCWFMHHgw_jhgKAsYgie2t0hvN1kVX8PlUp0NccUCGV_K4RqmY-NF6t5dqJ_QHzc4ys-dZmPO7DqiThPVx2s4xd5Tv1T6XO_-SUR49Un-mYapLjzigv_TC4OE39aClXXyJYU2lrySSoeJvqmZZljr7U67elU9ajdNOE784xTo-Pl2um-i-riSCriWzHGuMCRz5mdIfKSLTDGEtXBrAHaTcvKYYCVcMfXsnzOyjomM9i878ycYn94tYG0eYbrihuXrQLzkW7pXM" 
                alt="User Profile" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-1 w-full max-w-4xl px-6 pt-24 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Create the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Atmosphere
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed opacity-80">
            Transform your thoughts into professional-grade sonic landscapes with ethereal AI precision.
          </p>
        </motion.div>

        {/* Prompt Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-700" />
          <div className="glass-panel relative rounded-[2rem] p-8 border border-white/5 shadow-2xl focus-within:ring-1 focus-within:ring-purple-500/30 transition-all">
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-transparent border-none focus:ring-0 text-xl md:text-2xl font-semibold text-white placeholder-white/20 resize-none h-40 scrollbar-none" 
              placeholder="Describe the melody in your mind..."
            />
            
            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
              {tags.map(tag => (
                <button 
                  key={tag}
                  onClick={() => setPrompt(prev => prev ? `${prev} ${tag}` : tag)}
                  className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-medium text-gray-400 hover:bg-white/5 hover:text-white hover:border-purple-500/50 cursor-pointer transition-all active:scale-95"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Generate Button */}
        <div className="relative mt-12 flex flex-col items-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="generate-glow group relative flex items-center justify-center w-24 h-24 rounded-full bg-white transition-all duration-500"
          >
            {/* Animated Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/50 animate-ping opacity-20 group-hover:scale-150 transition-transform" />
            
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center shadow-lg relative overflow-hidden">
               <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
               <Sparkles className="text-white relative z-10 fill-current" size={32} />
            </div>
          </motion.button>
          <span className="mt-8 font-bold text-[10px] text-purple-400 uppercase tracking-[0.3em]">
            Generate
          </span>
        </div>
      </main>

      {/* Desktop Sidebar (Contextual) */}
      <aside className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        <div className="glass-panel p-4 rounded-2xl flex flex-col gap-8 border border-white/5 shadow-xl">
          <SidebarIcon icon={<AudioLines size={20} />} label="Mix" />
          <SidebarIcon icon={<History size={20} />} label="History" />
          <SidebarIcon icon={<Share2 size={20} />} label="Share" />
        </div>
      </aside>

      {/* Floating Player Card */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed bottom-24 right-6 lg:right-12 z-40"
      >
        <div className="glass-panel w-64 p-3 rounded-2xl flex items-center gap-4 border border-white/10 shadow-2xl overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxrBANYMrtxBcJvaBxOV9PQw0vhVCobOFV5PmaO2lqdEuDJ7FbV_2P5Vh52hkzuw8rlug46qlI-50fgbhmg-thccjZLRCsTrpVAyn7920ex2iU2Yx1mNVbeObZSTyN7sVnXFnyNBH3VUKu5mtmWPXeOEo_S15P4jEiTaDkD-B7UOzJX41WlAGL_gMd3uDRLcMCususrRV-psTOhRvaMW-lhsW4CM-5Ew2-_YJaJ_7bPm4qEY2RgXjq16ciFfs8DcGNDpwm_hH59ZI" 
              alt="Track Artwork" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="relative flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-white truncate">Neon Dreams</h4>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">AI Generation</p>
          </div>
          
          <div className="relative flex items-center">
            <Waves className="text-purple-400 animate-pulse" size={16} />
          </div>
        </div>
      </motion.div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full z-50 px-8 pb-4">
        <div className="max-w-md mx-auto h-20 rounded-t-3xl border-t border-white/10 bg-black/40 backdrop-blur-2xl flex justify-around items-center shadow-[0_-10px_40px_rgba(168,85,247,0.15)] px-8">
          <NavIcon icon={<Sparkles size={24} />} active />
          <NavIcon icon={<PlayCircle size={24} />} />
          <NavIcon icon={<Library size={24} />} />
        </div>
      </nav>
    </div>
  );
}

function NavIcon({ icon, active = false }: { icon: ReactNode; active?: boolean }) {
  return (
    <button className={`p-3 rounded-xl transition-all duration-300 active:scale-90 ${
      active 
        ? 'text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] scale-110' 
        : 'text-gray-500 hover:text-white'
    }`}>
      {icon}
    </button>
  );
}

function SidebarIcon({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <button className="flex flex-col items-center gap-1 group transition-all">
      <div className="text-gray-500 group-hover:text-purple-400 transition-colors duration-300">
        {icon}
      </div>
      <span className="text-[10px] text-gray-500 uppercase tracking-tighter font-semibold">
        {label}
      </span>
    </button>
  );
}
