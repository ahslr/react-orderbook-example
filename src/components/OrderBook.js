import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Order from './Order';
import LastPriceWidget from './LastPriceWidget';
import Icon from './Icon';

const OrderBook = ({ askOrders, bidOrders, trade }) => {

  return (
    <table className="table small">
      <thead className="bg-darker text-bold">
      <tr>
        <th>
          Price
          <Icon type="money" className="hide-sm p" />
        </th>
        <th>
          Size
          <Icon type="chart-donut" className="hide-sm p" />
        </th>
        <th>
          Cumulative
          <Icon type="chart" className="hide-sm p" />
        </th>
      </tr>
      </thead>
      <tbody>
      <Fragment>
        {askOrders.map((order, index) => (<Order key={index} {...order} />)).reverse()}
      </Fragment>
        <LastPriceWidget {...trade}/>
      <Fragment>
        {bidOrders.map((order, index) => (<Order key={index} {...order} />))}
      </Fragment>
      </tbody>
    </table>
  );
}

OrderBook.propTypes = {
  askOrders: PropTypes.array.isRequired,
  bidOrders: PropTypes.array.isRequired,
  trade: PropTypes.object.isRequired
};

export default OrderBook;
