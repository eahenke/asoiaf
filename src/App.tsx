import React from 'react';
import './App.css';
import Books from './components/books';
import { ApiProvider } from './providers';

function App() {
    return (
        <ApiProvider>
            <Books />
        </ApiProvider>
    );
}

export default App;
