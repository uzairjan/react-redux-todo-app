import React from 'react';
import { Paper, Grid, TextField, Button} from '@material-ui/core';



const TodoForm = (props) => {
    return(
        <Paper style={{ padding:16, margin:16 }}>
        <Grid container>
          <Grid xs={10} md={10} item style={{ paddingRight:10 }}>
              <TextField 
                fullWidth
                name="todo"
                value={props.todo}
                placeholder="Add a todo"
                onChange={props.handleChange}
                onKeyUp={props.addTodoOnKeyUp}
                />
          </Grid>
          <Grid xs={2} md={2} item>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                onClick={() => props.addTodo(props.todo)}
              >
                Add
              </Button>
          </Grid>
        </Grid>
    </Paper>
    );
}


export default TodoForm;