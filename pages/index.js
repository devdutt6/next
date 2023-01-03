import Link from "next/link";
import { useRouter } from "next/router";

function Home(){
  let router = useRouter();
  function handleClick() {
    router.push('/product');
  }
  return (
    <>
    <h1>Home Page</h1>
    <Link href="/about">About</Link><br></br>
    <Link href="/blog">Blog</Link><br></br>
    <Link href="/profile">Profile</Link><br></br>
    <Link href="/product">Products</Link><br></br>
    <Link href="/docs">Docs</Link><br></br>
    <Link href="/posts">Posts</Link><br></br>
    {/* <Link href="/users">User</Link><br></br> */}
    <button onClick={handleClick}>Place Order</button>
    </>
  )
}

export default Home;