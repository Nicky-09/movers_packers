import React , {useEffect , useRef}from 'react'
import "./Login.scss";
import { Loader } from '@googlemaps/js-api-loader';

function Maps() {


  const mapRef= useRef (null);
    const mapLoaderRef = useRef(null);
    const google = useRef(null);
    const zoomRef = useRef(15);

    const loader = new Loader({
      apiKey: "",
      version: "weekly",
      libraries: ["places"]
    });


    
    loader
    .load()
    .then((google) => {
      new google.maps.Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: zoomRef.current,
        mapTypeId: 'terrain',
        });
    })
    .catch((e) => {
      // do something
    });

    useEffect(() => {
     if(google && google.maps){
      const points=[{lat: -34.397, lng: 150.644},{lat: 34.397, lng: 150.644}];


        // var marker = new google.maps.Marker({
        //   position: new google.maps.LatLng(points[0]),
        //   map: mapRef.current,
        //   title: 'Hello World!'
        // });
        // plot markers on map
        points.forEach(point => {
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(point),
            map: mapRef.current,
            title: 'Hello World!'
          });
        }
        );

     }
    }
    , []);




      
  return (
    <div ref={mapRef} className="maps-container"></div>
  )
}

export default Maps