import React,{useState} from 'react';
export default function Calculator1() {
    const[data, setData] = useState('');
    const[result, setResult] = useState('')
    const handler = e => {
        setData(e.target.value);
    }
    
    const button = {
        backgroundColor: 'black',
        color: 'white',
        padding: '13px',
        fontSize: '16px',
        margin: '5px',
        right:'1px'
      }
      const button1 = {
        backgroundColor: 'black',
        color: 'white',
        padding: '13px',
        fontSize: '16px',
        margin: '5px',
        right:'1px',
      }
    return(
        <div>
            <center>
                    <input style={{padding:'10px'}} type="text"   value={data} onChange={handler}/> <br/>
                    <button style={{padding:'5px', color:'red', text:'white'}}onClick={() => setResult(eval(data))}>Enter</button>
                    <p>result is: {result}</p>
                    <button style={button} onClick = { () => setData(data + '1')}>1</button>
                    <button style={button1} onClick = {() => setData(data+'2')}>2</button>
                    <button style={button1} onClick = {() => setData(data+'3')}>3</button> <br/>
                    <button style={button} onClick = {() => setData(data+'4')}>4</button>
                    <button style={button} onClick = {() => setData(data+'5')}>5</button>
                    <button style={button} onClick = {() => setData(data+'6')}>6</button> <br/>
                    <button style={button} onClick = {() => setData(data+'7')}>7</button>
                    <button style={button} onClick = {() => setData(data+'8')}>8</button>
                    <button style={button} onClick = {() => setData(data+'9')}>9</button>  <br/>
                    <button style={button} onClick = {() => setData(data+'0')}>0</button>
                    <button style={button} onClick = {() => setData(data+'+')}>+</button>
                    <button style={button} onClick = {() => setData(data+'-')}>-</button>
                    <button style={button} onClick = {() => setData(data+'*')}>*</button> <br />
                    <button style={button} onClick = {() => setData('')}>cr</button> </center>
                  <center>  
            </center>
        </div>
    )
}