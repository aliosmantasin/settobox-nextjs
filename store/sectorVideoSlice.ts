import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


type Sector = 'hizmetsektoru' | 'egitimsektoru' | 'sagliksektoru';

// const MEDIA_BASE_URL = 'https://media.settobox.com/videos/sektorVideo';

// const sectorVideosMap: Record<Sector, string[]> = {
//   hizmetsektoru: [
//     `${MEDIA_BASE_URL}/hizmetsektoru/video1.mp4`,
//     `${MEDIA_BASE_URL}/hizmetsektoru/video2.mp4`,
//     `${MEDIA_BASE_URL}/hizmetsektoru/video3.mp4`,
//     `${MEDIA_BASE_URL}/hizmetsektoru/video4.mp4`,
//     `${MEDIA_BASE_URL}/hizmetsektoru/video6.mp4`,
//   ],
//   egitimsektoru: [
//     `${MEDIA_BASE_URL}/egitimsektoru/video1.mp4`,
//     `${MEDIA_BASE_URL}/egitimsektoru/video2.mp4`,
//     `${MEDIA_BASE_URL}/egitimsektoru/video3.mp4`,
//     `${MEDIA_BASE_URL}/egitimsektoru/video4.mp4`,
//     `${MEDIA_BASE_URL}/egitimsektoru/video5.mp4`,
//   ],
//   sagliksektoru: [
//     // ...
//   ],
// };

const sectorVideosMap: Record<Sector, string[]> = {
  hizmetsektoru: [
    `https://res.cloudinary.com/dydji2imy/video/upload/v1742057436/video1_gxlkr8.mp4`,
    `https://res.cloudinary.com/dydji2imy/video/upload/v1742057439/video2_kjqd68.mp4`,
    `https://res.cloudinary.com/dydji2imy/video/upload/v1742057451/video3_sfhbpb.mp4`,
    `https://res.cloudinary.com/dydji2imy/video/upload/v1742057443/video4_tl2l4l.mp4`,
    `https://res.cloudinary.com/dydji2imy/video/upload/v1742057441/video5_j4adfx.mp4`,
    `https://res.cloudinary.com/dydji2imy/video/upload/v1742057447/video6_cg015b.mp4`,
   
  ],
  egitimsektoru: [
    `https://res.cloudinary.com/dydji2imy/video/upload/v1742057478/video1_wo1co5.mp4`,
    `https://res.cloudinary.com/dydji2imy/video/upload/v1742057497/video2_g7okwo.mp4`,
    `https://res.cloudinary.com/dydji2imy/video/upload/v1742057475/video3_mg5yhl.mp4`,
    `https://res.cloudinary.com/dydji2imy/video/upload/v1742057488/video4_x3xqza.mp4`,
    `https://res.cloudinary.com/dydji2imy/video/upload/v1742057489/video5_njg3in.mp4`,

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
