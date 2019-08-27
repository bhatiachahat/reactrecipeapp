
import React, { Component } from 'react'
import Searchbar from './components/Searchbar';
import instance from  './utils/axios';
import Recipe from './components/Recipe';
import Loader from 'react-loader-spinner';
import './App.css'
import Navbar from './components/Navbar'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


export default class App extends Component {
  constructor(){
    console.log("constructor");
    super();
    this.initialstate={
      query:"",
      result:[],
      loading:false

    }
    this.state=this.initialstate

  }
  componentDidMount(){
    console.log("Component Did Mount");
}
componentWillMount(){
    console.log("Component Will Mount");
    this.handleSubmit("velvet");
    // var obj={
    //   query:"if i can't have you"
    // }
    // this.handleSubmit(obj);
}
handleChange=(value)=>{
  this.setState({query:value},()=>{
    console.log(this.state);

  })


}
handleSubmit=(query)=>{
  this.setState({loading:true,result:[]},()=>{
    console.log(query);
    const APP_ID="6eb07360";
    const APP_KEY="e0ec11225de5124cb41bc9ff29d273d0";
    var pr= instance.get('/search',{
         
      params:{
       
        
    
        q: `${query}`,
        app_id:APP_ID,
        app_key:APP_KEY
  
       
    }
  });
  pr.then(data=>{
    console.log(data.data.hits);
    this.setState({result:data.data.hits,loading:false,query:""},()=>{
      console.log("after set state",this.state.result);
    })
  }).catch(err=>{
    console.log("err is",err)
  
  }).finally(function(){
    console.log("always executed");
    
    
  })
  })

}
  render() {
    console.log("rendering");
    return (
      <div >
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <a class="navbar-brand" href="#">
      {/* <img src="https://secureimages.allrecipes.com/ar-images/ARlogo.svg"></img> */}
      <img src="https://www.edamam.com/assets/img/small-logo.png"></img>
      <img src="https://www.edamam.com/assets/img/logo.png"></img>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
     
      
      <Searchbar handleChange={this.handleChange} query={this.state.query} handleSubmit={this.handleSubmit} />
      
    
    </ul>
    <form class="form-inline my-2 my-lg-0">
   
       
      
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
      {/* <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button> */}
      {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Create Profile</button> */}
    </form>
  </div>
</nav>
  
   
    <div className="container" >
    <div className="row" >
        <div id="content">
        {this.state.loading &&  <img id="loader" src="https://cdn.dribbble.com/users/645440/screenshots/3266490/loader-2_food.gif" />}
    {/* <Loader type="BallTriangle" color="#somecolor" height={80} width={80} /> */}
    <Recipe result={this.state.result}/>
    </div>
    </div>
    </div>
    
    
    
      </div>
    )
  }
}

