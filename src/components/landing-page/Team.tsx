import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Container, Flex, Heading } from 'theme-ui';
import { TeamMember } from '../ui';

const AVATAR_SIZE = 200;
const AVATAR_STYLE = { borderRadius: '50%' };

export const Team = () => {
  return (
    <Flex id="team" sx={{ minHeight: '100vh' }}>
      <Container p={4} sx={{ alignSelf: 'center' }}>
        <Heading as="h1" color="primary" sx={{ textAlign: 'center' }}>
          Development Team
        </Heading>
        <Container>
          <TeamMember
            name="Gabriele Scalici"
            linkedIn="https://www.linkedin.com/in/gabriele-scalici/"
            bio="Full-Stack Web Developer, un vero nerd con la passione per la birra e la buona musica. Un vero ninja del codice, il progetto MareSì è nato grazie a lui, quando si è reso conto di non sapere quale fosse la spiaggia migliore dove portare a mare suo figlio."
            avatar={
              <StaticImage
                style={AVATAR_STYLE}
                height={AVATAR_SIZE}
                width={AVATAR_SIZE}
                src="../../images/team/gabriele-scalici.jpg"
                alt="Gabriele Scalici"
                quality={93}
              />
            }
          />
          <TeamMember
            name="Davide Giunta"
            linkedIn="https://www.linkedin.com/in/davide-giunta-222aa41b4/"
            bio="User Experience Designer, laureato presso l'università di Palermo. Crede nella tecnologia e ama disegnare interfacce per qualsiasi tipo di dispositivo. E-Sports e Moto sono le sue passioni."
            avatar={
              <StaticImage
                style={AVATAR_STYLE}
                height={AVATAR_SIZE}
                width={AVATAR_SIZE}
                src="../../images/team/davide-giunta.jpg"
                alt="Davide Giunta"
                quality={93}
              />
            }
          />
        </Container>
      </Container>
    </Flex>
  );
};
