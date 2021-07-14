import request from '@/api/request';

export default class Model {
  fetchResponse(fetch, zipCode){
    return fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=fa0549e5a4ff38a5b16a2a1706984476`)
            .then(response => response.json())
            .then(data => data)
  }
  requestResponse(zipCode){
    return request(zipCode);
  }
  convertToFahrenheit(kelvinTemp){
    return (Math.round((kelvinTemp-273.15)*1.8)+32)
  }

}
