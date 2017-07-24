import React, { Component } from 'react';
import Artist from './Artist';

class FavoriteArtists extends Component {
  componentDidMount() {
    this.props.getFavorites();
  }

  render() {
    const { artists, removeFavorite } = this.props;

    return (
      <div className="grid-x grid-margin-x small-up-2 medium-up-3 large-up-5">
        {
          Object.keys(artists).map( (item, index) =>
            <div key={index} className="cell">
              <Artist
                data={artists[item]}
                onRemoveFavorite={removeFavorite} />
            </div>
          )
        }
      </div>
    );;
  }
}

export default FavoriteArtists;
