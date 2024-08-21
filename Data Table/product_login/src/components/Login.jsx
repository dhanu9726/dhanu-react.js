import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {

  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  const handlesubmit=(e)=>{
    e.preventDefault()

    let userdata={
      email,
      password
    }

    axios.post("http://localhost:8000/product",userdata).then((res)=>{
      let tokenfromrequres = res.data.token
      localStorage.setItem("token",tokenfromrequres)
      console.log(res.data.token)
    })
    .catch((err)=>console.log(err))
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form action="" onSubmit={(e)=>handlesubmit(e)}>
        <input onChange={(e)=>setemail(e.target.value)} type="email" placeholder='Enter Your Email' /><br/><br />
        <input onChange={(e)=>setpassword(e.target.value)} type="password" placeholder='Enter Your Password' /><br /><br/>
        <input type="submit" />

      </form>
    </div>
  )
}

export default Login
