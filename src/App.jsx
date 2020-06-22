import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components'
import { generate as id } from 'shortid'
import allColors from './styles/colors'
import Header from './components/Header'
import FormTask from './components/FormTask'
import Task from './components/Task'


const GlobalStyle = createGlobalStyle`
  body {
      font-family:  sans-serif;
      margin: 0;
      text-align: center;
      background-color: ${allColors.mainBackgroundColor}
  }
`


class App extends Component {


  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {

    return (
      <>
        <GlobalStyle />
        <Header />
        <FormTask
          handleSubmit={this.handleSubmit}
        />
        <div>
          <Task></Task>
        </div>
      </>
    )
  }
}


export default App;