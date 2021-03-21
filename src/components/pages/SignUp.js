import React, { useState } from 'react';
// import '../../App.css';
import  './SignUp.css'
export default function SignUp() {

   const  [first ,setFirst] = useState("");
   const  [last ,setlast] = useState("");
   const  [email ,setEmail] = useState("");
   const  [password ,setPassword] = useState("");
   const  [repassword ,setRepassword] = useState("");

   function signup  () {
     console.log(first)

     let item = {first , last , email , password , repassword};
     console.log(item)
   }
   
   return (
     
          <div>
             <div id="signup">
                  <input type="text" id="first" onChange={ (e) => setFirst(e.target.value)} onChange={ (e) => setFirst(e.target.value)} placeholder="First Name"/>
                  <br/>
                  <input type="text" id="last"  onChange={ (e) => setlast(e.target.value)}  placeholder="Last Name"/>
                  <br/>
                  <input type="email" id="email" onChange={ (e) => setEmail(e.target.value)} placeholder="Email"/>
                  <br/>
                  <input type="password" id="password" onChange={ (e) => setPassword(e.target.value)} placeholder="Password"/>
                  <br/>
                  <input type="password" id="confirm" onChange={ (e) => setRepassword(e.target.value)} placeholder="Confirm Password"/>
                  <br/>
                  <button onClick={signup} id="send">sign up</button>
             </div>
          </div>
       
   )
}

