import { Book } from '../types';

const BASE_URL = 'https://www.anapioficeandfire.com/api';
async function get<T>(url: string): Promise<T> {
    const res = await fetch(`${BASE_URL}/${url}`);
    return res.json();
}

export function getBooks(): Promise<Book[]> {
    return get('books');
}
