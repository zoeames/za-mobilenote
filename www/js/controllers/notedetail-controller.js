(function(){
  'use strict';
  angular.module('starter')

  .controller('NoteDetailCtrl', function($scope, $state, Note){
    //$scope.moment = moment;
    Note.show($state.params.noteId).then(function(response){
      $scope.note = response.data;
    });
  });

})();
