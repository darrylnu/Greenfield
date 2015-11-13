// add module for overall app
angular.module('bootCamp', [
	// add dependencies here
	'ui.router',
	'bootCamp.landingPage',
	'bootCamp.login',
	'bootCamp.signup',
	'bootCamp.userHome'

])

// config adds states that correspond with templates and controllers for each view
.config(/*'$stateProvider', '$urlRouterProvider', '$locationProvider',*/ function($stateProvider, $urlRouterProvider, $locationProvider) {

	// default route goes to index
	$urlRouterProvider.otherwise('/landingPage');

	// controller logic live in js files next to each html file
	$stateProvider
		.state('landingPage', {
			url: '/landingPage',
			templateUrl: 'landingPage/landingPage.html',
			controller: 'LandingPageController'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'login/login.html',
			controller: 'LoginController'
		})
		.state('signup', {
			url: '/signup',
			templateUrl: 'signup/signup.html',
			controller: 'SignupController'
		})
		.state('userHome', {
			url: '/userHome',
			templateUrl: 'userHome/userHome.html',
			controller: 'UserHomeController'
		})
});