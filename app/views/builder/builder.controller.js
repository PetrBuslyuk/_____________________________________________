angular.module('app')
.controller('BuilderCtrl', function($scope, dragulaService){

    $scope.pageSlide = true
    dragulaService.options($scope, 'builder-pain', {
      removeOnSpill: true
    });

    $scope.tools = [

    ];

    $scope.items = []

    $scope.toolsClick = function () {
        $scope.pageSlide = !$scope.pageSlide
    }
})
.directive('toolbox', ['$document' , function($document) {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            var startX, startY, initialMouseX, initialMouseY;

            elm.bind("dragstart", function($event) {
                startX = elm.prop('offsetLeft');
                startY = elm.prop('offsetTop');
                initialMouseX = $event.clientX;
                initialMouseY = $event.clientY;
                elm.css({cursor: "default"})
                return false;
            })

            elm.bind("dragend", function($event) {
                var dx = $event.clientX - initialMouseX;
                var dy = $event.clientY - initialMouseY;
                elm.css({
                    top:  startY + dy + 'px',
                    left: startX + dx + 'px'
                });
                return false;
            })
        }
    };
}]);
