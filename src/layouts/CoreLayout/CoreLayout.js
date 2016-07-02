import React from 'react';
import classes from './CoreLayout.scss';
import '../../styles/core.scss';

export const CoreLayout = ({ children }) => {
  return (
    <div className={classes.frame}>
      {children}
    </div>
  );
};

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default CoreLayout;
