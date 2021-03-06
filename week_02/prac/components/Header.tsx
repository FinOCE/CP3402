import styles from '../styles/components/Header.module.sass'
import Link from 'next/link'

type HeaderProps = {
  active: string
}

export default function Header(props: HeaderProps) {
  return (
    <>
      <div id={styles.siteinfo}>
        This site is created as an example site, and the only pages that exist are the index and about. It required 3 sections, so there are two sections in the index and one in the about.
      </div>
      <header id={styles.header}>
        <nav>
          <Link href="/CP3402/prac_01/">
            <a className={props.active === 'index' ? styles.active : ''}>
              Home
            </a>
          </Link>
          <Link href="/CP3402/prac_01/">
            <a className={props.active === 'tutorials' ? styles.active : ''}>
              Tutorials
            </a>
          </Link>
          <Link href="/CP3402/prac_01/">
            <a className={props.active === 'documentation' ? styles.active : ''}>
              Documentation
            </a>
          </Link>
          <Link href="/CP3402/prac_01/about/">
            <a className={props.active === 'about' ? styles.active : ''}>
              About
            </a>
          </Link>
        </nav>
      </header>
    </>
  )
}
