import React  from 'react';
export default function Login(){
        return(
           <div>
               <h1>Login</h1>
               <form>
               <input type="text" placeholder='name'></input>
               <br></br>
               <input type="password" placeholder='password'></input>
               <br></br>
               <button type='submit'>submit</button>
               </form>
           </div>
        );
    
}