import {Film} from '../../types/film';
import {useParams} from 'react-router';
import {films} from '../../mocks/films';
import NotFoundPage from '../../pages/not-found/not-found-page';

const allFilms = films;

type WithNotFoundProps = {
  render: (film: Film) => JSX.Element;
}

function WithNotFound(props: WithNotFoundProps): JSX.Element {
  const {render} = props;
  const {id} = useParams<{id: string}>();
  const film: Film | undefined = allFilms.find((element: Film) => element.id === Number(id));

  return (
    film !== undefined ? render(film) : <NotFoundPage />
  );
}

export default WithNotFound;
