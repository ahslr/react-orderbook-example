import React from 'react';
import Icon from '../Icon';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alert = ({ alerts }) => alerts !== null && alerts.length > 0 && alerts.map(({ id, msg, icon = "info-outline" }) => (
  <div key={id} className="alert">
    <Icon type={icon} className="text-primary p"/>
    {msg}
  </div>
));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
}

const mapStateToProps = ({ alert }) => ({
  alerts: alert
})

export default connect(mapStateToProps)(Alert);