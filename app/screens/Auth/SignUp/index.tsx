import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
//** Components */
import CustomButton from '../../../common/Components/CustomButton';
import CustomInput from '../../../common/Components/CustomInput';
import CustomText from '../../../common/Components/CustomText';
import Colors from '../../../libs/Colors';

interface SignUpProps {
  navigation: any;
}

const SignUp: React.FC<SignUpProps> = ({navigation}) => {
  //** Hooks */
  const [name, setName] = useState<string>(''),
    [email, setEmail] = useState<string>(''),
    [password, setPassword] = useState<string>(''),
    [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.whiteColor,
      }}>
      <View
        style={{
          flex: 0.1,
          alignSelf: 'center',
          marginTop: 40,
        }}>
        <CustomText textString="Welcome" />
      </View>

      <View
        style={{
          flex: 0.9,
          marginTop: 40,
        }}>
        <View style={{marginHorizontal: 30}}>
          <CustomInput
            placeholder="Name"
            backgroundViewColor={Colors.colorGray}
            inputValue={name}
            onChangeText={(text: string) => {
              setName(text);
            }}
          />
        </View>

        <View style={{marginTop: 10, marginHorizontal: 30}}>
          <CustomInput
            placeholder="Email"
            inputValue={email}
            backgroundViewColor={Colors.colorGray}
            onChangeText={(text: string) => {
              setEmail(text);
            }}
          />
        </View>

        <View style={{marginTop: 10, marginHorizontal: 30}}>
          <CustomInput
            placeholder="Password"
            inputValue={password}
            isPassword={true}
            backgroundViewColor={Colors.colorGray}
            onChangeText={(text: string) => {
              setPassword(text);
            }}
          />
        </View>

        <View style={{marginTop: 10, marginHorizontal: 30}}>
          <CustomInput
            placeholder="Confirm Password"
            inputValue={confirmPassword}
            isPassword={true}
            backgroundViewColor={Colors.colorGray}
            onChangeText={(text: string) => {
              setConfirmPassword(text);
            }}
          />
        </View>

        <View style={{marginTop: 30, marginHorizontal: 30}}>
          <CustomButton btnString="Sign Up" />
        </View>

        <View
          style={{
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            <CustomText textString="Already have account. SignIn" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
