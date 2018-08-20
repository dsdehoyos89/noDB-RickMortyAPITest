import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Characters from './components/Characters';

class App extends Component {
  render(){
    return (
      <div className='App'>
        <Characters/>
      </div>
    );
  }
}

export default App;

// class App extends Component {
//   constructor (){
//     super();
//     this.state={
//       characters:[],
//       favorites:[],
//       newCharacter: ''


//     }
   
//   }

//   componentDidMount () {

//     axios.get("/api/characters").then(res=>{
      
//       this.setState({
//       characters:res.data
//     })
//   })
//   }



//   addFavorite = (char) => {
//     axios
//       .post('/api/people', char)
//       .then((response) => {
//         console.log('response:', response);
//         this.setState({
//           favorites: response.data
//         })
//       } )
//   }

//   removeFavorite = (id) => {
//     axios
//       .delete('/api/people/${id}')
//       .then((respnose)=>{
//         console.log('response: ', response);
//         this.setState({
//           favorites: response.data
//         })
//       })
//   }

//   updateName = (id, name, event) => {
//     event.preventDefault();
//     axios
//       .put('/api/people/${id}', {name})
//       .then((response)=>{
//         this.setState({
//           favorites: response.data
//         })
//       })
//   }

//   searchHandler = (e) => {
//     this.setState({
//       search: e.target.value
//     })
//   }




// // addCharacter(){
// //   axios 
// //     .get('/api/characters',{name:this.state.newCharacter} )
// //     .then(response=>this.setState({name: response.data, newCharacter:"" }))
// // }


// // arraycharacters() {
// //   this.state.characters.map((arr,i)=> arr.push(this.setState(pushedchar)))
// //   console.log(this.state.pushedchar)
// // }





//   render() {

//     console.log(this.state);

//     let chars = this.state.characters.filter((char)=> char.name.toLowerCase().includes(this.state.search)).map((char)=>{
//       return(
//         <div className='charWrapper' key={char.id}>
//           <img className="charImg" src={char.image} alt={char.name}/>
//           <div className='charText'>
//             <h6 className='charName'><span>{char.name}</span>({char.species})</h6>
//             <p>{char.origin.name}</p>
//           </div>
//           <button className='addBtn' onClick={()=>this.addFavorite(char)}>+</button>
//         </div>
//       )
//     })

//     return (
//       <div>
//           <h1>Favorites</h1>
//           <Favorites 
//             favorites={this.state.favorites}
//             removeFavorite={this.removeFavorite}
//             updateName={this.updateName}
//           />
//           <br/>
//           <br/>
//           <h1>Characters</h1>
//           <input type='text' placeholder='Search...' value={this.state.search} onChange={this.searchHandler}/>
//           <div className='charPage'>
//             {chars}
//           </div>
//         </div>
//     )
//   }
// }

// export default Characters;
    
    
    // let characterdisplay = this.state.characters.map((char, i)=> {
    //   return (char.map((ind,i)=> {
    //     return(
    //      <div key={i}>
    //       <h1>{ind.name}</h1>
    //       <img src={ind.image}/>
    //     </div>)
    //   })
      
    // )
    // });



//     return (
//       <div className="App">
               

//         {characterdisplay}

        
//       </div>
//     );
//   }
// }

// export default App;
