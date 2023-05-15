import { useState } from "react"

const Users = () => {
    const [users, setUsers] = useState()
    const mostrarUsers = async() =>{
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((data) => setUsers(data))
        .catch((error)=>{
            console.log(error)
        })
    }
    mostrarUsers()
    // console.log(users)
  return (
    <div>Users</div>
  )
}

export default Users