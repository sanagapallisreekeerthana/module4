(function() {
    angular.module('MenuApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                template: `<h1>Welcome to our Restaurant</h1>
                           <a ui-sref="categories">View Categories</a>`
            })
            .state('categories', {
                url: '/categories',
                template: '<categories categories="$ctrl.categories"></categories>',
                controller: 'CategoriesController as $ctrl',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items', {
                url: '/items?categoryShortName',
                template: '<items items="$ctrl.items" category-name="$ctrl.categoryName"></items>',
                controller: 'ItemsController as $ctrl',
                resolve: {
                    items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                    }],
                    categoryName: ['$stateParams', function($stateParams) {
                        return $stateParams.categoryShortName; // Just a placeholder, you might want to get the actual name.
                    }]
                }
            });
    }]);
})();
