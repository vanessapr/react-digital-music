import React, { Component } from 'react';
import Artist from './Artist';

class TopArtists extends Component {
  componentDidMount() {
    this.props.getTopArtists();
  }

  render() {
    const { artists, addFavorite } = this.props;

    return (
      <div className="grid-x grid-margin-x small-up-2 medium-up-3 large-up-5">
        {
          Object.keys(artists).map( (uuid, index) =>
            <div key={index} className="cell">
              <Artist
                data={artists[uuid]}
                onAddFavorite={addFavorite}/>
            </div>
          )
        }
      </div>
    );
  }
}

export default TopArtists;
