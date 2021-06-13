import React from 'react';

export default function About({match}){
    return(
        <div>
            <h1>i am about: {match.params.name}</h1>
        </div>
    )
}