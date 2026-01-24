import React from 'react';
import { Box, Flex, Grid, Heading, Link, Text } from 'theme-ui';

type TeamMemberProps = {
  name: string;
  linkedIn: string;
  bio: string;
  avatar: React.ReactNode;
};

export const TeamMember = ({ name, linkedIn, bio, avatar }: TeamMemberProps) => (
  <Flex sx={{ my: 5 }}>
    <Grid gap={2} columns={[1, null, 2]} sx={{ alignItems: 'center' }}>
      <Box mx="auto">
        <Link href={linkedIn} target="_blank" rel="noopener">
          {avatar}
        </Link>
      </Box>
      <Box
        sx={{
          mx: 'auto',
          textAlign: ['center', 'center', 'left'],
          maxWidth: ['90%', '61.8%', '100%'],
          mt: [2, 2, 0],
        }}
      >
        <Heading as="h3">{name}</Heading>
        <Text>{bio}</Text>
      </Box>
    </Grid>
  </Flex>
);
