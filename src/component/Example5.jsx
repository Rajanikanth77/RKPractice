import React, {useState} from 'react';

export default function Example5() {
  const [greeting, setGreeting] = useState(' ')
 const handleChange = (event) => setGreeting({greeting: event.target.value});
  return (
    <div >
      <h1>name:{handleChange}</h1>

        <lable>
            <p>enter your name </p>
                <input type='text' value={handleChange} />
          </lable>
    </div>
  );
}