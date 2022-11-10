import './App.css';
import Greeting from './components/Greeting/Greeting';

function App() {
  return (
    <div className="App">
      <p>The greeting is </p>
     <Greeting name="Vanessa" age="27" />
    </div>
  );
}

export default App;
//Greeting({name: Matt}); this is what line 8 is doing 