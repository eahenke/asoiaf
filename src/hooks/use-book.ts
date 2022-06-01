import { useEffect, useState } from 'react';
import { Book } from '../types';
import useApi from './use-api';

export default function useBook(id: string) {
    const api = useApi();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState<Book>();

    useEffect(() => {
        async function fetchBooks() {
            try {
                const book = await api.getBook(id);
                setData(book);
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
    }, [api, id]);

    return { loading, data, error };
}
