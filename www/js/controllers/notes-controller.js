(function(){
  'use strict';
  angular.module('starter')

  .controller('NotesCtrl', function($scope, $state, Note){
    Note.query($state.params.tag || '%', $state.params.page * 1 || 0).then(function(response){
      $scope.notes = response.data.notes;
      console.log(response.data.notes[1]);
    });
  });

})();
