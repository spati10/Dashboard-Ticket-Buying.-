import React from 'react';
import Sidebar from './Sidebar1';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default Layout;
