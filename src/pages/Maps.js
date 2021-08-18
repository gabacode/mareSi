import React,{Fragment, useState, useEffect, useCallback} from 'react';
import { LoadScript, GoogleMap, Polygon, Marker } from "@react-google-maps/api";
import { useLocation } from "react-router-dom";
import format from 'date-fns/format'
import loader from "../images/loader.svg"
import Modal from 'react-modal'
import axios from 'axios';

export default function Map() {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [area, setArea] = useState(null);

    function openModal(data) {
      setArea(data);
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }

    const location = useLocation();

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
            center={center}
            zoom={Object.keys(info.location).length !== 0 ? 12 : 8}
            mapTypeId="hybrid"
            on
          >
            <Marker position={center}/>
            <Modal
              parentSelector={() => document.querySelector('#popup')}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={{
                content: {
                  top: '50%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                },
                overlay: {
                  backdropFilter: 'blur(2px)'
                }
              }}
            >
            <div style={{textAlign:'center'}}>
              {
                area &&
                <>
                <h3 style={{fontSize:'16px',textDecoration:'underline'}}>{area.nome}</h3>
                <h4>{area.comune}</h4>
                {/* <small>Cod. {area.codice}</small><br/> */}
                {
                  area.stato === "Balneabile" ?
                  <h4 className="status" style={{backgroundColor:'#2BEB8E'}}>{area.stato}</h4> :
                  area.stato === "Temporaneamente vietata per altri motivi" ?
                  <h4 className="status" style={{backgroundColor:'#eb9532'}}>{area.stato}</h4> :
                  <h4 className="status" style={{backgroundColor:'#f03600'}}>{area.stato}</h4>
                }
                <small>Enterococchi: {area.ecocchi}</small><br/>
                <small>Escheria Coli: {area.ecoli}</small><br/>
                <small>Oltre i limiti: {area.limiti}</small><br/>
                <small>Ultima Analisi: {area.analisi}</small><br/>
                <small>{area.stagione}</small><br/>
                <small>Qualità dell'acqua:&nbsp; 
                  {
                    area.classe === "1" ?
                    <span>ECCELLENTE 🤩</span>:
                    area.classe === "2" ?
                    <span>BUONA 😊</span>:
                    area.classe === "3" ?
                    <span>SUFFICIENTE 😔</span>:
                    area.classe === "4" ?
                    <span>SCARSA 😢</span>:
                    area.classe === "5" ?
                    <span>INSUFFICIENTEMENTE CAMPIONATA 😐</span>:
                    area.classe === "6" ?
                    <span>NUOVA 🧐</span>:
                    area.classe === "7" ?
                    <span>CAMBIAMENTI 🤔</span>:
                    area.classe === "11" ?
                    <span>CHIUSA 😑</span>:
                    <span>DATI NON DISPONIBILI 😪</span>
                  }
                </small><br/>
                {area.interdizioni ? <><small>{area.interdizioni}</small><br/></>:null}
                {area.ordinanza ? <><small>({area.ordinanza})</small><br/></>:null}
                </>
              }
              <button onClick={closeModal}>OK</button>
            </div>
            </Modal>
            {
              Object.keys(data).map((key, i) =>
              data[key] && 
              <Fragment key={i}>
              <Polygon
                onClick={openModal.bind(this, 
                  {
                    nome : data[key].areaBalneazioneBean.nome,
                    comune : data[key].areaBalneazioneBean.comune + ", " + data[key].areaBalneazioneBean.siglaProvincia,
                    codice : data[key].areaBalneazioneBean.codice,
                    stato : data[key].areaBalneazioneBean.statoDesc,
                    stagione : data[key].areaBalneazioneBean.dataFineStagioneBalneare ? "Stagione balneare: fino al " + format(new Date(data[key].areaBalneazioneBean.dataFineStagioneBalneare), 'dd/MM/yyyy') : null,
                    analisi : data[key].analisi[0] ? data[key].analisi[0].dataAnalisi : "Non disponibile",
                    ecocchi : data[key].analisi[0] ? data[key].analisi[0].valoreEnterococchi + "/" + data[key].areaBalneazioneBean.limiteEi : "Non disponibile",
                    ecoli : data[key].analisi[0] ? data[key].analisi[0].valoreEscherichiaColi + "/" + data[key].areaBalneazioneBean.limiteEc : "Non disponibile",
                    limiti : data[key].analisi[0] ? (data[key].analisi[0].flagOltreLimiti === 1) || (data[key].analisi[0].flagOltreLimiti === "Y") ? "SI" : "NO" : "Non disponibile",
                    classe: data[key].areaBalneazioneBean.classe,
                    interdizioni: data[key].interdizioni ? data[key].interdizioni[0].evento && "Interdizione per " + data[key].interdizioni[0].evento : null,
                    ordinanza: data[key].interdizioni ? data[key].interdizioni[0].ordinanza && "Ordinanza " + data[key].interdizioni[0].ordinanza : null,
                  }
                )}
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