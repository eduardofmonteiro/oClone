import React from 'react';
import { PostContainer, UserName, Content } from './style';

function Post({ user, content }) {
  return (
    <PostContainer>
      <UserName>{user}</UserName>
      <Content>{content}</Content>
    </PostContainer>
  );
}

export default Post;