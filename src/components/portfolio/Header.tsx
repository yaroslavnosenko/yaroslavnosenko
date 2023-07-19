export const Header = () => {
  return (
    <header className="py-16 border-b">
      <div className="container mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-2 items-end">
          <div>
            <h1 className="font-bold text-2xl">Yaroslav Nosenko</h1>
            <p className="opacity-60">Software Engineer</p>
          </div>
          <div className="md:text-right opacity-60">
            <span>Home</span> • <span>Projects</span> • <span>Resume</span> •{' '}
            <span>Contacts</span>
          </div>
        </div>
      </div>
    </header>
  )
}
