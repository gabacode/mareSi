import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
} from 'theme-ui';
import { FaGooglePlay } from 'react-icons/fa';

export const Beta = () => {
  return (
    <Flex id="beta" bg="primary" sx={{ minHeight: '100vh' }}>
      <Container
        p={4}
        mx="auto"
        sx={{ maxWidth: 960, alignSelf: 'center' }}
      >
        <Grid
          gap={4}
          columns={[1, null, 1]}
          sx={{ alignItems: 'center' }}
        >
          <Box
            mx="auto"
            sx={{
              width: ['100%', '90%', '100%'],
            }}
          >
            <Heading
              sx={{
                textAlign: ['center', 'center', 'center'],
                mb: 4,
              }}
              as="h1"
              color="secondary"
            >
              MareSì Open
            </Heading>
            <Text color="secondary">
              Dopo mesi di lavoro siamo lieti di annunciare che
              l&apos;app MareSì è da oggi disponibile sul Google Play
              Store.
              <br />
              <br /> Ci teniamo a ringraziare ancora una volta le
              persone che hanno preso parte alla fase closed beta; i
              vostri feedback e le vostre opinioni ci hanno
              consentito di sviluppare il nostro prodotto migliore di
              come lo avessimo pensato inizialmente.
              <br />
              <br />
              Il nostro obiettivo era quello di migliorare
              l&apos;esperienza balneare delle persone, aiutandole a
              scoprire come vivere al meglio le spiagge del
              territorio italiano.
            </Text>
            <Heading
              as="h4"
              color="secondary"
              sx={{ float: 'right', mt: 5 }}
            >
              Gabriele & Davide
            </Heading>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              sx={{
                cursor: 'pointer',
                paddingRight: 40,
                paddingLeft: 40,
                paddingTop: 20,
                paddingBottom: 20,
                borderRadius: 10,
              }}
              variant="secondary"
              onClick={() => {
                window.open(
                  'https://play.google.com/store/apps/details?id=com.koucee.maresi',
                  '_blank'
                );
              }}
            >
              <Flex>
                <Flex sx={{ alignSelf: 'center', marginRight: 1 }}>
                  <FaGooglePlay />
                </Flex>
                <Flex sx={{ alignSelf: 'center' }}>
                  <Text sx={{ fontWeight: 'bold' }}>
                    Scarica l&apos;app
                  </Text>
                </Flex>
              </Flex>
            </Button>
          </Box>
        </Grid>
      </Container>
    </Flex>
  );
};
