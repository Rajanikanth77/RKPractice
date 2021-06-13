import React, {useState} from 'react';

export default function LoginForm() {
   const[data, setData] = useState({
       userName: '',
       password: ''
   })
   const{userName, password} = data;
   const handleChange = e => {
       setData({...data,[e.target.name]:[e.target.value]})
   }
   const submitHandler = e => {
       e.preventDefault()
       console.log(data);
       }
   return(
       <div>
           <center>
           <form onSubmit = {submitHandler}>
               <input type="text" value={userName} name="userName"  onChange={handleChange} /> <br />
               <input type="password" value={password} name="password" onChange={handleChange} />  <br />
                <input type="submit" name="submit" />
           </form>
           </center>
       </div>
   )
}