import React  from 'react';
export default function Register(){
        return(
           <div>
               <h1>Register</h1>
               <form>
               <input type="text" placeholder='name'></input>
               <br></br>
               <input type="email" placeholder='email'></input>
               <br></br>
               <input type="password" placeholder='password'></input>
               <br></br>
               <input type="password" placeholder='Confirm Password'></input>
               <br></br>
               <input type="checkbox" />Agree to terms and conditions
               <br></br>
               <button type='submit'>submit</button>
               </form>
           </div>
        );
    
}