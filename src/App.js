import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';



class App extends Component {
  constructor (){
    super();
    this.state={
      characters:[],
      pushedchar:[],
      newCharacter: ''


    }
   
  }

  componentDidMount () {

    axios.get("/api/characters").then(res=>{
      
      this.setState({
      characters:res.data
    })})
  }


// addCharacter(){
//   axios 
//     .get('/api/characters',{name:this.state.newCharacter} )
//     .then(response=>this.setState({name: response.data, newCharacter:"" }))
// }


// arraycharacters() {
//   this.state.characters.map((arr,i)=> arr.push(this.setState(pushedchar)))
//   console.log(this.state.pushedchar)
// }





  render() {

    console.log(this.state.characters)
    
    
    let characterdisplay = this.state.characters.map((char, i)=> {
      console.log(char[i].name)
      return (char.map((ind,i)=> {
        return(
         <div key={i}>
          {/* <p> {ind.image} </p> */}
          <h1>{ind.name}</h1>
          <img src={ind.image}/>
        </div>)
      })
      
    )
    });



    return (
      <div className="App">
        


        

        {characterdisplay}
        

        <ul>hello</ul>


        <button>Click here to generate Character </button>
        
      </div>
    );
  }
}

export default App;
