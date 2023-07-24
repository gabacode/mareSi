import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Container, Flex, Heading, Link, Text } from 'theme-ui';

export const AboutMobile = () => {
  return (
    <Flex
      id="main"
      sx={{
        justifyContent: 'space-between',
        display: ['flex', 'flex', 'none'],
      }}
    >
      <Container
        mx="auto"
        sx={{
          marginBottom: 80,
          maxWidth: '100%',
          minHeight: '100vh',
          alignSelf: 'center',
        }}
      >
        <Box sx={{ marginTop: 80 }}>
          <Container
            sx={{ mx: 'auto', px: 4 }}
            style={{
              textAlign: 'center',
              marginBottom: 5,
            }}
          >
            <StaticImage
              style={{ borderRadius: '50px' }}
              transformOptions={{
                fit: 'cover',
              }}
              layout={'constrained'}
              height={420}
              width={756}
              quality={100}
              src="../../../images/splash/01.png"
              alt="MareSì Splash"
            />
          </Container>
          <Box mx="auto" p={4}>
            <Flex
              sx={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 3,
              }}
            >
              <Heading as="h1" sx={{ color: 'primary' }}>
                Il progetto
              </Heading>
            </Flex>
            <Text>
              MareSì nasce dalla voglia di fornire ai bagnanti
              informazioni sulla qualità delle acque all’interno del
              territorio italiano utilizzando I dati messi a
              disposizione dal{' '}
              <Link
                sx={{ color: 'text' }}
                href="https://www.portaleacque.salute.gov.it/PortaleAcquePubblico/home.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ministero della Salute
              </Link>{' '}
              su licenza{' '}
              <Link
                sx={{ color: 'text' }}
                href="http://creativecommons.org/licenses/by/3.0/it/legalcode"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC-BY 3.0
              </Link>
              .
            </Text>
          </Box>
        </Box>
        <Box>
          <Container
            sx={{ mx: 'auto', px: 4 }}
            style={{
              textAlign: 'center',
              marginBottom: 5,
            }}
          >
            <StaticImage
              style={{ borderRadius: '50px' }}
              transformOptions={{
                fit: 'cover',
              }}
              layout={'constrained'}
              height={420}
              width={756}
              quality={100}
              src="../../../images/splash/02.png"
              alt="MareSì Splash"
            />
          </Container>
          <Box mx="auto" p={4}>
            <Flex
              sx={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 3,
              }}
            >
              <Heading as="h1" sx={{ color: 'primary' }}>
                Chi Siamo
              </Heading>
            </Flex>
            <Text>
              Siamo semplicemente due ragazzi siciliani esperti in
              design e development che hanno a cuore l’ambiente e
              amano trascorrere giornate a mare con la propria
              famiglia. Il nostro progetto si chiama Koucee, vi
              invitiamo sui nostri social per conoscerci meglio.
            </Text>
          </Box>
        </Box>
      </Container>
    </Flex>
  );
};
