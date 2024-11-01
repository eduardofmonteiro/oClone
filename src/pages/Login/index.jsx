import React from 'react';
import {
  LoginContainer,
  LoginBox,
  Input,
  Button,
  Title
} from './style';

export const Login = () => {
  return (
    <LoginContainer>
      <LoginBox>
        <Title>Login</Title>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Button>Entrar</Button>
      </LoginBox>
    </LoginContainer>
  );
}
