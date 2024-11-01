import React from 'react';
import { useState } from "react"
import { HeaderContainer, Logo, Username } from './style';
import { Login } from '../../pages/Login';

function header() {
  
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
      setOpenModal(!openModal)
  }
 
  return (
    <HeaderContainer>
      <Logo>Medium</Logo>
      <Username>Our story</Username>
      <Username>Membership</Username>
      <Username>Write</Username>
      <button onClick={handleOpenModal}>Get started</button>
      {
        openModal &&
        <Login/>
      }
    </HeaderContainer>
  );
}

export default header;