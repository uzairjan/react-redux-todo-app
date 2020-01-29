import React from 'react';
import {Paper, List, ListItem, ListItemText, IconButton, ListItemSecondaryAction, Checkbox } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';

const TodosList = (props) => {
    return(
        <Paper style={{ padding:5, margin:16 }}>
        <List>
        {
          (props.todos.length > 0) ? props.todos.map((todo, index) => {
            return (
              <ListItem key={index}>
                  <Checkbox disableRipple />
                  <ListItemText primary={todo} />
                  <ListItemSecondaryAction>
                      <IconButton aria-label="Delete a todo" onClick={() => props.removeTodo(index)} >
                          <DeleteOutlined />
                      </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                    )
                  }
            ) : "yeahy no work todo!"
        }
      </List>
      </Paper>
    );
}

export default TodosList;