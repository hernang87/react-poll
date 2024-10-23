import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface Option {
  name: string;
  votes: number;
}

export interface OptionsState {
  values: Option[];
}

const initialState: OptionsState = {
  values: [
    {
      name: "React",
      votes: 0,
    },
    {
      name: "Vue",
      votes: 0,
    },
    {
      name: "Angular",
      votes: 0,
    }
  ],
};

// We don't want to allow adding options for now
export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    vote: (state, action) => {
      return {
        ...state,
        values: state.values.map((value) => {
          if (value.name === action.payload.name) {
            return {
              ...value,
              votes: value.votes + 1,
            };
          }
          return value;
        }),
      }
    }
  },
});

export const { vote } = optionsSlice.actions;

export const selectPollOptions = (state: RootState) => state.options.values;

export const pollOptionsReducer = optionsSlice.reducer;
