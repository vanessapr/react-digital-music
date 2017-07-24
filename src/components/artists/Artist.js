import React from 'react';

const Artist = ({ data, onAddFavorite, onRemoveFavorite }) => (
  <div className="card">
    <img src={data.image} alt={data.name} />
    {
      data.selected &&
        <div className="card-divider" style={{ justifyContent: 'center' }}>
          <button onClick={ e => {
            onRemoveFavorite(data.uuid);
          }}><i className="zmdi zmdi-close zmdi-hc-fw"></i>Remove</button>
        </div>
    }

    <div className="card-section">
      <h5>
        <a href={data.url} target="blank">{data.name}</a>
        <button onClick={ e => {
          onAddFavorite(data);
        }}>
          <i className="zmdi zmdi-favorite zmdi-hc-fw"></i>
        </button>
      </h5>
      <p><i className="zmdi zmdi-headset zmdi-hc-fw"></i>{data.listeners}
      </p>

    </div>
  </div>
);


export default Artist;
