import React, { Component } from 'react';
import Artist from './Artist';

class TopArtists extends Component {
  componentDidMount() {
    this.props.getTopArtists();
  }

  render() {
    const { artists, addFavorite } = this.props;

    return (
      <div className="grid-x grid-margin-x">
        {
          Object.keys(artists).map( (uuid, index) =>
            <div key={index} className="cell small-3">
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
