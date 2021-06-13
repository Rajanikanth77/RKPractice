import React, {useEffect, useState} from 'react';

export default function Fetch(){
    const[data, setData] = useState([])
    useEffect( () =>{
        fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
        .then(Json => setData(Json))
    },[])
    return(
        <div>
         {data.map(item=> <li key={item.id}>{item.title}, {item.id}, {item.userId}, {item.completed}</li>)}
        </div>
    )
}