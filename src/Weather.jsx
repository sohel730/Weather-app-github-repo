import { useEffect } from "react"
import { useState } from "react"
import "./Weather.css"






export const Weather =()=>{
    
    const [city, setCity]=useState(null)
    const [weather ,setweather]=useState(null)
    const [wind, setwind]=useState(null)
    
    const [input, setinput]=useState("Pune")

    const API=`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=daaf58790ed580b2dcc5624fc2f36947`


    



    useEffect(()=>{


        const fetchdata= async()=>{

            const response=await fetch(API);
            const data=await response.json();
            console.log(data);
            setCity(data.main);
            setweather(data.weather)
            setwind(data.wind)

            console.log(city);
            console.log(weather)
            console.log(wind)

        
        
        
        
        }

        fetchdata();

        


    },[input])

    
    return(<>
    
    
          
        
          <div className="superparent">

            <div className="parent">

             <div className="child">
 
              <input type="text"
                     value={input}
                     placeholder="enter the city name"
                     onChange={(event)=>{setinput(event.target.value)}} />


               </div> 

            
              {(!city)&&(!weather)&&(!wind) ? (<p className="message">no data found</p>):(
               
               <div>
                
 
 
              <div className="child">
 
                <h1>Weather for {input}</h1>
            
              </div>
 
              <div className="child">
 
                <h2>{city.temp} °C</h2>
 
                </div>
 
              <div className="child" id="lastchild">
                
                <h4 className="data">Weather : {weather[0].main}</h4>
                <h4 className="data">Temp_max : {city.temp_max} °C</h4>
                
               
               
                
               
                <h4 className="data">Sea_level : {city.sea_level}</h4>
                <h4  className="data">Wind_speed : {wind.speed} Km/hr</h4>
               
                
                <h4 className="data">Temp_min : {city.temp_min} °C</h4>
                <h4 className="data">Degree : {wind.deg}</h4>
                <h4 className="data">Pressure :  {city.pressure}</h4>
                <h4  className="data">Humidity : {city.humidity} %</h4>
                
               <div/>

             </div>

             </div>
            
           
            )}
 
           
 
     </div>

    
   
     </div>        
   
    
    </>)
}