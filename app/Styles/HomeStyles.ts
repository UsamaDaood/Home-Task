import { StyleSheet } from "react-native";
import Colors from "../libs/Colors";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.backGroundLowWhiteColor,
    flex: 100,
  },
  tabStyle: {
    borderWidth: 0.7,
    borderColor: Colors.primaryColor,
    alignItems: 'center',
    padding: 10,
  },
  listViewStyle: {
    marginTop: 20,
    flex: 1,
    paddingBottom: 30,
    marginHorizontal: 20,
  },
  todoItemStyle: {
    // padding: 10,
    margin: 5,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: Colors.darkGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todoItemTitle: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: 'bold',
  },
  todoItemSubTitle: {
    fontSize: 12,
    color: Colors.darkGray,
    marginTop: 3,
  },
  createTodoViewStyle: {
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center',
    width: '50%',
    padding: 10,
    backgroundColor: Colors.primaryColor,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  plusButtonStyle: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  adddNewTodoTextStyle: {
    color: Colors.whiteColor,
    fontSize: 17,
    fontWeight: 'bold',
  },
  todoModalView: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  todoModalCancelIcon: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
  },
  formInputView: {
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    borderRadius: 20,
    marginTop: 30,
  },
  formInputView_2: {
    padding: 10,
    backgroundColor: Colors.primaryColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  todoCreateText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: Colors.whiteColor,
  },
  inputFormView: {
    marginTop: 30,
    marginBottom: 30,
  },
  buttonStyle: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  priorityTextStyle: {
    color: Colors.whiteColor,
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  priorityViewStyle: {
    flexDirection: 'row',
    padding: 8,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  noRecordFoundStyle: {
    alignItems: 'center',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
  },
  noRecordText: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 14,
  },
  todoItemView: {
    width: 15,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginRight: 20,
  },
  actionViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginHorizontal: 4,
  },
  todoCompletedTextStyle: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  todoStyle: {
    color: Colors.whiteColor,
    fontWeight: 'bold',
  },
  bottomsheetViewStyle: {
    flexDirection: 'column',
    marginHorizontal: 15,
    padding: 10,
  },
  bottomSheetTitle: {
    fontSize: 17,
    color: Colors.redColor,
  },
  bottomSheetQuestion: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  bottomSheetDesc: {
    color: Colors.black,
    fontSize: 14,
  },
  bottomSHeetButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});