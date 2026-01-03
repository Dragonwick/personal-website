import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const SkillRadar = () => {
  const [activeSkill, setActiveSkill] = useState(null)

  const skills = [
    { name: 'Binary Exploitation', value: 88, max: 100 },
    { name: 'Network Security', value: 85, max: 100 },
    { name: 'Python', value: 95, max: 100 },
    { name: 'C Programming', value: 90, max: 100 },
    { name: 'Penetration Testing', value: 82, max: 100 },
    { name: 'Reverse Engineering', value: 78, max: 100 },
    { name: 'Linux/Unix', value: 92, max: 100 },
    { name: 'Cryptography', value: 75, max: 100 },
  ]

  const radius = 80
  const centerX = 100
  const centerY = 100

  const points = skills.map((skill, i) => {
    const angle = (i * 2 * Math.PI) / skills.length - Math.PI / 2
    const value = skill.value / 100
    const x = centerX + Math.cos(angle) * radius * value
    const y = centerY + Math.sin(angle) * radius * value
    return `${x},${y}`
  }).join(' ')

  const gridCircles = [0.25, 0.5, 0.75, 1]

  return (
    <div className="bg-cyber-card p-8 rounded-lg border border-cyber-accent/20">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-cyber-neon mb-4 font-mono">
            $ python3 skill_radar.py
          </h3>
          <svg viewBox="0 0 200 200" className="w-full max-w-md mx-auto">
            {gridCircles.map((level, i) => (
              <circle
                key={i}
                cx={centerX}
                cy={centerY}
                r={radius * level}
                fill="none"
                stroke="rgba(130, 130, 130, 0.3)"
                strokeWidth="0.5"
              />
            ))}
            {skills.map((skill, i) => {
              const angle = (i * 2 * Math.PI) / skills.length - Math.PI / 2
              const x = centerX + Math.cos(angle) * radius
              const y = centerY + Math.sin(angle) * radius
              return (
                <line
                  key={`axis-${i}`}
                  x1={centerX}
                  y1={centerY}
                  x2={x}
                  y2={y}
                  stroke="rgba(0, 212, 255, 0.3)"
                  strokeWidth="0.5"
                />
              )
            })}
            <polygon
              points={points}
              fill="rgba(0, 212, 255, 0.2)"
              stroke="#00d4ff"
              strokeWidth="2"
            />
            {skills.map((skill, i) => {
              const angle = (i * 2 * Math.PI) / skills.length - Math.PI / 2
              const value = skill.value / 100
              const x = centerX + Math.cos(angle) * radius * value
              const y = centerY + Math.sin(angle) * radius * value
              return (
                <circle
                  key={`point-${i}`}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="#00ff88"
                  onMouseEnter={() => setActiveSkill(i)}
                  onMouseLeave={() => setActiveSkill(null)}
                  style={{ cursor: 'pointer' }}
                />
              )
            })}
            {skills.map((skill, i) => {
              const angle = (i * 2 * Math.PI) / skills.length - Math.PI / 2
              const labelRadius = radius + 15
              const x = centerX + Math.cos(angle) * labelRadius
              const y = centerY + Math.sin(angle) * labelRadius
              return (
                <text
                  key={`label-${i}`}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-cyber-accent text-[8px] font-mono"
                >
                  {skill.name}
                </text>
              )
            })}
          </svg>
        </div>

        <div className="flex-1 space-y-2">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="flex justify-between items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <span className="text-gray-300 font-mono text-sm">{skill.name}</span>
              <div className="flex items-center gap-2">
                <div className="w-24 bg-gray-800 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.value}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="h-full bg-gradient-to-r from-cyber-accent to-cyber-neon rounded-full"
                  />
                </div>
                <span className="text-cyber-accent font-mono text-xs w-8 text-right">
                  {skill.value}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillRadar
