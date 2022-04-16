import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { AboutMobile } from './About/AboutMobile';
import { AboutDesktop } from './About/AboutDesktop';

export const About = () => {
  const smallScreen = useMediaQuery({
    query: '(max-width: 832px)',
  });
  return smallScreen ? <AboutMobile /> : <AboutDesktop />;
};
