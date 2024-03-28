import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  Modal,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import moment from 'moment';
//** Components */
import CustomInput from '../../common/Components/CustomInput';
import CustomHeader from '../../common/Components/CustomHeader';
import CustomButton from '../../common/Components/CustomButton';
import {toastShow} from '../../libs/toast';
import {createNewTodo} from '../../features/createNewTodo/todoSlice';
//** Utils */
import Colors from '../../libs/Colors';
import {
  CONST_ALL_LIST,
  CONST_HIGH_PRIORITY,
  CONST_LOW_PRIORITY,
  CONST_MEDIUM_PRIORITY,
  CONST_TAB_TODO,
  priorityHomeLists,
  priorityLists,
} from '../../utils/const';
import {
  IC_CANCEL,
  IC_DELETE_RED,
  IC_DOUBLE_TICK_WHITE,
  IC_PENCIL_EDIT,
  IC_PLUS_WHITE,
  IC_TICK_GREEN,
} from '../../utils/ImageSources';
//** Redux */
import {useDispatch, useSelector} from 'react-redux';
import {styles} from '../../Styles/HomeStyles';

interface HomeProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  //** States */
  const [modalDisplay, setModalDisplay] = useState<boolean>(false);
  const [todoTitle, setTodoTitle] = useState<string>('');
  const [todoDesc, setTodoDesc] = useState<string>('');
  const [todoLists, setTotoLists] = useState<any[]>([]);
  const [priority, setPriority] = useState<string>(CONST_ALL_LIST);
  const [currentItem, setCurrentItem] = useState<any>();
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);
  //** Hooks  */
  const dispatch = useDispatch<any>();
  const refRBSheet = useRef<any>();
  const refRBSheetCompleted = useRef<any>();
  //** Redux */
  const {createTodo} = useSelector((state: {createTodo: any}) => state);
  const {completedTodo} = useSelector((state: {completedTodo: any}) => state);

  /** Effects */
  useEffect(() => {
    console.log('Create Todo List ', createTodo);
    console.log('Completed Todo List ', completedTodo);
  }, []);

  // handle Filteration
  const handleFileration = (filter: string) => {
    var filterationRecord = createTodo?.todoLists
      .filter((item: any) =>
        filter == 'complete'
          ? item.type == 'complete'
          : item.priority == filter,
      )
      .map(({id, date, priority, todoDesc, todoTitle, type}) => ({
        id,
        date,
        priority,
        todoDesc,
        todoTitle,
        type,
      }));

    console.log('Filteration: ', filterationRecord);
    return filterationRecord;
  };

  // render Header
  const renderHeader = () => {
    return <CustomHeader headerTitle="Todo List" />;
  };

  // render content TODO Lists
  const renderListsContent = () => {
    return (
      <View style={styles.listViewStyle}>
        <FlatList
          data={
            priority == CONST_ALL_LIST
              ? createTodo?.todoLists
              : handleFileration(priority)
          }
          keyExtractor={item => item.key.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => renderTODOtem(item, index)}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <View style={styles.noRecordFoundStyle}>
              <Text style={styles.noRecordText}>No Record found</Text>
            </View>
          }
        />
      </View>
    );
  };

  // render TODO item
  const renderTODOtem = (item: any, index: number) => {
    return (
      <View style={styles.todoItemStyle}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.todoItemView,
              {
                backgroundColor: getProrityColor(item?.priority),
              },
            ]}
          />

          <View style={{paddingVertical: 10}}>
            <Text style={styles.todoItemTitle}>{item?.todoTitle}</Text>
            <Text style={styles.todoItemSubTitle}>{item?.todoDesc}</Text>
          </View>
        </View>

        {/* Actions menu buttons */}
        <View style={styles.actionViewStyle}>
          {item?.type == '' ? (
            <View style={{flexDirection: 'row'}}>
              <Pressable
                onPress={() => {
                  setCurrentItem(item);
                  setCurrentItemIndex(index);
                  setTimeout(() => {
                    refRBSheet.current.open();
                  }, 500);
                }}>
                <Image style={styles.iconStyle} source={IC_DELETE_RED} />
              </Pressable>

              <Image style={styles.iconStyle} source={IC_PENCIL_EDIT} />
              <Pressable
                onPress={() => {
                  setCurrentItem(item);
                  setCurrentItemIndex(index);
                  setTimeout(() => {
                    refRBSheetCompleted.current.open();
                  }, 400);
                }}>
                <Image style={styles.iconStyle} source={IC_TICK_GREEN} />
              </Pressable>
            </View>
          ) : (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.todoCompletedTextStyle}>
                <Text style={styles.todoStyle}>ToDo Completed</Text>
              </View>

              <Pressable
                onPress={() => {
                  setCurrentItem(item);
                  setCurrentItemIndex(index);
                  setTimeout(() => {
                    refRBSheet.current.open();
                  }, 500);
                }}>
                <Image style={styles.iconStyle} source={IC_DELETE_RED} />
              </Pressable>
            </View>
          )}
        </View>
      </View>
    );
  };

  // get Priority Color
  const getProrityColor = (priorityTag: string) => {
    if (priorityTag == CONST_LOW_PRIORITY) {
      return Colors.lightBlue;
    } else if (priorityTag == CONST_MEDIUM_PRIORITY) {
      return Colors.lightGreen;
    } else if (priorityTag == CONST_HIGH_PRIORITY) {
      return Colors.redColor;
    }
  };

  // render Add Todo Button
  const renerAddTODOButton = () => {
    return (
      <Pressable
        onPress={() => {
          console.log('Click here');
          setModalDisplay(!modalDisplay);
        }}>
        <View style={styles.createTodoViewStyle}>
          <Image source={IC_PLUS_WHITE} style={styles.plusButtonStyle} />
          <Text style={styles.adddNewTodoTextStyle}>Add New ToDo</Text>
        </View>
      </Pressable>
    );
  };

  // render Add Todo Modal
  const addTodoModal = () => {
    return (
      <Modal visible={modalDisplay} animationType="slide" transparent={true}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.todoModalView}>
            <Pressable
              onPress={() => {
                setModalDisplay(!modalDisplay);
              }}>
              <Image source={IC_CANCEL} style={styles.todoModalCancelIcon} />
            </Pressable>

            <View style={styles.formInputView}>
              <View style={styles.formInputView_2}>
                <Text style={styles.todoCreateText}>Create ToDo</Text>
              </View>

              {/* Input Form */}
              <View style={styles.inputFormView}>
                <CustomInput
                  placeholder="Your Todo Title"
                  viewStyle={{}}
                  onChangeText={(value: string) => {
                    setTodoTitle(value);
                  }}
                />
                <CustomInput
                  placeholder="Any Notes about Todo"
                  viewStyle={{marginTop: 20}}
                  onChangeText={(value: string) => {
                    setTodoDesc(value);
                  }}
                />

                <View
                  style={{
                    flexDirection: 'column',
                    marginHorizontal: 20,
                    marginTop: 15,
                  }}>
                  <Text
                    style={{
                      color: Colors.black,
                      fontSize: 19,
                      fontWeight: 'bold',
                    }}>
                    Priority:
                  </Text>

                  {/* Priority Item */}
                  {renderPriority()}
                  {/* </View> */}
                </View>

                <CustomButton
                  btnString="Create Now"
                  btnStyle={styles.buttonStyle}
                  onClick={() => {
                    createTodoNow();
                  }}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    );
  };

  // render Priority Items
  const renderPriorityItems = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          {priorityHomeLists.map((item: any) => {
            return (
              <Pressable
                onPress={() => {
                  setTotoLists([]);
                  setPriority(item?.tag);
                  handleFileration(item?.tag);
                }}>
                <View style={[styles.priorityViewStyle, item?.style]}>
                  <Text style={styles.priorityTextStyle}>{item?.title}</Text>
                  {priority == item?.tag && (
                    <Image
                      source={IC_DOUBLE_TICK_WHITE}
                      style={{width: 20, height: 20, marginLeft: 5}}
                    />
                  )}
                </View>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    );
  };

  // render Priority Items to create
  const renderPriority = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          {priorityLists.map((item: any) => {
            return (
              <Pressable
                onPress={() => {
                  // setTotoLists([]);
                  setPriority(item?.tag);
                  // handleFileration(item?.tag);
                }}>
                <View style={[styles.priorityViewStyle, item?.style]}>
                  <Text style={styles.priorityTextStyle}>{item?.title}</Text>
                  {priority == item?.tag && (
                    <Image
                      source={IC_DOUBLE_TICK_WHITE}
                      style={{width: 20, height: 20, marginLeft: 5}}
                    />
                  )}
                </View>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    );
  };

  // create Todo
  const createTodoNow = () => {
    if (todoTitle.trim().length == 0) {
      toastShow('error', 'ToDo Title is empty.');
    } else if (todoDesc.trim().length == 0) {
      toastShow('error', 'ToDo description is empty.');
    } else {
      // adding to Redux Toolkit.
      let value = {
        id: Number(createTodo?.todoLists.length),
        todoTitle: todoTitle,
        todoDesc: todoDesc,
        date: moment(new Date()).format('YYYY-MM-DD'),
        type: '',
        priority: priority,
      };
      var arr = [...createTodo?.todoLists];
      arr.unshift(value);

      let ChangeObj = {
        data: arr,
      };
      dispatch(createNewTodo(ChangeObj));
      setModalDisplay(false);
      setPriority(CONST_ALL_LIST);
    }
  };

  // Add Completed Todo Item
  const addTodoCompleteItem = () => {
    var arr = JSON.parse(JSON.stringify(createTodo?.todoLists));
    arr[currentItemIndex].type = 'complete';

    let ChangeObj = {
      data: arr,
    };
    dispatch(createNewTodo(ChangeObj));
    refRBSheetCompleted.current.close();
  };

  // delete Todo:
  const deleteTodoItem = () => {
    var arr = JSON.parse(JSON.stringify(createTodo?.todoLists));
    arr.splice(currentItemIndex, 1);

    let ChangeObj = {
      data: arr,
    };
    dispatch(createNewTodo(ChangeObj));
    refRBSheet.current.close();
  };

  // render Delete Bottom Sheet
  const renderDeleteBottomSheet = () => {
    return (
      <RBSheet
        ref={refRBSheet}
        height={200}
        customStyles={{
          container: {
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          },
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: Colors.black,
          },
        }}>
        <View style={styles.bottomsheetViewStyle}>
          <Text style={styles.bottomSheetTitle}>Delete ToDo</Text>

          <Text style={styles.bottomSheetQuestion}>
            Are you sure to delete this todo?
          </Text>
          <Text style={styles.bottomSheetDesc}>{currentItem?.todoTitle}</Text>
          <Text>{currentItem?.todoDesc}</Text>

          {/* Button View */}
          <View style={styles.bottomSHeetButtonView}>
            <CustomButton
              btnStyle={{flex: 0.4, backgroundColor: Colors.redColor}}
              btnString={'Delete'}
              onClick={() => {
                deleteTodoItem();
              }}
            />
            <CustomButton
              btnStyle={{flex: 0.4}}
              btnString={'Cancel'}
              onClick={() => {
                refRBSheet.current.close();
              }}
            />
          </View>
        </View>
      </RBSheet>
    );
  };

  // render Delete Bottom Sheet
  const renderMarkBottomSheet = () => {
    return (
      <RBSheet
        ref={refRBSheetCompleted}
        height={200}
        customStyles={{
          container: {
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          },
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View style={styles.bottomsheetViewStyle}>
          <Text style={styles.bottomSheetTitle}>ToDo Mark as Completed</Text>

          <Text style={styles.bottomSheetQuestion}>
            Are you sure to mark this as completed?
          </Text>
          <Text style={styles.bottomSheetDesc}>{currentItem?.todoTitle}</Text>
          <Text>{currentItem?.todoDesc}</Text>

          {/* Button View */}
          <View style={styles.bottomSHeetButtonView}>
            <CustomButton
              onClick={() => {
                addTodoCompleteItem();
              }}
              btnStyle={{flex: 0.4, backgroundColor: Colors.lightGreen}}
              btnString={'Mark Completed'}
            />
            <CustomButton
              btnStyle={{flex: 0.4}}
              btnString={'Cancel'}
              onClick={() => {
                refRBSheetCompleted.current.close();
              }}
            />
          </View>
        </View>
      </RBSheet>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {/* render Header */}
      {renderHeader()}

      {/* render Prority Item for Filteration */}
      <View style={{marginVertical: 8, marginHorizontal: 20}}>
        <Text style={{fontSize: 19, color: Colors.black, fontWeight: 'bold'}}>
          Filter By
        </Text>
        {renderPriorityItems()}
      </View>

      {/* render Todo Lists */}
      {renderListsContent()}

      {/* Render Add TODO Button */}
      {renerAddTODOButton()}

      {/* render RN modal */}
      {addTodoModal()}
      {/* render Delete Bottom Sheet */}
      {renderDeleteBottomSheet()}
      {/* render Mark Completed Bottom Sheet */}
      {renderMarkBottomSheet()}
    </View>
  );
};

export default HomeScreen;
