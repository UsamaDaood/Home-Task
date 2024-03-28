import React, {useState} from 'react';
import {Text, View} from 'react-native';
// ** Components
import CustomButton from '../../../common/Components/CustomButton';
import CustomInput from '../../../common/Components/CustomInput';
import {toastShow} from '../../../libs/toast';
//** Utils */
import Colors from '../../../libs/Colors';
//** Styles */
import {styles} from '../../../Styles/LoginStyles';

interface SignInProps {
  navigation: any;
}

const SignIn: React.FC<SignInProps> = ({navigation}) => {
  //** Hooks */
  const [username, setUserName] = useState<string>(''),
    [password, setPassword] = useState<string>('');
  /** Consts */
  const loginArr = [
    {username: 'Kevin', password: 'TCL123'},
    {username: 'Kate', password: 'TCL456'},
    {username: 'Usama', password: '123123'},
  ];

  /**
   * Handling Offline Login
   */
  const handleLogin = () => {
    if (username.trim().length == 0) {
      // if Empty Username
      toastShow('error', 'Please enter username');
    } else if (password.trim().length == 0) {
      // If Empty Password
      toastShow('error', 'Please enter password');
    } else {
      // When Everything is fine
      const checLogin = loginArr.filter(
        data =>
          data.username.toLowerCase() == username.toLowerCase() &&
          data.password === password,
      );
      if (checLogin.length == 0) {
        // Login UnSuccesssfull
        toastShow('error', 'Invalid Username or Password.');
      } else {
        //   Login Successfull
        toastShow('success', 'Login Succull');
        navigation.navigate('HomeTabs', {
          username: '',
        });
      }
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.whiteColor,
      }}>
      <View style={styles.headerStyle}>
        <Text
          style={{color: Colors.whiteColor, fontSize: 20, fontWeight: 'bold'}}>
          Login
        </Text>
      </View>

      <View style={styles.formViewStyle}>
        <View style={{marginHorizontal: 30, flexDirection: 'column'}}>
          <Text style={styles.inputTitle}>UserName</Text>
          <CustomInput
            placeholder="UserName"
            inputValue={username}
            backgroundViewColor={Colors.colorGray}
            onChangeText={(text: string) => {
              setUserName(text);
            }}
          />
        </View>

        <View style={{marginTop: 20, marginHorizontal: 30}}>
          <Text style={styles.inputTitle}>Password</Text>

          <CustomInput
            placeholder="Password"
            backgroundViewColor={Colors.colorGray}
            inputValue={password}
            isPassword={true}
            onChangeText={(text: string) => {
              setPassword(text);
            }}
          />
        </View>

        <View style={{marginTop: 30, marginHorizontal: 20}}>
          <CustomButton
            btnString="LOGIN"
            onClick={() => {
              // navigation.navigate('RecomenderScreen');
              handleLogin();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;
