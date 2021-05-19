// var album = {
// title: 'Black Album',
//     relesead: 1991,
//     showInfo: function() {
//         console.log(`Titulo do album: ${this.title}, lançado em: ${this.relesead}`);
//     }
// }

var album = new Object();

    album.title = 'Black Album',
    album.relesead = 1991,
    album.showInfo = function() {
        console.log(`Titulo do album: ${this.title}, lançado em: ${this.relesead}`);
    }

album.showInfo();
console.log(album.title, album.relesead);

album.tracks = ['Enter Sandman', 'The Unforgiven', 'Nothing Else Matters'];

album.showTracks = function() {
    this.tracks.forEach(function(value, key) {
        console.log(value);
    });
}

album.showTracks();