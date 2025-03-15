import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


type Sector = 'hizmetsektoru' | 'egitimsektoru' | 'sagliksektoru';

// const MEDIA_BASE_URL = 'https://media.settobox.com/images/sektorGorsel';

// const sectorImagesMap: Record<Sector, string[]> = {
//   hizmetsektoru: [
//     `${MEDIA_BASE_URL}/hizmetsektoru/gorsel1.webp`,
//     `${MEDIA_BASE_URL}/hizmetsektoru/gorsel2.webp`,
//     `${MEDIA_BASE_URL}/hizmetsektoru/gorsel3.webp`,
//     `${MEDIA_BASE_URL}/hizmetsektoru/gorsel4.webp`,
//     `${MEDIA_BASE_URL}/hizmetsektoru/gorsel5.webp`,
//     `${MEDIA_BASE_URL}/hizmetsektoru/gorsel6.webp`,
//     `${MEDIA_BASE_URL}/hizmetsektoru/gorsel7.webp`,
//     `${MEDIA_BASE_URL}/hizmetsektoru/gorsel8.webp`,
//     `${MEDIA_BASE_URL}/hizmetsektoru/gorsel9.webp`,
//     `${MEDIA_BASE_URL}/hizmetsektoru/gorsel10.webp`,
//     `${MEDIA_BASE_URL}/hizmetsektoru/gorsel11.webp`,
//     `${MEDIA_BASE_URL}/hizmetsektoru/gorsel12.webp`,
//   ],
//   egitimsektoru: [
//     `${MEDIA_BASE_URL}/egitimsektoru/gorsel1.webp`,
//     `${MEDIA_BASE_URL}/egitimsektoru/gorsel2.webp`,
//     `${MEDIA_BASE_URL}/egitimsektoru/gorsel3.webp`,
//     `${MEDIA_BASE_URL}/egitimsektoru/gorsel4.webp`,
//     `${MEDIA_BASE_URL}/egitimsektoru/gorsel5.webp`,
//     `${MEDIA_BASE_URL}/egitimsektoru/gorsel6.webp`,
//     `${MEDIA_BASE_URL}/egitimsektoru/gorsel7.webp`,
//     `${MEDIA_BASE_URL}/egitimsektoru/gorsel8.webp`,
//     `${MEDIA_BASE_URL}/egitimsektoru/gorsel9.webp`,
//     `${MEDIA_BASE_URL}/egitimsektoru/gorsel10.webp`,
//     `${MEDIA_BASE_URL}/egitimsektoru/gorsel11.webp`,
//     `${MEDIA_BASE_URL}/egitimsektoru/gorsel12.webp`,
//   ],
//   sagliksektoru: [
//     // ...
//   ],
// };


const sectorImagesMap: Record<Sector, string[]> = {
  hizmetsektoru: [
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742054111/gorsel1_uazabg.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742054110/gorsel2_bnpfsk.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742054111/gorsel3_dmhwk9.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742054111/gorsel4_xvaws5.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742054112/gorsel5_o5vkic.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742054112/gorsel6_qrbgdb.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742054113/gorsel7_msskyn.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742054114/gorsel8_xfzhtm.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742054115/gorsel9_x0a8of.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742054115/gorsel10_bjen4w.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742054116/gorsel11_ssyvlv.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742054116/gorsel12_k8ifg5.webp`,
  ],
  egitimsektoru: [
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742055980/gorsel1_jevzqv.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742055980/gorsel2_wsshns.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742055980/gorsel3_xckjyp.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742055980/gorsel4_nbrebp.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742055981/gorsel5_fvksfu.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742055981/gorsel6_y5cecs.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742055981/gorsel7_uye9uv.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742055981/gorsel8_mgisn1.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742055982/gorsel9_rqz0lt.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742055982/gorsel10_ybaxea.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742055983/gorsel11_abcfmv.webp`,
    `https://res.cloudinary.com/dydji2imy/image/upload/v1742055983/gorsel12_u9bhng.webp`,
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
