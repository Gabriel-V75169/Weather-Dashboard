// const apiKey = 'dd1d9de2bd9e57c7a7c9e5d7f23e13cf';

const input = document.querySelector('.search');
const search = document.querySelector('.btn');



search.addEventListener('click', function() {
    // fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=1&appid=${apiKey}`)
    // .then(Response => Response.json())

    console.log(input.value);
   
})

