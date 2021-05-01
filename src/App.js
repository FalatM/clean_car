import './App.css';
import Navbar from './components/Navbar/Navbar'
import CheckboxListSecondary from './components/List/List'
import UnitField from './components/Unit/Unit'
import Employee from './components/Employee/Employee'

import React, { Component } from 'react'
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <UnitField />
        <CheckboxListSecondary />
        <Employee />
      </div>
    )
  }
}


export default App;
