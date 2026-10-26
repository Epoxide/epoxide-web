import { HOME } from '@epoxide/web-constants'
import epoxideLogo from '@epoxide/web-assets/images/epoxide-logo-circle.svg'
import TitleLogo from '~/components/TitleLogo'
import './index.scss'

export default function Home() {
  return (
    <>
      <TitleLogo
        src={epoxideLogo}
        alt={HOME.LOGO.ALT}
        logoSize={HOME.LOGO.SIZE}
        title={HOME.TITLE}
      />
      <section class="links">
        <a href={HOME.LINKS.R2AT.URL} target="_blank">
          {HOME.LINKS.R2AT.TEXT}
        </a>
      </section>
    </>
  )
}
