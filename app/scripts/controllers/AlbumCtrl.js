(function() {
    function AlbumCtrl(Fixtures, SongPlayer) {
        this.albumData = Fixtures.getAlbum();
        // console.log(this.albumData, "albumData in AlbumCtrl")
        // console.log(this.albumData.year, 'this is albumdata year')
        this.songPlayer = SongPlayer;

    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
