import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ApiProvider } from './providers';
import routes from './routes';

function App() {
    return (
        <ApiProvider>
            <BrowserRouter>
                <Routes>
                    {routes.map(({ path, component: Component }, idx) => {
                        return <Route key={idx} path={path} element={<Component />}></Route>;
                    })}
                </Routes>
            </BrowserRouter>
        </ApiProvider>
    );
}

export default App;
