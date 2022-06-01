import { useEffect, useState } from 'react';
import { Character } from '../types';
import useApi from './use-api';

export default function useCharacter(id: string) {
    const api = useApi();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState<Character>();

    useEffect(() => {
        async function fetchBooks() {
            try {
                const character = await api.getCharacter(id);
                setData(character);
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
