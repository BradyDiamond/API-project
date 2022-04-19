import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './weather-service.js'

function clearFields() {
  $('#location').val("");
  $('.showErrors').text("");
  $('.showHumidity').text("");
  $('.showTemp').text("");
}

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    clearFields();
    let promise = WeatherService.getWeather(city);
    promise.then(function(response) {
      const body = JSON.parse(response);
      let farTemp = ((response.main.temp - 273.15) * 9/5 + 32).toFixed(2);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in fahrenheit is ${farTemp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});
//     request.onreadystatechange = function() {
//       if (this.readyState === 4 && this.status === 200) {
//         const response = JSON.parse(this.responseText);
//         getElements(response);
//         console.log(this.status)
//       }
//     }; 
//       request.open("GET", url, true);
//       request.send();
   
//       function getElements(response) {
//       let farTemp = ((response.main.temp - 273.15) * 9/5 + 32).toFixed(2);
//       $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//       $('.showTemp').text(`The temperature in fahrenheit is ${farTemp} degrees.`);
    
//     }
//   });
// });


