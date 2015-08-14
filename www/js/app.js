// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('memory', ['ionic','memory.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(0);

})

//
// .config(function($stateProvider, $urlRouterProvider,$httpProvider, $logProvider) {
//       $logProvider.debugEnabled(true);
//
//       $stateProvider
//
//     .state('app', {
//     url: '/app',
//     // abstract: true,
//     templateUrl: 'templates/menu.html',
//     controller: 'AppCtrl'
//   })
//
//   .state('login', {
//     url: '/login',
//     templateUrl: 'templates/login.html',
//     controller: 'LoginCtrl'
//   })
//
//   .state('app.dashboard', {
//     url: '/dashboard',
//     views: {
//       'menuContent': {
//         templateUrl: 'templates/dashboard.html',
//         controller: 'DashboardCtrl'
//       }
//     }
//   })
//
//   .state('app.tasks', {
//       url: '/tasks',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/tasks.html',
//           controller: 'TasksCtrl'
//         }
//       }
//     })
//       .state('app.departments', {
//         url: '/departments',
//         resolve: {
//           departmentDetails: function(DepartmentService) {
//             return DepartmentService.getDepartments();
//           }
//         },
//         views: {
//           'menuContent': {
//             templateUrl: 'templates/departments.html',
//             controller: 'DepartmentsCtrl'
//           }
//         }
//       })
//
//     .state('app.alerts', {
//       url: '/alerts',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/alerts.html',
//           controller: 'AlertsCtrl'
//         }
//       }
//     })
//
//       .state('app.alertsDetails', {
//         url: '/alertsDetails',
//         views: {
//           'menuContent': {
//             templateUrl: 'templates/alerts_details.html',
//             controller: 'AlertsCtrl'
//           }
//         }
//       })
//
//       .state('app.documents', {
//         url: '/documents',
//         views: {
//           'menuContent': {
//             templateUrl: 'templates/documents.html',
//             controller: 'DocumentsCtrl'
//           }
//         }
//       });
//
//
//   // if none of the above states are matched, use this as the fallback
//   $urlRouterProvider.otherwise('/login');
//   $httpProvider.interceptors.push('MCSInterceptor');
// });
//
