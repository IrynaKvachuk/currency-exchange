import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  return <section className="exchange_layout container-fluid">{children}</section>;
};

export default Layout;
