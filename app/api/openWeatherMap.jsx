var axios = require('axios');
//api key = d2bafdf217a4fbf610a3440944f24c35
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d2bafdf217a4fbf610a3440944f24c35&units=imperial';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        return axios.get(requestUrl).then(function (res){
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
                } else {
                    return res.data.main.temp;
                }

        }, function (res){
            throw new Error(res.data.message);
        });
    }
}
