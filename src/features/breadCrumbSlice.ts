import { createSlice } from "@reduxjs/toolkit";

interface IBreadCrumbState {
  breadCrumb: IBreadCrumb[];
}

const initialState: IBreadCrumbState = {
  breadCrumb: [],
};

export const breadCrumbSlice = createSlice({
  name: "breadCrumb",
  initialState,
  reducers: {
    setBreadCrumb: (state, action) => {
      state.breadCrumb = action.payload;
    },
    clearBreadCrumb: (state) => {
      state.breadCrumb = [];
    },
  },
});

export const { setBreadCrumb, clearBreadCrumb } = breadCrumbSlice.actions;
export const breadCrumbReducer = breadCrumbSlice.reducer;
