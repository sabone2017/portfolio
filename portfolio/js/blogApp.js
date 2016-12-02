'use strict';

angular.module('blogApp' , [])
  .controller('BlogController' , ['$scope' , function($scope){

    $scope.recentPosts=[
      {
        title: 'Making of:',
        headerLink: '#',
        headerImg: 'assets/images/DSC_0143.jpg',
        //footerViews:
        //footerComments:
      },
      {
        title: 'Cons Baby',
        headerLink: '#',
        headerImg: 'assets/images/DSC_0169.jpg',
        //footerViews:
        //footerComments:
      }
    ];
  }]);
