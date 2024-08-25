import React, { createContext, useState } from 'react';

// Create the context
export const IdContext = createContext();

// Create a provider component
export const IdProvider = ({ children }) => {
  const [id, setId] = useState(null);

  return (
    <IdContext.Provider value={{ id, setId }}>
      {children}
    </IdContext.Provider>
  );
};
