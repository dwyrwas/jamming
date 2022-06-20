import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from '../Playlist/Playlist';
import Track from '../Track/Track';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.state = {
      searchResults: [{name: 'name1', artist: "artist1", album:'album1', id: 1},
      {name: 'name2', artist: "artist2", album:'album2', id: 2},
      {name: 'name3', artist: "artist3", album:'album3', id: 3}],

      playlistName: 'Name',
      playlistTracks: [{name: 'name1', artist: "artist1", album:'album1', id: 1},
      {name: 'name2', artist: "artist2", album:'album2', id: 2},
      {name: 'name3', artist: "artist3", album:'album3', id: 3}]
    }

  }

  removeTrack(track){
        
  }

  addTrack(track){
    const tracks = this.state.playlistTracks;
    const found = tracks.find(ptrack => ptrack.id === track.id)
    if (found){
      return
    }

    tracks.push(tracks);
    this.setState({playlistTracks: tracks});

  }

  render() {
    return(
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    )
  }
};

export default App;
