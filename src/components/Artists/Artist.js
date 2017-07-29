import React from 'react';
import './Artist.css';

const Artist = ({ data, onAddFavorite, onRemoveFavorite }) => (
  <div className="card artist">
    <img src={data.image} alt={data.name} />
    {
      data.selected?
        <button className="button tiny alert expanded margin-bottom-0" onClick={ e => {
            onRemoveFavorite(data.uuid);
          }}>
          Remove <i className="zmdi zmdi-close zmdi-hc-fw"></i>
        </button>
      :
      <button className="button tiny success expanded margin-bottom-0" onClick={ e => {
        onAddFavorite(data);
      }}>
        Add to Favorite <i className="zmdi zmdi-favorite zmdi-hc-fw"></i>
      </button>
    }
    <div className="card-section">
      <h5>
        <a href={data.url} target="blank">{data.name}</a>
      </h5>
      <p>
        <i className="zmdi zmdi-headset zmdi-hc-fw"></i>{data.listeners}
      </p>
    </div>
  </div>
);


export default Artist;
