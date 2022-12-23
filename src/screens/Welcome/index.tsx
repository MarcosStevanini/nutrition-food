import React from "react";
import { Button, Container, Content, HeaderTitle, Overlay, Image, SubTitle, TextButton, TextHeaderTitle, Title } from './styles'
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';
import { StackProps } from '../../routes/types'

import { AntDesign } from '@expo/vector-icons';

export default function Welcome() {

  const navigation = useNavigation<StackProps>();

  return (
    <Content>
      <Animatable.View animation="fadeIn">
        <Image source={require('../../../assets/nutriBg.jpg')} resizeMode="cover" />
        <Overlay />
        <HeaderTitle>
          <TextHeaderTitle>Nutrition</TextHeaderTitle>
          <TextHeaderTitle>Food</TextHeaderTitle>
        </HeaderTitle>

        <Container
          position="absolute"
          padding="7% 7% 0 7%"
          bottom="8%"
          width='100%'
        >
          <Animatable.View animation="fadeInUp" delay={400}>
            <Title>Olá!</Title>
            <Title>Se alimentar saudável é fácil</Title>
            <SubTitle>Comece sua jornada para uma vida mais feliz e saudável</SubTitle>

            <Button onPress={() => navigation.navigate('Sigin')}>
              <TextButton>Entrar</TextButton>
              <AntDesign name="arrowright" size={18} color="#F8F8FA" />
            </Button>
          </Animatable.View>
        </Container>

      </Animatable.View>
    </Content>
  )
}