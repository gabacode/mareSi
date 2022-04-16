import React from 'react';
import { Box, Container, Flex, Grid, Heading, Text } from 'theme-ui';
import { Form } from './Form';

export const Beta = () => {
  return (
    <Flex id="beta" bg="primary" sx={{ minHeight: '100vh' }}>
      <Container
        p={4}
        mx="auto"
        sx={{ maxWidth: 1920, alignSelf: 'center' }}
      >
        <Grid
          gap={4}
          columns={[1, null, 2]}
          sx={{ alignItems: 'center' }}
        >
          <Box
            mx="auto"
            sx={{
              width: ['100%', '90%', '100%'],
              textAlign: ['center', 'center', 'left'],
            }}
          >
            <Heading as="h1" color="secondary">
              Entra a far parte della closed beta!
            </Heading>
            <Text>
              A breve lanceremo una closed beta fornendo, in
              anteprima, ai primi mille utenti che si registreranno
              tramite il nostro contact form la versione beta
              dell’app. Vogliamo chiedervi un piccolo aiuto per
              rendere questo prodotto migliore.
            </Text>
          </Box>
          <Form />
        </Grid>
      </Container>
    </Flex>
  );
};
