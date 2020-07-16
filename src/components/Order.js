import React from 'react';
import { number, string } from 'prop-types';
import { calcPercentage } from '../utils/index';

const Order = ({ price, quantity, cumulative, orderType, maxCumulative }) => {

  // computed values
  const priceClassName = `${orderType}-price`;
  const fillClassName = `fill fill-${orderType}`;
  const fillStyle = {
    backgroundSize: `${calcPercentage(cumulative, maxCumulative)}% 100%`
  };

  return (
    <tr className={orderType}>
      <td className={priceClassName}>
        {price}
      </td>
      <td>{quantity}</td>
      <td className={fillClassName} style={fillStyle}>
        {cumulative}
      </td>
    </tr>
  );
};

Order.propTypes = {
  price: number.isRequired,
  quantity: number.isRequired,
  cumulative: number.isRequired,
  orderType: string.isRequired,
  maxCumulative: number.isRequired
};

export default Order;
