import React, { useState, useEffect } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  NavLink,
} from 'theme-ui';
import Hamburger from 'hamburger-react';
import Logo from '../../images/logo.svg';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

export const Header = () => {
  const MenuItems = [
    {
      name: 'Home',
      link: '/#main',
    },
    {
      name: 'Dev Team',
      link: '/#team',
    },
    {
      name: 'Scarica',
      link: '/#beta',
    },
    {
      name: 'Privacy',
      link: '/privacy',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.getElementsByTagName('html')[0].style.overflow =
        'hidden';
    } else {
      document.getElementsByTagName('html')[0].style.overflow = '';
    }
  }, [isOpen]);

  const handleMenuClick = () => setIsOpen(false);
  return (
    <>
      <Box
        bg={isOpen ? 'primary' : 'white'}
        sx={{
          position: 'absolute',
          width: '100%',
          zIndex: 3,
        }}
      >
        <Grid
          gap={2}
          columns={[2, '2fr 1fr']}
          sx={{ alignItems: 'center' }}
        >
          <Box>
            <AnchorLink to="/#main" title="Home">
              <Link href="/" p={3}>
                <IconButton
                  sx={{
                    cursor: 'pointer',
                    display: isOpen ? 'none' : 'unset',
                  }}
                >
                  <Logo style={{ width: '32px' }} />
                </IconButton>
              </Link>
            </AnchorLink>
          </Box>
          <Box>
            <Flex
              sx={{
                justifyContent: 'space-evenly',
                alignItems: 'center',
                display: ['none', 'none', 'flex'],
              }}
            >
              <AnchorLink to="/#beta">
                <NavLink color="primary" p={2}>
                  Scarica
                </NavLink>
              </AnchorLink>

              <AnchorLink to="/#team">
                <NavLink color="primary" p={2}>
                  Dev Team
                </NavLink>
              </AnchorLink>

              <AnchorLink to="/privacy">
                <NavLink color="primary" p={2}>
                  Privacy
                </NavLink>
              </AnchorLink>
            </Flex>
            <Box
              p={2}
              sx={{
                float: 'right',
                zIndex: 4,
                display: ['flex', 'flex', 'none'],
              }}
            >
              <Hamburger
                size={30}
                color={isOpen ? 'white' : '#3399CC'}
                toggled={isOpen}
                toggle={setIsOpen}
              />
            </Box>
          </Box>
        </Grid>
      </Box>
      {isOpen && (
        <Flex
          bg="primary"
          mx="auto"
          sx={{
            top: 0,
            position: 'absolute',
            height: '100vh',
            width: '100%',
            zIndex: 2,
          }}
        >
          <Container
            sx={{
              alignItems: 'center',
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            {MenuItems.map((item, key) => (
              <AnchorLink
                key={key}
                to={item.link}
                onAnchorLinkClick={handleMenuClick}
                title={item.name}
              >
                <NavLink sx={{ display: 'block' }} color="primary">
                  <Heading as="h1" color="secondary">
                    {item.name}
                  </Heading>
                </NavLink>
              </AnchorLink>
            ))}
            <Box sx={{ marginTop: 2 }}>
              <Link
                sx={{ color: 'secondary' }}
                href="https://www.instagram.com/kouceestudio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  style={{ marginRight: '3px' }}
                  size={30}
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
                  size={30}
                />
              </Link>
            </Box>
          </Container>
        </Flex>
      )}
    </>
  );
};
