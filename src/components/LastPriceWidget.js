import React from 'react';
import { number, bool, string, oneOfType } from 'prop-types';
import Icon from './Icon';
import { getIconType } from '../utils/icon-dictionary';

const LastPriceWidget = ({ price, tickDirection }) => {
  const isLoading = !tickDirection;

  return (
    <tr className="lastPriceWidget text-bold text-center lead">
      <td />
      <td className={tickDirection ? tickDirection : ''}>
        {price}
        <Icon
          spin={!price}
          className={isLoading ? "text-primary" : "p" }
          type={getIconType(tickDirection)}
        />
      </td>
      <td />
    </tr>
  );
}

LastPriceWidget.defaultProps = {
  price: false,
  tickDirection: false
}

LastPriceWidget.propTypes = {
  price: oneOfType([number, bool]),
  tickDirection: oneOfType([string, bool])
}

export default LastPriceWidget;
