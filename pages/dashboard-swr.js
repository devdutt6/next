import useSWR from 'swr';

const fetcher = async () => {
  const resp = await fetch('http://localhost:4000/dashboard');
  const db = await resp.json();
  return db;
}

function DashboardSWR(){

  let {data, error} = useSWR('dashboard', fetcher);
  if(error) return "An error occured";
  if(!data) return "Loading...";

  return (
    <>
      <h1>Dashboard</h1>
      <h3>Posts: {data.posts}</h3>
      <h3>Likes: {data.likes}</h3>
      <h3>Followers: {data.followers}</h3>
      <h3>Following: {data.following}</h3>
    </>
  )
}

export default DashboardSWR;