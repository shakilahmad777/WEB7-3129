
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import './App.css'

function App() {
    const center = {
        lat: 23.8103,
        lng: 90.4125
      };

    return (
    <>
        <h1>Simple Google Maps</h1>
        <LoadScript googleMapsApiKey='API_KEY'>
            <GoogleMap
                mapContainerStyle={{ width: "100%", height: "400px" }}
                center={center}
                zoom={10}
            />
        </LoadScript>
    </>
  )
}

export default App
