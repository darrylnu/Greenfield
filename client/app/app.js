
//add module for overall app
angular.module('bootCamp', [
	// add dependencies here
	'ui.router',
	'bootCamp.landingPage',
	'bootCamp.login',
	'bootCamp.signup',
	'bootCamp.userHome',
	'bootCamp.blog',
	'bootCamp.sandbox',
	'bootCamp.profileList',
	'bootCamp.toyproblems',
	'bootCamp.map'

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
			controller: 'LandingPageController',
			params: {
				autoActivateChild: 'landingPage.map'
			}
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
			templateUrl: 'Map/homeMap.html',
			controller: 'MapController'
		})
		.state('blog', {
			url: '/blog',
			templateUrl: 'blog/blog.html',
			controller: 'BlogController'
		})
		.state('sandbox', {
			url: '/sandbox',
			templateUrl: 'sandbox/sandbox.html',
			controller: 'SandboxController'
		})
		.state('landingPage.map', {
			url: '/map',
			templateUrl: 'Map/homeMap.html',
			controller: 'MapController'
		})
		.state('landingPage.map.profileList', {
			url: '/profileList',
			templateUrl: 'landingPage/profileList/profileList.html',
			controller: 'ProfileListController'
		})
		.state('toyproblems', {
			url: '/toyproblems',
			templateUrl: 'toyproblems/toyproblems.html',
			controller: 'ToyProblemsController'
		})
		.state('landingPage.map.profileListSF', {
			url: '/profileList/SF',
			templateUrl: 'landingPage/profileList/profileList.html',
			controller: 'ProfileListController'
		})
		.state('landingPage.map.profileListSeattle', {
			url: '/profileList/Seattle',
			templateUrl: 'landingPage/profileList/profileList.html',
			controller: 'ProfileListController'
		})
		.state('landingPage.map.profileListNY', {
			url: '/profileList/NY',
			templateUrl: 'landingPage/profileList/profileList.html',
			controller: 'ProfileListController'
		})
		.state('landingPage.map.profileListAtlanta', {
			url: '/profileList/atlanta',
			templateUrl: 'landingPage/profileList/profileList.html',
			controller: 'ProfileListController'
		})
		.state('landingPage.map.profileListAustin', {
			url: '/profileList/austin',
			templateUrl: 'landingPage/profileList/profileList.html',
			controller: 'ProfileListController'
		})
		.state('landingPage.map.profileListLA', {
			url: '/profileList/LA',
			templateUrl: 'landingPage/profileList/profileList.html',
			controller: 'ProfileListController'
		})
		.state('landingPage.map.profileListDallas', {
			url: '/profileList/dallas',
			templateUrl: 'landingPage/profileList/profileList.html',
			controller: 'ProfileListController'
		})
		.state('landingPage.map.profileListMiami', {
			url: '/profileList/miami',
			templateUrl: 'landingPage/profileList/profileList.html',
			controller: 'ProfileListController'
		})
		.state('landingPage.map.profileListChicago', {
			url: '/profileList/chicago',
			templateUrl: 'landingPage/profileList/profileList.html',
			controller: 'ProfileListController'
		})
		.state('landingPage.map.profileListPortland', {
			url: '/profileList/portland',
			templateUrl: 'landingPage/profileList/profileList.html',
			controller: 'ProfileListController'
		})
		.state('landingPage.map.profileListIndy', {
			url: '/profileList/indy',
			templateUrl: 'landingPage/profileList/profileList.html',
			controller: 'ProfileListController'
		})
		.state('landingPage.map.profileListBoston', {
			url: '/profileList/boston',
			templateUrl: 'landingPage/profileList/profileList.html',
			controller: 'ProfileListController'
		})


});