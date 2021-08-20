import React from 'react';
import { Grid } from '@material-ui/core';
import ToDo from './Todo';
import TodoForm from './TodoForm'

export const ACTIONS ={
    INSERT : 'INSERT',
    EDIT:'EDIT',
    UPDATE:'UPDATE',
    DELETE : 'DELETE' 
}

// Main Todo component container, contains the reducer state
const TodoComponent = () => {
    const [state,dispatch] = React.useReducer(reducer,{todoList:[],selectedTodo:{title:'',content:''}})

    return <Grid container justify='center' spacing={2} alignContent='center'>
        <Grid item xs={12}>
            <TodoForm dispatch={dispatch}  selectedTodo={state.selectedTodo} />

        </Grid>
        <Grid item container xs={10} spacing={3}>
            {state.todoList.map( i => <ToDo todo={i} dispatch={dispatch} /> )}

        </Grid>
    </Grid>
}

// Custome reducer to handle Actions
const reducer = (state,action) => {
    switch(action.type){
        case ACTIONS.INSERT : return {...state, todoList:[...state.todoList,action.payload],selectedTodo:{title:'',content:''}}
        case ACTIONS.EDIT : return {...state,selectedTodo: {...action.payload}}
        case ACTIONS.UPDATE :{
            const newList = state.todoList.map(i => i.id === action.payload.id? action.payload : i);
            return {...state, todoList : newList,selectedTodo:{title:'',content:''}}
        }
        case ACTIONS.DELETE : {
            const newList = state.todoList.filter( i => i.id !== action.payload.id);
            return {...state,todoList : newList,selectedTodo:{title:'',content:''}}
        }
        default: return state
    }
}

export default TodoComponent;