import css from './App.module.css';
import { Heading } from 'components/Heading/Heading';
import { Book } from 'components/Book/Book';
import booksJson from './books.json';

const books = booksJson.books;

export const App = () => {
  return (
    <div>
      <Heading className={css.headingApp1}>React homework template</Heading>
      <ul className={css.booksList}>
        {books.map((book, index) => {
          return (
            <Book
              key={`${book.title}_${book.auther}`}
              title={book.title}
              author={book.auther}
              year={book.year}
              genre={book.genre}
              favourite={book.favourite}
              cover={book.cover}
            />
          );
        })}
      </ul>
    </div>
  );
};
