/**
 * Created by alexbostic on 4/3/16.
 */
(function () {
  'use strict';   
  angular.module('core')
  .factory('L',function(){
    return window.L; //leaflet must already be loaded on the page
  });
})();
