import React from "react"
import logo from "./logo2.png"


export default function Login() {

let signupInitialValue={
  name: " ",
  username: " ",
  password: " "
}


let [account,toggleAccount]=React.useState("login")
let [signup,setSignup]=React.useState(signupInitialValue)


function handleSignupButtonClick(){
  toggleAccount(()=>{
    return account==="login"?"signup":"login"
  })
}
function onInputChange(e){
    setSignup({...signup, [e.target.name]:e.target.value})
}




  return (
    <div className="Login">
      <img className="loginLogo" src={logo} alt="logo"></img>
      {
        account==="login" ?
        <div className="account">
          <input className="loginInput" placeholder="Enter username" name="username"></input>
          <input className="loginInput" placeholder="Enter password" name="password"></input>
          <button className="loginButton">Login</button>
          <p>OR</p>
          <button className="signupButton" onClick={handleSignupButtonClick}>Create an account</button>
      </div> :
         <div className="account">
          <input className="loginInput" onChange={onInputChange} placeholder="Enter name" name="name"></input>
          <input className="loginInput" onChange={onInputChange} placeholder="Enter username" name="username"></input>
          <input className="loginInput" onChange={onInputChange} placeholder="Enter password" name="password"></input>
          <button className="loginButton">Signup</button>
          <p>OR</p>
          <button className="signupButton" onClick={handleSignupButtonClick}>Already have an account</button> 
        </div>
      }
      
    </div>

  );
}


