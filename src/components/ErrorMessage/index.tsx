import { ErrorData } from '../../features/_common/types';
import Error429 from './Error429';

type Props = {
  errorData: ErrorData;
};

const errorDetails = (errorData: ErrorData) => {
  switch (errorData.status) {
    case 429:
      return <Error429 errorData={errorData} />;
    default:
      return null;
  }
};

const ErrorMessage: React.FC<Props> = (props: Props) => {
  const { errorData } = props;

  return (
    <section className="exchange_error">
      <span className="error-default">Oops! Something went wrong.</span>
      {errorDetails(errorData)}
    </section>
  );
};

export default ErrorMessage;
