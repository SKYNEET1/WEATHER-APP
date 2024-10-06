const API_KEY = "748c26ca6d36f7ba59b3e776bf89446a";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon1 = document.querySelector(".weathericon");

async function checkweather(city) {
   const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        const data = await response.json();
       
        

        
       
        document.querySelector(".city").innerHTML = data.name;
        // update the city name.
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" ;   
        // updating the temperature.
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        // updating the humideity.
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clouds"){
            weathericon1.src = "clouds.png";
        }else  if(data.weather[0].main == "Clear"){
            weathericon1.src = "clear.png";
        }else  if(data.weather[0].main == "Rain"){
            weathericon1.src = "rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            weathericon1.src = "drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weathericon1.src = "mist.png";
        }else if(data.weather[0].main == "Snow"){
            weathericon1.src = "snow.png";
        }
    
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none";
    }


}




searchbtn.addEventListener('click', (value) =>{
    checkweather(searchbox.value);
    // it will call this function
})


searchbox.addEventListener('keydown', (e)=>{
    if(e.keyCode==13){
        searchbtn.click();
    }
})
//  here whem we key down  the enter key it will call the searchbtn click event. That is it will search
