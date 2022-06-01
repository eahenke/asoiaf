import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import { Books, BookInfo, CharacterInfo } from './components';
import { ApiProvider } from './providers';

function App() {
    return (
        <ApiProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Books />}></Route>
                    <Route path="/books/:id" element={<BookInfo />}></Route>
                    <Route path="/char/:id" element={<CharacterInfo />}></Route>
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
