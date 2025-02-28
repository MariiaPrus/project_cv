import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

function Home() {
  return (
    <Container sx={{ mt: 4 }}>
          <Paper sx={{ p: 3 }}>
              <Typography variant="h3">Прус Марія </Typography>
              <Typography variant="h4">Front-End development</Typography>
        <Typography variant="h5">Моє резюме</Typography>
        <Typography variant="body1">
          Навички:

1.HTML:
Глибоке розуміння семантичної розмітки HTML5.
Вміння створювати доступні та валідні HTML-документи.
2.CSS:
Досвід роботи з CSS3
Розуміння принципів адаптивного дизайну.
Знання CSS-препроцесорів Sass, Less
3.JavaScript:
Знання основ JavaScript ES6+.
Досвід роботи з DOM та асинхронними операціями.
Розуміння принципів ООП та функціонального програмування.
4.React:
Досвід розробки компонентів React.
Розуміння життєвого циклу компонентів.
Знайомство з React Hooks.
Знайомство з Redux або Context API (якщо є досвід).
5.Базові навички:
Розуміння принципів роботи веб-браузерів.
Знайомство з інструментами розробки (DevTools).
Досвід роботи з системою контролю версій Git.
Розуміння принципів адаптивного дизайну.
Знання основ UI/UX.
        </Typography>
      </Paper>
    </Container>
  );
}

export default Home;