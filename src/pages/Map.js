import React,{Fragment, useState, useEffect, useCallback} from 'react';
import { LoadScript, GoogleMap, Polygon } from "@react-google-maps/api";
import { useLocation, useHistory } from "react-router-dom";
import loader from "../images/loader.svg"
import axios from 'axios';

export default function Map() {

  const location = useLocation();
  const history = useHistory();
  let cod = location.state.e

  function getCenter(coordinates) {
    let x = coordinates.map(c => c.lat)
    let y = coordinates.map(c => c.lng)
  
    let minX = Math.min.apply(null, x)
    let maxX = Math.max.apply(null, x)
  
    let minY = Math.min.apply(null, y)
    let maxY = Math.max.apply(null, y)
  
    return {
      lat: (minX + maxX) / 2,
      lng: (minY + maxY) / 2
    }
  }

  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [center, setCenter] = useState({})
  const [path, setPath] = useState([{}]);

  const goBack = () => {
    history.goBack();
  }

  const fetchData = useCallback(async () => {
    axios.get('./data/maps.json')
        .then((res) => {
          setData(res.data.features.filter( x => x.properties.CODICE === cod))
        }).catch(errors => {
            console.log(errors);
        });
    }, [cod])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    useEffect(() => {
      if(data){
        let coordinates = data[0].geometry.coordinates[0].map(item => (
          {lat: item[1], lng: item[0]}
        ));
        setCenter(getCenter(coordinates));
        setPath(coordinates)
        setIsLoading(false)
      }
    },[data])

  return (
    <div className="App">
      <div style={{backgroundColor:'#001a33',textAlign:'left'}}>
        <button onClick={goBack}>Indietro</button>
      </div>
      <Fragment>
      <LoadScript
        id="script-loader"
        googleMapsApiKey={process.env.REACT_APP_API_KEY_GOOGLE_MAPS}
        language="it"
        region="it"
      >
        <div style={{height:'100%',width:'100%'}} className="App-header">
        {isLoading ? <img className="loader" src={loader} alt="caricamento"/>:
          <GoogleMap
            mapContainerClassName="App-map"
            center={{ lat: center.lat, lng: center.lng }}
            zoom={15}
            mapTypeId="hybrid"
            on
          >
            <Polygon
              path={path}
              options={{
                strokeColor: "#369BF7",
                strokeWeight: 3,
                fillColor: "#369BF7"
              }}
            />
          </GoogleMap>
          }
        </div>
      </LoadScript>
      </Fragment>
    </div>
  );
}