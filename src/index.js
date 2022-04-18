import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=47b6e4f6da18dfaeecc5a984e1fc78c6
    `;
    // let error = new Error;


    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
      
    };

    request.open("GET", url, true);
    request.send();
   
  
      function getElements(response) {
      let farTemp = ((response.main.temp - 273.15) * 9/5 + 32).toFixed(2);
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in fahrenheit is ${farTemp} degrees.`);
    
    }
  });
});


