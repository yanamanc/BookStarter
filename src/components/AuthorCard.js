import React from 'react';

class AuthorCard extends React.Component {
  render() {
    const {
        author: { Name, Email, ImageURL, Description }
    } = this.props;

    return (
      <div>
        <div>{Name}</div>
        <div>{Email}</div>
        <div><img src={ImageURL} alt={Title} /></div>
        <div>{Description}</div>
      </div>
    )
  }
}

export default AuthorCard;