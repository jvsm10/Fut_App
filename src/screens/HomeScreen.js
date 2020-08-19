import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const HomeScreen = ({ navigation }) => (
  <Background>
    <View style={styles.espac}>
    <Header>FUT-ON</Header>
    <Logo />
    <Paragraph>
      A maneira mais fácil de encontrar aquela pelada ideal para você.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Entrar
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Registrar
    </Button>
    </View>
  </Background>
);

const styles = StyleSheet.create({
  espac:{
    width: '100%',
      flex: 1,
      
      
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
  },
});
export default memo(HomeScreen);
