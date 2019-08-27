import React from 'react'
import Singlerecipe from './Singlerecipe';

export default function Recipe(props) {
    return (
   <ul id="list">

   
            {
    props.result.map((recipe,index)=><Singlerecipe key={index} content={recipe}/>) 
   }
   </ul>

      
       
    )
}
