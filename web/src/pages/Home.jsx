import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <div className="profile-section">
          <motion.img
            src="/profile.jpeg"
            alt="Profile picture"
            className="profile-image"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
          <div className="profile-text">
            <h1>Hello, I am <span className="accent">Jose Cervantes Leal!</span></h1>
            <p className="lead">I am a computer scientist with a passsion for building and learning new things.</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="hero-cta" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5 }}
      >
        <Link to="/projects" className="btn primary">View Projects</Link>
        <Link to="/contact" className="btn">Contact Me</Link>
      </motion.div>
    </section>
  )
}

export default Home 