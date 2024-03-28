import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet, Image} from 'react-native';
import CustomText from '../common/Components/CustomText';
import Color from '../libs/Colors';
import {useSelector} from 'react-redux';
import {PRIMARY_FONT_REGULAR} from '../constants/fonts';
// Screens Importing
import AllDataListing from '../screens/HomeTabs/Home';
import SignUp from '../screens/Auth/SignUp';
import SignIn from '../screens/Auth/Signin';
import TabImageItem from '../common/Components/TabImageItem';
import SplashScreen from '../screens/Splash';
import AppMenuTab from '../screens/HomeTabs/AppMenu';
import {
  IC_TAB_HOME_SELECT,
  IC_TAB_HOME_UNSELECT,
  IC_TAB_SETTING_SELECT,
  IC_TAB_SETTING_UNSELECT,
} from '../utils/ImageSources';
import HomeScreen from '../screens/HomeTabs/Home';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />

      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

// Displaying Projects List ==> 2nd Tabs Stack
function TodoListsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: false,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({navigation, route}) => ({})}
      />
    </Stack.Navigator>
  );
}

// Displaying Sales Orders (SO) Tab ==> 4th Tabs Stack
function UserSettingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Menu"
        component={AppMenuTab}
        options={({navigation, route}) => ({})}
      />
    </Stack.Navigator>
  );
}

function HomeTabs() {
  return (
    <BottomTab.Navigator
      screenListeners={({navigation, route}) => ({
        tabPress: e => {
          // Prevent default action
          e.preventDefault();

          // Do something with the `navigation` object
          navigation.navigate(route.name, {
            screen: route.name,
            params: null,
          });
        },
      })}
      screenOptions={{
        headerShown: false,
        // tabBarStyle: {paddingHorizontal: 25},
        tabBarStyle: {
          // paddingHorizontal: 16,
          paddingVertical: 10,
          // height: 60,
          // backgroundColor: Color.whiteColor,
        },
        tabBarItemStyle: {
          // paddingVertical: 10,
          // paddingHorizontal: 10,
        },
        tabBarLabelStyle: {
          // paddingTop: 10,
          marginBottom: 5,
          fontSize: 14,
          fontFamily: PRIMARY_FONT_REGULAR,
        },
      }}>
      {/*Second Tab*/}

      <BottomTab.Screen
        name="Home"
        component={TodoListsStack}
        options={{
          unmountOnBlur: true,
          tabBarActiveTintColor: Color.readyTextColor,
          tabBarIcon: ({focused}) =>
            focused ? (
              <TabImageItem imageSource={IC_TAB_HOME_SELECT} />
            ) : (
              <TabImageItem imageSource={IC_TAB_HOME_UNSELECT} />
            ),
        }}
      />

      <BottomTab.Screen
        name="Setting"
        component={UserSettingStack}
        options={{
          unmountOnBlur: true,
          tabBarActiveTintColor: Color.readyTextColor,
          tabBarIcon: ({focused}) =>
            focused ? (
              <TabImageItem imageSource={IC_TAB_SETTING_SELECT} />
            ) : (
              <TabImageItem imageSource={IC_TAB_SETTING_UNSELECT} />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default () => <AppNavigator />;

const styles = StyleSheet.create({});
