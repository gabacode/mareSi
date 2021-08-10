import React,{Fragment, useState, useEffect, useCallback} from 'react';
import { LoadScript, GoogleMap, Polygon } from "@react-google-maps/api";
import { useLocation, useHistory } from "react-router-dom";
import loader from "../images/loader.svg"
import Modal from 'react-modal';
import axios from 'axios';

export default function Map() {

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const location = useLocation();
  const history = useHistory();

  let info = {
    nome: location.state.nome,
    codice: location.state.codice,
    statoDesc: location.state.statoDesc,
    dataAnalisi: location.state.dataAnalisi,
    valoreEnterococchi: location.state.valoreEnterococchi,
    valoreEscherichiaColi: location.state.valoreEscherichiaColi,
    flagOltreLimiti: location.state.flagOltreLimiti,
  }
  
  let color

  if (info.statoDesc === "Balneabile"){
    color = "rgb(54,155,247)"
  } else if (info.flagOltreLimiti){
    color = "rgb(240, 54, 0)"
  } else {
    color = "rgb(235, 149, 50)"
  }

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
          setData(res.data.features.filter( x => x.properties.CODICE === info.codice))
        }).catch(errors => {
            console.log(errors);
        });
    }, [info.codice])

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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div style={{textAlign:'center'}}>
        <b style={{textDecoration:'underline'}}>{info.nome}</b><br />
        Stato: {info.statoDesc === "Balneabile" ? "Balneabile" : "Non Balneabile"}<br />
        Ultima Analisi: {info.dataAnalisi ? info.dataAnalisi : "Non disponibile"}<br />
        Enterococchi: {info.valoreEnterococchi}<br />
        Escheria Coli: {info.valoreEscherichiaColi}<br />
        Oltre i limiti: {info.flagOltreLimiti === 1 ? "Si" : "No"}<br />
        <button onClick={closeModal}>OK</button>
        </div>
      </Modal>
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
              onClick={openModal}
              path={path}
              options={{
                strokeColor: color,
                strokeWeight: 3,
                fillColor: color
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