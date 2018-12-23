(function () {
    'use strict';

  angular.module('LunchCheck', [])
      .controller('LunchController', LunchCheck);

  LunchCheck.$inject = ['$scope'];
  function LunchCheck ($scope) {
      $scope.normalLunch = '';
      $scope.buttonResponse = '';

      $scope.itemCount = function countArrayItems (items) {
          var lunchItemCount = 0;
          var lunchItemArray = [];

          if (items.trim() !== '' && items !== null &&
              items !== undefined && items != Infinity) {
              lunchItemArray = items.split(',');
              for (var item in lunchItemArray) {
                  if (lunchItemArray[item].trim().length > 0) {
                      lunchItemCount += 1;
                  }
              }
          }

          return lunchItemCount;
      };

      $scope.isTooMuch = function checkMealSize () {
          var itemAmount =
              $scope.itemCount($scope.normalLunch);
          var finalMessage = 'Please enter data first';
          if (itemAmount> 0 && itemAmount <= 3) {
              finalMessage = 'Enjoy!';
          }
          else if (itemAmount > 3) {
              finalMessage = 'Too much!';
          }

          $scope.buttonResponse = finalMessage;
      };

    }
})();
