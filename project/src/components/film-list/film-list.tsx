import {useState, MouseEvent} from 'react';
import {Films} from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Films;
}

function FilmList(props: FilmListProps): JSX.Element {
  const {films} = props;

  const [activeCard, setActiveCard] = useState({});

  return (
    <div className="catalog__films-list">
      {films.map((film, id) => {
        const keyValue = `${id}`;

        return (
          <article key={keyValue} className="small-film-card catalog__films-card"
            onMouseEnter={({target}: MouseEvent<HTMLElement>) => {
              setActiveCard(film);
            }}
            onMouseLeave={({target}: MouseEvent<HTMLElement>) => {
              setActiveCard([{}]);
            }}
          >

            <FilmCard
              film={film}
              isActive={film === activeCard}
            />

          </article>
        );
      })}
    </div>
  );
}

export default FilmList;
