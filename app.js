(function () {

  angular.module('LunchCheck', [])
    .controller('LunchController', LunchController);

  LunchController.$inject = ['$scope'];

  function LunchController($scope) {
    $scope.message = "";

    $scope.displayMessage = function() {
      var items;

      if ($scope.input) {
        $scope.input = $scope.input.trim();
        items = $scope.input.split(",");
        items = items.filter(function(item) {
          return item.length > 0;
        });
        if (items.length <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      } else {
        $scope.message = "Please enter data first";
      }
    }
  }

})();
