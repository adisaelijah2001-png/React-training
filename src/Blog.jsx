const projects = [
  {
    title: 'Portfolio Landing Page',
    description:
      'A responsive portfolio front page built with React components, showcasing projects and contact details.',
    tech: 'React, CSS, Vite',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Todo App',
    description:
      'A small todo application demonstrating local state, controlled inputs, and persistence using localStorage.',
    tech: 'React, JavaScript',
    demo: '#',
    repo: '#',
  },
  {
    title: 'UI Component Kit',
    description:
      'Reusable, accessible UI components (buttons, cards, forms) built as practice for consistent design language.',
    tech: 'HTML, CSS, JS',
    demo: '#',
    repo: '#',
  },
]

const Blog = () => {
  return (
    <section className="page-card" id="projects">
      <h2>Selected projects</h2>
      <p>Below are a few examples of projects I’ve built while learning and practicing.</p>
      <div className="blog-grid">
        {projects.map((p) => (
          <article key={p.title} className="blog-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <a className="primary-btn" href={p.demo} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              <a className="nav-link" href={p.repo} target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </div>
            <div style={{ marginTop: 12 }}>
              <span>{p.tech}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blog
