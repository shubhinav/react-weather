import { Link } from 'react-router-dom'
import { useContext} from 'react'
import { CityContext } from '../Context/CityContext'
import CardContainer from '../Containers/CardContainer'
import CurrentWeather from '../Components/CurrentWeather/CurrentWeather'
import HourlyWeather from '../Components/HourlyWeather/HourlyWeather'
import Loader from "../Components/Loader/Loader"
import { Icon } from '@iconify/react';
import "./Weather.css"

export default function Weather(){

    const {cityName, cityWeather, clearState, isError} = useContext(CityContext)
    
    window.onpopstate = function(e) {
        clearState();
     };

    window.onhashchange = function(e){
        clearState();
     }

    return(
        <>
            {isError ? <h2 style={{textAlign: "center", marginTop: "2em"}}>There was an error. Please try again.</h2> 
            : 
            (cityWeather && cityWeather.length!==0 
            ? 
            <div className="weather-container">
                <header className="weather-header">
                    <Link to="/">
                        <button className="weather-header-back-btn" 
                                onClick={()=>clearState()}>
                                {<Icon icon="akar-icons:chevron-left" color= "#333" width="28px" height="28px "/>}
                        </button>
                    </Link>
                    <h2 className="weather-header-city-name">{cityName}</h2>
                </header>
                <CardContainer>
                    <CurrentWeather/>
                </CardContainer>
                <CardContainer>
                    <HourlyWeather/>
                </CardContainer>
            </div>
            : 
            <Loader/>)}
        </>
    )
}