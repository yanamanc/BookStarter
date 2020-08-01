import React    from 'react';

import BookCard from './BookCard';

class BooksList extends React.Component {
  render() {
      return (
        <div>
          {this.props.books.map((book, idx) => (
            <div key={idx} style={StyleSheet.book}>
              <BookCard book={book} />
            </div>
        ))}
      </div>
    );
  }
}

export default BooksList;

const styles = {
  book: {
    marginBottom: '25px'
  }
}