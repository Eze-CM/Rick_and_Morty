import './App.css'

import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import characters from './data.js';

function App() {
  return (
    <>
      <div className='App'>
         <h1>Rick and Morty API</h1>
         <Nav/>
         <Cards characters={characters} />
      </div>
    </>
  )
}

export default App
