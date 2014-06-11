/// <reference path="../typings/angularjs/angular.d.ts" />
var starter;
(function (starter) {
    var Playlist = (function () {
        function Playlist(id, title) {
            this.id = id;
            this.title = title;
        }
        return Playlist;
    })();
    starter.Playlist = Playlist;

    var PlaylistSvc = (function () {
        function PlaylistSvc() {
            this.playlists = [
                new Playlist(1, 'Reggae'),
                new Playlist(2, 'Chill'),
                new Playlist(3, 'Dubstep'),
                new Playlist(4, 'Indie'),
                new Playlist(5, 'Rap'),
                new Playlist(6, 'Cowbell')
            ];
        }
        PlaylistSvc.prototype.all = function () {
            return this.playlists;
        };
        PlaylistSvc.prototype.find = function (id) {
            return this.playlists[id - 1];
        };
        return PlaylistSvc;
    })();
    starter.PlaylistSvc = PlaylistSvc;
})(starter || (starter = {}));
angular.module('starter.services', []).service('playlistSvc', function () {
    return new starter.PlaylistSvc();
});
//# sourceMappingURL=services.js.map
