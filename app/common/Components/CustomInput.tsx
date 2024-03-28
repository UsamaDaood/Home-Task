// Global loader for whole application //

import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
//** fonts */
import {PRIMARY_FONT_REGULAR} from '../../constants/fonts';
import {responsiveFontSize} from '../../libs/responsiveFont';
import Colors from '../../libs/Colors';
//** INterfaces */
import {CustomInputProps} from '../../Interfaces';

const CustomInput = ({
  leftIcon,
  placeholder,
  RightIcon,
  callBackLeftImage,
  callBackRightImage,
  onChangeText,
  onSubmitEditing,
  keyboardType,
  inputValue,
  backgroundViewColor,
  editable,
  isPassword,
  viewStyle,
}: CustomInputProps) => {
  return (
    <View
      style={[
        styles.container,
        viewStyle,
        {
          backgroundColor: backgroundViewColor
            ? backgroundViewColor
            : Colors.backGroundLowWhiteColor,
        },
      ]}>
      {leftIcon && (
        <View style={{flex: 0.1, alignSelf: 'center', marginLeft: 5}}>
          <TouchableOpacity onPress={callBackLeftImage}>
            <Image
              style={[
                styles.cartIconStyle,
                {alignSelf: 'flex-start', marginLeft: 10},
              ]}
              source={leftIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      )}
      <View style={{flex: 0.9}}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="grey"
          style={{padding: 10, fontFamily: PRIMARY_FONT_REGULAR}}
          keyboardType={keyboardType ? keyboardType : 'default'}
          value={inputValue}
          onChangeText={text => onChangeText(text)}
          onSubmitEditing={onSubmitEditing}
          editable={editable}
          selectTextOnFocus={false}
          secureTextEntry={isPassword}
        />
      </View>

      {RightIcon && (
        <View style={{flex: 0.1, alignSelf: 'center', marginRight: 10}}>
          <TouchableOpacity onPress={callBackRightImage}>
            <Image
              style={[
                styles.cartIconStyle,
                {alignSelf: 'flex-start', marginLeft: 10},
              ]}
              //source={require('../../../assets/images/svg/shopping_cart.png')}
              source={RightIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: Color.colorGray,
    backgroundColor: Colors.backGroundLowWhiteColor,
    borderRadius: 10,
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginTop: 10,
  },
  cartIconStyle: {
    width: responsiveFontSize(18),
    height: responsiveFontSize(18),
    alignSelf: 'flex-end',
    marginRight: 10,
  },
});

export default CustomInput;
