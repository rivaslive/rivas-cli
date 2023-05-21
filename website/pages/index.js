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
          content="CLI for build components for React with Atomic Design"
        />
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span style={{color: '#0072F5'}}>rivas-cli</span>
        </h1>

        <h2 className={styles.title2}>Default use</h2>
        <p>
          The default use is only exec command
          <pre className={styles.code}>$ npx rivas-cli</pre>
          They will have a series of steps to complete your action
          <p>
            <b>step 1:</b> Insert name of the component
          </p>
          <Image src={require('../public/step-1.png')} placeholder="blur"/>
          <p>
            <b>step 2:</b> Select language
          </p>
          <ul>
            <li>
              <b>Typescript:</b> typescript, ts, tsx, --typescript, --ts, --tsx
            </li>
            <li>
              <b>Javascript:</b> javascript, js, jsx, --javascript, --js, --jsx
            </li>
          </ul>
          <Image src={require('../public/step-2.png')} placeholder="blur"/>
          <p>
            <b>step 3:</b> Select path location
          </p>
          <p>short: atoms, molecules, organisms, templates, Atoms, Molecules, Organisms, Templates, a, m, o, t, -a, -m,
            -o, -t, --a, --m, --o, --t</p>
          <p>
            If there is no valid address for you select{' '}
            <b>=== Created in custom path ===</b>
          </p>
          <Image src={require('../public/step-3.png')} placeholder="blur"/>
        </p>

        <h2 className={styles.title2}>Advance use</h2>
        <p>
          To skip the previous steps you can use the arguments.
          <pre className={styles.code}>
            $ npx rivas-cli [name] [language] [path]
          </pre>
        </p>

        <p>
          <b>Example</b>
          <pre className={styles.code}>
            $ npx rivas-cli MyComponent --tsx atoms
          </pre>

          <pre className={styles.code}>
            $ npx rivas-cli MyComponent --tsx molecules
          </pre>

          <pre className={styles.code}>
            $ npx rivas-cli MyComponent --tsx custom
          </pre>
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
          <span style={{marginLeft: 5}}>
            <b>rivaslive</b>
          </span>
        </a>
      </footer>
    </div>
  );
}
