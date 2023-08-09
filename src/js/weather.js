function getWeather(){
  const city = document.getElementById('city').value;
  const apiKey = '6f5b14df8f964d2799543704230908' // 後から記載
//  const url = 'API_ENDPOINT?city=${city}&appid=${apiKey}`' //適切なエンドポイントを記載
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`; //適切なエンドポイントを記載
  fetch(url)
    .then(response =>{
      if(!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data=>{
      const weather = data.weather[0].description;
      document.getElementById('result').innerText = `Weather in ${city}: ${weather}`;
    })
    .catch(error =>{
      document.getElementById('result').innerText = 'Filed to get weather';
    })
}

