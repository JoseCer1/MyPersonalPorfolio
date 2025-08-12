import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

function ProjectCard({ project }) {
  return (
    <motion.article
      className="card project-card"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {project.image && (
        <img src={project.image} alt="Project cover" className="project-image" />
      )}
      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="muted">{project.description}</p>
        {project.tags?.length ? (
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        ) : null}
        <div className="project-actions">
          {project.links?.demo && (
            <a className="btn" href={project.links.demo} target="_blank" rel="noreferrer">
              <FiExternalLink /> <span>Live</span>
            </a>
          )}
          {project.links?.source && (
            <a className="btn" href={project.links.source} target="_blank" rel="noreferrer">
              <FiGithub /> <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard 