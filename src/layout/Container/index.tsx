import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props): JSX.Element => {
  return <section className="exchange-container container">{children}</section>;
};

export default Container;
