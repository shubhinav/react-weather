import React, {useState} from "react";

const CityContext = React.createContext()

function CityContextProvider(props){

    const [cityWeather, setCityWeather] = useState()
    const [cityName, setCityName] = useState("")
    const [cityCoord, setCityCoord] = useState({})
    const [canAccessRoute, setCanAccessRoute] = useState(false)
    const [isError, setIsError] = useState(false)

    async function getWeather(coord, name, units="metric"){
        setCanAccessRoute(true)
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely&units=${units}&appid=a234d9ce7f41191163430ed8334d02f5`
        
        const response  = await fetch(url)
        if(response.ok){
            const data = await response.json();
            setCityWeather(data)
            setCityName(name)
            setCityCoord(coord)
        }
        else{
            setIsError(true)
        }
    }

    function clearState(){
        setCanAccessRoute(false)
        setCityWeather([])
    }    
    
    return(
        <CityContext.Provider value={{canAccessRoute,
                                    cityName,
                                    cityCoord,
                                    cityWeather,
                                    getWeather,
                                    clearState,
                                    isError}}>
            {props.children}
        </CityContext.Provider>
    )
}

export {CityContextProvider, CityContext}


