import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components'
import { generate as id } from 'shortid';
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

  state = {
    tasks: [
      {
        title: 'Ir al supermercado',
        done: false
      }
    ]
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.title.value.trim() !== '') {
      this.createNewTask(e.target.title.value)
    }
  }

  createNewTask = (title) => {
    const newTask = {
      id: id(),
      title: title,
      done: false
    }

    const allTasks = [...this.state.tasks, newTask]

    this.setState({ tasks: allTasks })
  }

  render() {

    const { tasks } = this.state

    return (
      <>
        <GlobalStyle />
        <Header />
        <FormTask
          handleSubmit={this.handleSubmit}
        />
        <div>
          {
            tasks.map(task => (
              <Task
                key={id()}
                title={task.title}
              />
            ))
          }
        </div>
      </>
    )
  }
}


export default App;