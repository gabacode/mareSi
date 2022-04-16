import React from 'react';
import { Box, Container, Heading, Link } from 'theme-ui';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';

export const Footer = () => {
  const iconSize = 36;
  return (
    <Box bg="primary" color="secondary" sx={{ textAlign: 'center' }}>
      <Container p={4}>
        <Heading as="h2">
          MareSì è sviluppata dal team Koucee!
        </Heading>
        <Heading as="h3">
          Siamo due amici che sviluppano prodotti per le persone.
        </Heading>
        <Box p={3}>
          <Link
            sx={{ color: 'secondary' }}
            href="https://www.instagram.com/kouceestudio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              style={{ marginRight: '3px' }}
              size={iconSize}
            />
          </Link>
          <Link
            sx={{ color: 'secondary' }}
            href="https://www.facebook.com/koucee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare
              style={{ marginLeft: '3px' }}
              size={iconSize}
            />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};
