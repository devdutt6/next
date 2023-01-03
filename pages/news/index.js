function News({ news }){
  return(
    <>
      <h1>List of news</h1>
      {
        news.map(neww => {
          return (
            <div key={neww.id}>
              <p>{neww.title} | {neww.category}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default News;

export async function getServerSideProps(){
  let resp = await fetch('http://localhost:4000/news');
  let news = await resp.json();

  return {
    props: {
      news
    }
  }
}