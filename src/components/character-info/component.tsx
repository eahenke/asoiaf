import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../../hooks';
import { getName } from '../../utils/character';
import { extractBookId } from '../../utils/extract-ids';
import { DataComponent, Breadcrumb } from '../common';

export default function CharacterInfo() {
    const { charId } = useParams();
    const { data: character, loading, error } = useCharacter(charId || '');

    return (
        <main>
            <Breadcrumb />
            <DataComponent loading={loading} error={error}>
                {character ? (
                    <section>
                        <dl>
                            <dt>Name</dt>
                            <dd>{getName(character)}</dd>
                            <dt>Born</dt>
                            <dd>{character.born || 'Unknown'}</dd>
                            <dt>Died</dt>
                            <dd>{character.died || 'Unknown'}</dd>
                            <dt>Appears in</dt>
                            <dd>Book(s) {character.books.map(extractBookId).join(', ')}</dd>
                        </dl>
                    </section>
                ) : (
                    <section>No character found!</section>
                )}
            </DataComponent>
        </main>
    );
}
