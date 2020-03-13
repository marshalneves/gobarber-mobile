import React, { useRef } from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';
import * as S from './styles';

export default function SignIn({ navigation }) {
  const passwordRef = useRef();

  function handleSubmit() {}

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
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <S.FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Password"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <S.SubmitButton onPress={handleSubmit}>Acessar</S.SubmitButton>
        </S.Form>

        <S.SignLink onPress={() => navigation.navigate('SignUp')}>
          <S.SignLinkText>Criar conta gratuita</S.SignLinkText>
        </S.SignLink>
      </S.Container>
    </Background>
  );
}
