import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gender: "",
    };
    this.handleChange = (e) => {
      this.setState = { [e.target.name]: e.target.value };
    };
    this.handleSubmit =(e)=>{
        this.props.adduser(this.state)
    
  this.setstate({  name: "",
  email: "",
  gender: "",})
}
this.handleChange = (e) => {
    this.setState = { [e.target.name]: e.target.value };
  }

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Gen:</label>
          <input
            type="number"
            name="gen"
            value={this.state.gen}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button>Add Users</button>
        </form>
      </div>
    );
  }
}


export default Form;
