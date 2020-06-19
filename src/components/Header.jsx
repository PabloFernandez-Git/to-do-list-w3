import React from 'react'
import styled from 'styled-components'
import allColors from '../styles/colors'

const Navbar = styled.div`
    background-color: ${allColors.headerBackgroundColor};
    color: #fff;
    line-height: 40px;
    padding: 10px;
    width: 90%;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
`


const Header = () => {
    return (
        <Navbar>To do list!</Navbar>
    )
}

export default Header;


// Header con el nombre de la app