import { useEffect, useState } from "react"

function useWeatherInfo(city)
{
    const [data,setData]=useState({})
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0dacd886c5cff2d4fefa714b7c921724&units=metric`)
            .then((res) => res.json())
            .then((res) => setData(
                {Name:res.name,
                 Temperature:res.main.temp,
                 Humidity:res.main.humidity,
                 WindSpeed:res.wind.speed

                }))
            
    }, [city]); 

    return data;
}

export  default useWeatherInfo;
