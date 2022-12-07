import { useEffect, useState } from 'react';
import Card from './card/Card';
import './Home.scss';

const Home = () => {
  const getRandomId = () => {
    const min = 0;
    const max = 906;
    let randomId = Math.round(Math.random() * (max - min)) + min;

    if (randomId === min) {
      randomId++;
    } else if (randomId === max) {
      randomId--;
    }

    return randomId;
  };

  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState(getRandomId);
  const API = `https://pokeapi.co/api/v2/pokemon/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();

        setPokemon({
          id: data.id,
          image: data.sprites.other['official-artwork'].front_default,
          name: data.name,
          HP: data.stats[0].base_stat,
          stats: [
            { name: data.stats[1].stat.name, base: data.stats[1].base_stat },
            { name: data.stats[3].stat.name, base: data.stats[3].base_stat },
            { name: data.stats[2].stat.name, base: data.stats[2].base_stat },
            { name: data.stats[4].stat.name, base: data.stats[4].base_stat },
          ],
          types: data.types,
        });

        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <main className='main-content'>
      <Card
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        pokemon={pokemon}
        setId={setId}
        getRandomId={getRandomId}
      />
    </main>
  );
};

export default Home;
