import React from 'react';

const Artist = ({ data }) => (
  <div className="card">
    <img src={data.image[1]['#text']} alt={data.name} />
    <div className="card-section">
      <h4>{data.name}</h4>
      <p>{data.listeners}</p>
    </div>
  </div>
);


export default Artist;
