import React from 'react';
import { Link } from 'react-router-dom';

export default function Routes(){
    return(
        <div>
              <ul>
                  <Link to='/'><li>HOME</li></Link>
                  <Link to='/dashboard'><li>Dashboard</li></Link>
                  <Link to='/about'> <li>About</li></Link>
              </ul>
        </div>
    )
}