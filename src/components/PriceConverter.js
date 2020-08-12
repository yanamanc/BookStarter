import React from 'react';

const PriceConverter = ({ MinimalPrice, MoneyWeExpected, updatePrice }) => (
    <table>
      <tr>
        <th><label>You pay:</label></th>
        <th><input type="range" min={MinimalPrice} max={MoneyWeExpected} onChange={updatePrice} /></th>
        <th><output id="rangevalue">{MinimalPrice}</output></th>
      </tr>
      <tr>
        <th><label>Author earns:</label></th>
        <th><input type="range" id="author-price" min={MinimalPrice} max={MoneyWeExpected} /></th>
        <th><output id="authoralue">{MinimalPrice * 0.9}</output></th>
      </tr>
    </table>
  );

export default PriceConverter;
