import React from 'react';
import Header from './components/layout/Header'

import './App.css';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Todos from './components/Todos'
import About from './components/About'
import AddTodo from './components/AddTodo';
import axios from 'axios';

//const uuid=require("uuid");


export class App extends React.Component{
 constructor(props){
   super(props);
  this.state={
    todos:[
      /*   {
            id:uuid.v4(),
            title:'Cook dinner',
            completed:true
        }
        ,
        {
            id:uuid.v4(),
            title:'Do the dishes',
            completed:false
        },
        {
            id:uuid.v4(),
            title:'Clean the table',
            completed:true
        },*/
    ] 
}
 }
componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=>this.setState({'todos':res.data}))
}

 markComplete=(id)=>{
   this.setState({todos:this.state.todos.map((todo)=>{
     if(todo.id===id)
     {
       todo.completed=!todo.completed;
     }
     return todo;
   })});
 }

 delTodo=(id)=>{
 /*  this.setState({todos:[...this.state.todos.filter(todo=>
    todo.id!==id) ]}) */
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res=>this.setState({todos:[...this.state.todos.filter(todo=>
    todo.id!==id) ]}))
}
addTodo=(title)=>{
  /* const newTodo={
    //id:uuid.v4(),
    title,
    completed:false
  } */
  axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed:false}).then(res=>{this.setState({todos:[...this.state.todos,res.data]})})
  //this.setState({todos:[...this.state.todos,newTodo]})
}
  render(){
    //console.log(this.state.todos);
  return (
    <Router>
    
      <div className="container">
      <Header/>  
      
      <Route exact path="/" render={props=>( 
         <React.Fragment>    
           <AddTodo addTodo={this.addTodo}/> 
     
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </React.Fragment>
        )} />     
     
      <Route path="/about" component={About}/>
      </div>
    
    </Router>
  );
}
}

export default App;
