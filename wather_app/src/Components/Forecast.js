import React from 'react';

const Forecast = props => (
  <div className="weather__info__forcast">
  {props.forecastArray && props.forecastArray.map((forecast, i)=> {
      return (
        <div>
        <p className="weather__key">
        {/* {props.mapTimeReturn()} */}
  Forecast:
          <span className="weather__value"> {forecast.weather[0].description}</span>

        </p>
        <p className="weather__key">
  Time:
          <span className="weather__value"> {new Date(forecast.dt_txt).toLocaleDateString('en-US', {month: 'short', day: "numeric", hour: "2-digit"})}</span>
        </p>
        </div>
      );
  })}
  </div>
);

export default Forecast;
