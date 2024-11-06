'use client';
import { useState } from 'react';
import './App.css';
import { GlobalLayout } from './GlobalLayout';
import { Hello } from './Hello';
import { Button } from '../components/Button';


function App() {
  const [name, setName] = useState<string>('Gérald')
  const [newName, setNewName] = useState<string>('')

  const onValidate = () => {
    setName(newName)
    setNewName('')
  }

  return (
    <GlobalLayout>
      <Hello name={name}>How are you ?</Hello>
      <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      <Button onClick={onValidate}>Ok</Button>
    </GlobalLayout>
  );
}

export default App;
