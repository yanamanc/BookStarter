import React from 'react';

class PriceConverter extends React.Component {
  constructor(props) {
    super(props)
    this.SearchInputRef = React.createRef()
  }

  componentDidMount() {
    this.SearchInputRef.current.focus()
  }

  render() {
    const { MinimalPrice, MoneyWeExpected, updatePrice } = this.props

    return (
        <table>
        <tr>
          <th><label>You pay:</label></th>
          <th><input type="range" min={MinimalPrice} max={MoneyWeExpected} onChange={updatePrice} ref={this.SearchInputRef} /></th>
          <th><output id="rangevalue">{MinimalPrice}</output></th>
        </tr>
        <tr>
          <th><label>Author earns:</label></th>
          <th><input type="range" id="author-price" min={MinimalPrice} max={MoneyWeExpected} /></th>
          <th><output id="authoralue">{MinimalPrice * 0.9}</output></th>
        </tr>
      </table>
    )
  }
}

export default PriceConverter;
