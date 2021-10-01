

function askWeather() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                      var response = JSON.parse(this.responseText);
            document.getElementById("weather-result").innerHTML = response.current_condition.condition;
        }
    };
    request.open("GET", "https://www.prevision-meteo.ch/services/json/concarneau");
    request.send();
  }
  document.getElementById("ask-weather").addEventListener("click", function(e) {
    askWeather();
  });
  






  function askWeather2() {
    var request2 = new XMLHttpRequest();
    request2.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                      var response = JSON.parse(this.responseText);
            document.getElementById("weather-result2").innerHTML = response.current_condition.condition;
        }
    };
    request2.open("GET", "https://www.prevision-meteo.ch/services/json/alençon");
    request2.send();
  }
  document.getElementById("ask-weather2").addEventListener("click", function(e) {
    askWeather2();
  });








  function askWeather3() {
    var request3 = new XMLHttpRequest();
    request3.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                      var response = JSON.parse(this.responseText);
            document.getElementById("weather-result3").innerHTML = response.current_condition.condition;
        }
    };
    request3.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
    request3.send();
  }
  document.getElementById("ask-weather3").addEventListener("click", function(e) {
    askWeather3();
  });