import 'leaflet/dist/leaflet.css';
import './App.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function App() {

    return (
        <>
            <h1>React Developer Map</h1>
            <MapContainer
                center={[23.8103, 90.4125]}
                zoom={13}
                style={{ height: "400px", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[23.8103, 90.4125]}>
                    <Popup>
                        My Location
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}

export default App
