import { useState, useContext } from "react"
import { CityContext } from "../../Context/CityContext"
import { Icon } from '@iconify/react';
import "./CurrentWeather.css"
import { useEffect } from "react";
// import { useEffect } from "react";


export default function CurrentWeather(){

    const {cityWeather} = useContext(CityContext)
    const {current} = cityWeather
    const[icon, setIcon] = useState("")
    const [iconColor, setIconColor] = useState("")
    const weather = current.weather[0]

    useEffect(()=>{
        switch (weather.id.toString()[0]) {
            case "2":
                setIcon("ion:thunderstorm-outline")
                setIconColor("grey")
                break;
            case "3":
                setIcon("carbon:rain-drizzle")
                setIconColor("grey")
                break;
            case "5":
                setIcon("carbon:rain-heavy")
                setIconColor("grey")
                break;
            case "6":
                setIcon("bi:snow")
                setIconColor("#A5C6F7")
                break;
            case "7":
                setIcon("mi:fog")
                setIconColor("grey")
                break;
            case "8":
                if(weather.id===800){
                    setIcon("grommet-icons:sun")
                    setIconColor("#FDC500")
                }
                else{
                    setIcon("bi:clouds")
                    setIconColor("grey")
                }
                break;
            default:
                setIcon("")
                setIconColor("")
            break;
        }
    },[weather])

    function convertTime(time){
        let date = new Date(time * 1000);
        return date.toLocaleString('en-US', { timeZone: cityWeather.timezone, timeStyle: "short" })
    }

    return(
        <>
            <div className="current-weather-main">
                <h1 className="current-weather-main-temp">{Math.round(current.temp)}<span>&#176;C</span></h1>
                <Icon style={{justifySelf: "right"}} icon={icon} color={iconColor} width="100" height="100" />
                <p className="current-weather-main-desc"><span>{weather.description}</span></p>
            </div>

            <div className="current-weather-secondary">
                <p><Icon icon="bi:sunrise" color="#208bff" width="20px" height="20px"/> <span>{convertTime(current.sunrise)}</span></p>
                <p><Icon icon="fluent:umbrella-24-regular"  color="#208bff" width="20px" height="20px"/> <span>{current.clouds}%</span></p>
                <p><Icon icon="ph:wind" color="#208bff" width="20px" height="20px"/> <span>{current.wind_speed} m/s</span></p>                     
                <p><Icon icon="bi:sunset" color="#208bff" width="20px" height="20px"/> <span>{convertTime(current.sunset)}</span></p>
                <p><Icon icon="carbon:temperature-feels-like" color="#208bff" width="20px" height="20px"/> <span>{Math.round(current.feels_like)}&#176;</span></p>
                <p><Icon icon="uil:raindrops" color="#208bff" width="20px" height="20px"/> <span>{current.humidity}%</span></p>
            </div>   
        </>
    )
}