angular.module("app")
.controller("HomeCtrl", function($scope, ngDialog) {
      console.log('lol');
      $scope.openSignInModal = function () {
         ngDialog.open({
           template: 'views/signin/signin.html',
           className: 'ngdialog-theme-default',
           scope : $scope
       });
      }
 });
