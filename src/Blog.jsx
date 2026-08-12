const posts = [
  {
    title: 'Getting started with project structure',
    description: 'Learn how this app separates pages, navigation, and shared styles.',
    date: 'Aug 2026',
  },
  {
    title: 'Interactive React state',
    description: 'A simple click counter shows how state updates can trigger view changes.',
    date: 'Aug 2026',
  },
  {
    title: 'Next steps for this app',
    description: 'Add routing, API data fetching, or tests to continue improving the project.',
    date: 'Aug 2026',
  },
]

const Blog = () => {
  return (
    <section className="page-card">
      <h2>Blog previews</h2>
      <p>These cards show how you can structure preview content for a blog or news section.</p>
      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post.title} className="blog-card">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <span>{post.date}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blog
