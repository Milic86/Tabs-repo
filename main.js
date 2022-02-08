

function tabsContent(cityNameJson) {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameJson},CA&units=metric&appid=4c6e9824d59185239dff414e29ae98a2`)  
  .then(response => response.json())
  .then(jsonData => {
    console.log(jsonData);
    const container = document.querySelector('.tabs__tabcontent');
    container.style.display = 'block';
    container.innerHTML = `
    <h3 class="tabs__tabcontent-name">City: ${jsonData.name}</h3>
    <p class="tabs__tabcontent-condition">Condition: ${jsonData.weather[0].description}</p>
    <p class="tabs__tabcontent-condition">Feels like: ${jsonData.main.feels_like} &#8451;</p>
    <p class="tabs__tabcontent-condition">Current Temperature: ${jsonData.main.temp} &#8451;</p>
    <p class="tabs__tabcontent-condition">Hottest Temperature: ${jsonData.main.temp_max} &#8451;</p>
    <p class="tabs__tabcontent-condition">Coldest Temperature: ${jsonData.main.temp_min} &#8451;</p>
    `;
    
  })
  
};
