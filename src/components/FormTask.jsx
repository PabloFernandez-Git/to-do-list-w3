import React from 'react'
import styled from 'styled-components'
import allColors from '../styles/colors'
import {generate as id} from 'shortid'

const Input = styled.input`
    border: none;
    border: 1px solid ${allColors.border};
    margin-top: 45px;
    width: 25rem;
    height: 2rem;
`

const Button = styled.button`
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    width: 10rem;
    height: 2rem;
    color: #fff;
    border: 'black';
    background-color: ${allColors.headerBackgroundColor};
    border-radius: 10px;

    :hover {
        color: ${allColors.headerBackgroundColor};
        background-color: #fff;
    }
`


const FormTask = () => {
    return (
        <form>
            <Input placeholder="Ingrese una tarea"></Input>
            <Button>Agregar tarea</Button>
        </form>
    )
}

export default FormTask;


// Form que contendra <input> y <button> para poder ingresar tareas