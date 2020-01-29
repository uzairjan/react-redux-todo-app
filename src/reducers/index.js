import { combineReducers } from 'redux';
import * as actionTypes from '../actions/types';


const todo_reducer = (todos = [], action) => {
    switch(action.type){
        case actionTypes.ADD_TODO:
            let todosList = [action.todo, ...todos];
            return todosList;
        case actionTypes.REMOVE_TODO:
             let newTodos = todos.filter((todo, idx) => idx !== action.index);
                return newTodos;
        default:
            return todos;
    }
}

const rootReducer = combineReducers({
    todos:todo_reducer,
});


export default rootReducer;