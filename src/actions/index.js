import * as actionTypes from './types';

export const addTodo =(todo) => {
  
    return {
        type: actionTypes.ADD_TODO,
        todo
    }
}

export const removeTodo = (index) => {
    return {
        type: actionTypes.REMOVE_TODO,
        index
    }
} 


