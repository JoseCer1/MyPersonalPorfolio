import { useState } from 'react'
import { FiMail, FiGithub, FiLinkedin, FiCheck } from 'react-icons/fi'

function Contact() {
  const email = 'pepe.cervantesleal@gmail.com'
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  return (
    <section>
      <h2>Contact</h2>
      <p className="muted">Feel free to reach out for collaboration, job opportunities, or just a friendly hello.</p>

      <div className="contact-list">
        <a className="btn" href={`mailto:${email}`}><FiMail /> <span>{email}</span></a>
        <a className="btn" href="https://github.com/JoseCer1" target="_blank" rel="noreferrer">
          <FiGithub /> <span>GitHub</span>
        </a>
        <a className="btn" href="https://www.linkedin.com/in/jose-cervantes-leal-682380292" target="_blank" rel="noreferrer">
          <FiLinkedin /> <span>LinkedIn</span>
        </a>
        <button className="btn" onClick={handleCopy}>
          {copied ? <FiCheck /> : <FiMail />} <span>{copied ? 'Copied!' : 'Copy email'}</span>
        </button>
      </div>
    </section>
  )
}

export default Contact 