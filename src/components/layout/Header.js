import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Header() {
    return (
        
        <header style={styles}>
           
            <h1 style={{color:'white'}}>TodoList</h1>
            
            <NavLink to="/" exact activeStyle={{color:'lightgreen'}}>Home</NavLink> | <NavLink to="/about" exact activeStyle={{color:'lightblue'}}>About</NavLink>
           
           
        </header>
        
    )
}

const styles={
    margin:'0px',
    background:'#333',
    textAlign:'center',
    padding:'10px'
}