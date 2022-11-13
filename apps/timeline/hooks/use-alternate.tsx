import { createContext, useContext, type ReactNode } from 'react';

export interface AlternateProviderProps {
  children: ReactNode;
  alternate: boolean;
}

const AlternateContext = createContext<boolean>(false);

export const AlternateProvider = ({ children, alternate }: AlternateProviderProps) => (
  <AlternateContext.Provider value={alternate}>{children}</AlternateContext.Provider>
);

export const AlternateConsumer = AlternateContext.Consumer;

export const useAlternate = () => useContext(AlternateContext);
