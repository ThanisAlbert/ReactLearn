import { useState} from "react"
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

export default function Loginpage(){

const[username, usernamechange]= useState("")
const[password, passwordchange]= useState("")
const[person,addattribute]=useState({Name:"Thanis",Age:34,Location:"Chennai"})
const[fruits,addfruit]=useState(["Apple","Orange", "Banana"])
const[persons,addperson]=useState([{Name:"Thanis",Age:34,Location:"Chennai"},{Name:"Albert",Age:34,Location:"Chennai"}])
const[credentials, addcredential]= useState([]);
const[trigger, settrigger]=useState(0)
const navigate = useNavigate()


const loginsubmit =(e)=>{
    e.preventDefault();      
    Axios.post('http://127.0.0.1:8000/api/loginview/',{"username":username,"password":password})
    .then(res => {
      if (res.data === "valid") {
          console.log("Login successful");
          navigate("/success")
          // Perform actions for successful login
      } else {
          console.log("Login failed");
          navigate("/fail")
          // Perform actions for failed login
      }
     })
  .catch(error => {
      console.error("Error:", error);
      // Perform actions for error handling
     });   
  }


  const logindelete =(e)=>{
    e.preventDefault();      
    Axios.delete('http://127.0.0.1:8000/api/login_delete/',{ params: { username: username } })
    .then(res=>settrigger(prevTrigger => prevTrigger + 1))    
  }


return(

    <div>

<div class="container-login">
    <div class="row justify-content-center">
      <div class="col-xl-6 col-lg-12 col-md-9">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Login</h1>
                  </div>
                  <form class="user" onSubmit={loginsubmit}>
                    <div class="form-group">
                      <input type="email" value={username} onChange={e=>usernamechange(e.target.value)} class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                        placeholder="Enter Email Address"/>
                    </div>
                    <div class="form-group">
                      <input type="password" value={password} onChange={e=>passwordchange(e.target.value)} class="form-control" id="exampleInputPassword" placeholder="Password"/>
                    </div>
                    
                    <div class="form-group">
                    <div class="custom-control custom-checkbox small" style={{ lineHeight: '1.5rem' }}>
                        <input type="checkbox" class="custom-control-input" id="customCheck" />
                        <label class="custom-control-label" for="customCheck">Remember Me</label>                        
                    </div>
                    </div> 


                    <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block">Login</button>
                    </div>
                    <hr/>
                  
                  </form>
               
                

                  <hr/>
                  <div class="text-center">
                    <a class="font-weight-bold small" href="register.html">Create an Account!</a>
                  </div>
                  <div class="text-center">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

 </div>


)


}