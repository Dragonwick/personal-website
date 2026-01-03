import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaTerminal, FaDownload, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'
import CommandPalette from '../components/CommandPalette'
import SkillRadar from '../components/SkillRadar'

export default function Home() {
  const [showCommand, setShowCommand] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setShowCommand(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hidden trigger for command palette (hover top-left corner) */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 z-50 cursor-help"
        onMouseEnter={() => setShowCommand(true)}
        title="Press Cmd/Ctrl + K to open command palette"
      />
      
     <AnimatePresence>
        {showCommand && <CommandPalette onClose={() => setShowCommand(false)} />}
      </AnimatePresence>

      {/* Hero Section */}
      <Hero scrollY={scrollY} />
      
      {/* About */}
      <About />
      
      {/* Skills */}
      <Skills />
      
      {/* Projects */}
      <Projects />
      
      {/* Experience */}
      <Experience />
      
      {/* CTA Section */}
      <CTA />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Elements */}
      <FloatingResumeButton />
    </div>
  )
}

const Hero = ({ scrollY }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 212, 255, ${0.2 + scrollY * 0.0001}) 2px, transparent 0)`,
          backgroundSize: '3rem 3rem',
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-5xl px-4"
      >
        <div className="mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block p-4 rounded-full bg-cyber-card border border-cyber-accent/30 mb-6"
          >
            <FaTerminal className="text-4xl text-cyber-accent" />
          </motion.div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold font-mono mb-4">
          <span className="text-gradient terminal-cursor">{`{Aaron Solis}`}</span>
        </h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-cyber-accent mb-4 font-mono"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Computer Science Student & Cybersecurity Enthusiast
        </motion.p>
        
        <p className="text-lg text-gray-400 mb-2">
          University of Texas at San Antonio
        </p>
        <p className="text-cyber-neon font-semibold mb-8">
          Computer Science • Cybersecurity Minor • GPA: 3.97/4.0
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-cyber-accent text-cyber-dark font-bold rounded-lg card-hover glow"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <FaEnvelope /> Get In Touch
            </span>
          </motion.a>
          
          <motion.a
            href="/SOLIS_AARON_RESUME.pdf"
            download
            className="px-8 py-3 border-2 border-cyber-accent text-cyber-accent font-bold rounded-lg card-hover"
            whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(0, 212, 255, 0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <FaDownload /> Download Resume
            </span>
          </motion.a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-cyber-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold mb-8 text-gradient font-mono"
      >
        $ whoami
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="space-y-6 text-gray-300 leading-relaxed text-lg"
      >
        <p>
          I am a <span className="text-cyber-accent font-semibold">Computer Science student</span> at the <span className="text-cyber-accent font-semibold">University of Texas at San Antonio</span> with a strong interest in building, understanding, and securing real systems. My technical foundation is rooted in <span className="text-cyber-neon font-semibold">low-level systems</span>, <span className="text-cyber-neon font-semibold">Linux/UNIX environments</span>, <span className="text-cyber-neon font-semibold">C programming</span>, <span className="text-cyber-neon font-semibold">networking</span>, and <span className="text-cyber-neon font-semibold">security engineering</span>.
        </p>
        
        <p>
          What draws me to this field is working close to real system behavior. I enjoy <span className="text-cyber-neon font-semibold">building systems</span>, <span className="text-cyber-neon font-semibold">inspecting failures</span>, and understanding how software, operating systems, and networks interact in practice.
        </p>

        <p>
          I am a rising graduate and early in my professional career, but highly motivated to learn through hands-on experience. I value environments that encourage <span className="text-cyber-accent font-semibold">curiosity</span>, <span className="text-cyber-accent font-semibold">mentorship</span>, and <span className="text-cyber-accent font-semibold">deep technical thinking</span>, where I can grow professionally while taking on meaningful challenges.
        </p>
        
        <div className="bg-cyber-card p-6 rounded-lg border border-cyber-accent/20 mt-8">
          <p className="text-cyber-accent font-mono text-sm mb-2">$ cat career_objective.txt</p>
          <p className="text-gray-300 italic">
            "Seeking cybersecurity roles that value curiosity, mentorship, and deep technical thinking. Ready to tackle meaningful challenges in penetration testing, security research, and systems security."
          </p>
        </div>
      </motion.div>
    </section>
  )
}

const Skills = () => {
  const skillCategories = {
    "Languages": ["C", "Python", "BASH", "Java", "C#"],
    "Security Tools": ["Metasploit", "Wireshark", "Nmap", "Aircrack-ng", "John the Ripper", "Snort", "Suricata"],
    "Frameworks": ["ATT&CK", "NIST", "CVSS", "MITRE"],
    "Systems": ["Linux/Unix", "x86/x64", "ARM", "IoT", "Embedded Systems"]
  }
  
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold mb-8 text-gradient font-mono"
      >
        $ ls -la skills/
      </motion.h2>
      
      <SkillRadar />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {Object.entries(skillCategories).map(([category, skills], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-cyber-card p-6 rounded-lg border border-cyber-accent/20"
          >
            <h3 className="text-xl font-bold text-cyber-neon mb-4 font-mono">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-cyber-dark rounded text-sm font-mono text-cyber-accent border border-cyber-accent/30 hover:bg-cyber-accent hover:text-cyber-dark transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

const Projects = () => {
  const projects = [
    {
      title: "System Exploitation Framework",
      category: "Binary Exploitation",
      score: "8/8 Systems Compromised",
      description: "Advanced exploitation of x86/x64 Linux systems using memory corruption vulnerabilities",
      details: [
        "Compromised 8 systems using buffer overflows, format strings, and ROP chaining",
        "Bypassed ASLR, NX, and stack canaries with custom exploit development",
        "Implemented persistence via backdoors and rootkit techniques",
        "Developed automation scripts for scalable exploitation"
      ],
      tools: ["C", "Python", "GDB", "Pwntools", "ROPgadget", "IDA Pro"],
      impact: "100% exploitation success rate",
      difficulty: "Expert"
    },
    {
      title: "WEP/WPA2 Insecurity Analysis",
      category: "Wireless Security",
      score: "12 APs Analyzed",
      description: "Comprehensive analysis of 802.11 encryption weaknesses through active attacks",
      details: [
        "Analyzed 12 WEP/WPA access points using Kismet reconnaissance",
        "Modified Aircrack-ng source code for hidden SSID extraction",
        "Executed ChopChop, ARP replay, and fake authentication attacks",
        "Achieved 75% WEP, 40% WPA cracking success using GPU acceleration"
      ],
      tools: ["Aircrack-ng", "Kismet", "Hashcat", "Wireshark", "Reaver"],
      impact: "Exposed critical wireless infrastructure risks",
      difficulty: "Advanced"
    },
    {
      title: "Nonprofit Security Audit",
      category: "Security Consulting",
      score: "NIST IR 7621",
      description: "Enterprise-grade cybersecurity audit following federal guidelines",
      details: [
        "Conducted comprehensive audit against NIST IR 7621 framework",
        "Identified 23 critical vulnerabilities with CVSS scoring",
        "Developed custom compliance checklist and remediation roadmap",
        "Presented findings to leadership, improving security posture by 60%"
      ],
      tools: ["NIST Framework", "Splunk", "Nessus", "OpenVAS", "Metasploit"],
      impact: "60% security improvement in 90 days",
      difficulty: "Professional"
    }
  ]
  
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold mb-8 text-gradient font-mono"
      >
        $ ./show_projects.sh
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-cyber-card rounded-lg border border-cyber-accent/30 overflow-hidden card-hover h-full flex flex-col"
    >
      {/* Terminal Header */}
      <div className="bg-cyber-dark px-4 py-3 border-b border-cyber-accent/20 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="ml-auto text-cyber-accent font-mono text-xs">{project.category}</span>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-cyber-neon mb-2">{project.title}</h3>
        <p className="text-cyber-accent font-mono text-sm mb-4">{project.score}</p>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="space-y-3 flex-1">
          <div>
            <p className="text-cyber-accent font-mono text-xs mb-2">$ cat details.md</p>
            <ul className="space-y-1">
              {project.details.map((detail, i) => (
                <li key={i} className="text-gray-400 text-sm pl-4 relative before:absolute before:left-0 before:text-cyber-purple before:content-['▸']">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <p className="text-cyber-accent font-mono text-xs mb-2">$ cat tools.txt</p>
            <div className="flex flex-wrap gap-1">
              {project.tools.map(tool => (
                <span key={tool} className="px-2 py-1 bg-cyber-dark rounded text-xs font-mono text-cyber-accent border border-cyber-accent/20">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-cyber-accent/20">
          <div className="flex justify-between items-center">
            <span className="text-cyber-neon font-bold text-sm">{project.impact}</span>
            <span className={`text-xs px-2 py-1 rounded ${
              project.difficulty === 'Expert' ? 'bg-red-500/20 text-red-400' :
              project.difficulty === 'Advanced' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-green-500/20 text-green-400'
            }`}>
              {project.difficulty}
            </span>
          </div>
        </div>
        
        <motion.a
          href="https://github.com/dragonwick"
          target="_blank"
          className="mt-4 w-full text-center px-4 py-2 bg-cyber-accent text-cyber-dark font-bold rounded font-mono text-sm card-hover"
          whileHover={{ scale: 1.02 }}
        >
          <FaGithub className="inline mr-2" />
          View Repository →
        </motion.a>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const experiences = [
    {
      company: "Randolph Brooks Federal Credit Union",
      role: "Fraud Analyst Intern",
      period: "May 2025 - August 2025",
      location: "San Antonio, TX",
      achievements: [
        "Mapped 37 high-dollar fraud cases into enterprise risk assessments, improving threat visibility",
        "Performed root cause analysis aligning with ERM and NCUA standards",
        "Investigated Verafin/Actimize alerts, validating anomalies through pattern analysis"
      ]
    },
    {
      company: "UTSA Doe Medal Research Lab",
      role: "Research Assistant",
      period: "August 2024 - May 2025",
      location: "San Antonio, TX",
      achievements: [
        "Implemented predictive maintenance algorithms for IoT robotics using machine learning",
        "Collaborated on AI/ML solutions for embedded systems integration",
        "Developed research papers and technical documentation"
      ]
    }
  ]
  
  return (
    <section id="experience" className="py-20 px-4 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold mb-12 text-gradient font-mono"
      >
        $ cat experience.log
      </motion.h2>
      
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="relative pl-8 border-l-2 border-cyber-accent/30"
          >
            <div className="absolute -left-3 top-0 w-5 h-5 bg-cyber-accent rounded-full border-4 border-cyber-dark"></div>
            <h3 className="text-2 font-bold text-cyber-neon">{exp.company}</h3>
            <p className="text-cyber-accent font-mono text-lg">{exp.role}</p>
            <p className="text-gray-400 text-sm mb-4">{exp.period} • {exp.location}</p>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-300 pl-4 relative before:absolute before:left-0 before:text-cyber-purple before:content-['▸']">
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

const CTA = () => {
  return (
    <section className="-20 px-4 bg-gradient-to-r from-cyber-accent/10 to-cyber-neon/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-6 text-gradient font-mono"
        >
          $ ./contact.sh
        </motion.h2>
        <p className="text-xl text-gray-300 mb-8">
          Interested in discussing security research, penetration testing, or systems engineering opportunities?
        </p>
        <motion.a
          href="#contact"
          className="inline-block px-8 py-4 bg-cyber-accent text-cyber-dark font-bold rounded-lg text-xl card-hover glow"
          whileHover={{ scale: 1.05, y: -2 }}
        >
          Let's Connect →
        </motion.a>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-cyber-accent/20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-400 font-mono">
          © 2025 Aaron Solis. Built with Next.js, Tailwind CSS, and me ofc.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/dragonwick" target="_blank" className="text-cyber-accent hover:text-cyber-neon transition-colors">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://linkedin.com/in/aaronssolis" target="_blank" className="text-cyber-accent hover:text-cyber-neon transition-colors">
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  )
}

const FloatingResumeButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-40"
    >
      <motion.a
        href="/SOLIS_AARON_RESUME.pdf"
        download
        className="px-4 py-2 bg-cyber-accent text-cyber-dark font-bold rounded-full shadow-lg shadow-cyber-accent/30 hover:shadow-cyber-accent/50 transition-all flex items-center gap-2"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaDownload />
        Resume
      </motion.a>
    </motion.div>
  )
}