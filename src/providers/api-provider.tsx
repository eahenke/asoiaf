import React from 'react';
import * as api from '../api';
import { Api } from '../types';

export const ApiContext = React.createContext<Api | null>(null);

type ApiProviderProps = {
    children: React.ReactNode;
};

export default function ApiProvider({ children }: ApiProviderProps): JSX.Element {
    return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}
