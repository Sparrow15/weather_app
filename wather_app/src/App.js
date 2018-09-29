import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form.js';
import Titles from './Components/Titles.js';
import Weather from './Components/Weather.js';
import WeatherNav from './WeatherNav/WeatherNav.js';
import Forecast from './Components/Forecast.js';

const API_KEY = '40365547b01c47aff452a683bcf47ed4';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
      forecastArray: undefined,
      view: 'weather',
    };
  }

  viewHandler = target => {
    this.setState({
      view: target,
    });
  };

  callForecast = async cityVal => {
    const city = cityVal;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=40365547b01c47aff452a683bcf47ed4`
    );

    const data = await api_call.json();
    this.setState({
      forecastArray: data.list,
    });
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
    if (city && country) {
      this.setState({
        temperature: this.convertToF(data.main.temp),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: '',
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter values',
      });
    }
    this.callForecast();
  };

  convertToF = temp => {
    return ((temp - 273.15) * 1.8 + 32).toFixed(2);
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <WeatherNav changeView={this.viewHandler} />
                  {this.state.view === 'weather' && (
                    <Weather
                      temperature={this.state.temperature}
                      humidity={this.state.humidity}
                      city={this.state.city}
                      country={this.state.country}
                      description={this.state.description}
                      error={this.state.error}
                    />
                  )}
                  {this.state.view === 'forecast' && <Forecast forecastArray={this.state.forecastArray} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
