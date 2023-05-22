import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import MyListPage from '../../pages/my-list/my-list-page';
import SignInPage from '../../pages/sign-in/sign-in-page';
import NotFoundPage from '../../pages/not-found/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {AppRoutes, AuthorizationStatus} from './const';
import {Films} from '../../types/film';
import AddReviewOrNotFound from '../../pages/add-review/add-review-or-not-found';
import MovieOrNotFound from '../../pages/film/film-or-not-found';
import PlayerOrNotFound from '../../pages/player/player-or-not-found';

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
        <Route path={AppRoutes.AddReview} element={<AddReviewOrNotFound films={films}/>}></Route>
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyListPage films={films}/>
            </PrivateRoute>
          }
        >
        </Route>
        <Route path={AppRoutes.Film} element={<MovieOrNotFound films={films}/>}></Route>
        <Route path={AppRoutes.Player} element={<PlayerOrNotFound films={films}/>}></Route>
        <Route path={AppRoutes.SignIn} element={<SignInPage/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
