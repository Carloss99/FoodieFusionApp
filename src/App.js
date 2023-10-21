
import './App.css';
import Main from './components/Main'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <h1>Foodie Fusion</h1>
      <h3>Explore and track all the restaurants around you!</h3>
        <Header />

      <div className='appItemsDiv'>

        <Main />
      </div>

    </div>
  );
}

export default App;
