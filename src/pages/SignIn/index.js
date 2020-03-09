import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';
import * as S from './styles';

export default function SignIn({ navigation }) {
  return (
    <Background>
      <S.Container>
        <Image source={logo} />
        <S.Form>
          <S.FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="E-mail"
          />
          <S.FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Password"
          />

          <S.SubmitButton onPress={() => {}}>Acessar</S.SubmitButton>
        </S.Form>

        <S.SignLink onPress={() => navigation.navigate('SignUp')}>
          <S.SignLinkText>Criar conta gratuita</S.SignLinkText>
        </S.SignLink>
      </S.Container>
    </Background>
  );
}
