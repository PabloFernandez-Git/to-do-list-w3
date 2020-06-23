import React from 'react'
import styled from 'styled-components'
import allColors from '../styles/colors'


const TaskContainer = styled.div`
    display: grid;
    grid-template-columns: 30px 1fr 50px;
    justify-items: start;
    align-items: center;
    box-sizing: border-box;
    padding: 0 1.5rem;    
    width: 100%;
    max-width: 25rem;
    border: 1px solid ${allColors.border};
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 20px;
`

const TaskText = styled.p`
    color: ${allColors.font};
`

const TaskButton = styled.button`
    color: ${allColors.deleteButton};
    border: 1px solid ${allColors.deleteButton};
    border-radius: 5px;
    background-color: transparent;
    width: 5rem;
    height: 1.5rem;
    margin-left: -20px;

    :hover {
        color: #fff;
        background-color: ${allColors.deleteButton};
    }
`


const Task = ({ title }) => {
    return (
        <TaskContainer>
            <input
                type="checkbox"
            />
            <TaskText>{title}</TaskText>
            <TaskButton>Borrar</TaskButton>
        </TaskContainer>
    )
}

export default Task;


/* Componente que contendra la lista de tareas que vayamos agregando.
Tendra un 'checkbox' para tachar la tarea y un boton para eliminarla.

*/