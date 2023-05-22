import MainPage from '../../pages/main-page/main-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from './const';
import AddReviewPage from '../../pages/add-review/add-review-page';
import MyListPage from '../../pages/my-list/my-list-page';
import MoviePage from '../../pages/film/movie-page';
import PlayerPage from '../../pages/player/player-page';
import SignInPage from '../../pages/sign-in/sign-in-page';
import NotFoundPage from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  errorsCount: number;
  promoFilm: {
    title: string;
    genre: string;
    releaseDate: string;
  };
};

function App({errorsCount, promoFilm}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Root}
          element={<MainPage errorsCount={errorsCount} promoFilm={promoFilm}/>}
        >
        </Route>
        <Route path={AppRoutes.AddReview} element={<AddReviewPage/>}></Route>
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListPage/>
            </PrivateRoute>
          }
        >
        </Route>
        <Route path={AppRoutes.Film} element={<MoviePage/>}></Route>
        <Route path={AppRoutes.Player} element={<PlayerPage/>}></Route>
        <Route path={AppRoutes.SignIn} element={<SignInPage/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
