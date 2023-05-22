import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  ERRORS_COUNT: 3,
};

const PromoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: '2014',
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App errorsCount={Setting.ERRORS_COUNT} promoFilm={PromoFilm}/>
  </React.StrictMode>,
);
