import { useContext } from "react"
import "./HourlyWeather.css"
import { CityContext } from "../../Context/CityContext"
import { convertTime } from "../../Utils/ConvertTime"
import { Icon } from '@iconify/react';
import { getIcon, getIconColor } from "../../Utils/GetIconDetails";

export default function HourlyWeather(){
    const {cityWeather} = useContext(CityContext)
    const {hourly} = cityWeather

    const oneHourWeather = hourly.map((hourly,index)=>{
        return <div className="single-hour-weather" key={index}>
                    <p>{convertTime(hourly.dt, cityWeather.timezone)}</p>
                    <Icon icon={getIcon(hourly.weather[0].id)} color={getIconColor(hourly.weather[0].id)} width="40" height="40" style={{margin: "5px 0"}} />
                    <p>{hourly.temp}&#176;</p>
                </div>
    })
    return(
        <div className="hourly-weather-wrapper">
            <div className="hourly-weather">
                <p className="hourly-weather-title">Hourly Weather</p>
                <div className="hourly-weather-content">
                    {oneHourWeather}
                </div>
            </div>
        </div>
    )
}