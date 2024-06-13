// src/pages/User/User.tsx

import { Box, Button, Container, Stack } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { withWalletProtection } from '../../features/wallet/hocs/withWalletProtection';
import { Header } from './components/Header';

export const UserPage: React.FC = withWalletProtection(() => {
  const { t } = useTranslation('PageUser');
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <Box>
      <Container maxW="7xl" py={2} as={Stack} spacing={2}>
        <Header />
        <Box>
          {t(
            "As an example, you can put current user's latest transactions here..."
          )}
        </Box>
        <Button onClick={navigateToLogin} colorScheme="teal" mt={4}>Go to Login</Button>
      </Container>
    </Box>
  );
});
