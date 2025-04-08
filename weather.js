import dotenv from "dotenv";

dotenv.config({
    path: ".env"
})

const key = process.env.API_KEY;
const form = document.querySelector('form');

form.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        e.preventDefault();
        const location = document.getElementById('location').value
        console.log(location)
        fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=no`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data.location);
            const name = data.location.name;
            const region = data.location.region;
            const country = data.location.country;

            console.log(data.current);
            const latitude = data.location.lat;
            const longitude = data.location.lon;

            const temp = data.current.temp_c;
            const weather = data.current.condition.text;
            const fells_like = data.current.feelslike_c;
            
            const humidity = data.current.humidity;
            const wind_speed = data.current.wind_kph;
            const wind_direction = data.current.wind_dir;
            
            if(data !== null){
                const body = document.querySelector('body');
                body.style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(Images/background_image.jpg)"
                body.style.backgroundSize = "cover"

                const Block_1 = document.getElementById('Block_1');
                Block_1.style.visibility = "visible";
                
                const Block_2 = document.getElementById('Block_2');
                Block_2.style.visibility = "visible";
                
                const Block_3 = document.getElementById('Block_3');
                Block_3.style.visibility = "visible";
                
                const Block_4 = document.getElementById('Block_4');
                Block_4.style.visibility = "visible";

                const Display_1 = document.getElementById('Display_1');
                Display_1.innerHTML = `Name of the city :${name}`;

                const Display_2 = document.getElementById('Display_2');
                Display_2.innerHTML = `Region :${region}`;

                const Display_3 = document.getElementById('Display_3');
                Display_3.innerHTML = `Country :${country}`;
                
                const Display_4 = document.getElementById('Display_4');
                Display_4.innerHTML = `Latitude :${latitude}`;

                const Display_5 = document.getElementById('Display_5');
                Display_5.innerHTML = `Longitude :${longitude}`;

                const Display_6 = document.getElementById('Display_6');
                Display_6.innerHTML = `Temperature :${temp}°C`;
                
                const Display_7 = document.getElementById('Display_7');
                Display_7.innerHTML = `Weather :${weather}`;
                
                const Display_8 = document.getElementById('Display_8');
                Display_8.innerHTML = `Feels like :${fells_like}°C`;
                
                const Display_9 = document.getElementById('Display_9');
                Display_9.innerHTML = `Humidity :${humidity}`;
                
                const Display_10 = document.getElementById('Display_10');
                Display_10.innerHTML = `Wind Speed :${wind_speed} kph`;
                
                const Display_11 = document.getElementById('Display_11');
                Display_11.innerHTML = `Wind Direction :${wind_direction}`;

            } else{
                alert("Location not found, Please try again.")
            }
        })
        .catch((error) => console.log(error))
        
    }
})


