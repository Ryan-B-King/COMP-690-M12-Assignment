class Jukebox {
  constructor(albums) {
    this.albums = [];
  }
  addAlbum = function (album) {
    this.albums.push(album);
  };
  favoriteAlbum = function () {
    let max = -1,
      fav;
    for (let i = 0; i < this.albums.length; i++) {
      if (this.albums[i].played > max) {
        max = this.albums[i].played;
        fav = this.albums[i];
      }
    }
    return fav.display();
  };
}

class Album {
  constructor(artist, title) {
    this.artist = artist;
    this.title = title;
    this.played = 0;
  }
  play = function () {
    this.played += 1;
  };
  display = function () {
    return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
  };
}

var jbox = new Jukebox();
const albums = [
  ['Operation Ivy', 'Energy'],
  ['Blink 182', 'Dude Ranch'],
  ['New Found Glory', 'Sticks and Stones'],
];

window.onload = function () {
  const favoriteAlbumButton = document.getElementById('favoriteAlbumButton');

  favoriteAlbumButton.addEventListener('click', () => {
    const favoriteAlbum = document.createTextNode(jbox.favoriteAlbum());
    document.getElementById('favoriteAlbum').innerHTML = '';
    document.getElementById('favoriteAlbum').appendChild(favoriteAlbum);
  });

  albums.forEach((album) => {
    const option = document.createElement('option');
    const jukeboxAlbum = new Album(album[0], album[1]);
    const albumText = `${jukeboxAlbum.title} - ${jukeboxAlbum.artist}`;

    const text = document.createTextNode(albumText);
    1;
    option.value = albumText;
    option.appendChild(text);

    jbox.addAlbum(jukeboxAlbum);

    document.getElementById('albumSelect').append(option);
  });

  const playButton = document.getElementById('playButton');
  playButton.addEventListener('click', (e) => {
    const index =
      document.getElementById('albumSelect').selectedOptions[0].index;
    jbox.albums[index].play();
  });
};
