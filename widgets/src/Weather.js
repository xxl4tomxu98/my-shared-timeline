import React from 'react';
class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: null
    }
  }

  componentDidMount() {
    const success = (res) => {
      //console.log('res......', res);
      const { latitude, longitude } = res.coords;
      //console.log(latitude, longitude)
      this.pollWeather(latitude, longitude);
    }
    navigator.geolocation.getCurrentPosition(success);
  }

  pollWeather = async (latitude,longtitude) => {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=c7744e2c42814030baa4b50d9fafa5c2`);
    const weather = await res.json();
    console.log("data....", weather);
    this.setState({ weather });
  }

  render () {
    const weather = this.state.weather;
    let content = <div>loading...</div>
    if(weather) {
      const temp = ((weather.main.temp - 273.15) * 1.8 + 32).toFixed(1);
      const condition = weather.weather[0].description;
      const windSpeed = weather.wind.speed;
      const location = weather.name;

      content = <div>
        <h2>
          Location:{location}
        </h2>
        <h2>
          Condition:{condition}
        </h2>
        <h2>
          Temperature:{temp} Degrees
        </h2>
        <h2>
          Wind Speed:{windSpeed}
        </h2>
      </div>
    }

    return (
      <div>
        <h1>Weather</h1>
        {content}
      </div>
    )
  }
}

export default Weather;
