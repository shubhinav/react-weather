import { useContext } from "react"
import { CityContext } from "../../Context/CityContext"
import { Icon } from '@iconify/react';
import "./CurrentWeather.css"
import {convertTime} from "../../Utils/ConvertTime";
import { getIcon, getIconColor } from "../../Utils/GetIconDetails";


export default function CurrentWeather(){

    const {cityWeather} = useContext(CityContext)
    const {current} = cityWeather
    const weather = current.weather[0]

    return(
        <>
            <div className="current-weather-main">
                <h1 className="current-weather-main-temp">{Math.round(current.temp)}<span>&#176;C</span></h1>
                <Icon icon={getIcon(weather.id)} style={{justifySelf: "right"}} width="100" height="100" color={getIconColor(weather.id)}/>
                <p className="current-weather-main-desc"><span>{weather.description}</span></p>
            </div>

            <div className="current-weather-secondary">
                <p><Icon icon="bi:sunrise" color="#208bff" width="20px" height="20px"/> <span>{convertTime(current.sunrise, cityWeather.timezone)}</span></p>
                <p><Icon icon="fluent:umbrella-24-regular"  color="#208bff" width="20px" height="20px"/> <span>{current.clouds}%</span></p>
                <p><Icon icon="ph:wind" color="#208bff" width="20px" height="20px"/> <span>{current.wind_speed} m/s</span></p>                     
                <p><Icon icon="bi:sunset" color="#208bff" width="20px" height="20px"/> <span>{convertTime(current.sunset, cityWeather.timezone)}</span></p>
                <p><Icon icon="carbon:temperature-feels-like" color="#208bff" width="20px" height="20px"/> <span>{Math.round(current.feels_like)}&#176;</span></p>
                <p><Icon icon="uil:raindrops" color="#208bff" width="20px" height="20px"/> <span>{current.humidity}%</span></p>
            </div>   
        </>
    )
}