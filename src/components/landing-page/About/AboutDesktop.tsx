import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
} from 'theme-ui';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Logo from '../../../images/logo.svg';

export const AboutDesktop = () => {
  const [pageSwap, setPageSwap] = useState(false);
  const handleRotate = () => setPageSwap(!pageSwap);
  const rotate = pageSwap ? 'rotate(180deg)' : 'rotate(0)';

  return (
    <Flex
      id="main"
      sx={{
        justifyContent: 'space-between',
        display: ['none', 'none', 'flex'],
      }}
    >
      <Container
        mx="auto"
        sx={{
          maxWidth: '100%',
          minHeight: '100vh',
          alignSelf: 'center',
        }}
      >
        <Grid
          gap={2}
          columns={[1, null, 2]}
          sx={{ alignItems: 'center' }}
        >
          <Box mx="auto" p={4}>
            <Flex
              sx={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 3,
                alignSelf: 'center',
              }}
            >
              <Logo style={{ width: '42px' }} />
              <Flex
                sx={{
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center',
                }}
              >
                <Heading
                  as="h1"
                  sx={{ color: 'primary', marginLeft: 3 }}
                >
                  {pageSwap ? 'Chi Siamo' : 'Il progetto'}
                </Heading>
                <Box sx={{ display: 'flex' }}>
                  <AiOutlineArrowRight
                    style={{
                      cursor: 'pointer',
                      transform: rotate,
                      transition: 'all 0.2s linear',
                    }}
                    onClick={handleRotate}
                    size={36}
                    color="#3399CC"
                  />
                </Box>
              </Flex>
            </Flex>
            {pageSwap ? (
              <Text>
                Siamo semplicemente due ragazzi siciliani esperti in
                design e development che hanno a cuore l’ambiente e
                amano trascorrere giornate a mare con la propria
                famiglia. Il nostro progetto si chiama Koucee, vi
                invitiamo sui nostri social per conoscerci meglio.
              </Text>
            ) : (
              <Text>
                MareSì nasce dalla voglia di fornire ai bagnanti
                informazioni sulla qualità delle acque all’interno
                del territorio italiano utilizzando I dati messi a
                disposizione dal{' '}
                <Link
                  sx={{ color: 'text' }}
                  href="https://www.portaleacque.salute.gov.it/PortaleAcquePubblico/home.do"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ministero della Salute
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
            )}
          </Box>
          <Box
            sx={{
              textAlign: 'right',
            }}
          >
            {pageSwap ? (
              <StaticImage
                style={{
                  height: '100vh',
                }}
                transformOptions={{
                  fit: 'contain',
                }}
                src="../../../images/splash/02.png"
                alt="MareSì Splash"
              />
            ) : (
              <StaticImage
                style={{
                  height: '100vh',
                }}
                transformOptions={{
                  fit: 'contain',
                }}
                src="../../../images/splash/01.png"
                alt="MareSì Splash"
              />
            )}
          </Box>
        </Grid>
      </Container>
    </Flex>
  );
};
