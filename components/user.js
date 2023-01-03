function User({ user }){
  return (<>
    <p>Name: {user.name} ----- Email: {user.email}</p>
  </>)
}

export default User;