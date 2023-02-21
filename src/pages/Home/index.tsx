import CurrencyTable from '../../components/CurrencyList';
import ExchangeCounter from '../../components/ExchangeCounter';
import Layout from '../../layout/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="exchange_home-page row">
        <CurrencyTable />
        <ExchangeCounter />
      </div>
    </Layout>
  );
};

export default Home;
