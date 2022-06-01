import { useEffect, useState } from 'react';
import { Book } from '../types';
import useApi from './use-api';

export default function useBooks() {
    const api = useApi();
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
    }, [api]);

    return { loading, data, error };
}
