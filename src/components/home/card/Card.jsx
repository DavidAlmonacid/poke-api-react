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
    <>
      {isLoading ? (
        <div className='loading-bar'>
          <div className='loading-bar__progress'></div>
        </div>
      ) : (
        <>
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

                <div className='pokemon__stats'>
                  {pokemon.stats.map((stat) => (
                    <section className='pokemon__stat' key={stat.name}>
                      <h2 className='pokemon__stat-base'>{stat.base}</h2>
                      <p className='pokemon__stat-name'>
                        {stat.name.includes('-')
                          ? stat.name.replace('-', ' ')
                          : stat.name}
                      </p>
                    </section>
                  ))}
                </div>
              </section>
            </div>
          </article>

          <button className='random-pokemon' onClick={handleClick}>
            Random Pokémon
          </button>
        </>
      )}
    </>
  );
};

export default Card;
