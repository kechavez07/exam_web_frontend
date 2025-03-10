import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card2 from '../../../web/web_avanzada/Panes-de-la-Rumi-ahui/panes-de-la-ruminahui-v2/src/components/card/Card2';

function App() {
  const [toyId, setToyId] = useState('');
  const [toy, setToy] = useState(null);

  const handleFetchToy = () => {
    if (!toyId) return;

    fetch(`https://exam-web-backend.onrender.com/toy/${toyId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setToy(data);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="App">
      <nav className="nav">
        <div className="menu-icon">☰</div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </nav>

      <h1>stock</h1>

      <div className="search-container">
        <input 
          type="text" 
          placeholder="Ingresa el ID del juguete"
          value={toyId}
          onChange={(e) => setToyId(e.target.value)}
        />
        <button onClick={handleFetchToy}>Buscar</button>
      </div>

      
      {toy && (
        <div className="card">
          <div className="card-info">
            <h2>{toy.name}</h2>
            <p>{toy.description}</p>
            <p>Precio: {toy.price}</p>
            <p>Stock: {toy.stock}</p>
          </div>
          <div className="card-image">
            <Card2 />
          </div>
        </div>
      )}

      
    </div>
  );
}

export default App;