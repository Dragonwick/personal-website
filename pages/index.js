import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaTerminal, FaDownload, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'
import CommandPalette from '../components/CommandPalette'


export default function Home() {
  const [showCommand, setShowCommand] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('up')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
      }
      
      setScrollY(currentScrollY)
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

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
      <AnimatePresence>
        {showCommand && <CommandPalette onClose={() => setShowCommand(false)} />}
      </AnimatePresence>

      {/* Hero Section */}
      <Hero scrollY={scrollY} />
      
      {/* About */}
      <About />
      
      {/* Skills */}
      
      
      {/* Projects */}
      <Projects />
      
      {/* Experience */}
      <Experience />
      
      {/* CTA Section */}
      <CTA />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Elements */}
      <FloatingResumeButton scrollDirection={scrollDirection} />
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
          <span className="text-gradient">{`{Aaron Solis}`}</span>
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
        
        <div className="flex flex-col items-center gap-6 mb-16">
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="/contact"
              className="px-7 py-3 min-w-[190px] flex items-center justify-center gap-2 bg-cyber-accent text-cyber-dark font-bold rounded-lg card-hover glow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope /> Get In Touch
            </motion.a>
            
            <motion.a
              href="/SOLIS_AARON_RESUME.pdf"
              download
              className="px-7 py-3 min-w-[190px] flex items-center justify-center gap-2 border-2 border-cyber-accent text-cyber-accent font-bold rounded-lg card-hover"
              whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(0, 212, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download Resume
            </motion.a>
          </div>

          <div className="flex flex-col items-center gap-3 mt-3 text-cyber-accent animate-bounce">
            <span className="text-sm font-mono opacity-75">Scroll</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
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
          I am a <span className="text-cyber-accent font-semibold">Computer Science student</span> with a strong interest in understanding how real systems work. My background centers on <span className="text-cyber-neon font-semibold">programming</span>, <span className="text-cyber-neon font-semibold">operating systems</span>, <span className="text-cyber-neon font-semibold">networking</span>, and <span className="text-cyber-neon font-semibold">security</span>, with hands-on experience in <span className="text-cyber-neon font-semibold">Linux environments</span> and <span className="text-cyber-neon font-semibold">low-level development</span>.
        </p>
        
        <p>
          I am drawn to work that sits close to system behavior. I enjoy <span className="text-cyber-neon font-semibold">building software</span>, <span className="text-cyber-neon font-semibold">investigating failures</span>, and reasoning about how programs interact with memory, operating systems, and networks under real conditions.
        </p>

        <p>
          As an early-career engineer, I value environments that encourage <span className="text-cyber-accent font-semibold">curiosity</span>, <span className="text-cyber-accent font-semibold">mentorship</span>, and <span className="text-cyber-accent font-semibold">rigorous technical thinking</span>. I am seeking opportunities where I can continue developing strong fundamentals while contributing to meaningful and technically challenging problems.
        </p>
      </motion.div>
    </section>
  )
}

const Skills = () => {
  const languageDetails = [
    { name: "C", detail: "Systems programming, memory management, exploitation labs" },
    { name: "Python", detail: "Scripting, automation, data processing" },
    { name: "Java", detail: "Coursework, object-oriented design" },
    { name: "Bash", detail: "Linux automation and tooling" },
    { name: "C#", detail: "Basic application development" }
  ]

  const securityToolDetails = [
    { name: "Wireshark / tcpdump", detail: "Packet and protocol analysis" },
    { name: "Metasploit", detail: "Exploit framework usage" },
    { name: "Nmap", detail: "Network scanning and enumeration" },
    { name: "John the Ripper", detail: "Password cracking labs" },
    { name: "Aircrack-ng", detail: "Wireless security analysis" },
    { name: "Snort / Suricata", detail: "IDS exposure" }
  ]

  const skillCategories = {
    "Operating Systems": ["Linux (Kali, Ubuntu, Debian)", "Windows"],
    "Systems & Architecture": ["Linux internals", "Process memory & stack behavior", "x86/x64 architecture", "GDB debugging"],
    "Networking": ["TCP/IP", "DNS", "BGP basics", "Packet analysis (Wireshark, tcpdump)", "iperf3"]
  }

  const [openLanguage, setOpenLanguage] = useState(null)
  const [openTool, setOpenTool] = useState(null)
  
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold mb-8 text-gradient font-mono"
      >
        $ ls -la skills/
      </motion.h2>
      
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-cyber-card p-6 rounded-lg border border-cyber-accent/20"
        >
          <h3 className="text-xl font-bold text-cyber-neon mb-4 font-mono">Languages</h3>
          <div className="space-y-2">
            {languageDetails.map((lang, idx) => {
              const isOpen = openLanguage === idx
              return (
                <div key={lang.name} className="border border-cyber-accent/20 rounded-lg overflow-hidden bg-cyber-dark/60">
                  <button
                    className="w-full px-4 py-3 flex items-center justify-between text-left text-sm font-mono text-cyber-accent hover:bg-cyber-accent/10 transition-colors"
                    onClick={() => setOpenLanguage(isOpen ? null : idx)}
                  >
                    <span className="font-semibold text-white">{lang.name}</span>
                    <span className={`text-xs transition-transform ${isOpen ? 'rotate-90' : ''}`}>▸</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 pb-3 text-sm text-gray-300"
                      >
                        {lang.detail}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-cyber-card p-6 rounded-lg border border-cyber-accent/20"
        >
          <h3 className="text-xl font-bold text-cyber-neon mb-4 font-mono">Security Tools</h3>
          <div className="space-y-2">
            {securityToolDetails.map((tool, idx) => {
              const isOpen = openTool === idx
              return (
                <div key={tool.name} className="border border-cyber-accent/20 rounded-lg overflow-hidden bg-cyber-dark/60">
                  <button
                    className="w-full px-4 py-3 flex items-center justify-between text-left text-sm font-mono text-cyber-accent hover:bg-cyber-accent/10 transition-colors"
                    onClick={() => setOpenTool(isOpen ? null : idx)}
                  >
                    <span className="font-semibold text-white">{tool.name}</span>
                    <span className={`text-xs transition-transform ${isOpen ? 'rotate-90' : ''}`}>▸</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 pb-3 text-sm text-gray-300"
                      >
                        {tool.detail}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </motion.div>

        {Object.entries(skillCategories).map(([category, skills], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (i + 2) * 0.1 }}
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
      title: "System Exploitation",
      category: "Systems Security",
      score: "8/8 Systems Compromised",
      description: "Exploitation of x86/x64 Linux systems using memory corruption vulnerabilities",
      details: [
        "Compromised 8 systems using buffer overflows, format strings, and ROP chaining",
        "Bypassed ASLR, NX, and stack canaries with custom exploit development",
        "Implemented persistence via backdoors and rootkit techniques",
        "Developed automation scripts for scalable exploitation"
      ],
      tools: ["C", "Python", "GDB", "Bash", "xxd", "IDA Pro"],
      impact: "Low-level system vulnerabilities and behavior.",
      note: "Custom shellcode and exploitation scripts developed for this project are available for discussion upon request.",
      disclaimer: "Conducted in a controlled academic lab environment."
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
      tools: ["Aircrack-ng", "Kismet", "Wireshark", "Hashcat", "Nmap"],
      impact: "Network protocol behavior and trust assumptions.",
      hideButton: true
    },
    {
      title: "Nonprofit Security Audit",
      category: "Security Consulting",
      score: "NIST IR 7621",
      description: "Enterprise-grade cybersecurity audit following federal guidelines",
      details: [
        "Performed a comprehensive cybersecurity audit aligned with NIST IR 7621 guidelines",
        "Evaluated organizational security controls, policies, and technical safeguards",
        "Identified high-risk security gaps and control deficiencies using industry-standard risk assessment methods",
        "Developed a tailored compliance checklist and prioritized remediation roadmap",
        "Presented executive-level findings and mitigation strategies to organizational leadership"
      ],
      tools: ["NIST Cybersecurity Framework", "NIST SP 800-30", "NIST SP 800-53", "MITRE ATT&CK"],
      impact: "Security governance and organizational risk awareness",
      note: "Project conducted under a non-disclosure agreement."
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
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const hasFooter = !!project.note || !project.hideButton
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-cyber-card rounded-lg border border-cyber-accent/30 overflow-hidden card-hover flex flex-col"
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
        
        <div className={`space-y-3 ${hasFooter ? "flex-1" : ""}`}>
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
          <span className="text-cyber-neon font-bold text-sm block">{project.impact}</span>
        </div>
        
        {project.note ? (
          <div className="mt-4 p-3 bg-cyber-dark rounded border border-cyber-accent/30 text-cyber-accent text-sm font-mono italic">
            {project.note}
            {project.disclaimer && (
              <p className="mt-2 text-xs opacity-60 not-italic text-gray-400">
                {project.disclaimer}
              </p>
            )}
          </div>
        ) : !project.hideButton ? (
          <motion.a
            href="https://github.com/dragonwick"
            target="_blank"
            className="mt-4 w-full text-center px-4 py-2 bg-cyber-accent text-cyber-dark font-bold rounded font-mono text-sm card-hover"
            whileHover={{ scale: 1.02 }}
          >
            <FaGithub className="inline mr-2" />
            View Repository →
          </motion.a>
        ) : null}
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
          Always curious about how systems actually work!
        </p>
        <motion.a
          href="/contact"
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
          © 2025 Aaron Solis. Built with Next.js, Tailwind CSS.
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

const FloatingResumeButton = ({ scrollDirection }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: scrollDirection === 'down' ? 0 : 1, 
        y: scrollDirection === 'down' ? 100 : 0 
      }}
      transition={{ duration: 0.3, type: "spring" }}
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