import React, { Fragment } from 'react'

const OrderBookL2 = () => {
    return (
        <Fragment>
          <h1 className="text-primary lead pt-2">OrderBook L2</h1>
          <div className="p-2 p-0-sm">
            <p>
              To display the orders from "orderBookL2", I recommend the following steps.
            </p>
            <br/>
            <p>
              The First step is to subscribe to the real-time data with the topic "orderBookL2" using BitMEX websocket API.
            </p>
            <br/>
            <p>
              Upon subscription, an image of existing data is received through a "partial" action. This data should be used to initialize the order book table. If any action is received before "partial" action, it should be ignored.
            </p>
            <br/>
            <p>
              OrderbookL2 is a long list of data with thousands of rows so to optimize the performance I recommend using the "windowing" technique which renders only a small subset of rows at any given time to reduce re-rendering time and number of created DOM nodes.
            </p>
            <br/>
            <p>
              After initializing the orders table, the next step should be taken based on the value of the "action" key in the message object, which can be "insert", "delete" or "update".
            </p>
            <br/>
            <p>
              The "orderBookL2" is keyed by a unique ID, instead of price. To convert ID and price interchangeably in order to modify orders array, a couple of formulas are provided by BitMEX API documentation.
            </p>
            <br/>
            <p>
              The above-mentioned formulas are dependent on the instrument. So the full instrument list should be fetched on startup. So the price can be computed based on instrument and ID. Finally, orders array should be updated considering the received action and id.
            </p>
          </div>
        </Fragment>
    )
}

export default OrderBookL2;