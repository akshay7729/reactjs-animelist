import { SEARCH } from "../Constants";

const initialState = {
  loading: false,
  search: [],
  error: null,
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH.LOAD:
      return {
        ...state,
        loading: true,
      };
    case SEARCH.RESPONSE:
      return {
        ...state,
        loading: false,
        search: action.payload,
      };
    case SEARCH.ERROR:
      return {
        ...state,
        loading: false,
        search: [],
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default SearchReducer;
