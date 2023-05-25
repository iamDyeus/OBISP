document.addEventListener('DOMContentLoaded', function() {

    let celsiusInput = document.querySelector('#celsius > input');
    let fahrenheitInput = document.querySelector('#fahrenheit > input');
    let kelvinInput = document.querySelector('#kelvin > input');
    let rankineInput = document.querySelector('#rankine > input');
    

    let btn = document.querySelector('.btn-clear');
    

    function roundNumber(number) {
      return Math.round(number * 100) / 100;
    }
  
    /* Celcius to Fahrenheit,Rankine,Kelvin */
    celsiusInput.addEventListener('input', function () {
      let cTemp = parseFloat(celsiusInput.value);
      let fTemp = (cTemp * (9 / 5)) + 32;
      let kTemp = cTemp + 273.15;
      let rTemp = (cTemp  + 273.15) * 9/5 + 491.67;
  
      fahrenheitInput.value = roundNumber(fTemp);
      rankineInput.value = roundNumber(rTemp);
      kelvinInput.value = roundNumber(kTemp);
    });
  
    /* Fahrenheit to Celcius,Rankine,Kelvin */
    fahrenheitInput.addEventListener('input', function () {
      let fTemp = parseFloat(fahrenheitInput.value);
      let cTemp = (fTemp - 32) * (5 / 9);
      let kTemp = (fTemp - 32) * (5 / 9) + 273.15;
      let rTemp = fTemp + 459.67;
  
      celsiusInput.value = roundNumber(cTemp);
      rankineInput.value = roundNumber(rTemp);
      kelvinInput.value = roundNumber(kTemp);
    });
  
    /* Kelvin to Celcius,Fahrenheit,Rankine */
    kelvinInput.addEventListener('input', function () {
      let kTemp = parseFloat(kelvinInput.value);
      let cTemp = kTemp - 273.15;
      let fTemp = (kTemp - 273.15) * (9 / 5) + 32;
      let rTemp = kTemp *  (9 / 5);

      celsiusInput.value = roundNumber(cTemp);
      fahrenheitInput.value = roundNumber(fTemp);
      rankineInput.value = roundNumber(rTemp);
    });
    
    /* Rankine to Celcius ,Fahrenheit, Kelvin */
    rankineInput.addEventListener('input', function () {
        let rTemp = parseFloat(rankineInput.value);
        let cTemp = (rTemp - 491.67) * 5/9;
        let fTemp = rTemp - 459.67;
        let kTemp = rTemp * 5/9;
    
        celsiusInput.value = roundNumber(rTemp);
        fahrenheitInput.value = roundNumber(fTemp);
        kelvinInput.value = roundNumber(kTemp);
      });


    btn.addEventListener('click', () => {
      celsiusInput.value = "";
      fahrenheitInput.value = "";
      rankineInput.value = "";
      kelvinInput.value = "";
    });

});
  