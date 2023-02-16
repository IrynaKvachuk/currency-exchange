import Container from '../Container';

const Header: React.FC = () => {
  return (
    <Container>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          Currency Exchange
        </a>
      </header>
    </Container>
  );
};

export default Header;
