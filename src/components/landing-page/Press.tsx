import React from 'react';
import { Container, Flex, Heading } from 'theme-ui';
import { Slide } from '../slide';
import { press } from '../../data/press';

export const Press = () => {
  return (
    <Flex id="press" sx={{ minHeight: '200px' }}>
      <Container p={4} mx="auto" sx={{ alignSelf: 'center' }}>
        <Heading
          as="h1"
          color="primary"
          sx={{ textAlign: 'center' }}
        >
          Dicono di noi
        </Heading>
        <Flex
          sx={{
            marginTop: 5,
            marginBottom: 5,
            justifyContent: 'center',
          }}
        >
          <Slide slides={press} />
        </Flex>
      </Container>
    </Flex>
  );
};
