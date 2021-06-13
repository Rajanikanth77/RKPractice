import React from 'react';
import { useState } from 'react/cjs/react.development';
import {Redirect} from 'react-router'

export default function Home(){
    const[go, setGo]= useState(false);
    if(go){
        return <Redirect to="/dashboard" />
    }
    return(
        <div>
           <h1>i a home</h1> 
           <button onClick={() => setGo(true)}>login</button>
        </div>
    )
}