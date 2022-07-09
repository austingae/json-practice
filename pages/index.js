import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      </main>
    </div>
  )
}

export async function getStaticProps(context) {

  const response = await fetch("../JSON/squad.json");
  const response2 = await response.json();

  console.log(response2);
  return {
    props: {

    }
  }
}