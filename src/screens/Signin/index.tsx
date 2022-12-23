// Import Styled-Components, Animatable and useState
import { Container, ContainerHeader, TitleHeader, ButtonAccount, ContainerForm, ButtonEye, Register, TitleInput, Input, Button, TitleButton, SubTitleHeader, EyeButton } from "./styles";
import * as Animatable from 'react-native-animatable'
import React, { useState } from "react";

// Link URL
import { Linking } from 'react-native';

// Expo Icons and Toast Application
import { Ionicons, Entypo } from '@expo/vector-icons';
import { toast, ToastContainer } from 'react-toastify';

// Use Firebase api - Create and Login in plataform
import {
  // createUserWithEmailAndPassword, --Function for create patient(user)
  signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from "../../../firebase/firebase-config";
import { StackProps } from "../../routes/types";
import { useNavigation } from '@react-navigation/native';


export default function SigIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [viewPassword, setViewPassword] = useState(true)

  const navigation = useNavigation<StackProps>();

  function handleSignIn() {
    // console.log('Email: ' + email + ' Senha: ' + password);
    signInWithEmailAndPassword(auth, email, password).then(() => {
      console.log('Login concluído com sucesso.');
      navigation.navigate('HomeScreen');
    }).catch(error => console.log(error));
  }

  const ViewEye = () => {
    if (viewPassword) {
      setViewPassword(false);
      return <Ionicons style={{ position: 'absolute', right: 15, alignItems: "center", }} name="eye" size={24} color="black" />
    } else {
      setViewPassword(true);
      return <Ionicons name="eye-off" size={24} color="black" />
    }
  }

  return (
    <Container>
      <ContainerHeader>
        <Animatable.View animation="fadeInLeft" delay={500}>
          <TitleHeader>Bem-vindo(a)</TitleHeader>
          <SubTitleHeader>Utilize as credenciais criada para o seu acesso.</SubTitleHeader>
        </Animatable.View>
      </ContainerHeader>
      <ContainerForm>
        <Animatable.View animation="fadeInUp">
          <TitleInput>Email</TitleInput>
          <Input onChangeText={email => setEmail(email)} placeholder="Digite um email" />

          <TitleInput>Senha</TitleInput>
          <EyeButton>
            <Input secureTextEntry={viewPassword} onChangeText={password => setPassword(password)} placeholder="Digite sua senha" />
            <ButtonEye onPress={ViewEye}>
              {!!viewPassword ? <Ionicons style={{ position: 'absolute', right: 15, alignItems: "center" }} name="eye" size={24} color="black" /> : <Ionicons style={{ position: 'absolute', right: 15, alignItems: "center", }} name="eye-off" size={24} color="black" />}
            </ButtonEye>
          </EyeButton>

          <Button onPress={handleSignIn}>
            <TitleButton>Acessar</TitleButton>
            <Entypo name="login" size={18} color="#F8F8FA" />
          </Button>
          <ButtonAccount onPress={() => Linking.openURL("https://wa.me/+5522999656770?text=Ol%C3%A1,%20Dra.%20Luana%20Araujo.%20Eu%20gostaria%20de%20solicitar%20um%20acesso.%20Poderia%20me%20orientar%20?")}>
            <Register>Não possui um acesso? Solicite aqui</Register>
          </ButtonAccount>
        </Animatable.View>
      </ContainerForm>
      <ToastContainer />
    </Container >
  )
}