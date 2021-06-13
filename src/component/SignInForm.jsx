import axios from 'axios';
import React, {useState} from 'react';

export default function SignInForm() {
    const[data, setData] = useState({
        userName: '',
        email:'',
        password:'',
        confirmPassword:''
    })
    const{userName, email, password, confirmPassword} = data;
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleSUbmit = e => {
        e.preventDefault();
        axios.post('https://rk-project-61236-default-rtdb.firebaseio.com/register.json', data).then(() => alert("submitted succesfully") )
    }
    return(
        <div>
            <center>
                <form  onSubmit={handleSUbmit}>
                    <input type="text" name="userName" value={userName} onChange={changeHandler}/> <br />
                    <input type="email" name="email" value={email}  onChange={changeHandler}/>  <br />
                    <input type="password" name="password" value={password}  onChange={changeHandler}/>  <br />
                    <input type="password" name="confirmPassword" value={confirmPassword}  onChange={changeHandler}/> <br />
                    <input type="submit" name="submit" />
                </form>
            </center>
        </div>
    )
}