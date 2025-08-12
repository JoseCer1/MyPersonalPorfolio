import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  const allTags = useMemo(() => {
    const set = new Set()
    projects.forEach((p) => p.tags?.forEach((t) => set.add(t)))
    return ['All', ...Array.from(set)]
  }, [])

  const [selectedTag, setSelectedTag] = useState('All')

  const visible = useMemo(() => {
    if (selectedTag === 'All') return projects
    return projects.filter((p) => p.tags?.includes(selectedTag))
  }, [selectedTag])

  return (
    <section>
      <div className="section-header">
        <h2>Projects</h2>
        <div className="chip-row">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={tag === selectedTag ? 'chip active' : 'chip'}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="grid"
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      >
        {visible.map((p) => (
          <motion.div key={p.id} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects 