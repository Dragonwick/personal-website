import { motion } from 'framer-motion'
export default function LabSkills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold mb-8 text-gradient font-mono"
      >
        $ ls -la /home/lab/
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tools I'm Comfortable With */}
        <div className="bg-cyber-card border border-cyber-accent/30 rounded-lg p-6">
          <h3 className="text-cyber-accent font-mono text-lg mb-4">/* Comfortable With */</h3>
          <div className="space-y-3">
            {['gcc', 'python3', 'nmap', 'wireshark', 'tcpdump'].map(tool => (
              <div key={tool} className="flex items-center gap-3">
                <span className="text-green-400">$</span>
                <span className="font-mono text-cyber-neon">{tool}</span>
                <span className="text-gray-500 text-xs">// basic usage</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools I'm Exploring */}
        <div className="bg-cyber-card border border-cyber-accent/20 rounded-lg p-6">
          <h3 className="text-yellow-400 font-mono text-lg mb-4">/* Currently Exploring */</h3>
          <div className="space-y-3">
            {['gdb', 'pwntools', 'metasploit', 'pwndbg', 'ROPgadget'].map(tool => (
              <div key={tool} className="flex items-center gap-3">
                <span className="text-yellow-400">?</span>
                <span className="font-mono text-gray-300">{tool}</span>
                <span className="text-gray-600 text-xs">// learning...</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Experience */}
        <div className="bg-cyber-card border border-cyber-accent/20 rounded-lg p-6 md:col-span-2">
          <h3 className="text-cyber-neon font-mono text-lg mb-4">/* Project Experience */</h3>
          <div className="space-y-4">
            <div className="border-l-2 border-green-500 pl-4">
              <div className="text-green-400 font-mono text-xs mb-1">[COMPLETED]</div>
              <div className="text-sm text-gray-300">Buffer overflow lab - 8/8 systems compromised</div>
            </div>
            <div className="border-l-2 border-yellow-500 pl-4">
              <div className="text-yellow-400 font-mono text-xs mb-1">[IN PROGRESS]</div>
              <div className="text-sm text-gray-300">Wireless security analysis - 12 APs scanned</div>
            </div>
            <div className="border-l-2 border-cyber-accent pl-4">
              <div className="text-cyber-accent font-mono text-xs mb-1">[NEXT]</div>
              <div className="text-sm text-gray-300">ROP chain development & kernel exploits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}