import { Stack } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import useContainer from './hook';
import styles from './styles';

const ColorGenerator: React.FC = () => {
  const { color, generateColor } = useContainer();

  return (
    <TouchableOpacity
      testID="ScreenBtn"
      onPress={generateColor}
      style={[styles.clickable, { backgroundColor: color }]}
      activeOpacity={1}
    >
      <Text style={styles.text}>Hello there</Text>
    </TouchableOpacity>
  );
};

export default ColorGenerator;
