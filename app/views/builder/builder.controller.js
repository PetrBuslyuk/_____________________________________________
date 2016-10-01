angular.module('app')
.controller('BuilderCtrl', function($scope, dragulaService){

    $scope.toolsSlide = true;
    dragulaService.options($scope, 'builder-pain', {
      removeOnSpill: function(el, container, handle){
        return true
      },
      copy: function (el, container, handle) {
        if(container.classList.contains('toolsElems')) return true
        else return false
      }
    });

    // $scope.$on('builder-pain.drag', function (e, el) {
    //   el.removeClass('ex-moved');
    // });
    //
    // $scope.$on('builder-pain.drop', function (e, el) {
    //   el.addClass('ex-moved');
    // });
    //
    // $scope.$on('builder-pain.over', function (e, el, container) {
    //   container.addClass('ex-over');
    // });
    //
    // $scope.$on('builder-pain.out', function (e, el, container) {
    //   container.removeClass('ex-over');
    // });

    $scope.tools = {
      "main": {
        "name": "Main elements",
        "items":[{

          }]
      },
      "other": {
        "name": "Other elements",
        "items": [{

          }]
      },
      "custom": {
        "name": "Custom items",
        "items": [{

          }]
      }
    };

    $scope.items = []

    $scope.toolsClick = function () {
        $scope.toolsSlide = !$scope.toolsSlide
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
