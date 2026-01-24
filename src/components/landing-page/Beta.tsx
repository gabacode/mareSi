import React from 'react';
import { Box, Container, Flex, Grid, Heading, Text } from 'theme-ui';
import { FaDesktop, FaGooglePlay } from 'react-icons/fa';
import { ActionButton } from '../ui';

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.koucee.maresi';
const WEB_APP_URL = 'https://web.maresi.app';

export const Beta = () => {
  return (
    <Flex id="beta" bg="primary" sx={{ minHeight: '100vh' }}>
      <Container p={4} mx="auto" sx={{ maxWidth: 960, alignSelf: 'center' }}>
        <Grid gap={4} columns={1} sx={{ alignItems: 'center' }}>
          <Box mx="auto" sx={{ width: ['100%', '90%', '100%'] }}>
            <Heading
              sx={{ textAlign: 'center', mb: 4 }}
              as="h1"
              color="secondary"
            >
              MareSì Open
            </Heading>
            <Text color="secondary">
              Dopo mesi di lavoro siamo lieti di annunciare che l&apos;app
              MareSì è da oggi disponibile sul Google Play Store.
              <br />
              <br />
              Ci teniamo a ringraziare ancora una volta le persone che hanno
              preso parte alla fase closed beta; i vostri feedback e le vostre
              opinioni ci hanno consentito di sviluppare il nostro prodotto
              migliore di come lo avessimo pensato inizialmente.
              <br />
              <br />
              Il nostro obiettivo era quello di migliorare l&apos;esperienza
              balneare delle persone, aiutandole a scoprire come vivere al
              meglio le spiagge del territorio italiano.
            </Text>
          </Box>
          <Flex
            sx={{
              flexDirection: ['column', 'row'],
              gap: 3,
              justifyContent: 'center',
            }}
          >
            <ActionButton
              label="Scarica l'app"
              icon={<FaGooglePlay />}
              href={PLAY_STORE_URL}
              minWidth={250}
            />
            <ActionButton
              label="Accedi dal Web"
              icon={<FaDesktop />}
              href={WEB_APP_URL}
              minWidth={250}
            />
          </Flex>
        </Grid>
      </Container>
    </Flex>
  );
};
