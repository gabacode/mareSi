import React,{useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import format from 'date-fns/format'
import loader from "../images/loader.svg"
import {FaChevronLeft} from 'react-icons/fa'
import { useLocation, useHistory } from "react-router-dom";

export default function Fetch(){
    const location = useLocation();
    const history = useHistory();
    let place = location.state.comune
    let [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    const goBack = () => {
        history.goBack();
    }
    const gotoMap = (nome, codice, statoDesc, dataAnalisi, valoreEnterococchi, valoreEscherichiaColi, flagOltreLimiti) => {
        const data = {
            nome: nome,
            codice: codice,
            statoDesc: statoDesc,
            dataAnalisi: dataAnalisi,
            valoreEnterococchi: valoreEnterococchi,
            valoreEscherichiaColi: valoreEscherichiaColi,
            flagOltreLimiti: flagOltreLimiti,
        }
        history.push({
          pathname: '/map',
          state: data
      });
    }
    const fetchData = useCallback(async () => {
        axios.get('./data/areas.json')
            .then((res) => {
                setData(res.data.filter( x => x.areaBalneazioneBean.comune === place))
                setIsLoading(false)
            }).catch(errors => {
                console.log(errors);
            });
        }, [place])
        useEffect(() => {
            fetchData()
        }, [fetchData])
        
    return(
        <>
        <div style={{backgroundColor:'#064273',minHeight:'100vh'}}>
            <div style={{paddingTop:'25px'}}className="container">
                <button className="icon" onClick={goBack}><FaChevronLeft/></button>
                <div className="row">
                {isLoading ? <img className="loader" src={loader} alt="caricamento"/>:
                    Object.keys(data).map((key, i) => (
                        <div className="col-md-6" key={i}>
                            <div className="card col-md-12">
                                <h3 style={{fontSize:'16px',textDecoration:'underline'}}>{data[key].areaBalneazioneBean.nome}</h3>
                                <h4>{data[key].areaBalneazioneBean.comune}, {data[key].areaBalneazioneBean.siglaProvincia}</h4>
                                {
                                    data[key].areaBalneazioneBean.statoDesc === "Balneabile" ?
                                    <h4 className="status" style={{backgroundColor:'#2BEB8E'}}>{data[key].areaBalneazioneBean.statoDesc}</h4> :
                                    <h4 className="status" style={{backgroundColor:'#f03600'}}>{data[key].areaBalneazioneBean.statoDesc}</h4>
                                }
                                <small>Cod. {data[key].areaBalneazioneBean.codice}</small><br/>
                                <small>Ultima Analisi: {data[key].analisi[0] ? data[key].analisi[0].dataAnalisi : "Non disponibile"}</small><br/>
                                <small>Stagione balneare: fino al {format(new Date(data[key].areaBalneazioneBean.dataFineStagioneBalneare), 'dd/MM/yyyy')}</small><br/>
                                <small>Qualità dell'acqua:&nbsp; 
                                    {
                                        data[key].areaBalneazioneBean.classe === "1" ?
                                        <span>ECCELLENTE 🤩</span>:
                                        data[key].areaBalneazioneBean.classe === "2" ?
                                        <span>BUONA 😊</span>:
                                        data[key].areaBalneazioneBean.classe === "3" ?
                                        <span>SUFFICIENTE 😔</span>:
                                        data[key].areaBalneazioneBean.classe === "4" ?
                                        <span>SCARSA 😢</span>:
                                        data[key].areaBalneazioneBean.classe === "5" ?
                                        <span>INSUFFICIENTEMENTE CAMPIONATA 😐</span>:
                                        data[key].areaBalneazioneBean.classe === "6" ?
                                        <span>NUOVA 🧐</span>:
                                        data[key].areaBalneazioneBean.classe === "7" ?
                                        <span>CAMBIAMENTI 🤔</span>:
                                        data[key].areaBalneazioneBean.classe === "11" ?
                                        <span>CHIUSA 😑</span>:
                                        <span>DATI NON DISPONIBILI 😪</span>
                                    }
                                </small><br/>
                                <button className="map" onClick={() => gotoMap(
                                    data[key].areaBalneazioneBean.nome,
                                    data[key].areaBalneazioneBean.codice,
                                    data[key].areaBalneazioneBean.statoDesc,
                                    data[key].analisi[0] ? data[key].analisi[0].dataAnalisi : "Non disponibile",
                                    data[key].analisi[0] ? data[key].analisi[0].valoreEnterococchi : "Non disponibile",
                                    data[key].analisi[0] ? data[key].analisi[0].valoreEscherichiaColi : "Non disponibile",
                                    data[key].analisi[0] ? data[key].analisi[0].flagOltreLimiti : "Non disponibile",
                                )}>
                                    <small>
                                        Vai alla mappa
                                    </small>
                                </button>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
        </>
    )
}