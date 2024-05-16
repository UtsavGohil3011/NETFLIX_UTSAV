import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle", // Initial state
};

// Async action to fetch products from API
export const fetchMovie = createAsyncThunk("product/fetch", async () => {
  const res = await fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies");
  const data = await res.json();
  return data;
});






// Slice for managing product state
const getData = createSlice({
  name: "movies",
  initialState,
  reducers: {}, // No extra reducers
  extraReducers: (builder) => {
    // Handling pending state during data fetch
    builder.addCase(fetchMovie.pending, (state, action) => {
      state.status = "loading"; // Loading state
    });
    // Handling successful data fetch
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.status = "idle"; // Idle state after successful fetch
      state.data = action.payload; // Updating state with fetched data
    });
    // Handling error during data fetch
    builder.addCase(fetchMovie.rejected, (state, action) => {
      state.status = "error"; // Error state
    });
  },
});

// Exporting actions
export const { setMovies, setStatus } = getData.actions;

// Exporting reducer
export default getData.reducer;
