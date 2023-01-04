import Link from "next/link";
import styles from '../styles/Profile.module.scss';
// import styles from '../styles/Profile.module.css';

function Profile(){
  return (
    <>
      <Link href="/">Home</Link>
      <h1 className={styles.h1scss}>Profile Page</h1>
    </>
  )
}

export default Profile;