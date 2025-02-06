import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


type Sector = 'hizmetsektoru' | 'egitimsektoru' | 'sagliksektoru';

const sectorImagesMap: Record<Sector, string[]> = {
  hizmetsektoru: [
    '/images/sektorGorsel/hizmetsektoru/gorsel1.webp',
    '/images/sektorGorsel/hizmetsektoru/gorsel2.webp',
    '/images/sektorGorsel/hizmetsektoru/gorsel3.webp',
    '/images/sektorGorsel/hizmetsektoru/gorsel4.webp',
    '/images/sektorGorsel/hizmetsektoru/gorsel5.webp',
    '/images/sektorGorsel/hizmetsektoru/gorsel6.webp',
    '/images/sektorGorsel/hizmetsektoru/gorsel7.webp',
    '/images/sektorGorsel/hizmetsektoru/gorsel8.webp',
    '/images/sektorGorsel/hizmetsektoru/gorsel9.webp',
    '/images/sektorGorsel/hizmetsektoru/gorsel10.webp',
    '/images/sektorGorsel/hizmetsektoru/gorsel11.webp',
    '/images/sektorGorsel/hizmetsektoru/gorsel12.webp',
  
  ],
  egitimsektoru: [
    '/images/sektorGorsel/egitimsektoru/gorsel1.webp',
    '/images/sektorGorsel/egitimsektoru/gorsel7.webp',
    '/images/sektorGorsel/egitimsektoru/gorsel2.webp',
    '/images/sektorGorsel/egitimsektoru/gorsel3.webp',
    '/images/sektorGorsel/egitimsektoru/gorsel4.webp',
    '/images/sektorGorsel/egitimsektoru/gorsel5.webp',
    '/images/sektorGorsel/egitimsektoru/gorsel6.webp',
    '/images/sektorGorsel/egitimsektoru/gorsel8.webp',
    '/images/sektorGorsel/egitimsektoru/gorsel9.webp',
    '/images/sektorGorsel/egitimsektoru/gorsel11.webp',
    '/images/sektorGorsel/egitimsektoru/gorsel10.webp',
    '/images/sektorGorsel/egitimsektoru/gorsel12.webp',
    
    
   
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
