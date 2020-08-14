import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state={
        title:''
    }

    onChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''})
    }
    render() {
        return (
            <form style={{display:'flex'}} onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Add todo..." style={{flex:'10'}} value={this.state.title} onChange={this.onChange}/>
                <input type="submit" value="Submit" className="btn" style={{flex:'1'}}/>
            </form>
        )
    }
}
AddTodo.propTypes={
    addTodo:PropTypes.func.isRequired
}
export default AddTodo
