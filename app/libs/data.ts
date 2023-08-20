type Book = {
     id: string;
     title: string;
     author: string;
     date: Date;
}

let books: Book[] = [];

export const getBooks = () => books;

export const addBook = (book: Book) => {
  books.push(book);
}

export const deleteBook = (id: string) => {
  books = books.filter((book) => book.id !== id)
}

export const updateBook = (id: string, title: string, author: string) => {
  const book = books.find((book) => book.id === id);
  if(book){
    book.title = title;
    book.author = author;
  }else{
    throw new Error("Not book found");
  }
}

export const getById = (id:string) => {
  return books.find((book) => book.id === id)
}

