import Link from "next/link";

function Posts({ posts }){
  return(
    <>
      <h1> List Of Posts </h1>
      {
        posts.map(post => {
          return (
            <>
            <Link href={`posts/${post.id}`}>
            <div key={post.id}>
              <p>{post.id} -- {post.title}</p>
            </div>
            </Link>
            </>
          )
        })
      }
    </>
  );
}

export default Posts;

export async function getStaticProps(){
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  let posts = await resp.json();
  posts = posts.slice(0, 3);

  return {
    props: {
      posts
    }
  }
}