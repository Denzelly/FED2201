import './App.css';
import ButtonCounter from './components/ButtonCounter';

function App() {
  return (
    <div className="App">
      <h1>Hello FED 2201</h1>

      <ButtonCounter increment="" decrement=""/>
      <ButtonCounter increment="Plus 1" decrement="Minus One"/>
    </div>
  );
}

export default App;
