import React from 'react';
import spinner from './loading.gif';

export const Message = ({ title, children, type }) => (
  <div className={`callout ${type}`}>
    <h5>{title}</h5>
    { children }
  </div>
);

Message.defaultProps = {
  type: 'primary'
}


export const Loading = ({ height }) => {
  let styles = {
    backgroundImage: `url(${spinner})`,
    backgroundRepeat: 'no-repeat',
    width: '200px',
    height: '200px'
  };

  return (
    <div style={{ height: height, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={styles}></div>
    </div>
  );
};
Loading.defaultProps = {
  height: '100vh'
}
