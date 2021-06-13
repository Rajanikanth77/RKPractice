import React, { useState } from 'react';

const Example2=()=> {
const [change, setChange]=useState(true);
return(
<div>
    <button onClick={() => setChange(!change)}>
      clickMe
    </button>
    {change? <h1>i am old</h1>: <h1>onclick i became new</h1>}
</div>
);
}

export default Example2;
