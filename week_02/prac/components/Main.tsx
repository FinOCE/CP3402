import styles from '../styles/components/Main.module.sass'

type MainProps = {
  children?: JSX.Element | JSX.Element[]
}

export default function Main(props: MainProps) {
  return (
    <main id={styles.main}>{props.children}</main>
  )
}