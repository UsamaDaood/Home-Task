import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  Modal,
} from 'react-native';
//** Utils */
import {
  IC_APP_LOGO,
  IC_CROSS,
  IC_INFO,
  IC_PRIVACY_POLICY,
  IC_RATE_US,
  IC_TURN_RIGHT,
} from '../../utils/ImageSources';
//** components */
import {toastShow} from '../../libs/toast';
import CustomHeader from '../../common/Components/CustomHeader';
//** Consts */
import {aboutApp, privacyPolicy} from '../../utils/const';
//** Styles */
import {styles} from '../../Styles/AppMenuStyles';

interface AppMenuProps {
  navigation: any;
}

const AppMenuTab: React.FC<AppMenuProps> = ({navigation}) => {
  const [isVisibleAbout, setIsVisibleAbout] = useState<boolean>(false);

  const options: any[] = [
    {
      id: 3,
      name: 'Privacy Policy',
      icon: IC_PRIVACY_POLICY,
      callBack: () => {
        Linking.openURL(privacyPolicy);
      },
    },
    {
      id: 4,
      name: 'About App',
      icon: IC_INFO,
      callBack: () => {
        setIsVisibleAbout(true);
      },
    },
    {
      id: 5,
      name: 'Rate us',
      icon: IC_RATE_US,
      callBack: () => {
        toastShow('success', 'Coming Soon');
      },
    },
  ];

  // render Header
  const renderHeader = () => {
    return <CustomHeader headerTitle="Menu" />;
  };

  // Render App Icon and version
  const appLogoName = () => {
    return (
      <View style={styles.logoViewStyle}>
        <Image
          source={IC_APP_LOGO}
          style={styles.logoStyle}
          resizeMode={'contain'}
        />
        <Text style={styles.appNameStyle}>ToDo Lists</Text>
      </View>
    );
  };

  // render Options
  const renderListOptions = () => {
    return options.map((item: any, index: number) => {
      return renderOptionItem(item?.icon, item?.name, item?.callBack);
    });
  };

  // working render option Item
  const renderOptionItem = (icon: any, option: string, callBack: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          callBack();
        }}>
        <View style={styles.itemOptionStyle}>
          {/* Left Side Rendering */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={icon}
              style={{width: 18, height: 22}}
              resizeMode={'contain'}
            />
            <Text style={[styles.itemTextStyle]}>{option}</Text>
          </View>
          <Image
            source={IC_TURN_RIGHT}
            style={{width: 15, height: 15}}
            resizeMode={'contain'}
          />
        </View>
      </TouchableOpacity>
    );
  };

  // About Health AI Modal
  const renderAboutAppModal = () => {
    return (
      <Modal
        visible={isVisibleAbout}
        animationType="fade"
        transparent={true}
        style={[styles.modalStyle]}>
        <View
          style={[
            styles.modalViewStyle,
            {justifyContent: 'flex-start', height: '65%'},
          ]}>
          <TouchableOpacity
            onPress={() => {
              setIsVisibleAbout(false);
            }}>
            <Image source={IC_CROSS} style={styles.modalCrossIcon} />
          </TouchableOpacity>

          {/* Other COntent */}
          <View style={styles.modalContent}>
            <View style={styles.modalAppIconStyle}>
              <Image
                source={IC_APP_LOGO}
                style={styles.modalAppLogoStyle}
                resizeMode={'contain'}
              />
            </View>
            <Text style={styles.modalAppTitle}>Todo List Sample App</Text>
            <Text style={styles.aboutAppStyle}>{aboutApp}</Text>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {/* render HEader */}
      {renderHeader()}
      {/* render App Lofo and App Name */}
      {appLogoName()}
      {/* render Menu Options */}
      {renderListOptions()}
      {/* Modal to display about app */}
      {renderAboutAppModal()}
    </View>
  );
};

export default AppMenuTab;
