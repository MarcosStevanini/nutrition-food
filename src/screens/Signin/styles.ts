import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #122023;
`;

export const ContainerHeader = styled.View`
  flex: .5;
  background-color: #122023;
  margin: 30% 0 0 8%;
`;

export const TitleHeader = styled.Text`
    color: #F8F8FA;
    font-size: 28px;
    font-weight: 800;
`;

export const SubTitleHeader = styled.Text`
    color: #a1a1a1;
    margin-top: 8px;
`;

export const ContainerForm = styled.View`
  flex: 2;
  background-color: #EEEEF1;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-radius: 15px;
  padding: 0 8%;
`;

export const Title = styled.Text``;


export const TitleInput = styled.Text`
  font-size: 20px;
  margin-top: 28px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  height: 40px;
  margin-bottom: 15px;
  font-size: 16px;
  width: 100%;
  position: relative;
`;

export const Button = styled.TouchableOpacity`
  background-color: #122023;
  width: 100%;
  border-radius: 5px;
  padding: 15px 0;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TitleButton = styled.Text`
  color: #F8F8FA;
  font-size: 18px;
  font-weight: 700;
  margin-right: 10px;
`;

export const Register = styled.Text`
  align-self: center;
  margin-top: 15px;
  color: #a1a1a1;
`;

export const ButtonAccount = styled.TouchableOpacity``;

export const EyeButton = styled.View`
  flex-direction: row;
`;

export const ButtonEye = styled.TouchableOpacity``;