import { useEffect, useState } from 'react';
import Card from './card/Card';
import './Home.scss';

const Home = () => {
  const [pokemon, setPokemon] = useState({});
  const [id, setId] = useState(4);
  const API = `https://pokeapi.co/api/v2/pokemon/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
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

    fetchData();
  }, []);

  return (
    <main className='main-content'>
      <Card pokemon={pokemon} />
    </main>
  );
};

export default Home;
