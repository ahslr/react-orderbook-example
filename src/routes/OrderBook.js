import React, { PureComponent, Fragment } from 'react';
import { func, array, object } from 'prop-types';
import { connect } from 'react-redux';
import Websocket from 'react-websocket';
import { setAlert } from '../actions/alert';
import { handleData } from '../actions/tableData';
import OrderBook from '../components/OrderBook';
import Icon from '../components/Icon';
import { WS_URL, INSTRUMENT } from '../config/constants';


class OrderBookPage extends PureComponent {

  handleMessage(data) {
    this.props.handleData(data)
  }

  handleOpenWs() {
    this.props.setAlert('Successfully connected to BitMEX websocket.', 'swap')
  }

  handleCloseWs() {
    this.props.setAlert('Websocket disconnected.', 'alert-circle')
  }

  render() {
    const {
      askOrders,
      bidOrders,
      trade,
    } = this.props;

    return (
      <Fragment>
        <header className="text-primary lead display-flex align-center">
          <Icon type="toll" size="lg" className="p" />
          <h1>{INSTRUMENT}</h1>
        </header>
        <Websocket
          url={`${WS_URL}?subscribe=trade:${INSTRUMENT},orderBook10:${INSTRUMENT}`}
          onOpen={this.handleOpenWs.bind(this)}
          onClose={this.handleCloseWs.bind(this)}
          onMessage={this.handleMessage.bind(this)}
        />
        <OrderBook askOrders={askOrders} bidOrders={bidOrders} trade={trade} />
      </Fragment>
    );
  }
}

OrderBookPage.propTypes = {
  setAlert: func.isRequired,
  handleData: func.isRequired,
  askOrders: array.isRequired,
  bidOrders: array.isRequired,
  trade: object.isRequired
}

const mapDispatchToProps = {
  setAlert,
  handleData
}

const mapStateToProps = ({ tableData }) => ({
  ...tableData
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderBookPage);