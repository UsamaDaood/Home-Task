import React from 'react';
import Color from '../../libs/Colors';
//** Interfaces */
import {CustomInputProps} from '../../Interfaces';
//** Components */
import CustomInput from './CustomInput';

const CustomSearchInput = ({
  leftIcon,
  placeholder,
  callBackLeftImage,
  callBackRightImage,
  onChangeText,
  onSubmitEditing,
  keyboardType,
  inputValue,
}: CustomInputProps) => {
  const deleteSearch = () => {
    onChangeText('');

    callBackRightImage();
  };
  return (
    <CustomInput
      leftIcon={leftIcon}
      placeholder={placeholder}
      backgroundViewColor={Color.colorGray}
      RightIcon={
        inputValue == ''
          ? require('../../../assets/images/svg/ic_search.png')
          : require('../../../assets/images/svg/vector.png')
      }
      callBackLeftImage={callBackLeftImage}
      callBackRightImage={deleteSearch}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      keyboardType={keyboardType}
      inputValue={inputValue}
    />
  );
};

export default CustomSearchInput;
