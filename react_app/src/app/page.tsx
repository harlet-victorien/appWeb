'use client';
import React from 'react';
import './App.css';
import { GlobalLayout } from './GlobalLayout';
import { Hello } from './Hello';
import { Button } from '../components/Button';

function App() {
  return (
    <GlobalLayout>
      <Hello name="World">Welcome to the Book App!</Hello>
      <Button onClick={() => alert('Button Clicked!')}>Click Me</Button>
    </GlobalLayout>
  );
}

export default App;