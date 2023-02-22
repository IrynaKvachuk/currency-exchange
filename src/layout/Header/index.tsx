import { Link } from 'react-router-dom';
import Container from '../Container';

const Header: React.FC = () => {
  return (
    <Container>
      <header className="exchange_header d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="exchange_header-logo d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          Currency Exchange
        </Link>
      </header>
    </Container>
  );
};

export default Header;
