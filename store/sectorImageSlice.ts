import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


type Sector = 'hizmetsektoru' | 'egitimsektoru' | 'sagliksektoru';

const MEDIA_BASE_URL = 'https://media.settobox.com/images/sektorGorsel';

const sectorImagesMap: Record<Sector, string[]> = {
  hizmetsektoru: [
    `${MEDIA_BASE_URL}/hizmetsektoru/gorsel1.webp`,
    `${MEDIA_BASE_URL}/hizmetsektoru/gorsel2.webp`,
    `${MEDIA_BASE_URL}/hizmetsektoru/gorsel3.webp`,
    `${MEDIA_BASE_URL}/hizmetsektoru/gorsel4.webp`,
    `${MEDIA_BASE_URL}/hizmetsektoru/gorsel5.webp`,
    `${MEDIA_BASE_URL}/hizmetsektoru/gorsel6.webp`,
    `${MEDIA_BASE_URL}/hizmetsektoru/gorsel7.webp`,
    `${MEDIA_BASE_URL}/hizmetsektoru/gorsel8.webp`,
    `${MEDIA_BASE_URL}/hizmetsektoru/gorsel9.webp`,
    `${MEDIA_BASE_URL}/hizmetsektoru/gorsel10.webp`,
    `${MEDIA_BASE_URL}/hizmetsektoru/gorsel11.webp`,
    `${MEDIA_BASE_URL}/hizmetsektoru/gorsel12.webp`,
  ],
  egitimsektoru: [
    `${MEDIA_BASE_URL}/egitimsektoru/gorsel1.webp`,
    `${MEDIA_BASE_URL}/egitimsektoru/gorsel2.webp`,
    `${MEDIA_BASE_URL}/egitimsektoru/gorsel3.webp`,
    `${MEDIA_BASE_URL}/egitimsektoru/gorsel4.webp`,
    `${MEDIA_BASE_URL}/egitimsektoru/gorsel5.webp`,
    `${MEDIA_BASE_URL}/egitimsektoru/gorsel6.webp`,
    `${MEDIA_BASE_URL}/egitimsektoru/gorsel7.webp`,
    `${MEDIA_BASE_URL}/egitimsektoru/gorsel8.webp`,
    `${MEDIA_BASE_URL}/egitimsektoru/gorsel9.webp`,
    `${MEDIA_BASE_URL}/egitimsektoru/gorsel10.webp`,
    `${MEDIA_BASE_URL}/egitimsektoru/gorsel11.webp`,
    `${MEDIA_BASE_URL}/egitimsektoru/gorsel12.webp`,
  ],
  sagliksektoru: [
    // ...
  ],
};

export const fetchSectorImages = createAsyncThunk<string[], Sector>(
  'sectorImages/fetchSectorImages',
  async (sector, { rejectWithValue }) => {
    try {
      return sectorImagesMap[sector];
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An unknown error occurred';
      console.error('Error loading images for sector:', sector, errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

const sectorImagesSlice = createSlice({
  name: 'sectorImages',
  initialState: {
    sectorName: '' as Sector | '',
    images: [] as string[],
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
      .addCase(fetchSectorImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSectorImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchSectorImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSectorName } = sectorImagesSlice.actions;
export default sectorImagesSlice.reducer;
