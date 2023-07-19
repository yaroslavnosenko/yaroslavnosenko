import {
  Header,
  Footer,
  Summary,
  Experience,
  Skills,
  Education,
  Awards,
} from '../components/resume'

export const Resume = () => {
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
