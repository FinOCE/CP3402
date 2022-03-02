import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/pages/index.module.sass'
import Header from '../components/Header'
import Link from 'next/link'
import Main from '../components/Main'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Peacekeeper API</title>
      </Head>
      <Header active="index" />
      <Main>
        <section id={styles.landing}>
          <h1>Peacekeeper API</h1>
          <p>Create event experiences easily</p>
          <p>We take the difficulties out of creating complex back-end services to create and run tournaments and provide an easy-to-use API to let you create stunning user experiences without all the hassle.</p>
          <div id={styles.cta}>
            <Link href="/CP3402/prac_01/">Get Started</Link>
            <Link href="/CP3402/prac_01/">View Documentation</Link>
          </div>
          <img id={styles.image} src="https://media.discordapp.net/attachments/826497387190288417/864399088246456360/unknown.png" alt="Header image" />
        </section>
        <section id={styles.explanation}>
          <h1>How It Works</h1>
          <p>Our service is easy to use! Simply make a HTTP request to the given endpoints for your needs with the required body and we&apos;ll take care of the rest!</p>
          <p>Here&apos;s an example of where you want to add a player to the tournament:</p>
          <div className={styles.endpoint}>
            <span>PUT</span>
            <code>/api/v1/&#123;tournament&#125;/players</code>
            <pre><code>{JSON.stringify({
              username: 'Fin',
              seed: 1
            }, null, 2)}</code></pre>
          </div>
          <p>
            You do this, and we do the rest!{' '}
            <Link href="/CP3402/prac_01/">Click here</Link> to view the documentation for Peacekeeper API.
          </p>
        </section>
      </Main>
    </>
  )
}

export default Home
