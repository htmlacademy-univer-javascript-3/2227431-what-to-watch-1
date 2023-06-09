import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type FilmCardScreenProps = {
  film: Film;
  isActive: boolean;
}

function FilmCard(props: FilmCardScreenProps): JSX.Element {
  const {film, isActive} = props;
  const {name, previewImage, previewVideoLink} = film;

  return (
    <>
      <Link to={`/films/${film.id}`}>
        <div className="small-film-card__image">
          <VideoPlayer src={previewVideoLink} previewImage={previewImage} autoPlay={false} muted isActive={isActive}/>
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </>
  );
}

export default FilmCard;
