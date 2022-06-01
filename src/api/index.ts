import { Book, Character } from '../types';
import { extractId } from '../utils/extract-ids';
import * as cache from './cache';

export const BASE_URL = 'https://www.anapioficeandfire.com/api';

async function get<T>(url: string): Promise<T> {
    const res = await fetch(url);

    if (res.status >= 400) throw new Error('Failed to fetch');

    return res.json();
}

export async function getBooks(): Promise<Book[]> {
    const books = await get<Book[]>(`${BASE_URL}/books?pageSize=20`);
    books.forEach((book) => cache.addBook(extractId(book.url), book));

    return books;
}

export async function getBook(id: string): Promise<Book> {
    const cachedBook = cache.getBook(id);
    if (cachedBook) return Promise.resolve(cachedBook);
    const book = await get<Book>(`${BASE_URL}/books/${id}`);
    cache.addBook(id, book);

    return book;
}

export async function getCharacter(id: string): Promise<Character> {
    const cachedCharacter = cache.getCharacter(id);
    if (cachedCharacter) return Promise.resolve(cachedCharacter);
    const character = await get<Character>(`${BASE_URL}/characters/${id}`);
    cache.addCharacter(id, character);

    return character;
}
