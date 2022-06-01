import { Book, Character } from '../types';

type Cache = {
    books: Record<string, Book>;
    characters: Record<string, Character>;
};

const cache: Cache = {
    books: {},
    characters: {}
};

export const getBooks = () => cache.books;
export const getBook = (id: string) => cache.books[id];
export const addBook = (id: string, book: Book): void => {
    cache.books[id] = book;
};
export const getCharacter = (id: string) => cache.characters[id];
export const addCharacter = (id: string, character: Character): void => {
    cache.characters[id] = character;
};
