import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import styled from "styled-components";
export default function Mapa() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD0PE8i9RtHZ74TdH4k-Lwobf3hNCRR5xg",
  });

  const position = { lat: -16.74310562720147, lng: -43.854311839190714 };
  return (
    <Map>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={18}
        >
          <Marker
            position={position}
            options={{
              label: {
                text: "Luanny House",
                className: "mapPointer",
              },
            }}
          />
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </Map>
  );
}

const Map = styled.div`
  height: 100vh;
  .mapPointer {
    margin-top: -40px;
  }
`;
