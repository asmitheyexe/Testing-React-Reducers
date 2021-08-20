import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react';
import { ACTIONS } from './TodoComponent';



// Form input for Todos
const TodoForm = ({dispatch,selectedTodo}) => {
    const [formData, setFormData] = React.useState({title: selectedTodo.title, content:selectedTodo.content})

    React.useEffect(()=>{
        setFormData(selectedTodo)
    },[selectedTodo])

    const handleSumbit = (e) => {
        e.preventDefault();
        if(formData.title === '' || formData.content === '') return
        const todo = {id:selectedTodo.id?selectedTodo.id: new Date().getTime() , title: formData.title,content:formData.content};
        dispatch({type:selectedTodo.id?ACTIONS.UPDATE:ACTIONS.INSERT,payload:todo});
    }

    return <Grid container justifyContent='center'>
        <form onSubmit={handleSumbit}>
            <Grid item xs={12}>{selectedTodo.id? 'Edit Todo' : 'Add New Todo'}</Grid>
            <Grid item xs>
                <TextField id="standard-basic" label="Title" error={formData.title === '' && selectedTodo.id}  onChange={ (e) => setFormData({...formData, title:e.target.value})} value={formData.title} />

            </Grid>
            <Grid item xs>

                <TextField id="description" label="Description" error={formData.content === '' && selectedTodo.id} onChange={ (e) => setFormData({...formData, content:e.target.value})} value={formData.content} />

            </Grid>
            <Grid item xs>
                <Button type="submit" disabled={formData.title === '' || formData.content === ''}> {selectedTodo.id? 'Edit' : 'Add'} </Button>

            </Grid>
        </form>
        
    </Grid> 
}

export default TodoForm;