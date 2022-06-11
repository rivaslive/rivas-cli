import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>rivas-cli</title>
        <meta
          name="description"
          content="CLI for build components for Nodejs and React with Atomic Designp"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span style={{ color: '#0072F5' }}>rivas-cli</span>
        </h1>

        <h2 className={styles.title2}>Default use</h2>
        <p>
          The default use is only exec command
          <pre className={styles.code}>$ npx rivas-cli</pre>
          They will have a series of steps to complete your action
          <p>
            <b>step 1:</b> Select template
          </p>
          <ul>
            <li>
              <b>Component:</b> For new component
            </li>
            <li>
              <b>Storybook:</b> For new story with storybook
            </li>
          </ul>
          <Image src={require('../public/step-1.png')} placeholder="blur" />
          <p>
            <b>step 2:</b> Select path location
          </p>
          <p>
            If there is no valid address for you select{' '}
            <b>=== Created in custom path ===</b>
          </p>
          <Image src={require('../public/step-2.png')} placeholder="blur" />
          <p>
            <b>step 3:</b> Select language
          </p>
          <p>Language for your component</p>
          <p>
            <b>step 4:</b> Insert component name
          </p>
          <p>Name for your files created</p>
        </p>


        <h2 className={styles.title2}>Advance use</h2>
        <p>
          To skip the previous steps you can use the arguments.
          <pre className={styles.code}>$ npx rivas-cli [patter] [component] [language]</pre>
        </p>

        <p>
          <b>Example</b>
          <pre className={styles.code}>$ npx rivas-cli component MyComponent --tsx</pre>
        </p>

        <h2 className={styles.title2}>Help</h2>
        <pre className={styles.code}>$ npx rivas-cli --help</pre>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by
          <span style={{ marginLeft: 5 }}>
            <b>rivaslive</b>
          </span>
        </a>
      </footer>
    </div>
  );
}
