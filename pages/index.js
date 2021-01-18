import Head from 'next/head'

import { client } from '../lib/sanity';

import styles from '../styles/Home.module.css'

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {products.map(product => {
            return (
              <a key={product._id} href="#" className={styles.card}>
                <h3>{ product.title }</h3>
                <p>{ product.blurb.en }</p>
              </a>
            )
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const products = await client.fetch(`*[_type == "product"]`);
  return {
    props: {
      products
    }
  }
}