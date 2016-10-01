angular.module("app", ['ui.router', 'pageslide-directive', angularDragula(angular), 'ngAnimate'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl:'views/home/home.html',
                controller: "HomeCtrl"
            })
            // .state('signin', {
            //     url: "/signin",
            //     template: 'Hello from the 2nd Tab!<br>' +
            //     '<a ui-sref="state2.list">Show List</a><div ui-view></div>',
            //     controller: 'SecondCtrl',
            //     data: {}
            // })
            // .state('signup', {
            //     url: "/signup",
            //     template: 'Hello from the 2nd Tab!<br>' +
            //     '<a ui-sref="state2.list">Show List</a><div ui-view></div>',
            //     controller: 'SecondCtrl',
            //     data: {}
            // })
            // .state('about', {
            //     url: "/signin",
            //     template: 'Hello from the 2nd Tab!<br>' +
            //     '<a ui-sref="state2.list">Show List</a><div ui-view></div>',
            //     controller: 'SecondCtrl',
            //     data: {}
            // })
            // .state('price', {
            //     url: "/signin",
            //     template: 'Hello from the 2nd Tab!<br>' +
            //     '<a ui-sref="state2.list">Show List</a><div ui-view></div>',
            //     controller: 'SecondCtrl',
            //     data: {}
            // })
            .state('builder', {
                url: '/builder',
                templateUrl: 'views/builder/builder.html',
                controller: 'BuilderCtrl'
            });

        $urlRouterProvider.otherwise(function($injector, $location){
            $injector.invoke(['$state', function($state) {
                $state.go('home');
            }]);
        });
    });
