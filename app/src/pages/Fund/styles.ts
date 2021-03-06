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

export const MoneyIcon = styled.Image`
  height: 41px;
  width: 41.5px;
  position: relative;
  top: 8px;
  left: 10px;
`;

export const TitleText = styled.Text`
  font-size: 36px;
  font-family: 'Comfortaa_400Regular';
  font-weight: 400;
  margin-bottom: 2050px;
  padding-horizontal: 20px;
  color: black;
  top: 10px;
  margin: auto;
`;

export const BodyText = styled.Text`
  font-size: 15px;
  font-family: 'Comfortaa_400Regular';
  font-weight: 400;
  margin-top: 50px;
  margin-bottom: 50px
  padding-horizontal: 20px;
  color: black;
  text-align: center


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

export const ProfileButton = styled(RectButton)`
  width: 90%
  height: 50px;
  background-color:#c2c2c2
  border-radius:  10px;
`;

export const FundButton = styled(RectButton)`
  width: 150px
  height: 100px
  margin: 5px
  background-color:#c2c2c2
  border-radius:  10px;
  justify-content: center

`;

export const ProfileButtonText = styled.Text`
  color: black;
  font-size: 13px;
  font-family: 'Roboto_900Black';
`;

export const FundText = styled.Text`
  font-size: 13px;
  font-family: 'Roboto_900Black';
  text-align: center;
  color: black;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
