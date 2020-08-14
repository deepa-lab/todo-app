import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyles=()=>{
        return {
            background:'lightblue',
            textDecoration:this.props.todo.completed?'line-through':'none',
            padding:'10px',
            borderBottom:'1px dotted black'
        }
    }
    markComplete=(e)=>{
        console.log(this.props);
    }
    render() {
        const {id,title}=this.props.todo;
        return (
            <div style={this.getStyles()}>
                
            <h3>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
                {title}
                <button type="button" onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
                </h3>
            </div>
        )
    }
}
TodoItem.propTypes={
    todo:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired
}

const btnStyle={
    background:'red',
    color:'white',
    padding:'5px 9px',
    border:'none',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}
export default TodoItem
