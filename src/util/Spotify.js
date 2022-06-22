let userAccessToken;
const clientID = 'dc5a0d4f0fde4f3ab1b18b22a7953f52';
const redirectURL = 'http://localhost:3000/';
const Spotify = {

    search(searchParam){
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchParam}`, {headers:{Authorization:`Bearer ${accessToken}`}})
        .then(response => {
            return response.json()
        }).then(jsonReponse => {
            if (!jsonReponse.tracks){
                return [];
            } 
            return jsonReponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
        }))
    })},


    getAccessToken(){
        if(userAccessToken){
            return userAccessToken;
        } 

        // Check
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expiresInMatch) {
            userAccessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken='', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');

        } else {
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURL}`;
            wondiw.location = accessURL;
        }
    }
}

export default Spotify;