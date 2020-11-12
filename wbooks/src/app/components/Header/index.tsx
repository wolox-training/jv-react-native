import React from 'react';
import { Image } from 'react-native';
import { IMAGES } from '@constants/images';

import styles from './styles';

function Header() {
  return <Image source={IMAGES.header} style={styles.image} />;
}

export default Header;
