/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';
import { SEO } from '../components/seo';

import { AiOutlineArrowLeft as BackIcon } from 'react-icons/ai';
import { Link } from 'gatsby';

const PrivacyPage = () => {
  return (
    <React.Fragment>
      <Container p={4} mx="auto" sx={{ maxWidth: 960 }}>
        <Flex sx={{ alignItems: 'center' }}>
          <Box sx={{ mr: 2 }}>
            <Link to="/">
              <BackIcon color="#3399CC" size={36} />
            </Link>
          </Box>
          <Box>
            <Heading>Privacy Policy</Heading>
          </Box>
        </Flex>

        <Box>
          <h2>Tipologie di Dati raccolti</h2>

          <Text sx={{ display: 'block', mb: 3 }}>
            Gli unici Dati Personali raccolti da questa Applicazione,
            in modo autonomo o tramite terze parti, riguardano la
            posizione GPS precisa, utilizzata esclusivamente per
            consentire il corretto funzionamento del servizio.
          </Text>
          <Text sx={{ display: 'block', mb: 3 }}>
            Dettagli completi su ciascuna tipologia di dati raccolti
            sono forniti nelle sezioni dedicate di questa privacy
            policy o mediante specifici testi informativi
            visualizzati prima della raccolta dei dati stessi.
          </Text>
          <Text sx={{ display: 'block', mb: 3 }}>
            I Dati Personali possono essere liberamente forniti
            dall'Utente o, nel caso di autorizzazione da parte
            dell'Utente, raccolti automaticamente durante l'uso di
            questa Applicazione.
          </Text>
          <Text sx={{ display: 'block', mb: 3 }}>
            Gli Utenti sono liberi di astenersi dall'utilizzare tali
            dati, ciò permetterà comunque di visualizzare le spiagge
            della propria Regione, ma non sarà possibile visualizzare
            la distanza esatta da esse.
          </Text>
          <Text sx={{ display: 'block', mb: 3 }}>
            Gli Utenti che dovessero avere dubbi su quali Dati siano
            obbligatori, sono incoraggiati a contattare il Titolare.
          </Text>
          <Text sx={{ display: 'block', mb: 3 }}>
            L'Utente si assume la responsabilità dei Dati Personali
            di terzi ottenuti, pubblicati o condivisi mediante questa
            Applicazione e garantisce di avere il diritto di
            comunicarli o diffonderli, liberando il Titolare da
            qualsiasi responsabilità verso terzi.
          </Text>
        </Box>

        <Box>
          <h2>Modalità e luogo del trattamento dei Dati raccolti</h2>
          <h3>Modalità di trattamento</h3>
          <Text sx={{ display: 'block', mb: 3 }}>
            Il Titolare adotta le opportune misure di sicurezza volte
            ad impedire l’accesso, la divulgazione, la modifica o la
            distruzione non autorizzate dei Dati Personali.{' '}
          </Text>
          <Text sx={{ display: 'block', mb: 3 }}>
            Il trattamento viene effettuato mediante strumenti
            informatici e/o telematici, con modalità organizzative e
            con logiche strettamente correlate alle finalità
            indicate. Oltre al Titolare, in alcuni casi, potrebbero
            avere accesso ai Dati altri soggetti coinvolti
            nell’organizzazione di questa Applicazione (personale
            amministrativo, commerciale, marketing, legali,
            amministratori di sistema) ovvero soggetti esterni (come
            fornitori di servizi tecnici terzi, corrieri postali,
            hosting provider, società informatiche, agenzie di
            comunicazione) nominati anche, se necessario,
            Responsabili del Trattamento da parte del Titolare.
            L’elenco aggiornato dei Responsabili potrà sempre essere
            richiesto al Titolare del Trattamento.
          </Text>
          <h3>Base giuridica del trattamento</h3>
          <Text sx={{ display: 'block', mb: 3 }}>
            Il Titolare tratta Dati Personali relativi all’Utente in
            caso sussista una delle seguenti condizioni:
          </Text>
          <ul>
            <li>
              l’Utente ha prestato il consenso per una o più finalità
              specifiche; Nota: in alcuni ordinamenti il Titolare può
              essere autorizzato a trattare Dati Personali senza che
              debba sussistere il consenso dell’Utente o un’altra
              delle basi giuridiche specificate di seguito, fino a
              quando l’Utente non si opponga (“opt-out”) a tale
              trattamento. Ciò non è tuttavia applicabile qualora il
              trattamento di Dati Personali sia regolato dalla
              legislazione europea in materia di protezione dei Dati
              Personali;
            </li>
            <li>
              il trattamento è necessario all'esecuzione di un
              contratto con l’Utente e/o all'esecuzione di misure
              precontrattuali;
            </li>
            <li>
              il trattamento è necessario per adempiere un obbligo
              legale al quale è soggetto il Titolare;
            </li>
            <li>
              il trattamento è necessario per l'esecuzione di un
              compito di interesse pubblico o per l'esercizio di
              pubblici poteri di cui è investito il Titolare;
            </li>
            <li>
              il trattamento è necessario per il perseguimento del
              legittimo interesse del Titolare o di terzi.
            </li>
          </ul>
          <Text sx={{ display: 'block', mb: 3 }}>
            È comunque sempre possibile richiedere al Titolare di
            chiarire la concreta base giuridica di ciascun
            trattamento ed in particolare di specificare se il
            trattamento sia basato sulla legge, previsto da un
            contratto o necessario per concludere un contratto.
          </Text>
          <h3>Luogo</h3>
          <Text sx={{ display: 'block', mb: 3 }}>
            I Dati sono trattati presso le sedi operative del
            Titolare ed in ogni altro luogo in cui le parti coinvolte
            nel trattamento siano localizzate. Per ulteriori
            informazioni, contatta il Titolare.
          </Text>
          <Text sx={{ display: 'block', mb: 3 }}>
            I Dati Personali dell’Utente potrebbero essere trasferiti
            in un paese diverso da quello in cui l’Utente si trova.
            Per ottenere ulteriori informazioni sul luogo del
            trattamento l’Utente può fare riferimento alla sezione
            relativa ai dettagli sul trattamento dei Dati Personali.
          </Text>
          <Text sx={{ display: 'block', mb: 3 }}>
            L’Utente ha diritto a ottenere informazioni in merito
            alla base giuridica del trasferimento di Dati al di fuori
            dell’Unione Europea o ad un’organizzazione internazionale
            di diritto internazionale pubblico o costituita da due o
            più paesi, come ad esempio l’ONU, nonché in merito alle
            misure di sicurezza adottate dal Titolare per proteggere
            i Dati.
          </Text>
          <Text sx={{ display: 'block', mb: 3 }}></Text>
          <Text sx={{ display: 'block', mb: 3 }}>
            L’Utente può verificare se abbia luogo uno dei
            trasferimenti appena descritti esaminando la sezione di
            questo documento relativa ai dettagli sul trattamento di
            Dati Personali o chiedere informazioni al Titolare
            contattandolo agli estremi riportati in apertura.
          </Text>
          <h3>Periodo di conservazione</h3>
          <Text sx={{ display: 'block', mb: 3 }}>
            I Dati sono trattati e conservati per il tempo richiesto
            dalle finalità per le quali sono stati raccolti.
          </Text>
          <Text sx={{ display: 'block', mb: 3 }}>Pertanto:</Text>
          <ul>
            <li>
              I Dati Personali raccolti per scopi collegati
              all’esecuzione di un contratto tra il Titolare e
              l’Utente saranno trattenuti sino a quando sia
              completata l’esecuzione di tale contratto.
            </li>
            <li>
              I Dati Personali raccolti per finalità riconducibili
              all’interesse legittimo del Titolare saranno trattenuti
              sino al soddisfacimento di tale interesse. L’Utente può
              ottenere ulteriori informazioni in merito all’interesse
              legittimo perseguito dal Titolare nelle relative
              sezioni di questo documento o contattando il Titolare.
            </li>
          </ul>
          <Text sx={{ display: 'block', mb: 3 }}>
            Quando il trattamento è basato sul consenso dell’Utente,
            il Titolare può conservare i Dati Personali più a lungo
            sino a quando detto consenso non venga revocato. Inoltre,
            il Titolare potrebbe essere obbligato a conservare i Dati
            Personali per un periodo più lungo in ottemperanza ad un
            obbligo di legge o per ordine di un’autorità.
          </Text>
          <Text sx={{ display: 'block', mb: 3 }}></Text>
          <Text sx={{ display: 'block', mb: 3 }}>
            Al termine del periodo di conservazione i Dati Personali
            saranno cancellati. Pertanto, allo spirare di tale
            termine il diritto di accesso, cancellazione,
            rettificazione ed il diritto alla portabilità dei Dati
            non potranno più essere esercitati.
          </Text>
        </Box>

        <Box>
          <h2>Finalità del Trattamento dei Dati raccolti</h2>
          <Text sx={{ display: 'block', mb: 3 }}>
            I Dati dell’Utente sono raccolti per consentire al
            Titolare di fornire il Servizio, adempiere agli obblighi
            di legge, rispondere a richieste o azioni esecutive,
            tutelare i propri diritti ed interessi (o quelli di
            Utenti o di terze parti), individuare eventuali attività
            dolose o fraudolente, nonché per le seguenti finalità:
            Interazioni basate sulla posizione.
          </Text>

          <Text sx={{ display: 'block', mb: 3 }}>
            Per ottenere informazioni dettagliate sulle finalità del
            trattamento e sui Dati Personali trattati per ciascuna
            finalità, l’Utente può fare riferimento alla sezione
            “Dettagli sul trattamento dei Dati Personali”.
          </Text>
        </Box>

        <Box>
          <h2>Dettagli sul trattamento dei Dati Personali</h2>
          <Text sx={{ display: 'block', mb: 3 }}>
            I Dati Personali sono raccolti per le seguenti finalità
            ed utilizzando i seguenti servizi:
          </Text>
          <ul>
            <li>
              <Box>
                <h3>Interazioni basate sulla posizione</h3>
                <Box>
                  <h4>
                    Geolocalizzazione non continua (questa
                    Applicazione)
                  </h4>
                  <Box>
                    <Text sx={{ display: 'block', mb: 3 }}>
                      Questa Applicazione può raccogliere, usare e
                      condividere i Dati relativi alla posizione
                      geografica dell’Utente, al fine di fornire
                      servizi basati sulla posizione stessa.
                    </Text>
                    <Text sx={{ display: 'block', mb: 3 }}>
                      La maggior parte dei browser e dei dispositivi
                      fornisce in modo predefinito degli strumenti
                      per negare il tracciamento geografico. Qualora
                      l’Utente abbia espressamente autorizzato tale
                      possibilità, questa Applicazione può ricevere
                      informazioni sulla sua effettiva posizione
                      geografica.
                    </Text>
                    <Text sx={{ display: 'block', mb: 3 }}>
                      La localizzazione geografica dell’Utente
                      avviene in maniera non continua, dietro
                      specifica richiesta dell’Utente ovvero quando
                      l’Utente non indichi nell’apposito campo il
                      luogo in cui si trova e consenta
                      all’applicazione il rilevamento automatico
                      della posizione.
                    </Text>
                  </Box>

                  <Text sx={{ display: 'block', mb: 3 }}>
                    Dati Personali trattati: posizione precisa.
                  </Text>
                </Box>
              </Box>
            </li>
          </ul>
        </Box>
        <Box>
          <h2>Diritti dell’Utente</h2>
          <Text sx={{ display: 'block', mb: 3 }}>
            Gli Utenti possono esercitare determinati diritti con
            riferimento ai Dati trattati dal Titolare.
          </Text>
          <Text sx={{ display: 'block', mb: 3 }}>
            In particolare, nei limiti previsti dalla legge, l’Utente
            ha il diritto di:
          </Text>

          <ul>
            <li>
              <strong>revocare il consenso in ogni momento.</strong>
              L’Utente può revocare il consenso al trattamento dei
              propri Dati Personali precedentemente espresso.
            </li>
            <li>
              <strong>
                opporsi al trattamento dei propri Dati.
              </strong>
              L’Utente può opporsi al trattamento dei propri Dati
              quando esso avviene su una base giuridica diversa dal
              consenso. Ulteriori dettagli sul diritto di opposizione
              sono indicati nella sezione sottostante.
            </li>
            <li>
              <strong>accedere ai propri Dati.</strong> L’Utente ha
              diritto ad ottenere informazioni sui Dati trattati dal
              Titolare, su determinati aspetti del trattamento ed a
              ricevere una copia dei Dati trattati.
            </li>
            <li>
              <strong>
                verificare e chiedere la rettificazione.
              </strong>
              L’Utente può verificare la correttezza dei propri Dati
              e richiederne l’aggiornamento o la correzione.
            </li>
            <li>
              <strong>
                ottenere la limitazione del trattamento.
              </strong>
              L’Utente può richiedere la limitazione del trattamento
              dei propri Dati. In tal caso il Titolare non tratterà i
              Dati per alcun altro scopo se non la loro
              conservazione.
            </li>
            <li>
              <strong>
                ottenere la cancellazione o rimozione dei propri Dati
                Personali.
              </strong>
              L’Utente può richiedere la cancellazione dei propri
              Dati da parte del Titolare.
            </li>
            <li>
              <strong>
                ricevere i propri Dati o farli trasferire ad altro
                titolare.
              </strong>
              L’Utente ha diritto di ricevere i propri Dati in
              formato strutturato, di uso comune e leggibile da
              dispositivo automatico e, ove tecnicamente fattibile,
              di ottenerne il trasferimento senza ostacoli ad un
              altro titolare.
            </li>
            <li>
              <strong>proporre reclamo.</strong> L’Utente può
              proporre un reclamo all’autorità di controllo della
              protezione dei dati personali competente o agire in
              sede giudiziale.
            </li>
          </ul>

          <h3>Dettagli sul diritto di opposizione</h3>
          <Text sx={{ display: 'block', mb: 3 }}>
            Quando i Dati Personali sono trattati nell’interesse
            pubblico, nell’esercizio di pubblici poteri di cui è
            investito il Titolare oppure per perseguire un interesse
            legittimo del Titolare, gli Utenti hanno diritto ad
            opporsi al trattamento per motivi connessi alla loro
            situazione particolare.
          </Text>
          <Text sx={{ display: 'block', mb: 3 }}>
            Si fa presente agli Utenti che, ove i loro Dati fossero
            trattati con finalità di marketing diretto, possono
            opporsi al trattamento in qualsiasi momento,
            gratuitamente e senza fornire alcuna motivazione. Qualora
            gli Utenti si oppongano al trattamento per finalità di
            marketing diretto, i Dati Personali non sono più oggetto
            di trattamento per tali finalità. Per scoprire se il
            Titolare tratti Dati con finalità di marketing diretto
            gli Utenti possono fare riferimento alle rispettive
            sezioni di questo documento.
          </Text>

          <h3>Come esercitare i diritti</h3>
          <Text sx={{ display: 'block', mb: 3 }}>
            Per esercitare i propri diritti, gli Utenti possono
            indirizzare una richiesta ai recapiti del Titolare
            indicati in questo documento. La richiesta può essere
            depositate gratuitamente e il Titolare risponderà nel più
            breve tempo possibile, in ogni caso entro un mese,
            fornendo all’Utente tutte le informazioni previste dalla
            legge. Eventuali rettifiche, cancellazioni o limitazioni
            del trattamento saranno comunicate dal Titolare a
            ciascuno dei destinatari, se esistenti, a cui sono stati
            trasmessi i Dati Personali, salvo che ciò si riveli
            impossibile o implichi uno sforzo sproporzionato. Il
            Titolare comunica all'Utente tali destinatari qualora
            egli lo richieda.
          </Text>
        </Box>

        <Box>
          <h2>Ulteriori informazioni sul trattamento</h2>
          <h3>Difesa in giudizio</h3>
          <Text sx={{ display: 'block', mb: 3 }}>
            I Dati Personali dell’Utente possono essere utilizzati da
            parte del Titolare in giudizio o nelle fasi preparatorie
            alla sua eventuale instaurazione per la difesa da abusi
            nell'utilizzo di questa Applicazione o dei Servizi
            connessi da parte dell’Utente.
          </Text>
          <Text sx={{ display: 'block', mb: 3 }}>
            L’Utente dichiara di essere consapevole che il Titolare
            potrebbe essere obbligato a rivelare i Dati per ordine
            delle autorità pubbliche.
          </Text>
          <h3>Informative specifiche</h3>
          <Text sx={{ display: 'block', mb: 3 }}>
            Su richiesta dell’Utente, in aggiunta alle informazioni
            contenute in questa privacy policy, questa Applicazione
            potrebbe fornire all'Utente delle informative aggiuntive
            e contestuali riguardanti Servizi specifici, o la
            raccolta ed il trattamento di Dati Personali.
          </Text>
          <h3>Log di sistema e manutenzione</h3>
          <Text sx={{ display: 'block', mb: 3 }}>
            Per necessità legate al funzionamento ed alla
            manutenzione, questa Applicazione e gli eventuali servizi
            terzi da essa utilizzati potrebbero raccogliere log di
            sistema, ossia file che registrano le interazioni e che
            possono contenere anche Dati Personali, quali l’indirizzo
            IP Utente.
          </Text>
          <h3>Informazioni non contenute in questa policy</h3>
          <Text sx={{ display: 'block', mb: 3 }}>
            Ulteriori informazioni in relazione al trattamento dei
            Dati Personali potranno essere richieste in qualsiasi
            momento al Titolare del Trattamento utilizzando gli
            estremi di contatto.
          </Text>

          <h3>Risposta alle richieste “Do Not Track”</h3>
          <Text sx={{ display: 'block', mb: 3 }}>
            Questa Applicazione non supporta le richieste “Do Not
            Track”.
          </Text>
          <Text sx={{ display: 'block', mb: 3 }}>
            Per scoprire se gli eventuali servizi di terze parti
            utilizzati le supportino, l'Utente è invitato a
            consultare le rispettive privacy policy.
          </Text>

          <h3>Modifiche a questa privacy policy</h3>
          <Text sx={{ display: 'block', mb: 3 }}>
            Il Titolare del Trattamento si riserva il diritto di
            apportare modifiche alla presente privacy policy in
            qualunque momento notificandolo agli Utenti su questa
            pagina e, se possibile, su questa Applicazione nonché,
            qualora tecnicamente e legalmente fattibile, inviando una
            notifica agli Utenti attraverso uno degli estremi di
            contatto di cui è in possesso. Si prega dunque di
            consultare con frequenza questa pagina, facendo
            riferimento alla data di ultima modifica indicata in
            fondo.
          </Text>
          <Text sx={{ display: 'block', mb: 3 }}></Text>
          <Text sx={{ display: 'block', mb: 3 }}>
            Qualora le modifiche interessino trattamenti la cui base
            giuridica è il consenso, il Titolare provvederà a
            raccogliere nuovamente il consenso dell’Utente, se
            necessario.
          </Text>
        </Box>

        <Box>
          <Box>
            <h3>Definizioni e riferimenti legali</h3>
            <Box>
              <h4>Dati Personali (o Dati)</h4>
              <Text sx={{ display: 'block', mb: 3 }}>
                Costituisce dato personale qualunque informazione
                che, direttamente o indirettamente, anche in
                collegamento con qualsiasi altra informazione, ivi
                compreso un numero di identificazione personale,
                renda identificata o identificabile una persona
                fisica.
              </Text>

              <h4>Dati di Utilizzo</h4>
              <Text sx={{ display: 'block', mb: 3 }}>
                Sono le informazioni raccolte automaticamente
                attraverso questa Applicazione (anche da applicazioni
                di parti terze integrate in questa Applicazione), tra
                cui: gli indirizzi IP o i nomi a dominio dei computer
                utilizzati dall’Utente che si connette con questa
                Applicazione, gli indirizzi in notazione URI (Uniform
                Resource Identifier), l’orario della richiesta, il
                metodo utilizzato nell’inoltrare la richiesta al
                server, la dimensione del file ottenuto in risposta,
                il codice numerico indicante lo stato della risposta
                dal server (buon fine, errore, ecc.) il paese di
                provenienza, le caratteristiche del browser e del
                sistema operativo utilizzati dal visitatore, le varie
                connotazioni temporali della visita (ad esempio il
                tempo di permanenza su ciascuna pagina) e i dettagli
                relativi all’itinerario seguito all’interno
                dell’Applicazione, con particolare riferimento alla
                sequenza delle pagine consultate, ai parametri
                relativi al sistema operativo e all’ambiente
                informatico dell’Utente.
              </Text>

              <h4>Utente</h4>
              <Text sx={{ display: 'block', mb: 3 }}>
                L'individuo che utilizza questa Applicazione che,
                salvo ove diversamente specificato, coincide con
                l'Interessato.
              </Text>

              <h4>Interessato</h4>
              <Text sx={{ display: 'block', mb: 3 }}>
                La persona fisica cui si riferiscono i Dati
                Personali.
              </Text>

              <h4>Responsabile del Trattamento (o Responsabile)</h4>
              <Text sx={{ display: 'block', mb: 3 }}>
                La persona fisica, giuridica, la pubblica
                amministrazione e qualsiasi altro ente che tratta
                dati personali per conto del Titolare, secondo quanto
                esposto nella presente privacy policy.
              </Text>

              <h4>Titolare del Trattamento (o Titolare)</h4>
              <Text sx={{ display: 'block', mb: 3 }}>
                La persona fisica o giuridica, l'autorità pubblica,
                il servizio o altro organismo che, singolarmente o
                insieme ad altri, determina le finalità e i mezzi del
                trattamento di dati personali e gli strumenti
                adottati, ivi comprese le misure di sicurezza
                relative al funzionamento ed alla fruizione di questa
                Applicazione. Il Titolare del Trattamento, salvo
                quanto diversamente specificato, è il titolare di
                questa Applicazione.
              </Text>

              <h4>Questa Applicazione</h4>
              <Text sx={{ display: 'block', mb: 3 }}>
                Lo strumento hardware o software mediante il quale
                sono raccolti e trattati i Dati Personali degli
                Utenti.
              </Text>

              <h4>Servizio</h4>
              <Text sx={{ display: 'block', mb: 3 }}>
                Il Servizio fornito da questa Applicazione così come
                definito nei relativi termini (se presenti) su questo
                sito/applicazione.
              </Text>

              <h4>Unione Europea (o UE)</h4>
              <Text sx={{ display: 'block', mb: 3 }}>
                Salvo ove diversamente specificato, ogni riferimento
                all’Unione Europea contenuto in questo documento si
                intende esteso a tutti gli attuali stati membri
                dell’Unione Europea e dello Spazio Economico Europeo.
              </Text>

              <hr />
              <h4>Riferimenti legali</h4>
              <Text sx={{ display: 'block', mb: 3 }}>
                La presente informativa privacy è redatta sulla base
                di molteplici ordinamenti legislativi, inclusi gli
                artt. 13 e 14 del Regolamento (UE) 2016/679.
              </Text>
              <Text sx={{ display: 'block', mb: 3 }}>
                Ove non diversamente specificato, questa informativa
                privacy riguarda esclusivamente questa Applicazione.
              </Text>
            </Box>
          </Box>
        </Box>

        <Box>
          <h2>Titolare del Trattamento dei Dati</h2>
          <Text sx={{ display: 'block', mb: 3 }}>
            Totel Media - Via la Masa, 33/C, 90011 Bagheria PA
          </Text>
          <Text sx={{ display: 'block', mb: 3 }}>
            <strong>Indirizzo email del Titolare:</strong>{' '}
            <a href="mailto:info@totel.it">info@totel.it</a>
          </Text>
        </Box>

        <Box>
          <Text sx={{ display: 'block', mb: 3 }}>
            Ultima modifica: 24 luglio 2023
          </Text>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default PrivacyPage;

export function Head() {
  return <SEO />;
}
