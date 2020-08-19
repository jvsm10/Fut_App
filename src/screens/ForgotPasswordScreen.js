import React, { memo, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { emailValidator } from '../core/utils';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import Button from '../components/Button';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }

    navigation.navigate('LoginScreen');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('LoginScreen')} />

      <View style={styles.espac}>
      <Header>FUT-ON</Header>
      <Logo />

      <Header>Resgate sua senha</Header>

      <TextInput
        label="Endereço de e-mail"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button mode="outlined" onPress={_onSendPressed} style={styles.button}>
        Enviar instruções de resgate
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.label}>← voltar ao login</Text>
      </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
  espac:{
    width: '100%',
    top: 40 + getStatusBarHeight(),
      flex: 1,
      
      
      alignSelf: 'center',
      alignItems: 'center',
  },
});

export default memo(ForgotPasswordScreen);
