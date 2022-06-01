import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './components/books';
import { ApiProvider } from './providers';

function App() {
    return (
        <ApiProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Books />}></Route>
                    <Route
                        path="*"
                        element={
                            <main>
                                <p>404</p>
                            </main>
                        }
                    ></Route>
                </Routes>
            </BrowserRouter>
        </ApiProvider>
    );
}

export default App;
