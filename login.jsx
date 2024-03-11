import React from "react"
import logo from "./logo.png"



function Login() {

    return (
         <div className = "card" id="signup">
            <img src={logo} alt="logo" className="logo" width='250' heigth='250'></img>
            <div className = "heading">
                <p>Welcome</p>
            </div>
            <div className = "details">
               To keep connected with us please login with personal Info
            </div>
            <div className = "input">
            
                <label for="">Email</label><br/>
                
                <input className = "textbox" type='text' placeholder="abcd@gmail.com" />
 
               
                
                <label for="">Password</label><br/>
                
                <input className = "textbox" type='password' placeholder= "**********" pattern=".{8}"/>
                <div className="addons"> Remember Me </div>  <br/><br/>
                    
                
            
                <button className="button">Login</button>
            </div>

        </div> 

    );
}




export default Login;