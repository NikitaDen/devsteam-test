import axios from 'axios';

const GET_PHOTOS = 'GET_PHOTOS';
const SET_LOADING = 'SET_LOADING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
  isLoading: true,
  currentPage: 1,
  photos: [],
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: [...action.photos],
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.bool,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      };
    default:
      return {
        ...state
      }
  }
};

export const isLoading = (bool) => ({type: SET_LOADING, bool});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});

export const getPhotos = (photos) => ({type: GET_PHOTOS, photos});
export const getPhotosThunkCreator = (page) => async (dispatch) => {
  const apiKey = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';

  dispatch(isLoading(true));

  try {
    const photos = await axios.get(`https://api.unsplash.com/photos?page=${page}&client_id=${apiKey}`, {
      headers: {
        'Accept-Version': 'v1',
      },
    });
    dispatch(setCurrentPage(page));
    dispatch(getPhotos(photos.data));
  } catch (e) {
    console.warn(e);
  }

  dispatch(isLoading(false));
};

export default galleryReducer;
