import React, { Component } from 'react';
import {createGlobalStyle} from 'styled-components'
import {generate as id} from 'shortid'
import allColors from './styles/colors'
import Header from './components/Header'



const GlobalStyle = createGlobalStyle`
  body {

  }
`


class App extends Component {

  render() {

    return (
      <>
        <GlobalStyle />
        <Header />
      </>
    )
  }
}




export default App;