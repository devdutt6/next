import { useRouter } from "next/router"

function Category({ news }){
  let router = useRouter();
  return (
    <>
      <h2>Displaying Category { router.query.category }</h2>
      {
        news.map(neww => {
          return (
            <div>
              {neww.id} { neww.title }
            </div>
          )
        })
      }
    </>
  );
}

export default Category;

export async function getServerSideProps(context){
  const { params, req, res, query } = context;
  console.log(req.headers.cookie);
  console.log(query);
  res.setHeader('Set-Cookie', ['name=Devdutt']);
  let resp = await fetch(`http://localhost:4000/news`);
  let news = await resp.json();
  news = news.filter(neww => {
    if (neww.category == params.category) return true;
    return false;
  });

  return {
    props: {
      news
    }
  }
}