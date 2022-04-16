import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
} from 'theme-ui';

export const Team = () => {
  const avatarSize = 200;
  return (
    <Flex id="team" sx={{ minHeight: '100vh' }}>
      <Container p={4} sx={{ alignSelf: 'center' }}>
        <Heading
          as="h1"
          color="primary"
          sx={{ textAlign: 'center' }}
        >
          Development Team
        </Heading>
        <Container>
          <Flex sx={{ marginTop: 5, marginBottom: 5 }}>
            <Grid
              gap={2}
              columns={[1, null, 2]}
              sx={{ alignItems: 'center' }}
            >
              <Box mx="auto">
                <Link
                  href="https://www.linkedin.com/in/gabriele-scalici/"
                  target="_blank"
                  rel="noopener"
                >
                  <StaticImage
                    style={{ borderRadius: '50%' }}
                    height={avatarSize}
                    width={avatarSize}
                    src="../../images/team/gabriele-scalici.jpg"
                    alt="Gabriele Scalici"
                    quality={93}
                  />
                </Link>
              </Box>
              <Box
                mx="auto"
                sx={{
                  textAlign: ['center', 'center', 'left'],
                  maxWidth: ['90%', '61.8%', '100%'],
                  marginTop: [2, 2, 0],
                }}
              >
                <Heading as="h3">Gabriele Scalici</Heading>
                <Text>
                  Full-Stack Web Developer, un vero nerd con la
                  passione per la birra e la buona musica. Un vero
                  ninja del codice, il progetto MareSì è nato grazie
                  a lui, quando si è reso conto di non sapere quale
                  fosse la spiaggia migliore dove portare a mare suo
                  figlio.
                </Text>
              </Box>
            </Grid>
          </Flex>
          <Flex sx={{ marginTop: 5, marginBottom: 5 }}>
            <Grid
              gap={2}
              columns={[1, null, 2]}
              sx={{ alignItems: 'center' }}
            >
              <Box mx="auto">
                <Link
                  href="https://www.linkedin.com/in/davide-giunta-222aa41b4/"
                  target="_blank"
                  rel="noopener"
                >
                  <StaticImage
                    style={{ borderRadius: '50%' }}
                    height={avatarSize}
                    width={avatarSize}
                    src="../../images/team/davide-giunta.jpg"
                    alt="Davide Giunta"
                    quality={93}
                  />
                </Link>
              </Box>
              <Box
                sx={{
                  mx: 'auto',
                  textAlign: ['center', 'center', 'left'],
                  maxWidth: ['90%', '61.8%', '100%'],
                  marginTop: [2, 2, 0],
                }}
              >
                <Heading as="h3">Davide Giunta</Heading>
                <Text>
                  User Experience Designer, laureato presso
                  l’università di Palermo. Crede nella tecnologia e
                  ama disegnare interfacce per qualsiasi tipo di
                  dispositivo. E-Sports e Moto sono le sue passioni.
                </Text>
              </Box>
            </Grid>
          </Flex>
        </Container>
      </Container>
    </Flex>
  );
};
