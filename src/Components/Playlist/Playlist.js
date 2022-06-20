import React from 'react';
import {TrackList} from './TrackList.js';
import 'Playlist.css';

class Playlist extends React.Component{
    render(){
        <div className="Playlist">
            <input defaultValue={"New Playlist"}/>
            <!-- Add a TrackList component -->
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    }
}

export { Playlist };