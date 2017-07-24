import React from 'react';

const Artist = ({ data, onAddFavorite }) => (
  <div className="card">
    <img src={data.image} alt={data.name} />
    <div className="card-section">
      <h4>
        <a href={data.url}>{data.name}</a>
        <button onClick={ e => {
          onAddFavorite(data);
        }}>
          <i className="zmdi zmdi-favorite zmdi-hc-fw"></i>
        </button>
      </h4>
      <p><i className="zmdi zmdi-headset zmdi-hc-fw"></i>{data.listeners}
      </p>

    </div>
  </div>
);


export default Artist;
