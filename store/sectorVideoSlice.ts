import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


type Sector = 'hizmetsektoru' | 'egitimsektoru' | 'sagliksektoru';

const sectorVideosMap: Record<Sector, string[]> = {
  hizmetsektoru: [
    '/videos/sektorVideo/hizmetsektoru/video1.mp4',
    '/videos/sektorVideo/hizmetsektoru/video2.mp4',
    '/videos/sektorVideo/hizmetsektoru/video3.mp4',
    '/videos/sektorVideo/hizmetsektoru/video4.mp4',

    '/videos/sektorVideo/hizmetsektoru/video6.mp4',
  ],
  egitimsektoru: [
    '/videos/sektorVideo/egitimsektoru/video1.mp4',
    '/videos/sektorVideo/egitimsektoru/video2.mp4',
    '/videos/sektorVideo/egitimsektoru/video3.mp4',
    '/videos/sektorVideo/egitimsektoru/video4.mp4',
    '/videos/sektorVideo/egitimsektoru/video5.mp4',
  ],
  sagliksektoru: [
    // ...
  ],
};

export const fetchSectorVideos = createAsyncThunk<string[], Sector>(
  'sectorVideos/fetchSectorVideos',
  async (sector, { rejectWithValue }) => {
    try {
      return sectorVideosMap[sector];
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An unknown error occurred';
      console.error('Error loading videos for sector:', sector, errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

const sectorVideosSlice = createSlice({
  name: 'sectorVideos',
  initialState: {
    sectorName: '' as Sector | '',
    videos: [] as string[],
    loading: false,
    error: null as string | null,
  },
  reducers: {
    setSectorName: (state, action: { payload: Sector }) => {
      state.sectorName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSectorVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSectorVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(fetchSectorVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSectorName } = sectorVideosSlice.actions;
export default sectorVideosSlice.reducer;
