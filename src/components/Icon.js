import React from 'react';
import { bool, string, oneOfType } from 'prop-types';

const Icon = ({ type, size, className, spin }) => {
  const iconSize = size ? `zmdi-hc-${size}` : '';
  const iconSpin = spin ? 'zmdi-hc-spin' : '';
  const iconClasses = `zmdi zmdi-${type} ${iconSize} ${iconSpin} ${className}`

  return (
    <span className={iconClasses} />
  );
};

Icon.defaultProps = {
  size: false,
  spin: false,
  className: '',
};

Icon.propTypes = {
  type: string.isRequired,
  size: oneOfType([string, bool]),
  spin: bool,
  className: string,
};

export default Icon;
