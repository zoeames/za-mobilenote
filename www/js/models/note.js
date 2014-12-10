/* jshint loopfunc:true, camelcase:false */

(function(){
  'use strict';

  angular.module('starter')
  .factory('Note', ['$rootScope', '$http', 'origin', function($rootScope, $http, origin){

    function count(){
      return $http.get(origin + '/notes/count');
    }


    function query(tag, page){
      return $http.get(origin + '/notes?limit=5&offset=' + 5 * page + '&tag=' + tag);
    }

    function show(noteId){
      return $http.get(origin + '/notes/' + noteId);
    }

    return {count:count, query:query, show:show};
  }]);
})();
