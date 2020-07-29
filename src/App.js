import React from 'react'

import BooksList from './BooksList'
import AuthorList from "./AuthorList"

class App extends React.Component {
  render() {
    return (
      <>
        <header style={styles.header}>BookStarter</header>
        <main>
          <BooksList books={this.props.books} />
          <AuthorList authors={this.props.books.Authors} />
        </main>
        <footer style={styles.footer}>&copy; {new Date().getFullYear()}, Thinknetica</footer>
      </>
    );
  }
}

export default App;

const styles = {
  header: {
    background: '#85004B',
    color: '#fff',
    minHeight: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2 rem',
    fontWeight: 'bold'
  },
  main: {
    padding: '10px 10%'
  },
  footer: {
    padding: '0 10%',
    marginTop: '50px'
  }
};
