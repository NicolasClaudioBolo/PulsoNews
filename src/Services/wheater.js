import axios from "axios";

 export const GetCurrentWeahter = async ( value ) => {
  const API_WEATHER = 'https://api.weatherapi.com/v1/current.json?key=173810b4591e4fd99ab03619220806&q=argentina,'
  try {
    const response = await axios.get(`${API_WEATHER}${value}&aqi=no`,
  
    
      {
        
          headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
          },
      
      }
      );
    // console.log(response.data)
    // console.log(response.data.current.condition.icon)
    // console.log(response.data.current.temp_c)
    // console.log(response.data.current.condition.icon)

    return response.data.current;
  } catch (error) {
    console.log(error);
  }
};

