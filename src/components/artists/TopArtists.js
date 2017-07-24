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
          artists.map( (item, index) =>
            <div key={index} className="cell small-3">
              <Artist
                data={item}
                onAddFavorite={addFavorite}/>
            </div>
          )
        }
      </div>
    );
  }
}

export default TopArtists;
