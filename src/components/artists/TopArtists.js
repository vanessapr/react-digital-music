import React, { Component } from 'react';
import Artist from './Artist';

class TopArtists extends Component {
  componentDidMount() {
    this.props.getTopArtists();
  }

  render() {
    const { artists } = this.props;

    return (
      <div className="grid-x">
        {
          artists.map( (item, index) =>
            <div key={index} className="cell small-3">
              <Artist data={item} />
            </div>
          )
        }
      </div>
    );
  }
}

export default TopArtists;
