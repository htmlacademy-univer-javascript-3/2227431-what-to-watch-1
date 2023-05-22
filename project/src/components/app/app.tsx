import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import MyListPage from '../../pages/my-list/my-list-page';
import SignInPage from '../../pages/sign-in/sign-in-page';
import NotFoundPage from '../../pages/not-found/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {AppRoutes, AuthorizationStatus} from './const';
import {Films} from '../../types/film';
import WithNotFound from '../with-not-found/with-not-found';
import AddReviewPage from '../../pages/add-review/add-review-page';
import FilmPage from '../../pages/film/film-page';
import PlayerPage from '../../pages/player/player-page';

type AppProps = {
  promo: {
    name: string;
    genre: string;
    released: number;
    previewImage: string;
    posterImage: string;
  };
  films: Films;
};

function App({promo, films}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Root}
          element={<MainPage promo={promo} films={films}/>}
        >
        </Route>
        <Route path={AppRoutes.AddReview} element={
          <WithNotFound
            render={(film) => <AddReviewPage film={film}/>}
          />
        }
        >
        </Route>
        <Route
          path={AppRoutes.MyList} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyListPage films={films}/>
            </PrivateRoute>
          }
        >
        </Route>
        <Route path={AppRoutes.Film} element={
          <WithNotFound
            render={(film) =>
              <FilmPage film={film}/>}
          />
        }
        >
        </Route>
        <Route path={AppRoutes.Player} element={
          <WithNotFound
            render={(film) =>
              <PlayerPage film={film}/>}
          />
        }
        >
        </Route>
        <Route path={AppRoutes.SignIn} element={<SignInPage/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
