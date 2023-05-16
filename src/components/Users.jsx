import { useState, useEffect } from "react"

const Users = () => {
    const [users, setUsers] = useState([])
    const mostrarUsers = async() =>{
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((data) => setUsers(data))
        .catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
      mostrarUsers()
    }, [])
    console.log(users)
  return (
    <section>
      {
        users.map((user)=>(
          <div key={user.id}>
            <h1>{user.name}</h1>
          </div>
        ))
      }
    </section>
  )
}

export default Users