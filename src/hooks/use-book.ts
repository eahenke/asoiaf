import { useEffect, useState } from 'react';
import { BookWithCharacters } from '../types';
import { extractId } from '../utils/extract-ids';
import useApi from './use-api';
import config from '../config';

export default function useBook(id: string) {
    const api = useApi();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState<BookWithCharacters>();

    useEffect(() => {
        async function fetchBooks() {
            try {
                const book = await api.getBook(id);
                const characters = await Promise.all(
                    book.characters.slice(0, config.charactersPerBook).map((c) => {
                        const id = extractId(c);
                        return api.getCharacter(id);
                    })
                );

                setData({ ...book, characters });
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
