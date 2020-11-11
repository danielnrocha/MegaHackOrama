import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #333;

  justify-content: center;
  align-items: center;
`;

export const WelcomeButton = styled.TouchableOpacity`
  background: #e2a3c7;
  padding: 20px;
  border-radius: 4px;
`;

export const WelcomeButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
