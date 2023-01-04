import Link from "next/link";
// import styles from '../styles/About.module.css';
import styles from '../styles/About.module.scss';

function About(){
  return (
    <>
      <Link href="/">Home</Link>
      <h1 className={styles.h1scss}>About Page</h1>
    </>
  )
}

export default About;