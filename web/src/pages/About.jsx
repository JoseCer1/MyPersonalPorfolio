import { motion } from 'framer-motion'
import { FiFileText, FiDownload } from 'react-icons/fi'

function About() {
  const skills = ['JavaScript', 'Python', 'React', 'Node.js', 'CSS', 'HTML', 'REST APIs'];
  const dataAnalyticsSkills = ['SQL', 'Power BI', 'Excel', 'Python', 'Google Sheets'];
  return (
    <section>
      <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>About Me</motion.h2>
      <motion.p className="muted" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
      I’m a Computer Science student who loves solving problems through technology. My background includes software engineering, where I focus on building reliable, efficient, 
      and user-friendly applications, as well as data analytics, where I use SQL, Excel, and Power BI to create reports and uncover insights. I’ve also worked with databases, C#, 
      and Unity to develop interactive projects. I enjoy blending creativity with technical skills, whether it’s designing software, analyzing data, or collaborating on team projects to bring ideas to life.
      </motion.p>

      <div className="skills-container">
        <div className="skills-column">
          <h3>Programming Skills</h3>
          <div className="chip-row">
            {skills.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </div>
        
        <div className="skills-column">
          <h3>Data Analytics Skills</h3>
          <div className="chip-row">
            {dataAnalyticsSkills.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </div>
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