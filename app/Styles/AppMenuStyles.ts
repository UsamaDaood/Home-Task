import { StyleSheet } from "react-native";
import Colors from "../libs/Colors";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.backGroundLowWhiteColor,
    flex: 100,
  },
  logoViewStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },

  modalStyle: {
    justifyContent: 'center',
    // margin: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalViewStyle: {
    height: '20%',
    // width: '95%',
    marginTop: 'auto',
    backgroundColor: Colors.whiteColor,
    marginHorizontal: 30,
    marginBottom: 14,
    borderRadius: 40,
    padding: 20,
  },
  itemOptionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: 10,
  },
  itemTextStyle: {
    fontSize: 17,
    color: Colors.darkGray,
    marginHorizontal: 10,
  },
  logoStyle: {
    width: 140,
    height: 100,
  },
  appNameStyle: {
    color: Colors.primaryColor,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
  modalCrossIcon: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
  },
  modalContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  modalAppIconStyle: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Colors.primaryDisable,
    padding: 10,
    borderRadius: 10,
  },
  modalAppLogoStyle: {
    width: 200,
    height: 200,
  },
  modalAppTitle: {
    marginVertical: 10,
    fontSize: 19,
    color: Colors.primaryColor,
  },
  aboutAppStyle: {
    color: Colors.black,
    fontSize: 14,
    textAlign: 'center',
  },
});