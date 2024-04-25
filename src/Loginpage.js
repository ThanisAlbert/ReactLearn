import { useState } from "react"
import Axios from 'axios'

export default function Loginpage(){

const[username, usernamechange] = useState("thanisalbert")
const[password, passwordchange] = useState("thanisalbert")
const[usernames, addusername] = useState(["thanis","albert"])
const[person,addattribute]=useState({firstname:"thanis", lastrname: "albert", age:36, place: "chennai"})
const[persons,addperson]=useState([{firstname:"thanis", lastrname: "albert", age:36, place: "chennai"}, {firstname:"jenifer", lastrname: "sylvester", age:33, place: "chennai"}])


const loginsubmit =(e)=>{

    e.preventDefault();
    console.log(username);

    usernamechange("albertthanis")
    passwordchange("albertthanis")
    addusername(data=>([...data,"thanisalbert"]))
    addattribute(data=>({...data,hometown:"chidambaram"}))
    addperson(data=>([...data,{firstname:"thanisjenifer", lastrname: "albert", age:36, place: "chennai"}]))
    
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
                  
                  <h1>username:</h1>{username}
                  <h1>password:</h1>{password}
                  <h1>Listofusernames</h1>{usernames.map(username=>username)}
                  <h1>Personattribute</h1>{person.firstname}{person.lastrname}{person.place}{person.age}{person.hometown}
                  <h1>Persons</h1>{persons.map(person=>person.firstname)}
                

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