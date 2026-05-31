import { Box } from '@flodesk/grain';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <Box
      padding={{ mobile: 's', tablet: 'm', default: 'l' }}
      width={{ mobile: '100%', tablet: '90%', default: '80%' }}
      maxWidth="1200px"
      margin="0 auto"
      borderSide="all"
      borderColor="transparent"
      backgroundColor="background"
    >
      {children}
    </Box>
  );
}
