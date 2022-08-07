import Head from 'next/head';
import Layout, { siteTitle } from '/components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import homeStyles from '../styles/Home.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to <strong>Mind Canvass</strong>: a free-form blog built for 
          inner and outer exploration!</p>

        <p>My name is {' '}
        
          <Link href=".../posts/introductions">
            <a className={utilStyles.contentLink}>Lee Gill</a>
          </Link>
        
          {' '}, a software designer, writer, activist, and sorcerer 
          based in the New Jersey/New York area. The subject of the content you'll 
          find here will vary depending on my projects, world events, or whatever topic 
          has captured my fancy for the time being.</p>

        <p>The hope is that you'll find a piece here that motivates you 
          to look for the miracles and lessons in your own journey. 
          And if you have any suggestions on topics for the blog, please reach out to me 
          via the links in the {' '} 
        
          <Link href= "#footer">
            <a className= {utilStyles.contentLink}>footer!</a>
          </Link></p>

        <p>Thanks for stopping by!</p>
      </section>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={`${utilStyles.list} ${homeStyles.grid}`}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={`${utilStyles.listItem} ${homeStyles.card}`} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>          
          ))}
        </ul>
      </section>
    </Layout>
  );
}
