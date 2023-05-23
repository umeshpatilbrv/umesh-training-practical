import { createSlice } from "@reduxjs/toolkit";
type InitalProps = {
  value: number;
  remaining: number;
  glassQuantity: number;
  array: number[];
  id: number;
};
const initialState: InitalProps = {
  value: 0,
  remaining: 2000,
  glassQuantity: 250,
  array: [],
  id: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    IdManager: (state, actions) => {
      state.id = actions.payload;
    },
  
    reset: (state) => {
      state.value = 0;
      state.remaining = 2000;
    },
    selectedGlassSize: (state, actions) => {
      state.glassQuantity = actions.payload;
    },
 
    increment1: (state, actions) => {

      state.value = state.glassQuantity;
     
      if (
        actions.payload.btnclick === false &&
        state.remaining >= 0 &&
        state.remaining <= 2000
      ) {
      
        let dataValue = state.value * actions.payload.id;
      
        state.remaining = 2000 - dataValue;
       
        if (actions.payload.id === 8) {
          state.remaining = 0;
        }
     
      }

      if (
        actions.payload.btnclick === true &&
        state.remaining <= 2000 &&
        actions.payload.id < 8
   
      ) {
      
        state.remaining = state.remaining + state.value;

      }

   
    },
    incr2: (state, actions) => {
      state.value = actions.payload.glassQuantity;
    
      if (state.remaining >= 0 && state.remaining !== 0) {
        let dataValue = state.value * actions.payload.count;
        state.remaining = 2000 - dataValue;
      }
    },

   
  },
});

export const {
  selectedGlassSize,
  increment1,
  incr2,
  reset,
  IdManager,

} = counterSlice.actions;

export default counterSlice.reducer;
