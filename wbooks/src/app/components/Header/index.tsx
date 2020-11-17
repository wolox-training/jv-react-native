import React from 'react';
import { Image } from 'react-native';
import bcNavbar from '@assets/images/bcNavbar.png';

import styles from './styles';

function Header() {
  return <Image resizeMode="stretch" source={bcNavbar} style={styles.image} />;
}

export default Header;
