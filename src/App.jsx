import { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.scss';

function App() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        console.log(data);

        setPokemon({
          image: data.sprites.other['official-artwork'].front_default,
          name: data.name,
          HP: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          specialAttack: data.stats[3].base_stat,
          specialDefense: data.stats[4].base_stat,
          types: data.types,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(4);
  }, []);

  return (
    <main className='main-content'>
      <Card pokemon={pokemon} />
    </main>
  );
}

export default App;
