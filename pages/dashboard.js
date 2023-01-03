import { useState, useEffect } from "react";

function Dashboard(){
  let [isLoading, setIsLoading] = useState(true);
  let [dashboard, setDashboard] = useState(null);

  useEffect(()=>{
    async function fetchData() {
      let resp = await fetch('http://localhost:4000/dashboard');
      let db = await resp.json();

      setDashboard(db);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if( isLoading ) return ( <h1>Loading...</h1> );

  return (
    <>
      <h1>Dashboard</h1>
      <h3>Posts: {dashboard.posts}</h3>
      <h3>Likes: {dashboard.likes}</h3>
      <h3>Followers: {dashboard.followers}</h3>
      <h3>Following: {dashboard.following}</h3>
    </>
  )
}

export default Dashboard;