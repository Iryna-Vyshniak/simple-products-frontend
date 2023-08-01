import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllPosts, getDetailsPost } from './thunks';

const initialState = {
  items: [],
  postDetails: null,
  popularPosts: [],
  currentPage: 1,
  totalPages: 0,
  limit: null,
  isLoading: false,
  error: null,
};

const customArrThunks = [getAllPosts, getDetailsPost];

const status = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const fn = (status) => customArrThunks.map((el) => el[status]);

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload.posts;
  state.popularPosts = payload.popularPosts;
  state.currentPage = payload.currentPage;
  state.totalPages = payload.totalPages;
};
const handleFulfilledDetails = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.postDetails = payload;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    const { pending, rejected } = status;

    builder
      .addCase(getAllPosts.fulfilled, handleFulfilled)
      .addCase(getDetailsPost.fulfilled, handleFulfilledDetails)
      .addMatcher(isAnyOf(...fn(pending)), handlePending)
      .addMatcher(isAnyOf(...fn(rejected)), handleRejected);
  },
});

export const postReducer = postSlice.reducer;
