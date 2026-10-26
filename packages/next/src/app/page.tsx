import Link from 'next/link'
import styles from './page.module.scss'
import { HOME } from '@epoxide/web-constants'
import { TitleLogo } from '@/components/TitleLogo'
import epoxideLogo from '../../public/images/epoxide-logo-circle.svg'

export default function Home() {
  return (
    <>
      <TitleLogo
        src={epoxideLogo}
        alt={HOME.LOGO.ALT}
        logoSize={HOME.LOGO.SIZE}
        title={HOME.TITLE}
      />
      <section className={styles.links}>
        <Link href={HOME.LINKS.R2AT.URL} target="_blank">
          {HOME.LINKS.R2AT.TEXT}
        </Link>
      </section>
    </>
  )
}
