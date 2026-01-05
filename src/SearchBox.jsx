import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city, setCity]=useState("");
    let [error, setError]=useState(false)
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY=import.meta.env.VITE_WEATHER_API_KEY

    let getWeatherInfo= async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse= await response.json();
            console.log(jsonResponse)
            let result={
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
            }
            console.log(result);
            setError(false)
            return result;
        }catch(err){
            throw err
        }
    }

    let handleChange=(event)=>{
        setCity(event.target.value)
    }
    let handleSubmit= async (event)=>{
        try{
            event.preventDefault();
            console.log(city)
            setCity("")
            let info= await getWeatherInfo();
            updateInfo(info)
            setError(false)
        }catch(err){
            setError(true)
        }
    }
    return(<>
        <div className="SearchBox">
            
            <form action="" onSubmit={handleSubmit}>
                <TextField id="outlined-basic" onChange={handleChange} label="Enter City Name" variant="outlined" required value={city} sx={{
                    input: { color: "white" },
                    label: { color: "white" },
                    "& label.Mui-focused": { color: "white" },
                    "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "white" },
                    "&:hover fieldset": { borderColor: "white" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                    },
                }}/>
                <br /><br />
                <Button variant="contained" type='submit' >
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No such place found in our API</p>}
            </form>
        </div>
    </>)
}