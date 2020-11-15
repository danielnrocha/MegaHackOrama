import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ffff;
`;

export const ArrowReturn = styled.Image`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 25px;
  height: 25px;
`;

export const LoginText = styled.Text`
  font-size: 36px;
  font-family: 'Comfortaa_400Regular';
  font-weight: 400;
  margin-right: auto;
  margin-bottom: 20px;
  padding-horizontal: 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#333',
  padding: 15,
})`
  width: 343px;
  height: 52px;

  background: #ffff;
  border: 2px solid #000;
  margin: 10px;
`;

export const LoginButton = styled(RectButton)`
  width: 343px;
  background: #000;
  height: 52px;
  justify-content: center;
  align-items: center;
`;

export const LoginButtonText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-family: 'Roboto_900Black';
  text-transform: uppercase;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: -100px;
`;
