export type Book = {
    url: string;
    name: string;
    characters: string[];
};

export type Api = {
    getBooks: () => Promise<Book[]>;
};
