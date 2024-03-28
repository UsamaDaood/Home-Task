import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  todoLists: [],
};

const todoSlice = createSlice({
  name: 'TodoList',
  initialState,
  reducers: {
    createNewTodo: (state, action) => {
      let {data} = action.payload;
      // state.todoLists = [...state.todoLists, data];
      state.todoLists = data;
    },
  },
  extraReducers: builder => {},
});
export const {createNewTodo} = todoSlice.actions;
export const createTodo = todoSlice.reducer;
