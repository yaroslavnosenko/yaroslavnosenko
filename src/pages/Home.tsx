import { Header, Hero } from '../components/portfolio'

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto px-6 py-16">
          <Hero />
          {/* <Summary />
          <Experience />
          <Skills />
          <Education />
          <Awards /> */}
        </div>
      </main>
      {/* <Footer /> */}
    </>
  )
}
