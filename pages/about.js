import Link from "next/link";
// import styles from '../styles/About.module.css';
import styles from '../styles/About.module.scss';

function About({data}){
  return (
    <>
      <Link href="/">Home</Link>
      <h1 className={styles.h1scss}>{data}</h1>
      <h1 className={styles.h1scss}>SECRET {process.env.DB_USER}</h1>
      <h1 className={styles.h1scss}>PUBLIC {process.env.NEXT_PUBLIC_ID}</h1>
    </>
  )
}

export default About;

export function getStaticProps(context){
  console.log("context", context.previewData);
  console.log("secret", process.env.DB_USER);
  console.log("public", process.env.NEXT_PUBLIC_ID);
  return {
    props: { data: context.preview ? 'About Draft' : 'About Live' }
  }
}