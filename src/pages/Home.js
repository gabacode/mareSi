import React, {Fragment, useState, useEffect} from 'react';
import Geocode from "react-geocode";
import Select, { createFilter } from "react-select";
import MenuList from "../components/MenuList";
import { useHistory } from 'react-router-dom';
import places from '../lib/places.json'

Geocode.setApiKey(process.env.REACT_APP_API_KEY_GOOGLE_MAPS);
Geocode.setRegion("it");
Geocode.setLocationType("ROOFTOP");
// Geocode.enableDebug();

let options = places.map(item => (
    {
      value: item,
      label: item
    } 
  ));

export default function Home(){
    const history = useHistory();
    const [location, setLocation] = useState({})
    const [address, setAddress] = useState('')
    const [comune, setComune] = useState('')
    const [cityRef, setRef] = useState('')
    const [manuale, setManuale] = useState(false)

    const manualMode = () => {
        setManuale(true)
        resetLocation()
    }

    const autoMode = () => {
        setManuale(false)
        resetLocation()
    }

    const handleChange = (selectedOption) => {
        setComune(selectedOption.value)
      };

    const getLocation = () => {
        setManuale(false)
        navigator.geolocation.getCurrentPosition(
            function(position) {
                setLocation({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                })
            },
            function(error) {
                setManuale(true)
            }
        );
    }
        useEffect(() => {
            Object.keys(location).length > 0 ?
            Geocode.fromLatLng(location.lat, location.long).then(
                (response) => {
                    const address = `${response.results[0].address_components[2].long_name}, ${response.results[0].address_components[4].short_name}`;
                    setAddress(address);
                    setComune(response.results[0].address_components[3].long_name)
                    setRef(response.results[0].address_components[4].short_name);
                },
                (error) => {
                    console.error(error);
                }
            )
          :<div/>
        },[location])
      
        const sendData = (e) =>{
            e.preventDefault();
            const data = {
                comune,
                location,
                address,
                cityRef,
            }
            if(places.includes(comune)){
                history.push({
                    pathname: '/fetch',
                    state: data
                });
            } else {
                alert("Location non presente, o non valida. Inserire manualmente.")
                manualMode()
            }
        }

    const resetLocation = () =>{
        setLocation({})
    }

    const colourStyles = {
        control: base => ({
            ...base,
            background: 'white',
            borderColor: 'gray',
          }),
      };

    return(
        <div className="App">
            <div className="App-header">
                <h1 style={{color:'white'}}>🌊 Ciao 👋</h1>
                {
                    Object.keys(location).length === 0 ?
                    manuale === false ?
                    <Fragment>
                    <button onClick={getLocation}>Geolocami</button>
                    </Fragment>
                    :
                    <>
                    <h1 style={{color:'white'}}>Inserisci la tua location</h1>
                    <Select
                        placeholder={"Scrivi per cercare..."}
                        styles={colourStyles}
                        className="selector"
                        filterOption={createFilter({ ignoreAccents: false })}
                        options={options}
                        onChange={handleChange}
                        components={{MenuList}}
                    />
                    <button onClick={sendData}>Vai!</button>
                    <button onClick={autoMode}>Indietro</button>
                    </>
                    :
                    <>
                    <h3 style={{color:'white'}}>Ti trovi a {address}!</h3>
                    {/* <small style={{color:'white'}}>({location.lat}, {location.long})</small> */}
                    <button onClick={sendData}>Esatto!</button>
                    <button onClick={manualMode}>Non proprio..</button>
                    <button onClick={resetLocation}>Reset</button>
                    </>
                }
            </div>
            <footer>
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="#7fcdff" d="M0,224L40,218.7C80,213,160,203,240,213.3C320,224,400,256,480,240C560,224,640,160,720,144C800,128,880,160,960,149.3C1040,139,1120,85,1200,96C1280,107,1360,181,1400,218.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" />
            </svg>
            </footer>
        </div>
    )
}