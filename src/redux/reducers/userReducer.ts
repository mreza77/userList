import { createSlice } from "@reduxjs/toolkit";
import { deleteUser, updateUser } from '../../utils/helper';

const initialStateObject = {
   users: null,
   selectedUser: null
};

export const getUser = (state: any) => state.user.users
export const getSelectedUser = (state: any) => state.user.selectedUser

export const userSlice = createSlice({
   name: "manageUser",
   initialState: initialStateObject,
   reducers: {
      setUsers: (state, action) => {
         return {
            ...state,
            users: action?.payload?.data?.data,
         };
      },
      selectUser: (state, action) => {
         return {
            ...state,
            selectedUser: action.payload
         }
      },
      deleteUsers: (state, action) => {
         const newUsers = deleteUser(state.users, action?.payload)
         return {
            ...state,
            users: newUsers
         }
      },
      updateUsers: (state, action) => {
         const newUsers = updateUser(state.users, action?.payload)
         return {
            ...state,
            users: newUsers
         }
      }
   },
});

export const {
   setUsers,
   selectUser,
   updateUsers,
   deleteUsers
} = userSlice.actions;

export default userSlice.reducer;
