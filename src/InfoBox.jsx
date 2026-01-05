import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import ForestIcon from '@mui/icons-material/Forest';

export default function InfoBox({info}){
    const HOT_IMG  = "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_IMG = "https://images.unsplash.com/photo-1422207134147-65fb81f59e38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    const RAIN_IMG = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
    const DEFAULT_IMG ="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";


    let imageURL = DEFAULT_IMG;

    const temp = info.temp;
    const weatherText = info.weather.toLowerCase();

    if (
        weatherText.includes("rain") ||
        weatherText.includes("drizzle") ||
        weatherText.includes("thunder")
    ) {
        imageURL = RAIN_IMG;
    } else if (temp <= 15) {
        imageURL = COLD_IMG;
    } else if (temp >= 30) {
        imageURL = HOT_IMG;
    }

    return(
        <div className="InfoBox">
            <div className='cardContainer'>
                <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={imageURL}
                        title={info.weather}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = DEFAULT_IMG;
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city} 
                        &nbsp;{(imageURL === COLD_IMG) && <AcUnitIcon />}
                        {(imageURL === RAIN_IMG) && <ThunderstormIcon />}
                        {(imageURL === HOT_IMG) && <SunnyIcon />}
                        {(imageURL === DEFAULT_IMG) && <ForestIcon />}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
                        <p>Temparature : {info.temp}&deg;C</p>
                        <p>Humidity : {info.humidity}</p>
                        <p>Min Temp : {info.tempMin}&deg;C</p>
                        <p>Max Temp : {info.tempMax}&deg;C</p>
                        <p>The Weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
                <p>This info is provided by <a target='_blank' href="https://openweathermap.org/current">OpenWeather</a> API may be inaccurate</p>
                </div>
            </div>
        </div>
    )
}