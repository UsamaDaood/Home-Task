import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
//** Fonts */
import {PRIMARY_FONT_MEDIUM} from '../../constants/fonts';
//** INterfaces */
import {ButtonProps} from '../../Interfaces';
//** Utils */
import Color from '../../libs/Colors';

const CustomButton = ({btnString, onClick, btnStyle}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.btnStyle, btnStyle]} onPress={onClick}>
      <Text style={styles.btnTextStyle}>{btnString}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 15,
  },
  btnStyle: {
    backgroundColor: Color.primaryColor,
    padding: 10,
    borderRadius: 7,
  },
  btnTextStyle: {
    color: Color.whiteColor,
    alignSelf: 'center',
    fontFamily: PRIMARY_FONT_MEDIUM,
  },
});

export default CustomButton;
