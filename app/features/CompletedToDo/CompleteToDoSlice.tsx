import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  completedTodoLists: [],
};

const completeTodoSlice = createSlice({
  name: 'CompleteTodoList',
  initialState,
  reducers: {
    completedTodoList: (state, action) => {
      let {data} = action.payload;
      state.completedTodoLists = data;
    },
  },
  extraReducers: builder => {},
});
export const {completedTodoList} = completeTodoSlice.actions;
export const completedTodo = completeTodoSlice.reducer;
