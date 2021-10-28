import './App.css';
import Clock from './components/Clock';
import Menu from './components/Menu';
import profile from './assets/img/Profile.png'

function App() {
  return (
      <div className="App">
        <Menu className="App-Menu"/>
        <Clock />
        <img alt="profile" src={ profile }/>
      </div>
  );
}

export default App;
