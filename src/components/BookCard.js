import React          from 'react'

import SubscribeBonus from './modals/SubscribeBonus';

class BookCard extends React.Component {
  render() {
    const {
        book: { Title, Description, Pages, Language, Progress, ImageURL,
                MinimalPrice, WantedPcice, MoneyWeHave, MoneyWeExpected, Subscribers }
    } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.imageBox}><img src={ImageURL} alt={Title} style={styles.image} /></div>
        <div style={styles.bookBody}>
          <div style={styles.title}>{Title}</div>
          <div>Description: {Description}</div>
          <div>Pages: {Pages}</div>
          <div>Language: {Language}</div>
          <div>Progress: {Progress}</div>
          <div>Minimal Price: {MinimalPrice}</div>
          <div>Price we want: {WantedPcice}</div>
          <div>Money we have: {MoneyWeHave}</div>
          <div>Money we expected: {MoneyWeExpected}</div>
          <div>
            {Subscribers > 100 ?
              <div><img src="https://pluspng.com/img-png/star-png-star-png-image-2156.png" width='20px'/>Subscribers: {Subscribers}</div>
              : <div>Subscribers: {Subscribers}</div>
            }
          </div>
          <SubscribeBonus />
        </div>
      </div>
    )
  }
}

export default BookCard;
 
const styles = {
  container: {
    display: 'flex',
    background: '#f0e1ea',
    padding: '15px'
  },
  imageBox: {
    maxWidth: '200px',
    marginRight: '50px'
  },
  bookBody: {
    flex: '1'
  },
  image: {
    width: '100%'
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
}