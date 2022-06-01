import React from 'react';
import { Books, BookInfo, CharacterInfo } from '../components';

const routes = [
    {
        name: 'Books',
        path: '/',
        component: Books
    },
    {
        name: 'Book Info',
        path: '/books/:bookId',
        component: BookInfo
    },
    {
        name: 'Character Info',
        path: '/books/:bookId/char/:charId',
        component: CharacterInfo
    },
    {
        name: '404',
        path: '*',
        component: () => (
            <main>
                <p>Page not found</p>
            </main>
        )
    }
];

export default routes;
