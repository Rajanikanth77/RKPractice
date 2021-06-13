import React from 'react';
import ReactLogo from '../../src/react.jpg';
import Orange from '../../src/Orange.mp3';
import video from '../../src/rk.mp4';
export default function Logo(){
    return(
        <div style={{textAlign:'center'}}>
          <img src={ReactLogo} heigth="50"  width="250" /> <br />
          <audio controls>
            <source src = {Orange}  />
          </audio> <br />
          <video controls>
            <source src={video}type='video/mp4' />
          </video>
        </div>
    )
}