import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
//** Styles */
import {styles} from '../../Styles/SplashStyles';

interface SplashProps {
  navigation: any;
}

const SplashScreen: React.FC<SplashProps> = ({navigation}) => {
  useEffect(() => {
    handlingSplash();
  }, []);

  // Getting Go to Screen
  const goToScreen = async () => {
    return 'HomeTabs';
  };

  // Handling Splash Screen
  const handlingSplash = () => {
    setTimeout(async () => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: await goToScreen(),
          },
        ],
      });
    }, 2500);
  };

  return (
    <View style={styles.centered}>
      <Text style={styles.title}>Assessment Task</Text>
    </View>
  );
};

export default SplashScreen;
