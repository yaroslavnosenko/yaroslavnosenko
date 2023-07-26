export const Header = () => {
  return (
    <header>
      <div className="container py-24">
        <div className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-12 gap-x-8">
          <div className="col-span-2 lg:col-span-4 xl:col-span-10">
            <h1 className="font-bold text-3xl">Yaro</h1>
            <p>Software Engineer</p>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/Resume-Yaroslav-Nosenko.pdf"
            className="text-right hover:underline"
          >
            Resume
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/yaroslav-nosenko/"
            className="hidden lg:block text-right hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  )
}
