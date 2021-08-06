import React, {useState} from "react"
import {FaChevronUp} from 'react-icons/fa'

export default function Footer() {
    const [consent, setConsent] = useState(localStorage.getItem('choice'))

    const handleConsent = () => {
        setConsent(true)
        localStorage.setItem('choice', consent);
    }
    const handleReconsent = () => {
        setConsent(false)
        localStorage.removeItem('choice')
    }

    return (
        !consent ?
        <div className="footer">
            <div style={{alignSelf:'center',fontSize:'0.86em',textAlign:'center',margin:'0 auto'}}>
                Questo sito utilizza servizi di geolocalizzazione anonimizzati e non colleziona dati sul server. Fonte: <a href="https://www.portaleacque.salute.gov.it/PortaleAcquePubblico/home.do" target="_blank" rel="noreferrer">Ministero della Salute</a>, licenza <a href="http://creativecommons.org/licenses/by/3.0/it/legalcode" target="_blank" rel="noreferrer">CC-BY 3.0</a>.
                <button className="consent" onClick={handleConsent}>OK</button>
            </div>
        </div>
        :
        <div className="reconsent">
            <button className="reconsent icon" onClick={handleReconsent}>
                <FaChevronUp/>
            </button>
        </div>
    )
}