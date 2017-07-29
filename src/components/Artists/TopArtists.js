import React, { Component } from 'react';
import { Loading, Message } from '../Helpers';
import Artist from './Artist';

class TopArtists extends Component {
  componentDidMount() {
    this.props.getTopArtists();
  }

  render() {
    const { artists, addFavorite, errorMessage, isLoading } = this.props;

    return (
      isLoading?
        <Loading height="100%" />
      :
      (
        errorMessage?
          <Message title="Top Artists" type="alert">
            <p>{ errorMessage }</p>
          </Message>
        :
        <div className="grid-x grid-margin-x small-up-1 medium-up-3 large-up-5">
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
      )
    );
  }
}

export default TopArtists;
