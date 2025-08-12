import { motion } from 'framer-motion'
import { FiFileText, FiDownload } from 'react-icons/fi'

function About() {
  const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'CSS', 'Framer Motion', 'Vite', 'REST APIs']
  return (
    <section>
      <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>About Me</motion.h2>
      <motion.p className="muted" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
        I'm a frontend-focused developer who enjoys crafting interactive, accessible interfaces.
        I lean on strong fundamentals and iterate quickly to deliver polished experiences.
      </motion.p>

      <h3>Skills</h3>
      <div className="chip-row">
        {skills.map((s) => (
          <span key={s} className="chip">{s}</span>
        ))}
      </div>

      <h3>Resume</h3>
      <div className="chip-row">
        <a className="btn primary" href="/resume.pdf" target="_blank" rel="noreferrer">
          <FiFileText /> <span>View Resume (PDF)</span>
        </a>
        <a className="btn" href="/resume.pdf" download="Jose-Cervantes-Leal-Resume.pdf">
          <FiDownload /> <span>Download PDF</span>
        </a>
      </div>
    </section>
  )
}

export default About 