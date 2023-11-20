const apiKey = 'dd1d9de2bd9e57c7a7c9e5d7f23e13cf';

const input = document.querySelector('.search');
const search = document.querySelector('.btn');
const temp = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const cityName = document.querySelector('.name');



search.addEventListener('click', function() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&limit=1&appid=${apiKey}`)
    .then(Response => Response.json())
    .then(data => {
        const cityValue = data['name'];
        const tempValue = data['main']['temp'];
        const windvalue = data['wind']['speed'];
        const humidityValue = data['main']['humidity'];

        cityName.innerHTML = cityValue;
        temp.innerHTML = tempValue;
        wind.innerHTML = windvalue;
        humidity.innerHTML = humidityValue;
    })
   
})

