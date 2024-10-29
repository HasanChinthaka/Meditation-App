import { View, Text, TouchableOpacity, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import React from 'react';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  textStyles?: TextStyle;
  containerStyles?: ViewStyle;
}

const CustomButton = ({ onPress, title, textStyles = {}, containerStyles = {} }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, containerStyles]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    minHeight: 62,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
  },
});

export default CustomButton;
