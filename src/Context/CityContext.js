import React, {useState} from "react";

const CityContext = React.createContext()

function CityContextProvider(props){

    const [cityWeather, setCityWeather] = useState()
    const [cityName, setCityName] = useState("")
    const [canAccessRoute, setCanAccessRoute] = useState(false)
    const [isError, setIsError] = useState("")

    async function getWeather(coord, name){
        setCanAccessRoute(true)
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely&units=metric&appid=2fc55cd77d908bafa05668ad24c2cafc`
        try{
            const response  = await fetch(url)
            const data = await response.json();
            setCityWeather(data)
            setCityName(name)
        }  
        catch(err){
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
                                    cityWeather,
                                    getWeather,
                                    clearState,
                                    isError}}>
            {props.children}
        </CityContext.Provider>
    )
}

export {CityContextProvider, CityContext}


