import Container from '../../layout/Container';
import CurrencyInput from '../CurrencyInput';

const ExchangeCounter = () => {
  return (
    <Container>
      <section className="exchange_counter">
        <CurrencyInput label="Change" name="CurrencyToChange" />
        <button type="button" className="btn-exchange-swap btn btn-dark">
          &#8644;
        </button>
        <CurrencyInput label="Get" name="CurrencyToGet" />
      </section>
    </Container>
  );
};

export default ExchangeCounter;
