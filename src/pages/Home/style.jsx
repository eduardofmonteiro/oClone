import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F7F4ED;
  margin: 0;
  padding: 0;
  min-height: 100vh;
`;

export const Feed = styled.div`
  width: 80%;
  max-width: 800px; 
  margin-top: 20px;
  background-color: #F7F4ED;
  padding: 20px; 
  text-align: center;
`;

export const Button = styled.button`
  background-color: #3E3E3E; 
  color: #fff; 
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 460px;
  height: auto;
  margin-top: 20px;
  border-radius: 5px;
`;