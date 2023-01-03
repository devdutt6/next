import { useRouter } from "next/router";
import Link from "next/link";

function Blog(){
  const router = useRouter();
  const { params = [] } = router.query;

  if( params.length == 2 ){
    return (
      <>
        <Link href="/">Home</Link>
        <h2>Viewing the docs for the feature {params[0]} and concept {params[1]}</h2>;
      </>
    );
  }
  else if( params.length == 1 ){
    return (
      <>
        <Link href="/">Home</Link>
        <h2>Viewing the docs for the feature {params[0]}</h2>;
      </>
    );
  }
  else{
    return (
      <>
        <Link href="/">Home</Link>
        <h2>Viewing the default docs</h2>;
      </>
    );
  }
}

export default Blog;