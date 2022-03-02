import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/pages/about.module.sass'
import Header from '../components/Header'
import Main from '../components/Main'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Peacekeeper API</title>
      </Head>
      <Header active="about" />
      <Main>
        <section id={styles.about}>
          <h1>About Us</h1>
          <p>Peacekeeper was originally developed as a part of a standalone service, however we quickly discovered nobody provided a similar developer service. Knowing how useful this would be, we set out to create our own, so nobody else would need to think about the complex structures and mechanisms involved in creating such a service. We wanted to create an easily accessible API that would do all the calculations and handle everything so all you need to do is make some requests to our endpoints and we&apos;ll take care of the rest.</p>
          <p>Our platform is run entirely on the cloud with serverless systems to ensure we are never your bottleneck.</p>
        </section>
      </Main>
    </>
  )
}

export default About
