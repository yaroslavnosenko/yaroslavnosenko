import Head from 'next/head'

import {
  Header,
  Footer,
  Hero,
  WorkExperience,
  Projects,
  Contacts,
} from 'components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yaroslav Nosenko | Software Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Hero />
      <WorkExperience />
      <Projects />
      <Contacts />
      <Footer />
    </>
  )
}
