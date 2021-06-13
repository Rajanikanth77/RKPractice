import React, {useState} from 'react';

export default function Example3() {
const [count, setCount] = useState(0);
const [name, setName] = useState('rajanikanth');
console.log(name)
return(
<div>
    <h1>num of messages received {count}</h1>
    <button onClick={() => setCount(count+1)}>Add</button>
    <h2>name: {name}</h2>
    <button onClick={() => setName('vivek')}>change</button>
</div>
)

}