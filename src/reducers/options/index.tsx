import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface OptionsState {
  values: string[];
}

const initialState: OptionsState = {
  values: [
    'React',
    'Angular',
    'Vue',
  ],
};

// We don't want to allow adding options for now
export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {},
});

export const selectOptions = (state: RootState) => state.options.values;

export const optionsReducer = optionsSlice.reducer;
