import './App.css';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';


function App() {
  return (
    <>
      <Navbar />
      <div id="app">
        <Home />
      </div>
    </>
  );
}

export default App;
