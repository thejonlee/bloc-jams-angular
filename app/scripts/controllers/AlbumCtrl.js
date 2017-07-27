(function() {
    function AlbumCtrl(Fixtures) {
        this.albumData = Fixtures.getAlbum();
        // console.log(this.albumData, "albumData in AlbumCtrl")
        // console.log(this.albumData.year, 'this is albumdata year')
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
