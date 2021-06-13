import React, {useState, useEffect} from 'react';

export default function Example4() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    useEffect(() => {
         fetch("https://jsonplaceholder.typecode.com/users")
         .then(res=>res.json())
         .then(data => {
             setData(data);
         })
    })
    return(
        <div>
            <h1> num of messages{count}</h1>
            <div>
                {data.map((user) => <p>{user.name}</p>)}
            </div>
            <button onClick = {() => setCount(count+1)}>click</button>
        </div>
    )
}