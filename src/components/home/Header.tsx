import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <div className="container py-24">
        <div className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-12 gap-x-8 items-center">
          <div className="col-span-2 lg:col-span-4 xl:col-span-10">
            <h1 className="font-bold text-2xl">Yaroslav Nosenko</h1>
            <p>Software Engineer</p>
          </div>
          <Link to="/" className="text-right">
            Resume
          </Link>
          <Link to="/" className="hidden lg:block text-right">
            Contacts
          </Link>
        </div>
      </div>
    </header>
  )
}
