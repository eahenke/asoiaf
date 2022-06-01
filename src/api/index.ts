import { Book, Character } from '../types';

export const BASE_URL = 'https://www.anapioficeandfire.com/api';

async function get<T>(url: string): Promise<T> {
    const res = await fetch(url);
    return res.json();
}

export function getBooks(): Promise<Book[]> {
    return get<Book[]>(`${BASE_URL}/books`);
}

export function getBook(id: string): Promise<Book> {
    return get<Book>(`${BASE_URL}/books/${id}`);
}

export function getCharacter(id: string): Promise<Character> {
    return get<Character>(`${BASE_URL}/characters/${id}`);
}
