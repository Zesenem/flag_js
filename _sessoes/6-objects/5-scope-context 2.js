/// Scope & Context

// 1. Scope: The scope of a variable is the context in which it is defined and can be accessed. In JavaScript, there are two main types of scope: global and local (or function) scope.

function readMusic() {
  console.log("Global execution context");
}

let jukebox = {
  music: [
    { title: "So Long", artist: "Fisher Z" },
    { title: "La Folie", artist: "Stranglers" },
    { title: "Corpus", artist: "Corpus-Deus" },
  ],

  readMusic: function (track) {
    console.log(`Playing: ${track.title} by ${track.artist}`);
  },

  readMusics: function () {
    this.music.forEach((track) => this.readMusic(track));
  },
};

jukebox.readMusics();
