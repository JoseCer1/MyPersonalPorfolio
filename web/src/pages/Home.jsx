import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="hero">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        Hi, I'm <span className="accent">Jose Cervantes Leal</span>
      </motion.h1>
      <motion.p className="lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        I build interactive web apps with React, TypeScript, and delightful UX.
      </motion.p>
      <motion.div className="hero-cta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
        <Link to="/projects" className="btn primary">View Projects</Link>
        <Link to="/contact" className="btn">Contact Me</Link>
      </motion.div>
    </section>
  )
}

export default Home 