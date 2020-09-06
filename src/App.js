import React      from 'react'
import PropTypes  from 'prop-types';

import BookContainer  from "./components/BookContainer"
import AuthorList from "./components/AuthorList"
import Footer     from "./components/layout/Footer"
import Header     from "./components/layout/Header"
import Feedback   from "./components/forms/Feedback"

const user = {
  "Email": "yana.mantsevich@corevist.com",
  "FirstName": "Yana",
  "LastName": "Mantsevich",
  "AvatarUrl": "https://sun9-54.userapi.com/c857532/v857532101/51bf0/bf8iULncfhI.jpg"
};

class App extends React.Component {
  render() {
    return (
      <>
        <Header>BookStarter</Header>
        <main>
          <BookContainer />
          <AuthorList authors={this.props.books.Authors} />
        </main>
        <Footer>
          <Feedback />
          &copy; {new Date().getFullYear()}, Thinknetica
        </Footer>
      </>
    );
  }
}

App.propTypes = {
  books: PropTypes.object,
  authors: PropTypes.object
}

export default App;

const styles = {
  main: {
    padding: '10px 10%'
  },
  input: {
    display: 'block',
    padding: '0 20px',
    width: '100%'
  }
};
