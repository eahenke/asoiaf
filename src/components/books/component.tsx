import React from 'react';
import { useBooks } from '../../hooks';

export default function Books() {
    const { data, loading, error } = useBooks();

    if (loading) return <section>Loading...</section>;
    if (error) return <section>Error! {error}</section>;

    return (
        <section>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </section>
    );
}
