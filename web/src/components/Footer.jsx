function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {year} My Portfolio</span>
        <span className="muted">Built with React and Vite</span>
      </div>
    </footer>
  )
}

export default Footer 