import React    from "react"
import axios    from 'axios'

import BookCard from './BookCard';

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appWmtJL9lECLS7lQ',
  timeout: 1000,
  headers: {
    'Authorization': "Bearer key2YtnpGXsZoGQCQ"
  }
});

class BookContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      record: null
    }
  }

  componentDidMount () {
    this._fetchData();
  }

  render () {
    const { record } = this.state

    return (
      <>
        {
          record ? 
          <BookCard book={record} />
        : <div>Loading...{record}</div>
        }
      </>
    )
  }

  _fetchData() {
    httpClient.get('/Books', {maxRecords: 10, view: 'Grid view'})
    .then(result => result.data)
    .then(this._mapFromAirtable)
    .then(record => { this.setState({ record }) })
  }

  _mapFromAirtable(data) {
    return data.records.map(
      record => ({
        Id: record.id,
        Title: record.fields.Title,
        Description: record.fields.Description,
        Pages: record.fields.Pages,
        Language: record.fields.Language,
        Progress: record.fields.Progress,
        ImageURL: record.fields.ImageURL,
        MinimalPrice: record.fields.MinimalPrice,
        WantedPcice: record.fields.WantedPcice,
        MoneyWeHave: record.fields.MoneyWeHave,
        MoneyWeExpected: record.fields.MoneyWeExpected,
        Subscribers: record.fields.Subscribers
      })
    )
  }
}

export default BookContainer;
