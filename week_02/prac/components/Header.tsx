import styles from '../styles/components/Header.module.sass'
import Link from 'next/link'

type HeaderProps = {
  active: string
}

export default function Header(props: HeaderProps) {
  return (
    <>
      <div id={styles.siteinfo}>
        This site is created as an example site, and the only pages that exist are the index and about.
      </div>
      <header id={styles.header}>
        <nav>
          <Link href="/">
            <a className={props.active === 'index' ? styles.active : ''}>
              Home
            </a>
          </Link>
          <Link href="/">
            <a className={props.active === 'tutorials' ? styles.active : ''}>
              Tutorials
            </a>
          </Link>
          <Link href="/">
            <a className={props.active === 'documentation' ? styles.active : ''}>
              Documentation
            </a>
          </Link>
          <Link href="/about">
            <a className={props.active === 'about' ? styles.active : ''}>
              About
            </a>
          </Link>
        </nav>
      </header>
    </>
  )
}
