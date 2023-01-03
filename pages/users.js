import User from '../components/user';

function Users({ users }){
  return (<>
    <h1>List Of Users</h1>
    {
      users.map((user) => {
        return(
          <div key={user.id}>
            <User user={user}/>
            {/* <p>Name: {user.name} ----- Email: {user.email}</p> */}
          </div>
        )
      })
    }
  </>)
}

export default Users;

export async function getStaticProps(){
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await resp.json();

  return {
    props: {
      users
    }
  }
}