import './Card.scss';

const Card = ({ isLoading, setIsLoading, pokemon, setId, getRandomId }) => {
  if (!isLoading) {
    console.log(pokemon.id);
  }

  const handleClick = () => {
    setIsLoading(true);
    setId(getRandomId);
  };

  return (
    <div>
      {isLoading ? (
        <div className='loadingBar'>
          <div className='loadingBar__progress'></div>
        </div>
      ) : (
        <div>
          <article className='card'>
            <div className='card__top'>
              <picture>
                <img src='/assets/icons/bg-pattern-card.svg' alt='' />
              </picture>
            </div>

            <div className='card__body'>
              <section className='pokemon'>
                <picture className='pokemon__image-container'>
                  <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className='pokemon__image'
                  />
                </picture>

                <h2 className='pokemon__name'>{pokemon.name}</h2>
                <p className='pokemon__hp'>HP {pokemon.HP}</p>
                <div className='pokemon__types'>
                  {pokemon.types.map((item) => (
                    <span
                      key={item.type.name}
                      className='pokemon__type'
                      style={{ backgroundColor: `var(--${item.type.name})` }}
                    >
                      {item.type.name}
                    </span>
                  ))}
                </div>
                <div className='pokemon__stats'></div>
              </section>
            </div>
          </article>

          <button onClick={handleClick}>Random Pokémon</button>
        </div>
      )}
    </div>
  );
};

export default Card;
