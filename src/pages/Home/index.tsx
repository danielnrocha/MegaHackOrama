import React from 'react';

import { Container, WelcomeButton, WelcomeButtonText } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <WelcomeButton>
        <WelcomeButtonText>hello mega hack 2020</WelcomeButtonText>
      </WelcomeButton>
    </Container>
  );
};

export default Home;
