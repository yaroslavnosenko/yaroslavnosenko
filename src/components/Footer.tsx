export const Footer = () => {
  return (
    <footer className="py-16 border-t">
      <div className="container mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-2 items-end">
          <div>
            <h1 className="font-bold text-2xl">Yaroslav Nosenko</h1>
            <p className="opacity-60">Software Engineer</p>
          </div>
          <div className="md:text-right opacity-60">
            <span>New York, NY</span> •{' '}
            <a href="tel:+19296629272">+1 (929) 662-9272</a> •{' '}
            <a href="mailto:yaroslav.nosenko.mail@gmail.com">
              yaroslav.nosenko.mail@gmail.com
            </a>{' '}
            •{' '}
            <a href="https://linkedin.com/in/yaroslav-nosenko">
              linkedin.com/in/yaroslav-nosenko
            </a>{' '}
            •{' '}
            <a href="https://github.com/yaroslavnosenko">
              github.com/yaroslavnosenko
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
