import { StyleSheet } from "react-native";
import Colors from "../libs/Colors";

export const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.primaryColor,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formViewStyle: {
    marginTop: 40,
    borderWidth: 6,
    borderColor: Colors.primaryColor,
    paddingVertical: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  headingText: {
    fontSize: 19,
    color: Colors.black,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  logoStyle: {
    alignSelf: 'center',
    width: '80%',
    height: 100,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: Colors.primaryColor,
    padding: 10,
    marginVertical: 20,
  },
  inputTitle: {
    color: Colors.primaryColor,
    fontWeight: 'bold',
    marginHorizontal: 10,
    fontSize: 18,
    marginVertical: 7,
  },
});