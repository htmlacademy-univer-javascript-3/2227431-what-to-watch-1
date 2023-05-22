import { Link } from 'react-router-dom';
import { AppRoutes } from '../../components/app/const';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to={AppRoutes.Root}>Go to the main page</Link>
    </>
  );
}

export default NotFoundPage;
