import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

interface Props {
  title: string;
}

function TextHeader({ title }: Props) {
  return <Text style={styles.text}>{title}</Text>;
}

export default TextHeader;
