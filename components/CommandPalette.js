import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function CommandPalette({ onClose }) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  const actions = [
    { name: "View Resume", shortcut: "↵", action: () => window.open('/SOLIS_AARON_RESUME.pdf', '_blank') },
    { name: "Email Me", shortcut: "M", action: () => window.location.href = 'mailto:aaron.matteosolis13@gmail.com' },
    { name: "Copy Email", shortcut: "E", action: () => navigator.clipboard.writeText('aaron.matteosolis13@gmail.com') },
    { name: "Call Phone", shortcut: "P", action: () => window.location.href = 'tel:+1-956-466-1821' },
    { name: "LinkedIn", shortcut: "L", action: () => window.open('https://linkedin.com/in/aaronssolis', '_blank') },
    { name: "GitHub", shortcut: "G", action: () => window.open('https://github.com/dragonwick', '_blank') },
    { name: "Scroll to Top", shortcut: "T", action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: "View Projects", shortcut: "J", action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
  ]
  
  const filtered = actions.filter(a => a.name.toLowerCase().includes(query.toLowerCase()))
  
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowDown') setSelectedIndex(i => (i + 1) % filtered.length)
      if (e.key === 'ArrowUp') setSelectedIndex(i => (i - 1 + filtered.length) % filtered.length)
      if (e.key === 'Enter') filtered[selectedIndex]?.action()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [filtered, selectedIndex])
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        className="w-full max-w-2xl bg-cyber-card rounded-lg border border-cyber-accent/40 shadow-2xl shadow-cyber-accent/20"
      >
        <div className="p-4 border-b border-cyber-accent/20">
          <input
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedIndex(0)
            }}
            placeholder="Type a command or search..."
            className="w-full bg-transparent outline-none text-white placeholder-gray-400 font-mono text-lg"
          />
        </div>
        <div className="max-h-96 overflow-y-auto">
          {filtered.map((action, i) => (
            <div
              key={action.name}
              onClick={action.action}
              className={`px-4 py-3 cursor-pointer font-mono flex justify-between items-center ${
                i === selectedIndex ? 'bg-cyber-accent text-cyber-dark' : 'hover:bg-cyber-dark'
              }`}
            >
              <span>{action.name}</span>
              <span className="text-xs opacity-50">{action.shortcut}</span>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-cyber-accent/20 text-xs text-gray-400 font-mono flex justify-between">
          <span>↑↓ Navigate</span>
          <span>↵ Select</span>
          <span>ESC Close</span>
        </div>
      </motion.div>
    </div>
  )
}