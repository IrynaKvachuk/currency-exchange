import Footer from './layout/Footer';
import Header from './layout/Header';
import Pages from './pages';
import './styles/index.scss';

const App: React.FC = () => {
  return (
    <main data-testid="main">
      <Header />
      <Pages />
      <Footer />
    </main>
  );
};

export default App;
