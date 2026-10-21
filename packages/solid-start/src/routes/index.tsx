import { HOME } from '@epoxide/web-constants'
import TitleLogo from '~/components/TitleLogo'

export default function Home() {
  return (
    <TitleLogo
      src="/images/epoxide-logo-circle.svg"
      alt={HOME.LOGO.ALT}
      logoSize={HOME.LOGO.SIZE}
      title={HOME.TITLE}
    />
  )
}
