import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';
import { Marker } from '@react-google-maps/api';

const Map = ({divison}) => {

    const containerStyle = {
        width: '100%',
        height: '660px',
      }; 

      const LatLongData = (data) => {
        if(data === 'dhaka'){
          return {lat: 23.7338,lng: 90.3929 }
        }
        else if(data === 'rangpur'){
          return {lat: 25.7439,lng: 89.2752}
        }
        else if(data === 'barisal'){
          return {lat: 22.7010,lng: 90.3535}
        }
        else if(data === 'chittagong'){
          return {lat: 22.3569,lng: 91.7832}
        }
        else if(data === 'khulna'){
          return {lat: 22.8456,lng: 89.5403}
        }
        else if(data === 'mymensingh'){
          return {lat: 24.7471,lng: 90.4203}
        }
        else if(data === 'rajshahi'){
          return {lat: 24.3745,lng: 88.6042}
        }
        else if(data === 'sylhet'){
          return {lat: 24.8949,lng: 91.8687}
        }
      } 


      const center = LatLongData(divison);
        
 
      const onLoad = marker => {
        // console.log('marker: ', marker)
      }
      const position = {
        lat: 37.772,
        lng: -122.214
      }
    return (
        <div>
            <LoadScript
        googleMapsApiKey= 'AIzaSyA2l-w7mk3UeCjRuv-8SE0zMroRF3DM5oI'
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        markers={Marker}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
        <Marker
      onLoad={onLoad}
      position={position}
    />
      </GoogleMap>
      
    </LoadScript>
        </div>
    );
};

export default Map;