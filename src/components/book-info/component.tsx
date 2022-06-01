import React from 'react';
import { useParams } from 'react-router-dom';
import { useBook } from '../../hooks';
import { Breadcrumb } from '../common';

export default function BookInfo(): JSX.Element {
    let { bookId } = useParams();
    const { data: book, loading, error } = useBook(bookId || '');

    if (loading) return <section>Loading...</section>;
    if (error) return <section>Error: {error}</section>;
    if (!book) return <section>No book found</section>;
    return (
        <main>
            <Breadcrumb />
            <section>
                <dl>
                    <dt>Title</dt>
                    <dd>{book?.name}</dd>
                    <dt>authors</dt>
                    <dd>{book.authors.join(', ')}</dd>
                    <dt>Pages</dt>
                    <dd>{book.numberOfPages}</dd>
                    <dt>Released</dt>
                    <dd>{book.released}</dd>
                    <dt>Characters</dt>
                    <dd>{book.characters.length}</dd>
                </dl>
            </section>
        </main>
    );
}
