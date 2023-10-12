// filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
  filterValue: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFilterState,
  reducers: {
    setFilterValue: (state, action) => {
      state.filterValue = action.payload;
    },

  },
});

export const { setFilterValue } = filtersSlice.actions;

export default filtersSlice.reducer;
