import React, { useState } from 'react';
import { Container, List, ListItem, TextField, Button } from '@mui/material';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <TextField label="Нове TODO" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <Button onClick={addTodo}>Додати</Button>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index}>{todo}</ListItem>
        ))}
      </List>
    </Container>
  );
}

export default TodoList;