import {
  BiLogoInstagramAlt,
  BiLogoTelegram,
  BiLogoLinkedin,
  BiLogoGithub,
} from 'react-icons/bi'

export const Hero = () => {
  return (
    <section className="mb-36 grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-12 gap-x-8">
      <div className="col-span-12 lg:col-span-4 xl:col-span-10 xl:col-start-2">
        <h2 className="text-3xl lg:text-4xl tracking-tight !leading-snug">
          Explore my portfolio to witness how my blend of strategic thinking,
          leadership, and problem-solving skills brings about innovative
          business solutions. Let's shape the future together!
        </h2>
        <div className="flex gap-8 mt-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/yaroslavnosenko"
          >
            <BiLogoGithub className="w-12 h-12" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/yaroslavnosenko"
          >
            <BiLogoTelegram className="w-12 h-12" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/yaroslav-nosenko/"
          >
            <BiLogoLinkedin className="w-12 h-12" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/yaroslav.nosenko/"
          >
            <BiLogoInstagramAlt className="w-12 h-12" />
          </a>
        </div>
      </div>
    </section>
  )
}
