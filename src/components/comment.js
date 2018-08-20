import React, { Component } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            commentBox: ''
         }
    }
    handleChange(value){
        this.setState({commentBox: value});
    
    }
   
    render() { 
        return ( 
            <div>
                <span>{this.state.commentBox}</span>
                 <input onChange={(e)=>this.handleChange(e.target.value)} 
                            value={this.state.commentBox} ></input>
                         <button>+</button>
            </div>
         );
    }
}
 
export default Comment ;