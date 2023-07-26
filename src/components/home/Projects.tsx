interface ScreenProps {
  src: string
}

interface DetailsProps {
  name: string
  desc: string
  github?: string
  web: string
}

const MobileScreen = ({ src }: ScreenProps) => {
  return (
    <div className="bg-white/50 backdrop:blur-xl p-1 drop-shadow-2xl lg:p-3 lg:rounded-[3rem]">
      <img className="lg:rounded-[2.25rem]" src={src} />
    </div>
  )
}

const DesktopScreen = ({ src }: ScreenProps) => {
  return (
    <div className="bg-white/50 backdrop:blur-xl drop-shadow-2xl p-1 lg:p-3 lg:rounded-[2rem]">
      <img className="lg:rounded-[1rem]" src={src} />
    </div>
  )
}

const Details = ({ name, desc, github, web }: DetailsProps) => {
  return (
    <div>
      <h2 className="font-bold text-2xl">{name}</h2>
      <p className="text-3xl lg:text-4xl tracking-tight my-8 !leading-snug">
        {desc}
      </p>
      <div className="grid grid-cols-3 gap-x-8">
        {github && (
          <a
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href={github}
          >
            Github
          </a>
        )}
        <a
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href={web}
        >
          Web
        </a>
      </div>
    </div>
  )
}

export const Projects = () => {
  return (
    <section>
      <div className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-12 gap-x-8 items-center gap-y-12 mb-36">
        <div className="col-span-full xl:col-span-8">
          <DesktopScreen src="/solidum.png" />
        </div>
        <div className="col-span-3">
          <Details
            name="Solidum"
            desc="NFT platform that transforms any file into token."
            github="https://github.com/solidumlabs/dapp"
            web="https://solidum.app/"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-12 gap-x-8 xl:items-center gap-y-12 mb-36">
        <div className="col-span-3">
          <Details
            name="Recode"
            desc="QR Code Menu web app for restaurants & bars."
            web="https://www.recode.menu/"
          />
        </div>
        <div className="col-span-3 hidden lg:block xl:hidden" />
        <div className="col-span-1 lg:col-span-2 xl:col-span-3">
          <MobileScreen src="/recode-1.png" />
        </div>
        <div className="col-span-1 lg:col-span-2 xl:col-span-3">
          <MobileScreen src="/recode-2.png" />
        </div>
        <div className="col-span-1 lg:col-span-2 xl:col-span-3">
          <MobileScreen src="/recode-3.png" />
        </div>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-12 gap-x-8 items-center gap-y-12 mb-36">
        <div className="col-span-full xl:col-span-8">
          <DesktopScreen src="/gregor.png" />
        </div>
        <div className="col-span-3">
          <Details
            name="Gregor"
            desc="Portfolio for fashion models with multi-boards support."
            github="https://github.com/yaroslavnosenko/gregor"
            web="https://gregor-nu.vercel.app/"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-12 gap-x-8 items-center gap-y-12 mb-36">
        <div className="col-span-3 xl:col-start-2">
          <Details
            name="Nailbar"
            desc="Landing page for a manicure and beauty studio."
            github="https://github.com/yaroslavnosenko/nailbarsk"
            web="https://www.nailbar.sk/"
          />
        </div>
        <div className="col-span-full xl:col-span-8">
          <DesktopScreen src="/nailbar.png" />
        </div>
      </div>
    </section>
  )
}
