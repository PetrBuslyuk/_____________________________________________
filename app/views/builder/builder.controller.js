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

    $scope.$on('builder-pain.drag', function (e, el) {
      // console.log($scope.items);
      // console.log(e, el);
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
            "html": "<input style='width:100px; top:0px; left:0;' type='text'>",
            "styles": "width: 100px;",
            "class": ""
        },{
            "name": "button",
            "description": "button",
            "html": "<button style='width:100px; top:0px; left:0;'>Btn</button>",
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
    restrict: 'E',
    scope: {
      element: '='
    },
    link: function(scope, elm, attrs){
      var startX, startY, initialMouseX, initialMouseY;
      // console.log(scope.element)
      var linkFn = $compile(scope.element.html);
      var content = linkFn(scope);
      elm.append(content);

      elm.bind("dragstart", function($event) {
        console.log('dragstarted')
          startX = elm.prop('offsetLeft');
          startY = elm.prop('offsetTop');
          initialMouseX = $event.clientX;
          initialMouseY = $event.clientY;
          return false;
      })

      elm.bind("dragend", function($event) {
          var dx = $event.clientX - initialMouseX;
          var dy = $event.clientY - initialMouseY;
          elm.css({
              top:  startY + dy + 'px',
              left: startX + dx + 'px'
          });
          console.log('dy',dy,'dx',dx);
          return false;
      })


      //return $compile(scope.element.html)(scope);
      //  scope.element;
      //console.log('in post fn', scope, elem, attrs, one)
      // return {
      //     pre: function (scope, elem, attrs, one) {
      //     },
      //     post: function(scope, elem, attrs, one) {
      //
      //     }
      // }
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
