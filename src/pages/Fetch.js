import React,{useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import format from 'date-fns/format'
import { useLocation, useHistory } from "react-router-dom";

export default function Fetch(){
    const location = useLocation();
    const history = useHistory();
    let place = location.state.comune
    let [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [filter, setFilter] = useState({})

    const goBack = () => {
        history.goBack();
    }
    const gotoMap = (e) => {
        const data = {
            e,
        }
        history.push({
          pathname: '/map',
          state: data
      });
    }
    const fetchData = useCallback(async () => {
        axios.get('./data/areas.json')
            .then((res) => {
                setData(res.data)
                setIsLoading(false)
            }).catch(errors => {
                console.log(errors);
            });
        }, [])
        useEffect(() => {
            fetchData()
        }, [fetchData])

        useEffect(() => {
            if(!isLoading){
                const s = data.filter( x => x.areaBalneazioneBean.comune === place);
                setFilter(s);
            }
        },[data,isLoading,place]
        )
        
    return(
        <>
        <button onClick={goBack}>Indietro</button>
        <div style={{backgroundColor:'#064273',minHeight:'100vh'}}>
            <div style={{paddingTop:'50px'}}className="container">
                <div className="row">
                {
                    Object.keys(filter).map((key, i) => (
                    <>
                        <div className="col-md-6" key={i}>
                            <div className="card col-md-12">
                                <h3 style={{fontSize:'16px',textDecoration:'underline'}}>{filter[key].areaBalneazioneBean.nome}</h3>
                                <h4>{filter[key].areaBalneazioneBean.comune}, {filter[key].areaBalneazioneBean.siglaProvincia}</h4>
                                {
                                    filter[key].areaBalneazioneBean.statoDesc === "Balneabile" ?
                                    <h4 className="status" style={{backgroundColor:'#2BEB8E'}}>{filter[key].areaBalneazioneBean.statoDesc}</h4> :
                                    <h4 className="status" style={{backgroundColor:'#f03600'}}>{filter[key].areaBalneazioneBean.statoDesc}</h4>
                                }
                                <small>Cod. {filter[key].areaBalneazioneBean.codice}</small><br/>
                                <small>Ultima Analisi: {filter[key].analisi[0].dataAnalisi}</small><br/>
                                <small>Stagione balneare: fino al {format(new Date(filter[key].areaBalneazioneBean.dataFineStagioneBalneare), 'dd/MM/yyyy')}</small><br/>
                                <small>Qualità dell'acqua:&nbsp; 
                                    {
                                        filter[key].areaBalneazioneBean.classe === "1" ?
                                        <span>ECCELLENTE 🤩</span>:
                                        filter[key].areaBalneazioneBean.classe === "2" ?
                                        <span>BUONA 😊</span>:
                                        filter[key].areaBalneazioneBean.classe === "3" ?
                                        <span>SUFFICIENTE 😔</span>:
                                        filter[key].areaBalneazioneBean.classe === "4" ?
                                        <span>SCARSA 😢</span>:
                                        filter[key].areaBalneazioneBean.classe === "5" ?
                                        <span>INSUFFICIENTEMENTE CAMPIONATA 😐</span>:
                                        filter[key].areaBalneazioneBean.classe === "6" ?
                                        <span>NUOVA 🧐</span>:
                                        filter[key].areaBalneazioneBean.classe === "7" ?
                                        <span>CAMBIAMENTI 🤔</span>:
                                        filter[key].areaBalneazioneBean.classe === "11" ?
                                        <span>CHIUSA 😑</span>:
                                        <span>DATI NON DISPONIBILI 😪</span>
                                    }
                                </small><br/>
                                <button className="map" onClick={(event) => gotoMap(filter[key].areaBalneazioneBean.codice)}><small>Vai alla mappa</small></button>
                                {/* <small>Scarica l'Ordinanza: <a href={`https://www.portaleacque.salute.gov.it${filter[key].dettaglioProfiliBean[0].downloadUrl}`} target="_blank" rel="noreferrer">PDF</a></small> */}
                            </div>
                        </div>
                    </>
                    ))
                }
                </div>
            </div>
        </div>
        </>
    )
}