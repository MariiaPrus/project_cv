import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import TodoList from './components/TodoList';
import ApiSearch from './components/ApiSearch';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/api" element={<ApiSearch />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
