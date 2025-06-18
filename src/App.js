import logo from './logo.svg';
import './App.css';
import { Button } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ padding: 10 }} />
        <Button
          label="Unlock Achievement"
          onClick={() => console.log('Button Clicked...')}
        />
      </header>
    </div>
  );
}

export default App;
