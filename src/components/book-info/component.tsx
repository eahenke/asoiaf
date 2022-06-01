import React from 'react';
import { Link, useParams } from 'react-router-dom';
import config from '../../config';
import { useBook } from '../../hooks';
import { Character } from '../../types';
import { getName } from '../../utils/character';
import { extractId } from '../../utils/extract-ids';
import { Breadcrumb, DataComponent, SortableList } from '../common';

const sortChars = (a: Character, b: Character) => {
    return parseInt(extractId(a.url), 10) - parseInt(extractId(b.url), 10);
};

export default function BookInfo(): JSX.Element {
    let { bookId } = useParams();
    const { data: book, loading, error } = useBook(bookId || '');

    return (
        <main>
            <Breadcrumb />
            <DataComponent loading={loading} error={error}>
                {book ? (
                    <>
                        <dl>
                            <dt>Title</dt>
                            <dd>{book?.name}</dd>
                            <dt>authors</dt>
                            <dd>{book.authors.join(', ')}</dd>
                            <dt>Pages</dt>
                            <dd>{book.numberOfPages}</dd>
                            <dt>Released</dt>
                            <dd>{book.released}</dd>
                        </dl>
                        <SortableList
                            title={`Characters (first ${config.charactersPerBook})`}
                            items={book.characters}
                            onSort={sortChars}
                            keyExtractor={(c: Character) => extractId(c.url)}
                            valueExtractor={(c: Character) => (
                                <Link to={`/books/${bookId}/char/${extractId(c.url)}`}>
                                    {extractId(c.url)}: {getName(c)}
                                </Link>
                            )}
                        ></SortableList>
                    </>
                ) : (
                    <p>No book found</p>
                )}
            </DataComponent>
        </main>
    );
}
