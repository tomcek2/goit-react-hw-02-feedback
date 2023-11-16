import React from 'react';

export const Section = ({ title, children }) => (
  <>
    <h1>{title}</h1>
    {children}
  </>
);
