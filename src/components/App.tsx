import {
  Header,
  Footer,
  Summary,
  Experience,
  Skills,
  Education,
  Awards,
} from '.'

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto px-6 py-16">
          <Summary />
          <Experience />
          <Skills />
          <Education />
          <Awards />
        </div>
      </main>
      <Footer />
    </>
  )
}
