import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'channel',
  initialState:{
    channelName:'general'
  },

  reducers: {
      userChannel: (state,action) => {
      state.channel=action.payload
    }
  },
});

export const { userChannel } = appSlice.actions;
export const selectChannel = (state) => state.channel.channel;  
//^^ this tells redux that the reducer which says state.channel and has some payload will be equal to the 'channel' appSlice 
export default appSlice.reducer;