import React from 'react';

export const Message = ({ title, children, type }) => (
  <div className={`callout ${type}`}>
    <h5>{title}</h5>
    { children }
  </div>
);

Message.defaultProps = {
  type: 'primary'
}
