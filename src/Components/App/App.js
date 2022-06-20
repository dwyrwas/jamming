import './Components/SearchBarr';
import './Components/SearchResults';
import './Components/Playlist';
import './Components/App/App.css';
import { render } from '@testing-library/react';
import React from 'react';

class App extends React.Component{
  render() {
    return(
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <!-- Add a SearchBar component -->
    <div className="App-playlist">
      <!-- Add a SearchResults component -->
      <!-- Add a Playlist component -->
    </div>
  </div>
</div>
    )
  }
}

export default App;
