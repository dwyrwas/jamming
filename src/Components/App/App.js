import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from '../Playlist/Playlist';
import './App.css';
import React from 'react';
import Spotify from "../../util/Spotify";


class App extends React.Component{
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      searchResults: [],
      playlistName: 'Name',
      playlistTracks: []
    }

  }

  search(searchTerm){
    Spotify.search(searchTerm).then(searchResults => {this.setState({searchResults: searchResults})});
  }

  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName:'New Playlist', 
        playlistTracks: []
      })
    });
    
  }

  updatePlaylistName(name){
    this.setState({playlistName:name});
  }

  removeTrack(track){
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({ playlistTracks: tracks });
  }

  addTrack(track){
    const tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks });

  }

  render() {
    return(
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} onSave={this.savePlaylist}
              playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName}/>
          </div>
        </div>
      </div>
    )
  }
};

export default App;
