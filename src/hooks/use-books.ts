import { useEffect, useState } from 'react';
import * as api from '../api';
import { Book } from '../types';

export default function useBooks() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState<Book[]>([]);

    useEffect(() => {
        async function fetchBooks() {
            try {
                const books = await api.getBooks();
                setData(books);
                setError('');
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchBooks();
    }, []);

    return { loading, data, error };
}
