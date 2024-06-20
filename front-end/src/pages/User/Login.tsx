// src/pages/User/Login.tsx

import { Box, Button, Container, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();   

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authService.login(email, password);
      navigate('/dashboard'); // 替換成實際的登錄後頁面路徑
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <Container maxW="md" centerContent>
      <Box p={4} borderWidth={1} borderRadius="lg" w="100%">
        <Text fontSize="2xl" mb={4}>Login</Text>
        {error && <Text color="red.500">{error}</Text>}
        <form onSubmit={handleSubmit}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password" isRequired mt={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="teal" mt={4} width="full">Login</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
