import React from 'react';
import { Link } from 'react-router-dom';
import { useBooks } from '../../hooks';
import { extractBookId } from '../../utils/extract-ids';
import { Breadcrumb } from '../common';

export default function Books() {
    const { data, loading, error } = useBooks();

    if (loading) return <section>Loading...</section>;
    if (error) return <section>Error! {error}</section>;

    return (
        <main>
            <Breadcrumb />
            <section>
                <ul>
                    {data.map((book) => {
                        const bookId = extractBookId(book.url);
                        return (
                            <li key={book.name}>
                                <Link to={`/books/${bookId}`} key={bookId}>
                                    {book.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </main>
    );
}
