import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import { BookInfo } from './components';
import Books from './components/books';
import { ApiProvider } from './providers';

function App() {
    return (
        <ApiProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Books />}></Route>
                    <Route path="/books/:id" element={<BookInfo />}></Route>
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
