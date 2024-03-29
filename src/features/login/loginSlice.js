import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchLogin } from './loginAPI';


const initialState = {
  username: '',
  loggedIn: false,
  email:'',
  accessToken:'',
  status:''
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const loginAsync = createAsyncThunk(
  'login/fetchLogin',
  async (payload) => {
    const response = await fetchLogin(payload);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeLoggedStatus: (state) => {
        state.loggedIn = true;
        state.status = 'idle';
    },
    fillUserInfo: (state,action) => {
        state.username = action.payload.username;
        state.email = action.payload.email;
    },
    updateTokenInState: (state,action) => {
        state.accessToken = action.payload;
    },
   
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        // state.status = 'idle';
        // state.loggedIn = true;
        state.accessToken = action.payload['access'];
       
        // console.log(state.username, state.email);
      });
  },
});



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.login.value)`
const selectUsername = (state) => state.login.username;
const selectEmail = (state) => state.login.email;
const selectLoggedIn = (state) => state.login.loggedIn;
const selectAccessToken = (state) => state.login.accessToken;

export {selectEmail,selectLoggedIn,selectUsername,selectAccessToken};
export const {changeLoggedStatus,fillUserInfo,updateTokenInState} = loginSlice.actions;

export default loginSlice.reducer;
