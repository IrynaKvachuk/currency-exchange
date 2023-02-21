import { Link } from 'react-router-dom';
import { ErrorData } from '../../features/_common/types';

type Props = {
  errorData: ErrorData;
};

const Error429: React.FC<Props> = (props: Props) => {
  const { errorData } = props;
  const { statusText, data } = errorData;

  return (
    <section className="error-429">
      <h2 className="error-header">{statusText}</h2>
      <span>{data}</span>
      <span>
        Try to <Link to="/">reload page</Link>
      </span>
    </section>
  );
};

export default Error429;
