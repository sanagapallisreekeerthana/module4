(function() {
    angular.module('MenuApp')
    .component('items', {
        template: `
            <h2>Items in {{$ctrl.categoryName}}</h2>
            <ul>
                <li ng-repeat="item in $ctrl.items">
                    {{ item.name }} - ${{ item.price }}
                </li>
            </ul>
        `,
        bindings: {
            items: '<',
            categoryName: '<'
        }
    });
})();
