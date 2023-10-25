import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import productReducer from "./slices/product";
import newsReducer from "./slices/news";
import brandReducer from "./slices/brand";
import categoryReducer from "./slices/category";
// ----------------------------------------------------------------------

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

export const productPersistConfig = {
  key: 'product',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout'],
};

const rootReducer = combineReducers({
  product: productReducer,
   brand: brandReducer,
  news: newsReducer,
  category:categoryReducer
});

export default rootReducer;
