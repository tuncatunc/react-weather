import { connect } from 'react-redux'
import React, {Component} from 'react'

import WeatherChart from '../components/weather-chart'
import WeatherMap from '../components/weather-map'

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humids = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const { lat, lon } = cityData.city.coord;

    return(
      <tr key={name} valign="bottom">
        <td><WeatherMap lat={lat} lon={lon}/></td>
        <td>
          <WeatherChart color={'green'} data={temps} units={'Celcius'}/>
        </td>
        <td>
          <WeatherChart color={'blue'} data={pressures} units={'hPa'}/>
        </td>
        <td>
          <WeatherChart color={'red'} data={humids} units={'%'}/>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>
                City
              </th>
              <th>
                Temperature (&deg;C)
              </th>
              <th>
                Pressure (hPa)
              </th>
              <th>
                Humidity (%)
              </th>
            </tr>          
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({weather}) => {
    return {
        weather
    };
}

export default connect(mapStateToProps)(WeatherList)