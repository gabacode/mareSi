import React from 'react';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';
import { SEO } from '../components/seo';
import { AiOutlineArrowLeft as BackIcon } from 'react-icons/ai';
import { Link } from 'gatsby';

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Box sx={{ mb: 4 }}>
    <Heading as="h2" sx={{ fontSize: 3, mb: 3 }}>
      {title}
    </Heading>
    {children}
  </Box>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <Text sx={{ display: 'block', mb: 3 }}>{children}</Text>
);

const PrivacyPage = () => {
  return (
    <Container p={4} mx="auto" sx={{ maxWidth: 960 }}>
      <Flex sx={{ alignItems: 'center', mb: 4 }}>
        <Box sx={{ mr: 2 }}>
          <Link to="/">
            <BackIcon color="#3399CC" size={36} />
          </Link>
        </Box>
        <Heading>Privacy Policy</Heading>
      </Flex>

      <Section title="In breve">
        <Paragraph>
          MareSì rispetta la tua privacy. Non abbiamo server che raccolgono i
          tuoi dati. L&apos;unico dato che utilizziamo è la tua posizione GPS, e
          solo quando ci dai il permesso, per mostrarti le spiagge vicine e
          permetterti di raggiungerle tramite Google Maps.
        </Paragraph>
      </Section>

      <Section title="Dati raccolti">
        <Paragraph>
          <strong>Posizione GPS</strong> — Utilizziamo la tua posizione per
          mostrarti le spiagge nelle vicinanze. Questo dato:
        </Paragraph>
        <ul>
          <li>Non viene mai inviato ai nostri server</li>
          <li>Non viene memorizzato</li>
        </ul>
        <Paragraph>
          Se neghi il permesso alla geolocalizzazione, l&apos;app funziona
          comunque: potrai vedere le spiagge della tua regione, ma non la
          distanza esatta da esse.
        </Paragraph>
      </Section>

      <Section title="Servizi di terze parti">
        <Paragraph>
          <strong>Google Maps</strong> — L&apos;app utilizza Google Maps per
          visualizzare la mappa e la tua posizione. Quando utilizzi la funzione
          &quot;Vai su Maps&quot; per ottenere indicazioni stradali, la tua
          posizione viene condivisa con Google. Per maggiori informazioni,
          consulta la{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy di Google
          </a>
          .
        </Paragraph>
      </Section>

      <Section title="Dati non raccolti">
        <Paragraph>Non raccogliamo:</Paragraph>
        <ul>
          <li>Account o registrazioni</li>
          <li>Nome, email o altri dati personali</li>
          <li>Dati di utilizzo o analytics</li>
          <li>Cookie di profilazione</li>
        </ul>
      </Section>

      <Section title="I tuoi diritti">
        <Paragraph>
          Puoi revocare il permesso alla geolocalizzazione in qualsiasi momento
          dalle impostazioni del tuo dispositivo. Non essendoci dati memorizzati
          sui nostri server, non ci sono dati da richiedere, modificare o
          cancellare.
        </Paragraph>
      </Section>

      <Section title="Contatti">
        <Paragraph>
          Per domande sulla privacy, contattaci:
          <br />
          <br />
          <strong>Totel Media</strong>
          <br />
          Via la Masa, 33/C, 90011 Bagheria PA
          <br />
          Email: <a href="mailto:info@totel.it">info@totel.it</a>
        </Paragraph>
      </Section>

      <Section title="Modifiche">
        <Paragraph>
          Eventuali modifiche a questa policy saranno pubblicate su questa
          pagina.
        </Paragraph>
      </Section>

      <Text sx={{ color: 'gray', fontSize: 1 }}>
        Ultimo aggiornamento: 24 gennaio 2026
      </Text>
    </Container>
  );
};

export default PrivacyPage;

export function Head() {
  return <SEO />;
}
