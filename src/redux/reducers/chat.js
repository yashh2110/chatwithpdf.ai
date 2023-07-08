const { createSlice } = require("@reduxjs/toolkit");

const initialState = {};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    createChat: (state, { payload }) => {
      const file_id = payload.file_id;
      return {
        [file_id]: {
          convo: payload.convo,
          pdf: payload.pdf,
          name: payload.name,
        },
        ...state,
      };
    },
    sendMessage: (state, { payload }) => {
      const file_id = payload.file_id;
      const chat = state[file_id].convo;
      const pdf = state[file_id].pdf;
      const name = state[file_id].name;
      state[file_id] = { convo: [payload.messageObj, ...chat], pdf, name };
    },
    clearChat: (state, { payload }) => {
      const file_id = payload.file_id;
      const pdf = state[file_id].pdf;
      const name = state[file_id].name;
      state[file_id] = { convo: [], pdf, name };
    },
    deleteChat: (state, { payload }) => {
      const file_id = payload.file_id;
      delete state[file_id];
    },
  },
});

export const { createChat, sendMessage, clearChat, deleteChat } =
  chatSlice.actions;
export default chatSlice.reducer;
