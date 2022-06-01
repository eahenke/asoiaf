export type Book = {
    url: string;
    name: string;
    characters: string[];
    authors: string[];
    numberOfPages: number;
    released: string;
};

export type Character = {
    url: string;
    name: string;
    aliases: string[];
    gender: string;
    culture: string;
    born: string;
    died: string;
    books: string[];
};

export type BookWithCharacters = Omit<Book, 'characters'> & {
    characters: Character[];
};

export type Api = {
    getBooks: () => Promise<Book[]>;
    getBook: (id: string) => Promise<Book>;
    getCharacter: (id: string) => Promise<Character>;
};
