import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    str: ""
  }
  clickBox = (event) => {
    const even = event.target.checked 
    console.log(even)
    console.log(this.state.str.length)
    var lore = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    if (even === true) {
      this.setState({ str:lore})
    } 
  }
  render() {
    return (
      <div className="wrapper">
        <label><input type="checkbox" value="true"  onChange={this.clickBox} /> Mostrar información importante</label> 
      {this.state.str}
      </div>
    );
  }
}

console.log()

export default App;
