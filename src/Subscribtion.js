import React from 'react'

class Subscription extends React.Component {
  render() {
    const {
        author: { User, Book }
    } = this.props;

    return (
      <div>
        <div>{User}</div>
        <div>{Book}</div>
      </div>
    )
  }
}

export default Subscription;