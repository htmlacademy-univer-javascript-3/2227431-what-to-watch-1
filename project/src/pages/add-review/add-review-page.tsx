import {Film, Films} from '../../types/film';
import {useNavigate, useParams} from 'react-router';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../components/app/const';
import AddReviewForm from '../add-review/add-review-form';
import NotFound from '../not-found/not-found-page';

type AddReviewScreenProps = {
  films: Films;
}

function AddReviewPage(props: AddReviewScreenProps): JSX.Element {
  const {films} = props;
  const {id} = useParams<{id: string}>();
  const film: Film | undefined = films.find((element) => element.id === Number(id));
  const navigate = useNavigate();

  if (film !== undefined) {
    return (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="film-page.html" className="breadcrumbs__link">
                    {film.name}
                  </a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link" href="/">Add review</a>
                </li>
              </ul>
            </nav>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar"
                  onClick={() => navigate(AppRoutes.MyList)}
                >
                  <img
                    src="img/avatar.jpg"
                    alt="User avatar"
                    width="63"
                    height="63"
                  />
                </div>
              </li>
              <li className="user-block__item">
                <Link to={AppRoutes.SignIn} className="user-block__link">Sign out</Link>
              </li>
            </ul>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img
              src={film.posterImage}
              alt={`${film.name} poster`}
              width="218"
              height="327"
            />
          </div>
        </div>

        <div className="add-review">
          <AddReviewForm />
        </div>

      </section>
    );
  } else {
    return (
      <NotFound />
    );
  }
}

export default AddReviewPage;
