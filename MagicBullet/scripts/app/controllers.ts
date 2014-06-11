/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="services.ts" />
angular.module('starter.controllers', ['starter.services'])
    .controller('AppCtrl', function($scope) {
    })
    .controller('PlaylistsCtrl', function($scope, playlistSvc: starter.PlaylistSvc) {
        $scope.playlists = playlistSvc.all();
    })
    .controller('PlaylistCtrl', function($scope, $stateParams, playlistSvc: starter.PlaylistSvc) {
        $scope.playlist = playlistSvc.find($stateParams.playlistId);
    });