import React      from "react";

import AuthorCard from "./AuthorCard";

class AuthorList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { showAllAuthors: false }
    this.displayAuthors = 3
  }

  toggle () {
    this.setState({ showAllAuthors: !this.state.showAllAuthors })
  }

  showAuthors () {
    if (this.state.showAllAuthors)
      return this.props.authors

    return this.props.authors.slice(0, this.displayAuthors)
  }

  render () {
    if (!this.props.authors)
      return <div>Anonim</div>

    return (
      <div>
        <div>
          <button onClick={() => this.toggle()}>
            Show all Authors
          </button>
        </div>
        {
          this.showAuthors()
            .map(author => (
              <div key={author.Id}>
                <AuthorCard author={author} />
              </div>
            ))
        }
      </div>
    )
  }
}

export default AuthorList