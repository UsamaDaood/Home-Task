import Colors from '../libs/Colors';

export const CONST_TAB_TODO = 'tab_todo',
  CONST_TAB_TODO_COMPLETED = 'tab_todo_completed';
export const CONST_LOW_PRIORITY = 'low_priority',
  CONST_MEDIUM_PRIORITY = 'medium_priority',
  CONST_HIGH_PRIORITY = 'high_priority',
  CONST_COMPLETE_TASK = 'complete',
  CONST_ALL_LIST = 'all_list';
export const privacyPolicy = 'www.google.com';
export const aboutApp = `This to-do app is a software application designed to help users manage tasks, reminders, and deadlines. These apps are commonly used for personal organization, project management, and productivity enhancement.`;

export const priorityLists = [
  {
    id: 1,
    title: 'Low',
    style: {backgroundColor: Colors.lightBlue},
    tag: CONST_LOW_PRIORITY,
  },
  {
    id: 2,
    title: 'Medium',
    style: {backgroundColor: Colors.lightGreen},
    tag: CONST_MEDIUM_PRIORITY,
  },
  {
    id: 3,
    title: 'High',
    style: {backgroundColor: Colors.redColor},
    tag: CONST_HIGH_PRIORITY,
  },
];

export const priorityHomeLists = [
  {
    id: 1,
    title: 'All',
    style: {backgroundColor: Colors.primaryColor},
    tag: CONST_ALL_LIST,
  },
  {
    id: 2,
    title: 'Complete',
    style: {backgroundColor: Colors.primaryColor},
    tag: CONST_COMPLETE_TASK,
  },
  {
    id: 3,
    title: 'Low',
    style: {backgroundColor: Colors.lightBlue},
    tag: CONST_LOW_PRIORITY,
  },
  {
    id: 4,
    title: 'Medium',
    style: {backgroundColor: Colors.lightGreen},
    tag: CONST_MEDIUM_PRIORITY,
  },
  {
    id: 5,
    title: 'High',
    style: {backgroundColor: Colors.redColor},
    tag: CONST_HIGH_PRIORITY,
  },
];
