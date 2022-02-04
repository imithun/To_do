import logo from './logo.svg';
import './App.css';
import TravelList from './components/travel/travelList';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <TravelList/>
    </div>
  );
}

export default App;
