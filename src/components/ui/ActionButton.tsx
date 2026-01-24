import React from 'react';
import { Box, Button, Flex, Text } from 'theme-ui';

const buttonSx = {
  cursor: 'pointer',
  px: 40,
  py: 20,
  borderRadius: 10,
};

type ActionButtonProps = {
  label: string;
  icon: React.ReactNode;
  href: string;
  minWidth?: number;
};

export const ActionButton = ({ label, icon, href, minWidth }: ActionButtonProps) => (
  <Box sx={{ textAlign: 'center' }}>
    <Button
      sx={{ ...buttonSx, minWidth }}
      variant="secondary"
      onClick={() => window.open(href, '_blank')}
    >
      <Flex sx={{ alignItems: 'center', justifyContent: 'center', gap: 1 }}>
        {icon}
        <Text sx={{ fontWeight: 'bold' }}>{label}</Text>
      </Flex>
    </Button>
  </Box>
);
