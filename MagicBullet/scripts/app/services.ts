/// <reference path="../typings/angularjs/angular.d.ts" />

module starter {
    export class Playlist {
        constructor(public id: number, public title: string){}
    }

    export class PlaylistSvc {
        private playlists: Playlist[];
        constructor() {
            this.playlists = [
                new Playlist(1, 'Reggae'),
                new Playlist(2, 'Chill'),
                new Playlist(3, 'Dubstep'),
                new Playlist(4, 'Indie'),
                new Playlist(5, 'Rap'),
                new Playlist(6, 'Cowbell')
            ];
        }
        all() {
            return this.playlists;
        }
        find(id) {
            return this.playlists[id - 1];
        }
    }
}
angular.module('starter.services', [])
.service('playlistSvc', () => new starter.PlaylistSvc())