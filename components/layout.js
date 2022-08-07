import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export const siteTitle = 'Mind Canvass';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="A personal blog built on Next.js"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/Images/realm_of_dreams.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={siteTitle}
            />
            <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/Images/realm_of_dreams_b.png"
                  height= {144}
                  width= {144}
                  className={utilStyles.borderCircle}
                  alt="realm of dreams"
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{siteTitle}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer id="footer" className={styles.footer}>
        <a className={utilStyles.logo} href="https://twitter.com/LeeGee64">
        <Image
              src="/Images/logos/2021-Twitter-logo-blue.png"
              height= {60}
              width= {60}
              className={utilStyles.logo}
              alt="Twitter"
            />
          </a>
        <a className={utilStyles.logo} href="https://www.instagram.com/who_is_lee888/">
          <Image
              src="/Images/logos/Instagram_Glyph_Gradient.png"
              height= {60}
              width= {60}
              className={utilStyles.logo}
              alt="Instagram"
            />
          </a>
        <a className={utilStyles.logo} href="https://github.com/LeeGee64">
          <Image
              src="/Images/logos/GitHub-Mark-64px.png"
              height= {60}
              width= {60}
              className={utilStyles.logo}
              alt="GitHub"
            />
          </a>
        <a className={utilStyles.logo} href="https://www.linkedin.com/in/leland-gill">
          <Image
              src="/Images/logos/In-Blue-34.png"
              height= {60}
              width= {60}
              className={utilStyles.logo}
              alt="LinkedIn"
            />
          </a>
      </footer>
    </div>
  );
}
