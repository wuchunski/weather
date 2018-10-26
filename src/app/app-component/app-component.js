export default class AppComponent {
    constructor($log, $http) {
        this.$log = $log;
        this.$http = $http;
        this.location = '';
        this.isCelsius = true;
        this.isLoading = false;
        this.weatherData = {};
        this.isError = false;
        this.init($http);
    }

    init() {
        const vm = this;
        vm.isLoading = true;
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            vm.$http.jsonp("https://api.openweathermap.org/data/2.5/forecast/daily?lat=" + lat + "&lon=" + lon + "&cnt=5&APPID=a8f5261ee6863849df5a45497bb27163&callback=JSON_CALLBACK")
                .then(function (data) {
                    vm.isError = false;
                    vm.weatherData = data.data;
                    vm.isLoading = false;
                })
                .catch(function() {
                    vm.isError = true;
                    vm.isLoading = false;
                });
        });
    }

    refresh() {
        const vm = this;
        vm.isLoading = true;
        if (vm.location != '') {
            vm.$http.jsonp("https://api.openweathermap.org/data/2.5/forecast/daily?q=" + this.location + "&cnt=5&APPID=a8f5261ee6863849df5a45497bb27163&callback=JSON_CALLBACK").
            then(function (data) {
                vm.isError = false;
                vm.weatherData = data.data;
                vm.isLoading = false;
            })
            .catch(function() {
                vm.isError = true;
                vm.isLoading = false;
            });
        } else {
            vm.init();
        }
    }
		
    setDisplayFormat(isCelsius) {
        this.isCelsius = isCelsius;
    }

}
