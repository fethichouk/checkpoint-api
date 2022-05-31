import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserList() {
    const [data,setData]= useState()
    const gestUsers =async()=>{
        
        try {
          const {data}=  await axios.get("https://jsonplaceholder.typicode.com/users")
          setData(data)
        } catch (error) {
            console.error(error)
        }

    }
    useEffect(()=>{
        gestUsers()
    },[])
  return (
    <div className='cards'>
      {data?.map(el=>(
          <ul className='card'>
              <li> {el.id}</li>
              <li><b>Name</b>: {el.name}</li>
              <li><b>Username</b>: {el.username}</li>
              <li><b> Email </b>: {el.email}</li>
              <li> <b>Adress</b>:  {el.address.street},{el.address.city}</li>
          </ul>
      ))}
    </div>
  )
}

export default UserList