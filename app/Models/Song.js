export default class Song {
    constructor(data) {
        this.title = data.trackName || data.title;
        this.albumArt =
            data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
        this.artist = data.artistName || data.artist;
        this.album = data.collectionName || data.album;
        this.price = data.trackPrice || data.price;
        this.preview = data.previewUrl || data.preview;
        this._id = data.trackId || data._id;
    }

    get Template() {
        return /*html*/ `
        <div class="col-lg-3 card shadow text-center my-2">
                <img src="${this.albumArt}" alt="">
                <h5>${this.album}</h4>
                <h6>${this.title}</h5>
                <p>${this.artist}</p>
                <div class="d-flex justify-content-center">
                <button class="btn btn-primary" onclick="app.songsController.addSong(${this._id})">add to playlist</button>
                </div>
        </div>
        `;
    }

    get playlistTemplate() {
        return `

        `;
    }
}