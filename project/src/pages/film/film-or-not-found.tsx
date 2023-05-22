import {useParams} from 'react-router';
import {Film, Films} from '../../types/film';
import FilmPage from './film-page';
import NotFoundPage from '../not-found/not-found-page';

type FilmOrNotFoundProps = {
  films: Films;
}

function FilmOrNotFound(props: FilmOrNotFoundProps): JSX.Element {
  const {films} = props;
  const {id} = useParams<{id: string}>();
  const film: Film | undefined = films.find((element) => element.id === Number(id));

  return (
    film !== undefined ? <FilmPage film={film} /> : <NotFoundPage />
  );
}

export default FilmOrNotFound;
