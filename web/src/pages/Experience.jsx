import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

function Experience() {
  const experiences = [
    {
      id: 0,
      type: 'work',
      title: 'Co-Manager',
      company: 'Journeys',
      location: 'Mercedes, TX',
      period: 'August 2025 - Present',
      description: 'Oversee daily store operations, including staffing, interviews, inventory, and visual standards, while leading the team to meet sales goals and maintain excellent customer service.',
      skills: ['Team Management', 'Customer Service', 'Inventory Management', 'Visual Merchandising', 'Sales']
    },
    {
      id: 1,
      type: 'work',
      title: 'Student Data Analyst Assistant',
      company: 'Office of Field Experiences (UTRGV)',
      location: 'Brownsville, TX',
      period: 'June 2025 - August 2025',
      description: 'Managed and analyzed student data using Excel, SQL, and Power BI to create reports and visual dashboards, presenting insights on performance and program outcomes to supervisors.',
      skills: ['SQL', 'Microsoft Excel', 'Google Sheets', 'Data Entry', 'Data Analysis', 'Data Visualization',]
    },
    {
      id: 2,
      type: 'work',
      title: 'Data Analyst Intern',
      company: 'Office of Educator Preparation & Accountability (UTRGV)',
      location: 'Edinburg, TX',
      period: 'Sept. 2024 - June 2025',
      description: 'Developed reports and dashboards in Excel, SQL, and Power BI to track student performance and program metrics, providing data-driven insights that supported departmental decision-making.',
      skills: ['Microsoft Excel', 'Google Sheets', 'Data Entry', 'SQL']
    },
    {
        id: 3,
        type: 'work',
        title: 'Sales Leader',
        company: 'Journeys Kidz',
        location: 'Brownsville, TX',
        period: 'Sept. 2024 - Sept. 2025',
        description: 'Trained new hires on digital tools, systems, and sales strategies to boost operational efficiency and customer engagement, while leading the sales team to consistently exceed targets and maintain high customer satisfaction. I also managed inventory effectively and was recognized as **Sales Leader of the Month** in April 2024 and **Employee of the Month** in June 2024.',
        skills: ['Leadership', 'Team Management', 'Sales Training', 'Customer Service']
      },
    {
      id: 4,
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      company: 'University of Texas Rio Grande Valley',
      location: 'Brownsville, TX',
      period: '2021 - 2025',
      description: 'Focused on software engineering, algorithms, web development, and data.',
      skills: ['Data Structures', 'Algorithms', 'Web Development', 'Software Engineering']
    }
  ]

  return (
    <section>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }}
      >
        Experience
      </motion.h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className={`timeline-item ${exp.type}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="timeline-marker">
              {exp.type === 'work' ? <FiBriefcase /> : <FiCalendar />}
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{exp.title}</h3>
                <div className="timeline-meta">
                  <span className="company">{exp.company}</span>
                  <span className="location">
                    <FiMapPin size={14} />
                    {exp.location}
                  </span>
                  <span className="period">{exp.period}</span>
                </div>
              </div>
              <p className="timeline-description">{exp.description}</p>
              <div className="timeline-skills">
                {exp.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience 