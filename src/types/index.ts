export type Book = {
    url: string;
    name: string;
    characters: string[];
    authors: string[];
    numberOfPages: number;
    released: string;
};

export type Api = {
    getBook: (id: string) => Promise<Book>;
    getBooks: () => Promise<Book[]>;
};
