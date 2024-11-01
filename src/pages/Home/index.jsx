import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Post from '../../components/Post';
import { HomeContainer, Feed} from './style';

export const Home =() =>{
  return (
    <HomeContainer>
      <Header />
      <hr></hr>
      <Feed>
        <Post content="Human stories & ideas" />
        <Post content="A place to read, write, and deepen your understanding" />
        <button>Start reading</button>
      </Feed>
      <img src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt="fundo" width="460" height="600"/>
      <hr></hr>
     <Footer  />
    </HomeContainer>
  );
}