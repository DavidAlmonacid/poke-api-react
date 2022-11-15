import './Card.scss';

const Card = ({ pokemon }) => {
  return (
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

          <h2 className='pokemon__name'></h2>
          <p className='pokemon__hp'></p>
          <div className='pokemon__types'></div>
          <div className='pokemon__stats'></div>
        </section>
      </div>
    </article>
  );
};

export default Card;
