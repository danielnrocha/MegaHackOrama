import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonTextLight } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const LightButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonTextLight>{children}</ButtonTextLight>
    </Container>
  );
};

export default LightButton;
