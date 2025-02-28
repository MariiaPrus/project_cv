import React, { useState } from 'react';
import { Container, TextField, Button, Paper, Typography } from '@mui/material';

function ApiSearch() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const searchApi = async () => {
    const response = await fetch(`https://swapi.dev/api/${query}`);
    const data = await response.json();
    setResult(data);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <TextField label="Запит" value={query} onChange={(e) => setQuery(e.target.value)} />
      <Button onClick={searchApi}>Пошук</Button>
      {result && (
        <Paper sx={{ mt: 2, p: 2 }}>
          <Typography component="pre">{JSON.stringify(result, null, 2)}</Typography>
        </Paper>
      )}
    </Container>
  );
}

export default ApiSearch;