import React from 'react';
import { useState } from 'react/cjs/react.development';
import {Redirect} from 'react-router'


export default function DashBoard(){
    const[go, setGo] = useState(false)
    if(go){
        return <Redirect to='/about'/>
    }
    return(
        <div>
            <h1>i am dash board</h1>
            <button onClick={() => setGo(true)}>about</button>
        </div>
    )
}