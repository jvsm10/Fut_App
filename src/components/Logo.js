import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/ball_logo.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 118,
    height: 118,
    marginBottom: 60,
  },
});

export default memo(Logo);
