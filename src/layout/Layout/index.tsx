import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  return <section className="layout">{children}</section>;
};

export default Layout;
