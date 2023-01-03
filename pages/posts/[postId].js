import { useRouter } from "next/router";

function Post({ post }){
  let router = useRouter();
  // if the fallback is true then new page will be generated if proper props found till then loading text will be shown
  if( router.isFallback ){
    return <h2>...Loading</h2>;
  }

  return (
    <>
      <h2>{post.id} - {post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}

export default Post;

export async function getStaticPaths(){
  // let resp = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  // let posts = await resp.json();

  // let paths = posts.map(post => {
  //   return {
  //     params: { postId: post.id.toString() }
  //   }
  // });

  return {
    paths: [
      { params: { postId: '1' } },
      { params: { postId: '2' } },
      { params: { postId: '3' } },
    ],
    // paths: paths,
    // fallback: false // if not in paths 404
    // fallback: true // if not in path first loading(fallback) generate new and show return then generated
    fallback: "blocking" // there is no fallback screens
  }
}

export async function getStaticProps(context){
  let { params } = context;
  let resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  let post = await resp.json();

  // if not happy with the api responce show 404 page
  if( !post.id ){
    return {
      notFound: true
    };
  }

  return {
    props: {
      post
    }
  }
}