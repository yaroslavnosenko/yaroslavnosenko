import { Header, Hero, Projects } from '../components/home'

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Hero />
          <Projects />
        </div>
      </main>
      {/* <Footer /> */}
    </>
  )
}
