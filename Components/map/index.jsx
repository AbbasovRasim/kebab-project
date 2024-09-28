import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GoogleMapComponent = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <LoadScript googleMapsApiKey="https://www.google.com/maps/@39.091919,-94.5757195,10z?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D">
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
// import { Map, Marker } from "react-simple-maps";

// const geoUrl =
//   "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson/world-110m.json";

// const MapComponent = () => {
//   return (
//     <Map
//       width={800}
//       height={600}
//       geoUrl={geoUrl}
//       fill="#D6E2FF"
//       stroke="#6F5E53"
//       strokeWidth={0.5}
//     >
//       <Marker coordinates={[39.0997, -94.5783]} />
//     </Map>
//   );
// };

// export default MapComponent;
