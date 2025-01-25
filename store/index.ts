import { configureStore } from '@reduxjs/toolkit';
import sectorReducer from './sectorSlice';
import sectorImagesReducer from './sectorImageSlice'
import sectorVideosReducer from './sectorVideoSlice'

const store = configureStore({
  reducer: {
    sector: sectorReducer,
    sectorImages: sectorImagesReducer,
    sectorVideos: sectorVideosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
