import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]=useState({
        city: "Wonderland",
        feelsLike: 16.94,
        humidity: 34,
        temp: 18.18,
        tempMax: 18.18,
        tempMin: 18.18,
        weather: "overcast clouds",
    })
    let updateInfo=(result)=>{
        setWeatherInfo(result)
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App by <a style={{textDecoration: "none"}} target="_blank" href="https://github.com/Manoj2202178">Me</a></h1>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    )
}