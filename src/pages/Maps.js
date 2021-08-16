import React,{Fragment, useState, useEffect, useCallback} from 'react';
import { LoadScript, GoogleMap, Polygon } from "@react-google-maps/api";
import { useLocation } from "react-router-dom";
import format from 'date-fns/format'
import loader from "../images/loader.svg"
import axios from 'axios';

export default function Map() {

    const location = useLocation();
    // const history = useHistory();

    const strokeWeight = 3;

    let info = {
        comune: location.state.comune,
        regione: location.state.regione,
        location: location.state.location,
        altLocation: location.state.altLocation,
        address: location.state.address,
        cityRef: location.state.cityRef,
      }

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [center, setCenter] = useState({})

  // const goBack = () => {
  //   history.goBack();
  // }

  const getCoordinates = (coords) => (
      coords.map(item => (
        {lat: item[1], lng: item[0]}
      ))
  )

  const fetchData = useCallback(async () => {
    axios.get(process.env.REACT_APP_MARESI_API+location.state.regione)
        .then((res) => {
            setData(res.data)
            setIsLoading(false)
        }).catch(errors => {
            console.log(errors);
        });
    }, [location.state.regione])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    useEffect(() => {
      if(data){
        (
          Object.keys(info.location).length !== 0 ?
            setCenter({lat: info.location.lat, lng: info.location.long})
          :
            setCenter({lat: info.altLocation.lat, lng: info.altLocation.lng})
        )
        setIsLoading(false)
      }
    },[data, info.location, info.altLocation])
    
    return (
    <div className="App">
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
            zoom={Object.keys(info.location).length !== 0 ? 13 : 8}
            mapTypeId="hybrid"
            on
          >
            {/* <Marker position={center}/> */}
            {
              Object.keys(data).map((key, i) =>
              data[key] && 
              <Fragment key={i}>
              <Polygon
                onClick={() => alert(
                    data[key].areaBalneazioneBean.nome + "\r\n" +
                    data[key].areaBalneazioneBean.comune + ", " + data[key].areaBalneazioneBean.siglaProvincia + "\r\n" +
                    "Codice: "+ data[key].areaBalneazioneBean.codice + "\r\n" +
                    "Stato: "+ (data[key].areaBalneazioneBean.statoDesc === "Balneabile" ? "Balneabile" : "Non Balneabile") + "\r\n" +
                    "Stagione balneare: "+ (data[key].areaBalneazioneBean.dataFineStagioneBalneare ? "fino al " + format(new Date(data[key].areaBalneazioneBean.dataFineStagioneBalneare), 'dd/MM/yyyy') : "Sconosciuto") + "\r\n" +
                    "Ultima Analisi: "+ (data[key].analisi[0] ? data[key].analisi[0].dataAnalisi : "Non disponibile") + "\r\n" +
                    "Enterococchi: "+ (data[key].analisi[0] ? data[key].analisi[0].valoreEnterococchi : "Non disponibile") + "\r\n" +
                    "Escheria Coli: "+ (data[key].analisi[0] ? data[key].analisi[0].valoreEscherichiaColi : "Non disponibile") + "\r\n" +
                    "Oltre i limiti: "+ (data[key].analisi[0] ? 
                        (data[key].analisi[0].flagOltreLimiti === 1) || (data[key].analisi[0].flagOltreLimiti === "Y") ? "SI" : "NO" 
                    : "Non disponibile")                    
                    )
                }
                path={getCoordinates(data[key].coordinates)}
                options={
                    data[key].areaBalneazioneBean.statoDesc === "Balneabile" &&  (data[key].analisi[0] && (data[key].analisi[0].flagOltreLimiti === 0)) ?
                    {
                      strokeColor: 'rgb(54,155,247)',
                      strokeWeight: strokeWeight,
                      fillColor: 'rgb(54,155,247)'
                    }
                    :
                    data[key].analisi[0] && (data[key].analisi[0].flagOltreLimiti === 1 || data[key].analisi[0].flagOltreLimiti === "Y") ?
                    {
                      strokeColor: 'rgb(240, 54, 0)',
                      strokeWeight: strokeWeight,
                      fillColor: 'rgb(240, 54, 0)'
                    }
                    :
                    {
                      strokeColor: 'rgb(235, 149, 50)',
                      strokeWeight: strokeWeight,
                      fillColor: 'rgb(235, 149, 50)'
                    }
                }
            />
            </Fragment> 
            )}
          </GoogleMap>
          }
        </div>
      </LoadScript>
      </Fragment>
    </div>
    )

}