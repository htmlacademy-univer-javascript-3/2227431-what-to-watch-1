import {useParams} from 'react-router';
import {Film, Films} from '../../types/film';
import AddReviewPage from '../add-review/add-review-page';
import NotFoundPage from '../not-found/not-found-page';

type AddReviewOrNotFoundProps = {
  films: Films;
}

function AddReviewOrNotFound(props: AddReviewOrNotFoundProps): JSX.Element {
  const {films} = props;
  const {id} = useParams<{id: string}>();
  const film: Film | undefined = films.find((element) => element.id === Number(id));

  return (
    film !== undefined ? <AddReviewPage film={film} /> : <NotFoundPage />
  );
}

export default AddReviewOrNotFound;
