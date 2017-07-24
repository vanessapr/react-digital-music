import React, { Component } from 'react';
import Artist from './Artist';

class FavoriteArtists extends Component {
  componentDidMount() {
    this.props.getFavorites();
  }

  render() {
    const { artists } = this.props;

    return (
      <div className="grid-x grid-margin-x">
        {
          Object.keys(artists).map( (item, index) =>
            <div key={index} className="cell small-3">
              <Artist
                data={artists[item]} />
            </div>
          )
        }
      </div>
    );;
  }
}

export default FavoriteArtists;
