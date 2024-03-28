import { ViewStyle, ImageSourcePropType, ImageStyle } from "react-native";

export interface ButtonProps {
  btnString: string;
  onClick: any;
  btnStyle?: ViewStyle;
}

export interface HeaderProps {
  leftIcon?: ImageSourcePropType;
  headerTitle?: string;
  RightIcon?: ImageSourcePropType;
  callBackLeftImage?: any;
  callBackRightImage?: any;
  containerStyle?: ViewStyle;
}

export interface CustomInputProps {
  leftIcon?: ImageSourcePropType;
  placeholder?: string;
  RightIcon?: ImageSourcePropType;
  callBackLeftImage?: any;
  callBackRightImage?: any;
  onChangeText?: any;
  onSubmitEditing?: any;
  keyboardType?: any;
  inputValue?: string;
  backgroundViewColor?: string;
  editable?: boolean;
  isPassword?: boolean;
  viewStyle?: ViewStyle;
}

export interface CustomInputProps {
  leftIcon?: ImageSourcePropType;
  placeholder?: string;
  callBackLeftImage?: any;
  onChangeText?: any;
  onSubmitEditing?: any;
  keyboardType?: any;
  inputValue?: string;
  callBackRightImage?: any
}

export interface TextProps {
    textString: string;
}

export interface ImageProps {
  imageSource: any;
  imageStyle?: ImageStyle;
}
