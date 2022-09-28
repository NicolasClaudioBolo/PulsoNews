import axios from "axios";

export const getCurrentDolar = async (
//   setWeatherValue,
//   setCurrentValue,
) => {
  const WEATHER_API_SERVER = `https://api.estadisticasbcra.com/base`;
  const ACCESS_TOKEN = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODUzOTM0MTcsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJlbWFudWVsY29uc3RhbmNpby5kZXZAZ21haWwuY29tIn0.tAtsTNWzoizXrDghDAPR_smCBjHT6FDIj92AuNzu4IBPVvq6mwDmXddmF8_224nV1IxMAeRH-vc0SJhviAG6uw'

  const config = {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` }
};
  try {
    const response = await axios.get(`${WEATHER_API_SERVER}`, {
        config
    });
    // console.log(response)
    // console.log(response.location.name)
    // console.log(response.current.temp_c)
    // console.log(response.current.condition.icon)
    // setCount(response.data.count);
    // setPokemonList(response.data.results);

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};