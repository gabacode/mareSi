import React, { FC } from 'react';
import { Box, Image, Grid } from 'theme-ui';
import { ISlide } from '../../data/press';

interface SlideProps {
  slides: ISlide[];
}

export const Slide: FC<SlideProps> = ({ slides }) => {
  return (
    <Grid columns={[1, null, 3]}>
      {slides.map(slide => (
        <Box
          style={{ alignSelf: 'center' }}
          mx="auto"
          sx={{ marginTop: [3, 0, 0] }}
          key={slide.title}
        >
          <a
            href={slide.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              style={{ height: slide.height }}
              variant="press"
              src={slide.image}
              alt={slide.title}
            />
          </a>
        </Box>
      ))}
    </Grid>
  );
};
