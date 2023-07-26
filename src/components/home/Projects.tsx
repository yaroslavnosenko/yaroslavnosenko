interface ScreenProps {
  src: string
}

const DesktopScreen = ({ src }: ScreenProps) => {
  return <div className="">Hello</div>
}

const MobileScreen = ({ src }: ScreenProps) => {
  return <div className="">Hello</div>
}

export const Projects = () => {
  return (
    <section>
      <DesktopScreen src="" />
      <MobileScreen src="" />
    </section>
  )
}
