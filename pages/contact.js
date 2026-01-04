import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6 text-gradient font-mono">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Feel free to reach out through any of these channels:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.a
              href="mailto:aaron.matteosolis13@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-cyber-card rounded-lg border border-cyber-accent/20 hover:border-cyber-accent/40"
            >
              <h3 className="text-2xl font-bold text-cyber-neon mb-2">Email</h3>
              <p className="text-cyber-accent font-mono">aaron.matteosolis13@gmail.com</p>
            </motion.a>

            <motion.a
              href="tel:+1-956-466-1821"
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-cyber-card rounded-lg border border-cyber-accent/20 hover:border-cyber-accent/40"
            >
              <h3 className="text-2xl font-bold text-cyber-neon mb-2">Phone</h3>
              <p className="text-cyber-accent font-mono">+1 (956) 466-1821</p>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/aaronssolis"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-cyber-card rounded-lg border border-cyber-accent/20 hover:border-cyber-accent/40"
            >
              <h3 className="text-2xl font-bold text-cyber-neon mb-2">LinkedIn</h3>
              <p className="text-cyber-accent font-mono">linkedin.com/in/aaronssolis</p>
            </motion.a>

            <motion.a
              href="https://github.com/dragonwick"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-cyber-card rounded-lg border border-cyber-accent/20 hover:border-cyber-accent/40"
            >
              <h3 className="text-2xl font-bold text-cyber-neon mb-2">GitHub</h3>
              <p className="text-cyber-accent font-mono">github.com/dragonwick</p>
            </motion.a>
          </div>

          <div className="mt-10 flex justify-center">
            <motion.a
              href="/"
              whileHover={{ scale: 1.04, y: -2 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-cyber-accent/40 text-cyber-accent font-mono text-sm hover:border-cyber-accent hover:bg-cyber-accent/10 transition-colors"
            >
              ← Back to Home
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
