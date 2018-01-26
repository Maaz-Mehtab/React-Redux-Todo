import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todocode from './components/Todocode';
import Listcode from './components/listcode'

class App extends Component {
  // constructor(props){
  //   super(props);
    
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <marquee> <h1 className="App-title">TODO List Appliation Using React Redux Firebase</h1></marquee>
        </header>
        
        {/* <Addtodo/> */}
        <Todocode />
       <Listcode/> 
      </div>
    );
  }
}

export default App;
