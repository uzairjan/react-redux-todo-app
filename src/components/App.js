import React from 'react';
import { Grid } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../actions';
import TodosList from './TodosList';
import TodoForm from './TodoForm';

class App extends React.Component {
    state = {
      todo: '',
    }
    handleChange =(event) => {
      this.setState({[event.target.name]: event.target.value});
    }

    addTodo = (todo) => {
      if (todo !== '') {        
        this.props.addTodo(todo);
        this.setState({todo:''});
      }
    }
    
    addTodoOnKeyUp = event => {
      if (event.which === 13 || event.keyCode === 13) {
        this.addTodo(this.state.todo);
      }
    }

  render(){
    const { todo } = this.state;
    const { todos } = this.props;
    return (
      <Grid container alignItems="center" justify="center" >
        <Grid  md={6} xs={12} sm={12} item>
          <TodoForm handleChange={this.handleChange} addTodo={this.addTodo} todo={todo} addTodoOnKeyUp={this.addTodoOnKeyUp} />
          <TodosList todos={todos} removeTodo={this.props.removeTodo} todo={todo} />
        </Grid>
      </Grid>
      );
  }
}

const mapStateToProps = (state) => {
    return  {
      todos : state.todos
    }
}

const mapDispatchToProps =(dispatch) => {
  return bindActionCreators({addTodo, removeTodo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
