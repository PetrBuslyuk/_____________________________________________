angular.module('app')
.controller('BuilderCtrl', function($scope, dragulaService, $sce){

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

    $scope.$on('builder-pain.drag', function (e, el) {
      console.log($scope.items);
      console.log(e, el);
      // el.removeClass('ex-moved');
    });
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
            "name": "input",
            "description": "input",
            "html": $sce.trustAsHtml("<input element-dragged style='width:100px;' type='text'>"),
            "styles": "width: 100px;",
            "class": ""
        },{
            "name": "button",
            "description": "button",
            "html": $sce.trustAsHtml("<button element-dragged style='width:100px;'>Btn</button>"),
            "styles": "width: 100px;",
            "class": ""
        }],
        "collapsed": true
      },
      "other": {
        "name": "Other elements",
        "items": [{

        }],
        "collapsed": true
      },
      "custom": {
        "name": "Custom items",
        "items": [{

        }],
        "collapsed": true
      }
    };

    $scope.items = [];

    $scope.toolsClick = function () {
        $scope.toolsSlide = !$scope.toolsSlide
    }
})
.directive('elementDragged', ['$compile', function($compile){
  return {
    restrict: 'AE',
    link: function(scope, elm, attrs){
      console.log("here")
      //$compile(scope.element.html)(scope);
      // var content = linkFn(scope);
      // elm.append(content);
    }
  }
}])
.directive('toolbox', [function() {
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
