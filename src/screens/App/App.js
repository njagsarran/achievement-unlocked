import React from 'react';
import './App.css';
import { Button } from '../../components';

const App = () => {
  return (
    <div className="App">
      <div style={{ padding: 10 }} />
      <Button
        label="Unlock Achievement"
        onClick={() => console.log('Button Clicked...')}
      />
    </div>
  );
}

export default App;
