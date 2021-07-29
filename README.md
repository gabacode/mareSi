# 🐬 MareSì 👍
#### 🌊 https://maresi.netlify.app

---

- [Perchè](#perchè)
- [Come](#come)
- [Dove](#dove)
- [Credits](#ringraziamenti)
- [Licenza](#licenza)

---

# Perchè?

Lo sviluppo di MareSì nasce da un'esigenza concreta: scoprire la qualità delle acque che ci circondano, esplorandone le eventuali misurazioni, garantendo quindi più sicurezza per noi e per i nostri figli.

L'app consuma i dati dei campionamenti delle acque effettuati dal Ministero della Salute, tramite il Portale Acque, consultabile a [questo link](https://www.portaleacque.salute.gov.it/PortaleAcquePubblico/).

Unito ad un comodo sistema di geolocalizzazione, MareSì punta a semplificare la navigazione dei dati, e delle acque, rendendola più semplice ed accessibile a tutti.

---

# Come

Tramite la funzione "Geolocami", l'app richiederà i permessi per accedere ai servizi di geolocalizzazione, in caso contrario, sarà possibile inserire la propria location manualmente.

Le coordinate vengono poi messe a confronto con i dati di campionamento acque fornite dal Ministero della Salute, relative alla Regione Sicilia.

Il ministero non fornisce delle vere e proprie API per l'accesso ai dati, ma essi vengono resi [disponibili](https://github.com/gabacode/mareSi/tree/main/scripts/data), e in formato machine-readable, tramite gli [scripts inclusi](https://github.com/gabacode/mareSi/blob/main/scripts/). Gli script sono forniti senza garanzia alcuna, e vanno usati con parsimonia e buon senso. E' possibile derivare i JSON di altre regioni, modificando il parametro ISTAT in [fetch.py](https://github.com/gabacode/mareSi/blob/main/scripts/fetch.py)

Gli scraper necessitano di un proxy che simuli le HTTP requests, per circumnavigare il blocco CORS. Sono state utilizzate le librerie [lcp](https://www.npmjs.com/package/local-cors-proxy), e [jq](https://stedolan.github.io/jq/) per la formattazione JSON. L'oceano è fortunatamente ricco di ottime documentazioni a riguardo.

---

# Dove

I dati disponibili su MareSì riguardano solo i Comuni siciliani presenti nel database del Portale Acque. Se vuoi dare una mano, segnalando nuove località in cui è presente un campionamento delle acque più recente, ti invito a farlo, mandando una email all'indirizzo gaba@totel.it

---

# Ringraziamenti

Ringrazio mio figlio per avermi dato l'ispirazione a scrivere questo programma, e la community di [OpenDataSicilia](http://opendatasicilia.it/) per la spinta a realizzarlo.

---

# Licenza

TBA

---
