import React from 'react';
import { Image } from 'react-native';
import icBack from '@assets/images/icBack.png';

import styles from './styles';

function BackIcon() {
  return <Image source={icBack} style={styles.image} />;
}

export default BackIcon;
