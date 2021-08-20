import "./DailyWeather.css"
import "../HourlyWeather/HourlyWeather.css"
import { useContext } from "react"
import { CityContext } from "../../Context/CityContext"
import SingleDayWeather from "./SingleDayWeather/SingleDayWeather"

export default function DailyWeather(){

    const {cityWeather} = useContext(CityContext)

    const dailyWeather = cityWeather.daily.map((daily,index)=>{
        return <SingleDayWeather daily={daily} timezone={cityWeather.timezone} key={index}/>
    })

    return(
        <div className="daily-weather-wrapper">
            <div className="hourly-weather">
                <p className="hourly-weather-title">Daily Weather</p>
                {dailyWeather}
            </div>
        </div>
    )
}