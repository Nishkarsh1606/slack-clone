import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
      case "selectChannel":
        return { channel: state.channelName};
      default:
        return state;
    }
}

export default reducer