import React from 'react';
import { useNavigate } from 'react-router-dom';

function Successinsert(){
    const navigate=useNavigate();
    const handleevent=()=>{
        navigate('/')
    }
    return(
        <div>
            <h1 style={{color:'red'}}>successfully inserted</h1>
        <input type='button' value="Go to home page" style={{backgroundColor:'red',width:'20%',height:'100%'}} onClick={handleevent}/>
        </div>
    )
}
export default Successinsert