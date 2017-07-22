import React, { Component } from 'react';
import Topbar from './Topbar';
import TopArtistsContainer from './artists/TopArtistsContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <div className="grid-x grid-padding-x">
          <div className="cell medium-4 medium-cell-block-y">
            User
          </div>
          <div className="cell medium-8 medium-cell-block-y">
            <TopArtistsContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
