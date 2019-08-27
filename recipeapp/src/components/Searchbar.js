import React, { Component } from 'react'
import style from '../Searchbar.module.css'

export default class Searchbar extends Component {
    submitChange=(event)=>{ 
        console.log(event.target.value);
        this.props.handleChange(event.target.value);
    }
    submitForm=(event)=>{
        event.preventDefault();
        this.props.handleSubmit(this.props.query);
       

    }
    render() {
        return (
            <div>
                     <form onSubmit={this.submitForm}>
                <div >
  <input type="text" className={style.search_input} name="query" value={this.props.query} onChange={this.submitChange} placeholder="Find the best recipes from across the web..." />
  {/* <button className="ui icon button">
    <i className="search icon">Search</i>
  </button> */}
</div>
</form>
            </div>
        )
    }
}
