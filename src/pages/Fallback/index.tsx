import { Link } from 'react-router-dom';
import Container from '../../layout/Container';
import Layout from '../../layout/Layout';

const Fallback: React.FC = () => {
  return (
    <Layout>
      <Container classList="exchange_fallback">
        <h1 className="exchange_fallback-title">404</h1>
        <p className="exchange_fallback-text">Ooops.. Something went wrong..</p>
        <Link className="exchange_fallback-link" to="/">
          Home page
        </Link>
      </Container>
    </Layout>
  );
};

export default Fallback;
