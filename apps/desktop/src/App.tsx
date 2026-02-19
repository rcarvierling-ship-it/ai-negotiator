import { useState, useEffect } from 'react'
import { Mic, Move, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function App() {
  const [isListening, setIsListening] = useState(false)
  const [powerScore, setPowerScore] = useState(50)

  useEffect(() => {
    // Mock power score fluctuation
    const interval = setInterval(() => {
      setPowerScore(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 10)))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const toggleListening = async () => {
    setIsListening(!isListening)
    // Here we would trigger audio capture
    if (!isListening) {
      // Example of calling main process
      // const sources = await window.ipcRenderer.invoke('get-sources')
      // console.log(sources)
    }
  }

  return (
    <div className="h-screen w-screen bg-black/80 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden flex flex-col text-white">
      {/* Drag Handle */}
      <div className="h-8 w-full bg-white/5 flex items-center justify-between px-3 cursor-move" style={{ WebkitAppRegion: 'drag' } as any}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="text-xs font-mono text-gray-400">AI Negotiator</div>
        </div>
        <button onClick={() => window.close()} className="text-gray-500 hover:text-white transition-colors" style={{ WebkitAppRegion: 'no-drag' } as any}>
          <X className="w-3 h-3" />
        </button>
      </div>

      <div className="flex-1 p-4 flex flex-col gap-4">
        {/* Power Score */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Power Score</span>
          <span className={cn("text-xl font-bold font-mono", powerScore > 50 ? "text-emerald-400" : "text-red-400")}>
            {Math.round(powerScore)}
          </span>
        </div>
        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className={cn("h-full transition-colors", powerScore > 50 ? "bg-emerald-500" : "bg-red-500")}
            animate={{ width: `${powerScore}%` }}
            transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
          />
        </div>

        {/* Live Feedback / Transcription Placeholder */}
        <div className="flex-1 bg-black/50 rounded-lg p-3 border border-white/5 font-mono text-xs text-gray-400 overflow-y-auto">
          {isListening ? (
            <div className="space-y-2">
              <p className="text-emerald-500/80">{">"} Listening to call audio...</p>
              <p className="">Detecting leverage shift...</p>
              <p className="text-yellow-500">{">"} Suggestion: Ask 'How does that affect the timeline?'</p>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-600">
              Press Start to Listen
            </div>
          )}
        </div>

        {/* Controls */}
        <button
          onClick={toggleListening}
          className={cn(
            "w-full py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2",
            isListening
              ? "bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/20"
              : "bg-emerald-500 text-black hover:bg-emerald-400"
          )}
        >
          <Mic className="w-4 h-4" />
          {isListening ? "Stop Analysis" : "Start Assistant"}
        </button>
      </div>
    </div>
  )
}

export default App