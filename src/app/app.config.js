export function routing($urlRouterProvider, $stateProvider) {
   $stateProvider
        .state('app', {
            abstract: true,
            template: '<app-component></app-component>'
        })

}
