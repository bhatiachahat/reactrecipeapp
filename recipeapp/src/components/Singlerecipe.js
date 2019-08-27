import React from 'react'

export default function Singlerecipe(props) {
    return (
        <div>
            {
                <li className="singleitem" >
                    <a  target="_blank" href={props.content.recipe.shareAs}>
                {props.content.recipe.image  &&   <img className="card-img-top" src={props.content.recipe.image} alt={props.content.recipe.label}/>}
        {!props.content.recipe.image &&     <img className="card-img-top" src="https://images.media-allrecipes.com/images/82579.png" alt={props.content.recipe.label}/>
        
        }
                   </a>
                <h5 className="card-title">  <a  target="_blank" href={props.content.recipe.shareAs}>{props.content.recipe.label}</a></h5>
            <hr></hr>
           <div id="subsection">
               <p> <span className="green">{props.content.recipe.ingredients.length} </span>ingredients</p>
               <p> <span className="green_1">{(props.content.recipe.calories/10).toFixed(2)} </span>calories</p>
           </div>

                
                <hr></hr>
                  <p id="source">By {props.content.recipe.source}</p>
              
                </li>
              
              
            }
        </div>
    )
}
