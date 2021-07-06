import React, { Component } from "react";
import Form from "./Components/Form";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:  [],
    };
   
      
    
    this.handleChange = (e) => {
      this.setState = { [e.target.name]: e.target.value };
   
    };
   
  }
  
  
  render() {
return (
      <div>
        <Form adduser={this.handlenewUser} />
      </div>
    );
  };
}

export default App;
