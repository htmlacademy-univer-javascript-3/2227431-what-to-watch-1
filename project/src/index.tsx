import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mocks/films';

const PromoFilm = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  released: 2014,
  previewImage: 'img/bg-the-grand-budapest-hotel.jpg',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      promo={PromoFilm}
      films={films}
    />
  </React.StrictMode>,
);
