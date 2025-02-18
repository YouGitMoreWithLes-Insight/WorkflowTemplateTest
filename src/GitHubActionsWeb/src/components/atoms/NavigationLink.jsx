import React from 'react';

const NavigationLink = ({ href, children }) => {
  return <li><a href={href}>{children}</a></li>;
};

export default NavigationLink;
