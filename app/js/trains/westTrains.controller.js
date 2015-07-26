;(function (){

  'use strict';

    angular.module('marta')

  .controller('Trains', ['$scope', '$http', 'HeaderService',

    function ($scope, $http, HeaderService){

HeaderService.headerConfig();

    $scope.westTrains = [];


  });
}());
