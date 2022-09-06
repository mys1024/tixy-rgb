import Logo from '~/component/Logo'
import Intro from '~/component/Intro'

export default () => {
  return (
    <div
      space-y-12
      flex flex-col
      items-center
    >
      <Logo />
      <Intro />
    </div>
  )
}
