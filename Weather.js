let searchBar=document.getElementById("searchBox");
let Searchbutton=document.getElementById("searchButton");
let city=document.getElementById("cityName");
let Temp=document.getElementById("temp");
let Sky=document.getElementById("sky");
let Wind=document.getElementById("wind");
Searchbutton.addEventListener('click',()=>{
    let name=searchBar.value;
    searchWeather(name)
}) 
    searchWeather=(Name)=>{
        console.log("hi from searchweather",Name);
    
   
    
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+Name+"&appid=28c1419546932341850558b81d117301&units=metric")
            .then((res)=>{
                
                return res.json()
            }).then((data)=>{
                UpdatePage(data)
            })
            .catch((err)=>{
                console.log(err);
            })
             
    } 
let UpdatePage=(Data)=>{
     console.log(Data)
     let WeatherData=Data;
     let temperature=WeatherData.main.temp;
     let Nameofcity=WeatherData.name;
     let clouds=WeatherData.weather[0].description;
     let Speed=WeatherData.wind.Speed;
     Temp.innerHTML=temperature;
     city.innerHTML=Nameofcity;
     Sky.innerHTML=clouds;
     Wind.innerHTML="wind speed"+Speed+"m/s";
}    
