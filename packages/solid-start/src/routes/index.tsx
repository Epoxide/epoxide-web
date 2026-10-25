import { HOME } from '@epoxide/web-constants'
import epoxideLogo from '@epoxide/web-assets/images/epoxide-logo-circle.svg'
import TitleLogo from '~/components/TitleLogo'

export default function Home() {
  return (
    <TitleLogo
      src={epoxideLogo}
      alt={HOME.LOGO.ALT}
      logoSize={HOME.LOGO.SIZE}
      title={HOME.TITLE}
    />
  )
}
