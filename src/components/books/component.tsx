import React from 'react';
import { Link } from 'react-router-dom';
import { useBooks } from '../../hooks';
import { Book } from '../../types';
import { extractId } from '../../utils/extract-ids';
import { Breadcrumb, DataComponent, SortableList } from '../common';

const getName = (book: Book): string => book.name;
const sortById = (a: Book, b: Book) => {
    console.log({ a, b });
    return parseInt(extractId(a.url), 10) - parseInt(extractId(b.url), 10);
};

export default function Books() {
    const { data: books, loading, error } = useBooks();
    return (
        <main>
            <Breadcrumb />
            <DataComponent loading={loading} error={error}>
                {books.length ? (
                    <SortableList
                        onSort={sortById}
                        title="Books"
                        items={books}
                        keyExtractor={getName}
                        valueExtractor={(book: Book) => <Link to={`/books/${extractId(book.url)}`}>{book.name}</Link>}
                    />
                ) : (
                    <p>No books found</p>
                )}
            </DataComponent>
        </main>
    );
}
