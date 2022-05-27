import { createContext, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  let sharedState = {
    pageRef: null,
    pageControlRef: null,
  }
  
  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}