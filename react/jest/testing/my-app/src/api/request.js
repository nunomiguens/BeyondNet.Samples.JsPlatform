export default function request(zipCode){
    return fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=fa0549e5a4ff38a5b16a2a1706984476`)
            .then(response => response.json())
            .then(data => data)
  }
  