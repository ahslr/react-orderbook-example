import { SET_ORDERS, SET_TRADE } from './types';
import { sumQuantities, clone } from '../utils/index';

function calcMaxCumulative(askOrders, bidOrders) {
  const totalAsks = sumQuantities(askOrders);
  const totalBids = sumQuantities(bidOrders);
  return Math.max(totalAsks, totalBids)
}

function generateOrders(sortedOrders, maxCumulative, orderType) {
  let cumulative = 0;
  return sortedOrders.map((order) => {
    cumulative += order.quantity
    return ({ ...order, cumulative, maxCumulative, orderType})
  });
}

export const handleData = rawData => dispatch => {

  const { data, table } = JSON.parse(rawData);
  if (!data) {
    return;
  }

  const [tableData] = data;

  if (table === "trade") {
    const { price, tickDirection } = tableData;

    dispatch({
      type: SET_TRADE,
      payload: {
        trade: {
          price,
          tickDirection
        }
      }
    });
  }

  if (table === "orderBook10") {
    const { asks, bids } = tableData

    const rawAskOrders = asks.map(([price, quantity]) => ({
      price,
      quantity
    }));

    const rawBidOrders = bids.map(([price, quantity]) => ({
      price,
      quantity
    }));

    const maxCumulative = calcMaxCumulative(rawAskOrders, rawBidOrders);

    // Deep copy and sort orders
    const sortedAskOrders = clone(rawAskOrders).sort((a, b) => a.price > b.price); // ascending order
    const sortedBidOrders = clone(rawBidOrders).sort((a, b) => a.price < b.price); // descending order

    const askOrders = generateOrders(sortedAskOrders, maxCumulative, 'ask');
    const bidOrders = generateOrders(sortedBidOrders, maxCumulative, 'bid');

    dispatch({
      type: SET_ORDERS,
      payload: {
        askOrders,
        bidOrders
      }
    });
  }
}