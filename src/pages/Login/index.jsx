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
        <Title>Join Medium</Title>
        <Button>Sign up with Google</Button>
        <Button>Sign up with Facebook</Button>
        <Button>Sign up with email</Button>
      </LoginBox>
    </LoginContainer>
  );
}
