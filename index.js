const apikey="bd0138bf90af35b8a4ac1928b9245c9e"
    const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

    const searchbox = document.querySelector(".search input");
    const searchbtn = document.querySelector(".search button");
    const weathericon = document.querySelector("wicon");

    async function checkweather(city){
        const response = await fetch(apiurl + city +`&appid=${apikey}`);
        var data = await response.json();

        console.log(data)
        
        document.querySelector(".city").innerHTML = data.name; 
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C"; 
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%"; 
        document.querySelector(".wind").innerHTML = data.wind.speed+"km/hr"; 

        if(data.weather[0].main=="Clouds"){
            weathericon.src = "img/clouds.png";
        }

        else if(data.weather[0].main=="Rainy"){
            weathericon.src = "img/clouds.png";
        }
        else if(data.weather[0].main=="Mist"){
            weathericon.src = "img/clouds.png";
        }

        else if(data.weather[0].main=="Clear"){
            weathericon.src = "img/clouds.png";
        }

        else if(data.weather[0].main=="Drizzy"){
            weathericon.src = "img/clouds.png";
        }
    }

    searchbtn.addEventListener("click",()=>{ 
        checkweather(searchbox.value);
    })
