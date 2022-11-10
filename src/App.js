import './App.css';
import Greeting from './components/Greeting/Greeting';
import SongList from './components/Songs/SongList';


function App() {
  return (
    <div>
      <p>The greeting is </p>
     <Greeting name="Vanessa" age="27" />
     <Greeting name="James" age="53" />
     <Greeting name="Liz" age="32" />
     <SongList />
    </div>
  );
}

export default App;
//Greeting({name: Matt}); this is what line 8 is doing 