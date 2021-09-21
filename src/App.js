import React from 'react';
import Book from './Book';
import books from './bookDetails';

function App() {
    return (
        <section className="bookList">
            {books.map((book) => {
                return <Book key={book.id} book={book} />;

                // return <Book key={book.id} {...book} />;
                //! i can also use spread operator like this , it means to select all the properties from this object.
                // if I use spread operator then i don't need to define props.object_name, i can use only props
            })}
        </section>
    );
}

export default App;
