import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading, Message } from '../Helpers';
import Artist from './Artist';

class FavoriteArtists extends Component {
  componentDidMount() {
    this.props.getFavorites();
  }

  render() {
    const { artists, removeFavorite, isLoading, errorMessage } = this.props;
    let keys = Object.keys(artists);

    return (
      isLoading?
        <Loading height="100%" />
      :
      (
        errorMessage?
          <Message title="Your Favorite Artists" type="alert">
            <p>{ errorMessage }</p>
          </Message>
        :
        (keys.length?
          <div className="grid-x grid-margin-x small-up-2 medium-up-3 large-up-5">
            {
              keys.map( (item, index) =>
                <div key={index} className="cell">
                  <Artist
                    data={artists[item]}
                    onRemoveFavorite={removeFavorite} />
                </div>
              )
            }
          </div>
          :
          <Message title="Your Favorite Artists">
            <p>No records</p>
            <Link to="/">Add Artists to your playlist</Link>
          </Message>
        )
      )
    );
  }
}

export default FavoriteArtists;
