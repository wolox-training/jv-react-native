import React from 'react';
import { Image } from 'react-native';
import { IMAGES } from '@constants/images';

import styles from './styles';

function BackIcon() {
  return <Image style={styles.image} source={IMAGES.backIcon} />;
}

export default BackIcon;
