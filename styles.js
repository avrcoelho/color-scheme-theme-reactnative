import styled from 'styled-components/native';
import IconVI from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const Icon = styled(IconVI).attrs((props) => ({
  color: props.theme.color,
}))``;

export const Author = styled.Text`
  font-size: 40px;
  color: ${(props) => props.theme.color};
`;
