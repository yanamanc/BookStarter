import React from 'react'

class SimilarBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
            "Id": 1,
            "Title": "Institute",
            "Author": "Stiven King",
            "ImageURL": "https://target.scene7.com/is/image/Target/GUEST_3cbf46b2-0dc3-4743-867b-c6ed320f3d5f?wid=488&hei=488&fmt=pjpeg"
        },
        {   "Id": 2,
            "Title": "Misery",
            "Author": "Stiven King",
            "ImageURL": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Stephen_King_Misery_cover.jpg/220px-Stephen_King_Misery_cover.jpg"
        },
        {
          "Id": 3,
          "Title": "The Stand",
          "Author": "Stiven King",
          "ImageURL": "https://theunexpectedpastor.files.wordpress.com/2016/12/the-stand.jpg"
        },
        {
          "Id": 4,
          "Title": "Shinning",
          "Author": "Stiven King",
          "ImageURL": "https://s1.livelib.ru/boocover/1000555641/200/4471/Stiven_King__Siyanie.jpg"
        }
      ]
    };
  }

  hideBook = (bookId) => {
    this.setState((state) => ({
      books: state.books.filter(book => book.Id != bookId)
    }))
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <Siblings hideBook={this.hideBook} books={books} />
      </div>
    )
  }
}

export default SimilarBooks;

const Siblings = React.memo(({ books, hideBook }) => (
  <table style={styles.table}>
    <tbody>
      {
        books.slice(0, 3).map(book => (
          <tr>
            <Column><img src={book.ImageURL} style={styles.image} /></Column>
            <Column>{book.Title}</Column>
            <Column>{book.Author}</Column>
            <Column><button onClick={() => hideBook(book.Id)}>Remove</button></Column>
          </tr>
        ))
      }
    </tbody>
  </table>
));

const Column = ({ children }) => (
  <td style={styles.td}>{children}</td>
)

const styles = {
  table: {
    borderCollapse: "collapse"
  },
  image: {
    maxHeight: "30px"
  },
  td: {
    borderBottom: "1px solid black",
    padding: "5px"
  }
}