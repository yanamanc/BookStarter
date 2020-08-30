import React    from 'react';

import BookCard from './BookCard';
import BookContainer  from './BookContainer'

class BooksList extends React.Component {
  render() {
      return (
        <div>
          {this.props.books.map((book, idx) => (
            <div key={idx} style={StyleSheet.book}>
              <BookContainer />
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