import {useParams} from 'react-router';
import {Film, Films} from '../../types/film';
import NotFoundPage from '../not-found/not-found-page';
import PlayerPage from '../player/player-page';

type PlayerOrNotFoundProps = {
  films: Films;
}

function PlayerOrNotFound(props: PlayerOrNotFoundProps): JSX.Element {
  const {films} = props;
  const {id} = useParams<{id: string}>();
  const film: Film | undefined = films.find((element) => element.id === Number(id));

  return (
    film !== undefined ? <PlayerPage film={film} /> : <NotFoundPage />
  );
}

export default PlayerOrNotFound;
