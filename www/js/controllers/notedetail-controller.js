(function(){
  'use strict';
  angular.module('starter')

  .controller('NoteDetailCtrl', function($scope, $state, Note){

    function show(){
      Note.show($state.params.noteId).then(function(response){
        $scope.moment = moment;
        $scope.note = response.data;
      });
    }

    function success(b64){
      Note.addPhoto($state.params.noteId, b64).then(function(response){
        show();
      });
    }

    function error(msg){
      console.log(msg);
    }

    $scope.snap = function(){
      var options = {
        quality: 40,
        destinationType: Camera.DestinationType.DATA_URL
      };

      navigator.camera.getPicture(success, error, options);
    };

    $scope.choose = function(){
      var options = {
        quality: 40,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      };

      navigator.camera.getPicture(success, error, options);
    };

    show();
  });

})();
