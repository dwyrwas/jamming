let userAccessToken;
const Spotify = {

    getAccessToken(){
        if(userAccessToken){
            return userAccessToken;
        } 

        // Check
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expiresInMatch) {
            userAccessToken = accessTokenMatch[1];
            const expiresIn = Number()
        }
    }
}

export default Spotify;